import MovieCard from "@/components/Movies/MovieCard";
import Section from "@/components/Section";
import { formatGenreName, getGenreNameById } from "@/lib/helpers";
import { getDiscoverMovies } from "@/lib/utils";
import React from "react";
import type { Metadata } from "next";
import MoviesWrapper from "@/components/Movies/MoviesWrapper";
import Carousel from "@/components/ui/carousel";
import GenreCard from "@/components/Movies/GenreCard";
import MustWatchMovies from "@/components/Movies/MustWatchMovies";
import MoviesGenres from "@/components/Movies/MoviesGenres";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const genreName = await getGenreNameById(id);
  const formattedName = formatGenreName(genreName);

  return {
    title: `${formattedName} Movies - StreamVibe`,
    description: `Explore a wide collection of ${formattedName} movies on StreamVibe. Find your next favorite film in the ${formattedName} genre!`,
    openGraph: {
      title: `${formattedName} Movies - StreamVibe`,
      description: `Explore a wide collection of ${formattedName} movies on StreamVibe. Find your next favorite film in the ${formattedName} genre!`,
      url: `https://streamvibe-ak.vercel.app/movies/genre/${id}`,
      siteName: "StreamVibe",
      type: "website",
    },
  };
}

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const [movies, genreName] = await Promise.all([
    getDiscoverMovies(id),
    getGenreNameById(id),
  ]);

  const formattedName = formatGenreName(genreName);

  return (
    <MoviesWrapper>
      <Section variant="secondary">
        <Carousel
          title={`Best ${formattedName} Movies to Watch`}
          subtitle={`Explore our wide variety of movies from the ${formattedName} genre`}
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Carousel>
      </Section>

      <Section>
        <div className="hidden sm:block">
          <GenreCard
            movies={movies}
            genreId={Number(id)}
            genreName={formattedName}
            isTopGenre
            isWide
          />
        </div>

        <div className="sm:hidden">
          <GenreCard
            movies={movies}
            genreId={Number(id)}
            genreName={formattedName}
            isTopGenre
          />
        </div>
      </Section>

      <Section
        variant="secondary"
        id="must-watch"
        className="bg-gradient-to-b from-black-8 via-red-950/80 to-black-8 !py-16 sm:!py-24"
      >
        <MustWatchMovies />
      </Section>

      <Section variant="secondary" id="genres">
        <MoviesGenres genreId={id} />
      </Section>
    </MoviesWrapper>
  );
};

export default page;
