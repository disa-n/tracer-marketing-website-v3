export const metadata = {
  title: "Tracer | Schedule a Demo",
  description: "Schedule a demo with Tracer to learn how our observability platform can accelerate AI adoption in your workflow.",
};

import ScheduleDemoPage from "@/components/ScheduleDemo";

export default function DemoPage() {
  return (
    <main className="w-full min-h-screen">
      <ScheduleDemoPage />
    </main>
  );
}