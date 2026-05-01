import Schema from "@/src/components/Schema";
import FaqSection from "@/src/components/systemUI/FaqSection";
import PDFToPPTClient from "@/src/components/systemUI/PDFToPPTClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  // Optimized H1/Title (56 characters)
  title: "Convert PDF to PowerPoint Online — 100% Free & Fast",
  description:
    "Convert PDF to editable PowerPoint (PPTX) for free. SwiftPDF preserves your original layouts, text, and images for professional presentations.",
  keywords: [
    "pdf to ppt",
    "pdf to pptx",
    "convert pdf to powerpoint",
    "free online pdf converter",
    "swiftpdf",
  ],
  alternates: {
    canonical: "https://swiftpdf.cloud/pdf-to-ppt",
  },
  openGraph: {
    title: "PDF to PowerPoint Converter.cloud",
    description:
      "Convert static PDFs into professional, editable slide decks in seconds.",
    url: "https://swiftpdf.cloud/pdf-to-ppt",
    type: "website",
    images: [
      { url: "https://swiftpdf.cloud/og-image.png", width: 1200, height: 630 },
    ],
  },
};

export default function Page() {
  const pdfToPptFaqs = [
    {
      question: "How can I convert a PDF to PowerPoint online?",
      answer: `You can upload your PDF file. Then click to convert it. After that you can download your PowerPoint file. It will only take a few seconds. The whole thing is really easy to do. You do not have to install anything on your computer to make it work. You can just upload your PDF file click convert and then download your PowerPoint file.`,
    },
    {
      question: "Can I convert PDF to editable PowerPoint slides?",
      answer: `SwiftPDF is really helpful because it can change your PDF into PowerPoint slides that you can edit completely. This means you can change the text, the pictures and the way everything is laid out in your PowerPoint slides using SwiftPDF.`,
    },
    {
      question: "Will the original layout be preserved during conversion?",
      answer: `SwiftPDF really does a job of keeping the slide structure, formatting and alignment very similar to the original SwiftPDF document. This means that when you use SwiftPDF it will look a lot, like the SwiftPDF.`,
    },
    {
      question: "Are text and fonts preserved in the converted PPT?",
      answer: `The text is taken out. Changed into things that can be edited. The fonts are kept the same. Swapped with other fonts that look pretty much the same if that is necessary. This way the text still looks good. The fonts are similar, to the original ones.`,
    },
    {
      question: "What happens to images and graphics in the PDF?",
      answer:
        "The images are really clear. They look great in the slides. All the icons and other visual elements are also kept in quality. These images and icons are placed in the spots within the slides. The images, icons and visual elements are all easy to see. They are exactly where they should be, in the slides.",
    },
    {
      question: "Can I convert scanned PDFs to PowerPoint?",
      answer: `Yes. SwiftPDF has a feature that lets you extract text from scanned PDFs using something called OCR technology. This means you can take a scanned PDF and turn it into PowerPoint slides using SwiftPDF. SwiftPDF makes this process pretty easy. You can use SwiftPDF to extract text, from scanned PDFs and then convert that text into PowerPoint slides that you can edit.`,
    },
    {
      question: "Is PDF to PPT conversion secure?",
      answer: `So your files are encrypted when they are being transferred. This means your Google Drive files or your Dropbox files are encrypted.. Then after we are done processing your files they are automatically deleted. This is how we make sure that your Google Drive files and your Dropbox files and all of your data remains private. We do this to protect your files. Your files are important, to you. We want to make sure that your files are safe.`,
    },
    {
      question: "Do I need to install any software?",
      answer: `SwiftPDF works online. This means you can convert your files in your browser. You do not have to download anything to use SwiftPDF. You can just go to the website. Start converting your files with SwiftPDF.`,
    },
    {
      question: "How long does the conversion take?",
      answer: `Most files are changed into a format within a few seconds. This is because the time it takes to do this depends on how big the file's how complicated it is. Most files are converted quickly usually within seconds.`,
    },
    {
      question: "Can I convert large PDF files to PowerPoint?",
      answer: `Yes. SwiftPDF works with files.. It takes more time if the file is huge.`,
    },
    {
      question: "Are my files stored after conversion?",
      answer: `No. Files are processed for a time. They are deleted right after conversion.`,
    },

    // 🔥 EXTRA HIGH-INTENT FAQs
    {
      question: "Will each PDF page become a separate slide?",
      answer:
        "Yes. Each page of your PDF is converted into an individual PowerPoint slide for easy editing and presentation.",
    },
    {
      question: "Is the converted PowerPoint file editable?",
      answer: `Yes. You can fully edit the text, images and layouts, in the PowerPoint file you get.`,
    },
    {
      question: "Does SwiftPDF support both PPT and PPTX formats?",
      answer: `The file we get is usually, in PPTX format. This format works with the presentation software we use today. The PPTX format is what we normally get when we convert a file.`,
    },
    {
      question: "Is this PDF to PowerPoint converter free?",
      answer: `SwiftPDF is really useful because it lets you convert PDF to PPT for free. The best part is that you do not have to sign up or log in to use SwiftPDF. You can just use SwiftPDF to convert your PDF to PPT away. SwiftPDF makes it very easy to convert PDF to PPT.`,
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. SEO Header Section - Focus on Editability */}
      <section className="bg-white py-16 px-4 border-b border-gray-100 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Professional <span className="text-red-600">PDF to PowerPoint</span>{" "}
            Converter
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Do not start from the beginning every time. You can change your PDF
            files into PowerPoint presentations that you can edit. This way your
            images, text and layouts will look the same. You will get editable
            PowerPoint files with a.pptx extension. This means you can edit your
            PowerPoint presentations easily.
          </p>
        </div>
      </section>

      {/* 2. The Interactive Tool */}
      <section aria-label="PDF to PowerPoint Conversion Workspace">
        <PDFToPPTClient />
      </section>
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-black text-gray-900 mb-8">
          Why Use Our <span className="text-red-600">AI-Powered</span> PDF to
          PPT Converter?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">100% Editable Slides</h3>
            <p className="text-gray-600">
              SwiftPDF is different, from tools because it does not just turn
              pages into pictures. Instead SwiftPDF rebuilds the text and shapes
              so you can change them in PowerPoint. You can work with SwiftPDF
              and PowerPoint together to make changes to the text and shapes
              from SwiftPDF. This is really useful because you can use SwiftPDF
              to edit things in PowerPoint.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Preserve Layout & Fonts</h3>
            <p className="text-gray-600">
              Our tool makes sure that your slides look like your PDF. This
              means your branding and alignment will be perfect. We want your
              slides to look the same, as your PDF so we made our tool do that.
            </p>
          </div>
        </div>
      </section>
      <FaqSection faqs={pdfToPptFaqs} />

      <Schema
        name="PDF to PowerPoint Converter - Convert PDF to PPTX Online"
        description="Convert your PDF documents back into editable PowerPoint presentations (PPT/PPTX) for free. SwiftPDF preserves your original slides, layouts, and text formatting perfectly."
        url="/pdf-to-ppt"
      />
    </div>
  );
}
