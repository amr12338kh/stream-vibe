import React from "react";
import Carousel from "../ui/carousel";
import { getTopRatedMovies } from "@/lib/utils";
import MovieCard from "./MovieCard";

const MustWatchMovies = async () => {
  const movies = await getTopRatedMovies();

  return (
    <Carousel title="Must - Watch Movies" slidesToScroll={4}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} isMust />
      ))}
    </Carousel>
  );
};

export default MustWatchMovies;
