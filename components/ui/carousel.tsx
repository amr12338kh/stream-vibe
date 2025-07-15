"use client";

import React, { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Heading from "../Heading";
import { EmblaCarouselProps } from "@/types/types";
import { SlidesSwitch } from "./slides-switch.tsx";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { usePrevNextButtons } from "@/hooks/carousel-hooks";

const Carousel: React.FC<EmblaCarouselProps> = ({
  title,
  subtitle,
  slidesToScroll = 5,
  children,
  className,
  dragFree = true,
  isWide,
}) => {
  const BREAKPOINTS = {
    "(max-width: 1536px)": { slidesToScroll: isWide ? 2 : 4 },
    "(max-width: 1380px)": { slidesToScroll: isWide ? 2 : 3 },
    "(max-width: 1024px)": { slidesToScroll: isWide ? 1 : 2 },
  } as const;

  const [isHovered, setIsHovered] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start" as const,
    containScroll: "trimSnaps" as const,
    slidesToScroll,
    breakpoints: BREAKPOINTS,
    dragFree: dragFree,
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") emblaApi?.scrollPrev();
      if (e.key === "ArrowRight") emblaApi?.scrollNext();
    },
    [emblaApi]
  );

  return (
    <section>
      <div className="flex justify-between items-center mb-5">
        <Heading
          title={title || "title"}
          subtitle={subtitle}
          className="!mb-0"
        />
      </div>

      <div
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Navigation Button */}
        <div
          className={cn(
            "left-nav-btn",
            isHovered && !prevBtnDisabled
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-2 pointer-events-none"
          )}
          onClick={onPrevButtonClick}
          role="button"
          tabIndex={0}
          aria-label="Previous slides"
        >
          {/* Triangle background with gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-black-6 via-black-8/70 to-transparent"
            style={{
              clipPath: "polygon(0% 0%, 100% 50%, 0% 100%)",
            }}
          />
          <ArrowLeft className="size-6relative z-10 -ml-2" />
        </div>

        {/* Right Navigation Button */}
        <div
          className={cn(
            "right-nav-btn",
            isHovered && !nextBtnDisabled
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-2 pointer-events-none"
          )}
          onClick={onNextButtonClick}
          role="button"
          tabIndex={0}
          aria-label="Next slides"
        >
          {/* Triangle background with gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-l from-black-6 via-black-8/70 to-transparent "
            style={{
              clipPath: "polygon(100% 0%, 0% 50%, 100% 100%)",
            }}
          />
          <ArrowRight className="size-6 relative z-10 -mr-2" />
        </div>

        {/* Carousel Container */}
        <div
          className="overflow-hidden relative"
          ref={emblaRef}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          role="region"
          aria-label={`${title} carousel`}
        >
          <div
            className={cn("flex gap-3 touch-pan-y backface-hidden", className)}
          >
            {children}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-center">
        <SlidesSwitch emblaApi={emblaApi} variant="default" />
      </div>
    </section>
  );
};

export default Carousel;
