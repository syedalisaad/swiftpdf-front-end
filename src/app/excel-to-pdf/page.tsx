import ExcelToPDFClient from "@/src/components/systemUI/ExcelToPDFClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convert Excel to PDF Online - Free Spreadsheet Converter | SwiftPDF",
  description: "Easily convert XLSX, XLS, and CSV files to high-quality PDF documents. Maintain table formatting and data integrity with our free online tool.",
  keywords: ["excel to pdf", "convert xlsx to pdf", "convert csv to pdf", "spreadsheet to pdf converter", "free online pdf tools"],
  alternates: {
    canonical: "https://swiftpdf.cloud/excel-to-pdf",
  },
  openGraph: {
    title: "Excel to PDF - Professional Converter | SwiftPDF",
    description: "Keep your tables perfectly aligned. Convert spreadsheets to PDF instantly.",
    url: "https://swiftpdf.cloud/excel-to-pdf",
    siteName: "SwiftPDF",
    type: "website",
    images: [
      {
        url: "https://swiftpdf.cloud/og-image.png", // Use absolute URL
        width: 1200,
        height: 630,
        alt: "SwiftPDF Excel to PDF Tool Preview",
      },
    ],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* 1. SEO Header Section - Visible to Google immediately */}
      <section className="py-16 px-4 border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
             Convert <span className="text-red-600">Excel to PDF</span> Online for Free
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Turn your spreadsheets into professional, read-only PDF documents. 
            Our converter supports **XLSX, XLS, and CSV** formats while preserving 
            your cell formatting, table borders, and data alignment.
          </p>
        </div>
      </section>

      {/* 2. The Interactive Tool Component */}
      <section className="py-12" aria-label="Spreadsheet Conversion Tool">
        <ExcelToPDFClient />
      </section>

      {/* 3. Educational Content Block (Essential for AdSense Approval) */}
      <article className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why use SwiftPDF for Excel Conversion?</h2>
            <p className="text-gray-700 mb-6">
              When you convert spreadsheets to PDF, the biggest challenge is maintaining the 
              <strong> layout of your tables</strong>. SwiftPDF ensures that your columns 
              don't get cut off and your font styling remains intact.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li>✅ <strong>Fast Processing:</strong> Most files convert in under 5 seconds.</li>
              <li>✅ <strong>Format Preservation:</strong> Support for colors, borders, and images.</li>
              <li>✅ <strong>Multi-Sheet Support:</strong> Convert entire workbooks with multiple tabs.</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-4">Secure File Handling</h3>
            <p className="text-sm text-gray-500 italic mb-4">
              "Privacy is our priority. Your financial data and spreadsheets are processed 
              in a secure environment and are never shared or stored."
            </p>
            <p className="text-sm text-gray-600">
              SwiftPDF uses end-to-end encryption. Once your conversion is complete, 
              your files are automatically purged from our system within 60 minutes.
            </p>
          </div>
        </div>
      </article>

      {/* 4. Structured Data (JSON-LD) for Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "SwiftPDF Excel to PDF Converter",
            "operatingSystem": "All",
            "applicationCategory": "BusinessApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Free online tool to convert Excel spreadsheets (XLSX, XLS, CSV) to high-quality PDF files while keeping formatting intact."
          })
        }}
      />
    </main>
  );
}