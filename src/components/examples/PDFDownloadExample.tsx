/**
 * PDF Download Example
 * 
 * Example component showing how to use the minimal PDF download system
 */

import PDFDownloadCard from '@/components/PDFDownloadCard';

export default function PDFDownloadExample() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-medium font-britti-sans mb-4 text-[#202020]">
          PDF Download Examples
        </h2>
        <p className="text-gray-600">
          Minimal, lightweight PDF download components
        </p>
      </div>

      {/* Default PDF */}
      <div>
        <h3 className="text-xl font-medium font-britti-sans mb-4 text-[#202020]">
          Default Usage
        </h3>
        <PDFDownloadCard />
      </div>

      {/* Custom PDF */}
      <div>
        <h3 className="text-xl font-medium font-britti-sans mb-4 text-[#202020]">
          Custom PDF
        </h3>
        <PDFDownloadCard
          fileName="technical-guide.pdf"
          title="Technical Implementation Guide"
          description="Comprehensive guide to implementing Tracer's observability platform in your HPC environment. Includes setup instructions, best practices, and troubleshooting tips."
        />
      </div>

      {/* Another Custom PDF */}
      <div>
        <h3 className="text-xl font-medium font-britti-sans mb-4 text-[#202020]">
          Research Paper
        </h3>
        <PDFDownloadCard
          fileName="hpc-observability-research.pdf"
          title="HPC Observability Research"
          description="Latest research findings on high-performance computing observability patterns and their impact on computational biology workflows."
        />
      </div>
    </div>
  );
}

// Usage in a page:
// import PDFDownloadExample from '@/components/examples/PDFDownloadExample';
// 
// export default function ExamplePage() {
//   return (
//     <main className="w-full min-h-screen bg-[#FCFCFC]">
//       <PDFDownloadExample />
//     </main>
//   );
// }
