import React from "react";
import { LucideProps } from "lucide-react";

export const HeadingTitle = ({
  icon: Icon,
  title,
}: {
  icon?: React.ComponentType<LucideProps>;
  title: string;
}) => (
  <h3
    className={`capitalize text-sm sm:text-base md:text-lg text-gray-60 ${
      Icon && "flex items-center gap-2"
    }`}
  >
    {Icon && <Icon className=" size-4 sm:size-5" />} {title}
  </h3>
);
