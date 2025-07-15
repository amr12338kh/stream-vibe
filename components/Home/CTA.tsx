"use client";

import Image from "next/image";
import Heading from "../Heading";
import { Button } from "../ui/button";
import usePageWidth from "@/hooks/usePageWidth";

const CTA = () => {
  const pageWidth = usePageWidth();

  return (
    <div className="w-full h-[315px] relative rounded-xl overflow-hidden border border-black-15">
      <Image
        src="/cta-image.png"
        alt="CTA background"
        fill
        className="object-cover"
        priority={false}
        quality={80}
      />
      <div className="relative w-full h-full z-10 bg-gradient-to-b md:bg-gradient-to-r from-black-6 from-20%  to-primary/25 backdrop-brightness-50 bg-blend-overlay to-90%">
        <div className="px-8 md:px-20 flex flex-col md:flex-row justify-center md:justify-between items-center w-full h-full gap-y-10 md:gap-y-0">
          <Heading
            className="!mb-0 text-center md:text-start"
            titleClassName="uppercase"
            title="Start your free trial today"
            subtitle="This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe."
          />
          <Button size={pageWidth < 1024 ? "default" : "xl"}>
            Start a Free Trail
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
