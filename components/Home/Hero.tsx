import React from "react";
import MoviesBackground from "../MoviesBackground";
import Image from "next/image";
import { Button } from "../ui/button";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <section className=" relative min-h-screen">
      <MoviesBackground />
      <div className="absolute translate-center top-[400px] z-20 flex flex-col items-center space-y-32 w-full">
        <div className=" max-w-[250px] sm:max-w-[300px] lg:max-w-[400px]">
          <Image
            src="/hero-logo.png"
            alt="hero logo"
            width={400}
            height={400}
          />
        </div>
      </div>
      <div className=" absolute bottom-10 flex flex-col z-20 text-center w-full items-center px-4">
        <h1 className=" text-[28px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] font-bold mb-2 lg:mb-3">
          The Best Streaming Experience
        </h1>
        <p className=" hidden sm:block text-gray-60  w-full max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl text-xs lg:text-sm xl:text-[18px]">
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With StreamVibe, you
          can enjoy a wide variety of content, including the latest
          blockbusters, classic movies, popular TV shows, and more. You can also
          create your own watchlists, so you can easily find the content you
          want to watch.
        </p>
        <p className="text-muted-foreground text-sm max-w-md sm:hidden">
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere.
        </p>
        <Link href="/movies">
          <Button size="lg" className="flex mt-10">
            <FaPlay className=" size-4" /> Start Watching Now
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
