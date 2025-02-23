"use client";

import React from "react";
import Section from "@/components/Section";
import RenderCardSkeletons from "@/components/Skeletons/RenderCardSkeletons";
import CTASkeleton from "@/components/Skeletons/CTASkeleton";
import { cn } from "@/lib/utils";
import HeadingSkeleton from "./HeadingSkeleton";

const GenreLoadingPage = ({ top }: { top?: boolean }) => {
  return (
    <main className="pt-10">
      <Section>
        <HeadingSkeleton />
        <div className="sm:px-10 pt-0 pb-10 sm:py-16 sm:border border-black-15 sm:relative sm:rounded-xl">
          <div className="space-y-14 sm:space-y-24">
            <RenderCardSkeletons
              className={cn(
                "grid grid-cols-1 ",
                top
                  ? "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
                  : "tablet:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6"
              )}
              count={top ? 10 : 9}
              type="wide"
            />
          </div>
        </div>
      </Section>

      <Section>
        <CTASkeleton />
      </Section>
    </main>
  );
};

export default GenreLoadingPage;
