export const metadata = {
  title: "Tracer | Our Technology",
  description: "Explore Tracer's core technology. Learn how we use eBPF, OpenTelemetry, and infrastructure-native observability to deliver real-time visibility into complex scientific pipelines.",
}
import ReusablePageHero from "@/components/shared/ReusablePageHero";
import Layer from "@/components/RouteTechnology/Layer";
import ReadyToSee from "@/components/RouteTechnology/ReadyToSee";
import SaasBased from "@/components/RouteTechnology/SaasBased";

export default function TechnologyPage() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <ReusablePageHero
        title="Powering Scientific Breakthroughs"
        subtitle="Tracer uses cutting-edge technology to bring observability to complex scientific pipelines. By extracting real-time system-level data, Tracer turns what was initially a black box into clear, actionable insights."
        productLabel="_TRACER TECHNOLOGY"
        imageSrc="/technology/planedesktop.webp"
        imageAlt="Scientific observability technology"
        variant="mirrored"
      />
      <Layer />
      <SaasBased />
      <ReadyToSee />
    </main>
  );
}