/**
 * PDF Download Test Page
 *
 * Test page to demonstrate the minimal PDF download system
 * with the tracer-test-file.pdf
 */

import PDFDownloadCard from '@/components/resources/downloads/PDFDownloadCard';
import SupabaseDiagnostic from '@/components/utils/SupabaseDiagnostic';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PDF Download Test | Tracer',
  description: 'Test page for PDF download functionality',
};

export default function TestPDFPage() {
  return (
    <main className="w-full min-h-screen bg-[#FCFCFC]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-medium font-britti-sans mb-6 text-[#202020]">
            PDF Download Test
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Testing the minimal PDF download system with signed URLs from Supabase Storage.
          </p>
        </div>
      </section>

      {/* Diagnostics Section */}
      <section className="pb-8 px-4 md:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto mb-8">
          <h2 className="text-xl font-medium font-britti-sans mb-4 text-[#202020] text-center">
            System Diagnostics
          </h2>
          <SupabaseDiagnostic />
        </div>
      </section>

      {/* PDF Download Card Section */}
      <section className="pb-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-medium font-britti-sans mb-4 text-[#202020] text-center">
            PDF Download Test
          </h2>
          <PDFDownloadCard
            fileName="tracer-test-file.pdf"
            title="Tracer Test Document"
            description="This is a test PDF file to demonstrate the download functionality. The file should be uploaded to your Supabase Storage 'whitepapers' bucket."
          />
        </div>
      </section>

      {/* Instructions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
          <h2 className="text-2xl font-medium font-britti-sans mb-6 text-[#202020] text-center">
            Setup Instructions
          </h2>

          <div className="bg-white border border-[#E8E8E8] p-6 md:p-8 space-y-4">
            <div className="space-y-3 text-gray-700">
              <p className="font-medium text-[#202020]">
                To test this PDF download:
              </p>

              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  Go to your <strong>Articles Supabase project</strong> dashboard
                </li>
                <li>
                  Navigate to <strong>Storage</strong> → <strong>whitepapers</strong> bucket
                </li>
                <li>
                  Upload a PDF file named <code className="bg-gray-100 px-2 py-1 rounded">tracer-test-file.pdf</code>
                </li>
                <li>
                  Make sure the bucket has <strong>public access</strong> enabled
                </li>
                <li>
                  Refresh this page and click the download button
                </li>
              </ol>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded">
                <p className="text-blue-800 text-sm">
                  <strong>Note:</strong> If you see an error, check that:
                  <br />• The file exists in the whitepapers bucket
                  <br />• Your Articles Supabase environment variables are correct
                  <br />• The bucket has the proper access policies
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
          <h2 className="text-2xl font-medium font-britti-sans mb-6 text-[#202020] text-center">
            How It Works
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-[#E8E8E8] p-6">
              <h3 className="text-lg font-medium text-[#202020] mb-3">
                1. Signed URL Generation
              </h3>
              <p className="text-gray-600 text-sm">
                The component calls <code>getSignedPdfUrl()</code> to generate a secure,
                time-limited URL from Supabase Storage.
              </p>
            </div>

            <div className="bg-white border border-[#E8E8E8] p-6">
              <h3 className="text-lg font-medium text-[#202020] mb-3">
                2. Download Trigger
              </h3>
              <p className="text-gray-600 text-sm">
                Clicking the button creates a temporary link element to trigger
                the browser&apos;s download functionality.
              </p>
            </div>

            <div className="bg-white border border-[#E8E8E8] p-6">
              <h3 className="text-lg font-medium text-[#202020] mb-3">
                3. Security
              </h3>
              <p className="text-gray-600 text-sm">
                URLs expire after 1 hour and are generated on-demand,
                providing secure access without exposing direct file paths.
              </p>
            </div>

            <div className="bg-white border border-[#E8E8E8] p-6">
              <h3 className="text-lg font-medium text-[#202020] mb-3">
                4. Error Handling
              </h3>
              <p className="text-gray-600 text-sm">
                The component gracefully handles missing files, network errors,
                and client configuration issues.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
