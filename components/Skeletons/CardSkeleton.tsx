import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";
import { cardContainerVariants } from "@/lib/variants";
import { cardTypeProps } from "@/types/types";

const CardSkeleton = ({ cardType }: { cardType: cardTypeProps }) => (
  <div className={cn(cardContainerVariants({ type: cardType }))}>
    <Skeleton className="w-full h-full rounded-lg" />
  </div>
);

export default CardSkeleton;
