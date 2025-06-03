export const metadata = {
  title: "Tracer | The Observability Platform for AI-driven Science",
  description: "Tracer combines deep scientific knowledge and cutting-edge tech to accelerate AI adoption in industry.",}
import HeroSection from "@/components/RouteTechnology/HeroSection";
import Layer from "@/components/RouteTechnology/Layer";
import ReadyToSee from "@/components/RouteTechnology/ReadyToSee";
import SaasBased from "@/components/RouteTechnology/SaasBased";

export default function TechnologyPage() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <HeroSection />
      <Layer />
      <SaasBased />
      <ReadyToSee />
    </main>
  );
}