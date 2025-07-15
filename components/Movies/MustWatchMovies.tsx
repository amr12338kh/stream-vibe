import React from "react";
import Carousel from "../ui/carousel";
import { getTopRatedMovies } from "@/lib/utils";
import MovieCard from "./MovieCard";

const MustWatchMovies = async () => {
  const movies = await getTopRatedMovies();

  return (
    <Carousel title="Must - Watch Movies" slidesToScroll={3} isWide>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} isWide />
      ))}
    </Carousel>
  );
};

export default MustWatchMovies;
