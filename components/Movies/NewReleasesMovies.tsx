import React from "react";
import Carousel from "../ui/carousel";
import { getNowPlayingMovies } from "@/lib/utils";
import MovieCard from "./MovieCard";

const NewReleasesMovies = async () => {
  const movies = await getNowPlayingMovies();

  return (
    <Carousel title="New Releases">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} isNew />
      ))}
    </Carousel>
  );
};

export default NewReleasesMovies;
