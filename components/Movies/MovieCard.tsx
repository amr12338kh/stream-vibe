/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import { getImagePath } from "@/lib/helpers";
import { MovieCardProps } from "@/types/types";
import Link from "next/link";
import { Star } from "lucide-react";

const MovieCard = ({
  movie,
  isWide,
  cols,
  number = 0,
  isTop,
}: MovieCardProps) =>
  isTop ? (
    <div key={movie.id} className="flex items-end">
      <h3
        className={cn(
          "font-black text-[230px] leading-none relative select-none",
          number + 1 > 9 && " -tracking-[1.5rem]"
        )}
      >
        <span
          className={cn(
            "absolute inset-0 text-transparent [-webkit-text-stroke:10px_#E50000]"
          )}
        >
          {`${number + 1}`}
        </span>
        <span className="relative text-black-6">{`${number + 1}`}</span>
      </h3>
      <div
        className={cn(
          "relative -left-8 flex",
          number + 1 > 9 && " left-[-58px]"
        )}
      >
        <Card movie={movie} isTop />
      </div>
    </div>
  ) : (
    <Card movie={movie} isWide={isWide} cols={cols} number={number} />
  );

const Card = ({ movie, isWide, cols, isTop }: MovieCardProps) => {
  const imagePath = getImagePath(
    isWide
      ? movie?.backdrop_path || movie?.poster_path || ""
      : movie?.poster_path || movie?.backdrop_path || ""
  );

  return (
    <Link
      href={`/movies/${movie.id}`}
      className={cn(
        "group/card transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:shadow-xl",
        isWide
          ? `relative aspect-video overflow-hidden ${!cols && "min-w-[320px] sm:min-w-[400px] md:min-w-[500px]"}`
          : isTop
            ? "min-w-[170px] sm:min-w-[190px] h-[240px] sm:h-[300px] z-10"
            : "min-w-[230px] sm:min-w-[268px] h-[320px] sm:h-[380px]"
      )}
      aria-label={`View details for ${movie.title}`}
    >
      <div
        className={cn(
          "flex items-center justify-center relative",
          "rounded-md w-full h-full",
          "overflow-hidden transition-all"
        )}
      >
        <div className="absolute inset-0 bg-black-10/0 transition-colors duration-300 z-10 group-hover/card:bg-black-10/20" />
        <img
          src={imagePath}
          alt={movie.title}
          sizes="(max-width: 340px) 100vw, 340px"
          className={cn(
            "w-full h-full object-cover duration-300 transition-transform group-hover/card:scale-105"
          )}
          loading="lazy"
        />
      </div>

      {isWide && (
        <>
          <div className="absolute inset-0 bg-black-10/0 transition-colors duration-300 group-hover/card:bg-black-10/10 z-[1] rounded-md" />
          <div className="absolute inset-0 bg-gradient-to-t from-black-10/70 via-black-10/10 to-transparent rounded-md z-[2]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black-10/60 via-black-10/20 to-transparent rounded-md z-[2]" />
          <div className="z-20 absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover/card:translate-y-[-4px]">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white line-clamp-2 leading-tight drop-shadow-lg mb-3">
              {movie.title}
            </h3>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-40 font-medium">
                {movie.release_date.split("-")[0]}
              </span>
              <span className="text-gray-40">•</span>
              <span className="text-sm text-gray-40 flex gap-2 items-center font-medium">
                <Star className="size-3" />
                {movie.vote_average.toFixed(1)}
              </span>
            </div>
          </div>
        </>
      )}
    </Link>
  );
};

export default MovieCard;
