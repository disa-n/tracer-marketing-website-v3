"use client"

// // import Cal, { getCalApi } from "@calcom/embed-react";
// import { useEffect } from "react";

// export function ScheduleDemoPage() {
//   return (
//     <section className="flex flex-col gap-10 w-full min-h-screen items-center py-20">
//       <div className="text-center">
//         <h1>Schedule Demo</h1>
//         <p className="text-lg text-primary/80 mt-3">
//           Talk to the founders to learn more about Tracer
//         </p>
//       </div>
//       {/* <ScheduleDemo /> */}
//     </section>
//   );
// }

// export function ScheduleDemo() {
//   useEffect(() => {
//     (async function () {
//       // const cal = await getCalApi();
//     //   cal("ui", {
//     //     styles: { branding: { brandColor: "#000000" } },
//     //     hideEventTypeDetails: false,
//     //     layout: "month_view",
//     //   });
//     // })();
//   }, []);
//   return (
//     // <Cal
//     //   calLink="marc-kl/demo"
//     //   style={{ width: "100%", height: "100%", overflow: "scroll" }}
//     //   config={{ layout: "month_view" }}
//     // />
//     <div />
//   );
// }

'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient'; // ✅ Supabase client import

interface FormData {
  name: string;
  email: string;
  jobTitle: string;
}

interface DemoContextType {
  openDemo: () => void;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export function DemoModalProvider({ children }: { children: ReactNode }) {
  const router = useRouter();

  const value = {
    openDemo: () => router.push('/demo')
  };

  return (
    <DemoContext.Provider value={value}>
      {children}
    </DemoContext.Provider>
  );
}

export function useDemo() {
  const context = useContext(DemoContext);
  if (context === undefined) {
    throw new Error('useDemo must be used within a DemoModalProvider');
  }
  return context;
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

  // ✅ Updated: submit to demo_enquiries (no quotes needed)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, jobTitle } = formData;

    const { error } = await supabase
      .from('demo_enquiries')
      .insert([{ name, email, job_title: jobTitle }]);

    if (error) {
      console.error('Supabase insert error:', error.message);
      return;
    }

    setFormData({ name: '', email: '', jobTitle: '' });
    alert('Thanks! We’ve received your enquiry.');
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
      <div className="flex-1 flex items-center justify-center p-6 md:p-8 lg:p-16 relative z-10">
        <div className="w-full max-w-md space-y-8">
          {/* Heading Section */}
          <div className="space-y-4">
            <h1 className="font-['Britti_Sans'] text-[32px] md:text-[40px] lg:text-[48px] font-normal leading-[1.1] tracking-[-0.02em] text-[#202020]">
              Interested?
            </h1>
            <p className="font-['Britti_Sans'] text-[20px] md:text-[24px] font-normal leading-[1.1] tracking-[-0.02em] text-[#888888] whitespace-nowrap">
              Let&apos;s talk about how Tracer fits your workflow
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
                placeholder="jane@framer.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-[42px] md:h-[48px] bg-[#F5F5F5] border border-[#E8E8E8] px-5 text-base md:text-lg text-[#202020] placeholder-[#B1B1B1] font-['Britti_Sans']"
              />
            </div>

            {/* Job Title */}
            <div className="space-y-2">
              <label className="text-[14px] text-[#888888] font-['Chakra_Petch'] uppercase">
                What is your job title?
              </label>
              <input
                type="text"
                name="jobTitle"
                placeholder="e.g., computational biologist"
                value={formData.jobTitle}
                onChange={handleChange}
                className="w-full h-[42px] md:h-[48px] bg-[#F5F5F5] border border-[#E8E8E8] px-5 text-base md:text-lg text-[#202020] placeholder-[#B1B1B1] font-['Britti_Sans']"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full h-[42px] md:h-[49px] bg-[#202020] text-[#FCFCFC] text-base md:text-lg font-['Britti_Sans'] mt-8 hover:bg-[#404040] transition-colors cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="relative flex-1 lg:flex items-center justify-center hidden overflow-hidden z-10">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/shared/T-Asset-Globe.webp"
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

