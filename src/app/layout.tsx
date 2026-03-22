// app/layout.tsx (or src/app/layout.tsx)
import Navbar from "@/src/components/Navbar"; 
import { Toaster } from "sonner";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://swiftpdf.cloud"),
  title: {
    default: "SwiftPDF - Fast, Secure & Free Online PDF Tools",
    template: "%s | SwiftPDF.cloud", 
  },
  description: "The fastest way to manage your PDF files. Split, Merge, Convert and Edit PDFs online for free. No installation required, 100% secure.",
  keywords: ["PDF Tools","merge PDF", "Split PDF", "Word to PDF","PDF to word","excel to PDF", "pdf to excel", "image to PDF", "pdf to image", "Free PDF Editor", "Online PDF Converter"],
  authors: [{ name: "Syed Ali" }],
  openGraph: {
    title: "SwiftPDF - All-in-One PDF Utility",
    description: "Secure and lightning-fast PDF processing in your browser.",
    url: "https://swiftpdf.cloud",
    siteName: "SwiftPDF",
    images: [
      {
        url: "/logo.png", 
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SwiftPDF.cloud",
    description: "Process PDFs in seconds, not minutes.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <Navbar />
        
        <main>
          {children}
        </main>

        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}