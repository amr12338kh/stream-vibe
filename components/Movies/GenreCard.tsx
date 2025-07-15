/* eslint-disable @next/next/no-img-element */
import { getImagePath } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { GenreCardProps } from "@/types/types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const GenreCard = ({
  isGenre,
  isTopGenre,
  movies,
  genreName,
  genreId,
  isWide,
}: GenreCardProps) => {
  return (
    <Link
      href={`/movies/genre${isTopGenre ? "/top" : ""}/${genreId}`}
      className={cn(
        "group/card flex flex-col bg-black-10 transition-all duration-300 rounded-xl border border-black-15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:border-black-20 hover:shadow-lg",
        isGenre &&
          "p-5 sm:p-7 min-w-[230px] sm:min-w-[268px] h-[270px] sm:h-[310px]",
        isTopGenre &&
          "p-5 sm:p-7 min-w-[270px] sm:min-w-[340px] h-[330px] sm:h-[380px]",
        isWide && "!flex-row overflow-hidden"
      )}
      aria-label={`View details for ${genreName} Genre`}
    >
      <div
        className={cn(
          "flex items-center",
          !isWide && "justify-center",
          "rounded-lg w-full h-full",
          "relative overflow-hidden"
        )}
      >
        {isWide && (
          <div className="flex items-start w-full z-10">
            <div className="flex flex-col items-start space-y-3 w-full">
              <div className="inline-flex items-center gap-2">
                <span className="inline-flex items-center px-3 py-1.5 text-xs font-bold tracking-wide uppercase rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-md">
                  Top 10 In
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
                  {genreName}
                </h3>
                <p className="text-muted-foreground max-w-52 md:max-w-full">{`Explore our top 10 of movies in ${genreName} genre`}</p>
                <div className="flex items-center gap-2 text-muted-foreground group-hover/card:text-foreground transition-colors duration-200">
                  <span className="text-sm font-medium">Explore Top 10</span>
                  <ArrowRight className="size-4 group-hover/card:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </div>
          </div>
        )}

        <div
          className={cn(
            "grid bg-black-10 w-full h-full",
            isWide
              ? "grid-cols-4 gap-[4px] lg:max-w-[50%] rotate-[-8deg] scale-125 lg:scale-[1.5] absolute top-0 right-0"
              : "grid-cols-2 gap-[6px] place-items-center"
          )}
        >
          {movies?.slice(0, isWide ? 8 : 4).map((movie, i) => (
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
                className="absolute inset-0 object-cover group-hover/card:scale-110 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
          {isWide && (
            <div className="absolute z-10 bottom-0 left-0 sm:w-[350px] md:w-[450px] lg:w-[300px] h-full bg-gradient-to-r from-black-10 via-black-10 lg:via-black-10/70 to-transparent" />
          )}
        </div>
        <div className="absolute z-10 bottom-0 w-full h-32 bg-gradient-to-t from-black-10 to-transparent" />
      </div>

      {!isWide && (
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
            <ArrowRight className="size-5 group-hover/card:translate-x-1 transition-transform duration-200" />
          </>
        </div>
      )}
    </Link>
  );
};

export default GenreCard;
