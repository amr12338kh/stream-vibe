import CTA from "@/components/Home/CTA";
import Devices from "@/components/Home/Devices";
import FAQ from "@/components/Home/FAQ";
import Hero from "@/components/Home/Hero";
import Pricing from "@/components/Home/Pricing";
import MoviesGenres from "@/components/Movies/MoviesGenres";
import WeekChoices from "@/components/Movies/WeekChoices";
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

      <div className="bg-linear-to-b from-black-8 via-red-950/80 to-black-8 py-10">
        <Section id="week-choices" variant="homepage">
          <WeekChoices homepage />
        </Section>
      </div>

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
