import CTA from "@/components/Home/CTA";
import FAQ from "@/components/Home/FAQ";
import Section from "@/components/Section";
import ContactForm from "@/components/Support/ContactForm";
import React from "react";

const page = () => {
  return (
    <main className="pt-10">
      <Section id="contact-us">
        <ContactForm />
      </Section>
      <Section>
        <FAQ />
      </Section>
      <Section>
        <CTA />
      </Section>
    </main>
  );
};

export default page;
