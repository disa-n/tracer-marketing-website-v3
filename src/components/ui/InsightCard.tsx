import { ReactNode } from 'react';

interface InsightCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function InsightCard({ icon, title, description }: InsightCardProps) {
  return (
    <div className="bg-[#FCFCFC] border border-[#E8E8E8] p-8 md:p-10 min-h-[400px] md:min-h-[450px] flex flex-col justify-center">
      {/* Icon */}
      <div className="flex justify-center mb-16 mt-6">
        {icon}
      </div>

      {/* Title and Description with their own spacing */}
      <div className="space-y-4">
        {/* Title */}
        <h3 className="font-britti-sans text-lg sm:text-xl lg:text-2xl font-normal text-[#202020]">
          {title}
        </h3>

        {/* Description */}
        <p className="font-britti-sans text-sm sm:text-base text-[#888888]">
          {description}
        </p>
      </div>
    </div>
  );
}
