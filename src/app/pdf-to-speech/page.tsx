import AIReader from '@/src/components/systemUI/AIReader';
import FaqSection from '@/src/components/systemUI/FaqSection';
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
  const speechToPdfFaqs = [
  {
    question: "How can I convert speech to PDF using AI?",
    answer:
      `. Upload your audio.

The AI will then convert it into written text.

After that you can download the content as a PDF that is already formatted for you.

This whole process takes a few seconds.`
  },
  {
    question: "What types of audio files are supported?",
    answer:
      `SwiftPDF is really helpful because it works with the kinds of files that people use every day like MP3 and WAV and M4A. This means that SwiftPDF can take the audio from these files like MP3 files and turn it into text that makes sense. So when you use SwiftPDF to convert speech to text it does a job because it supports these common audio formats, including M4A and MP3 and WAV.`
  },
  {
    question: "How accurate is AI speech-to-text conversion?",
    answer:
      `Artificial Intelligence gives good results when the audio is clear.. The results can be different if there is a lot of background noise or if people have strong accents. The quality of the audio also makes a difference, for Artificial Intelligence.`
  },
  {
    question: "Can I edit the text before converting it to PDF?",
    answer:
      `Yes. You can look over. Change the text that was transcribed before making the final PDF document.

You can review it. Make any needed changes.

This way you can make sure it is correct, before generating the PDF.

The transcribed text can be edited by you.

You have the chance to check and fix it.

Then you can create the PDF document.`
  },
  {
    question: "Does the AI support multiple languages?",
    answer:
      `SwiftPDF is really helpful because it supports languages. This means SwiftPDF can transcribe speech in all these languages. So SwiftPDF is very useful, for people who speak languages because it can understand what they are saying and write it down. SwiftPDF supports languages and that is a big plus.`
  },
  {
    question: "Can I convert long recordings into PDF?",
    answer:
      `SwiftPDF is able to work with audio files. The time it takes to process these files can be different depending on how long the audio filesre. SwiftPDF can handle this. It may take a bit longer for really long audio files.`
  },
  {
    question: "Is speech to PDF conversion secure?",
    answer:
      `So your audio files are safe. When you upload them the audio files get encrypted. Then after we are done with the files the audio files are automatically deleted. This way the audio files are. Your privacy is safe.`
  },
  {
    question: "Do I need to install any software?",
    answer:
      `No. The entire process works online in your browser. You do not need to install anything.`
  },
  {
    question: "How long does it take to convert speech to PDF?",
    answer:
      "Processing time depends on audio length, but most files are completed quickly using AI."
  },
  {
    question: "Are my audio files stored after conversion?",
    answer:
      `No. The entire process works online in your browser. You do not need to install anything.`
  },

  // 🔥 EXTRA HIGH-INTENT FAQs
  {
    question: "Can I convert live speech or only uploaded audio?",
    answer:
      `SwiftPDF is really useful because it can work with recording and also with audio files that you upload. This depends on what features you have available, with SwiftPDF.`
  },
  {
    question: "Will the PDF include proper formatting?",
    answer:
      `The generated PDF is really easy to read because it has a text structure. This makes it simple to share the PDF with people. The PDF is formatted in a way that makes sense and is easy, on the eyes.`
  },
  {
    question: "Is this speech to PDF tool free?",
    answer:
      `SwiftPDF is really cool because it lets you turn things you say into a PDF file without having to sign up for anything. You can just use SwiftPDF. It will do the speech to PDF conversion for you for free. SwiftPDF does not need you to make an account or anything, like that.`
  },
  {
    question: "Does SwiftPDF work on all devices?",
    answer:
      `Yes. You can turn speech into PDF on any device using a web browser.

You can do this on your phone, computer or tablet.

Just use a web browser to convert speech to PDF.`
  }
];

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

     
      <section className="bg-white py-16 px-4 border-b border-gray-100 text-center">
         <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
          <FileVolume size={18} />
          <span>AI Document Reader</span>
        </div>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            AI PDF Reader:  <span className="text-red-600">Listen to Your Documents</span> 
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          You can turn PDF documents into voices that sound like people. This means you can listen to your reports or books or scripts when you are working or traveling to work. You can hear your PDF documents read out loud in a voice. This is great for people who want to listen to their PDF documents, like reports or books or scripts when they are doing something.
          </p>
        </div>
      </section>

      {/* Main Interaction Area */}
      <div>
        <section aria-label="PDF to Speech Converter">
          <AIReader mode="pdf" /> 
        </section>
        <FaqSection faqs={speechToPdfFaqs} />

       
      </div>
    </div>
  );
}