import AIReader from "@/src/components/systemUI/AIReader";
import { Mic2, Zap, ShieldCheck, Headphones } from "lucide-react";

export const metadata = {
  title: "Free AI Text Reader | Natural Sounding Text to Speech Online",
  description:
    "Convert text to speech instantly with our free AI Reader. High-quality neural voices, zero latency, and 100% private browser-based processing.",
  keywords: [
    "AI text reader",
    "text to speech online",
    "TTS",
    "neural voices",
    "accessibility tools",
  ],
  alternates: {
    canonical: "https://swiftpdf.cloud/text-to-speech",
  },
  openGraph: {
    title: "AI Text Reader | Natural AI Voices",
    description: "Transform any text into natural-sounding speech instantly.",
    type: "website",
    url: "https://swiftpdf.cloud/text-to-speech",

    images: [
      { url: "https://swiftpdf.cloud/og-image.png", width: 1200, height: 630 },
    ],
  },
};
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AI Text Reader",
  operatingSystem: "Web",
  applicationCategory: "MultimediaApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "A high-quality, privacy-focused AI Text to Speech reader that runs entirely in the browser.",
};


export default function TextToSpeechPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero / SEO Header */}
      <section className="pt-16 pb-12 px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
          <Mic2 size={18} />
          <span>Pure AI Voice</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
          AI Text Reader
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Transform any text into natural-sounding speech instantly. Perfect for
          proofreading, language learning, and accessibility.
        </p>
      </section>

      {/* The Unified Tool in 'text' mode */}
      <section aria-label="text to speech">
        <AIReader mode="text" />
      </section>

      {/* Quick Feature Grid */}
      <section className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
            <Zap size={24} />
          </div>
          <h3 className="font-bold text-slate-900 mb-2">Zero Latency</h3>
          <p className="text-sm text-slate-500">
            Processing happens in your browser. No waiting for server uploads.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
          <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-4">
            <Headphones size={24} />
          </div>
          <h3 className="font-bold text-slate-900 mb-2">Natural Voices</h3>
          <p className="text-sm text-slate-500">
            Uses high-quality neural voices available on your device.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-4">
            <ShieldCheck size={24} />
          </div>
          <h3 className="font-bold text-slate-900 mb-2">100% Private</h3>
          <p className="text-sm text-slate-500">
            Your text never leaves your computer. Your privacy is our priority.
          </p>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
