"use client";

import React from "react";
import Heading from "../Heading";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/data/data";
import { FaqDataProps } from "@/types/types";
import { cn } from "@/lib/utils";
import usePageWidth from "@/hooks/usePageWidth";

const FAQ = () => {
  const halfIndex = Math.ceil(faqData.length / 2);
  const firstHalf = faqData.slice(0, halfIndex);
  const secondHalf = faqData.slice(halfIndex);

  const pageWidth = usePageWidth();

  return (
    <div>
      <div className="heading-mb flex flex-col md:flex-row items-start md:items-center justify-between w-full">
        <Heading
          title="Frequently Asked Questions"
          subtitle="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
          className="md:mb-0!"
        />
        <Button>Ask a Question</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:gap-16 xl:gap-24 2xl:gap-x-32">
        <div className="w-full">
          {firstHalf.map(({ title, content }, index) => (
            <div key={index}>
              <Card title={title} content={content} index={index + 1} />
              {pageWidth < 768 ? (
                <RedLine />
              ) : (
                index !== firstHalf.length - 1 && <RedLine />
              )}
            </div>
          ))}
        </div>
        <div className="w-full">
          {secondHalf.map(({ title, content }, index) => (
            <div key={index}>
              <Card
                title={title}
                content={content}
                index={index + 1 + halfIndex}
              />
              {index !== secondHalf.length - 1 && <RedLine />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const RedLine = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "my-6 h-px w-full bg-linear-to-r from-transparent via-primary/90 via-20% to-transparent",
      className
    )}
  />
);

const Card = ({ title, content, index }: FaqDataProps) => {
  return (
    <div className="flex items-center space-x-2 lg:space-x-4 xl:space-x-5 2xl:space-x-6">
      <div className="p-3 sm:p-4 md:p-5 bg-black-12 border border-black-15 rounded-lg">
        <h3>{index && index < 10 ? `0${index}` : index}</h3>
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem className="border-b-0" value="item-1">
          <AccordionTrigger className=" w-full text-start text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-[22px]">
            {title}
          </AccordionTrigger>
          <AccordionContent className=" text-gray-60">
            {content}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
