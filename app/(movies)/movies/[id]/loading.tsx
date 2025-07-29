import Section from "@/components/Section";
import BannerSkeleton from "@/components/Skeletons/BannerSkeleton";
import { Skeleton } from "@/components/ui/skeleton";
import { CastLoading } from "@/components/Skeletons/CastSkeleton";
import { PersonCardLoading } from "@/components/Skeletons/PersonCardSkeleton";
import { ReviewsLoading } from "@/components/Skeletons/ReviewsCardSkeleton";
import InformationContainer from "@/components/Single-Movie/InformationContainer";
import { Star } from "lucide-react";
import HeadingSkeleton from "@/components/Skeletons/HeadingSkeleton";
import RenderCardSkeletons from "@/components/Skeletons/RenderCardSkeletons";
import CTASkeleton from "@/components/Skeletons/CTASkeleton";

const loading = () => {
  return (
    <main>
      <BannerSkeleton />

      <Section className="pt-0! -mt-28 z-30 relative">
        <div className="flex flex-col xl:grid xl:grid-cols-3 gap-2">
          <div className="xl:col-span-2 flex flex-col gap-y-2">
            {/* Information Section Loading */}
            {/* Movie Details Loading */}
            <InformationContainer className="space-y-4">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full max-w-2xl" />
              <Skeleton className="h-4 w-full max-w-xl" />
            </InformationContainer>

            {/* Cast Loading */}
            <div className="hidden lg:block">
              <CastLoading />
            </div>

            {/* Reviews Loading */}
            <div className="hidden lg:block">
              <ReviewsLoading />
            </div>
          </div>

          <div>
            <InformationContainer className="space-y-8">
              <div className="space-y-4">
                <Skeleton className="w-28 h-5" />
                <Skeleton className="w-16 h-3" />
              </div>

              <div className=" space-y-4">
                <Skeleton className="w-28 h-5" />
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 2 }).map((_, i) => (
                    <div key={i} className=" bg-black-8 p-3 rounded-lg">
                      <Skeleton className=" w-18 h-4" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 w-full">
                <Skeleton className="w-28 h-5" />
                <div className="flex w-full gap-3 sm:gap-5">
                  {Array.from({ length: 2 }).map((_, i) => (
                    <div
                      key={i}
                      className=" rounded-xl bg-black-8 border border-black-15 px-3 sm:px-4 py-5 space-y-2"
                    >
                      <Skeleton className="w-24 h-5" />
                      <div className="flex items-center gap-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="size-3 sm:size-4 animate-pulse text-black-20"
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className=" space-y-4">
                <Skeleton className="w-28 h-5" />
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className=" bg-black-8 p-3 rounded-lg">
                      <Skeleton className=" w-18 h-4" />
                    </div>
                  ))}
                </div>
              </div>

              <PersonCardLoading />
              <PersonCardLoading />
            </InformationContainer>
          </div>

          {/* Cast Loading */}
          <div className="lg:hidden">
            <CastLoading />
          </div>

          {/* Reviews Loading */}
          <div className="lg:hidden">
            <ReviewsLoading />
          </div>
        </div>
      </Section>

      <Section>
        {/* Recommendations Loading */}
        <div>
          <HeadingSkeleton subtitle className="mb-0!" />
          <RenderCardSkeletons />
        </div>
      </Section>

      <Section>
        {/* CTA Loading */}
        <CTASkeleton />
      </Section>
    </main>
  );
};

export default loading;
