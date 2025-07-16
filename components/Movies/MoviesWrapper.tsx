import React from "react";
import CTA from "../Home/CTA";
import MoviesBanner from "./MoviesBanner";
import Section from "../Section";

const MoviesWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <section>
        <MoviesBanner />
      </section>

      {/* Movies Content */}
      <div className="relative -mt-28 md:-mt-40 z-30">{children}</div>

      {/* CTA Section */}
      <Section className="relative">
        <CTA />
      </Section>
    </main>
  );
};

export default MoviesWrapper;
