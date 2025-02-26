import { Skeleton } from "../ui/skeleton";

const BannerSkeleton = () => {
  return (
    <section className="py-10 relative">
      <div className="overflow-hidden">
        <div className="flex">
          <div className="h-[60vh] sm:h-[80vh] w-full relative">
            <Skeleton className="w-full h-full absolute rounded-xl" />

            <div className="w-full h-full bg-gradient-to-t from-black-8 from-[4%] to-transparent z-10 absolute" />

            <div className="flex flex-col justify-end items-center h-full py-14 sm:py-32 px-6 sm:px-16 z-20 relative gap-y-4 sm:gap-y-8">
              <div className="w-3/4 max-w-2xl space-y-4">
                <Skeleton className="h-8 w-2/3 mx-auto" />
                <div className="flex-col items-center space-y-4 hidden sm:flex">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto gap-y-5 sm:gap-y-0">
                <Skeleton className="h-12 w-full sm:w-32" />
                <div className="flex items-center gap-2">
                  {[1, 2, 3].map((i) => (
                    <Skeleton key={i} className="h-12 w-12" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSkeleton;
