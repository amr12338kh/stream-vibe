// import Carousel from "@/components/ui/carousel";
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
  params: { id: string };
}): Promise<Metadata> {
  const genreName = await getGenreNameById(params.id);
  const formattedName = formatGenreName(genreName);

  return {
    title: `${formattedName} Movies - StreamVibe`,
    description: `Explore a wide collection of ${formattedName} movies on StreamVibe. Find your next favorite film in the ${formattedName} genre!`,
    openGraph: {
      title: `${formattedName} Movies - StreamVibe`,
      description: `Explore a wide collection of ${formattedName} movies on StreamVibe. Find your next favorite film in the ${formattedName} genre!`,
      url: `https://streamvibe-ak.vercel.app/movies/genre/${params.id}`,
      siteName: "StreamVibe",
      type: "website",
    },
  };
}

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const [movies, genreName] = await Promise.all([
    getDiscoverMovies(id),
    getGenreNameById(id),
  ]);

  const formattedName = formatGenreName(genreName);

  return (
    <main className="pt-10">
      <Section>
        <Heading
          title={`${formattedName} Genre`}
          subtitle={`Explore our wide variety of movies from ${formattedName} genre`}
          className="sm:hidden"
        />
        <MoviesContainer title={`${formattedName} Genre`}>
          <div className="grid grid-cols-1  tablet:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} isWide />
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
