import Schema from "@/src/components/Schema";
import FaqSection from "@/src/components/systemUI/FaqSection";
import WordToPDFClient from "@/src/components/systemUI/WordToPDFClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  // Optimized Title (60 characters) - Hits all secondary keywords
  title: "Convert Word to PDF Online - Free DOC & DOCX to PDF | SwiftPDF",
  description:
    "Convert DOC and DOCX to PDF instantly with SwiftPDF. We preserve your formatting, fonts, and layout for a professional, high-quality result.",
  keywords: [
    "word to pdf",
    "convert doc to pdf",
    "docx to pdf converter",
    "online word to pdf",
    "free docx converter",
  ],
  alternates: {
    canonical: "https://swiftpdf.cloud/word-to-pdf",
  },
  openGraph: {
    title: "Word to PDF Converter | SwiftPDF",
    description:
      "Fast and secure Word to PDF conversion online. Perfect layout preservation.",
    url: "https://swiftpdf.cloud/word-to-pdf",
    type: "website",
    images: [
      { url: "https://swiftpdf.cloud/og-image.png", width: 1200, height: 630 },
    ],
  },
};

export default function Page() {
  const docxToPdfFaqs = [
    {
      question: "Why should I convert DOCX to PDF?",
      answer:
        "Converting DOCX to PDF keeps your document layout the same on every device and platform. This makes PDF a great choice, for sharing resumes reports and official files.",
    },
    {
      question: "Will my formatting stay the same after conversion?",
      answer:
        "Yes. SwiftPDF makes sure that your document looks the same in PDF format as it does in Word. It keeps the fonts the spacing, the images and the layout how they are. So when you save your document as a PDF it will look like the original Word document.",
    },
    {
      question: "Is DOCX to PDF conversion secure?",
      answer:
        "Yes. All files you send are kept safe with SSL encryption. Your documents get deleted right after we process them. This way we keep your information private.",
    },
    {
      question: "Do I need to install any software?",
      answer:
        "No. SwiftPDF works in your browser on the internet. You do not have to download anything. You also do not have to install SwiftPDF.",
    },
    {
      question: "Can I convert both DOC and DOCX files?",
      answer:
        "Yes. SwiftPDF works with both DOC and DOCX files. It converts them into quality PDF files. You can use SwiftPDF, for DOC to PDF and DOCX to PDF conversions.",
    },
    {
      question: "Will images and tables be preserved in PDF?",
      answer:
        "The images are preserved in the PDF file. The tables are also preserved.. The formatting elements are preserved too. Everything looks just like it is supposed to in the PDF file. The images and tables and formatting elements are all accurately rendered in the PDF file.",
    },
    {
      question: "How long does the conversion take?",
      answer:
        "Most documents get converted fast. It usually takes seconds. The time it takes depends on how big the file's how complicated it is. File size and complexity are the two things that affect conversion time.",
    },
    {
      question: "Is there a file size limit?",
      answer:
        "SwiftPDF works with big files. Its performance can be a bit different based on how large your document is and what it contains. The size and content of your document will affect how well SwiftPDF performs. SwiftPDF handles files but you might notice some differences, in speed.",
    },
    {
      question: "Are my files stored after conversion?",
      answer:
        "No the files are worked on for a while and then they get deleted on their own after they have been converted. The files do not stay around for long.",
    },

    {
      question: "Can I convert multiple Word files to PDF at once?",
      answer:
        "You can upload a lot of documents at the time and change them into PDFs. This process is very easy. It does everything at once. You can upload documents and it will convert them into PDFs.",
    },
    {
      question: "Is the converted PDF editable?",
      answer:
        "So PDF files are made to keep things looking the same and to stop people from changing them by mistake. This way the documents will always look the same. PDF files are really good at preserving the layout of the document. PDF files are also designed to prevent edits. This helps to ensure that the document stays consistent. PDF files are very useful, for this reason.",
    },
    {
      question: "Does SwiftPDF work without internet-based accounts?",
      answer:
        "You do not have to make an account or sign in to use all the features of this thing. You can just use all the features without doing that. The features are available, to you whether you have an account or not.",
    },
    {
      question: "Why does PDF format look better for sharing documents?",
      answer:
        "When you use a PDF the layout always stays the same. This means it looks good on every device. So PDF is really good for sharing with people at work and, for printing things out. PDF is great because the layout is fixed, which is why people like to use it for sharing and printing.",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. SEO Header Section - High Impact & Semantic */}
      <section className="bg-white py-16 px-4 border-b border-gray-100 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Professional <span className="text-red-600">Word to PDF</span>{" "}
            Converter
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your **Microsoft Word** documents, like `.doc`..Docx`
            files, into professional and high-quality **PDF files**. SwiftPDF
            makes sure that your fonts, margins and complex layouts stay exactly
            as they were in your original **Microsoft Word** document.
          </p>
        </div>
      </section>

      {/* 2. The Interactive Tool */}
      <section aria-label="Word to PDF Conversion Tool">
        <WordToPDFClient />
      </section>

      <FaqSection faqs={docxToPdfFaqs} />

      <Schema
        name="Word to PDF Converter"
        description="Convert DOCX to PDF online for free."
        url="/word-to-pdf"
      />
    </div>
  );
}
