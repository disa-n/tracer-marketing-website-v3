import ReusablePageHero from "@/components/shared/ReusablePageHero";
import CoreChallengesSection from "@/components/WhyMonitoring/CoreChallengesSection";
import WhyMonitoringTitle from "@/components/WhyMonitoring/WhyMonitoringTitle";
import WhyMonitoringCardGrid from "@/components/WhyMonitoring/WhyMonitoringCardGrid";
import HowTracerWorksSection from "@/components/WhyMonitoring/HowTracerWorksSection";
import PersonalisedDemoV2 from "@/components/RouteHomeV2/PersonalisedDemoV2";

export const metadata = {
  title: "Tracer | Why Monitoring",
  description: "Understand the importance of monitoring in AI-driven scientific workflows and how Tracer provides comprehensive visibility into your pipelines.",
}

export default function WhyMonitoringPage() {
  return (
    <main className="w-full">
      <ReusablePageHero
        title="Monitoring Matters More Than Ever"
        subtitle="Understanding highly parallelised workloads running on distributed supercomputers is very difficult. Tracer combines cutting-edge technological advances with the deep understanding of scientific industries to go from a black box to insights."
        productLabel="_TRACER INSIGHTS"
        imageSrc="/why-monitoring/monitoring-hero.webp"
        imageAlt="Why monitoring matters"
        variant="mirrored"
      />
      <CoreChallengesSection />
      <WhyMonitoringTitle />
      <WhyMonitoringCardGrid />
      <HowTracerWorksSection />
      <PersonalisedDemoV2 />

      {/* Placeholder for additional sections */}
      {/* You can add your components here as you create them */}
    </main>
  );
}
