import CTA from "@/components/Home/CTA";
import MoviesBanner from "@/components/Movies/MoviesBanner";
import MoviesContainer from "@/components/Movies/MoviesContainer";
import MoviesGenres from "@/components/Movies/MoviesGenres";
import MustWatchMovies from "@/components/Movies/MustWatchMovies";
import NewReleasesMovies from "@/components/Movies/NewReleasesMovies";
import TopMoviesGenres from "@/components/Movies/TopMoviesGenres";
import TrendingMovies from "@/components/Movies/TrendingMovies";
import Section from "@/components/Section";

const page = async () => {
  return (
    <main>
      <Section className="!pb-0 sm:!py-20">
        <MoviesBanner />
      </Section>

      <Section className="!pt-0 " variant="secondary">
        <MoviesContainer>
          <section id="genres">
            <MoviesGenres />
          </section>

          <section id="top-genres">
            <TopMoviesGenres />
          </section>

          <section id="trending">
            <TrendingMovies />
          </section>

          <section id="new-release">
            <NewReleasesMovies />
          </section>

          <section id="must-watch">
            <MustWatchMovies />
          </section>
        </MoviesContainer>
      </Section>

      <Section>
        <CTA />
      </Section>
    </main>
  );
};

export default page;
