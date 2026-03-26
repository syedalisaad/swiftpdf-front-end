import PDFToPPTClient from "@/src/components/systemUI/PDFToPPTClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  // Optimized H1/Title (56 characters)
  title: "Convert PDF to PowerPoint Online — 100% Free & Fast",
  description: "Convert PDF to editable PowerPoint (PPTX) for free. SwiftPDF preserves your original layouts, text, and images for professional presentations.",
  keywords: ["pdf to ppt", "pdf to pptx", "convert pdf to powerpoint", "free online pdf converter", "swiftpdf"],
  alternates: {
    canonical: "https://swiftpdf.cloud/pdf-to-ppt",
  },
  openGraph: {
    title: "PDF to PowerPoint Converter | SwiftPDF.cloud",
    description: "Convert static PDFs into professional, editable slide decks in seconds.",
    url: "https://swiftpdf.cloud/pdf-to-ppt",
    type: "website",
    images: [{ url: "https://swiftpdf.cloud/og-image.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. SEO Header Section - Focus on Editability */}
      <section className="bg-white py-16 px-4 border-b border-gray-100 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Professional <span className="text-red-600">PDF to PowerPoint</span> Converter
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stop starting from scratch. Turn your static PDF files into 
            <strong> fully editable PowerPoint (.pptx)</strong> presentations 
            while keeping your images, text, and layouts perfectly aligned.
          </p>
        </div>
      </section>

      {/* 2. The Interactive Tool */}
      <section  aria-label="PDF to PowerPoint Conversion Workspace">
        <PDFToPPTClient />
      </section>

      {/* 3. Educational Content (Fixes "Low Value Content" & Adds Keywords) */}
      <article className="max-w-5xl mx-auto px-6 py-20 border-t border-gray-200 mt-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose SwiftPDF for Presentations?</h2>
            <p className="text-gray-700 mb-4">
              Converting a PDF to a slide deck requires more than just extraction. Our 
              <strong> PDF to PPTX</strong> engine analyzes the document structure to 
              create logical slide transitions and maintain vector graphics quality.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <span className="bg-red-100 text-red-600 p-1 rounded-full font-bold">✓</span>
                <strong>Editable Text:</strong> No more flat images; edit your text directly in PPT.
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <span className="bg-red-100 text-red-600 p-1 rounded-full font-bold">✓</span>
                <strong>Image Preservation:</strong> Photos are extracted at their original resolution.
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <span className="bg-red-100 text-red-600 p-1 rounded-full font-bold">✓</span>
                <strong>Format Security:</strong> Safe, cloud-encrypted processing for your business decks.
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-4">Zero-Installation Workflow</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              SwiftPDF works entirely in your browser. Whether you are using a 
              Windows PC, a Mac, or even your mobile device, you can generate 
              presentation-ready slides without downloading bulky software.
            </p>
            <p className="text-xs text-gray-400 italic mt-6 border-t pt-4">
              * Privacy Note: All uploaded files are automatically deleted within 60 minutes.
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
            "name": "How to convert PDF to editable PowerPoint slides",
            "description": "A 3-step guide to converting PDF documents into PPTX presentations.",
            "step": [
              { "@type": "HowToStep", "name": "Upload", "text": "Select and upload your PDF file to the SwiftPDF converter." },
              { "@type": "HowToStep", "name": "Convert", "text": "Our AI analyzes the layout and creates matching PowerPoint slides." },
              { "@type": "HowToStep", "name": "Download", "text": "Download your fully editable .pptx file instantly." }
            ]
          })
        }}
      />
    </div>
  );
}