import ImageToPDFClient from "@/src/components/systemUI/ImageToPDFClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convert JPG, PNG, WEBP to PDF Online - Free | SwiftPDF",
  description: "Easily convert multiple images into a single PDF document. Support for JPG, PNG, and WEBP with high-quality retention and auto-page scaling.",
  keywords: ["image to pdf", "convert jpg to pdf", "png to pdf", "webp to pdf", "combine images into pdf", "free online pdf converter"],
  alternates: {
    canonical: "https://yourdomain.com/image-to-pdf",
  },
  openGraph: {
    title: "Fast Image to PDF Converter | SwiftPDF",
    description: "Turn your photos and images into professional PDFs in seconds. Secure and high quality.",
    url: "https://yourdomain.com/image-to-pdf",
    type: "website",
  },
};

export default function Page() {
  return <ImageToPDFClient />;
}