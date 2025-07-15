import React from "react";
import Carousel from "../ui/carousel";
import { getTrendingMovies } from "@/lib/utils";
import MovieCard from "./MovieCard";

const TrendingMovies = async () => {
  const movies = await getTrendingMovies();

  return (
    <Carousel title="Trending Now">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Carousel>
  );
};

export default TrendingMovies;
