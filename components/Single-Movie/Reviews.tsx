"use client";

import React from "react";
import InformationContainer from "./InformationContainer";
import useEmblaCarousel from "embla-carousel-react";
import { Stars } from "../ui/stars";
import { MovieReview } from "@/types/types";
import { formatDate } from "@/lib/helpers";

const Reviews = ({ reviews }: { reviews: MovieReview[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start" as const,
    containScroll: "trimSnaps" as const,
    slidesToScroll: 2,
    breakpoints: {
      "(max-width: 1048px)": { slidesToScroll: 1 },
      "(min-width: 1280px)": { slidesToScroll: 1 },
      "(min-width: 1560px)": { slidesToScroll: 2 },
    },
    dragFree: true,
  });

  return (
    <InformationContainer
      title="Reviews"
      scroll={reviews.length > 0 ? true : false}
      emblaApi={emblaApi}
      reviews
      className=" relative"
    >
      {reviews.length === 0 ? (
        <div className="text-center text-gray-60 text-sm sm:text-lg py-6">
          No reviews yet! <br />
          Be the first to share your thoughts.
        </div>
      ) : (
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y backface-hidden w-full h-full gap-3 lg:gap-5">
            {reviews.map((review, index) => (
              <div key={index} className="flex-none">
                <div className="p-6 sm:p-10 relative rounded-2xl overflow-hidden min-h-[175px] sm:min-h-[260px] w-[280px] sm:w-[400px] md:w-[380px] lg:w-[440px] space-y-4 sm:space-y-6 bg-black-6 border border-black-15">
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <h4 className="text-sm sm:text-xl">{review.author}</h4>
                      <span className=" text-xs sm:text-base text-gray-60">
                        {formatDate(review.created_at)}
                      </span>
                    </div>
                    <div className="bg-black-8 border border-black-15 py-1 px-2 rounded-full flex items-center gap-2">
                      <Stars
                        rating={(review.author_details.rating ?? 0) / 2}
                        className="size-3 sm:size-4"
                      />
                      <span className="text-sm sm:text-base text-gray-60">
                        {review.author_details.rating ?? 0}
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs sm:text-base line-clamp-4 text-gray-60">
                      {review.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </InformationContainer>
  );
};

export default Reviews;
