"use client";

import { useSearchParams } from "next/navigation";
import SearchInput from "./SearchInput";
import Section from "../Section";
import Heading from "../Heading";
import CTA from "../Home/CTA";
import MovieCard from "../Movies/MovieCard";
import { useMovieSearch } from "@/hooks/use-movie-search";
import { Movie } from "@/types/types";
import { Search } from "lucide-react";
import CardSkeleton from "../Skeletons/CardSkeleton";

const SearchPage = ({ trendingMovies }: { trendingMovies?: Movie[] }) => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const { movies, isLoading, error } = useMovieSearch(query);

  return (
    <main className="pt-10">
      <Section className="pb-0!">
        <SearchInput />
      </Section>
      <Section>
        {query ? (
          <>
            <Heading
              title={`Search Results: "${query}"`}
              subtitle={`Found ${movies.length} titles you might love.`}
            />

            {isLoading ? (
              <LoadingGrid />
            ) : movies.length === 0 ? (
              <NoResults />
            ) : (
              <>
                {error && (
                  <div className="text-red-500 text-center py-4">{error}</div>
                )}

                {!isLoading && !error && (
                  <div className="grid grid-cols-1 tablet:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                    {movies.map((movie: Movie) => (
                      <MovieCard key={movie.id} movie={movie} isWide cols />
                    ))}
                  </div>
                )}
              </>
            )}
          </>
        ) : (
          <>
            <Heading
              title="Discover The Top Rated Movies Of All Time"
              subtitle="Browse through our extensive collection of top rated movies. From classics to new releases, find your next favorite movie"
            />
            <div className="grid grid-cols-1  tablet:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
              {trendingMovies?.map((movie: Movie) => (
                <MovieCard key={movie.id} movie={movie} isWide cols />
              ))}
            </div>
          </>
        )}
      </Section>
      <Section>
        <CTA />
      </Section>
    </main>
  );
};

const LoadingGrid = () => (
  <div className="grid grid-cols-1 tablet:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
    {[...Array(6)].map((_, i) => (
      <CardSkeleton key={i} isWide cols />
    ))}
  </div>
);

const NoResults = () => (
  <div className="flex flex-col items-center justify-center py-12 px-4">
    <div className="h-32 w-32 mb-6">
      <Search className="h-full w-full text-gray-400" />
    </div>
    <h3 className="text-xl font-semibold mb-2">No movies found</h3>
    <p className="text-gray-500 text-center max-w-md">
      We couldn&apos;t find any movies matching your search. Try adjusting your
      search term.
    </p>
  </div>
);

export default SearchPage;
