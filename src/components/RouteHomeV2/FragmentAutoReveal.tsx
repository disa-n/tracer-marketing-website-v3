'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { GridLinesLight } from '@/components/shared/GridLines';

export default function FragmentAutoReveal() {
  const [activeTab, setActiveTab] = useState<'traditional' | 'tracer'>('traditional');
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);





  return (
    <>
      <style jsx>{`
        @keyframes travelAroundPuzzle {
          0% {
            left: '0px';
            bottom: '0px';
          }
          25% {
            left: '0px';
            bottom: '540px';
          }
          50% {
            left: '720px';
            bottom: '540px';
          }
          75% {
            left: '720px';
            bottom: '0px';
          }
          100% {
            left: '0px';
            bottom: '0px';
          }
        }

        @keyframes pulsateRing {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
        }

        @keyframes rotateRingGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <section className="relative bg-[#FCFCFC] overflow-hidden">
        {/* Grid Lines Background */}
        <GridLinesLight />

        <div className="w-full flex justify-center px-3 sm:px-4 py-16 md:py-24">
          <div className="w-full max-w-[1408px] 1600:max-w-[1500px] 1700:max-w-[1600px] 1800:max-w-[1700px] 1900:max-w-[1800px] 1920:max-w-[1900px] relative z-10">

        {/* Header Section */}
        <div className="mb-4">
          {/* Main Heading - matching Total Visibility styling */}
          <h1 className="font-britti-sans font-normal text-[#202020] mb-6 break-words tracking-tight text-left text-[48px] leading-[50px] 600:text-[56px] 600:leading-[64px] 1300:text-[80px] 1300:leading-[72px] max-w-fit">
            From Fragments To<br />
            Full Visibility With Tracer
          </h1>

          {/* Subheading Paragraph - matching Total Visibility styling */}
          <p className="font-britti-sans text-[#888888] text-left text-[16px] leading-[22px] 600:text-[20px] 600:leading-[22px] max-w-fit mb-12">
            Tracer delivers unmatched visibility, speed, and accuracy for high-performance scientific computing.<br />
            Built from the ground up for the unique demands of research pipelines, not generic infrastructure.
          </p>

          {/* Tab Navigation */}
          <div className="mb-0 flex justify-start">
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab('traditional')}
                className={`px-8 py-4 font-britti-sans text-lg md:text-xl transition-colors duration-200 ${
                  activeTab === 'traditional'
                    ? 'bg-[#202020] text-[#FCFCFC]'
                    : 'bg-[#E8E8E8] text-[#202020] hover:bg-[#D8D8D8]'
                }`}
              >
                Traditional Monitoring
              </button>
              <button
                onClick={() => setActiveTab('tracer')}
                className={`px-8 py-4 font-britti-sans text-lg md:text-xl transition-colors duration-200 ${
                  activeTab === 'tracer'
                    ? 'bg-[#202020] text-[#FCFCFC]'
                    : 'bg-[#E8E8E8] text-[#202020] hover:bg-[#D8D8D8]'
                }`}
              >
                With Tracer
              </button>
            </div>
          </div>
        </div>

        {/* Content Box */}
        <div className="relative w-full bg-[#141414] border border-[#333333] overflow-hidden" style={{ height: '594px' }}>



          {/* Left Side - Text Content */}
          <div className="absolute left-8 top-16 bottom-8 w-1/2 flex flex-col justify-start z-20">
            {/* Traditional Monitoring Text */}
            <div className={`transition-opacity duration-500 ${
              activeTab === 'traditional' ? 'opacity-100' : 'opacity-0'
            }`}>
              <h3 className="font-britti-sans font-normal text-white mb-4 text-[28px] leading-[32px] 600:text-[32px] 600:leading-[36px]">
                Traditional Monitoring
              </h3>
              <p className="font-britti-sans text-[#888888] text-[16px] leading-[20px] 600:text-[18px] 600:leading-[22px] max-w-[300px]">
                Missing logs. Limited metrics. <br />
                No visibility into OS-level failures.
              </p>
            </div>

            {/* With Tracer Text */}
            <div className={`absolute inset-0 flex flex-col justify-start transition-opacity duration-500 ${
              activeTab === 'tracer' ? 'opacity-100' : 'opacity-0'
            }`}>
              <h3 className="font-britti-sans font-normal text-white mb-4 text-[28px] leading-[32px] 600:text-[32px] 600:leading-[36px]">
                With Tracer
              </h3>
              <p className="font-britti-sans text-[#888888] text-[16px] leading-[20px] 600:text-[18px] 600:leading-[22px] max-w-[400px]">
                Fills in the gaps with real-time, low-level <br />
                system insights. Complete pipeline visibility.
              </p>
            </div>
          </div>

          {/* Bottom Right - Puzzle Area */}
          <div className="absolute bottom-0 right-0">
            {/* Puzzle Container */}
            <div className="relative">

              {/* Traditional Monitoring - Unfinished Puzzle */}
              <Image
                src="/home/tm-unfinished-puzzle-update.svg"
                alt="Traditional monitoring unfinished puzzle"
                width={720}
                height={540}
                className={`transition-opacity duration-500 ${
                  activeTab === 'traditional' ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Faded black overlay over TM puzzle */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  activeTab === 'traditional' ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  background: 'linear-gradient(to top, rgba(20, 20, 20, 0.7) 0%, rgba(20, 20, 20, 0.4) 50%, rgba(20, 20, 20, 0.15) 100%)',
                  zIndex: 2
                }}
              />

              {/* Missing Piece Animation - tm-puzzle-2 */}
              <div
                className={`absolute transition-opacity duration-500 ${
                  activeTab === 'traditional' ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  top: isMobile ? '-110px' : '0px', // Move 70px higher up on mobile, flush with top row pieces on desktop
                  left: isMobile ? '121px' : '181px', // Move 1px right from previous position on mobile, original position on desktop
                  zIndex: 10, // Ensure it appears above other pieces
                }}
              >
                <Image
                  src="/home/tm-puzzle-2.svg"
                  alt="Missing puzzle piece connecting"
                  width={220}
                  height={220}
                  className={isMobile ? "w-[140px] h-[140px]" : ""}
                />
              </div>



              {/* Large highlight - behind small highlight */}
              <Image
                src="/home/bg-highlight-large.svg"
                alt=""
                width={1373}
                height={544}
                className={`absolute transition-opacity duration-500 ${
                  activeTab === 'tracer' ? 'opacity-80' : 'opacity-0'
                }`}
                style={{
                  bottom: '0px',
                  right: '0px',
                  transformOrigin: 'bottom right',
                  transform: isMobile ? 'scale(1.5)' : 'scale(2.2)',
                  zIndex: 1
                }}
              />

              {/* Small highlight - scales outward from bottom-right corner */}
              <Image
                src="/home/bg-highlight-small.svg"
                alt=""
                width={836}
                height={544}
                className={`absolute bottom-0 right-0 transition-opacity duration-500 ${
                  activeTab === 'tracer' ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  transformOrigin: 'bottom right',
                  transform: isMobile ? 'scale(1.8)' : 'scale(1.3)',
                  zIndex: 2
                }}
              />

              {/* Traveling light around puzzle edges - disabled on mobile */}
              {!isMobile && (
                <div
                  className={`absolute z-5 transition-opacity duration-500 ${
                    activeTab === 'tracer' ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    width: '12px',
                    height: '12px',
                    background: 'radial-gradient(circle, rgba(58, 35, 237, 1) 0%, rgba(191, 81, 152, 0.8) 50%, rgba(255, 162, 49, 0.6) 100%)',
                    borderRadius: '50%',
                    filter: 'blur(2px)',
                    boxShadow: '0 0 20px rgba(58, 35, 237, 0.8), 0 0 40px rgba(191, 81, 152, 0.6)',
                    animation: activeTab === 'tracer' ? 'travelAroundPuzzle 4s linear infinite' : 'none'
                  }}
                />
              )}

              {/* With Tracer - Finished Puzzle */}
              <Image
                src="/home/wt-finished-puzzle.svg"
                alt="With tracer finished puzzle"
                width={720}
                height={540}
                className={`absolute inset-0 z-10 transition-opacity duration-500 ${
                  activeTab === 'tracer' ? 'opacity-100' : 'opacity-0'
                }`}
              />



            </div>
          </div>

        </div>

        </div>
      </div>
    </section>
    </>
  );
}
