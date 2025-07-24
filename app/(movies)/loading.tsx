"use client";

import React from "react";
import Section from "@/components/Section";
import BannerSkeleton from "@/components/Skeletons/BannerSkeleton";
import HeadingSkeleton from "@/components/Skeletons/HeadingSkeleton";
import RenderCardSkeletons from "@/components/Skeletons/RenderCardSkeletons";
import CTASkeleton from "@/components/Skeletons/CTASkeleton";

const LoadingSkeleton = () => {
  return (
    <main>
      <Section className="pb-0! sm:py-20!">
        <BannerSkeleton />
      </Section>

      <Section className="pt-0!" variant="secondary">
        <div className="sm:px-5 md:px-10 pt-0 pb-10 sm:py-16 sm:border border-black-15 sm:relative sm:rounded-xl">
          <div className="space-y-14 sm:space-y-24">
            <div>
              <HeadingSkeleton isCarousel />
              <RenderCardSkeletons type="genre" />
            </div>

            <div>
              <HeadingSkeleton isCarousel />
              <RenderCardSkeletons count={4} type="top_genre" />
            </div>

            <div>
              <HeadingSkeleton isCarousel />
              <RenderCardSkeletons type="default" />
            </div>

            <div>
              <HeadingSkeleton isCarousel />
              <RenderCardSkeletons type="default" />
            </div>

            <div>
              <HeadingSkeleton isCarousel />
              <RenderCardSkeletons type="must" />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <CTASkeleton />
      </Section>
    </main>
  );
};

export default LoadingSkeleton;
