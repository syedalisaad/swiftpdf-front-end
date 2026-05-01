import Schema from "@/src/components/Schema";
import AIReader from "@/src/components/systemUI/AIReader";
import FaqSection from "@/src/components/systemUI/FaqSection";
import { Mic2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  // Updated Title: Optimized for volume and clarity (60 characters)
  title: "AI Text Reader | Free Text to Speech Online (TTS)",
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

export default function TextToSpeechPage() {
  const textToSpeechFaqs = [
    {
      question: "How can I convert text to speech using AI?",
      answer: "Simply paste your text into the reader, select a voice that fits your needs, and click 'Play' or 'Generate.' The AI will instantly process your text into a natural-sounding audio stream.",
    },
    {
      question: "What languages are supported in text to speech?",
      answer: "SwiftPDF supports a wide array of global languages and regional accents, including English, Spanish, French, German, and Urdu, ensuring accurate pronunciation across different cultures.",
    },
    {
      question: "Can I choose different voices or tones?",
      answer: "Yes. You can select from a variety of male and female neural voices. These voices range in tone and accent, allowing you to choose the perfect match for your specific content.",
    },
    {
      question: "Is the generated speech natural sounding?",
      answer: "Yes. Our tool uses advanced neural networks to produce speech that mimics human intonation, rhythm, and clarity, making it far superior to traditional robotic TTS systems.",
    },
    {
      question: "Can I download the generated audio?",
      answer: "Yes, you can export and download your generated speech as a high-quality audio file for offline listening or use in other projects.",
    },
    {
      question: "Is text to speech conversion secure?",
      answer: "Your privacy is our priority. Text is processed securely and is never stored permanently on our servers. All data is wiped shortly after the conversion is complete.",
    },
    {
      question: "Do I need to install any software?",
      answer: "No. SwiftPDF is a web-based application. You can use the AI Text Reader directly in your browser without downloading any apps or extensions.",
    },
    {
      question: "Is there a limit on text length?",
      answer: "SwiftPDF can handle significant amounts of text. For extremely long documents, we recommend processing in sections to ensure the highest quality and fastest generation speeds.",
    },
    {
      question: "Can I use this for videos or presentations?",
      answer: "Absolutely. Our AI-generated audio is perfect for creating professional voiceovers for YouTube videos, corporate presentations, and educational content.",
    },
    {
      question: "Is this AI text to speech tool free?",
      answer: "Yes, our Text to Speech tool is completely free to use. There are no hidden fees, and no account registration is required to get started.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero / SEO Header */}
      <section className="pt-16 pb-12 px-4 text-center bg-white border-b border-gray-100">
        <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
          <Mic2 size={18} />
          <span>Pure AI Voice</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
          AI <span className="text-red-600">Text Reader</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          Transform any text into natural, human-like speech instantly. 
          Perfect for proofreading, language learning, and creating 
          accessible content with high-quality neural voices.
        </p>

        {/* New H2 Section for SEO Hierarchy */}
        <h2 className="text-2xl font-bold text-gray-800">
          Professional Text-to-Speech Generation
        </h2>
        <p className="text-gray-500 mt-2">
          High-fidelity audio for your articles, scripts, and documents.
        </p>
      </section>

      {/* The Unified Tool in 'text' mode */}
      <section className="py-12" aria-label="Text to speech tool">
        <AIReader mode="text" />
      </section>

      <FaqSection faqs={textToSpeechFaqs} />

      <Schema 
        name="AI Text to Speech - Convert Text to Natural Voice Online" 
        description="Turn any text into high-quality, natural-sounding audio for free. SwiftPDF's AI voice generator supports multiple languages and speeds, perfect for creating audiobooks or proofreading." 
        url="/text-to-speech" 
      />
    </div>
  );
}