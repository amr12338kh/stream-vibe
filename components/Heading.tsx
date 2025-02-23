import React from "react";
import { cn } from "@/lib/utils";

const Heading = ({
  title,
  subtitle,
  className,
  isBanner,
}: {
  title: string;
  subtitle?: string;
  className?: string;
  isBanner?: boolean;
}) => {
  return (
    <div className={cn("heading-mb", className)}>
      <h1 className=" text-[24px] md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 sm:mb-2 lg:mb-3">
        {title}
      </h1>
      <p
        className={cn(
          "max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-6xl text-xs lg:text-sm xl:text-base text-gray-60",
          isBanner && "hidden sm:block"
        )}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;
