import Navbar from "@/src/components/Navbar";
import { Toaster } from "sonner";
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://swiftpdf.cloud"),
  title: {
    default: "Free Online PDF Tools (Merge, Split, Convert) – SwiftPDF",
    template: "%s | SwiftPDF.cloud",
  },
  
  description:
    "The fastest way to manage your PDF files. Split, Merge, Convert and Edit PDFs online for free.",
  keywords: [
  // Core
  "free online PDF tools",
  "best PDF tools online free",
  "fast PDF tools without signup",

  // Merge / Split
  "merge PDF online free without watermark",
  "split PDF online free fast",
  "combine PDF files online free",

  // Convert
  "word to PDF converter free online",
  "PDF to Word converter no watermark",
  "excel to PDF converter free",
  "PDF to excel converter online free",
  "image to PDF converter free online",
  "PDF to image converter high quality",

  // Editor
  "free PDF editor online no signup",
  "edit PDF online free fast",

  "ATS resume checker free",
  "AI resume checker online",
  "resume ATS score checker free",
  "AI CV analysis tool free",

  "free PDF tools Pakistan",
  "best PDF converter 2026",
  "best PDF converter free no signup 2026",
  "secure PDF converter online free",
],
 alternates: {
    canonical: "https://swiftpdf.cloud",
  },
  authors: [{ name: "Syed Ali" }],

  other: {
    "google-adsense-account": "ca-pub-8729012662530579",
  },
  verification: {
    other: {
      "google-adsense-account": "ca-pub-8729012662530579",
      "google-site-verification": "dOp04UQ4KkikaV76g1f9I5eE-RDuKkUUsYayp05heYw",
    },
  },

  // --------------------------------------------
  openGraph: {
    title: "SwiftPDF - All-in-One PDF Utility",
    description: "Secure and lightning-fast PDF processing in your browser.",
    url: "https://swiftpdf.cloud",
    siteName: "SwiftPDF",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SwiftPDF.cloud",
    description: "Process PDFs in seconds, not minutes.",
    images: ["/og-image.png"], // ADD THIS
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

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebApplication",
                name: "swiftpdf PDF",
                description:
                  "Fast, secure, and free online PDF tools including merging, splitting, and conversions.",
                url: "https://swiftpdf.cloud",
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web Browser",
                offers: {
                  "@type": "Offer",
                  price: "0.00",
                  priceCurrency: "USD",
                },
              }),
            }}
          />
        </main>
        <Footer /> {/* Footer is now global */}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
