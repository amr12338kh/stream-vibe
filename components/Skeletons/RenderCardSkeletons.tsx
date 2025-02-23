import { cn } from "@/lib/utils";
import CardSkeleton from "./CardSkeleton";
import { cardTypeProps } from "@/types/types";

const RenderCardSkeletons = ({
  count = 5,
  type,
  className,
}: {
  count?: number;
  type: cardTypeProps;
  className?: string;
}) => (
  <div
    className={cn(
      !className ? "flex gap-4 sm:gap-6 overflow-hidden" : className
    )}
  >
    {Array.from({ length: count }).map((_, i) => (
      <div key={i}>
        <CardSkeleton cardType={type} />
      </div>
    ))}
  </div>
);

export default RenderCardSkeletons;
