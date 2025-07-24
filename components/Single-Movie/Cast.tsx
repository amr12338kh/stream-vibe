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
        <div className="flex touch-pan-y backface-hidden w-full h-full gap-2">
          {cast?.map(
            (member, index) =>
              member.order < 20 &&
              member.profile_path && (
                <div key={index} className="flex-none">
                  <div className="w-[70px] h-[70px] sm:h-[100px] sm:w-[100px] md:w-[133px] md:h-[133px] flex items-center relative rounded-xl overflow-hidden group transition-transform duration-300 hover:scale-105">
                    <img
                      src={getImagePath(member.profile_path)}
                      alt={member.name}
                      loading="lazy"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black-10/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <div className="p-2 max-w-[70px] sm:max-w-[100px] md:max-w-[133px] space-y-1">
                    <h3 className="text-[11px] sm:text-[13px] font-medium leading-3 line-clamp-2">
                      {member.name}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-gray-40 line-clamp-2 font-medium text-muted-foreground">
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
