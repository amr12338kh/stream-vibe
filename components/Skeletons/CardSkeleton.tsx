import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";
import { cardTypeProps } from "@/types/types";

import { cva } from "class-variance-authority";

export const cardContainerVariants = cva(
  "group flex flex-col bg-black-10 transition-all duration-300 rounded-2xl border border-black-15 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary",
  {
    variants: {
      type: {
        genre:
          "p-5 sm:p-7 min-w-[230px] sm:min-w-[268px] h-[270px] sm:h-[310px]",
        top_genre:
          "p-5 sm:p-7 min-w-[270px] sm:min-w-[340px] h-[330px] sm:h-[380px]",
        must: "p-5 min-w-[270px] sm:min-w-[340px] h-[400px] md:h-[480px]",
        wide: "aspect-video",
        default: "p-5 min-w-[230px] sm:min-w-[268px] h-[320px] sm:h-[380px]",
      },
    },
    defaultVariants: {
      type: "default",
    },
  }
);

const CardSkeleton = ({ cardType }: { cardType: cardTypeProps }) => (
  <div className={cn(cardContainerVariants({ type: cardType }))}>
    <Skeleton className="w-full h-full rounded-lg" />
  </div>
);

export default CardSkeleton;
