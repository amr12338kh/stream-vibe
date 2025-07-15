import MoviesGenres from "@/components/Movies/MoviesGenres";
import MoviesWrapper from "@/components/Movies/MoviesWrapper";
import MustWatchMovies from "@/components/Movies/MustWatchMovies";
import NewReleasesMovies from "@/components/Movies/NewReleasesMovies";
import TopMoviesGenres from "@/components/Movies/TopMoviesGenres";
import TrendingMovies from "@/components/Movies/TrendingMovies";
import WeekChoices from "@/components/Movies/WeekChoices";
import Section from "@/components/Section";

const page = async () => {
  return (
    <MoviesWrapper>
      {/* New Releases */}
      <Section id="new-release">
        <NewReleasesMovies />
      </Section>

      {/* Genres Section */}
      <Section id="genres">
        <MoviesGenres />
      </Section>

      {/* Week Choices Section */}

      <Section
        id="week-choices"
        className="bg-gradient-to-b from-black-8 via-red-950/80 to-black-8 !py-16 sm:!py-24"
      >
        <WeekChoices />
      </Section>

      {/* Top Genres Section */}
      <Section id="top-genres">
        <TopMoviesGenres />
      </Section>

      {/* Trending Movies */}
      <Section
        id="trending"
        className="bg-gradient-to-t from-red-950/80 to-black-8"
      >
        <TrendingMovies />
      </Section>

      {/* Must Watch */}
      <Section
        id="must-watch"
        className="bg-gradient-to-b from-red-950/80 to-black-8"
      >
        <MustWatchMovies />
      </Section>
    </MoviesWrapper>
  );
};

export default page;
