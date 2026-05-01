import Schema from "@/src/components/Schema";
import FaqSection from "@/src/components/systemUI/FaqSection";
import PDFToImageClient from "@/src/components/systemUI/PDFToImageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PDF to JPG Converter | Convert PDF to Image Online | SwiftPDF",
  description:
    "Convert your PDF pages into high-resolution images instantly. SwiftPDF extracts every page as a clear JPG or PNG while maintaining 300 DPI quality.",
  keywords: [
    "pdf to image",
    "pdf to jpg",
    "extract images from pdf",
    "pdf to png converter",
    "online pdf tool",
  ],
  alternates: {
    canonical: "https://swiftpdf.cloud/pdf-to-image",
  },
  openGraph: {
    title: "PDF to Image Converter | SwiftPDF.cloud",
    description:
      "Turn any PDF into a collection of high-quality images in seconds. No registration required.",
    url: "https://swiftpdf.cloud/pdf-to-image",
    type: "website",
    images: [
      { url: "https://swiftpdf.cloud/og-image.png", width: 1200, height: 630 },
    ],
  },
};

export default function Page() {
  const pdfToImageFaqs = [
    {
      question: "How can I convert a PDF to images online?",
      answer: `To get started you need to upload your PDF file. Then you have to choose the image format that you like best. After that you just click the convert button. Once the PDF file is done being processed you can download the images away.`,
    },
    {
      question: "Which image formats are supported?",
      answer: `SwiftPDF is really helpful because it works with formats like JPG, PNG and WebP. This means you can get high-quality images when you use SwiftPDF. It supports these formats to make sure your images look great. SwiftPDF and these formats like JPG, PNG and WebP are a combination, for high-quality image output.`,
    },
    {
      question: "Will each PDF page become a separate image?",
      answer: `Each page of your PDF is turned into a picture file. This makes it really easy to use and share the PDF pages. You can do whatever you want with each picture of the PDF pages.`,
    },
    {
      question: "Can I download all images at once?",
      answer: `Yes. All converted images come in a ZIP file.

This makes downloading them quick and easy.`,
    },
    {
      question: "Will image quality be preserved after conversion?",
      answer: `Yes. SwiftPDF keeps your pictures clear and sharp so they look professional and nice. SwiftPDF makes sure that your images stay that way so they are always sharp and clear.`,
    },
    {
      question: "Can I convert specific pages from a PDF?",
      answer: `Yes. You can choose which pages to convert. For example you can convert page 3 or pages 5 to 8. This way you do not have to convert the document.`,
    },
    {
      question: "Is PDF to image conversion secure?",
      answer: `So your files are encrypted when we send them back and forth. This means your files are locked and only the right people can see them. We also get rid of your files after we are done with them. This helps keep your information private and safe. Your privacy is very important, to us. That is why we encrypt your files and then delete them.`,
    },
    {
      question: "Do I need to install any software?",
      answer: `No SwiftPDF works online. This means you can convert PDFs to images, in your browser. You do not have to do anything. SwiftPDF and your browser do all the work for you. You can use SwiftPDF to convert your PDFs to images.`,
    },
    {
      question: "How long does it take to convert a PDF to images?",
      answer: `Most files get processed fast usually within seconds.. It can take a bit longer if the file is large or has many pages.`,
    },
    {
      question: "Can I convert large PDF files?",
      answer: `Yes. SwiftPDF works with PDFs.. It might take more time if the PDF file is large and complex.`,
    },
    {
      question: "Are my files stored after conversion?",
      answer: `No the files are processed for a time and then they are automatically deleted after they have been converted. The files do not stay on the system for long. The system gets rid of the files after the conversion of the files is done.`,
    },

    // 🔥 EXTRA SEO + USER INTENT FAQs
    {
      question: "Can I choose image quality or resolution?",
      answer: `Yes. SwiftPDF can make the output look really good. Sometimes it even lets you choose how clear you want the picture to be, like the resolution settings.`,
    },
    {
      question: "Is this PDF to image converter free?",
      answer: `SwiftPDF is really helpful because it lets you turn PDF files into image files for free. The best part is that you do not have to sign up or log in to use this service with SwiftPDF. You can just use SwiftPDF. Get what you need.`,
    },
    {
      question: "Will text in the PDF remain clear in images?",
      answer: `The text looks really clear. It is easy to read. This is because it is, in resolution. Even when it is converted the text is still easy to read. The high resolution makes a difference.`,
    },
    {
      question: "Does SwiftPDF work on all devices?",
      answer: `You can definitely convert PDFs to images, on any device you have long as it has a web browser. This is really helpful because you can do it on any device, not your computer. You can convert PDFs to images.`,
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white py-16 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            High-Resolution <span className="text-red-600">PDF to Image</span>{" "}
            Converter
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            You can take every page of your document and turn it into really
            clear pictures that are easy to look at. These pictures can be saved
            as JPG or PNG files. This is great for when you need to make a
            presentation or put something on media. It is also good, for keeping
            a copy of your document without it getting all fuzzy. You can use
            these pictures of your document for lots of things. You can use them
            for presentations you can use them for media or you can use them to
            keep a copy of your document. This way your document will always be
            clear and easy to read. Every page of your document will be saved as
            a picture.
          </p>
          <h2 className="text-2xl font-bold text-gray-800">
            Extract PDF Pages as Professional Images
          </h2>
          <p className="text-gray-500 mt-2">
            Fast, secure, and preserves 300 DPI quality for every page.
          </p>
        </div>
      </section>

      <section aria-label="PDF to Image Tool">
        <PDFToImageClient />
      </section>

      <FaqSection faqs={pdfToImageFaqs} />

      <Schema
        name="PDF to Image Converter - Extract PDF Pages to JPG/PNG"
        description="Convert your PDF pages into high-quality images (JPG, PNG) for free. Extract individual pages or entire documents as clear, professional image files instantly."
        url="/pdf-to-image"
      />
    </div>
  );
}
