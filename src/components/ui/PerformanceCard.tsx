import Image from "next/image";

type PerformanceCardProps = {
  indexLabel: string;         // e.g. '01–03'
  sectionLabel: string;       // e.g. 'TRACER PERFORMANCE'
  title: string;              // e.g. 'Predict and optimise compute requirements'
  description: string;        // Supporting paragraph
  previewImage?: string;      // Optional preview image URL for top half
  pushTextDown?: boolean;     // Optional prop to add extra top margin to text content
};

export default function PerformanceCard({
  indexLabel,
  sectionLabel,
  title,
  description,
  previewImage,
  pushTextDown = false,
}: PerformanceCardProps) {
  return (
    <div className="w-full h-[450px] md:aspect-[4/3] bg-[#202020] border border-[#474747] flex flex-col">
      {/* Top Half: Visual Preview */}
      <div className="relative bg-[#141414] h-[240px] md:flex-[3] flex-shrink-0">
        {/* Preview Image */}
        {previewImage && (
          <Image
            src={previewImage}
            alt={title}
            fill
            className="object-contain"
          />
        )}
      </div>

      {/* Bottom Half: Text Block */}
      <div className="p-6 flex flex-col gap-2 md:flex-[2]">
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
          <h3 className={`text-white text-[28px] leading-[28px] font-normal font-britti mb-4 ${pushTextDown ? 'mt-1 md:mt-4' : ''}`}>
            {title}
          </h3>
          <p className="text-[#888888] text-[14px] leading-[16px] font-normal font-britti">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
