import React from 'react';

interface QuoteProps {
  children: React.ReactNode;
  className?: string;
}

export const Quote: React.FC<QuoteProps> = ({ children, className = '' }) => {
  return (
    <blockquote className={`text-xl italic text-gray-700 border-l-4 border-gray-300 pl-6 my-6 ${className}`}>
      {children}
    </blockquote>
  );
};

export default Quote;
