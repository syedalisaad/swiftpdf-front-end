import FaqSection from "@/src/components/systemUI/FaqSection";
import ImageToPDFClient from "@/src/components/systemUI/ImageToPDFClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  // Fixed H1/Title Length (58 characters)
  title: "Convert JPG, PNG, WEBP to PDF Online - Free Tool | SwiftPDF",
  description: "Easily convert multiple images into a single PDF document. High-quality conversion for JPG, PNG, and WEBP with automatic page scaling.",
  keywords: ["image to pdf", "convert jpg to pdf", "png to pdf", "webp to pdf", "combine images into pdf", "free online pdf converter"],
  alternates: {
    canonical: "https://swiftpdf.cloud/image-to-pdf",
  },
  openGraph: {
    title: "Fast Image to PDF Converter | SwiftPDF",
    description: "Turn your photos and images into professional PDFs in seconds. Secure and high quality.",
    url: "https://swiftpdf.cloud/image-to-pdf",
    type: "website",
    images: [{ url: "https://swiftpdf.cloud/og-image.png", width: 1200, height: 630 }],
  },
};

export default function Page() {

  const imageToPdfFaqs = [
  {
    question: "How can I convert images to PDF online?",
    answer:
      `You can upload your images. Arrange them the way you want to. Then you just have to click the convert button. After that you can download your images as a PDF file away. The good thing is that you do not have to install any software to do this. You can get your PDF file from your images instantly.`
  },
  {
    question: "Which image formats are supported?",
    answer:
      `You can upload your images. Arrange them the way you want to. Then you just have to click the convert button. After that you can download your images as a PDF file away. The good thing is that you do not have to install any software to do this. You can get your PDF file from your images instantly.`
  },
  {
    question: "Can I combine multiple images into one PDF?",
    answer:
      `You can upload a lot of pictures. Put them together into one document that is a PDF. This means you get to decide what order the pictures are, in.`
  },
  {
    question: "Will image quality be reduced after conversion?",
    answer:
      `No SwiftPDF keeps the pictures looking really good. It also makes the file smaller so it is easier to share with other people.`
  },
  {
    question: "Can I rearrange images before creating the PDF?",
    answer:
      `Yes. You can easily change the order of images before turning them into a PDF.`
  },
  {
    question: "Is image to PDF conversion secure?",
    answer:
      `So your files are encrypted when we send them. Then they get deleted after we are done with them. This way the files are safe. Your privacy is protected. We do this to make sure your files and your information are secure. Your privacy is very important, to us. We want to keep your files safe. Files are encrypted during transfer. Then files get deleted after we process the files.`
  },
  {
    question: "Do I need to install any software?",
    answer:
      `No. SwiftPDF works online.

You can convert images to PDF in your browser.

No.

SwiftPDF works online.

You can convert images to PDF, in your browser.`
  },
  {
    question: "How long does it take to convert images to PDF?",
    answer:
      `Most image conversions are completed in a few seconds. It really depends on how images you are converting and how big they are.`
  },
  {
    question: "Can I convert large images to PDF?",
    answer:
      `Yes. SwiftPDF can handle picture files but it may take a little longer to work with them depending on how big the file is. SwiftPDF is pretty good with image files, like that.`
  },
  {
    question: "Are my files stored after conversion?",
    answer:
      `No. Files are processed for a time. They are deleted right after conversion.`
  },

  // 🔥 EXTRA SEO + USER INTENT FAQs
  {
    question: "Can I adjust page size or orientation in the PDF?",
    answer:
      `Yes. SwiftPDF can fix the layout for you. It also lets you pick the page size and orientation in some cases. You can choose page size and orientation with SwiftPDF.`
  },
  {
    question: "Will each image become a separate page in the PDF?",
    answer:
      `Each image that you upload is made into its page, in a PDF document unless you decide to put them together in a different way.`
  },
  {
    question: "Is this image to PDF converter free?",
    answer:
      `SwiftPDF is a tool because it lets you turn images into PDF files for free. You do not have to sign up or log in to use this service with SwiftPDF. This is really helpful when you need to use SwiftPDF to convert images to PDF files.`
  },
  {
    question: "Does SwiftPDF work on all devices?",
    answer:
      `You can convert images to PDF on any device using a web browser. This is really easy to do. You can convert images to PDF on any device. You just need to use a web browser to convert images to PDF.`
  }
];
  return (
    <main className="min-h-screen bg-gray-50">
      {/* 1. SEO Header - Direct Benefit for the User */}
      <section className="bg-white py-16 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Convert <span className="text-red-600">Images to PDF</span> Instantly for Free
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            You can put all your photos together in one document. To do this you need to upload your **JPG, PNG or WEBP** files. Then you can make a good **PDF** in just a few seconds. This is a way to make a **PDF**, from your **JPG, PNG or WEBP** files.
          </p>
        </div>
      </section>

      {/* 2. The Interactive Tool */}
      <section className="py-10" aria-label="Image to PDF Converter Tool">
        <ImageToPDFClient />
      </section>
      <FaqSection faqs={imageToPdfFaqs} />


      {/* 4. Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to convert images to PDF for free",
            "description": "Step-by-step guide to merging JPG and PNG images into a single PDF file.",
            "step": [
              { "@type": "HowToStep", "text": "Select or drag your images into the SwiftPDF uploader." },
              { "@type": "HowToStep", "text": "Reorder your images to change the page sequence." },
              { "@type": "HowToStep", "text": "Click 'Convert to PDF' and download your document." }
            ]
          })
        }}
      />
    </main>
  );
}