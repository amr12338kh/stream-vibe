import Heading from "@/components/Heading";
import CTA from "@/components/Home/CTA";
import MovieCard from "@/components/Movies/MovieCard";
import MoviesContainer from "@/components/Movies/MoviesContainer";
import Section from "@/components/Section";
import { formatGenreName, getGenreNameById } from "@/lib/helpers";
import { getDiscoverMovies } from "@/lib/utils";
import React from "react";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const genreName = await getGenreNameById(id);
  const formattedName = formatGenreName(genreName);

  return {
    title: `Top 10 in ${formattedName} Genre - StreamVibe`,
    description: `Discover the top 10 movies in the ${formattedName} genre on StreamVibe. Explore the best-rated films handpicked for you!`,
    openGraph: {
      title: `Top 10 in ${formattedName} Genre - StreamVibe`,
      description: `Discover the top 10 movies in the ${formattedName} genre on StreamVibe. Explore the best-rated films handpicked for you!`,
      url: `https://streamvibe-ak.vercel.app/movies/genre/top/${id}`,
      siteName: "StreamVibe",
      type: "website",
    },
  };
}

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const [movies, genreName] = await Promise.all([
    getDiscoverMovies(id, "vote_count.desc"),
    getGenreNameById(id),
  ]);
  const formattedName = formatGenreName(genreName);

  return (
    <main className="pt-10">
      <Section>
        <Heading
          title={`Top 10 in ${formattedName} Genre`}
          subtitle={`Explore our top 10 of movies in ${formattedName} genre`}
          className="sm:hidden"
        />
        <MoviesContainer title={`Top 10 in ${formattedName} Genre`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {movies.slice(0, 10).map((movie, i) => (
              <MovieCard key={movie.id} movie={movie} number={i + 1} isWide />
            ))}
          </div>
        </MoviesContainer>
      </Section>

      <Section>
        <CTA />
      </Section>
    </main>
  );
};

export default page;
