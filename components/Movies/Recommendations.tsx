import React from "react";
import Carousel from "../ui/carousel";
import { getMovieRecommendations } from "@/lib/utils";
import MovieCard from "./MovieCard";

const Recommendations = async ({ id }: { id: string }) => {
  const movies = await getMovieRecommendations(id);

  return (
    <Carousel title="You May Also Like" slidesToScroll={4}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} isMust />
      ))}
    </Carousel>
  );
};

export default Recommendations;
