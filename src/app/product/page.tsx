export const metadata = {
  title: "Product - The First Pipeline Monitoring System That Lives in the OS | Tracer",
  description: "Tracer's product - The First Pipeline Monitoring System That Lives in the OS.",
};

import Cta from "@/components/RoutePlatformV2/Cta";
import Hero from "@/components/RoutePlatformV2/Hero";
import YourPartner from "@/components/RoutePlatformV2/YourPartner";
import ProductFeaturesDeepDive from "@/components/RoutePlatformV2/ProductFeaturesDeepDive";
import OneLineImplementation from "@/components/RoutePlatformV2/OneLineImplementation";
import MonitoringInsights from "@/components/RoutePlatformV2/MonitoringInsights";

export default function ProductPage() {
  return (
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
  );
}
