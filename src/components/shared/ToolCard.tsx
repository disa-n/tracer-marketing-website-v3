import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ToolCardProps {
  href: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  ctaText?: string;
  className?: string;
}

export default function ToolCard({
  href,
  title,
  description,
  imageSrc,
  imageAlt,
  category,
  ctaText = "USE TOOL →",
  className = ""
}: ToolCardProps) {
  return (
    <Link href={href} className={`block h-full ${className}`}>
      <div className="border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col min-h-[clamp(380px,45vw,450px)] z-[2] bg-[#FCFCFC] cursor-pointer">
        <div className="relative h-48 sm:h-56 w-full bg-gradient-to-br from-[#F8F8F8] to-[#E8E8E8]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>
        <div className="pt-4 px-4 pb-4 sm:pt-6 sm:px-6 sm:pb-6 flex-1 flex flex-col">
          <div className="flex items-center mb-4 sm:mb-6">
            <span className="font-chakra-petch text-xs sm:text-sm font-normal uppercase leading-[19px] text-[#202020]">
              {category}
            </span>
          </div>
          <h2 className="font-britti-sans text-lg sm:text-xl font-medium mb-3 sm:mb-4 text-[#202020] hover:text-gray-700 transition-colors leading-tight">
            {title}
          </h2>
          <p className="font-britti-sans text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 flex-1 leading-snug">
            {description}
          </p>
          <div className="mt-auto">
            <div className="font-chakra-petch text-xs sm:text-sm font-normal uppercase leading-[19px] text-[#202020] hover:text-[#404040] transition-colors">
              {ctaText}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
