export const metadata = {
  title: "Tracer | About Us",
  description: "Tracer combines deep scientific knowledge and cutting-edge tech to accelerate AI adoption in industry. Learn more about our mission, team, and values.",
}

import AboutUsCTA from '@/components/about/AboutUsCTA';
import AboutHero from '@/components/about/Hero';
import Culture from '../../components/about/Culture';
import Hiring from '../../components/about/Hiring';
import TwoWorlds from '../../components/about/TwoWorlds';
import WhatWeDo from '../../components/about/WhatWeDo';

export default function AboutPage() {
  return (
    <main className="w-full bg-[#FCFCFC] min-h-screen overflow-hidden relative">


      {/* Hero Section */}
      <AboutHero />

      {/* What We Do Section */}
      <WhatWeDo />

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
