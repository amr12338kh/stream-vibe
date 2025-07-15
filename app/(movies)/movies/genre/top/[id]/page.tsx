import MovieCard from "@/components/Movies/MovieCard";
import Section from "@/components/Section";
import { formatGenreName, getGenreNameById } from "@/lib/helpers";
import { getDiscoverMovies } from "@/lib/utils";
import React from "react";
import type { Metadata } from "next";
import MoviesWrapper from "@/components/Movies/MoviesWrapper";
import Carousel from "@/components/ui/carousel";
import TopMoviesGenres from "@/components/Movies/TopMoviesGenres";
import MustWatchMovies from "@/components/Movies/MustWatchMovies";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const genreName = await getGenreNameById(id);
  const formattedName = formatGenreName(genreName);

  return {
    title: `Top Rated ${formattedName} Movies - StreamVibe`,
    description: `Experience the best ${formattedName} movies on StreamVibe. From critically acclaimed masterpieces to fan favorites, discover your next must-watch film!`,
    openGraph: {
      title: `Top Rated ${formattedName} Movies - StreamVibe`,
      description: `Experience the best ${formattedName} movies on StreamVibe. From critically acclaimed masterpieces to fan favorites, discover your next must-watch film!`,
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
    <MoviesWrapper>
      <Section className="">
        <Carousel
          title={`Top Rated ${formattedName} Movies`}
          subtitle={`Discover the highest-rated ${formattedName} films that are making waves`}
          className="!gap-0"
        >
          {movies.slice(0, 10).map((movie, i) => (
            <MovieCard key={movie.id} movie={movie} isTop number={i} />
          ))}
        </Carousel>
      </Section>

      <Section id="top-genres">
        <TopMoviesGenres genreId={id} />
      </Section>

      <Section
        id="must-watch"
        className="bg-gradient-to-b from-black-8 via-red-950/80 to-black-8 !py-16 sm:!py-24"
      >
        <MustWatchMovies />
      </Section>
    </MoviesWrapper>
  );
};

export default page;
