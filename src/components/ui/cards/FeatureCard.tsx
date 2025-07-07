import React from 'react'

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  className = ''
}: FeatureCardProps) {
  return (
    <div className={`flex flex-col lg:flex-row items-start lg:items-center gap-4 py-4 lg:py-0 px-4 w-full ${className}`}>
      <div className="flex-shrink-0">
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-britti-sans text-lg xl:text-xl 2xl:text-[32px] font-normal leading-tight text-[#202020] m-0">
          {title}
        </h3>
        <p className="font-britti-sans text-xs xl:text-sm 2xl:text-base font-normal leading-tight text-[#202020] m-0">
          {description}
        </p>
      </div>
    </div>
  )
}
