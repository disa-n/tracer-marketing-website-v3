'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, Variants, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import { DualLeftArrowIcon, MonitorIcon } from '../shared/Svgs';

// Variants for coordinated reveal
const revealVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      when: 'beforeChildren',
    },
  },
};

// Mask slides away to reveal content
const maskVariants: Variants = {
  hidden: {
    scaleY: 1,
    transformOrigin: 'top',
  },
  visible: {
    scaleY: 0,
    transition: {
      duration: 1.2,
      ease: [0.6, 0, 0.38, 1],
    },
  },
};

// Panels slide up from below
const panelVariants: Variants = {
  hidden: { y: '100%' },
  visible: {
    y: '0%',
    transition: {
      duration: 1.2,
      ease: [0.6, 0, 0.38, 1],
    },
  },
};

// Infra text pulls down
const infraVariants: Variants = {
  hidden: { y: -20 },
  visible: {
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.6, 0, 0.38, 1],
    },
  },
};

// Custom component for image panels with controlled animation
const ImagePanel = ({ src, caption, index, shouldAnimate = true }: { src: string; caption: string; index: number; shouldAnimate?: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.01 }); // Very small threshold for reset detection
  const maskControls = useAnimation();
  const imageControls = useAnimation();
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    if (!shouldAnimate) {
      // If animations are disabled, set elements to their final state
      maskControls.start({ scaleY: 0 });
      imageControls.start({ opacity: 1 });
      return;
    }

    if (isInView && !animationTriggered) {
      setAnimationTriggered(true);

      // Start mask animation - will complete regardless of scroll
      maskControls.start({
        scaleY: 0,
        transition: {
          duration: 0.8,
          ease: [0.6, 0, 0.38, 1]
        }
      });

      // Start image animation - will complete regardless of scroll
      imageControls.start({
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: [0.6, 0, 0.38, 1]
        }
      });
    } else if (!isInView && animationTriggered) {
      // Reset animation when completely out of view
      setAnimationTriggered(false);
      maskControls.start({ scaleY: 1 });
      imageControls.start({ opacity: 0.9 });
    }
  }, [isInView, animationTriggered, maskControls, imageControls, shouldAnimate]);

  if (shouldAnimate) {
    return (
      <motion.div
        ref={ref}
        variants={panelVariants}
        className={`flex flex-col gap-2 ${index === 2 ? 'md:ml-auto md:pr-20' : ''}`}
      >
        <p className="md:hidden">{caption}</p>
        <div className="relative overflow-hidden bg-transparent border-0 outline-none h-[107px] sm:h-[140px] md:h-[107px] z-10">
          {/* Background block */}
          <div className="absolute inset-0 bg-[#FCFCFC] z-20"></div>
          {/* Mask reveal */}
          <motion.div
            className="absolute inset-0 bg-[#FCFCFC] z-40 origin-bottom"
            initial={{ scaleY: 1 }}
            animate={maskControls}
          />
          {/* Image */}
          <motion.div
            className="relative z-30"
            initial={{ opacity: 0.9 }}
            animate={imageControls}
          >
            <Image
              src={src}
              alt={caption}
              width={430}          // ✅ 2x resolution for Safari/retina sharpness
              height={214}
              quality={100}        // ✅ Max quality for clearer rendering
              priority={index === 0} // ✅ Only preload the first image
              className="h-auto w-[152px] sm:w-56 md:w-[215px] object-contain"
            />
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-2 ${index === 2 ? 'md:ml-auto md:pr-20' : ''}`}
    >
      <p className="md:hidden">{caption}</p>
      <div className="relative overflow-hidden bg-transparent border-0 outline-none h-[107px] sm:h-[140px] md:h-[107px] z-10">
        {/* Background block */}
        <div className="absolute inset-0 bg-[#FCFCFC] z-20"></div>
        {/* Image */}
        <div className="relative z-30">
          <Image
            src={src}
            alt={caption}
            width={430}          // ✅ 2x resolution for Safari/retina sharpness
            height={214}
            quality={100}        // ✅ Max quality for clearer rendering
            priority={index === 0} // ✅ Only preload the first image
            className="h-auto w-[152px] sm:w-56 md:w-[215px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default function DigitalDiscoverySection() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth;
        setWindowWidth(width);
        // Disable animations on mobile devices (width <= 768px) or when window is 50% or less of screen width
        const isMobile = width <= 768;
        const isNarrowWindow = width <= (window.screen.width * 0.5);
        setShouldAnimate(!isMobile && !isNarrowWindow);
      }
    };

    // Set initial width
    checkScreenSize();

    // Update width on resize
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth;
        setWindowWidth(width);
        // Disable animations on mobile devices (width <= 768px) or when window is 50% or less of screen width
        const isMobile = width <= 768;
        const isNarrowWindow = width <= (window.screen.width * 0.5);
        setShouldAnimate(!isMobile && !isNarrowWindow);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const shouldShowRectangle = typeof window !== 'undefined' && windowWidth > 768 && windowWidth > (window.screen.width * 0.65);
  const shouldShowGridlines = windowWidth > 768; // Hide gridlines on mobile/small screens

  return (
    <section id="digitalDiscovery" className="relative overflow-hidden bg-[#FCFCFC]">
      {/* Dark grey rectangle in the top right */}
      {shouldAnimate ? (
        <motion.div
          className="absolute top-0 right-0 h-[46px] md:h-[70px] bg-black origin-right z-5"
          initial={{ width: "50%" }}
          whileInView={{
            width: "35%",
            transition: {
              duration: 1.0,
              ease: [0.6, 0, 0.38, 1]
            }
          }}
          viewport={{ once: false, amount: 0.8 }}
         >
         </motion.div>
      ) : (
        <div
          className="absolute top-0 right-0 h-[46px] md:h-[70px] bg-black origin-right z-5"
          style={{ width: "35%" }}
        >
        </div>
      )}

{/* Static Vertical Gridlines - Hidden on mobile/small screens */}
{shouldShowGridlines && (
  <>
    <div
      className="absolute bg-[#E8E8E8] h-full"
       style={{
    width: 1,
    left: 250,
    top: 0,
    zIndex: 0,
  }}
    />
    <div
      className="absolute bg-[#E8E8E8] h-full"
       style={{
    width: 1,
    left: 570,
    top: 0,
    zIndex: 0,
      }}
    />
    <div
      className="absolute bg-[#E8E8E8] h-full"
      style={{
        width: 1,
        left: 890,
        top: 0,
        zIndex: 0,
      }}
    />
    <div
      className="absolute bg-[#E8E8E8] h-full"
      style={{
        width: 1,
        left: 1210,
        top: 0,
        zIndex: 0,
      }}
    />
  </>
)}

        {/* Intro text animation - appears once and stays */}
        {shouldAnimate ? (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-[500px] relative z-10 mt-0 md:mt-0 pl-5 md:pl-10"
          >
            <h3 className="mt-4 font-britti-sans text-2xl font-normal leading-[0.9em] tracking-[-0.02em] text-[#202020] md:text-3xl lg:text-[40px]">
              Science has embraced <br />digital discovery
            </h3>
            <p className="mt-2 font-britti-sans text-base font-normal leading-[1.12em] tracking-[-0.02em] text-[#202020] md:text-xl whitespace-nowrap">
              But the tools have not caught up with the vision.
            </p>
          </motion.div>
        ) : (
          <div
            className="w-full max-w-[500px] relative z-10 mt-0 md:mt-0 pl-5 md:pl-10"
          >
            <h3 className="mt-4 font-britti-sans text-2xl font-normal leading-[0.9em] tracking-[-0.02em] text-[#202020] md:text-3xl lg:text-[40px]">
              Science has embraced <br />digital discovery
            </h3>
            <p className="mt-2 font-britti-sans text-base font-normal leading-[1.12em] tracking-[-0.02em] text-[#202020] md:text-xl whitespace-nowrap">
              But the tools have not caught up with the vision.
            </p>
          </div>
        )}

        {/* Swipe-reveal group for subheading, panels, infra-text */}
        {shouldAnimate ? (
          <motion.div
            className="relative ml-auto mt-14 max-w-[930px] overflow-hidden md:mt-40 z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05, margin: "-200px 0px" }}
            variants={revealVariants}
          >
            {/* Mask matching parent background */}
            <motion.div
              className="
                absolute inset-0
                bg-[#FCFCFC]
                origin-top
              "
              variants={maskVariants}
            />

            {/* Subheading slides up */}
            <motion.h3
              variants={panelVariants}
              className="font-britti-sans text-xl font-normal leading-none tracking-[-0.01em] text-[#202020] md:text-2xl lg:text-[32px]"
            >
              AI and digital tools offer unprecedented potential,
            </motion.h3>

          {/* Captions with connecting lines */}
          <motion.div
            variants={panelVariants}
            className="mt-4 hidden md:flex items-center gap-4 lg:gap-6"
          >
            {[
              'from curing cancer',
              'personalised medicine',
              'revolutionising human computer interaction'
            ].map((caption, i) => (
              <React.Fragment key={i}>
                <p className="font-britti-sans text-sm font-normal leading-[1.12em] tracking-[-0.01em] text-[#202020] md:text-base text-center whitespace-nowrap">
                  {caption}
                </p>
                {i < 2 && (
                  <div className={`h-px bg-[#202020] flex-shrink-0 ${i === 1 ? 'w-32' : 'w-16'}`}></div>
                )}
              </React.Fragment>
            ))}
          </motion.div>

          {/* Panels */}
          <div className="mt-4 flex flex-col gap-4 md:flex-row lg:gap-6">
            {[
              {
                src: '/home/curing-cancer-image.webp',
                caption: 'from curing cancer',
              },
              {
                src: '/home/personalised-medicine-image.webp',
                caption: 'personalised medicine',
              },
              {
                src: '/home/robot-image.webp',
                caption: 'revolutionising human computer interaction',
              },
            ].map((item, i) => (
              <ImagePanel
                key={i}
                src={item.src}
                caption={item.caption}
                index={i}
                shouldAnimate={shouldAnimate}
              />
            ))}
          </div>

            {/* Infra text pulls down */}
            <motion.p
              variants={infraVariants}
              className="mt-8 font-britti-sans text-xl font-normal leading-none tracking-[-0.02em] text-[#202020] md:mt-12 md:text-2xl lg:text-[32px] md:pr-48"
            >
              Yet, the{' '}
              <span className="inline-flex mx-0.5 w-5 align-middle md:w-8">
                <MonitorIcon />
              </span>{' '}
              infrastructure that supports this innovation <br />
              is lagging by not giving enough information,{' '}
              <span className="inline-flex mx-0.5 w-6 align-middle">
                <DualLeftArrowIcon />
              </span>{' '}
              slowing <br />
              the very progress it aims to support. <br />
            </motion.p>
          </motion.div>
        ) : (
          <div className="relative ml-auto mt-14 max-w-[930px] md:mt-40 z-10">
            {/* Subheading */}
            <h3 className="font-britti-sans text-xl font-normal leading-none tracking-[-0.01em] text-[#202020] md:text-2xl lg:text-[32px]">
              AI and digital tools offer unprecedented potential,
            </h3>

            {/* Captions with connecting lines */}
            <div className="mt-4 hidden md:flex items-center gap-4 lg:gap-6">
              {[
                'from curing cancer',
                'personalised medicine',
                'revolutionising human computer interaction'
              ].map((caption, i) => (
                <React.Fragment key={i}>
                  <p className="font-britti-sans text-sm font-normal leading-[1.12em] tracking-[-0.01em] text-[#202020] md:text-base text-center whitespace-nowrap">
                    {caption}
                  </p>
                  {i < 2 && (
                    <div className={`h-px bg-[#202020] flex-shrink-0 ${i === 1 ? 'w-32' : 'w-16'}`}></div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Panels */}
            <div className="mt-4 flex flex-col gap-4 md:flex-row lg:gap-6">
              {[
                {
                  src: '/home/curing-cancer-image.webp',
                  caption: 'from curing cancer',
                },
                {
                  src: '/home/personalised-medicine-image.webp',
                  caption: 'personalised medicine',
                },
                {
                  src: '/home/robot-image.webp',
                  caption: 'revolutionising human computer interaction',
                },
              ].map((item, i) => (
                <ImagePanel
                  key={i}
                  src={item.src}
                  caption={item.caption}
                  index={i}
                  shouldAnimate={shouldAnimate}
                />
              ))}
            </div>

            {/* Infra text */}
            <p className="mt-8 font-britti-sans text-xl font-normal leading-none tracking-[-0.02em] text-[#202020] md:mt-12 md:text-2xl lg:text-[32px] md:pr-48">
              Yet, the{' '}
              <span className="inline-flex mx-0.5 w-5 align-middle md:w-8">
                <MonitorIcon />
              </span>{' '}
              infrastructure that supports this innovation <br />
              is lagging by not giving enough information,{' '}
              <span className="inline-flex mx-0.5 w-6 align-middle">
                <DualLeftArrowIcon />
              </span>{' '}
              slowing <br />
              the very progress it aims to support. <br />
            </p>
          </div>
        )}

        {/* Conclusion - appears once and stays */}
        {shouldAnimate ? (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-14 max-w-[691px] md:ml-auto md:mr-16 md:mt-36 lg:mt-[196px] relative z-10"
          >
            <p className="z-10 font-britti-sans text-base font-normal leading-[1.12em] tracking-[-0.01em] text-[#202020] md:text-xl md:tracking-[-0.02em]">
              We can&apos;t tell where to double down or when we have gone completely off track.
            </p>
            <p className="z-10 mt-2 font-britti-sans text-2xl font-normal leading-[0.9em] tracking-[-0.02em] text-[#202020] md:mt-4 md:pr-12 md:text-3xl lg:text-[40px]">
              This blind spot in scientific <br />computing is costing us breakthroughs.
            </p>
          </motion.div>
        ) : (
          <div className="mt-14 max-w-[691px] md:ml-auto md:mr-16 md:mt-36 lg:mt-[196px] relative z-10">
            <p className="z-10 font-britti-sans text-base font-normal leading-[1.12em] tracking-[-0.01em] text-[#202020] md:text-xl md:tracking-[-0.02em]">
              We can&apos;t tell where to double down or when we have gone completely off track.
            </p>
            <p className="z-10 mt-2 font-britti-sans text-2xl font-normal leading-[0.9em] tracking-[-0.02em] text-[#202020] md:mt-4 md:pr-12 md:text-3xl lg:text-[40px]">
              This blind spot in scientific <br />computing is costing us breakthroughs.
            </p>
          </div>
        )}

      {/* Bottom-left reveal bar (full-width section, no side margin) */}
      {shouldShowRectangle && shouldAnimate && (
        <motion.div
          className="absolute bottom-0 left-0 bg-[#202020] origin-left h-[60px] md:h-[90px] z-10"
          initial={{ width: "20vw" }}
          whileInView={{
            width: "36.75vw",
            transition: {
              duration: 0.8,
              ease: [0.6, 0, 0.38, 1]
            }
          }}
          viewport={{ once: false, amount: 0.8 }}
        />
      )}
      {shouldShowRectangle && !shouldAnimate && (
        <div
          className="absolute bottom-0 left-0 bg-[#202020] origin-left h-[60px] md:h-[90px] z-10"
          style={{ width: "36.75vw" }}
        />
      )}
    </section>
  );
}
