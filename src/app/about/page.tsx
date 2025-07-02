export const metadata = {
  title: "Tracer | About Us",
  description: "Tracer combines deep scientific knowledge and cutting-edge tech to accelerate AI adoption in industry. Learn more about our mission, team, and values.",
}
import AboutUsCTA from '@/components/about/AboutUsCTA';
import ReusablePageHero from "@/components/shared/ReusablePageHero";
import Culture from '../../components/about/Culture';
import Hiring from '../../components/about/Hiring';
import MoonshotSection from '../../components/about/MoonshotSection';
import TwoWorlds from '../../components/about/TwoWorlds';
import WhyWeExist from '../../components/about/WhyWeExist';

export default function AboutPage() {
  return (
    <main className="w-full bg-[#FCFCFC] min-h-screen overflow-hidden relative">


      {/* Hero Section */}
      <ReusablePageHero
        title="About Us"
        subtitle="Tracer is an advanced observability platform for high-performance computing (HPC) systems in regulated industries. We help scientists and engineers to run, maintain, and optimise supercomputing software solutions."
        productLabel="_TRACER COMPANY"
        imageSrc="/images/product/hero/hero-bg.webp"
        imageAlt="Tracer Brain - Advanced observability platform visualization"
        variant="flipped"
      />

      {/* Why We Exist Section */}
      <WhyWeExist />

      {/* Moonshot Section */}
      <MoonshotSection />

      {/* Two Worlds Section */}
      <section className="relative w-full">
        <TwoWorlds />
      </section>

      {/* Culture Section */}
      <section className="relative w-full">
        <Culture />
      </section>

      {/* Hiring Section */}
      <section className="relative w-full">
        <Hiring />
      </section>

      <section className="relative w-full">
        <AboutUsCTA />
      </section>
    </main>
  );
}
