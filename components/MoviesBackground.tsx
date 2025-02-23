import React from "react";

const MoviesBackground = () => {
  return (
    <div className=" relative w-full min-h-screen">
      <div className=" absolute z-10 -top-28 w-full h-3/4 bg-gradient-to-b from-primary-dark-gray from-5% to-transparent" />
      <div className=" absolute z-10 bottom-28 w-full h-3/4 bg-gradient-to-t from-primary-dark-gray from-5% to-transparent" />
      <div className="absolute -top-28 inset-0 bg-movies bg-cover bg-center bg-no-repeat w-full h-full" />
    </div>
  );
};

export default MoviesBackground;
