/* eslint-disable @next/next/no-img-element */
import { getImagePath } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { cardContainerVariants } from "@/lib/variants";
import { GenreCardProps } from "@/types/types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { memo } from "react";

const GenreCard = memo(
  ({ isGenre, isTopGenre, movies, genreName, genreId }: GenreCardProps) => {
    const cardType = isGenre ? "genre" : "top_genre";

    return (
      <Link
        href={`movies/genre${isTopGenre ? "/top" : ""}/${genreId}`}
        className={cardContainerVariants({ type: cardType })}
        aria-label={`View details for ${genreName} Genre`}
      >
        <div
          className={cn(
            "flex items-center justify-center",
            "rounded-lg w-full h-full",
            "relative overflow-hidden group-hover:opacity-90 transition-opacity"
          )}
        >
          <div className="grid grid-cols-2 gap-[6px] bg-black-10 w-full h-full place-items-center">
            {movies?.slice(0, 4).map((movie, i) => (
              <div
                key={i}
                className="relative w-full h-full overflow-hidden rounded-md"
              >
                <img
                  src={getImagePath(
                    movie?.poster_path || movie?.backdrop_path || ""
                  )}
                  alt={movie.title + " " + i}
                  sizes="(max-width: 200px) 100vw, 200px"
                  className=" absolute inset-0 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="absolute z-10 bottom-0 w-full h-32 bg-gradient-to-t from-black-10 to-transparent" />
        </div>
        <div className={cn("flex items-center justify-between mt-3")}>
          <>
            <div className={isTopGenre ? "space-y-1" : ""}>
              {isTopGenre && (
                <span className="py-1 px-2 font-semibold rounded bg-primary text-xs">
                  Top 10 In
                </span>
              )}
              <h3 className="font-semibold">{genreName}</h3>
            </div>
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </>
        </div>
      </Link>
    );
  }
);

GenreCard.displayName = "GenreCard";

export default GenreCard;
