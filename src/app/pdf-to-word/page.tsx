import PDFToWordClient from "@/src/components/systemUI/PDFToWordClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PDF to Word Converter — 100% Free & Editable | SwiftPDF",
  description:
    "Easily convert your PDF files into editable Microsoft Word documents. SwiftPDF preserves your original fonts, images, and layout with high accuracy.",
  keywords: [
    "pdf to word",
    "convert pdf to docx",
    "pdf to editable word",
    "online pdf converter",
    "free pdf to word",
  ],
  alternates: {
    canonical: "https://swiftpdf.cloud/pdf-to-word",
  },
  openGraph: {
    title: "PDF to Word Converter | SwiftPDF.cloud",
    description:
      "Lightning-fast PDF to Word conversion. Safe, secure, and professional quality.",
    url: "https://swiftpdf.cloud/pdf-to-word",
    type: "website",
    images: [
      { url: "https://swiftpdf.cloud/og-image.png", width: 1200, height: 630 },
    ],
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. SEO Header Section - Focus on Accuracy & Ease */}
      <section className="bg-white py-16 px-4 border-b border-gray-100 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Accurate <span className="text-red-600">PDF to Word</span> Converter
            Online
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Turn your static PDF documents into **fully editable Microsoft Word
            (.docx)** files. Our engine reconstructs your document layout,
            preserving fonts, tables, and images with pinpoint precision.
          </p>
        </div>
      </section>

      {/* 2. The Interactive Tool */}
      <section className="py-12" aria-label="PDF to Word Conversion Tool">
        <PDFToWordClient />
      </section>

      {/* 3. Deep-Value Content (Combatting "Low Value Content" Flags) */}
      <article className="max-w-5xl mx-auto px-6 py-20 border-t border-gray-200 mt-10">
        {/* NEW H2: Establishing the main secondary topic */}
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          The Most Reliable PDF to Word Converter Online
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Reconstruct Original Layouts
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Most converters ruin your columns and headers. **SwiftPDF** uses a
              reconstruction algorithm to ensure your **headers, footers, and
              margins** stay exactly where they belong.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            {/* Changed to H3 so it matches the left side */}
            <h3 className="text-xl font-bold mb-4">
              Secure & Private PDF Processing
            </h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              SwiftPDF uses **256-bit SSL encryption**. Processing occurs in a
              secure environment, and files are **purged from our servers**
              within 60 minutes.
            </p>
          </div>
        </div>

        {/* NEW SECTION: High-Traffic H3s */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold text-red-600">PDF to DOCX</h3>
            <p className="text-xs text-gray-500">
              Perfect for Microsoft Word 2019, 2021, and Office 365.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-red-600">Preserve Tables</h3>
            <p className="text-xs text-gray-500">
              Data stays inside cells, making it easy to edit financial reports.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-red-600">Preserve Images</h3>
            <p className="text-xs text-gray-500">
              High-resolution images stay embedded at original quality.
            </p>
          </div>
        </div>
      </article>

      {/* 4. Multi-Schema Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "SwiftPDF PDF to Word Converter",
              operatingSystem: "All",
              applicationCategory: "BusinessApplication",
              url: "https://swiftpdf.cloud/pdf-to-word",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to convert PDF to Word editable format",
              description:
                "A simple 3-step guide to turning PDFs into DOCX files.",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Upload",
                  text: "Upload your PDF file to the SwiftPDF converter.",
                },
                {
                  "@type": "HowToStep",
                  name: "Convert",
                  text: "Click 'Convert to Word' to begin the reconstruction process.",
                },
                {
                  "@type": "HowToStep",
                  name: "Download",
                  text: "Download your high-quality .docx file instantly.",
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}
