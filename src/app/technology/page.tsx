export const metadata = {
  title: "Tracer | Our Technology",
  description: "Explore Tracer's core technology. Learn how we use eBPF, OpenTelemetry, and infrastructure-native observability to deliver real-time visibility into complex scientific pipelines.",}
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