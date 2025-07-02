'use client';

import Image from 'next/image';
import GridLines from '@/components/shared/GridLines';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const MeetTracerSection = () => {
  const sectionRef = useRef(null);

  // Detect when section comes into view
  const isInView = useInView(sectionRef, {
    amount: 0.3, // Trigger when 30% visible
    margin: "0px 0px 0px 0px",
    once: true // Only trigger once, don't reset when scrolling away
  });

  return (
    <section ref={sectionRef} className="bg-[#202020] relative overflow-hidden w-full">
      {/* Grid Lines */}
      <GridLines />

      <div className="relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center justify-center px-4 md:px-8 lg:px-12 w-full max-w-[1800px] mx-auto">

        {/* Jet Image - Background with flying animation */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <motion.div
            initial={{ x: "-120%", y: "150%", opacity: 0 }}
            animate={isInView ? {
              x: 0,
              y: 0,
              opacity: 0.9,
              transition: {
                duration: 1.5,
                ease: [0.25, 0.1, 0.25, 1]
              }
            } : {
              x: "-120%",
              y: "150%",
              opacity: 0
            }}
          >
            <Image
              src="/images/home/T-Asset-Jet-v2.webp"
              alt="Tracer Jet"
              width={1000}
              height={500}
              className="w-[400px] md:w-[600px] lg:w-[800px] xl:w-[1000px] h-auto object-contain"
              priority
            />
          </motion.div>
        </div>

        {/* Text Content - One Line */}
        <div className="relative z-10 flex items-center justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-12">
          {/* Meet Tracer */}
          <h2 className="font-britti-sans text-white text-[28px] md:text-[42px] lg:text-[64px] xl:text-[80px] font-normal leading-[0.9] tracking-tighter whitespace-nowrap">
            Meet Tracer
          </h2>

          {/* Tracer Logo */}
          <div className="flex items-center">
            <Image
              src="/images/home/Tracer-White-Transparent.svg"
              alt="Tracer Logo"
              width={200}
              height={67}
              className="w-[45px] md:w-[65px] lg:w-[85px] xl:w-[100px] h-auto"
            />
          </div>

          {/* The Solution */}
          <h2 className="font-britti-sans text-white text-[28px] md:text-[42px] lg:text-[64px] xl:text-[80px] font-normal leading-[0.9] tracking-tighter whitespace-nowrap">
            The Solution
          </h2>
        </div>

      </div>

      {/* Bottom divider - matches gridline color */}
      <div className="w-full h-px bg-[#303030] opacity-50"></div>
    </section>
  );
};

export default MeetTracerSection;
