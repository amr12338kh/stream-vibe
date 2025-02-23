import CTA from "@/components/Home/CTA";
import Devices from "@/components/Home/Devices";
import FAQ from "@/components/Home/FAQ";
import Hero from "@/components/Home/Hero";
import Pricing from "@/components/Home/Pricing";
import MoviesGenres from "@/components/Movies/MoviesGenres";
import Section from "@/components/Section";

export default function Home() {
  return (
    <main>
      <Hero />
      <Section id="categories" variant="secondary">
        <MoviesGenres home />
      </Section>
      <Section id="devices">
        <Devices />
      </Section>
      <Section id="faq">
        <FAQ />
      </Section>
      <Section id="pricing">
        <Pricing isHome />
      </Section>
      <Section>
        <CTA />
      </Section>
    </main>
  );
}
