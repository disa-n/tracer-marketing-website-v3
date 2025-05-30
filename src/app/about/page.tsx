import HeroSection from '../../components/about/HeroSection'
import WhyWeExist from '../../components/about/WhyWeExist'
import TwoWorlds from '../../components/about/TwoWorlds'
import Culture from '../../components/about/Culture'
import Hiring from '../../components/about/Hiring'
import LetsConnect from '../../components/about/LetsConnect'

export default function AboutPage() {
  return (
    <main className="w-full bg-[#FCFCFC] min-h-screen overflow-hidden relative">
      {/* Background Gridlines - stopping exactly where moonshot section starts */}
      {/* Vertical line 1 */}
      <div
        className="absolute bg-[#E8E8E8]"
        style={{
          width: 1,
          height: 'calc(100vh + 1200px)',
          left: 250,
          top: 0,
          zIndex: 1
        }}
      />

      {/* Vertical line 2 */}
      <div
        className="absolute bg-[#E8E8E8]"
        style={{
          width: 1,
          height: 'calc(100vh + 1200px)',
          left: 570,
          top: 0,
          zIndex: 1
        }}
      />

      {/* Vertical line 3 */}
      <div
        className="absolute bg-[#E8E8E8]"
        style={{
          width: 1,
          height: 'calc(100vh + 1200px)',
          left: 890,
          top: 0,
          zIndex: 1
        }}
      />

      {/* Vertical line 4 */}
      <div
        className="absolute bg-[#E8E8E8]"
        style={{
          width: 1,
          height: 'calc(100vh + 1200px)',
          left: 1210,
          top: 0,
          zIndex: 1
        }}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Why We Exist Section */}
      <section className="relative w-full py-16 px-4">
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
