/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import Heading from "../Heading";
import {
  EmblaCarouselProps,
  GenresProps,
  Movie,
  MovieDetails,
} from "@/types/types";
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
  duration: 40,
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

  const Content = () => {
    if (single && movie) {
      return <Banner movie={movie} single />;
    }

    return movies?.map((movie, index) => (
      <Banner key={movie.id} movie={movie} index={index} />
    ));
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div
        className="overflow-hidden h-full"
        ref={!single ? emblaRef : null}
        role="region"
        aria-label="Movie banner carousel"
      >
        <div className="flex h-full">{<Content />}</div>
      </div>
      {!single && (
        <div className="hidden sm:block absolute bottom-44 right-0 padding-x z-30">
          <SlidesSwitch emblaApi={emblaApi} variant="banner" showDots={false} />
        </div>
      )}
    </section>
  );
};

const Banner = ({
  index,
  movie,
  single = false,
}: {
  index?: number;
  movie: Movie | MovieDetails;
  single?: boolean;
  genres?: GenresProps;
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      key={index}
      className={cn(
        "shrink-0 w-full h-full relative",
        !imageLoaded && "opacity-0"
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={getImagePath(movie?.backdrop_path || "", true)}
          alt={movie.title}
          className={cn(
            "object-cover w-full h-full",
            "transition-opacity duration-300",
            !imageLoaded && "opacity-0"
          )}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-black-10 animate-pulse rounded-xl" />
        )}
      </div>

      {/* Gradient Overlay */}
      <div className="w-full h-full bg-linear-to-t from-black-8 from-4% to-transparent z-10 absolute" />

      {/* Content */}
      <div className="relative z-20 flex items-end pb-20 h-full">
        <div className="w-full mx-auto padding-x pb-24">
          <div className="max-w-2xl lg:max-w-3xl">
            <Heading
              className="text-center sm:text-left mb-0!"
              isBanner
              title={movie.title.toUpperCase()}
              subtitle={movie.overview}
            />

            <div className="flex flex-col sm:flex-row items-start gap-4 mt-8">
              {/* Play Button */}
              <Link
                href={!single ? `/movies/${movie.id}` : "#"}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className={cn(
                    "w-full sm:w-auto group px-8 py-3 text-lg font-semibold",
                    "bg-white text-black-6 hover:bg-white/90",
                    "rounded-md transition-all duration-200"
                  )}
                  aria-label="Play Now"
                >
                  <FaPlay className="mr-2 group-hover:scale-110 transition-transform duration-200" />
                  Play
                </Button>
              </Link>

              {/* More Info Button */}
              <Button
                variant="secondary"
                size="lg"
                className={cn(
                  "w-full sm:w-auto px-8 py-3 text-lg font-semibold",
                  "bg-gray-500/70 text-white hover:bg-gray-500/50",
                  "rounded-md transition-all duration-200"
                )}
                aria-label="More Info"
              >
                More Info
              </Button>
            </div>

            {/* Action Buttons - Desktop Only */}
            <div className="hidden lg:flex items-center gap-3 mt-6">
              {ACTION_BUTTONS.map(({ icon: Icon, label, action }) => (
                <Button
                  key={label}
                  variant="secondary"
                  size="lg"
                  onClick={action}
                  aria-label={label}
                  className={cn(
                    "p-3 bg-black/40 border-2 border-gray-500/50",
                    "hover:bg-black/60 hover:border-gray-400",
                    "rounded-full group transition-all duration-200"
                  )}
                >
                  <Icon className="w-5 h-5 text-white transition-transform duration-200 group-hover:scale-110" />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fade edges */}
      <div className="absolute top-0 left-0 w-32 h-full bg-linear-to-r from-black/20 to-transparent z-10" />
      <div className="absolute top-0 right-0 w-32 h-full bg-linear-to-l from-black/20 to-transparent z-10" />
    </div>
  );
};

export default BannerCarousel;
