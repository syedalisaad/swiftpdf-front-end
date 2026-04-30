import Schema from "@/src/components/Schema";
import AIReader from "@/src/components/systemUI/AIReader";
import FaqSection from "@/src/components/systemUI/FaqSection";
import { Mic2, Zap, ShieldCheck, Headphones, Factory } from "lucide-react";

export const metadata = {
  title: "Free AI Text Reader | Natural Text to Speech (Multi-Language)",
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
    answer:
      `. Paste your text choose a voice and click generate. The computer will instantly turn your text into speech that sounds like a person. You can. Download it.`
  },
  {
    question: "What languages are supported in text to speech?",
    answer:
      `SwiftPDF is really helpful because it supports languages and accents. This means you can use SwiftPDF to generate speech in voices when you need to. For example SwiftPDF can help you with speech, in languages and accents. You can use SwiftPDF to make speech sound the way you want it to which's very useful. SwiftPDF supports languages and accents so you can generate speech in the voice you want.`
  },
  {
    question: "Can I choose different voices or tones?",
    answer:
      `You can pick from a lot of voices when it comes to artificial intelligence. These voices are really different, from one another. They have genders and accents and even the way they talk is unique. You can choose a voice that sounds like a man or a woman. The artificial intelligence voices also have accents.. The way they speak is not the same. You can select the intelligence voice that you like the most.`
  },
  {
    question: "Is the generated speech natural sounding?",
    answer:
      `Generated speech is made to sound really clear and it sounds like a person talking. The people who make this kind of speech want it to sound like a voice so they make it sound as natural as possible. Generated speech is supposed to be easy to listen to and understand, just, like when a person is talking to you.`
  },
  {
    question: "Can I download the generated audio?",
    answer:
      `Yes. You can download the speech as a file. This way you can use it offline.`
  },
  {
    question: "Is text to speech conversion secure?",
    answer:
      `Yes. Our system handles your text in a way and does not keep it forever after we convert it.

We make sure your text is safe.

It gets deleted after use.`
  },
  {
    question: "Do I need to install any software?",
    answer:
      `Yes. Our system handles your text in a way and does not keep it forever after we convert it.

We make sure your text is safe.

It gets deleted after use.`
  },
  {
    question: "How long does it take to convert text to speech?",
    answer:
      `Most conversions are done away. This usually happens when the text is not very long. If the text is really long it might take a little longer for the conversion to be completed. The length of the text is what matters when it comes to how it takes for most conversions to be done.`
  },
  {
    question: "Is there a limit on text length?",
    answer:
      `SwiftPDF can handle a lot of text. If you have a really big piece of content SwiftPDF may break it down into smaller parts so that it works better. This way SwiftPDF can still deal with text inputs and very large content, like big reports or documents and make sure SwiftPDF performs well.`
  },
  {
    question: "Are my files or text stored after conversion?",
    answer:
`No. We process your data for a time and then it is automatically deleted shortly after we use it.`  },

  // 🔥 EXTRA HIGH-INTENT FAQs
  {
    question: "Can I use text to speech for videos or presentations?",
    answer:
      `Yes. I can create voiceovers for videos. I can also create voiceovers for presentations.. I can do it for other multimedia content too.`
  },
  {
    question: "Is this AI text to speech tool free?",
    answer:
      `Yes. SwiftPDF does offer text to speech conversion.

You do not need to sign up to use it.`
  },
  {
    question: "Can I adjust speed or pitch of the voice?",
    answer:
      `Yes. You can change how fast or slow the voice sounds and also change the tone to an lower pitch. These changes depend on whats available in the settings.`
  },
  {
    question: "Does SwiftPDF work on all devices?",
    answer:
      `You can definitely use text to speech on any device that has a web browser. This is really cool because it means you can use text to speech on any device long as it has a web browser. You can use text to speech, on your phone or your computer. It is very easy to do.`
  }
];
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
          You can change any text into speech that sounds really natural. This is great, for checking your work learning a language and making things easier for people to understand.
        </p>
      </section>

      {/* The Unified Tool in 'text' mode */}
      <section aria-label="text to speech">
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
