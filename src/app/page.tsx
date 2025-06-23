// app/page.tsx

import HeroSectionV2 from '@/components/RouteHomeV2/HeroSectionV2';
import ProductPreviewSectionV2 from '@/components/RouteHomeV2/ProductPreviewSectionV2';
import UseTracerSectionV2 from '@/components/RouteHomeV2/UseTracerSectionV2';
import FixAnythingSection from '@/components/RouteHomeV2/FixAnythingSection';
import FragmentAutoReveal from '@/components/RouteHomeV2/FragmentAutoReveal';
import FaqV2 from '@/components/RouteHomeV2/faqV2';
import PersonalisedDemoV2 from '@/components/RouteHomeV2/PersonalisedDemoV2';

export const metadata = {
  title: "Pipeline Observability for Scientific Computing | Tracer",
  description:
    "Tracer provides real-time visibility into computational workloads, enabling scientist-engineers to monitor, debug, and optimize complex pipelines.",
  keywords: [
    "scientific pipeline monitoring",
    "observability for HPC",
    "bioinformatics pipeline troubleshooting",
    "cloud compute cost monitoring",
    "real-time pipeline visibility",
    "observability for bioinformatics",
    "pipeline performance issues",
    "scientific computing observability",
    "debug scientific pipelines",
    "nextflow job failed",
    "snakemake error handling",
    "slurm job monitoring",

  ],
};

export default function HomePage() {
  return (
    <>
      <HeroSectionV2 />
      <ProductPreviewSectionV2 />

      {/* Section Divider */}
      <div className="w-full h-px bg-[#E8E8E8]" />

      <UseTracerSectionV2 />
      <FixAnythingSection />
      <FragmentAutoReveal />
      <FaqV2 />
      <PersonalisedDemoV2 />
    </>
  );
}

