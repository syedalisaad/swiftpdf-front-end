import ExcelToPDFClient from "@/src/components/systemUI/ExcelToPDFClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Excel to PDF Converter — Fit All Columns & Keep Formatting",
  description:
    "Easily convert XLSX, XLS, and CSV files to high-quality PDF documents. Maintain table formatting and data integrity with our free online tool.",
  keywords: [
    "excel to pdf",
    "convert xlsx to pdf",
    "convert csv to pdf",
    "spreadsheet to pdf converter",
    "free online pdf tools",
  ],
  alternates: {
    canonical: "https://swiftpdf.cloud/excel-to-pdf",
  },
  openGraph: {
    title: "Excel to PDF - Professional Converter | SwiftPDF",
    description:
      "Keep your tables perfectly aligned. Convert spreadsheets to PDF instantly.",
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
    <div className="min-h-screen bg-gray-50">
      {/* 1. SEO Header Section - Visible to Google immediately */}
      <section className="py-16 px-4 border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Convert <span className="text-red-600">Excel to PDF</span> Online
            for Free
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Turn your spreadsheets into professional, read-only PDF documents.
            Our converter supports **XLSX, XLS, and CSV** formats while
            preserving your cell formatting, table borders, and data alignment.
          </p>
        </div>
      </section>

      {/* 2. The Interactive Tool Component */}
      <section className="py-12" aria-label="Spreadsheet Conversion Tool">
        <ExcelToPDFClient />
      </section>

      {/* 3. Educational Content Block (Essential for AdSense Approval) */}
      <article className="max-w-5xl mx-auto px-6 py-20 border-t border-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Professional Excel to PDF Conversion Made Simple
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              No More Cut-Off Columns
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The biggest challenge with Excel-to-PDF is{" "}
              <strong>table alignment</strong>. SwiftPDF intelligentlly scales
              your <strong>XLSX and CSV</strong> files so your data stays within
              the margins. No more missing columns or broken rows.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li>
                ✅ <strong>Instant XLSX to PDF:</strong> Convert complex
                workbooks in 5 seconds.
              </li>
              <li>
                ✅ <strong>CSV Support:</strong> Turn raw data into clean,
                readable PDF reports.
              </li>
              <li>
                ✅ <strong>Format Integrity:</strong> We preserve borders,
                colors, and font styles.
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md border border-red-50">
            <h3 className="text-xl font-bold mb-4 text-red-600">
              100% Secure & Private
            </h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Financial spreadsheets contain sensitive data. SwiftPDF uses{" "}
              <strong>256-bit SSL encryption</strong> to ensure your files are
              safe. Your data is processed in a secure environment and{" "}
              <strong>purged from our system</strong> within 60 minutes.
            </p>
            <p className="text-xs text-gray-400">
              * We do not read, share, or store your spreadsheet data. Ever.
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
            name: "SwiftPDF Excel to PDF Converter",
            operatingSystem: "All",
            applicationCategory: "BusinessApplication",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            description:
              "Free online tool to convert Excel spreadsheets (XLSX, XLS, CSV) to high-quality PDF files while keeping formatting intact.",
          }),
        }}
      />
    </div>
  );
}
