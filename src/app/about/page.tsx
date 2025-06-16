export const metadata = {
  title: "Tracer | About",
  description: "Tracer combines deep scientific knowledge and cutting-edge tech to accelerate AI adoption in industry.",}
import Hero from '../../components/about/Hero'
import WhyWeExist from '../../components/about/WhyWeExist'
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
      <section className="relative w-full py-16 lg:pt-0 lg:pb-16 px-4">
        <WhyWeExist />
      </section>

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
