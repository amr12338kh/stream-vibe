import React from "react";
import Carousel from "../ui/carousel";
import { getAllGenres, getDiscoverMovies } from "@/lib/utils";
import GenreCard from "./GenreCard";

const MoviesGenres = async ({ home }: { home?: boolean }) => {
  const genres = await getAllGenres();

  return (
    <Carousel
      title={home ? "Explore our wide variety of categories" : "Our Genres"}
      subtitle={
        home
          ? "Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
          : ""
      }
    >
      {genres.map(async (genre) => {
        const movies = await getDiscoverMovies(genre.id.toString());
        return (
          <GenreCard
            key={genre.id}
            isGenre
            movies={movies}
            genreId={genre.id}
            genreName={genre.name}
          />
        );
      })}
    </Carousel>
  );
};

export default MoviesGenres;
