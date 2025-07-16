import React from "react";
import Carousel from "../ui/carousel";
import { getMovieRecommendations } from "@/lib/utils";
import MovieCard from "./MovieCard";

const Recommendations = async ({
  id,
  movieName,
}: {
  id: string;
  movieName: string;
}) => {
  const movies = await getMovieRecommendations(id);

  return (
    <Carousel
      title="More Like This"
      subtitle={`Similar to ${movieName}`}
      slidesToScroll={4}
    >
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Carousel>
  );
};

export default Recommendations;
