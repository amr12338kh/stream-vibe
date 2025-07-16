import CTA from "@/components/Home/CTA";
import Pricing from "@/components/Home/Pricing";
import Section from "@/components/Section";
import Features from "@/components/Subscriptions/Features";
import React from "react";

const page = () => {
  return (
    <main className="pt-10">
      <Section variant="homepage" id="plans">
        <Pricing />
      </Section>

      <Section variant="homepage" id="features">
        <Features />
      </Section>

      <Section variant="homepage">
        <CTA />
      </Section>
    </main>
  );
};

export default page;
