import Navbar from "@/src/components/Navbar";
import { Toaster } from "sonner";
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://swiftpdf.cloud"),
  title: {
    default: "SwiftPDF - Fast, Secure & Free Online PDF Tools",
    template: "%s | SwiftPDF.cloud",
  },
  description:
    "The fastest way to manage your PDF files. Split, Merge, Convert and Edit PDFs online for free.",
  keywords: [
    "PDF Tools",
    "merge PDF",
    "Split PDF",
    "Word to PDF",
    "PDF to word",
    "excel to PDF",
    "pdf to excel",
    "image to PDF",
    "pdf to image",
    "Free PDF Editor",
    "Online PDF Converter",
    "ATS Resume Checker",
  ],
  authors: [{ name: "Syed Ali" }],

  other: {
    "google-adsense-account": "ca-pub-8729012662530579",
  },
  verification: {
    other: {
      "google-adsense-account": "ca-pub-8729012662530579",
    },
  },

  // --------------------------------------------
  openGraph: {
    title: "SwiftPDF - All-in-One PDF Utility",
    description: "Secure and lightning-fast PDF processing in your browser.",
    url: "https://swiftpdf.cloud",
    siteName: "SwiftPDF",
    images: [{ url: "/logo.png", width: 1200, height: 630 }],
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
        {/* AdSense Main Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8729012662530579"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Navbar />
        <main>
          {/* Google Analytics */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-YS2SBK1EW3"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YS2SBK1EW3');
            `}
          </Script>

          {children}
        </main>
        <Footer /> {/* Footer is now global */}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
