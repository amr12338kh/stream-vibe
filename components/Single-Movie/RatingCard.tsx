import { Stars } from "../ui/stars";

const RatingCard = ({
  platform,
  rating,
}: {
  platform: string;
  rating: string;
}) => (
  <div className="bg-black-8 border border-black-15 rounded-xl p-3 sm:p-4 space-y-2 transition-all duration-300 hover:bg-black-6 hover:border-black-20 group">
    <span className="text-sm sm:text-base md:text-lg font-medium text-gray-40 group-hover:text-white transition-colors duration-300">
      {platform}
    </span>
    <div className="flex items-center gap-3">
      <Stars rating={Number(rating) / 2} className="size-3 sm:size-4" />
      <span className="text-sm sm:text-base font-semibold group-hover:text-primary transition-colors duration-300">
        {rating}
      </span>
    </div>
  </div>
);

export default RatingCard;
