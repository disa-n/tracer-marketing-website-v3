import HeroSection from '../../components/about/HeroSection'
import WhyWeExist from '../../components/about/WhyWeExist'

export default function AboutPage() {
  return (
    <main className="w-full bg-[#FCFCFC] min-h-screen overflow-hidden relative">
      {/* Background Gridlines - stopping before moonshot section */}
      {/* Vertical line 1 */}
      <div
        className="absolute bg-[#E8E8E8]"
        style={{
          width: 1,
          height: 'calc(100vh + 450px)',
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
          height: 'calc(100vh + 450px)',
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
          height: 'calc(100vh + 450px)',
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
          height: 'calc(100vh + 450px)',
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
    </main>
  );
}
