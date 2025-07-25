import CTA from "@/components/Home/CTA";
import Recommendations from "@/components/Movies/Recommendations";
import Section from "@/components/Section";
import Information from "@/components/Single-Movie/Information";
import BannerCarousel from "@/components/ui/banner-carousel";
import {
  getSingleMovie,
  getSingleMovieCredits,
  getSingleMovieReviews,
} from "@/lib/utils";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const movie = await getSingleMovie(id);

  return {
    title: `${movie?.title} (${movie?.release_date?.slice(0, 4)}) - StreamVibe`,
    description: movie?.overview || "Watch this amazing movie on StreamVibe.",
    openGraph: {
      title: `${movie?.title} (${movie?.release_date?.slice(0, 4)}) - StreamVibe`,
      description: movie?.overview || "Watch this amazing movie on StreamVibe.",
      url: `https://streamvibe-ak.vercel.app/movies/${movie?.id}`,
      siteName: "StreamVibe",
      images: [
        {
          url: `https://image.tmdb.org/t/p/w780${movie?.poster_path}`,
          width: 780,
          height: 1170,
          alt: movie?.title,
        },
      ],
      type: "video.movie",
    },
  };
}

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const [movie, credits, reviews] = await Promise.all([
    getSingleMovie(id),
    getSingleMovieCredits(id),
    getSingleMovieReviews(id),
  ]);

  return (
    <main>
      <section>
        <BannerCarousel single movie={movie} />
      </section>

      <Section className="pt-0! -mt-28 z-20 relative">
        <Information movie={movie} credits={credits} reviews={reviews} />
      </Section>

      <Section>
        <Recommendations id={id} movieName={movie?.title} />
      </Section>

      <Section>
        <CTA />
      </Section>
    </main>
  );
};

export default page;
