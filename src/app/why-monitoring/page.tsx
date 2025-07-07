import PersonalisedDemoV2 from "@/components/home/PersonalisedDemoV2";
import CoreChallengesSection from "@/components/why-monitoring/CoreChallengesSection";
import Hero2 from "@/components/why-monitoring/Hero2";
import HowTracerWorksSection from "@/components/why-monitoring/HowTracerWorksSection";
import WhyMonitoringCardGrid from "@/components/why-monitoring/WhyMonitoringCardGrid";
import WhyMonitoringTitle from "@/components/why-monitoring/WhyMonitoringTitle";

export const metadata = {
  title: "Tracer | Why Monitoring",
  description: "Understand the importance of monitoring in AI-driven scientific workflows and how Tracer provides comprehensive visibility into your pipelines.",
}

export default function WhyMonitoringPage() {
  return (
    <main className="w-full">
      <Hero2 />
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
