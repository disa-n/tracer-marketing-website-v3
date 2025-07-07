import { ReactNode } from 'react';
import { Rocket } from 'lucide-react';

interface InsightCardProps {
  icon?: ReactNode;
  title: string;
  description: string | ReactNode;
}

export default function InsightCard({ icon, title, description }: InsightCardProps) {
  return (
    <div className="bg-white border border-[#E8E8E8] max-w-[1255px] px-4 md:px-8 lg:px-12 pt-10 pb-8 lg:pb-16 h-full flex flex-col">
      {/* Icon - Top-left corner */}
      <div className="mb-6">
        {icon || <Rocket className="w-16 h-16 text-[#202020]" strokeWidth={1} />}
      </div>

      {/* Title */}
      <h3 className="font-britti-sans text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-medium text-[#202020] mb-4">
        {title}
      </h3>

      {/* Description */}
      <div className="font-britti-sans font-normal text-[#202020] text-base md:text-lg lg:text-base xl:text-base 2xl:text-lg leading-[1.5] space-y-6 flex-1">
        {typeof description === 'string' ? (
          <p>{description}</p>
        ) : (
          description
        )}
      </div>
    </div>
  );
}
