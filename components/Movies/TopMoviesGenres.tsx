import React from "react";
import Carousel from "../ui/carousel";
import { getAllGenres, getDiscoverMovies } from "@/lib/utils";
import GenreCard from "./GenreCard";

const TopMoviesGenres = async () => {
  const genres = await getAllGenres();

  return (
    <Carousel title="Popular Top 10 In Genres" slidesToScroll={4}>
      {genres.map(async (genre) => {
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
