import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const sizeClasses = {
  small: {
    title: 'text-2xl sm:text-3xl md:text-4xl',
    subtitle: 'text-base sm:text-lg'
  },
  medium: {
    title: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
    subtitle: 'text-lg sm:text-xl'
  },
  large: {
    title: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[104px]',
    subtitle: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px]'
  }
};

export default function SectionTitle({ 
  title, 
  subtitle, 
  className = '', 
  size = 'medium' 
}: SectionTitleProps) {
  const titleStyle = size === 'large' ? {
    fontFamily: 'Britti Sans',
    fontSize: 'clamp(32px,8vw,64px)'
  } : {};

  const subtitleStyle = size === 'large' ? {
    fontFamily: 'Britti Sans'
  } : {};

  return (
    <div className={`flex flex-col justify-start items-start gap-4 ${className}`}>
      <div 
        className={`text-[#202020] font-normal leading-[46px] break-words ${
          size === 'large' ? '' : sizeClasses[size].title
        }`}
        style={titleStyle}
      >
        {title}
      </div>
      {subtitle && (
        <div 
          className={`text-[#202020] text-[18px] font-normal leading-[20px] break-words ${
            size === 'large' ? '' : sizeClasses[size].subtitle
          }`}
          style={subtitleStyle}
        >
          {subtitle}
        </div>
      )}
    </div>
  );
}
