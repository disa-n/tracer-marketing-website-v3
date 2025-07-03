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
import { Calendar, Clock, Download, FileText, Tag, User } from 'lucide-react';
import { useState } from 'react';

interface WhitepaperDownloadGatewayProps {
  whitepaper: Whitepaper;
}

export default function WhitepaperDownloadGateway({ whitepaper }: WhitepaperDownloadGatewayProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
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
        job_title: `Whitepaper Download: ${whitepaper.title}`
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
    <div className="w-full">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - Whitepaper Info */}
            <div className="space-y-6">
              {/* Category Badge */}
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                  {whitepaper.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-medium font-britti-sans text-[#202020] leading-tight">
                {whitepaper.title}
              </h1>

              {/* Summary */}
              <p className="text-xl text-gray-600 leading-relaxed">
                {whitepaper.summary}
              </p>

              {/* Metadata */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                {whitepaper.author && (
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{whitepaper.author}</span>
                  </div>
                )}
                
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(whitepaper.publishedDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{whitepaper.readTime}</span>
                </div>
              </div>

              {/* Description */}
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {whitepaper.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {whitepaper.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-[#E8E8E8] text-[#202020] text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column - Download Form */}
            <div className="lg:sticky lg:top-8">
              <div className="bg-white border border-[#E8E8E8] p-8 max-w-lg mx-auto lg:mx-0">
                {/* PDF Icon */}
                <div className="flex justify-center mb-6">
                  <FileText className="w-16 h-16 text-red-600" />
                </div>

                {formSubmitted ? (
                  /* Success State */
                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-medium text-[#202020]">
                      Thank You!
                    </h3>
                    <p className="text-gray-600">
                      Your download should start automatically. If not, click the button below.
                    </p>
                    <button
                      onClick={handleDownload}
                      disabled={isDownloading}
                      className="w-full px-6 py-3 bg-[#202020] text-white font-medium hover:bg-gray-800 disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      {isDownloading ? 'Downloading...' : 'Download Again'}
                    </button>
                  </div>
                ) : (
                  /* Form State */
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-xl font-medium text-[#202020] mb-2">
                        Download Whitepaper
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Enter your details to access this resource
                      </p>
                    </div>

                    <form onSubmit={handleSubmitAndDownload} className="space-y-4">
                      {/* Name Field */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#202020] mb-2">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-[#E8E8E8] focus:outline-none focus:border-[#202020] transition-colors"
                          placeholder="Enter your full name"
                          required
                          disabled={isSubmitting}
                        />
                      </div>

                      {/* Email Field */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#202020] mb-2">
                          Professional Email *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-[#E8E8E8] focus:outline-none focus:border-[#202020] transition-colors"
                          placeholder="Enter your work email"
                          required
                          disabled={isSubmitting}
                        />
                      </div>

                      {/* Error Message */}
                      {error && (
                        <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-sm rounded">
                          {error}
                        </div>
                      )}

                      {/* Submit Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="shiny-cta-experimental flex items-center justify-center transition-all duration-500 ease-in-out sctesmall-experimental w-full px-6 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                          style={{
                            '--mobile-height': '48px',
                            '--desktop-height': '55px',
                          } as React.CSSProperties}
                        >
                          <span>{isSubmitting ? 'Processing...' : 'Download PDF'}</span>
                        </button>
                      </div>
                    </form>

                    {/* Privacy Note */}
                    <p className="text-xs text-gray-500 text-center">
                      We respect your privacy. Your information will only be used to send you relevant updates about Tracer.
                    </p>
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
