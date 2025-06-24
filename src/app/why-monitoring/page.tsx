import Hero from "@/components/WhyMonitoring/hero";
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
      <Hero />
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
