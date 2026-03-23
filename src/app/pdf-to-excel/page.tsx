import PDFToExcelClient from "@/src/components/systemUI/PDFToExcelClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  // Optimized H1/Title (56 characters)
  title: "Convert PDF to Excel Online - Free PDF Table Extractor | SwiftPDF",
  description: "Extract tables from PDF to Excel spreadsheets (.xlsx) instantly. SwiftPDF uses AI to accurately map rows and columns for easy data analysis.",
  keywords: ["pdf to excel", "convert pdf to xlsx", "extract table from pdf", "pdf to spreadsheet", "free online pdf converter"],
  alternates: {
    canonical: "https://swiftpdf.cloud/pdf-to-excel",
  },
  openGraph: {
    title: "PDF to Excel Converter | SwiftPDF.cloud",
    description: "Turn unselectable PDF tables into fully editable Excel spreadsheets in seconds.",
    url: "https://swiftpdf.cloud/pdf-to-excel",
    type: "website",
    images: [{ url: "https://swiftpdf.cloud/og-pdf-to-excel.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. SEO Header - Direct Benefit for Data Analysts */}
      <section className="bg-white py-16 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Accurate <span className="text-red-600">PDF to Excel</span> Converter Online
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stop manually typing data. Extract complex tables from PDF documents 
            directly into **editable Excel (.xlsx)** or **CSV** formats while 
            maintaining perfect row and column alignment.
          </p>
        </div>
      </section>

      {/* 2. The Interactive Tool Component */}
      <section className="py-12" aria-label="PDF to Excel Extraction Tool">
        <PDFToExcelClient />
      </section>

      {/* 3. High-Value Technical Content (Crucial for AdSense & Trust) */}
      <article className="max-w-5xl mx-auto px-6 py-20 border-t border-gray-200 mt-10">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">Smart Table Recognition Technology</h2>
            <p className="text-gray-700 mb-6">
              Our <strong>PDF to Spreadsheet</strong> engine doesn't just "copy-paste" text. 
              It analyzes the visual structure of your document to identify borders, 
              hidden gridlines, and cell spans.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-red-600 font-bold">✓</span>
                <p className="text-sm text-gray-600"><strong>Preserve Formatting:</strong> Font styles and colors are kept consistent where possible.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 font-bold">✓</span>
                <p className="text-sm text-gray-600"><strong>Zero Data Leakage:</strong> Processing happens in a secure, encrypted sandbox.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-4">Why use SwiftPDF for Data?</h3>
            <p className="text-sm text-gray-600 mb-4">
              Financial analysts and researchers use SwiftPDF because we handle 
              <strong> multi-page tables</strong> better than standard converters. 
              Whether it's an annual report or a simple invoice, we turn static 
              PDFs into dynamic data.
            </p>
            <p className="text-xs text-gray-400 italic">
              * Note: For best results, ensure the PDF text is selectable and not a scanned image.
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
            "name": "SwiftPDF PDF to Excel Converter",
            "operatingSystem": "All",
            "applicationCategory": "BusinessApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              "AI Table Recognition",
              "XLSX and CSV Export",
              "Multi-sheet support",
              "No registration required"
            ],
            "description": "Convert PDF documents to editable Excel spreadsheets accurately using AI-powered table extraction."
          })
        }}
      />
    </div>
  );
}