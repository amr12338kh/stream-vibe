import CTA from "@/components/Home/CTA";
import Pricing from "@/components/Home/Pricing";
import Section from "@/components/Section";
import Features from "@/components/Subscriptions/Features";
import React from "react";

const page = () => {
  return (
    <main className="pt-10">
      <Section>
        <Pricing />
      </Section>

      <Section>
        <Features />
      </Section>

      <Section>
        <CTA />
      </Section>
    </main>
  );
};

export default page;
