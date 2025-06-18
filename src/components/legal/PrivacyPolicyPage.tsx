import React from 'react';
import PrivacyPolicyText from './PrivacyPolicyText';

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-[#FCFCFC] text-[#202020] font-britti-sans">
      <div className="mx-auto max-w-[1255px] px-4 pt-44 pb-20 space-y-20">
        <h1 className="text-[104px] leading-[88px] font-normal">Privacy Policy</h1>
        <PrivacyPolicyText />
      </div>
    </div>
  );
}
