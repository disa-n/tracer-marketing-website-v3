export const metadata = {
  title: "Tracer: Kenya Hackathon 2025",
  description: "Tracer combines deep scientific knowledge and cutting-edge tech to accelerate AI adoption in industry.",}
import KenyaHero from '@/components/blog/Kenya/KenyaHero';
import KenyaGrid from '@/components/blog/Kenya/KenyaGrid';

export default function KenyaPage() {
  return (
    <main className="w-full min-h-screen bg-[#202020] text-[#FCFCFC] relative">
      {/* Hero Section */}
      <KenyaHero />

      {/* Daily Highlights Grid */}
      <section className="py-16">
        <div className="max-w-[1408px] mx-auto px-4 mb-8">
          <h2 className="font-chakra-petch text-2xl md:text-3xl font-medium text-[#FCFCFC]">
            DAILY ENTRIES
          </h2>
        </div>
        <KenyaGrid />
      </section>
    </main>
  );
}
