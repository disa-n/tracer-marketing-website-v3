export const metadata = {
  title: "Tracer | Product",
  description: "Tracer is an advanced observability platform providing full visibility and real-time insights into complex scientific and computational pipelines. Discover how our product can help optimize workflows and reduce costs.",
};

import Cta from "@/components/product/Cta";
import Hero from "@/components/product/Hero";
import MonitoringInsights from "@/components/product/MonitoringInsights";
import OneLineImplementation from "@/components/product/OneLineImplementation";
import ProductFeaturesDeepDive from "@/components/product/ProductFeaturesDeepDive";
import YourPartner from "@/components/product/YourPartner";

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
