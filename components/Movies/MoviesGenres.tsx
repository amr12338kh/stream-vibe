import React from "react";
import Carousel from "../ui/carousel";
import { getAllGenres, getDiscoverMovies } from "@/lib/utils";
import GenreCard from "./GenreCard";

const MoviesGenres = async ({
  home,
  genreId,
}: {
  home?: boolean;
  genreId?: string;
}) => {
  const genres = await getAllGenres();

  const genresFiltered = genres.filter((genre) => genre.id !== Number(genreId));

  return (
    <Carousel
      title={
        home
          ? "Discover Movies by Genre"
          : genreId
            ? "Explore More Genres"
            : "Browse All Genres"
      }
      subtitle={
        home
          ? "From heart-pounding action to touching dramas, find the perfect genre that matches your mood"
          : ""

        // genreId
        //   ? "Find more amazing movies across different genres"
        //   : "Find the perfect movie genre for your entertainment"
      }
    >
      {(genreId ? genresFiltered : genres).map(async (genre) => {
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
