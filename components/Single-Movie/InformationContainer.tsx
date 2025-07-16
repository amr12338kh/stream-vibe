import React from "react";
import { cn } from "@/lib/utils";
import { EmblaCarouselType } from "embla-carousel";
import { SlidesSwitch } from "../ui/slides-switch.tsx";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

const InformationContainer = ({
  title,
  children,
  className,
  scroll,
  emblaApi,
  reviews = false,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
  scroll?: boolean;
  emblaApi?: EmblaCarouselType;
  reviews?: boolean;
}) => {
  return (
    <div
      className={cn(
        "bg-black-6 backdrop-blur-sm border border-black-15 rounded-xl p-6 sm:p-12 space-y-6 transition-all duration-300",
        className
      )}
    >
      {title && (
        <div
          className={cn(
            (scroll || reviews) && "flex items-center justify-between w-full"
          )}
        >
          <h3 className="capitalize text-sm sm:text-base md:text-lg text-gray-60">
            {title}
          </h3>
          {scroll && !reviews && (
            <SlidesSwitch
              emblaApi={emblaApi}
              variant="information"
              showDots={false}
            />
          )}
          {reviews && (
            <Button className="bg-black-8 border-black-15 border hover:bg-black-6/80 rounded-lg p-2 sm:p-4 md:p-6 text-xs sm:text-sm">
              <Plus className="md:!size-5" /> Add Your Review
            </Button>
          )}
        </div>
      )}
      {children}
      {scroll && reviews && (
        <div className="flex justify-center pt-6">
          <SlidesSwitch
            emblaApi={emblaApi}
            variant="information"
            showDots={reviews}
          />
        </div>
      )}
    </div>
  );
};

export default InformationContainer;
