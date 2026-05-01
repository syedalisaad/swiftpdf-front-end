import Schema from "@/src/components/Schema";
import FaqSection from "@/src/components/systemUI/FaqSection";
import PDFEditorClient from "@/src/components/systemUI/PDFEditorClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free PDF Editor Online - Edit, Sign & Fill PDFs | SwiftPDF",
  description:
    "The easiest way to edit your PDF files online. Add text, erase content, and sign documents instantly with SwiftPDF. No installation required.",
  alternates: {
    canonical: "https://swiftpdf.cloud/edit-pdf",
  },
  keywords:
    "edit pdf, online pdf editor, sign pdf free, pdf eraser tool, nextjs pdf editor",
  openGraph: {
    title: "SwiftPDF - Professional Online PDF Tools",
    description: "Edit and Sign PDFs in seconds.",
    url: "https://swiftpdf.cloud/edit-pdf",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  const editPdfFaqs = [
    {
      question: "How can I edit a PDF online?",
      answer:
        "Upload your PDF file. Make changes like editing text or adding elements. Then download the updated file away.",
    },
    {
      question: "What can I edit in a PDF file?",
      answer: `You can change the text add or delete content put in pictures highlight parts and make notes based on what the tool can do.

The tool features decide what you can do with the text.

You can make changes like adding or removing things.

Images can also be inserted into the text.

Some tools let you highlight sections that're important.

You can make annotations to explain something.`,
    },
    {
      question: "Can I edit text directly in a PDF?",
      answer: `Yes. You can easily change text that's already, in your document or add new text using SwiftPDF.`,
    },
    {
      question: "Can I add images or signatures to a PDF?",
      answer: `Yes. You can add images, logos or signatures to your PDF. This helps make your document look the way you want.

You can insert images or logos to customize your PDF.

You can also add a signature to finalize it.`,
    },
    {
      question: "Is editing a PDF secure?",
      answer: `So your files are encrypted when you upload them. This means your files are protected. After we are done with your files they are automatically deleted. We do this to make sure your privacy is protected. Your privacy is important, to us. Files are. Then deleted after we are done processing the files.`,
    },
    {
      question: "Do I need to install software to edit PDFs?",
      answer: `No. SwiftPDF works online.

You can edit PDFs in your browser.

You do not need to install anything.

SwiftPDF is easy to use.`,
    },
    {
      question: "Can I edit scanned PDFs?",
      answer: `Yes. So when you have OCR support it means you can take scanned PDFs and turn them into text that you can actually edit. This makes it a lot easier to make changes to the scanned PDFs. You can modify the text in the scanned PDFs because they are now text.`,
    },
    {
      question: "Will formatting remain intact after editing?",
      answer: `SwiftPDF is made to keep the layout and fonts and structure the same. It also lets you make changes to it. SwiftPDF does a job of preserving the layout and structure so you can edit things and it still looks the same.`,
    },
    {
      question: "How long does it take to edit a PDF?",
      answer: `When you edit something it happens away. The processing part is pretty quick too it only takes a seconds to finish and that is because the time it takes depends on how big the file is.`,
    },
    {
      question: "Can I edit large PDF files?",
      answer: `SwiftPDF can handle files. The thing is, how well it works can be different depending on how complicated the file's. SwiftPDF will still support these files even if the performance is not always the same.`,
    },
    {
      question: "Are my files stored after editing?",
      answer: `   No. The files are processed for a while and then they are automatically deleted after you are done editing the files.`,
    },

    // 🔥 EXTRA HIGH-INTENT FAQs
    {
      question: "Can I highlight or annotate PDFs?",
      answer: `You can do a lot of things to make working together easier. For example you can highlight the text that's important. You can also add comments, to the documents.. You can even annotate the documents. This helps people collaborate and review the documents better.`,
    },
    {
      question: "Is this PDF editor free to use?",
      answer: `Yes. SwiftPDF does offer PDF editing. You do not need to sign up or log in to use it.`,
    },
    {
      question: "Can I rearrange or delete pages in a PDF?",
      answer:
        "You can do lots of things with the pages in your PDF document. You can reorder the pages in your PDF document. You can also remove pages from your PDF document.. You can manage the pages, in your PDF document easily.",
    },
    {
      question: "Does SwiftPDF work on all devices?",
      answer: `Yes. You can edit PDF files on any device using a web browser.

You can do it on your phone or computer.

Just open the web browser. You are good to go.

PDF editing is easy now.

You can use it anywhere.

The device can be a phone or a laptop.

Editing PDFs is simple, with a web browser.`,
    },
  ];
  return (
    <>
      <section className="bg-white border-b border-gray-100 py-8 px-4 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          Online <span className="text-red-600">PDF Editor</span> and Signer
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Modify documents, add text annotations, erase sensitive content, and
          sign PDFs securely—all without leaving your browser.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Powerful Editing Tools for Every Document
        </h2>
      </section>

      <PDFEditorClient />
      <FaqSection faqs={editPdfFaqs} />

      {/* 4. Structured Data (JSON-LD) */}
      <Schema
        name="Free Online PDF Editor - Edit, Sign & Annotate PDFs"
        description="Edit your PDF files online for free. Add text, images, shapes, and signatures to your documents securely without downloading any software."
        url="/edit-pdf"
      />
    </>
  );
}
