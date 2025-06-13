import HeroSectionV2 from '@/components/RouteHomeV2/HeroSectionV2';
import ProductPreviewSectionV2 from '@/components/RouteHomeV2/ProductPreviewSectionV2';
import UseTracerSectionV2 from '@/components/RouteHomeV2/UseTracerSectionV2';
import FixAnythingSection from '@/components/RouteHomeV2/FixAnythingSection';
import TotalVisibilitySection from '@/components/RouteHomeV2/TotalVisibilitySection';
import FaqV2 from '@/components/RouteHomeV2/faqV2';
import PersonalisedDemoV2 from '@/components/RouteHomeV2/PersonalisedDemoV2';

export const metadata = {
  title: "Meet Tracer - The Observability Platform for AI-driven Science",
  description: "Tracer combines deep scientific knowledge and cutting-edge tech to accelerate AI adoption in industry.",
};

export default function HomePageV2() {
  return (
    <>
      <HeroSectionV2 />
      <ProductPreviewSectionV2 />
      <UseTracerSectionV2 />
      <FixAnythingSection />
      <TotalVisibilitySection />
      <FaqV2 />
      <PersonalisedDemoV2 />
    </>
  );
}