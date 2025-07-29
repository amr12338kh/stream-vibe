import { Skeleton } from "../ui/skeleton";

export const ReviewsLoading = () => {
  return (
    <div className="bg-black-6 border border-black-15 rounded-xl p-6 sm:p-12 space-y-4">
      <div className="flex items-center justify-between w-full">
        <Skeleton className="h-6 w-24" />
        <Skeleton className="h-8 w-32 sm:h-10 sm:w-40 rounded-lg" />
      </div>
      <div className="overflow-hidden">
        <div className="flex gap-3 lg:gap-5">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex-none">
              <div className="p-6 sm:p-10 rounded-2xl min-h-[175px] sm:min-h-[240px] w-[280px] sm:w-[400px] md:w-[380px] lg:w-[440px] space-y-4 sm:space-y-6 bg-black-8 border border-black-15">
                <div className="flex items-center justify-between w-full">
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-24 sm:h-6 sm:w-32" />
                    <Skeleton className="h-3 w-20 sm:h-4 sm:w-28" />
                  </div>
                  <Skeleton className="h-6 sm:h-7 w-28 sm:w-32 rounded-full" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-3 w-full sm:h-4" />
                  <Skeleton className="h-3 w-full sm:h-4" />
                  <Skeleton className="h-3 w-3/4 sm:h-4" />
                  <Skeleton className="h-3 w-1/2 sm:h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex gap-2 items-center justify-center mt-10">
          <Skeleton className="w-9 h-9 sm:w-12 sm:h-12 rounded-full" />
          <Skeleton className="w-10 h-2 rounded-full hidden sm:block" />
          <Skeleton className="w-9 h-9 sm:w-12 sm:h-12 rounded-full" />
        </div>
      </div>
    </div>
  );
};
