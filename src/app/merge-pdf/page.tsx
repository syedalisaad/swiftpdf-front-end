import MergePDFClient from "@/src/components/systemUI/MergePDFClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  // Optimized H1/Title (48 characters)
  title: "Merge PDF Online - Combine Multiple PDF Files for Free | SwiftPDF",
  description: "Easily combine two or more PDF files into a single document. Secure, fast, and maintains original formatting. No installation required.",
  keywords: ["merge pdf", "combine pdf files", "join pdf documents", "online pdf merger", "free pdf tools"],
  alternates: {
    canonical: "https://swiftpdf.cloud/merge-pdf",
  },
  openGraph: {
    title: "Merge PDF Files Instantly | SwiftPDF",
    description: "Combine multiple PDFs into one organized file in seconds.",
    url: "https://swiftpdf.cloud/merge-pdf",
    type: "website",
    images: [{ url: "https://swiftpdf.cloud/og-image.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* 1. SEO Header Section - High Impact Keywords */}
      <section className="bg-white py-16 px-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Merge <span className="text-red-600">PDF Files Online</span> for Free
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            The simplest way to **combine multiple PDF documents** into a single, 
            organized file. Keep your formatting intact and your data secure with our 
            browser-based merging tool.
          </p>
        </div>
      </section>

      {/* 2. The Interactive Tool */}
      <section className="py-12" aria-label="PDF Merging Tool">
        <MergePDFClient />
      </section>

      {/* 3. Educational / Value-Add Section (Fixes "Low Value Content") */}
      <article className="max-w-5xl mx-auto px-6 py-20 border-t border-gray-200 mt-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Combine PDF Documents Securely</h2>
            <p className="text-gray-700 mb-4">
              Our <strong>PDF Merger</strong> allows you to upload multiple files at once. 
              Once uploaded, you can drag and drop them to change the order before 
              finalizing your document.
            </p>
            <ul className="space-y-3 text-gray-600 font-medium">
              <li>✅ No file size limits for standard merges.</li>
              <li>✅ Works on Windows, Mac, Linux, and Mobile.</li>
              <li>✅ Maintains high-resolution images and text vectors.</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-4">Privacy & Browser Processing</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Unlike other tools that store your sensitive documents on their servers, 
              SwiftPDF prioritizes your privacy. We use <strong>client-side encryption </strong> 
              and temporary storage that purges your data automatically within the hour. 
              Your files never leave our secure pipeline except for the processing required 
              to generate your merged document.
            </p>
          </div>
        </div>
      </article>

      {/* 4. Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "SwiftPDF Merger",
            "operatingSystem": "All",
            "applicationCategory": "MultimediaApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Combine multiple PDF files into one for free. Maintain original quality and layout without installing software."
          })
        }}
      />
    </main>
  );
}