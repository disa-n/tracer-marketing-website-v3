import React from 'react';
import ProductPreviewModule from './ProductPreview/ProductPreviewModule';

/**
 * ProductPreviewSectionV2 - Refactored to use modular components
 * Now DRY compliant with reusable components and utilities
 */
export default function ProductPreviewSectionV2() {

  return (
    <section className="relative bg-[#141414] -mt-32 300:-mt-36 400:-mt-38 xs:-mt-36 sm:-mt-32 lg:mt-0 pt-8 xl:pt-12 pb-0 overflow-hidden">
      {/* Dark gradient overlay working upward toward hero */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 25%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.2) 75%, transparent 100%)'
        }}
      />

      {/* Full navbar width container - no frame */}
      <div className='w-full flex items-center px-6 sm:px-4 pt-8 justify-center relative z-10'>
        <div className={`w-full max-w-[1408px] 1600:max-w-[1500px] 1700:max-w-[1600px] 1800:max-w-[1700px] 1900:max-w-[1800px] 1920:max-w-[1900px]`}>

          {/* Product Preview Module - Now fully modular and DRY compliant */}
          <ProductPreviewModule />

        </div> {/* Close navbar width container */}
      </div> {/* Close full width container */}
    </section>
  );
}