"use client";

import React, { memo, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import Heading from "../Heading";
import { EmblaCarouselProps, Movie, MovieDetails } from "@/types/types";
import Image from "next/image";
import { HiOutlineVolumeUp } from "react-icons/hi";
import { BiLike } from "react-icons/bi";
import { SlidesSwitch } from "./slides-switch.tsx";
import Autoplay from "embla-carousel-autoplay";
import { getImagePath } from "@/lib/helpers";
import Link from "next/link";
import { Plus } from "lucide-react";
import { FaPlay } from "react-icons/fa";

// Constants
const AUTOPLAY_DELAY = 12000;
const CAROUSEL_OPTIONS = {
  align: "start" as const,
  containScroll: "trimSnaps" as const,
  skipSnaps: true,
  duration: 30,
};

const ACTION_BUTTONS = [
  {
    icon: Plus,
    label: "Add to list",
    action: () => console.log("Add to list"),
  },
  { icon: BiLike, label: "Like", action: () => console.log("Like") },
  {
    icon: HiOutlineVolumeUp,
    label: "Toggle sound",
    action: () => console.log("Toggle sound"),
  },
] as const;

Autoplay.globalOptions = { delay: AUTOPLAY_DELAY };

const BannerCarousel: React.FC<EmblaCarouselProps> = ({
  movies,
  movie,
  loop,
  autoplay,
  single,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      ...CAROUSEL_OPTIONS,
      loop: loop || false,
    },
    autoplay ? [Autoplay()] : []
  );

  const content = useMemo(() => {
    if (single && movie) {
      return <Banner movie={movie} single />;
    }

    return movies?.map((movie, index) => (
      <Banner key={movie.id} movie={movie} index={index} />
    ));
  }, [single, movie, movies]);

  return (
    <section className="py-10 relative">
      <div
        className="overflow-hidden"
        ref={!single ? emblaRef : null}
        role="region"
        aria-label="Movie banner carousel"
      >
        <div className="flex">{content}</div>
      </div>
      {!single && (
        <div className=" hidden sm:block absolute bottom-24 left-1/2 -translate-x-1/2 w-full px-6 sm:px-16">
          <SlidesSwitch emblaApi={emblaApi} variant="banner" />
        </div>
      )}
    </section>
  );
};

const Banner = memo(
  ({
    index,
    movie,
    single = false,
  }: {
    index?: number;
    movie: MovieDetails | Movie;
    single?: boolean;
  }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
      <div
        key={index}
        className={cn(
          "h-[60vh] sm:h-[80vh] flex-full w-full relative",
          !imageLoaded && "opacity-0"
        )}
      >
        <div className=" w-full h-full absolute">
          <Image
            src={getImagePath(movie?.backdrop_path || "", true)}
            alt={movie.title}
            fill
            priority={index === 0 || single}
            sizes="100vw"
            className={cn(
              "object-cover rounded-xl",
              "transition-opacity duration-300",
              !imageLoaded && "opacity-0"
            )}
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 bg-black-10 animate-pulse rounded-xl" />
          )}
        </div>
        <div className="w-full h-full bg-gradient-to-t from-black-8 from-[4%] to-transparent z-10 absolute" />

        <div
          className={`flex flex-col justify-end items-center h-full py-24 sm:py-32 px-6 sm:px-16 z-20 relative gap-y-4 sm:gap-y-8`}
        >
          <Heading
            className=" text-center !mb-0"
            isBanner
            title={movie.title}
            subtitle={movie.overview}
          />
          <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto gap-y-5 sm:gap-y-0">
            {/* Play Button */}
            <Link
              href={!single ? `/movies/${movie.id}` : "#"}
              className="w-full"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto group"
                aria-label="Play Now"
              >
                <FaPlay className="group-hover:scale-110 transition-transform duration-200" />
                Play Now
              </Button>
            </Link>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              {ACTION_BUTTONS.map(({ icon: Icon, label, action }) => (
                <Button
                  key={label}
                  variant="secondary"
                  size="lg"
                  onClick={action}
                  aria-label={label}
                  className={cn(
                    "px-4 bg-black-6 border-black-15 border",
                    "hover:bg-black-6/80 rounded-lg group"
                  )}
                >
                  <Icon className="transition-transform duration-200 group-hover:scale-110" />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

Banner.displayName = "Banner";

export default BannerCarousel;
