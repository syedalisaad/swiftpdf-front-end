// app/split-pdf/page.tsx (Server Component)
import SplitPDFClient from "@/src/components/systemUI/SplitPDFClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Split PDF Online - Extract Pages & Separate PDF Free",
  description: "Easily split PDF files into individual pages or extract specific ranges. SwiftPDF.cloud is a fast, secure, and free online PDF splitter.",
  keywords: ["split pdf", "extract pdf pages", "separate pdf online", "free pdf splitter", "swiftpdf"],
  alternates: {
    canonical: "https://swiftpdf.cloud/split-pdf",
  },
  openGraph: {
    title: "Split PDF Online | SwiftPDF.cloud",
    description: "Extract pages from your PDF or save each page as a separate PDF instantly.",
    url: "https://swiftpdf.cloud/split-pdf",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <SplitPDFClient />
      {/* FAQ Schema to help rank for "How to" searches */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to split a PDF online",
            "step": [
              {
                "@type": "HowToStep",
                "text": "Upload your PDF document to SwiftPDF."
              },
              {
                "@type": "HowToStep",
                "text": "Select 'Split by Range' or 'Extract All Pages'."
              },
              {
                "@type": "HowToStep",
                "text": "Click 'Split PDF Now' and download your new files."
              }
            ]
          })
        }}
      />
    </>
  );
}