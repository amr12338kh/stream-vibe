"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Heading from "../Heading";
import { EmblaCarouselProps } from "@/types/types";
import { SlidesSwitch } from "./slides-switch.tsx";
import { cn } from "@/lib/utils";

const BREAKPOINTS = {
  "(max-width: 1536px)": { slidesToScroll: 3 },
  "(max-width: 1280px)": { slidesToScroll: 2 },
  "(max-width: 1024px)": { slidesToScroll: 1 },
} as const;

const Carousel: React.FC<EmblaCarouselProps> = ({
  title,
  subtitle,
  slidesToScroll = 5,
  children,
  className,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start" as const,
    containScroll: "trimSnaps" as const,
    slidesToScroll,
    breakpoints: BREAKPOINTS,
    dragFree: true,
  });

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") emblaApi?.scrollPrev();
      if (e.key === "ArrowRight") emblaApi?.scrollNext();
    },
    [emblaApi]
  );

  return (
    <section>
      <div className="flex justify-between items-center mb-10 sm:mb-16">
        <Heading
          title={title || "title"}
          subtitle={subtitle}
          className="!mb-0 "
        />

        <div className="hidden md:block">
          <SlidesSwitch emblaApi={emblaApi} variant="default" />
        </div>
      </div>
      <div
        className="overflow-hidden"
        ref={emblaRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        role="region"
        aria-label={`${title} carousel`}
      >
        <div
          className={cn(
            "flex gap-4 sm:gap-6 touch-pan-y backface-hidden",
            className
          )}
        >
          {children}
        </div>
      </div>

      <div className="md:hidden flex justify-center">
        <SlidesSwitch emblaApi={emblaApi} variant="default" />
      </div>
    </section>
  );
};

export default Carousel;
