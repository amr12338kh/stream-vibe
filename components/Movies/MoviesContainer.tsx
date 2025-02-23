import React from "react";
import { Button } from "../ui/button";

const MoviesContainer = ({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="sm:px-5 md:px-10 pt-0 pb-10 sm:py-16 sm:border border-black-15 sm:relative sm:rounded-xl">
      <Button
        size="lg"
        className="hidden sm:block ml-5 md:ml-10 absolute -top-5 left-0 text-[18px] font-semibold cursor-default hover:bg-primary"
      >
        {title || "Movies"}
      </Button>
      <div className="space-y-14 sm:space-y-24">{children}</div>
    </div>
  );
};

export default MoviesContainer;
