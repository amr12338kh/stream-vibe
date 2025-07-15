import {
  TMDBResponse,
  TMDBError,
  MovieDetails,
  MovieReviewResponse,
  Person,
} from "@/types/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const TMDB_ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN;

if (!TMDB_ACCESS_TOKEN) {
  throw new Error("TMDB_ACCESS_TOKEN is missing in environment variables");
}

// Create an axios instance with default configuration
const tmdbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
  },
});

// Define custom error class for TMDB errors
class TMDBApiError extends Error {
  constructor(
    public statusCode: number,
    public endpoint: string,
    message: string
  ) {
    super(message);
    this.name = "TMDBApiError";
  }
}

export const getDataFromTMDB = async <T>(
  endpoint: string,
  options?: {
    params?: Record<string, unknown>;
    cacheTime?: number;
    language?: string;
    region?: string;
    maxRetries?: number;
  }
): Promise<T> => {
  const {
    params = {},
    cacheTime = 60 * 60 * 24, // 24 hours default cache
    language = "en-US",
    region = "US",
    maxRetries = 3, // Default retry attempts
  } = options || {};

  let lastError: Error | null = null;
  let retryDelay = 1000; // Start with 1 second delay

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      // Add common query parameters
      const queryParams = {
        ...params,
        language,
        region,
      };

      const response = await tmdbApi.get<TMDBResponse>(endpoint, {
        params: queryParams,
        headers: {
          "Cache-Control": `max-age=${cacheTime}`,
        },
      });

      // Handle rate limiting
      if (response.headers["x-ratelimit-remaining"] === "0") {
        console.warn("TMDB API rate limit reached");
      }

      return response.data as T;
    } catch (error) {
      lastError = error as Error;

      if (axios.isAxiosError(error)) {
        const tmdbError = error.response?.data as TMDBError;

        // Don't retry on client errors (4xx) except rate limits
        if (
          error.response?.status &&
          error.response.status < 500 &&
          error.response.status !== 429
        ) {
          throw new TMDBApiError(
            error.response.status,
            endpoint,
            tmdbError?.status_message || "Client error occurred"
          );
        }

        // For 429 (rate limit) or 5xx errors, retry if we have attempts left
        if (attempt < maxRetries) {
          console.warn(
            `Attempt ${attempt} failed, retrying in ${retryDelay}ms...`
          );
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
          retryDelay *= 2; // Exponential backoff
          continue;
        }

        // If we're out of retries throw the last error
        throw new TMDBApiError(
          tmdbError?.status_code || 500,
          endpoint,
          tmdbError?.status_message ||
            "An unexpected error occurred after all retries"
        );
      }

      // For non-Axios errors throw immediately
      throw new Error(
        `Failed to fetch data from TMDB: ${(error as Error).message}`
      );
    }
  }

  // All retries failed
  throw (
    lastError || new Error("Failed to fetch data from TMDB after all retries")
  );
};

//  Get Trending Movies
export const getTrendingMovies = async () => {
  try {
    const data = await getDataFromTMDB<TMDBResponse>(
      "/trending/movie/day?page=1&page=2&page=3",
      { language: "en-US" }
    );
    return data.results;
  } catch (error) {
    console.error("Failed to fetch trending movies: ", error);
    throw error;
  }
};

//  Get Weekly Trending Movies
export const getWeeklyTrendingMovies = async () => {
  try {
    const data = await getDataFromTMDB<TMDBResponse>("/trending/movie/week", {
      language: "en-US",
    });
    return data.results.slice(0, 5);
  } catch (error) {
    console.error("Failed to fetch weekly trending movies: ", error);
    throw error;
  }
};

// Get All Genres
export const getAllGenres = async () => {
  try {
    const data = await getDataFromTMDB<TMDBResponse>("/genre/movie/list");
    return data.genres;
  } catch (error) {
    console.error("Failed to fetch genres list: ", error);
    throw error;
  }
};

// Get Now Playing Movies
export const getNowPlayingMovies = async () => {
  try {
    const data = await getDataFromTMDB<TMDBResponse>("/movie/now_playing", {
      language: "en-US",
    });
    return data.results;
  } catch (error) {
    console.error("Failed to fetch now playing movies: ", error);
    throw error;
  }
};

// Get Top Rated Movies
export const getTopRatedMovies = async () => {
  try {
    const data = await getDataFromTMDB<TMDBResponse>("/movie/top_rated", {
      language: "en-US",
    });
    return data.results;
  } catch (error) {
    console.error("Failed to fetch top rated movies: ", error);
    throw error;
  }
};

// Get Discover Movies
export const getDiscoverMovies = async (genreId?: string, sort_by?: string) => {
  try {
    const params: Record<string, unknown> = {
      include_adult: false,
      include_video: false,
      language: "en-US",
      sort_by: sort_by || "popularity.desc",
    };
    // Add genre filter if genreId is provided
    if (genreId) {
      params.with_genres = genreId;
    }

    const data = await getDataFromTMDB<TMDBResponse>("/discover/movie", {
      params,
    });
    return data.results;
  } catch (error) {
    console.error("Failed to fetch movies by genre: ", error);
    throw error;
  }
};

