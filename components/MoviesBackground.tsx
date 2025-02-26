import React from "react";

const MoviesBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Top gradient overlay */}
      <div className="absolute z-[1] top-0 w-full h-3/4 bg-gradient-to-b from-primary-dark-gray from-5% to-transparent" />

      {/* Bottom gradient overlay */}
      <div className="absolute z-[1] bottom-0 w-full h-3/4 bg-gradient-to-t from-primary-dark-gray from-5% to-transparent" />

      {/* Background image */}
      <div className="absolute inset-0 bg-movies bg-cover bg-center bg-no-repeat w-full h-full" />
    </div>
  );
};

export default MoviesBackground;
