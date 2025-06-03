export const metadata = {
  title: "Tracer | The Observability Platform for AI-driven Science",
  description: "Tracer combines deep scientific knowledge and cutting-edge tech to accelerate AI adoption in industry.",}
import Approach from "@/components/RoutePlatform/Approach";
import Cta from "@/components/RoutePlatform/Cta";
import GainVisibility from "@/components/RoutePlatform/GainVisibility";
import Hero from "@/components/RoutePlatform/Hero";
import Implementation from "@/components/RoutePlatform/Implementation";
import Monitoring from "@/components/RoutePlatform/Monitoring";
import YourPartner from "@/components/RoutePlatform/YourPartner";

export default function PlatformPage() {
  return (
    <main className="w-full">
      <Hero />
      <Approach />
      <Monitoring />
      <GainVisibility />
      <YourPartner />
      <Implementation />
      <Cta />
    </main>
  );
}
