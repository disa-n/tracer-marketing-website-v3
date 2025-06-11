import HeroSectionV2 from '@/components/RouteHomeV2/HeroSectionV2';
import ProductPreviewSectionV2 from '@/components/RouteHomeV2/ProductPreviewSectionV2';
import UseTracerSectionV2 from '@/components/RouteHomeV2/UseTracerSectionV2';
import FixAnythingSection from '@/components/RouteHomeV2/FixAnythingSection';

export const metadata = {
  title: "Test - Tracer Homepage V2",
  description: "Testing the new homepage design with HeroSectionV2",
};

export default function TestHomepage() {
  return (
    <>
      <HeroSectionV2 />
      <ProductPreviewSectionV2 />
      <UseTracerSectionV2 />
      <FixAnythingSection />
    </>
  );
}
