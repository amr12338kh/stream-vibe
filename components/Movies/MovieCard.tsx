/* eslint-disable @next/next/no-img-element */
"use client";

import { cn, getMovieRuntime } from "@/lib/utils";
import {
  formatDate,
  formatDuration,
  formatPopularity,
  getImagePath,
} from "@/lib/helpers";
import { MovieCardProps } from "@/types/types";
import Link from "next/link";
import { FaClock } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { Stars } from "../ui/stars";
import { MovieBadge } from "../ui/movie-badge";
import { memo, useEffect, useMemo, useState } from "react";
import { Star } from "lucide-react";
import { cva } from "class-variance-authority";

export const cardContainerVariants = cva(
  "group flex flex-col bg-black-10 transition-all duration-300 rounded-2xl border border-black-15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
  {
    variants: {
      type: {
        genre:
          "p-5 sm:p-7 min-w-[230px] sm:min-w-[268px] h-[270px] sm:h-[310px]",
        top_genre:
          "p-5 sm:p-7 min-w-[270px] sm:min-w-[340px] h-[330px] sm:h-[380px]",
        must: "p-5 min-w-[270px] sm:min-w-[340px] h-[400px] md:h-[480px]",
        wide: "aspect-video",
        default: "p-5 min-w-[230px] sm:min-w-[268px] h-[320px] sm:h-[380px]",
      },
    },
    defaultVariants: {
      type: "default",
    },
  }
);

const MovieCard = memo(
  ({
    movie,
    isMust,
    isNew,
    isTrending,
    isWide,
    number = 0,
  }: MovieCardProps) => {
    const cardType = isMust ? "must" : isWide ? "wide" : "default";
    const [duration, setDuration] = useState<number | null>(null);

    const imagePath = useMemo(
      () =>
        getImagePath(
          isWide
            ? movie?.backdrop_path || movie?.poster_path || ""
            : movie?.poster_path || movie?.backdrop_path || ""
        ),
      [isWide, movie?.backdrop_path, movie?.poster_path]
    );

    useEffect(() => {
      let isMounted = true;

      const fetchDuration = async () => {
        try {
          const movieRuntime = await getMovieRuntime(movie.id.toString());
          if (isMounted) {
            setDuration(movieRuntime);
          }
        } catch (error) {
          console.error("Failed to fetch movie runtime:", error);
        }
      };

      fetchDuration();
      return () => {
        isMounted = false;
      };
    }, [movie.id]);

    return (
      <Link
        href={`/movies/${movie.id}`}
        className={cn(
          cardContainerVariants({ type: cardType }),
          isWide && "relative"
        )}
        aria-label={`View details for ${movie.title}`}
      >
        <div
          className={cn(
            "flex items-center justify-center",
            "rounded-lg w-full h-full",
            "overflow-hidden group-hover:opacity-90 transition-opacity"
          )}
        >
          <img
            src={imagePath}
            alt={movie.title}
            sizes="(max-width: 340px) 100vw, 340px"
            className=" w-full h-full object-cover duration-300 transition-transform group-hover:scale-110"
            loading="lazy"
          />
        </div>

        {!isWide ? (
          <div
            className={cn(
              "flex items-center mt-3",
              isNew ? "justify-center" : "justify-between"
            )}
          >
            {(isTrending || isMust) && (
              <>
                <MovieBadge>
                  <FaClock className="size-4" />
                  {duration ? formatDuration(duration) : "N/A"}
                </MovieBadge>
                {isTrending ? (
                  <MovieBadge>
                    <IoEyeSharp className="size-4" />
                    {formatPopularity(movie.popularity)}
                  </MovieBadge>
                ) : (
                  <MovieBadge>
                    <Stars rating={movie.vote_average / 2} />
                    {movie.vote_average.toFixed(1)}
                  </MovieBadge>
                )}
              </>
            )}

            {isNew && (
              <MovieBadge>
                Released at
                <span className="text-gray-75">
                  {formatDate(movie.release_date)}
                </span>
              </MovieBadge>
            )}
          </div>
        ) : (
          isWide && (
            <>
              <div className="absolute z-10 bottom-0 w-full h-full bg-gradient-to-t from-black-10 to-transparent rounded-lg" />
              <div className="z-10 absolute bottom-4 left-4 space-y-1">
                <h3 className=" font-semibold text-lg line-clamp-1">
                  {movie.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-60">
                    {formatDate(movie.release_date)}
                  </span>
                  <span className=" text-gray-60">|</span>
                  <span className="text-xs text-gray-60 flex gap-1 items-center">
                    <Star className="size-3" />
                    {movie.vote_average.toFixed(1)}
                  </span>
                </div>
              </div>

              {number > 0 && (
                <div className="absolute -bottom-6 right-2 sm:-bottom-3 sm:-right-3 md:-bottom-6 md:-right-6 2xl:-bottom-8 2xl:-right-8 z-10">
                  <h3
                    className={cn(
                      "font-black text-[80px] sm:text-6xl md:text-[90px] leading-none",
                      "relative",
                      "selection-none"
                    )}
                  >
                    {/* Stroke effect using CSS classes instead of inline styles */}
                    <span
                      className={cn(
                        "absolute inset-0",
                        "text-transparent",
                        "[-webkit-text-stroke:3px_#E50000]"
                      )}
                    >
                      {number < 10 ? `0${number}` : number}
                    </span>
                    {/* Main number */}
                    <span className="relative text-black-6 opacity-90">
                      {number < 10 ? `0${number}` : number}
                    </span>
                  </h3>
                </div>
              )}
            </>
          )
        )}
      </Link>
    );
  }
);

MovieCard.displayName = "MovieCard";

export default MovieCard;
