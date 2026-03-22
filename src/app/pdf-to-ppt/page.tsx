// app/pdf-to-ppt/page.tsx (Server Component)
import PDFToPPTClient from "@/src/components/systemUI/PDFToPPTClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convert PDF to PPT Online - Free PDF to PowerPoint Converter",
  description: "Transform your PDF documents into editable PowerPoint slides (PPTX) for free. SwiftPDF.cloud ensures high-quality slide generation while preserving layouts and images.",
  keywords: ["pdf to ppt", "pdf to pptx", "convert pdf to powerpoint", "free online pdf converter", "swiftpdf"],
  alternates: {
    canonical: "https://swiftpdf.cloud/pdf-to-ppt",
  },
  openGraph: {
    title: "PDF to PowerPoint Converter | SwiftPDF.cloud",
    description: "Convert static PDFs into professional, editable slide decks in seconds.",
    url: "https://swiftpdf.cloud/pdf-to-ppt",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <PDFToPPTClient />
      
      {/* Schema for Google Search Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to convert PDF to PowerPoint slides",
            "step": [
              {
                "@type": "HowToStep",
                "text": "Select and upload your PDF file to the SwiftPDF converter."
              },
              {
                "@type": "HowToStep",
                "text": "Our AI-powered engine analyzes the layout and creates matching PowerPoint slides."
              },
              {
                "@type": "HowToStep",
                "text": "Download your fully editable .pptx file instantly."
              }
            ]
          })
        }}
      />
    </>
  );
}