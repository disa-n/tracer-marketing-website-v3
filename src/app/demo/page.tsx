export const metadata = {
  title: "Tracer | Schedule a Demo",
  description: "Schedule a demo with Tracer to learn how our observability platform can help optimise your computational workflows.",
};

import { ScheduleDemoPage } from "@/components/demo";

export default function DemoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "url": "https://www.tracer.bio/demo",
    "mainEntity": {
      "@type": "Organization",
      "name": "Tracer",
      "url": "https://www.tracer.cloud",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "general inquiries",
        "email": "info@tracer.cloud"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="w-full min-h-screen">
        <ScheduleDemoPage />
      </main>
    </>
  );
}