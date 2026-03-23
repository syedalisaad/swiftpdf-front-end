import PDFToImageClient from "@/src/components/systemUI/PDFToImageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convert PDF to Image Online - Free High-Quality JPG & PNG Extraction",
  description: "Convert your PDF pages into high-resolution images instantly. SwiftPDF extracts every page as a clear JPG or PNG while maintaining 300 DPI quality.",
  keywords: ["pdf to image", "pdf to jpg", "extract images from pdf", "pdf to png converter", "online pdf tool"],
  alternates: {
    canonical: "https://swiftpdf.cloud/pdf-to-image",
  },
  openGraph: {
    title: "PDF to Image Converter | SwiftPDF.cloud",
    description: "Turn any PDF into a collection of high-quality images in seconds. No registration required.",
    url: "https://swiftpdf.cloud/pdf-to-image",
    type: "website", 
    images: [{ url: "https://swiftpdf.cloud/og-image.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. SEO Header Section (Visible & Semantic) */}
      <section className="bg-white py-16 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            High-Resolution <span className="text-red-600">PDF to Image</span> Converter
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Extract every page of your document into crisp, high-quality 
            <strong> JPG or PNG images</strong>. Perfect for presentations, social 
            media, or archiving without losing document clarity.
          </p>
        </div>
      </section>

      {/* 2. The Interactive Tool */}
      <section  aria-label="PDF to Image Tool">
        <PDFToImageClient />
      </section>

      {/* 3. Technical Content Section (Fixes "Low Value Content") */}
      <article className="max-w-5xl mx-auto px-6 py-20 border-t border-gray-200 mt-10">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-left">Professional Image Extraction</h2>
            <p className="text-gray-700 mb-6">
              Our <strong>PDF to JPG</strong> engine is designed for precision. Whether you are 
              converting a complex technical drawing or a simple text document, SwiftPDF 
              ensures that every pixel is preserved.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                <p className="font-bold text-red-600">300 DPI</p>
                <p className="text-xs text-gray-500 italic">Print-ready quality</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                <p className="font-bold text-red-600">No ZIP lag</p>
                <p className="text-xs text-gray-500 italic">Instant downloads</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-4">Why users choose SwiftPDF</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Most converters compress your images to save space, resulting in blurry text. 
              <strong> SwiftPDF</strong> prioritizes data integrity, providing 
              <strong> lossless PNG extraction</strong> so your charts and small text 
              rediv perfectly readable.
            </p>
            <p className="text-xs text-gray-400 italic mt-6">
              * Files are processed in a secure sandbox and auto-deleted after 1 hour.
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
            "@type": "HowTo",
            "name": "How to convert PDF pages to images",
            "description": "Step-by-step guide to extracting high-quality images from PDF files.",
            "step": [
              { "@type": "HowToStep", "name": "Upload PDF", "text": "Select your PDF document in the SwiftPDF uploader." },
              { "@type": "HowToStep", "name": "Convert", "text": "Choose your preferred output format (JPG or PNG) and click 'Extract'." },
              { "@type": "HowToStep", "name": "Download", "text": "Download your images individually or as a complete ZIP archive." }
            ]
          })
        }}
      />
    </div>
  );
}