// Get Single Movie
export const getSingleMovie = async (id: string) => {
  try {
    const data = await getDataFromTMDB<MovieDetails>(`/movie/${id}`, {
      language: "en-US",
      params: { append_to_response: "videos,images" }, // Include additional movie data
    });
    return data;
  } catch (error) {
    console.error("Failed to fetch single movie: ", error);
    throw error;
  }
};

// Get Single Movie Reviews
export const getSingleMovieReviews = async (id: string) => {
  try {
    const data = await getDataFromTMDB<MovieReviewResponse>(
      `/movie/${id}/reviews`
    );
    return data.results;
  } catch (error) {
    console.error("Failed to fetch single movie reviews: ", error);
    throw error;
  }
};

// Get Movie Runtime
export const getMovieRuntime = async (id: string) => {
  try {
    const data = await getDataFromTMDB<MovieDetails>(`/movie/${id}`);
    return data.runtime;
  } catch (error) {
    console.error("Failed to fetch movie runtime: ", error);
    throw error;
  }
};

// Get Single Movie Credits
export const getSingleMovieCredits = async (id: string) => {
  try {
    const data = await getDataFromTMDB<MovieDetails>(`/movie/${id}/credits?`);
    return data;
  } catch (error) {
    console.error("Failed to fetch single movie: ", error);
    throw error;
  }
};

// Generic function to get paginated movies
const getPaginatedMovies = async (
  endpoint: string,
  options: {
    totalPages?: number;
    maxConcurrentRequests?: number;
    queryParams?: Record<string, unknown>;
    cacheTime?: number;
  } = {}
) => {
  const {
    totalPages = 10,
    maxConcurrentRequests = 5,
    queryParams = {},
    cacheTime = 60 * 60 * 24, // 24 hours default
  } = options;

  try {
    // Create chunks of pages to process in batches
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    const pageChunks = [];

    for (let i = 0; i < pages.length; i += maxConcurrentRequests) {
      pageChunks.push(pages.slice(i, i + maxConcurrentRequests));
    }

    const allMovies = [];

    // Process chunks sequentially to avoid overwhelming the API
    for (const chunk of pageChunks) {
      const chunkRequests = chunk.map((page) =>
        getDataFromTMDB<TMDBResponse>(endpoint, {
          params: { ...queryParams, page },
          cacheTime,
        })
      );

      const chunkResponses = await Promise.all(
        chunkRequests.map((request) =>
          request.catch((error) => {
            console.error(`Failed to fetch page: ${error.message}`);
            return { results: [] };
          })
        )
      );

      allMovies.push(...chunkResponses.flatMap((data) => data.results));
    }

    // Remove any duplicate movies by ID
    const uniqueMovies = Array.from(
      new Map(allMovies.map((movie) => [movie.id, movie])).values()
    );

    if (uniqueMovies.length === 0) {
      throw new Error(`No movies were fetched from ${endpoint}`);
    }

    return uniqueMovies;
  } catch (error) {
    console.error(`Failed to fetch movies from ${endpoint}:`, error);
    throw new Error(
      `Failed to fetch movies from ${endpoint}: ${(error as Error).message}`
    );
  }
};

export const getDiscoverMoviesGenres = () =>
  getPaginatedMovies("/discover/movie", {
    queryParams: {
      include_adult: false,
      include_video: false,
      language: "en-US",
      sort_by: "popularity.desc",
    },
  });

export const getTopRatedMoviesGenres = () =>
  getPaginatedMovies("/movie/top_rated");

// Get Person Details
export const getPersonDetails = async (id: string) => {
  try {
    const data = await getDataFromTMDB<Person>(`/person/${id}`);
    return data;
  } catch (error) {
    console.error("Failed to fetch person details: ", error);
    throw error;
  }
};

// Get Movie Recommendations
export const getMovieRecommendations = async (id: string) => {
  try {
    const data = await getDataFromTMDB<TMDBResponse>(
      `/movie/${id}/recommendations`,
      {
        language: "en-US",
        params: {
          page: 1,
          sort_by: "vote_average.desc",
          "vote_count.gte": 100, // Ensure quality recommendations
        },
      }
    );
    return data.results;
  } catch (error) {
    console.error("Failed to fetch movie recommendations: ", error);
    throw error;
  }
};

export const getSearchedMovies = async (term: string) => {
  try {
    const data = await getDataFromTMDB<TMDBResponse>(`/search/movie`, {
      language: "en-US",
      params: {
        query: term,
        include_adult: false,
        "vote_count.gte": 50,
        sort_by: "popularity.desc",
      },
    });
    return data.results.filter(
      (movie) => movie.poster_path && movie.backdrop_path && movie.overview
    ); // Only return movies with complete data
  } catch (error) {
    console.error("Failed to fetch searched movies: ", error);
    throw error;
  }
};
