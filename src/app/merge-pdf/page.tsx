import MergePDFClient from "@/src/components/systemUI/MergePDFClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merge PDF Online - Free & Fast PDF Combiner | SwiftPDF",
  description:
    "Easily combine two or more PDF files into a single document. Secure, fast, and maintains original formatting. No installation required.",
  keywords: [
    "merge pdf",
    "combine pdf files",
    "join pdf documents",
    "online pdf merger",
    "free pdf tools",
  ],
  alternates: {
    canonical: "https://swiftpdf.cloud/merge-pdf",
  },
  openGraph: {
    title: "Merge PDF Online - Free & Fast PDF Combiner | SwiftPDF",
    description: "Combine multiple PDFs into one organized file in seconds.",
    url: "https://swiftpdf.cloud/merge-pdf",
    type: "website",
    images: [
      {
        url: "https://swiftpdf.cloud/og-image.png",
        width: 1200,
        height: 630,
        alt: "SwiftPDF Merge Tool Preview",
      },
    ],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* 1. SEO Header Section - High Impact Keywords */}
      <section className="bg-white py-16 px-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Merge PDF <span className="text-red-600">Files Online</span> —
            Combine Documents for Free
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            The simplest way to **combine multiple PDF documents** into a
            single, organized file. Keep your formatting intact and your data
            secure with our browser-based merging tool.
          </p>
        </div>
      </section>

      <section className="py-12" aria-label="PDF Merging Tool">
        <MergePDFClient />
      </section>

      <article className="mt-20 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          How to Merge PDF Files Online
        </h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            Select the PDF files you want to combine or drag them into the box.
          </li>
          <li>
            Rearrange the file order by dragging them into your preferred
            sequence.
          </li>
          <li>Click 'Merge PDF' and download your combined file instantly.</li>
        </ol>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          Why use SwiftPDF to Combine PDFs?
        </h2>

        <h3 className="text-xl font-semibold mt-6">100% Secure Processing</h3>
        <p>
          We value your privacy. Your files are encrypted via SSL and are never
          stored on our servers longer than 60 minutes.
        </p>

        <h3 className="text-xl font-semibold mt-6">
          Perfect for ATS Resumes and Reports
        </h3>
        <p>
          Merging a cover letter with a resume? Our tool preserves formatting,
          making it ideal for job seekers using our ATS Resume Checker.
        </p>
      </article>

      {/* 4. Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "SwiftPDF Merger",
            operatingSystem: "All",
            applicationCategory: "MultimediaApplication",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            description:
              "Combine multiple PDF files into one for free. Maintain original quality and layout without installing software.",
          }),
        }}
      />
    </main>
  );
}
