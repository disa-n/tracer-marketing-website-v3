'use client';

import { motion } from 'framer-motion';
import { unifiedCardDataLg } from "./data/unifiedPlatformData";
import Image from "next/image";
import { useState, useEffect } from 'react';

const UnifiedPlatformCardLg = () => {
  // State for responsive behavior based on 50% screen width
  const [isStackedLayout, setIsStackedLayout] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  // Effect to handle window resize and determine layout
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const screenWidth = window.screen.width;
      setWindowWidth(width);
      // Switch to stacked layout when window is 50% or less of screen width
      setIsStackedLayout(width <= screenWidth * 0.5);
    };

    // Set initial values
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animation variants for staggered fade-in from left
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4, // Delay between each card animation
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0, 0.38, 1]
      }
    }
  };

  const lineVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, 0, 0.38, 1],
        delay: 0.2 // Lines appear slightly after the card
      }
    }
  };

  const backgroundImageVariants = {
    hidden: {
      opacity: 0,
      y: 60
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.6, 0, 0.38, 1],
        delay: 1.0 // Delay to let cards and lines animate first
      }
    }
  };

  return (
    <motion.div
      className="relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background Image - Responsive scaling */}
      <div className="pt-[280px]">
        <motion.div
          className={`relative z-10 w-full ${
            isStackedLayout ? 'hidden' : 'block'
          }`}
          style={{
            height: isStackedLayout ? 0 : `${Math.max(320, windowWidth * 0.25)}px`
          }}
          variants={backgroundImageVariants}
        >
          <Image
            src="/home/unified-bg-bottom.png"
            alt="unified-bg-bottom"
            fill
            className="object-contain object-center"
            priority
          />
        </motion.div>
      </div>

      {/* Desktop Layout - Absolute positioned cards */}
      <div className={isStackedLayout ? 'hidden' : 'block'}>
        {unifiedCardDataLg.map((card) => (
          <motion.div
            key={card.id}
            className={card.containerStyle}
            variants={cardVariants}
          >
            <div className="relative h-fit max-w-[280px] space-y-6 border-l border-[#E8E8E8] pl-3 md:pl-4 xl:max-w-[330px]">
              <span
                className="font-chakra-petch text-sm font-normal uppercase leading-[19px] text-[#202020] md:text-base"
                style={{ letterSpacing: "-0.01em" }}
              >
                {card.tag}
              </span>
              <div className="space-y-2">
                <p
                  className="max-w-[550px] font-britti-sans text-base font-normal leading-4 text-[#202020] md:text-2xl md:leading-[24px] xl:max-w-max"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {card.title}
                </p>
                <p className="max-w-[550px] font-britti-sans text-sm font-normal leading-[17px] text-[#202020] md:text-base xl:max-w-max">
                  {card.description}
                </p>
              </div>
              <motion.div
                className={card.lineImageStyle}
                variants={lineVariants}
              >
                <Image
                  src={card.lineImage}
                  alt={card.id}
                  width={323}
                  height={104}
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile/Tablet Layout - Stacked cards */}
      <div className={isStackedLayout ? 'block' : 'hidden'}>
        <div className="-mt-24 space-y-8 px-4 pb-6 md:-mt-22 md:space-y-10">
          {unifiedCardDataLg.map((card) => (
            <motion.div
              key={`stacked-${card.id}`}
              variants={cardVariants}
              className={`relative h-fit ${
                card.id === 'intelligence' ? '-mt-2 md:-mt-4' : ''
              }`}
            >
              <div className="space-y-6 border-l border-[#E8E8E8] pl-3 md:pl-4">
                <span
                  className="block font-chakra-petch text-sm font-normal uppercase leading-[19px] text-[#202020] md:text-base"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {card.tag}
                </span>
                <div className="space-y-2">
                  <p
                    className="font-britti-sans text-base font-normal leading-5 text-[#202020] md:text-2xl md:leading-[28px]"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {card.title}
                  </p>
                  <p className="font-britti-sans text-sm font-normal leading-[18px] text-[#202020] md:text-base md:leading-[20px]">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Background Image - Full window width */}
      {isStackedLayout && (
        <motion.div
          className="relative w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            height: `${Math.max(400, windowWidth * 0.8)}px`,
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
            width: '100vw'
          }}
        >
          <Image
            src="/home/unified-bg-bottom-sm.png"
            alt="unified-bg-bottom"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default UnifiedPlatformCardLg;
