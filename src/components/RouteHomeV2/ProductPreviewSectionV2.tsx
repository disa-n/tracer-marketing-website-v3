'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import GridLines from '@/components/shared/GridLines';

// Define the tab data structure
interface TabData {
  id: string;
  label: string;
  imageUrl: string;
}

// Tab options data
const tabsData: TabData[] = [
  {
    id: 'pipeline-overview',
    label: 'Pipeline Overview',
    imageUrl: 'https://placehold.co/800x500?text=Pipeline+Overview'
  },
  {
    id: 'tool-diagnostics',
    label: 'Tool Diagnostics Preview',
    imageUrl: 'https://placehold.co/800x500?text=Tool+Diagnostics'
  },
  {
    id: 'insights-drilldown',
    label: 'Insights Drilldown',
    imageUrl: 'https://placehold.co/800x500?text=Insights+Drilldown'
  },
  {
    id: 'ai-recommendation',
    label: 'AI Recommendation Engine',
    imageUrl: 'https://placehold.co/800x500?text=AI+Recommendations'
  },
  {
    id: 'infrastructure-summary',
    label: 'Infrastructure Summary',
    imageUrl: 'https://placehold.co/800x500?text=Infrastructure+Summary'
  },
  {
    id: 'logs-view',
    label: 'Logs View',
    imageUrl: 'https://placehold.co/800x500?text=Logs+View'
  }
];

export default function ProductPreviewSectionV2() {
  // State to manage the currently selected tab
  const [activeTab, setActiveTab] = useState<string>(tabsData[0].id);

  // Get the currently active tab data
  const activeTabData = tabsData.find(tab => tab.id === activeTab) || tabsData[0];

  return (
    <section className="relative bg-[#202020] px-4 py-12 md:px-8 xl:py-20 overflow-hidden">
      <GridLines />
      <div className="relative z-10 max-w-[1400px] mx-auto">

        {/* Tab Navigation */}
        <div className="mb-8 flex justify-center">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 xl:gap-16">
            {tabsData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  font-britti-sans text-sm md:text-base lg:text-lg
                  transition-colors duration-200 ease-in-out
                  relative pb-1
                  ${activeTab === tab.id
                    ? 'text-white'
                    : 'text-[#A0A0A0] hover:text-white'
                  }
                `}
              >
                {tab.label}
                {/* Active tab underline */}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Outer Container - Figma Specifications */}
        <div className="w-full flex justify-center">
          <div
            className="bg-[#202020] relative"
            style={{
              width: '1379px',
              height: '724px',
              border: '4px solid #404040',
              borderRadius: '2px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
          >
            {/* Inner Preview Box */}
            <div
              className="bg-[#141414] absolute left-1/2 transform -translate-x-1/2 overflow-hidden"
              style={{
                width: '1319.66px',
                height: '679.06px',
                top: '22px',
                borderRadius: '5px'
              }}
            >
              <div className="w-full h-full flex items-center justify-center p-4">
                <Image
                  src={activeTabData.imageUrl}
                  alt={`${activeTabData.label} preview`}
                  width={1280}
                  height={640}
                  className="max-w-full max-h-full object-contain"
                  priority={activeTab === tabsData[0].id}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
