import React from "react";
import Carousel from "../ui/carousel";
import MovieCard from "./MovieCard";
import { getWeeklyTrendingMovies } from "@/lib/utils";

const WeekChoices = async () => {
  const movies = await getWeeklyTrendingMovies();

  return (
    <Carousel title="This Week's Choices" className="!gap-0">
      {movies.map((movie, i) => (
        <MovieCard key={i} movie={movie} number={i} isTop />
      ))}
    </Carousel>
  );
};

export default WeekChoices;
