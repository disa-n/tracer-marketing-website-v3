'use client'

import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import {
  motion,
  useScroll,
  useTransform,
  useAnimation,
  useInView
} from 'framer-motion'

function Layer() {
  const containerRef = useRef(null)
  const imageContainerRef = useRef(null)

  // Scroll progress for perfectly synchronized animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  // Image positioning - scrolls through viewport window
  // Synchronized so Insights Layer (Layer 4) shows dashboard/analytics interface
  const imageY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ['117px', '-284px', '-685px', '-1086px', '-1487px']
  )

  // Content positioning - slides through fixed viewport (balanced speed for alignment)
  // Layer 4 (Insights) positioned to be visible when dashboard interface shows
  const contentY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ['184px', '-450px', '-1000px', '-1550px', '-2000px']
  )



  const layer1Controls = useAnimation()
  const layer2Controls = useAnimation()
  const layer3Controls = useAnimation()
  const layer4Controls = useAnimation()

  const layer1Ref = useRef(null)
  const layer2Ref = useRef(null)
  const layer3Ref = useRef(null)
  const layer4Ref = useRef(null)

  // Intersection observers for layer animations
  const layer1InView = useInView(layer1Ref, { amount: 0.3, margin: "0px 0px -200px 0px" })
  const layer2InView = useInView(layer2Ref, { amount: 0.3, margin: "0px 0px -200px 0px" })
  const layer3InView = useInView(layer3Ref, { amount: 0.3, margin: "0px 0px -200px 0px" })
  const layer4InView = useInView(layer4Ref, { amount: 0.3, margin: "0px 0px -200px 0px" })



  useEffect(() => {
    layer1Controls.start(layer1InView ? 'visible' : 'hidden')
  }, [layer1InView, layer1Controls])
  useEffect(() => {
    layer2Controls.start(layer2InView ? 'visible' : 'hidden')
  }, [layer2InView, layer2Controls])
  useEffect(() => {
    layer3Controls.start(layer3InView ? 'visible' : 'hidden')
  }, [layer3InView, layer3Controls])
  useEffect(() => {
    layer4Controls.start(layer4InView ? 'visible' : 'hidden')
  }, [layer4InView, layer4Controls])

  return (
    <div className="w-full">
      {/* Mobile layout */}
      <div className="flex flex-col md:hidden">
        <div className="h-10 w-[80%] bg-[#1f1f1f] md:w-[250px] lg:h-20 xl:w-[309px]" />
        <div className="flex h-80 w-full items-center justify-center bg-[#1f1f1f] md:w-[320px] xl:w-[393px]">
          <Image
            src="/technology/four-layers-image.png"
            alt="Four Layers Technology Stack"
            width={393}
            height={320}
            className="h-80 w-full object-cover md:w-[320px] xl:w-[393px]"
          />
        </div>
      </div>
      {/* Original background section for mobile */}
      <div className="bg-[#202020] px-4 py-16 md:hidden">
        <p className="font-chakra-petch pb-10 uppercase text-[#fcfcfc]">
          _Four layers to make this happen
        </p>

        {/* Mobile content */}
        <div className="space-y-16">
          {/* Layer 1 - Mobile */}
          <div className="max-w-[480px]">
            <span className="font-chakra-petch text-white">LAYER 001</span>
            <div className="flex flex-col gap-2">
              <h2 className="pt-8 text-[32px] text-white">Extraction layer</h2>
              <span className="text-white">
                Linux-based connectors written in Rust extract information
                straight from the operating system (OS). With the newest
                technologies such as eBPF, we ensure very low overhead at 2%
                while keeping extreme speed.
              </span>
              <p className="text-white mt-4">
                OS-level connection ensures deeper visibility compared to application-connectors.
              </p>
              <div>
                <div className="mt-4 border border-[#404040] p-3 text-white">
                  <span>
                    Unprecedented information gathering while bypassing terrible
                    logging and incomplete information
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Layer 2 - Mobile */}
          <div className="max-w-[480px]">
            <span className="font-chakra-petch text-white">LAYER 002</span>
            <div className="flex flex-col gap-2">
              <h2 className="pt-8 text-[32px] text-white">Filter layer</h2>
              <span className="text-white">
                Science-specific information about the tools, frameworks, and
                files is automatically recognised and extracted.
              </span>
              <p className="text-white mt-4">
                The filter takes into account the deep technical and scientific information
                required for actionable insights compared to generic observability outputs.
              </p>
              <div>
                <div className="mt-4 border border-[#404040] p-3 text-white">
                  <span>
                    Filter focused on science-specific pipeline information,
                    differing from other observability solutions
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Layer 3 - Mobile */}
          <div className="max-w-[480px]">
            <span className="font-chakra-petch text-white">LAYER 003</span>
            <div className="flex flex-col gap-2">
              <h2 className="max-w-[500px] pt-8 text-[32px] text-white md:leading-[1.1]">
                Transformation Layer
              </h2>
              <span className="text-white">
                Extracted and filtered information is transformed into Open
                Telemetry format, the latest standard for observability
                practices.
              </span>
              <p className="text-white mt-4">
                Pioneering an approach called &ldquo;synthetic log generation&rdquo;, Tracer creates logs even where there was nothing before.
              </p>
              <div>
                <div className="mt-4 border border-[#404040] p-3 text-white">
                  <span>
                    Synthetic log generation in OTel format for ultimate
                    flexibility and understanding
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Layer 4 - Mobile */}
          <div className="max-w-[480px]">
            <span className="font-chakra-petch text-white">LAYER 004</span>
            <div className="flex flex-col gap-2">
              <h2 className="pt-8 text-[32px] text-white">Insights layer</h2>
              <span className="text-white">
                We implement AI and other predictive technologies on top of the
                generated information for fast error resolution, cost reduction,
                and speed improvements.
              </span>
              <p className="text-white mt-4">
                This layer consists of different applications on top of our data lake of pipeline information for
                all levels across the enterprise — for scientists, engineers, and executives.
              </p>
              <div>
                <div className="mt-4 border border-[#404040] p-3 text-white">
                  <span>
                    Information turned into insights for all layers of the
                    organisation
                  </span>
                </div>
                <div className="h-[10px] bg-white"></div>
                <div className="flex h-[10px] w-[80%] justify-self-end bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:block">
        {/* Line break element */}
        <div className="h-10 w-[80%] bg-[#1f1f1f] md:w-[250px] lg:h-20 xl:w-[309px]" />
      </div>

      {/* Desktop anchored viewport container */}
      <div
        ref={containerRef}
        className="hidden md:block w-full"
        style={{ height: '400vh' }}
      >
        {/* Anchored viewport - user stays here while content flows through */}
        <div className="w-full h-screen flex items-center justify-center bg-[#202020] sticky top-0">
          {/* Fixed frame container - this is where user is anchored */}
          <div className="relative">
            {/* Title positioned above frame */}
            <div
              className="absolute text-[#FCFCFC] text-base font-chakra-petch uppercase"
              style={{
                left: '0px',
                top: '-65px',
                lineHeight: '19px'
              }}
            >
              _Four layers to make this happen
            </div>

            {/* Main frame container */}
            <div
              className="relative w-[716px] h-[636px]"
              style={{ outline: '1px #404040 solid', outlineOffset: '-1px' }}
            >
              {/* Image viewport window */}
              <div
                className="absolute w-[604px] h-[604px] left-[56px] top-4 bg-[#202020] overflow-hidden"
                style={{ outline: '1px #404040 solid', outlineOffset: '-1px' }}
              >
                {/* Scrolling image */}
                <motion.img
                  ref={imageContainerRef}
                  src="/technology/four-layers-image.png"
                  alt="Four Layers Technology Stack"
                  className="absolute w-[478px] h-[2020px] left-[63px]"
                  style={{ top: imageY }}
                />
              </div>
            </div>

            {/* Scrolling content positioned to the right */}
            <motion.div
              className="absolute w-[478px]"
              style={{
                left: '736px',
                top: contentY
              }}
            >
          {/* Layer 1 - Extraction (0-20% scroll: OS/System diagram) */}
          <div
            ref={layer1Ref}
            className="absolute w-[478px] flex flex-col justify-start items-start gap-14"
            style={{ top: '0px' }}
          >
          <div className="text-[#FCFCFC] text-base font-chakra-petch uppercase leading-[19px]">LAYER 001</div>
          <div className="flex flex-col justify-start items-start gap-6">
            <div className="flex flex-col justify-start items-start gap-4">
              <div className="text-[#FCFCFC] text-[56px] font-britti-sans leading-[48px]">Extraction layer</div>
              <div className="w-[478px] text-[#FCFCFC] text-xl font-britti-sans leading-[22px]">
                Linux-based connectors written in Rust extract information
                straight from the operating system (OS). With the newest
                technologies such as eBPF, we ensure very low overhead at 2%
                while keeping extreme speed.
              </div>
              <div className="w-[478px] text-[#FCFCFC] text-xl font-britti-sans leading-[22px]">
                OS-level connection ensures deeper visibility compared to application-connectors.
              </div>
            </div>
            <div className="p-3 justify-center items-center gap-2 inline-flex" style={{ outline: '1px #404040 solid', outlineOffset: '-1px' }}>
              <div className="w-[400px] text-[#FCFCFC] text-base font-britti-sans leading-[17px]">
                Unprecedented information gathering while bypassing terrible
                logging and incomplete information
              </div>
            </div>
          </div>
        </div>

        {/* Layer 2 - Filter (20-40% scroll: Diamond/Cube filtering diagram) */}
        <div
          ref={layer2Ref}
          className="absolute w-[478px] flex flex-col justify-start items-start gap-14"
          style={{ top: '721px' }}
        >
          <div className="text-[#FCFCFC] text-base font-chakra-petch uppercase leading-[19px]">LAYER 002</div>
          <div className="flex flex-col justify-start items-start gap-6">
            <div className="flex flex-col justify-start items-start gap-4">
              <div className="text-[#FCFCFC] text-[56px] font-britti-sans leading-[48px]">Filter layer</div>
              <div className="w-[478px] text-[#FCFCFC] text-xl font-britti-sans leading-[22px]">
                Science-specific information about the tools, frameworks, and
                files is automatically recognised and extracted.
              </div>
              <div className="w-[478px] text-[#FCFCFC] text-xl font-britti-sans leading-[22px]">
                The filter takes into account the deep technical and scientific information
                required for actionable insights compared to generic observability outputs.
              </div>
            </div>
            <div className="p-3 justify-center items-center gap-2 inline-flex" style={{ outline: '1px #404040 solid', outlineOffset: '-1px' }}>
              <div className="w-[400px] text-[#FCFCFC] text-base font-britti-sans leading-[17px]">
                Filter focused on science-specific pipeline information,
                differing from other observability solutions
              </div>
            </div>
          </div>
        </div>

        {/* Layer 3 - Transformation (40-60% scroll: Pipeline/Flow diagram) */}
        <div
          ref={layer3Ref}
          className="absolute w-[478px] flex flex-col justify-start items-start gap-14"
          style={{ top: '1420px' }}
        >
          <div className="text-[#FCFCFC] text-base font-chakra-petch uppercase leading-[19px]">LAYER 003</div>
          <div className="flex flex-col justify-start items-start gap-6">
            <div className="flex flex-col justify-start items-start gap-4">
              <div className="text-[#FCFCFC] text-[56px] font-britti-sans leading-[48px]">Transformation layer</div>
              <div className="w-[478px] text-[#FCFCFC] text-xl font-britti-sans leading-[22px]">
                Extracted and filtered information is transformed into Open
                Telemetry format, the latest standard for observability
                practices.
              </div>
              <div className="w-[478px] text-[#FCFCFC] text-xl font-britti-sans leading-[22px]">
                Pioneering an approach called &ldquo;synthetic log generation&rdquo;, Tracer creates logs even where there was nothing before.
              </div>
            </div>
            <div className="p-3 justify-center items-center gap-2 inline-flex" style={{ outline: '1px #404040 solid', outlineOffset: '-1px' }}>
              <div className="w-[400px] text-[#FCFCFC] text-base font-britti-sans leading-[17px]">
                Synthetic log generation in OTel format for ultimate
                flexibility and understanding
              </div>
            </div>

            {/* White rectangle elements */}
            <div className="mt-4">
              <div className="h-[10px] bg-[#FCFCFC] w-full"></div>
              <div className="h-[10px] bg-[#FCFCFC] w-[80%] mt-1"></div>
            </div>
          </div>
        </div>

        {/* Layer 4 - Insights (60-80% scroll: Dashboard/Analytics interface) */}
        <div
          ref={layer4Ref}
          className="absolute w-[478px] flex flex-col justify-start items-start gap-14"
          style={{ top: '2119px' }}
        >
          <div className="text-[#FCFCFC] text-base font-chakra-petch uppercase leading-[19px]">LAYER 004</div>
          <div className="flex flex-col justify-start items-start gap-6">
            <div className="flex flex-col justify-start items-start gap-4">
              <div className="text-[#FCFCFC] text-[56px] font-britti-sans leading-[48px]">Insights layer</div>
              <div className="w-[478px] text-[#FCFCFC] text-xl font-britti-sans leading-[22px]">
                We implement AI and other predictive technologies on top of the
                generated information for fast error resolution, cost reduction,
                and speed improvements.
              </div>
              <div className="w-[478px] text-[#FCFCFC] text-xl font-britti-sans leading-[22px]">
                This layer consists of different applications on top of our data lake of pipeline information for
                all levels across the enterprise — for scientists, engineers, and executives.
              </div>
            </div>
            <div className="p-3 justify-center items-center gap-2 inline-flex" style={{ outline: '1px #404040 solid', outlineOffset: '-1px' }}>
              <div className="text-[#FCFCFC] text-base font-britti-sans leading-[17px]">
                Information turned into insights for all layers of the
                organisation
              </div>
            </div>
          </div>
        </div>


            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layer
