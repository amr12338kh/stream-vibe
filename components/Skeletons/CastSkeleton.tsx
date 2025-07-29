import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const CastLoading = () => {
  return (
    <div className="bg-black-6 border border-black-15 rounded-xl p-6 sm:p-12 space-y-4">
      <div className="flex items-center justify-between w-full">
        <Skeleton className="h-6 w-24" />
        <div className=" flex gap-2 justify-center">
          <Skeleton className="w-9 h-9 sm:w-12 sm:h-12 rounded-full" />
          <Skeleton className="w-9 h-9 sm:w-12 sm:h-12 rounded-full" />
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="flex gap-3 md:gap-5">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="flex-none">
              <Skeleton className="w-[70px] h-[70px] sm:h-[100px] sm:w-[100px] md:w-[133px] md:h-[133px] rounded-xl" />
              <div className="p-1 space-y-2 mt-2">
                <Skeleton className="h-3 w-16 sm:h-4 sm:w-20" />
                <Skeleton className="h-2 w-14 sm:h-3 sm:w-16" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
