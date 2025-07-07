'use client';

import { supabase } from '@/lib/supabaseClient';
import Image from 'next/image';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  jobTitle: string;
}

export default function ScheduleDemoPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    jobTitle: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Submit to demo_enquiries
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, jobTitle } = formData;

    // 1. Save to Supabase (only if client is available)
    if (supabase) {
      const { error } = await supabase
        .from('demo_enquiries')
        .insert([{ name, email, job_title: jobTitle }]);

      if (error) {
        console.error('Supabase insert error:', error.message);
        return;
      }
    } else {
      console.warn('Supabase client not available. Demo enquiry not saved to database.');
    }

    // 2. Call Supabase Edge Function to send email
    try {
      const response = await fetch('https://onvjbefrerpcecjbmipw.supabase.co/functions/v1/sendConfirmationEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9udmpiZWZyZXJwY2VjamJtaXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkyMTY3ODksImV4cCI6MjA2NDc5Mjc4OX0._hO_UZc2d8MDTv-ksndlLOMfAE5flc-3docFuVYyw-g',
        },
        body: JSON.stringify({
          email,
          name,
          jobTitle,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Edge Function error:', response.status, errorText);
      }
    } catch (err) {
      console.error('Fetch failed:', err);
    }

    // 3. Clear form and show alert
    setFormData({ name: '', email: '', jobTitle: '' });
    alert("Thanks! We've received your enquiry.");
  };

  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row bg-white relative">
      {/* Background container with max-width constraint */}
      <div className="absolute inset-0 mx-auto max-w-[1440px] w-full">
        {/* Vertical Gridlines */}
        <div className="pointer-events-none absolute inset-0 z-0">
          {[12, 37, 62, 87].map((percent, index) => (
            <div
              key={index}
              className="absolute top-0 h-full w-[0.25px] bg-[#E8E8E8]"
              style={{ left: `${percent}%`, transform: 'translateX(-50%)' }}
            />
          ))}
        </div>
      </div>

      {/* Left Side: Form */}
      <div className="relative flex-1 flex items-center justify-center p-6 lg:p-12 z-10">
        <div className="w-full max-w-[400px] space-y-8">
          
          {/* Header */}
          <div className="text-center lg:text-left space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-['Britti_Sans'] font-normal text-[#202020] leading-tight">
              Get a personalised demo
            </h1>
            <p className="text-base md:text-lg text-[#666666] font-['Britti_Sans']">
              See how Tracer can transform your computational workflows
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <label className="text-[14px] text-[#888888] font-['Chakra_Petch'] uppercase">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Jane Smith"
                value={formData.name}
                onChange={handleChange}
                className="w-full h-[42px] md:h-[48px] bg-[#F5F5F5] border border-[#E8E8E8] px-5 text-base md:text-lg text-[#202020] placeholder-[#B1B1B1] font-['Britti_Sans']"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-[14px] text-[#888888] font-['Chakra_Petch'] uppercase">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="jane@company.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-[42px] md:h-[48px] bg-[#F5F5F5] border border-[#E8E8E8] px-5 text-base md:text-lg text-[#202020] placeholder-[#B1B1B1] font-['Britti_Sans']"
              />
            </div>

            {/* Job Title */}
            <div className="space-y-2">
              <label className="text-[14px] text-[#888888] font-['Chakra_Petch'] uppercase">
                Job Title
              </label>
              <input
                type="text"
                name="jobTitle"
                placeholder="Senior Researcher"
                value={formData.jobTitle}
                onChange={handleChange}
                className="w-full h-[42px] md:h-[48px] bg-[#F5F5F5] border border-[#E8E8E8] px-5 text-base md:text-lg text-[#202020] placeholder-[#B1B1B1] font-['Britti_Sans']"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-[42px] md:h-[49px] bg-[#202020] text-white text-base md:text-lg font-['Britti_Sans'] hover:bg-[#333333] transition-colors"
            >
              Request Demo
            </button>
          </form>

          {/* Or Divider and Book a Call */}
          <div className="space-y-6">
            {/* Divider */}
            <div className="flex items-center justify-center">
              <div className="flex-1 h-[1px] bg-[#303030]"></div>
              <span className="px-4 text-[#303030] font-['Britti_Sans'] text-sm">or</span>
              <div className="flex-1 h-[1px] bg-[#303030]"></div>
            </div>

            {/* Book a Call Button */}
            <a
              href="https://calendly.com/tracerlaura/meeting-with-laura"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-[42px] md:h-[49px] bg-[#E8E8E8] text-[#202020] text-base md:text-lg font-['Britti_Sans'] hover:bg-[#D8D8D8] transition-colors cursor-pointer flex items-center justify-center"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="relative flex-1 lg:flex items-center justify-center hidden overflow-hidden z-10">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/images/components/T-Asset-Globe.webp"
            alt="Globe Visual"
            width={1200}
            height={1200}
            className="object-contain scale-150 translate-x-1/4 translate-y-1/3"
          />
        </div>
      </div>
    </div>
  );
}
