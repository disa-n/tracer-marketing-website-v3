'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { GridLinesLight } from '@/components/shared/GridLines';

export default function HeroSectionV2() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [startTyping, setStartTyping] = useState(false);
  const [startPulse, setStartPulse] = useState(false);

  const targetText = 'That Lives in the OS';

  // Start typing after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true);
    }, 1000); // 1 second delay before starting typewriter

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (startTyping && currentCharIndex < targetText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + targetText[currentCharIndex]);
        setCurrentCharIndex(prev => prev + 1);
      }, 80); // Typing speed

      return () => clearTimeout(timer);
    } else if (startTyping && currentCharIndex >= targetText.length) {
      setIsComplete(true);
    }
  }, [currentCharIndex, startTyping, targetText]);

  // Start pulse animation after typewriter completes
  useEffect(() => {
    if (isComplete) {
      const timer = setTimeout(() => {
        setStartPulse(true);
      }, 2000); // 2 second delay after typewriter completes

      return () => clearTimeout(timer);
    }
  }, [isComplete]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);
  return (
    <section className="relative bg-[#FCFCFC] overflow-hidden">
      <GridLinesLight />
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-8 900:px-8">

        {/* Centered Content */}
        <div className="text-center pt-32 pb-12 sm:pt-32 sm:pb-10 lg:pt-40 lg:pb-12">

          {/* Main Heading with Typewriter Effect on Last Line */}
          <h1 className="font-chakra-petch text-[48px] !font-[400] leading-[0.9] tracking-tighter text-[#202020] sm:text-[70px] 1100:text-[80px] 1300:text-[104px] mb-8 sm:mb-6 lg:mb-8 max-w-5xl mx-auto">
            The First Pipeline<br />
            Monitoring System<br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#3A23ED] via-[#BF5198] to-[#FFA231] bg-clip-text text-transparent">
                {displayedText}
                {!isComplete && startTyping && (
                  <span className={`inline-block w-[3px] h-[0.8em] bg-gradient-to-r from-[#3A23ED] via-[#BF5198] to-[#FFA231] ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`} />
                )}
              </span>
              {startPulse && (
                <span
                  className="absolute inset-0 bg-gradient-to-r from-[#3A23ED] via-[#BF5198] to-[#FFA231] bg-clip-text text-transparent"
                  style={{
                    filter: 'brightness(2.5) saturate(0.3)',
                    maskImage: 'linear-gradient(90deg, transparent 0%, transparent 35%, white 50%, transparent 65%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, transparent 35%, white 50%, transparent 65%, transparent 100%)',
                    maskSize: '300% 100%',
                    WebkitMaskSize: '300% 100%',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    animation: 'gradient-sweep-lr 4s ease-in-out infinite'
                  }}
                >
                  {displayedText}
                </span>
              )}
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="font-britti-sans text-sm font-[400] text-[#888888] sm:text-base leading-[1.4] max-w-[630px] mx-auto mb-10 sm:mb-8 lg:mb-10">
            Tracer combines cutting-edge technological advances with the deep understanding of scientific industries to give insights into enterprises&apos; digital and AI acceleration.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-4 justify-center items-center mb-8 sm:mb-6">
            {/* Glowing CTA Button Container */}
            <div className="relative group">
              {/* Outer glow ring - rectangular */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#3A23ED] via-[#BF5198] to-[#FFA231] blur-sm opacity-75 group-hover:opacity-100 animate-glow-pulse transition duration-300"></div>

              {/* Gradient border with button inside - rectangular */}
              <div className="relative bg-gradient-to-r from-[#3A23ED] via-[#BF5198] to-[#FFA231] p-[2px]">
                <a
                  href="https://sandbox.tracer.cloud/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 inline-flex items-center justify-center px-6 h-[40px] sm:px-8 sm:h-[49px]
                             bg-[#202020] text-[#FCFCFC] font-britti-sans text-sm sm:text-base !font-[400]
                             hover:bg-[#303030] transition-all duration-300
                             shadow-[0_0_20px_rgba(58,35,237,0.3),0_0_40px_rgba(191,81,152,0.2),0_0_60px_rgba(255,162,49,0.1)]
                             hover:shadow-[0_0_40px_rgba(58,35,237,0.6),0_0_80px_rgba(191,81,152,0.5),0_0_120px_rgba(255,162,49,0.4)]"
                >
                  Try for Free
                </a>
              </div>
            </div>

            <a
              href="/product"
              className="inline-flex items-center justify-center px-6 h-[40px] sm:px-8 sm:h-[49px]
                         bg-[#E8E8E8] text-[#202020] font-britti-sans text-sm sm:text-base !font-[400]
                         hover:bg-[#D8D8D8] transition-colors duration-200"
            >
              Get a Demo
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
