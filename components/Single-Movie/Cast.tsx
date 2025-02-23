/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import InformationContainer from "./InformationContainer";
import useEmblaCarousel from "embla-carousel-react";
import { CastMember } from "@/types/types";
import { getImagePath } from "@/lib/helpers";

const Cast = ({ cast }: { cast: CastMember[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start" as const,
    containScroll: "trimSnaps" as const,
    slidesToScroll: 3,
    breakpoints: {
      "(max-width: 640px)": { slidesToScroll: 2 },
    },
    dragFree: true,
  });

  return (
    <InformationContainer
      title="cast"
      scroll
      emblaApi={emblaApi}
      className=" relative"
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y backface-hidden w-full h-full gap-3 md:gap-5">
          {cast?.map(
            (member, index) =>
              member.order < 20 &&
              member.profile_path && (
                <div key={index} className="flex-none">
                  <div className="w-[70px] h-[70px] sm:h-[100px] sm:w-[100px] md:w-[133px] md:h-[133px] flex items-center relative rounded-xl overflow-hidden">
                    <img
                      src={getImagePath(member.profile_path)}
                      alt={member.name}
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-1 max-w-[70px] sm:max-w-[100px] md:max-w-[133px] space-y-[1px]">
                    <h3 className="text-xs sm:text-sm">{member.name}</h3>
                    <p className="text-[10px] sm:text-xs text-gray-60 line-clamp-2">
                      {member.character || member.known_for_department}
                    </p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </InformationContainer>
  );
};

export default Cast;
