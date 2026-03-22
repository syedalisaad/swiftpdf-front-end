// app/pdf-to-image/page.tsx (Server Component)
import PDFToImageClient from "@/src/components/systemUI/PDFToImageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convert PDF to Image Online - Free High-Quality JPG/PNG Extraction",
  description: "Convert your PDF pages into high-resolution images instantly. SwiftPDF.cloud extracts every page as a clear JPG or PNG while maintaining 300 DPI quality.",
  keywords: ["pdf to image", "pdf to jpg", "extract images from pdf", "pdf to png converter", "online pdf tool"],
  alternates: {
    canonical: "https://swiftpdf.cloud/pdf-to-image",
  },
  openGraph: {
    title: "PDF to Image Converter | SwiftPDF.cloud",
    description: "Turn any PDF into a collection of high-quality images in seconds. No registration required.",
    url: "https://swiftpdf.cloud/pdf-to-image",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <PDFToImageClient />
      
      {/* JSON-LD Schema for Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to convert PDF pages to images",
            "description": "A quick guide on extracting images from your PDF files.",
            "step": [
              {
                "@type": "HowToStep",
                "text": "Upload the PDF document you want to convert."
              },
              {
                "@type": "HowToStep",
                "text": "Click 'Extract Images' to render every page into a separate image file."
              },
              {
                "@type": "HowToStep",
                "text": "Download the resulting ZIP file containing all your high-resolution images."
              }
            ]
          })
        }}
      />
    </>
  );
}