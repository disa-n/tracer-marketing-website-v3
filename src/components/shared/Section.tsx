import React from 'react';
import { GridLinesLight } from '@/components/shared/GridLines';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  showGridLines?: boolean;
  background?: 'white' | 'dark';
  padding?: 'none' | 'small' | 'medium' | 'large';
  maxWidth?: 'full' | 'container' | 'narrow';
}

const paddingClasses = {
  none: '',
  small: 'pt-8 pb-8',
  medium: 'pt-16 pb-16',
  large: 'pt-24 pb-24'
};

const backgroundClasses = {
  white: 'bg-[#FCFCFC]',
  dark: 'bg-[#202020]'
};

const maxWidthClasses = {
  full: 'w-full',
  container: 'px-4 md:px-8 lg:px-12 lg:max-w-[1400px] mx-auto',
  narrow: 'px-4 md:px-8 max-w-4xl mx-auto'
};

export default function Section({ 
  children, 
  className = '', 
  showGridLines = false,
  background = 'white',
  padding = 'medium',
  maxWidth = 'container'
}: SectionProps) {
  return (
    <section className={`relative ${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}>
      {showGridLines && <GridLinesLight />}
      
      <div className={`relative z-10 ${maxWidthClasses[maxWidth]}`}>
        {children}
      </div>
    </section>
  );
}
