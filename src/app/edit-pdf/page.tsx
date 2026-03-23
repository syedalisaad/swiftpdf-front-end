import PDFEditorClient from "@/src/components/systemUI/PDFEditorClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Online PDF Editor | Edit, Sign & Fill PDFs | SwiftPDF",
  description:
    "The easiest way to edit your PDF files online. Add text, erase content, and sign documents instantly with SwiftPDF. No installation required.",
  alternates: {
    canonical: "https://swiftpdf.cloud/edit-pdf",
  },
  keywords:
    "edit pdf, online pdf editor, sign pdf free, pdf eraser tool, nextjs pdf editor",
  openGraph: {
    title: "SwiftPDF - Professional Online PDF Tools",
    description: "Edit and Sign PDFs in seconds.",
    url: "https://swiftpdf.cloud/edit-pdf",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <section className="bg-white border-b border-gray-100 py-8 px-4 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          Online <span className="text-red-600">PDF Editor</span> and Signer
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Modify documents, add text annotations, erase sensitive content, and
          sign PDFs securely—all without leaving your browser.
        </p>
      </section>

      <PDFEditorClient />
      <article className="max-w-5xl mx-auto mt-10 px-6 py-16 grid md:grid-cols-3 gap-10">
        <div className="text-center">
          <div className="bg-red-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600 font-bold">
            1
          </div>
          <h3 className="font-bold text-lg">Annotate & Edit</h3>
          <p className="text-gray-600 text-sm mt-2">
            Add text, comments, and drawings to any page. Perfect for document
            reviews.
          </p>
        </div>
        <div className="text-center">
          <div className="bg-red-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600 font-bold">
            2
          </div>
          <h3 className="font-bold text-lg">Erase & Redact</h3>
          <p className="text-gray-600 text-sm mt-2">
            Need to hide personal info? Use our white-out eraser tool to clean
            your files.
          </p>
        </div>
        <div className="text-center">
          <div className="bg-red-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600 font-bold">
            3
          </div>
          <h3 className="font-bold text-lg">Sign Electronically</h3>
          <p className="text-gray-600 text-sm mt-2">
            Draw or upload your signature to finalize contracts and forms in
            seconds.
          </p>
        </div>
      </article>

      {/* 4. Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "SwiftPDF Editor",
            operatingSystem: "All",
            applicationCategory: "OfficeApplication",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            description:
              "Edit, sign, and redact PDF documents online for free.",
          }),
        }}
      />
    </>
  );
}
