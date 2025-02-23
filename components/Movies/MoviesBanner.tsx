import React from "react";
import BannerCarousel from "../ui/banner-carousel";
import { getNowPlayingMovies } from "@/lib/utils";
const MoviesBanner = async ({ single = false }: { single?: boolean }) => {
  const nowPlayingMovies = await getNowPlayingMovies();

  return (
    <BannerCarousel movies={nowPlayingMovies} single={single} loop autoplay />
  );
};

export default MoviesBanner;
