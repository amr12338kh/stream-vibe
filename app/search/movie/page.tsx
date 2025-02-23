import SearchPage from "@/components/Search/SearchPage";
import { getTopRatedMovies } from "@/lib/utils";
import React from "react";

const page = async () => {
  const trendingMovies = await getTopRatedMovies();

  return <SearchPage trendingMovies={trendingMovies} />;
};

export default page;
