/**
 * PDF Download Card Component
 * 
 * Minimal, lightweight component for downloading a specific PDF
 * Loads a signed URL and provides a download button
 */

'use client';

import { getSignedPdfUrl } from '@/lib/getSignedUrl';
import { Download, FileText } from 'lucide-react';
import { useEffect, useState } from 'react';

interface PDFDownloadCardProps {
  fileName?: string;
  title?: string;
  description?: string;
  className?: string;
}

export default function PDFDownloadCard({
  fileName = 'tracer-whitepaper.pdf',
  title = 'Tracer Whitepaper',
  description = 'Download our comprehensive whitepaper on HPC observability and computational pipeline monitoring.',
  className = ''
}: PDFDownloadCardProps) {
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadSignedUrl() {
      setIsLoading(true);
      setError(null);

      console.log('🔍 Loading signed URL for:', fileName);

      try {
        const url = await getSignedPdfUrl(fileName);
        console.log('📥 Received URL:', url ? 'Success' : 'Failed');

        if (url) {
          setDownloadUrl(url);
          console.log('✅ Download URL set successfully');
        } else {
          setError('Failed to load download link - check console for details');
          console.error('❌ No URL returned from getSignedPdfUrl');
        }
      } catch (err) {
        setError('Failed to load download link - check console for details');
        console.error('❌ PDF URL loading error:', err);
      } finally {
        setIsLoading(false);
      }
    }

    loadSignedUrl();
  }, [fileName]);

  const handleDownload = () => {
    console.log('🖱️ Download button clicked');
    console.log('🔗 Download URL available:', !!downloadUrl);

    if (!downloadUrl) {
      console.error('❌ No download URL available');
      return;
    }

    console.log('📥 Triggering download for:', fileName);
    console.log('🔗 Using URL:', downloadUrl.substring(0, 100) + '...');

    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log('✅ Download triggered');
  };

  // Custom button component that matches ShinyCTAButtonExperimental style but triggers download
  const DownloadButton = () => (
    <button
      onClick={handleDownload}
      disabled={!downloadUrl || isLoading}
      className="shiny-cta-experimental flex items-center justify-center transition-all duration-500 ease-in-out sctesmall-experimental px-6 sm:px-8 text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed"
      style={{
        '--mobile-height': '48px',
        '--desktop-height': '55px',
      } as React.CSSProperties}
    >
      <span className="flex items-center gap-2">
        <Download className="w-4 h-4" />
        {isLoading ? 'Loading...' : 'Download PDF'}
      </span>
    </button>
  );

  return (
    <div className={`bg-white border border-[#E8E8E8] p-8 max-w-lg mx-auto ${className}`}>
      {/* PDF Icon and Title */}
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0">
          <FileText className="w-12 h-12 text-red-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-medium font-britti-sans text-[#202020] mb-2">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Error State */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 text-sm">
          {error}
        </div>
      )}

      {/* Download Button */}
      <div className="flex justify-center">
        <DownloadButton />
      </div>

      {/* File Info */}
      <div className="mt-4 text-center text-sm text-gray-500">
        File: {fileName}
      </div>
    </div>
  );
}

// Example usage:
// 
// <PDFDownloadCard />
// 
// <PDFDownloadCard
//   fileName="custom-document.pdf"
//   title="Custom Document"
//   description="Download our custom document with detailed information."
// />
