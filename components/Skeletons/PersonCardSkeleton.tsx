import { Skeleton } from "../ui/skeleton";

export const PersonCardLoading = () => {
  return (
    <div className="space-y-4">
      <Skeleton className="h-6 w-24" />
      <div className="flex items-center gap-4 bg-black-8 border border-black-15 p-2 sm:p-4 rounded-xl">
        <Skeleton className="w-[60px] h-[60px] rounded-lg" />
        <div className="space-y-2">
          <Skeleton className="h-5 w-32 sm:h-6 sm:w-40" />
          <Skeleton className="h-3 w-24 sm:h-4 sm:w-32" />
        </div>
      </div>
    </div>
  );
};
