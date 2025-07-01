import Image from "next/image";

type PerformanceCardProps = {
  indexLabel: string;         // e.g. '01–03'
  sectionLabel: string;       // e.g. 'TRACER PERFORMANCE'
  title: string;              // e.g. 'Predict and optimise compute requirements'
  description: string;        // Supporting paragraph
  previewImage?: string;      // Optional preview image URL for top half
  mobilePreviewImage?: string; // Optional mobile-specific preview image URL
  pushTextDown?: boolean;     // Optional prop to add extra top margin to text content
};

export default function PerformanceCard({
  indexLabel,
  sectionLabel,
  title,
  description,
  previewImage,
  mobilePreviewImage,
  pushTextDown = false,
}: PerformanceCardProps) {
  return (
    <div className="w-full bg-[#202020] border border-[#474747] flex flex-col">
      {/* Top Half: Visual Preview */}
      <div className="relative bg-[#141414] h-[280px] md:h-[320px] lg:h-[360px] xl:h-[400px] 2xl:h-[440px] flex-shrink-0 overflow-hidden">
        {/* Preview Image */}
        {previewImage && (
          <>
            {/* Desktop Image */}
            <Image
              src={previewImage}
              alt={title}
              fill
              className="object-cover object-center hidden md:block"
            />
            {/* Mobile Image */}
            <Image
              src={mobilePreviewImage || previewImage}
              alt={title}
              fill
              className="object-contain object-center block md:hidden scale-110"
            />
          </>
        )}
      </div>

      {/* Bottom Half: Text Block */}
      <div className="p-6 flex flex-col">
        {/* Labels on same line under image - full width */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-[#888888] text-[14px] font-chakra-petch uppercase">
            {indexLabel}
          </span>
          <span className="text-[#888888] text-[14px] font-chakra-petch uppercase">
            {sectionLabel}
          </span>
        </div>

        {/* Title and description - constrained width */}
        <div className="max-w-xl">
          <h3 className={`text-white text-[28px] 2xl:text-[32px] leading-[30px] 2xl:leading-[34px] font-normal font-britti mb-8 ${pushTextDown ? 'mt-1 md:mt-4' : ''}`}>
            {title}
          </h3>
          <p className="text-[#888888] text-[14px] 2xl:text-[16px] leading-[18px] 2xl:leading-[20px] font-normal font-britti">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
