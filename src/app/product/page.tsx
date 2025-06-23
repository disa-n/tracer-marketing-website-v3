export const metadata = {
  title: "Tracer | Product",
  description: "Tracer is an advanced observability platform providing full visibility and real-time insights into complex scientific and computational pipelines. Discover how our product can help optimize workflows and reduce costs.",
};

import Cta from "@/components/RoutePlatformV2/Cta";
import Hero from "@/components/RoutePlatformV2/Hero";
import YourPartner from "@/components/RoutePlatformV2/YourPartner";
import ProductFeaturesDeepDive from "@/components/RoutePlatformV2/ProductFeaturesDeepDive";
import OneLineImplementation from "@/components/RoutePlatformV2/OneLineImplementation";
import MonitoringInsights from "@/components/RoutePlatformV2/MonitoringInsights";

export default function ProductPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Tracer Observability Platform",
    "description": "Tracer is an advanced observability platform providing real-time visibility and insights into complex workflows within HPC and bioinformatics.",
    "image": [
      "https://www.tracer.cloud/tool-metrics-image",
      "https://www.tracer.cloud/live-instance"
    ],
    "brand": {
      "@type": "Brand",
      "name": "Tracer"
    },
    "url": "https://www.tracer.cloud/product"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <main className="w-full">
        <Hero />

        {/* Section Divider */}
        <div className="w-full h-px bg-[#E8E8E8]" />

        <ProductFeaturesDeepDive />
        <OneLineImplementation />
        <MonitoringInsights />

        {/* Section Divider */}
        <div className="w-full h-px bg-[#E8E8E8]" />

        <YourPartner />
        <Cta />
      </main>
    </>
  );
}
