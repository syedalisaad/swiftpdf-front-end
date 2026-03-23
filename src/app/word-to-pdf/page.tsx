import WordToPDFClient from "@/src/components/systemUI/WordToPDFClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  // Optimized Title (60 characters) - Hits all secondary keywords
  title: "Convert Word to PDF Online - Free DOC & DOCX to PDF | SwiftPDF",
  description: "Convert DOC and DOCX to PDF instantly with SwiftPDF. We preserve your formatting, fonts, and layout for a professional, high-quality result.",
  keywords: ["word to pdf", "convert doc to pdf", "docx to pdf converter", "online word to pdf", "free docx converter"],
  alternates: {
    canonical: "https://swiftpdf.cloud/word-to-pdf",
  },
  openGraph: {
    title: "Word to PDF Converter | SwiftPDF",
    description: "Fast and secure Word to PDF conversion online. Perfect layout preservation.",
    url: "https://swiftpdf.cloud/word-to-pdf",
    type: "website",
    images: [{ url: "https://swiftpdf.cloud/og-image.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. SEO Header Section - High Impact & Semantic */}
      <section className="bg-white py-16 px-4 border-b border-gray-100 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Professional <span className="text-red-600">Word to PDF</span> Converter
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your **Microsoft Word (.doc, .docx)** documents into professional, 
            high-quality PDF files. SwiftPDF ensures that your fonts, margins, and 
            complex layouts stay exactly as they were in the original file.
          </p>
        </div>
      </section>

      {/* 2. The Interactive Tool */}
      <section  aria-label="Word to PDF Conversion Tool">
        <WordToPDFClient />
      </section>

      {/* 3. Deep-Value Content (Crucial for AdSense & Trust) */}
      <article className="max-w-5xl mx-auto px-6 py-20 border-t border-gray-200 mt-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">Preserve Your Document Formatting</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              When sharing Word files, layouts often shift between different versions 
               of Office. By using our **DOCX to PDF converter**, you lock your 
              formatting in place, ensuring that resumes, reports, and invoices look 
              identical on every device.
            </p>
            <div className="flex gap-4">
              <div className="flex flex-col items-center p-3 bg-white rounded-xl border border-gray-100 shadow-sm flex-1">
                <span className="text-red-600 font-bold">DOC</span>
                <span className="text-xs text-gray-400 uppercase">Input</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-white rounded-xl border border-gray-100 shadow-sm flex-1">
                <span className="text-red-600 font-bold">DOCX</span>
                <span className="text-xs text-gray-400 uppercase">Input</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-red-600 rounded-xl shadow-sm flex-1">
                <span className="text-white font-bold">PDF</span>
                <span className="text-xs text-red-100 uppercase">Output</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-4">Secure & Private Processing</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Your security is our priority. SwiftPDF uses **SSL encryption** to 
              handle your file transfers. We never store your documents permanently; 
              all files are **automatically deleted** within 60 minutes of processing.
            </p>
            <p className="text-xs text-gray-400 italic mt-6 border-t pt-4">
              * Works seamlessly on Windows, Mac, Linux, and mobile devices like your Vivo phone.
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
            "name": "SwiftPDF Word to PDF Converter",
            "operatingSystem": "All",
            "applicationCategory": "BusinessApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Convert Microsoft Word documents to PDF online for free with high layout accuracy."
          })
        }}
      />
    </div>
  );
}