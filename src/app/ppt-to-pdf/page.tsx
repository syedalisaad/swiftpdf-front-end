import PPTToPDFClient from "@/src/components/systemUI/PPTToPDFClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  // Optimized H1/Title (58 characters)
  title: "Convert PowerPoint to PDF Online — 100% Free & Secure",
  description: "Convert PPT and PPTX to PDF online for free. SwiftPDF preserves your original slide layouts, fonts, and images with perfect accuracy. No signup required.",
  keywords: ["ppt to pdf", "pptx to pdf", "convert powerpoint to pdf online", "free ppt converter", "swiftpdf"],
  alternates: {
    canonical: "https://swiftpdf.cloud/ppt-to-pdf",
  },
  openGraph: {
    title: "PowerPoint to PDF Converter | SwiftPDF.cloud",
    description: "Lightning-fast PPT to PDF conversion. Professional quality, secure, and 100% free.",
    url: "https://swiftpdf.cloud/ppt-to-pdf",
    type: "website",
    images: [{ url: "https://swiftpdf.cloud/og-inage.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. SEO Header Section - Focus on Presentation Integrity */}
      <section className="bg-white py-16 px-4 border-b border-gray-100 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            High-Quality <span className="text-red-600">PowerPoint to PDF</span> Converter
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Protect your presentation layout. Turn your **PPT and PPTX slides** into professional, non-editable PDF documents while maintaining 
            perfect font rendering and image clarity.
          </p>
        </div>
      </section>

      {/* 2. The Interactive Tool */}
      <section className="py-12" aria-label="PPT to PDF Conversion Workspace">
        <PPTToPDFClient />
      </section>

      {/* 3. Deep-Value Content Section (Crucial for AdSense Approval) */}
      <article className="max-w-5xl mx-auto px-6 py-20 border-t border-gray-200 mt-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">Preserve Your Slide Layouts</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              When you share a PowerPoint file, fonts and formatting can break on different devices. 
              Converting **PowerPoint to PDF** ensures your audience sees exactly what 
              you intended, regardless of their operating system or software version.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-red-600 font-bold text-lg">✓</span> 
                <strong>Vector Quality:</strong> Text remains sharp and searchable.
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-red-600 font-bold text-lg">✓</span> 
                <strong>Layout Lock:</strong> Images and shapes stay perfectly aligned.
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-4">Fast & Secure Processing</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              SwiftPDF uses advanced server-side rendering to handle even the most 
              complex <strong>PPTX animations and transitions</strong>, flattening 
              them into a clean, professional PDF document.
            </p>
            <p className="text-xs text-gray-400 italic mt-6 border-t pt-4">
              * Privacy Notice: Your presentations are encrypted during transfer and 
              deleted permanently after 60 minutes.
            </p>
          </div>
        </div>
      </article>

      {/* 4. Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "SwiftPDF PPT to PDF Converter",
              "operatingSystem": "All",
              "applicationCategory": "BusinessApplication",
              "url": "https://swiftpdf.cloud/ppt-to-pdf",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "How to convert PowerPoint to PDF",
              "description": "A quick 3-step guide to turning your PPT slides into a professional PDF.",
              "step": [
                { "@type": "HowToStep", "name": "Upload", "text": "Upload your .ppt or .pptx file to the SwiftPDF tool." },
                { "@type": "HowToStep", "name": "Render", "text": "Wait while our engine renders the slides into high-quality PDF format." },
                { "@type": "HowToStep", "name": "Download", "text": "Download your converted PDF file instantly." }
              ]
            }
          ])
        }}
      />
    </div>
  );
}