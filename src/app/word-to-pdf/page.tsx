import WordToPDFClient from "@/src/components/systemUI/WordToPDFClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convert Word to PDF Online - Free & Secure",
  description: "Convert DOC and DOCX to PDF instantly with SwiftPDF.cloud. We preserve your formatting, fonts, and layout for a professional result.",
  alternates: {
    canonical: "https://swiftpdf.cloud/word-to-pdf",
  },
  openGraph: {
    title: "Word to PDF Converter | SwiftPDF",
    description: "Fast and secure Word to PDF conversion online.",
    url: "https://swiftpdf.cloud/word-to-pdf",
    type: "website",
  },
};

export default function Page() {
  return <WordToPDFClient />;
}