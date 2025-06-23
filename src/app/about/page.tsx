export const metadata = {
  title: "Tracer | About Us",
  description: "Tracer combines deep scientific knowledge and cutting-edge tech to accelerate AI adoption in industry. Learn more about our mission, team, and values.",}
import Hero from '../../components/about/Hero'
import WhyWeExist from '../../components/about/WhyWeExist'
import MoonshotSection from '../../components/about/MoonshotSection'
import TwoWorlds from '../../components/about/TwoWorlds'
import Culture from '../../components/about/Culture'
import Hiring from '../../components/about/Hiring'
import LetsConnect from '../../components/about/LetsConnect'

export default function AboutPage() {
  return (
    <main className="w-full bg-[#FCFCFC] min-h-screen overflow-hidden relative">
      

      {/* Hero Section */}
      <Hero/>

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

      {/* Let's Connect Section */}
      <section className="relative w-full">
        <LetsConnect />
      </section>
    </main>
  );
}
