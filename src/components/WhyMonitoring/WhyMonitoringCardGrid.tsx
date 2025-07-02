import React from 'react';
import { Code, Eye, BarChart3, Zap } from 'lucide-react';

// Custom InsightCard with tighter line spacing
interface CustomInsightCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function CustomInsightCard({ icon, title, description }: CustomInsightCardProps) {
  return (
    <div className="bg-[#FCFCFC] border border-[#E8E8E8] p-8 md:p-10 min-h-[400px] md:min-h-[450px] flex flex-col justify-center">
      {/* Icon */}
      <div className="flex justify-center mb-16 mt-6">
        {icon}
      </div>

      {/* Title and Description with tighter spacing */}
      <div className="space-y-2">
        {/* Title with tighter line height */}
        <h3 className="font-britti-sans text-lg sm:text-xl lg:text-2xl font-normal text-[#202020] leading-tight">
          {title}
        </h3>

        {/* Description with tighter line height */}
        <p className="font-britti-sans text-sm sm:text-base text-[#888888] leading-snug">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function WhyMonitoringCardGrid() {
  // Card data following the specified content
  const cardData = [
    {
      icon: <Code className="w-28 h-28 md:w-32 md:h-32 text-[#202020]" strokeWidth={0.5} />,
      title: "Science Is Moving Software-First",
      description: "Modern research runs on code. Monitoring ensures your compute infrastructure keeps up."
    },
    {
      icon: <Eye className="w-28 h-28 md:w-32 md:h-32 text-[#202020]" strokeWidth={0.5} />,
      title: "No-Code Is Not Good",
      description: "Drag-and-drop tools hide what's actually happening in pipelines. Monitoring reveals the real mechanics."
    },
    {
      icon: <BarChart3 className="w-28 h-28 md:w-32 md:h-32 text-[#202020]" strokeWidth={0.5} />,
      title: "Better Data Makes Better Decisions",
      description: "From cost to performance, visibility enables teams to act decisively and collaborate with confidence."
    },
    {
      icon: <Zap className="w-28 h-28 md:w-32 md:h-32 text-[#202020]" strokeWidth={0.5} />,
      title: "Observability Unlocks Automation",
      description: "You can't optimise what you can't see. Monitoring lays the groundwork for smarter workflows."
    }
  ];

  return (
    <section className="relative bg-[#FCFCFC] py-16 lg:py-20">
      {/* Top border stroke */}
      <div className="absolute top-0 left-0 w-full h-px bg-[#E8E8E8]"></div>

      {/* Main content container */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        {/* Responsive grid layout for the cards - wider cards in non-stacked view */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-4 xl:gap-6">
          {cardData.map((card, index) => (
            <CustomInsightCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>

      {/* Bottom border stroke */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#E8E8E8]"></div>
    </section>
  );
}
