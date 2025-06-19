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

      <div className='w-full flex z-[10] flex-col items-center justify-center max-w-[1800px] 900:px-8 px-6 mx-auto'>
        <div className="relative z-10 py-16 lg:py-28 w-full">
          {/* Header */}
          <div className="mb-12 lg:mb-16">
            <h2 className="font-britti-sans text-[96px] font-normal leading-[80px] tracking-[-4px] text-white mb-6">
              Our Implementation<br />
              Takes 1 Line Of Code
            </h2>
            <p className="font-britti-sans text-[16px] font-normal leading-[20px] text-[#888888] max-w-2xl">
              Tracer installs instantly, connects at the kernel level, and starts monitoring without any config<br />
              or agent setup. Works in Docker or directly on your system.
            </p>
          </div>

          {/* Code Block */}
          <div className="mb-12">
            {/* Outer grey frame */}
            <div className="border border-[#303030] bg-[#202020] p-4">
              {/* Inner grey code box */}
              <div className="relative bg-[#282828] p-6">
                <div className="flex items-center justify-between">
                  <code className="font-mono text-[14px] text-[#888888] flex-1">
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
                    className="ml-4 p-2 text-[#888888] hover:text-white transition-colors"
                    aria-label="Copy code"
                  >
                    <Copy size={16} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Run Button */}
            <button
              onClick={handleOpenTerminal}
              className="mt-4 h-[49px] font-britti-sans text-base !font-[400] cursor-pointer bg-[#E8E8E8] flex items-center justify-center text-black px-8 hover:opacity-80 transition-all"
            >
              Run This In Your Terminal
            </button>
          </div>

          {/* Framework Compatibility Section */}
          <div className="mt-48">
            <h2 className="font-chakra-petch font-[400] text-[32px] md:text-[40px] text-white leading-[0.9] mb-6">
              We Work With Any Framework
            </h2>

            {/* Technology Logos */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {/* Airflow */}
            <div className="flex items-center justify-center w-[215px] h-[215px] bg-[#202020] border border-[#303030]">
              <img
                src="/platformv2/logos/airflow.svg"
                alt="Apache Airflow"
                className="w-[200px] h-[120px] object-contain"
              />
            </div>

            {/* AWS */}
            <div className="flex items-center justify-center w-[215px] h-[215px] bg-[#202020] border border-[#303030]">
              <img
                src="/platformv2/logos/aws-sv.svg"
                alt="Amazon Web Services"
                className="max-w-[120px] max-h-[60px] object-contain"
              />
            </div>

            {/* Nextflow */}
            <div className="flex items-center justify-center w-[215px] h-[215px] bg-[#202020] border border-[#303030]">
              <img
                src="/platformv2/logos/next-flow.svg"
                alt="Nextflow"
                className="max-w-[120px] max-h-[60px] object-contain"
              />
            </div>

            {/* Bash */}
            <div className="flex items-center justify-center w-[215px] h-[215px] bg-[#202020] border border-[#303030]">
              <img
                src="/platformv2/logos/bash.svg"
                alt="Bash Shell"
                className="max-w-[120px] max-h-[60px] object-contain"
              />
            </div>

            {/* AWS Batch */}
            <div className="flex items-center justify-center w-[215px] h-[215px] bg-[#202020] border border-[#303030]">
              <img
                src="/platformv2/logos/aws-batch.svg"
                alt="AWS Batch"
                className="max-w-[120px] max-h-[60px] object-contain"
              />
            </div>

            {/* Ubuntu */}
            <div className="flex items-center justify-center w-[215px] h-[215px] bg-[#202020] border border-[#303030]">
              <img
                src="/platformv2/logos/ubuntu.svg"
                alt="Ubuntu"
                className="max-w-[120px] max-h-[60px] object-contain"
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
