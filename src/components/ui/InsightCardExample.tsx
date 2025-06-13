import { Eye, Monitor, Settings, Zap } from 'lucide-react';
import InsightCard from './InsightCard';

// Example usage component showing how to use InsightCard with different icon types
export default function InsightCardExample() {
  // Example data for four insight cards
  const insightData = [
    {
      icon: <Eye className="w-28 h-28 md:w-32 md:h-32 text-[#202020]" strokeWidth={1} />,
      title: "Complete Visibility",
      description: "Gain comprehensive insights into your AI pipeline performance with real-time monitoring and detailed analytics."
    },
    {
      icon: <Monitor className="w-28 h-28 md:w-32 md:h-32 text-[#202020]" strokeWidth={1} />,
      title: "Smart Monitoring",
      description: "Advanced monitoring capabilities that automatically detect anomalies and performance issues before they impact your workflow."
    },
    {
      icon: <Settings className="w-28 h-28 md:w-32 md:h-32 text-[#202020]" strokeWidth={1} />,
      title: "Easy Configuration",
      description: "Simple setup and configuration process that gets you up and running in minutes, not hours."
    },
    {
      icon: <Zap className="w-28 h-28 md:w-32 md:h-32 text-[#202020]" strokeWidth={1} />,
      title: "Lightning Fast",
      description: "Optimized performance ensures your monitoring doesn't slow down your AI pipelines or development workflow."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="font-britti-sans text-3xl lg:text-4xl font-normal text-[#202020] mb-4">
          Key Insights
        </h2>
        <p className="font-britti-sans text-lg text-[#888888] max-w-2xl mx-auto">
          Discover how our platform delivers value across every aspect of your AI development lifecycle.
        </p>
      </div>
      
      {/* Responsive grid layout for the cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {insightData.map((insight, index) => (
          <InsightCard
            key={index}
            icon={insight.icon}
            title={insight.title}
            description={insight.description}
          />
        ))}
      </div>
    </div>
  );
}
