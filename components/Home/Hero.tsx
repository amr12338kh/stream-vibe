import React from "react";
import MoviesBackground from "../MoviesBackground";
import Image from "next/image";
import { Button } from "../ui/button";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <MoviesBackground />

      <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-20">
        <div className="w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] lg:w-[300px] lg:h-[300px] 2xl:w-[320px] 2xl:h-[320px] ">
          <Image
            src="/hero-logo.png"
            alt="StreamVibe logo"
            fill
            sizes="(max-width: 640px) 200px, (max-width: 1024px) 280px, 350px"
            priority
            quality={90}
            className="object-contain"
          />
        </div>
      </div>

      <div className=" absolute bottom-16 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 w-full">
        <div className="text-center mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold mb-1 sm:mb-2">
            The Best Streaming Experience
          </h1>

          <p className="hidden sm:block text-gray-60 mx-auto  w-full max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl text-xs lg:text-sm xl:text-[18px]">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch.
          </p>

          <p className="text-gray-60 text-sm max-w-md sm:hidden">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere.
          </p>

          <Link href="/movies" className="inline-block mt-6 sm:mt-8">
            <Button
              size="lg"
              className="flex items-center gap-2"
              aria-label="Start watching movies and shows"
            >
              <FaPlay className="size-4" />
              Start Watching Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
