// app/page.tsx

import HeroSectionV2 from '@/components/RouteHomeV2/HeroSectionV2';
import ProductPreviewSectionV2 from '@/components/RouteHomeV2/ProductPreviewSectionV2';
import ScienceNeedsInfoSection from '@/components/RouteHomeV2/ScienceNeedsInfoSection';
import UseTracerSectionV2 from '@/components/RouteHomeV2/UseTracerSectionV2';
import MeetTracerSection from '@/components/shared/MeetTracerSection';
import FixAnythingSection from '@/components/RouteHomeV2/FixAnythingSection';
import FragmentAutoReveal from '@/components/RouteHomeV2/FragmentAutoReveal';
import FaqV2 from '@/components/RouteHomeV2/faqV2';
import PersonalisedDemoV2 from '@/components/RouteHomeV2/PersonalisedDemoV2';
import Script from 'next/script';

export const metadata = {
  title: "Tracer | Pipeline Observability for Scientific Computing",
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.tracer.cloud/#organization",
    "name": "Tracer",
    "url": "https://www.tracer.cloud",
    "logo": "https://www.tracer.cloud/home/tracer-logo.svg",
    "description": "Tracer is an advanced observability platform providing today's scientist-engineers with real-time visibility and insights into complex scientific and computational pipelines",
    "sameAs": [
      "https://github.com/Tracer-Cloud",
      "https://www.linkedin.com/company/tracercloud"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://www.tracer.cloud",
    "name": "Tracer",
    "description": "Tracer's website provides detailed information about its observability platform for scientific computing, including features, benefits, core technology, and the latest team updates and industry insights.",
    "publisher": {
      "@id": "https://www.tracer.cloud/#organization"
    }
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <HeroSectionV2 />
      <ProductPreviewSectionV2 />

      {/* Section Divider */}
      <div className="w-full h-px bg-[#E8E8E8]" />

      <ScienceNeedsInfoSection />
      <UseTracerSectionV2 />
      <MeetTracerSection />
      <FixAnythingSection />
      <FragmentAutoReveal />
      <FaqV2 />
      <PersonalisedDemoV2 />
    </>
  );
}

