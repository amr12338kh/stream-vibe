import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

const HeadingSkeleton = ({
  className,
  subtitle,
}: {
  className?: string;
  subtitle?: boolean;
}) => {
  return (
    <div className={cn("heading-mb", className)}>
      <Skeleton className={`h-10 w-1/4 mb-3 sm:mb-4`} />
      {subtitle && <Skeleton className="h-6 w-1/3" />}
    </div>
  );
};

export default HeadingSkeleton;
