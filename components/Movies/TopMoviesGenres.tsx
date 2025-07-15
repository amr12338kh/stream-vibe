import React from "react";
import Carousel from "../ui/carousel";
import { getAllGenres, getDiscoverMovies } from "@/lib/utils";
import GenreCard from "./GenreCard";

const TopMoviesGenres = async ({ genreId }: { genreId?: string }) => {
  const genres = await getAllGenres();

  const genresFiltered = genres.filter((genre) => genre.id !== Number(genreId));

  return (
    <Carousel
      title={
        genreId ? "Explore Other Popular Genres" : "Most Popular Movie Genres"
      }
      slidesToScroll={4}
    >
      {(genreId ? genresFiltered : genres).map(async (genre) => {
        const movies = await getDiscoverMovies(
          genre.id.toString(),
          "vote_count.desc"
        );
        return (
          <GenreCard
            key={genre.id}
            isTopGenre
            movies={movies}
            genreId={genre.id}
            genreName={genre.name}
          />
        );
      })}
    </Carousel>
  );
};

export default TopMoviesGenres;
