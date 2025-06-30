export const metadata = {
  title: "Tracer | Our Technology",
  description: "Explore Tracer's core technology. Learn how we use eBPF, OpenTelemetry, and infrastructure-native observability to deliver real-time visibility into complex scientific pipelines.",
}
import Hero2 from "@/components/RouteTechnology/Hero2";
import Layer from "@/components/RouteTechnology/Layer";
import ReadyToSee from "@/components/RouteTechnology/ReadyToSee";
import SaasBased from "@/components/RouteTechnology/SaasBased";

export default function TechnologyPage() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <Hero2 />
      <Layer />
      <SaasBased />
      <ReadyToSee />
    </main>
  );
}