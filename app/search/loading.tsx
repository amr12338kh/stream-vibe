import Section from "@/components/Section";
import CTASkeleton from "@/components/Skeletons/CTASkeleton";
import HeadingSkeleton from "@/components/Skeletons/HeadingSkeleton";
import RenderCardSkeletons from "@/components/Skeletons/RenderCardSkeletons";
import { Skeleton } from "@/components/ui/skeleton";

import React from "react";

const loading = () => {
  return (
    <main className="pt-10">
      <Section className="pb-0!">
        <Skeleton className="h-12 sm:h-14 w-full rounded-md border border-black-15" />
      </Section>
      <Section>
        <HeadingSkeleton />

        <RenderCardSkeletons
          className="grid grid-cols-1 tablet:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6"
          count={9}
          isWide
          cols
        />
      </Section>
      <Section>
        <CTASkeleton />
      </Section>
    </main>
  );
};

export default loading;
