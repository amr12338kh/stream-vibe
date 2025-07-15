import React from "react";
import CTA from "../Home/CTA";
import MoviesBanner from "./MoviesBanner";

const MoviesWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <section>
        <MoviesBanner />
      </section>

      {/* Movies Content */}
      <div className="relative -mt-28 md:-mt-40 z-30">{children}</div>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-t from-black via-gray-900 to-black padding-x py-16 sm:py-24">
        <CTA />
      </section>
    </main>
  );
};

export default MoviesWrapper;
