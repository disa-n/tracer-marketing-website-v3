/**
 * Whitepaper Download Gateway Component
 *
 * Complete download gateway with:
 * 1. Whitepaper info (title, summary, details)
 * 2. Lead capture form (name, email)
 * 3. PDF download functionality
 */

'use client';

import { getSignedPdfUrl } from '@/lib/getSignedUrl';
import { saveDemoEnquiry } from '@/lib/supabase-utils';
import { Whitepaper } from '@/lib/whitepapers';
import { Calendar, Clock, Download, FileText } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface WhitepaperDownloadGatewayProps {
  whitepaper: Whitepaper;
}

export default function WhitepaperDownloadGateway({ whitepaper }: WhitepaperDownloadGatewayProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleTitle: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitAndDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Validate form
      if (!formData.name.trim() || !formData.email.trim()) {
        setError('Please fill in all fields');
        setIsSubmitting(false);
        return;
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setError('Please enter a valid email address');
        setIsSubmitting(false);
        return;
      }

      // Save lead to database
      const leadResult = await saveDemoEnquiry({
        name: formData.name.trim(),
        email: formData.email.trim(),
        job_title: formData.roleTitle.trim() || `Whitepaper Download: ${whitepaper.title}`
      });

      if (!leadResult.success) {
        console.error('Failed to save lead:', leadResult.error);
        // Continue with download even if lead saving fails
      }

      setFormSubmitted(true);

      // Start download
      await handleDownload();

    } catch (err) {
      console.error('Form submission error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownload = async () => {
    setIsDownloading(true);

    try {
      const downloadUrl = await getSignedPdfUrl(whitepaper.fileName);

      if (!downloadUrl) {
        setError('Failed to generate download link. Please try again.');
        return;
      }

      // Trigger download
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = whitepaper.fileName;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (err) {
      console.error('Download error:', err);
      setError('Download failed. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="w-full bg-[#FCFCFC]">
      {/* Hero Section - 2 Column Layout */}
      <section className="relative bg-[#FCFCFC] pt-28 pb-16 md:pt-32 md:pb-8">
        <div className="max-w-[1408px] mx-auto px-4 md:px-8 lg:px-12 xl:px-4 2xl:px-2">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-24 2xl:gap-32 items-start">

            {/* Left Column - Whitepaper Info */}
            <div className="space-y-5">
              {/* Back Navigation */}
              <div className="mb-8">
                <Link
                  href="/resources"
                  className="inline-flex items-center gap-2 text-sm text-[#666666] hover:text-[#1e1e1e] transition-colors font-chakra-petch uppercase"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  BACK TO RESOURCES
                </Link>
              </div>

              {/* Resource Type Tag */}
              <div className="pb-2">
                <span className="text-sm font-medium text-[#666666] uppercase tracking-wide font-chakra-petch">
                  WHITEPAPER
                </span>
                <div className="w-[85px] h-[3px] bg-gradient-to-r from-[#3A23ED] via-[#BF5198] to-[#FFA231] mt-3"></div>
              </div>

              {/* Mobile Image - Shows only on mobile, positioned after WHITEPAPER line */}
              <div className="lg:hidden">
                <div className="relative h-64 md:h-72 bg-gradient-to-br from-[#F8F8F8] to-[#E8E8E8] flex items-center justify-center">
                  <FileText className="w-20 h-20 text-[#1e1e1e]" strokeWidth={1} />
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-britti-sans text-[#1e1e1e] leading-tight tracking-tight">
                {whitepaper.title}
              </h1>

              {/* Subtitle/Summary */}
              <p className="text-xl text-[#666666] leading-relaxed font-britti-sans">
                {whitepaper.summary}
              </p>

              {/* Meta Row */}
              <div className="flex flex-wrap gap-6 text-sm text-[#666666]">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="font-britti-sans">{new Date(whitepaper.publishedDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="font-britti-sans">{whitepaper.readTime}</span>
                </div>
              </div>

              {/* Pull Quote */}
              <div className="py-4">
                <blockquote className="text-xl md:text-2xl font-medium font-britti-sans text-[#666666] italic">
                  &ldquo;Access comprehensive insights and methodologies in this detailed whitepaper.&rdquo;
                </blockquote>
              </div>

              {/* Executive Summary/Description */}
              <div className="max-w-none">
                <p className="text-lg text-[#1e1e1e] leading-relaxed font-britti-sans">
                  {whitepaper.description}
                </p>
              </div>

              {/* Topics Covered */}
              <div>
                <h3 className="text-lg font-medium font-britti-sans text-[#1e1e1e] mb-3">
                  Topics Covered
                </h3>
                <div className="flex flex-wrap gap-2">
                  {whitepaper.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#E8E8E8] text-[#1e1e1e] text-sm font-britti-sans"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Image and Download Form */}
            <div className="lg:sticky lg:top-8 space-y-6 lg:mt-12">
              {/* Desktop Image - Shows only on desktop */}
              <div className="hidden lg:block relative h-48 md:h-56 lg:h-64 bg-gradient-to-br from-[#F8F8F8] to-[#E8E8E8] flex items-center justify-center max-w-lg mx-auto lg:mx-0">
                <FileText className="w-16 h-16 text-[#1e1e1e]" strokeWidth={1} />
              </div>

              <div className="bg-[#FCFCFC] border border-[#E8E8E8] p-6 md:p-8 max-w-lg mx-auto lg:mx-0">
                {formSubmitted ? (
                  /* Success State */
                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-medium text-[#1e1e1e] font-britti-sans">
                      Thank You!
                    </h3>
                    <p className="text-[#666666] font-britti-sans">
                      Your download should start automatically. If not, click the button below.
                    </p>
                    <button
                      onClick={handleDownload}
                      disabled={isDownloading}
                      className="w-full px-6 py-3 bg-[#1e1e1e] text-[#FCFCFC] font-medium font-britti-sans hover:bg-[#202020] disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      {isDownloading ? 'Downloading...' : 'Download Again'}
                    </button>
                  </div>
                ) : (
                  /* Form State */
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl md:text-3xl font-medium text-[#1e1e1e] mb-2 font-chakra-petch">
                        Download Whitepaper
                      </h3>
                    </div>

                    <form onSubmit={handleSubmitAndDownload} className="space-y-4">
                      {/* Name Field */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-[14px] text-[#666666] font-chakra-petch uppercase">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full h-[42px] md:h-[48px] bg-[#F5F5F5] border border-[#E8E8E8] px-5 text-base md:text-lg text-[#1e1e1e] placeholder-[#B1B1B1] font-britti-sans focus:outline-none focus:border-[#1e1e1e] transition-colors"
                          placeholder="Enter your full name"
                          required
                          disabled={isSubmitting}
                        />
                      </div>

                      {/* Email Field */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-[14px] text-[#666666] font-chakra-petch uppercase">
                          Professional Email *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full h-[42px] md:h-[48px] bg-[#F5F5F5] border border-[#E8E8E8] px-5 text-base md:text-lg text-[#1e1e1e] placeholder-[#B1B1B1] font-britti-sans focus:outline-none focus:border-[#1e1e1e] transition-colors"
                          placeholder="Enter your work email"
                          required
                          disabled={isSubmitting}
                        />
                      </div>

                      {/* Role Title Field */}
                      <div className="space-y-2">
                        <label htmlFor="roleTitle" className="text-[14px] text-[#666666] font-chakra-petch uppercase">
                          Role Title
                        </label>
                        <input
                          id="roleTitle"
                          name="roleTitle"
                          type="text"
                          value={formData.roleTitle || ''}
                          onChange={handleInputChange}
                          className="w-full h-[42px] md:h-[48px] bg-[#F5F5F5] border border-[#E8E8E8] px-5 text-base md:text-lg text-[#1e1e1e] placeholder-[#B1B1B1] font-britti-sans focus:outline-none focus:border-[#1e1e1e] transition-colors"
                          placeholder="Enter your role title"
                          disabled={isSubmitting}
                        />
                      </div>

                      {/* Error Message */}
                      {error && (
                        <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-sm font-britti-sans">
                          {error}
                        </div>
                      )}

                      {/* Submit Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full h-[42px] md:h-[49px] bg-[#202020] text-white text-base md:text-lg font-britti-sans hover:bg-[#333333] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                          {isSubmitting ? 'Processing...' : 'Download'}
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
