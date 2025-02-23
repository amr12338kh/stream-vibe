import { Stars } from "../ui/stars";

const RatingCard = ({
  platform,
  rating,
}: {
  platform: string;
  rating: string;
}) => (
  <div className="bg-black-8 border border-black-15 rounded-xl p-3 sm:p-4 space-y-1">
    <span className="text-sm sm:text-base md:text-lg">{platform}</span>
    <div className="flex items-center gap-2">
      <Stars rating={Number(rating) / 2} className="size-3 sm:size-4" />
      <span className="text-sm sm:text-base">{rating}</span>
    </div>
  </div>
);

export default RatingCard;
