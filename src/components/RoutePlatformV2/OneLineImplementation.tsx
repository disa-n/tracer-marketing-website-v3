'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { GridLines3Dark } from '@/components/shared/GridLines'
import { Copy } from 'lucide-react'
import { motion, useAnimation, useInView, type Variants } from 'framer-motion'

const OneLineImplementation = () => {
  const sectionRef = useRef(null)
  const armControls = useAnimation()

  const isInView = useInView(sectionRef, {
    amount: 0.3,
    once: false
  })

  useEffect(() => {
    if (isInView) {
      armControls.start("swing")
    } else {
      armControls.start("initial")
    }
  }, [isInView, armControls])

  const armVariants: Variants = {
    initial: {
      rotate: 0,
      transition: { duration: 0.8 }
    },
    swing: {
      rotate: [0, 10, -5, 5, 0],
      transition: {
        duration: 2.5,
        times: [0, 0.3, 0.6, 0.8, 1]
      }
    }
  }

  const handleCopyCode = () => {
    navigator.clipboard.writeText('curl -sSL https://install.tracer.cloud/ | TRACER_USER_ID="API-KEY" bash -s && source ~/.bashrc && source ~/.zshrc')
  }

  const handleOpenTerminal = () => {
    // Copy the code first
    handleCopyCode()

    // Show instructions to open terminal
    const userAgent = navigator.userAgent.toLowerCase()
    let instructions = ''

    if (userAgent.includes('mac')) {
      instructions = 'Press Cmd+Space, type "Terminal", and press Enter. Then paste the copied command.'
    } else if (userAgent.includes('win')) {
      instructions = 'Press Win+R, type "cmd", and press Enter. Then paste the copied command.'
    } else if (userAgent.includes('linux')) {
      instructions = 'Press Ctrl+Alt+T to open Terminal. Then paste the copied command.'
    } else {
      instructions = 'Open your terminal application and paste the copied command.'
    }

    alert(`Code copied to clipboard!\n\n${instructions}`)
  }

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#202020]">
      {/* Background Grid Lines */}
      <GridLines3Dark />

      {/* Robotic Arm - Top Right */}
      <div className="absolute -top-60 -right-[1000px] z-10 hidden md:block overflow-hidden">
        <motion.div
          animate={armControls}
          variants={armVariants}
          initial="initial"
          className="transform-gpu"
          style={{ transformOrigin: "bottom center" }}
        >
          <Image
            src="/platformv2/T-Asset-Robotic_Arm.webp"
            alt="Robotic Arm"
            width={1800}
            height={1350}
            className="object-contain scale-x-[-1] rotate-[-30deg] transform-gpu"
          />
        </motion.div>
      </div>

      <div className='w-full flex z-[10] flex-col items-center justify-center max-w-[1800px] px-4 sm:px-6 md:px-8 mx-auto'>
        <div className="relative z-10 py-8 sm:py-12 md:py-16 lg:py-28 w-full">
          {/* Header */}
          <div className="mb-8 md:mb-12 lg:mb-16">
            <h2 className="font-britti-sans text-[32px] sm:text-[48px] md:text-[64px] lg:text-[96px] font-normal leading-[1.1] sm:leading-[1.0] md:leading-[0.9] lg:leading-[80px] tracking-[-1px] sm:tracking-[-2px] md:tracking-[-3px] lg:tracking-[-4px] text-white mb-4 md:mb-6">
              Our Implementation <br className="hidden sm:block" />
              <span className="sm:hidden">Takes One Line of Code</span>
              <span className="hidden sm:inline">Takes One Line of Code</span>
            </h2>
            <p className="font-britti-sans text-[14px] md:text-[16px] font-normal leading-[18px] md:leading-[20px] text-[#888888] max-w-2xl">
              Tracer installs instantly, connects at the kernel-level, and starts monitoring without any config<br className="hidden md:block" />
              <span className="md:hidden"> </span>or agent setup. It works in Docker or directly on your system.
            </p>
          </div>

          {/* Code Block */}
          <div className="mb-8 md:mb-12">
            {/* Outer grey frame */}
            <div className="border border-[#303030] bg-[#202020] p-2 md:p-4">
              {/* Inner grey code box */}
              <div className="relative bg-[#282828] p-3 md:p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-2">
                  <code className="font-mono text-[11px] sm:text-[12px] md:text-[14px] text-[#888888] flex-1 break-all md:break-normal leading-relaxed md:leading-normal">
                    <span className="text-[#888888]">curl -sSL </span>
                    <span className="text-blue-400">https://install.tracer.cloud/</span>
                    <span className="text-orange-400"> | </span>
                    <span className="text-yellow-400">TRACER_USER_ID</span>
                    <span className="text-orange-400">=</span>
                    <span className="text-[#888888]">&quot;API-KEY&quot;</span>
                    <span className="text-[#888888]"> bash -s </span>
                    <span className="text-orange-400">&&</span>
                    <span className="text-blue-400"> source</span>
                    <span className="text-[#888888]"> ~/.bashrc </span>
                    <span className="text-orange-400">&&</span>
                    <span className="text-blue-400"> source</span>
                    <span className="text-[#888888]"> ~/.zshrc</span>
                  </code>
                  <button
                    onClick={handleCopyCode}
                    className="self-start md:self-center p-1.5 md:p-2 text-[#888888] hover:text-white transition-colors flex-shrink-0"
                    aria-label="Copy code"
                  >
                    <Copy size={14} className="md:w-4 md:h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Run Button */}
            <button
              onClick={handleOpenTerminal}
              className="mt-3 md:mt-4 h-[44px] md:h-[49px] w-full sm:w-auto font-britti-sans text-sm md:text-base !font-[400] cursor-pointer bg-[#E8E8E8] flex items-center justify-center text-black px-6 md:px-8 hover:opacity-80 transition-all"
            >
              Run in Your Terminal
            </button>
          </div>

          {/* Framework Compatibility Section */}
          <div className="mt-16 sm:mt-24 md:mt-32 lg:mt-48">
            <h2 className="font-chakra-petch font-[400] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] text-white leading-[0.9] mb-4 md:mb-6">
              We Work With Any Framework
            </h2>

            {/* Technology Logos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
            {/* Airflow */}
            <div className="flex items-center justify-center aspect-square w-full bg-[#202020] border border-[#303030] p-2 sm:p-3 md:p-4">
              <img
                src="/platformv2/logos/airflow.svg"
                alt="Apache Airflow"
                className="w-full h-auto max-w-[80px] sm:max-w-[100px] md:max-w-[120px] max-h-[40px] sm:max-h-[50px] md:max-h-[60px] object-contain"
              />
            </div>

            {/* AWS */}
            <div className="flex items-center justify-center aspect-square w-full bg-[#202020] border border-[#303030] p-2 sm:p-3 md:p-4">
              <img
                src="/platformv2/logos/aws-sv.svg"
                alt="Amazon Web Services"
                className="w-full h-auto max-w-[80px] sm:max-w-[100px] md:max-w-[120px] max-h-[40px] sm:max-h-[50px] md:max-h-[60px] object-contain"
              />
            </div>

            {/* Nextflow */}
            <div className="flex items-center justify-center aspect-square w-full bg-[#202020] border border-[#303030] p-2 sm:p-3 md:p-4">
              <img
                src="/platformv2/logos/next-flow.svg"
                alt="Nextflow"
                className="w-full h-auto max-w-[80px] sm:max-w-[100px] md:max-w-[120px] max-h-[40px] sm:max-h-[50px] md:max-h-[60px] object-contain"
              />
            </div>

            {/* Bash */}
            <div className="flex items-center justify-center aspect-square w-full bg-[#202020] border border-[#303030] p-2 sm:p-3 md:p-4">
              <img
                src="/platformv2/logos/bash.svg"
                alt="Bash Shell"
                className="w-full h-auto max-w-[80px] sm:max-w-[100px] md:max-w-[120px] max-h-[40px] sm:max-h-[50px] md:max-h-[60px] object-contain"
              />
            </div>

            {/* AWS Batch */}
            <div className="flex items-center justify-center aspect-square w-full bg-[#202020] border border-[#303030] p-2 sm:p-3 md:p-4">
              <img
                src="/platformv2/logos/aws-batch.svg"
                alt="AWS Batch"
                className="w-full h-auto max-w-[80px] sm:max-w-[100px] md:max-w-[120px] max-h-[40px] sm:max-h-[50px] md:max-h-[60px] object-contain"
              />
            </div>

            {/* Ubuntu */}
            <div className="flex items-center justify-center aspect-square w-full bg-[#202020] border border-[#303030] p-2 sm:p-3 md:p-4">
              <img
                src="/platformv2/logos/ubuntu.svg"
                alt="Ubuntu"
                className="w-full h-auto max-w-[80px] sm:max-w-[100px] md:max-w-[120px] max-h-[40px] sm:max-h-[50px] md:max-h-[60px] object-contain"
              />
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OneLineImplementation
