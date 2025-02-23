import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

const HeadingSkeleton = ({
  className,
  isBanner,
  isCarousel,
}: {
  className?: string;
  isBanner?: boolean;
  isCarousel?: boolean;
}) => {
  return (
    <div
      className={cn(
        "heading-mb",
        isCarousel && " flex items-center justify-between w-full",
        className
      )}
    >
      <Skeleton className="h-8 md:h-9 lg:h-10 xl:h-12 w-48 md:w-64 lg:w-72 xl:w-96 mb-1 sm:mb-2 lg:mb-3" />
      {!isCarousel ? (
        <Skeleton
          className={cn(
            "h-4 lg:h-5 xl:h-6",
            "max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-6xl",
            isBanner && "hidden sm:block"
          )}
        />
      ) : (
        <Skeleton className="h-8 md:h-9 lg:h-10 xl:h-12 w-28 mb-1 sm:mb-2 lg:mb-3" />
      )}
    </div>
  );
};

export default HeadingSkeleton;
