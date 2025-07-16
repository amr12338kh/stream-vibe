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
      <Section id="categories" variant="homepage">
        <MoviesGenres home />
      </Section>
      <Section id="devices" variant="homepage">
        <Devices />
      </Section>
      <Section id="faq" variant="homepage">
        <FAQ />
      </Section>
      <Section id="pricing" variant="homepage">
        <Pricing isHome />
      </Section>
      <Section variant="homepage">
        <CTA />
      </Section>
    </main>
  );
}
