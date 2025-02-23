"use client";

import { Button } from "./button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SlidesSwitchProps } from "@/types/types";
import { useDotButton, usePrevNextButtons } from "@/hooks/carousel-hooks";

const variantStyles = {
  default: {
    container:
      "md:bg-black-6 md:border md:border-black-12 md:rounded-lg md:p-2 items-center md:gap-2 flex mt-10 md:mt-0",
    button: "hidden md:block",
    buttonSize: "sm",
    dots: "flex items-center md:gap-[1px]",
  },
  banner: {
    container: "flex items-center justify-between w-full",
    button:
      "px-4 bg-black-6 border-black-15 border hover:bg-black-6/80 rounded-lg",
    buttonSize: "lg",
    dots: "flex items-center gap-[1px]",
  },
  information: {
    container: "flex items-center gap-2",
    button:
      "!p-4 sm:!p-6 bg-black-8 border-black-15 border hover:bg-black-6/80 rounded-full",
    buttonSize: "icon",
    dots: "hidden sm:flex items-center gap-[1px]",
  },
} as const;

export const SlidesSwitch = ({
  emblaApi,
  variant = "default",
  showDots = true,
  className,
  buttonClassName,
  dotsClassName,
}: SlidesSwitchProps) => {
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  if (scrollSnaps.length < 2) return null;

  const styles = variantStyles[variant];

  return (
    <div className={cn(styles.container, className)}>
      <Button
        className={cn(styles.button, buttonClassName)}
        variant="secondary"
        size={styles.buttonSize}
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
        type="button"
      >
        <ArrowLeft
          className={
            variant === "information" ? "!size-4 sm:!size-5" : "size-5"
          }
        />
      </Button>

      {showDots && (
        <div className={cn(styles.dots, dotsClassName)}>
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className="w-full h-full flex items-center justify-center"
              onClick={() => onDotButtonClick(index)}
              type="button"
            >
              <span
                className={cn(
                  "h-1 md:rounded-md transition-all duration-300 ease-in-out",
                  index === selectedIndex
                    ? "bg-primary w-[10px] rounded-md"
                    : "bg-black-20 w-[5px]",
                  variant === "default" && [
                    index === scrollSnaps.length - 1 && "rounded-r-md",
                    index === 0 && "rounded-l-md",
                  ]
                )}
              />
            </button>
          ))}
        </div>
      )}

      <Button
        className={cn(styles.button, buttonClassName)}
        variant="secondary"
        size={styles.buttonSize}
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
        type="button"
      >
        <ArrowRight
          className={
            variant === "information" ? "!size-4 sm:!size-5" : "size-5"
          }
        />
      </Button>
    </div>
  );
};
