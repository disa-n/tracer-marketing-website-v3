import Image from "next/image";

type PerformanceCardProps = {
  indexLabel: string;         // e.g. '02–03'
  sectionLabel: string;       // e.g. 'TRACER PERFORMANCE'
  title: string;              // e.g. 'Total visibility into computational Infrastructure'
  description: string;        // Supporting paragraph
  previewImage?: string;      // Optional preview image URL for top half
};

export default function PerformanceCard({
  indexLabel,
  sectionLabel,
  title,
  description,
  previewImage,
}: PerformanceCardProps) {
  return (
    <div className="w-[912px] bg-[#202020] border border-[#474747] flex flex-col">
      {/* Top Half: Preview Area */}
      <div className="relative bg-[#141414] h-[456px] flex-shrink-0">
        {/* Preview Image */}
        {previewImage && (
          <Image
            src={previewImage}
            alt={title}
            fill
            className="object-cover"
          />
        )}
        
        {/* Index Label - Top Left */}
        <div className="absolute top-6 left-6">
          <span className="font-chakra-petch text-[#888888] text-sm uppercase leading-[19px]">
            {indexLabel}
          </span>
        </div>
        
        {/* Section Label - Bottom Right */}
        <div className="absolute bottom-6 right-6">
          <span className="font-chakra-petch text-[#888888] text-sm uppercase leading-[19px]">
            {sectionLabel}
          </span>
        </div>
      </div>
      
      {/* Bottom Half: Text Block */}
      <div className="px-8 pt-6 pb-8 flex flex-col space-y-4">
        {/* Title */}
        <h3 className="font-britti-sans text-white text-[32px] font-normal leading-[30px]">
          {title}
        </h3>
        
        {/* Description */}
        <p className="font-britti-sans text-[#888888] text-base font-normal leading-[17px]">
          {description}
        </p>
      </div>
    </div>
  );
}
