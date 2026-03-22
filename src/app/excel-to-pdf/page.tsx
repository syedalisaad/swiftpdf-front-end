// app/excel-to-pdf/page.tsx (Server Component)
import ExcelToPDFClient from "@/src/components/systemUI/ExcelToPDFClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convert Excel to PDF Online - Free Spreadsheet Converter | SwiftPDF",
  description: "Easily convert XLSX, XLS, and CSV files to high-quality PDF documents. Maintain table formatting, cell alignment, and data integrity with our free online tool.",
  keywords: ["excel to pdf", "convert xlsx to pdf", "convert csv to pdf", "spreadsheet to pdf converter", "free online pdf tools"],
  alternates: {
    canonical: "https://yourdomain.com/excel-to-pdf",
  },
  openGraph: {
    title: "Excel to PDF - Professional Converter | SwiftPDF",
    description: "Keep your tables perfectly aligned. Convert spreadsheets to PDF instantly.",
    url: "https://yourdomain.com/excel-to-pdf",
    siteName: "SwiftPDF",
    type: "website",
  },
};

export default function Page() {
  return <ExcelToPDFClient />;
}