import { Skeleton } from "../ui/skeleton";

const BannerSkeleton = () => {
  return (
    <section className="relative w-full h-screen">
      <div className="overflow-hidden">
        <div className="flex">
          <div className="h-screen w-full relative">
            <Skeleton className="w-full h-full absolute" />
            <div className="w-full h-full bg-linear-to-t from-black-8 from-4% to-transparent z-10 absolute" />

            {/* Content */}
            <div className="relative z-20 flex items-end pb-20 h-full">
              <div className="w-full mx-auto padding-x pb-24">
                <div className="max-w-2xl lg:max-w-3xl space-y-4">
                  {/* Title and Overview Skeletons */}
                  <div className="space-y-4 flex flex-col items-center sm:items-start">
                    <Skeleton className="h-12 sm:h-14 w-3/4 text-center" />
                    <div className="space-y-2 hidden sm:block w-full">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-5/6" />
                      <Skeleton className="h-4 w-4/6" />
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row items-start gap-4 mt-8">
                    <Skeleton className="h-11 w-full sm:w-32" />
                    <Skeleton className="h-11 w-full sm:w-32" />
                  </div>

                  {/* Action Buttons - Desktop Only */}
                  <div className="hidden lg:flex items-center gap-3 mt-6">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <Skeleton key={i} className="h-11 w-11 rounded-full" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Fade edges */}
            <div className="absolute top-0 left-0 w-32 h-full bg-linear-to-r from-black/20 to-transparent z-10" />
            <div className="absolute top-0 right-0 w-32 h-full bg-linear-to-l from-black/20 to-transparent z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSkeleton;
