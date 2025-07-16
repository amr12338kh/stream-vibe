import React from "react";
import MoviesBackground from "../MoviesBackground";
import Image from "next/image";
import { Button } from "../ui/button";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-black-8/40 before:via-transparent before:to-black-8/90 before:z-10">
      <MoviesBackground />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 animate-fade-in">
        <div className="w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] lg:w-[300px] lg:h-[300px] 2xl:w-[320px] 2xl:h-[320px] relative">
          <div className="absolute inset-0 bg-primary/80 rounded-full animate-reveal-glow" />
          <Image
            src="/hero-logo.png"
            alt="StreamVibe logo"
            fill
            sizes="(max-width: 640px) 200px, (max-width: 1024px) 280px, 350px"
            priority
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 w-full animate-fade-up">
        <div className="text-center mx-auto px-4 space-y-2 sm:space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold drop-shadow-2xl">
            Stream Without Limits
          </h1>

          <p className="hidden sm:block text-gray-75 mx-auto w-full max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl text-sm lg:text-base leading-relaxed">
            Step into a world where every story comes alive. StreamVibe brings
            you an unrivaled collection of blockbusters, award-winning series,
            and exclusive originals. Your perfect entertainment experience
            awaits, crafted just for you.
          </p>

          <p className="text-gray-75 text-sm max-w-md mx-auto sm:hidden">
            Step into a world where every story comes alive. Your perfect
            entertainment experience awaits.
          </p>

          <Link href="/movies" className="inline-block">
            <Button
              className="flex items-center gap-2 md:gap-3 px-3 py-4 md:px-5 md:py-6 text-sm md:text-lg"
              aria-label="Start watching movies and shows"
            >
              <FaPlay className="size-3 md:size-5" />
              Start Watching Now
            </Button>
          </Link>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black-8/90 via-transparent to-black-8/40 z-[15]" />
    </section>
  );
};

export default Hero;
