// app/pdf-to-word/page.tsx (Server Component)
import PDFToWordClient from "@/src/components/systemUI/PDFToWordClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convert PDF to Word Online - 100% Free & Editable DOCX",
  description: "Easily convert your PDF files into editable Microsoft Word documents. SwiftPDF.cloud preserves your original fonts, images, and layout with high accuracy.",
  keywords: ["pdf to word", "convert pdf to docx", "pdf to editable word", "online pdf converter", "free pdf to word"],
  alternates: {
    canonical: "https://swiftpdf.cloud/pdf-to-word",
  },
  openGraph: {
    title: "PDF to Word Converter | SwiftPDF.cloud",
    description: "Lightning-fast PDF to Word conversion. Safe, secure, and professional quality.",
    url: "https://swiftpdf.cloud/pdf-to-word",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <PDFToWordClient />
      
      {/* JSON-LD Structured Data for 'SoftwareApplication' and 'HowTo' */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "SwiftPDF PDF to Word Converter",
              "operatingSystem": "All",
              "applicationCategory": "BusinessApplication",
              "url": "https://swiftpdf.cloud/pdf-to-word",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "How to convert PDF to Word editable format",
              "step": [
                {
                  "@type": "HowToStep",
                  "text": "Upload your PDF file to the SwiftPDF converter."
                },
                {
                  "@type": "HowToStep",
                  "text": "Click 'Convert to Word' to begin the OCR and formatting process."
                },
                {
                  "@type": "HowToStep",
                  "text": "Download your high-quality .docx file instantly."
                }
              ]
            }
          ])
        }}
      />
    </>
  );
}