import GridLines from '@/components/ui/layout/GridLines';
import ProductPreviewModule from './ProductPreview/ProductPreviewModule';

/**
 * ProductPreviewSectionV2 - Refactored to use modular components
 * Now DRY compliant with reusable components and utilities
 */
export default function ProductPreviewSectionV2() {

  return (
    <section className="relative bg-[#141414] -mt-32 300:-mt-36 400:-mt-38 xs:-mt-36 sm:-mt-32 lg:mt-0 pt-8 xl:pt-12 pb-0 overflow-hidden">
      {/* GridLines */}
      <GridLines />

      {/* Dark gradient overlay working upward toward hero */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 25%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.2) 75%, transparent 100%)'
        }}
      />

      {/* Standardized container matching hero section */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 900:px-8 pt-8">
        {/* Product Preview Module - Now fully modular and DRY compliant */}
        <ProductPreviewModule />
      </div>
    </section>
  );
}