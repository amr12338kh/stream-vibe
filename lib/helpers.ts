import { CrewMember, FeaturesDataProps, GenresProps } from "@/types/types";
import { getAllGenres } from "./utils";
// import { getAllGenres } from "./utils";
// import { getAllGenres } from "./utils";

// Helper function to get the correct value for each feature
export const getFeatureValue = (
  plan: string,
  feature: string,
  data: FeaturesDataProps[]
) => {
  const planData = data.find((item) => item.plan === plan);
  if (!planData) return "";

  switch (feature) {
    case "Price":
      return `$${planData.price}/Month`;
    case "Content":
      return planData.content;
    case "Devices":
      return planData.devices;
    case "Free Trial":
      return `${planData.free_trail} Days`;
    case "Cancel Anytime":
      return planData.cancel_anytime ? "Yes" : "No";
    case "HDR":
      return planData.hdr ? "Yes" : "No";
    case "Dolby Atmos":
      return planData.dolby_atmos ? "Yes" : "No";
    case "Ad - Free":
      return planData.ad_free ? "Yes" : "No";
    case "Offline Viewing":
      return planData.offline_viewing || "No";
    case "Family Sharing":
      return planData.family_sharing || "No";
    default:
      return "";
  }
};

export const formatDuration = (minutes: number): string => {
  if (!minutes || typeof minutes !== "number") return "N/A";

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (hours > 0) {
    return `${hours}h ${remainingMinutes}m`;
  }
  return `${minutes}m`;
};

// Helper functions
export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const formatVoteCount = (count: number) => {
  if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
  if (count >= 1000) return `${(count / 1000).toFixed(1)}k`;
  return count.toString();
};

export const formatPopularity = (number: number): string => {
  if (number >= 1000000000) {
    return (number / 1000000000).toFixed(1) + "B";
  }
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M";
  }
  if (number >= 1000) {
    return (number / 1000).toFixed(1) + "k";
  }
  return number.toFixed();
};

// Get Image Paths
export const getImagePath = (imagePath?: string, fullSize?: boolean) => {
  return imagePath
    ? `https://image.tmdb.org/t/p/${
        fullSize ? "original" : "w500"
      }/${imagePath}`
    : "https://knetic.org.uk/wp-content/uploads/2020/07/Pcture-Placeholder.png";
};

export const getFlagUrl = (isoCode: string) =>
  `https://flagcdn.com/w40/${isoCode.toLowerCase()}.png` ||
  "https://knetic.org.uk/wp-content/uploads/2020/07/Pcture-Placeholder.png";

export const getFirstGenreName = (
  genreIds: number[],
  genres: GenresProps[] | undefined
): string => {
  if (!genreIds?.length || !genres?.length) return "Unknown";
  const firstGenreId = genreIds[0];
  const genre = genres.find((g) => g.id === firstGenreId);
  return genre?.name || "Unknown";
};

export const getFirstGenreId = (
  genreIds: number[],
  genres?: GenresProps[]
): number | undefined => {
  if (!genreIds?.length || !genres?.length) return;
  return genres.find((g) => g.id === genreIds[0])?.id;
};

// Function to get the director
export const getDirector = (crew: CrewMember[]) => {
  const director = crew?.find((member) => member.job === "Director");
  return director;
};

// Function to get the composer
export const getWriter = (crew: CrewMember[]) => {
  const writer = crew?.find((member) => member.job === "Writer");
  return writer;
};

// Helper function to check if the current path matches the nav item
export const isActiveLink = (navLink: string, pathname: string) => {
  // If it's the home page
  if (navLink === "/") {
    return pathname === "/";
  }
  // For other routes, check if pathname starts with the navLink
  return pathname.startsWith(navLink);
};

let genresCache: { id: number; name: string }[] | null = null;

// Helper function to get all genres and cache them
const getAndCacheGenres = async () => {
  if (!genresCache) {
    const genres = await getAllGenres();
    genresCache = genres;
  }
  return genresCache;
};

// Helper function to get genre name from ID
export const getGenreNameById = async (
  genreId: string | number
): Promise<string> => {
  try {
    const genres = await getAndCacheGenres();
    const genre = genres.find((g) => g.id === Number(genreId));

    if (!genre) {
      throw new Error(`Genre with ID "${genreId}" not found`);
    }

    return genre.name;
  } catch (error) {
    console.error(`Failed to get genre name for ID ${genreId}: `, error);
    throw error;
  }
};

// Helper function to format genre name for display (capitalizes first letter of each word)
export const formatGenreName = (genreName: string): string => {
  return genreName
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};
