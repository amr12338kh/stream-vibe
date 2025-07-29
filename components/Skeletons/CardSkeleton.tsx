import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

interface CardSkeletonProps {
  isWide?: boolean;
  cols?: boolean;
}

const CardSkeleton = ({ isWide, cols }: CardSkeletonProps) => {
  return (
    <div
      className={cn(
        "group/card transition-all duration-300 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary hover:shadow-xl",
        isWide
          ? `relative aspect-video overflow-hidden rounded-md ${!cols && "min-w-[320px] sm:min-w-[400px] md:min-w-[500px]"}`
          : "min-w-[230px] sm:min-w-[268px] h-[320px] sm:h-[380px]"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center relative",
          "rounded-md w-full h-full",
          "overflow-hidden transition-all"
        )}
      >
        <div className="absolute inset-0 bg-black-10/0 transition-colors duration-300 z-10 group-hover/card:bg-black-10/20" />
        <Skeleton className="w-full h-full object-cover" />
      </div>

      {isWide && (
        <>
          <div className="absolute inset-0 bg-black-10/0 transition-colors duration-300 group-hover/card:bg-black-10/10 z-1 rounded-md" />
          <div className="absolute inset-0 bg-linear-to-t from-black-10/70 via-black-10/10 to-transparent rounded-md z-2" />
          <div className="absolute inset-0 bg-linear-to-r from-black-10/60 via-black-10/20 to-transparent rounded-md z-2" />
          <div className="z-20 absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover/card:translate-y-[-4px]">
            <Skeleton className="h-8 sm:h-9 md:h-10 w-3/4 mb-3" />
            <div className="flex items-center gap-3">
              <Skeleton className="h-5 w-14" />
              <span className="text-gray-40">•</span>
              <div className="flex items-center gap-2">
                <Skeleton className="h-3 w-3" />
                <Skeleton className="h-5 w-10" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CardSkeleton;
