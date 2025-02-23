import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { cn } from "@/lib/utils";

export const Stars = ({
  rating,
  className,
}: {
  rating: number;
  className?: string;
}) => {
  return (
    <span className="flex items-center text-primary gap-[2px]">
      {Array.from({ length: 5 }).map((_, index) => {
        // Get the whole number and decimal part
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 > 0;

        // Show full star
        if (index < fullStars) {
          return <FaStar key={index} className={cn(className)} />;
        }
        // Show half star if there's any decimal
        else if (index === fullStars && hasHalfStar) {
          return <FaStarHalfAlt key={index} className={cn(className)} />;
        }
        // Show empty star
        else {
          return <FaRegStar key={index} className={cn(className)} />;
        }
      })}
    </span>
  );
};
