import MergePDFClient from "@/src/components/systemUI/MergePDFClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merge PDF Online - Combine Multiple PDF Files for Free | SwiftPDF",
  description: "Easily combine two or more PDF files into a single document. Secure, fast, and maintains original formatting. No installation required.",
  keywords: ["merge pdf", "combine pdf files", "join pdf documents", "online pdf merger", "free pdf tools"],
  alternates: {
    canonical: "https://yourdomain.com/merge-pdf",
  },
  openGraph: {
    title: "Merge PDF Files Instantly | SwiftPDF",
    description: "Combine multiple PDFs into one organized file in seconds.",
    url: "https://yourdomain.com/merge-pdf",
    type: "website",
  },
};

export default function Page() {
  return <MergePDFClient />;
}