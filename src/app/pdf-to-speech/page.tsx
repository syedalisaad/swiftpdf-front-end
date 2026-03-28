import AIReader from '@/src/components/systemUI/AIReader';
import { FileVolume, ShieldCheck, Zap, Globe } from 'lucide-react';
import { Metadata } from 'next';

// 1. SEO Metadata Configuration
export const metadata: Metadata = {
  title: "AI PDF Reader | Convert PDF to Natural Speech Online",
  description: "Upload any PDF and listen to it with high-quality AI voices. Secure, fast, and supports English, Spanish, German, and Urdu. Perfect for multitasking.",
  keywords: ["AI PDF reader", "PDF to speech", "read PDF aloud", "text to speech PDF", "neural voices"],
  alternates: {
    canonical: "https://swiftpdf.cloud/pdf-to-speech", // Change to your actual URL
  },
  openGraph: {
    title: "AI PDF Reader | Listen to Your Documents Instantly",
    description: "Transform PDFs into natural-sounding audio with our secure AI Document Reader.",
    url: "https://swiftpdf.cloud/pdf-to-speech",
    siteName: "Pure AI Voice",
    images: [
      {
        url: "https://swiftpdf.cloud/og-image.png", // Recommended: 1200x630px
        width: 1200,
        height: 630,
        alt: "AI PDF Reader Interface Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function PdfToSpeechPage() {
  // 2. Structured Data for Google Rich Results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI PDF Reader",
    "operatingSystem": "Web",
    "applicationCategory": "MultimediaApplication",
    "description": "Convert PDF documents into high-quality AI speech using neural voices.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <header className="pt-16 pb-12 px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
          <FileVolume size={18} />
          <span>AI Document Reader</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          AI PDF Reader: Listen to Your Documents
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Convert PDF documents into natural AI voices. Listen to your 
          reports, books, or scripts while you work or commute.
        </p>
      </header>

      {/* Main Interaction Area */}
      <main>
        <section aria-label="PDF to Speech Converter">
          <AIReader mode="pdf" /> 
        </section>

        {/* Feature Grid - Using H2 for better SEO Hierarchy */}
        <section className="max-w-5xl mx-auto mt-12 px-4 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center transition-all hover:shadow-md">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <ShieldCheck size={24} />
            </div>
            <h2 className="font-bold text-slate-900 mb-2">Privacy-First PDF Reading</h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Your documents are processed securely and never stored on our servers. 
              Perfect for sensitive work files or private eBooks.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center transition-all hover:shadow-md">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Zap size={24} />
            </div>
            <h2 className="font-bold text-slate-900 mb-2">Smart Text Extraction</h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Our FastAPI backend handles complex layouts, extracting clean, 
              readable text from multi-column PDFs for a seamless AI voice experience.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center transition-all hover:shadow-md">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Globe size={24} />
            </div>
            <h2 className="font-bold text-slate-900 mb-2">Global Language Support</h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Listen in English, Spanish, German, or Urdu using high-quality 
              localized neural voices that sound truly human.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}