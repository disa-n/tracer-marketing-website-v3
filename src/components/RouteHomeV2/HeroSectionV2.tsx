'use client';

import React, { useState, useEffect, useMemo } from 'react';
import GridLines from '@/components/shared/GridLines';
import ShinyCTAButton from '@/components/shared/ShinyCTAButton';

export default function HeroSectionV2() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [startTyping, setStartTyping] = useState(false);
  const [startPulse, setStartPulse] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const desktopTextVariations = [
    'That Lives in the OS',
    'Making Costs Visible',
    'That Sees Every Tool',
    'Optimised for HPC',
    'Mapping Jobs to Budget',
    'Breaking Down Runtime'
  ];

  const mobileTextVariations = [
    'That Lives in the OS',
    'Making Costs Visible',
    'That Sees Every Tool',
    'Optimised for HPC',
    'To Map Jobs to Budget',
    'To Break Down Runtime'
  ];

  const textVariations = isMobile ? mobileTextVariations : desktopTextVariations;

  // Start typing after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true);
    }, 1000); // 1 second delay before starting typewriter

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!startTyping) return;

    const currentText = textVariations[currentTextIndex];

    if (isErasing) {
      // Erasing text
      if (displayedText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayedText(prev => prev.slice(0, -1));
        }, 50); // Erasing speed (faster than typing)
        return () => clearTimeout(timer);
      } else {
        // Finished erasing, move to next text
        setIsErasing(false);
        setCurrentTextIndex(prev => (prev + 1) % textVariations.length);
        setCurrentCharIndex(0);
      }
    } else {
      // Typing text
      if (currentCharIndex < currentText.length) {
        const timer = setTimeout(() => {
          setDisplayedText(prev => prev + currentText[currentCharIndex]);
          setCurrentCharIndex(prev => prev + 1);
        }, 80); // Typing speed
        return () => clearTimeout(timer);
      } else {
        // Finished typing current text
        setIsComplete(true);
        // Wait before starting to erase
        const timer = setTimeout(() => {
          setIsComplete(false);
          setStartPulse(false);
          setIsErasing(true);
        }, 3000); // Display complete text for 3 seconds
        return () => clearTimeout(timer);
      }
    }
  }, [currentCharIndex, startTyping, currentTextIndex, isErasing, displayedText, textVariations]);

  // Start pulse animation after typewriter completes each text
  useEffect(() => {
    if (isComplete && !isErasing) {
      const timer = setTimeout(() => {
        setStartPulse(true);
      }, 500); // Start pulse shortly after completion

      return () => clearTimeout(timer);
    }
  }, [isComplete, isErasing]);

  // Cursor blinking effect - show when typing or erasing
  useEffect(() => {
    if (startTyping && !isComplete) {
      const cursorTimer = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
      return () => clearInterval(cursorTimer);
    } else {
      setShowCursor(false);
    }
  }, [startTyping, isComplete]);
  return (
    <section className="relative bg-[#141414] overflow-hidden">
      <GridLines />
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-8 900:px-8">

        {/* Centered Content */}
        <div className="text-center pt-40 pb-20 sm:pt-28 sm:pb-10 lg:pt-32 lg:pb-12">

          {/* Main Heading with Typewriter Effect on Last Line */}
          <h1 className="font-chakra-petch text-[48px] !font-[400] leading-[0.9] tracking-tighter text-white sm:text-[70px] 1100:text-[80px] 1300:text-[104px] mb-8 sm:mb-6 lg:mb-8 max-w-5xl mx-auto">
            The First Pipeline<br />
            Monitoring System<br />
            <div className="flex justify-center">
              <span className="relative inline-block whitespace-nowrap">
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
            </div>
          </h1>

          {/* Supporting Text */}
          <p className="font-britti-sans text-base font-[400] text-[#888888] sm:text-base leading-[1.4] max-w-[630px] mx-auto mb-10 sm:mb-8 lg:mb-10">
            Accelerate bioinformatics with real-time pipeline insights.<br />Built for precision, scale, and HPC-native environments.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-4 justify-center items-center mb-8 sm:mb-6">
            <ShinyCTAButton mobileHeight={48} desktopHeight={51} />

            <a
              href="/product"
              className="inline-flex items-center justify-center px-6 h-[46px] sm:px-8 sm:h-[49px]
                         bg-[#E8E8E8] text-[#202020] font-britti-sans text-base sm:text-base !font-[400]
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
