import { cn } from "@/lib/utils";
import CardSkeleton from "./CardSkeleton";

const RenderCardSkeletons = ({
  count = 10,
  isWide,
  cols,
  className,
}: {
  count?: number;
  isWide?: boolean;
  cols?: boolean;
  className?: string;
}) => (
  <div
    className={cn(
      !className ? "flex gap-4 sm:gap-6 overflow-hidden" : className
    )}
  >
    {Array.from({ length: count }).map((_, i) => (
      <div key={i}>
        <CardSkeleton isWide={isWide} cols={cols} />
      </div>
    ))}
  </div>
);

export default RenderCardSkeletons;
