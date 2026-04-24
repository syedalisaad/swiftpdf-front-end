import FaqSection from "@/src/components/systemUI/FaqSection";
import MergePDFClient from "@/src/components/systemUI/MergePDFClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merge PDF Online - Free & Fast PDF Combiner | SwiftPDF",
  description:
    "Easily combine two or more PDF files into a single document. Secure, fast, and maintains original formatting. No installation required.",
  keywords: [
    "merge pdf",
    "combine pdf files",
    "join pdf documents",
    "online pdf merger",
    "free pdf merger tools",
  ],
  alternates: {
    canonical: "https://swiftpdf.cloud/merge-pdf",
  },
  openGraph: {
    title: "Merge PDF Online - Free & Fast PDF Combiner | SwiftPDF",
    description: "Combine multiple PDFs into one organized file in seconds.",
    url: "https://swiftpdf.cloud/merge-pdf",
    type: "website",
    images: [
      {
        url: "https://swiftpdf.cloud/og-image.png",
        width: 1200,
        height: 630,
        alt: "SwiftPDF Merge Tool Preview",
      },
    ],
  },
};

export default function Page() {
  const faqs = [
    {
      question: "How to Merge PDF Files Online?",
      answer:
        "To get started you need to select the PDF files that you want to combine. You can do this. You can simply drag the PDF files into the box. Next you should rearrange the order of the PDF files by dragging them into the order that you like. Now all you have to do is click the button that says 'Merge PDF'. Then you can download the combined PDF files instantly.",
    },
    {
      question: "Why use SwiftPDF to Combine PDFs?",
      answer:
        "SwiftPDF makes combining PDFs easy. You can merge files quickly without downloading any software. Your files are kept safe and deleted automatically when done so you do not have to worry about your privacy. SwiftPDF is a tool that is easy to use. It helps students, professionals and regular people combine PDFs. It is designed to make merging PDFs fast, secure and hassle-free, for everyone.",
    },
    {
      question: "Is SwiftPDF really free with no sign-up or login required?",
      answer:
        "While most websites charge for merging PDFs we do not! We think everyone should have access, to PDF tools. Our free PDF merging service is easy to use. There are no fees or subscription requirements. You do not need to create an account. Just upload your files merge them and download your PDF. It is that simple and fast taking seconds.",
    },
    {
      question: "Is SwiftPDF completely free to use without sign-up or login?",
      answer:
        "Most websites will charge you to merge your PDF files. We do not do that. We think that everyone should be able to use our PDF tools without any problems. Our PDF merging service is free and easy to use. There are no costs or things you need to pay for. You do not have to sign up or pay a fee every month. All you have to do is upload your PDF files merge the PDF files and then download the PDF file that has all the files combined. You can do all of this in a few seconds.",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white py-16 px-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Merge PDF <span className="text-red-600">Files Online</span> —
            Combine Documents for Free
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            To put all your **PDF documents** together in one file you can use a
            tool that makes it easy for you. This way you can keep your files
            looking the same. Your information is safe when you use the tool, on
            the internet to **combine PDF documents**.{" "}
          </p>
        </div>
      </section>

      <section className="py-4" aria-label="PDF Merging Tool">
        <MergePDFClient />
      </section>

      <FaqSection faqs={faqs} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "SwiftPDF Merger",
            operatingSystem: "All",
            applicationCategory: "MultimediaApplication",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            description:
              "Combine multiple PDF files into one for free. Maintain original quality and layout without installing software.",
          }),
        }}
      />
    </div>
  );
}
