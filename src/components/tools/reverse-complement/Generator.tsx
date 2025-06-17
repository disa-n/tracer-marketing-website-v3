'use client';

import React, { useState } from 'react';
import { GridLinesLight } from '@/components/shared/GridLines';
import GeneratorCard from './GeneratorCard';

type TransformationType = 'reverse' | 'complement' | 'reverse-complement';

export default function Generator() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [transformation, setTransformation] = useState<TransformationType>('reverse-complement');

  // Transformation functions
  const getComplement = (sequence: string): string => {
    const complementMap: { [key: string]: string } = {
      'A': 'T',
      'T': 'A',
      'C': 'G',
      'G': 'C',
      'a': 't',
      't': 'a',
      'c': 'g',
      'g': 'c'
    };
    
    return sequence
      .split('')
      .map(base => complementMap[base] || base)
      .join('');
  };

  const getReverse = (sequence: string): string => {
    return sequence.split('').reverse().join('');
  };

  const getReverseComplement = (sequence: string): string => {
    return getReverse(getComplement(sequence));
  };

  // Clean input sequence
  const cleanSequence = (rawInput: string): string => {
    // Remove FASTA headers (lines starting with >)
    const lines = rawInput.split('\n');
    const sequenceLines = lines.filter(line => !line.trim().startsWith('>'));
    
    // Join sequence lines and remove whitespace and non-ATCG characters
    const sequence = sequenceLines.join('').replace(/[^ATCGatcg]/g, '');
    
    return sequence.toUpperCase();
  };

  // Apply transformation
  const transformSequence = (cleanedInput: string, type: TransformationType): string => {
    if (!cleanedInput) return '';
    
    switch (type) {
      case 'reverse':
        return getReverse(cleanedInput);
      case 'complement':
        return getComplement(cleanedInput);
      case 'reverse-complement':
        return getReverseComplement(cleanedInput);
      default:
        return cleanedInput;
    }
  };

  // Handle transformation when Enter button is clicked
  const handleTransform = (inputValue: string, method: TransformationType) => {
    const cleaned = cleanSequence(inputValue);
    const result = transformSequence(cleaned, method);
    setOutput(result);
  };

  return (
    <section className="relative bg-[#FCFCFC] pb-12 lg:pb-20">
      <GridLinesLight />

      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-20 xl:px-16 2xl:px-8 -mt-8 lg:mt-0">
        <GeneratorCard
          inputValue={input}
          setInputValue={setInput}
          outputValue={output}
          onTransform={handleTransform}
          transformationType={transformation}
          setTransformationType={setTransformation}
        />
      </div>
    </section>
  );
}
