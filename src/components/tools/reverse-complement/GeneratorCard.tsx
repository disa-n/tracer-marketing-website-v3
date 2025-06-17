import React, { useState } from 'react';

interface GeneratorCardProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  outputValue: string;
  onTransform: (input: string, method: 'reverse' | 'complement' | 'reverse-complement') => void;
  transformationType: 'reverse' | 'complement' | 'reverse-complement';
  setTransformationType: (value: 'reverse' | 'complement' | 'reverse-complement') => void;
}

export default function GeneratorCard({
  inputValue,
  setInputValue,
  outputValue,
  onTransform,
  transformationType,
  setTransformationType
}: GeneratorCardProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateInput = (input: string): boolean => {
    // Remove FASTA headers (lines starting with >)
    const lines = input.split('\n');
    const sequenceLines = lines.filter(line => !line.trim().startsWith('>'));

    // Join sequence lines and remove whitespace
    const sequence = sequenceLines.join('').replace(/\s/g, '');

    // Check if sequence contains only A, T, C, G (case-insensitive)
    const validPattern = /^[ATCGatcg]*$/;
    return validPattern.test(sequence);
  };

  const handleEnterClick = () => {
    if (validateInput(inputValue)) {
      setErrorMessage('');
      onTransform(inputValue, transformationType);
    } else {
      setErrorMessage('🧬 Oops! That doesn\'t look like DNA. We only accept A, T, C, and G. Please try again.');
    }
  };

  const options: Array<{ value: 'reverse' | 'complement' | 'reverse-complement', label: string }> = [
    { value: 'reverse', label: 'reverse' },
    { value: 'complement', label: 'complement' },
    { value: 'reverse-complement', label: 'reverse-complement' }
  ];

  const handleOptionSelect = (value: 'reverse' | 'complement' | 'reverse-complement') => {
    setTransformationType(value);
    setIsDropdownOpen(false);
  };

  return (
    <div className="border border-neutral-200 bg-[#FCFCFC] pt-4 px-8 pb-8 lg:pt-6 lg:px-12 lg:pb-12 relative z-20">
      {/* Main Card Content */}
      <div className="flex flex-col lg:flex-row gap-6 lg:items-start justify-between">
        
        {/* Left Column - Input */}
        <div className="flex-1 relative">
          <label className="block text-[#888888] uppercase font-chakra-petch text-base mb-2">
            INPUT:
          </label>
          <div className="relative">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Paste your raw sequence here"
              className="w-full h-[220px] bg-[#f8f8f8] border border-neutral-300 p-4 text-base font-britti-sans text-[#202020] rounded-none resize-none placeholder:text-lg"
            />
            {!inputValue && (
              <div className="absolute top-4 right-4 pointer-events-none">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                </svg>
              </div>
            )}
            <button
              onClick={handleEnterClick}
              className="absolute bottom-4 right-4 bg-[#202020] text-white px-4 py-2 text-sm font-britti-sans cursor-pointer"
            >
              Enter →
            </button>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="mt-2 text-red-600 text-sm font-britti-sans">
              {errorMessage}
            </div>
          )}
        </div>

        {/* Center Column - Arrow (Desktop only) */}
        <div className="hidden lg:flex justify-center items-center text-2xl text-[#202020] w-[40px] h-[220px] pt-8">
          →
        </div>

        {/* Right Column - Output */}
        <div className="flex-1">
          <label className="block text-[#888888] uppercase font-chakra-petch text-base mb-2">
            OUTPUT:
          </label>
          <div
            className="w-full h-[220px] bg-[#f8f8f8] border border-neutral-300 p-4 text-base font-britti-sans text-[#202020] opacity-90 overflow-auto"
          >
            {outputValue}
          </div>
        </div>
      </div>

      {/* Transformation Selector */}
      <div className="text-left text-[#888888] text-base font-chakra-petch mt-6 uppercase tracking-wide">
        I WANT THE{' '}
        <div className="relative inline-block ml-0.5">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-base font-britti-sans text-[#202020] border border-neutral-300 pl-3 pr-8 py-2 text-left bg-white relative"
          >
            {transformationType}
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2">▼</span>
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-neutral-300 shadow-lg z-30 min-w-full">
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleOptionSelect(option.value)}
                  className="block w-full text-left px-2 py-1 text-sm font-britti-sans text-[#202020] hover:bg-gray-100"
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
        {' '}OF MY SEQUENCE
      </div>
    </div>
  );
}
