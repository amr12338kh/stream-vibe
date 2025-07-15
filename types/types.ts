import { EmblaCarouselType } from "embla-carousel";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons/lib";

// ===== Header Links =====
export interface HeaderLinksProps {
  name: string;
  link: string;
  icon?: LucideIcon | IconType | string;
}

// ===== Carousel Components =====
export interface EmblaCarouselProps {
  movies?: Movie[];
  movie?: MovieDetails;
  title?: string;
  slidesToScroll?: number;
  subtitle?: string;
  loop?: boolean;
  autoplay?: boolean;
  single?: boolean;
  children?: React.ReactNode;
  className?: string;
  dragFree?: boolean;
  isWide?: boolean;
}

export interface SlidesSwitchProps {
  emblaApi: EmblaCarouselType | undefined;
  variant?: "default" | "banner" | "information";
  showDots?: boolean;
  className?: string;
  buttonClassName?: string;
  dotsClassName?: string;
}

// ===== Movie Components =====
export interface MovieCardProps {
  movie: Movie;
  number?: number;
  isGenre?: boolean;
  isWide?: boolean;
  isTop?: boolean;
}

export interface Movie {
  adult: boolean;
  backdrop_path: ImagePath;
  genre_ids: number[];
  id: number;
  original_language: LanguageCode;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: ImagePath;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  cast: CastMember[];
  crew: CrewMember[];
}

// ===== Genre Components =====
export interface GenreCardProps {
  isGenre?: boolean;
  isTopGenre?: boolean;
  genreName?: string;
  genreId?: number;
  genres?: GenresProps[];
  movies?: Movie[];
  isWide?: boolean;
}

export interface GenresProps {
  id: number;
  name: string;
}

// ===== People (Cast & Crew) =====
export interface Person {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: string | null;
  gender: number;
  homepage: string | null;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string | null;
}

export interface CastMember extends Person {
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface CrewMember extends Person {
  credit_id: string;
  department: string;
  job: string;
}

// ===== Reviews =====
export interface MovieReviewResponse {
  results: MovieReview[];
}

export interface MovieReview {
  author: string;
  author_details: AuthorDetails;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

export interface AuthorDetails {
  name: string;
  username: string;
  avatar_path: string | null;
  rating: number | null;
}

// ===== UI Components =====
export interface DevicesCardProps {
  icon: LucideIcon | IconType;
  title: string;
  content: string;
}

export interface FaqDataProps {
  index?: number;
  title: string;
  content: string;
}

export interface PricingDataProps {
  title: string;
  description: string;
  monthly_price: number;
  yearly_price: number;
}

// ===== Footer & Links =====
export interface LinksProps {
  title: string | IconType;
  link: string;
}

export interface FooterLinksProps {
  title: string;
  links: LinksProps[];
}

// ===== Others =====
export interface CountryProps {
  name: string;
  dialCode: string;
  isoCode: string;
}

export interface CountryPhoneCodes {
  [key: string]: string;
}

export interface FeaturesDataProps {
  plan: string;
  price: number;
  content: string;
  devices: string;
  free_trail: number;
  cancel_anytime: boolean;
  hdr: boolean;
  dolby_atmos: boolean;
  ad_free: boolean;
  offline_viewing: boolean | string;
  family_sharing: boolean | string;
  isPopular?: boolean;
}

export interface FormFieldProps {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface TMDBResponse {
  page: number;
  results: Movie[];
  genres: GenresProps[];
  total_pages: number;
  total_results: number;
}

export interface TMDBError {
  status_message: string;
  status_code: number;
}

export type cardTypeProps = "must" | "genre" | "top_genre" | "default" | "wide";

type ImagePath = string | null;
type LanguageCode = string;
