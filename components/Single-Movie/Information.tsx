import React from "react";
import Cast from "./Cast";
import InformationContainer from "./InformationContainer";
import Reviews from "./Reviews";
import { Calendar, LayoutGrid, Star } from "lucide-react";
import { MdOutlineTranslate } from "react-icons/md";
import { CrewMember, MovieDetails, MovieReview } from "@/types/types";
import { formatDate, getWriter, getDirector } from "@/lib/helpers";
import { getPersonDetails } from "@/lib/utils";
import { HeadingTitle } from "../ui/title";
import PersonCard from "./PersonCard";
import RatingCard from "./RatingCard";
import Link from "next/link";

const Information = async ({
  movie,
  credits,
  reviews,
}: {
  movie: MovieDetails;
  credits: MovieDetails;
  reviews: MovieReview[];
}) => {
  const rating = movie.vote_average.toFixed(1).toString();

  const director: CrewMember | null = getDirector(credits?.crew) || null;
  const writer: CrewMember | null = getWriter(credits?.crew) || null;

  const directorPerson = director?.id
    ? await getPersonDetails(director.id.toString())
    : null;
  const writerPerson = writer?.id
    ? await getPersonDetails(writer.id.toString())
    : null;

  return (
    <div className="flex flex-col xl:grid xl:grid-cols-3 gap-6">
      <div className="xl:col-span-2 flex flex-col gap-y-8">
        <InformationContainer title="description">
          <p className="text-sm sm:text-base md:text-lg">{movie.overview}</p>
        </InformationContainer>

        <div className="hidden lg:block">
          <Cast cast={credits.cast} />
        </div>

        <div className="hidden lg:block">
          <Reviews reviews={reviews} />
        </div>
      </div>

      <div>
        <InformationContainer className="space-y-8">
          <div className="space-y-4">
            <HeadingTitle icon={Calendar} title="released year" />
            <p>{formatDate(movie.release_date)}</p>
          </div>

          <div className=" space-y-4">
            <HeadingTitle
              icon={MdOutlineTranslate}
              title="available languages"
            />
            <div className="flex flex-wrap gap-2">
              {movie.spoken_languages.map((language, index) => (
                <span
                  key={index}
                  className="py-2 px-3 rounded-lg bg-black-8 border border-black-15 text-sm sm:text-base"
                >
                  {language.english_name}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4 w-full">
            <HeadingTitle icon={Star} title="ratings" />
            <div className="flex w-full flex-wrap gap-3 sm:gap-5">
              <RatingCard platform="IMDB" rating={rating} />
              <RatingCard platform="StreamVibe" rating={rating} />
            </div>
          </div>

          <div className=" space-y-4">
            <HeadingTitle icon={LayoutGrid} title="genres" />
            <div className="flex flex-wrap gap-2">
              {movie.genres.map((genre, index) => (
                <Link
                  href={`/movies/genre/${genre.id}`}
                  key={index}
                  className="py-2 px-3 rounded-lg bg-black-8 border border-black-15 text-sm sm:text-base"
                >
                  {genre.name}
                </Link>
              ))}
            </div>
          </div>

          {director && (
            <PersonCard
              person={director}
              role="director"
              birthPlace={directorPerson?.place_of_birth}
            />
          )}
          {writer && (
            <PersonCard
              person={writer}
              role="writer"
              birthPlace={writerPerson?.place_of_birth}
            />
          )}
        </InformationContainer>
      </div>

      <div className="lg:hidden">
        <Cast cast={credits.cast} />
      </div>

      <div className="lg:hidden">
        <Reviews reviews={reviews} />
      </div>
    </div>
  );
};

export default Information;
