import BannerSkeleton from "@/components/Skeletons/BannerSkeleton";
import Section from "@/components/Section";
import RenderCardSkeletons from "@/components/Skeletons/RenderCardSkeletons";
import CTASkeleton from "@/components/Skeletons/CTASkeleton";
import HeadingSkeleton from "@/components/Skeletons/HeadingSkeleton";

const MoviesLoadingPage = () => {
  return (
    <main>
      <BannerSkeleton />

      <div className="relative -mt-28 md:-mt-40 z-30">
        <Section variant="secondary">
          <HeadingSkeleton className="mb-0!" />
          <RenderCardSkeletons />
        </Section>

        <Section variant="secondary">
          <HeadingSkeleton className="mb-0!" />
          <RenderCardSkeletons />
        </Section>

        <Section variant="secondary">
          <HeadingSkeleton className="mb-0!" />
          <RenderCardSkeletons isWide />
        </Section>
      </div>

      <Section>
        <CTASkeleton />
      </Section>
    </main>
  );
};

export default MoviesLoadingPage;
