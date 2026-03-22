// app/pdf-to-excel/page.tsx (Server Component)
import PDFToExcelClient from "@/src/components/systemUI/PDFToExcelClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convert PDF to Excel Online - Free PDF Table Extractor",
  description: "Extract tables from PDF to Excel spreadsheets (.xlsx) instantly. SwiftPDF.cloud uses AI to accurately map rows and columns for easy data analysis.",
  keywords: ["pdf to excel", "convert pdf to xlsx", "extract table from pdf", "pdf to spreadsheet", "free online pdf converter"],
  alternates: {
    canonical: "https://swiftpdf.cloud/pdf-to-excel",
  },
  openGraph: {
    title: "PDF to Excel Converter | SwiftPDF.cloud",
    description: "Turn unselectable PDF tables into fully editable Excel spreadsheets in seconds.",
    url: "https://swiftpdf.cloud/pdf-to-excel",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <PDFToExcelClient />
      
      {/* Structured Data for Google Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "SwiftPDF PDF to Excel Converter",
            "operatingSystem": "All",
            "applicationCategory": "BusinessApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": "AI Table Recognition, Multi-sheet support, No registration required"
          })
        }}
      />
    </>
  );
}