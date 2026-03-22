import PDFEditorClient from "@/src/components/systemUI/PDFEditorClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Online PDF Editor | Edit, Sign & Fill PDFs | SwiftPDF",
  description: "The easiest way to edit your PDF files online. Add text, erase content, and sign documents instantly with SwiftPDF. No installation required.",
  keywords: "edit pdf, online pdf editor, sign pdf free, pdf eraser tool, nextjs pdf editor",
  openGraph: {
    title: "SwiftPDF - Professional Online PDF Tools",
    description: "Edit and Sign PDFs in seconds.",
    url: "https://swiftpdf.cloud/edit-pdf",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      
      <h1 className="sr-only">Online PDF Editor and Signer</h1>
      <p className="sr-only">
        Use SwiftPDF to modify PDF documents, add custom text annotations, 
        erase sensitive information, and draw electronic signatures directly in your browser.
      </p>
      
      <PDFEditorClient />
    </>
  );
}