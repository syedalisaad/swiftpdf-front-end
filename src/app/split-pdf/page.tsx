// app/split-pdf/page.tsx (Server Component)
import SplitPDFClient from "@/src/components/systemUI/SplitPDFClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Split PDF Online - Extract Pages & Separate PDF Free",
  description:
    "Easily split PDF files into individual pages or extract specific ranges. SwiftPDF.cloud is a fast, secure, and free online PDF splitter.",
  keywords: [
    "split pdf",
    "extract pdf pages",
    "separate pdf online",
    "free pdf splitter",
    "swiftpdf",
  ],
  alternates: {
    canonical: "https://swiftpdf.cloud/split-pdf",
  },
  openGraph: {
    title: "Split PDF Online | SwiftPDF.cloud",
    description:
      "Extract pages from your PDF or save each page as a separate PDF instantly.",
    url: "https://swiftpdf.cloud/split-pdf",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function Page() {
  return (
    <div className="min-h-screen">
      <header className="mb-10 text-center">
        {/* FIX: Add the H1 here */}
        <h1 className="text-4xl font-black text-gray-900 mb-4">
          <span className="text-red-600">Split PDF Online</span> — Extract Pages
          for Free
        </h1>
        <p className="text-lg text-gray-600">
          SwiftPDF provides a professional-grade PDF splitter that works
          entirely in your browser. No software installation or account
          required.
        </p>
      </header>
      <section aria-label="Split PDF Tool">
        <SplitPDFClient />
      </section>

      {/* 2. SEO Content Section - CRITICAL for "Low Value Content" fix */}
      <article className="max-w-4xl mx-auto px-6 py-16 prose prose-slate">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            How to Split PDF Files in Seconds
          </h2>
          <p className="text-lg text-gray-600">
            SwiftPDF provides a professional-grade PDF splitter that works
            entirely in your browser. No software installation or account
            required.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-red-600">
              Extract Specific Ranges
            </h3>
            <h4 className="text-gray-700">
              Need only pages 5 to 10? Our <strong>PDF Range Extractor</strong>{" "}
              allows you to input custom page numbers and generate a new
              document containing only the information you need.
            </h4>
          </div>
          <div>
            <h3 className="text-xl font-bold text-red-600">Bulk Split PDF</h3>
            <h4 className="text-gray-700">
              Turn a 100-page document into 100 individual files with one click.
              Our <strong>Separate PDF</strong>
              mode is optimized for high-speed processing without losing
              quality.
            </h4>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 p-8 rounded-3xl border border-gray-100">
          <h3 className="text-xl font-bold mb-4">
            Is it safe to split my PDF files here?
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Yes. SwiftPDF prioritizes your privacy by using secure processing
            through our FastAPI backend. Your documents are processed in
            real-time and are never stored permanently in a database or on our
            servers. To ensure total confidentiality, all temporary files are
            automatically purged immediately after processing. We don't require
            any personal information, sign-ups, or subscriptions—our tools are
            completely free and secure to use.
          </p>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to split a PDF online",
            description:
              "Learn how to use SwiftPDF to extract pages from any PDF document for free.",
            step: [
              {
                "@type": "HowToStep",
                name: "Upload",
                text: "Upload your PDF document to the SwiftPDF interface.",
              },
              {
                "@type": "HowToStep",
                name: "Configure",
                text: "Choose between extracting a range of pages or splitting every page into separate files.",
              },
              {
                "@type": "HowToStep",
                name: "Download",
                text: "Click 'Split PDF' and download your processed documents instantly.",
              },
            ],
          }),
        }}
      />
    </div>
  );
}
