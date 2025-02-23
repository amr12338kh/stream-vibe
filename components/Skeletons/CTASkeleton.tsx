import React from "react";
import { Skeleton } from "../ui/skeleton";

const CTASkeleton = () => {
  return (
    <div className="bg-black-10 border border-black-15 rounded-xl w-full h-[315px] space-y-4">
      <div className="px-8 md:px-20 flex flex-col md:flex-row justify-center md:justify-between items-center w-full h-full gap-y-10 md:gap-y-0 gap-x-8">
        <div className="flex flex-col space-y-4 w-full items-center md:items-start">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-4 w-full max-w-sm md:max-w-lg" />
          <Skeleton className="h-4 w-full max-w-44 md:max-w-sm" />
        </div>
        <Skeleton className="h-14 w-52 md:w-64 rounded-lg" />
      </div>
    </div>
  );
};

export default CTASkeleton;
