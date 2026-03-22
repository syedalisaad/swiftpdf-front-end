import PPTToPDFClient from "@/src/components/systemUI/PPTToPDFClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convert PPT to PDF Online - Free PowerPoint to PDF Converter",
  description: "Convert your PowerPoint (PPT/PPTX) presentations to PDF documents for free. SwiftPDF.cloud preserves your slides, layouts, and animations in a high-quality PDF format.",
  keywords: ["ppt to pdf", "pptx to pdf", "convert powerpoint to pdf online", "free ppt converter", "swiftpdf"],
  alternates: {
    canonical: "https://swiftpdf.cloud/ppt-to-pdf",
  },
  openGraph: {
    title: "PowerPoint to PDF Converter | SwiftPDF.cloud",
    description: "Lightning-fast PPT to PDF conversion. Professional quality, secure, and 100% free.",
    url: "https://swiftpdf.cloud/ppt-to-pdf",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <PPTToPDFClient />
      
      {/* Structured Data for SEO Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to convert PowerPoint to PDF",
            "description": "Step-by-step guide to turning your PPT slides into a PDF document.",
            "step": [
              {
                "@type": "HowToStep",
                "text": "Upload your .ppt or .pptx file to the SwiftPDF tool."
              },
              {
                "@type": "HowToStep",
                "text": "Wait a few seconds while our engine renders the slides into PDF format."
              },
              {
                "@type": "HowToStep",
                "text": "Download your converted PDF file instantly."
              }
            ]
          })
        }}
      />
    </>
  );
}