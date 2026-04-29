// app/split-pdf/page.tsx (Server Component)
import Schema from "@/src/components/Schema";
import FaqSection from "@/src/components/systemUI/FaqSection";
import SplitPDFClient from "@/src/components/systemUI/SplitPDFClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Split PDF Online - Extract Pages & Separate PDF Free",
  description:
    "Easily split PDF files into individual pages or extract specific ranges. SwiftPDF.cloud is a fast, secure, and free online PDF splitter.",
  keywords: [
    "split pdf",
    "extract pdf pages",
    "separate pdf online",
    "free pdf splitter",
    "pdf page extractor",
  ],
  alternates: {
    canonical: "https://swiftpdf.cloud/split-pdf",
  },
  openGraph: {
    title: "Split PDF Online | SwiftPDF.cloud",
    description:
      "Extract pages from your PDF or save each page as a separate PDF instantly.",
    url: "https://swiftpdf.cloud/split-pdf",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function Page() {
   const faqs = [
  {
    question: "How to Split PDF Files in Seconds?",
    answer:
      "You can split PDF files really fast, with SwiftPDF. Here is how you do it: Upload your PDF file. Choose what you want to do: Extract all pages this will split your PDF into pages. Select a page range you need to enter the page numbers you want. Click the submit button and wait for a seconds When it is done: If you chose to extract all pages you will get a ZIP file and this file will have each page as a separate PDF file. If you chose a page range you will get a PDF file and this new PDF file will have only the pages you selected. Now you can download your PDF file with SwiftPDF."
  },
  {
    question: "Is it safe to split my PDF files here?",
    answer:
      "Yes. SwiftPDF keeps your information private. We use processing with our FastAPI backend. Your documents get processed away. They are not stored forever in a database or on our computers. All temporary files get deleted after processing. We do not need your details. No sign-ups or subscriptions are required. Our tools are free and safe to use. Alternatively a human-like version could be: I can confirm that. SwiftPDF really prioritizes your privacy. They use processing through their FastAPI backend. Your documents are processed in time. They are never stored permanently on their database or servers. To make sure everything stays confidential all temporary files get automatically purged after processing. They do not require any information, from you. No sign-ups or subscriptions are needed. Their tools are completely free and secure for you to use."
  },
  {
    question: "hy should I use SwiftPDF to split my documents?",
    answer:
      "SwiftPDF is different from platforms. They limit the number of files you can work with. They make you create an account.. Swiftpdf does not do that. You can use SwiftPDF without any problems. We let you split files fast. There are no limits on how files you can split each day. You do not have to sign up for anything. Our website is simple and easy to use. This means you get your results quickly. We do not use scripts that slow down our website. We do not have annoying pop-ups either. SwiftPDF is great for managing documents. It is free. It is very good. So it is perfect for students and freelancers and businesses. SwiftPDF is the choice, for all these people because it is free and easy to use."
  },
  {
    question: "Will my files be stored after splitting?",
    answer:
      "No your files are not stored after we split them. We process all the documents you upload in a secure way and only keep them for a little while. Then we delete them from our servers away. This way your privacy and the security of your data are completely safe."
  }
];
  return (
    <div className="min-h-screen">
      <header className="mb-10 text-center">
        {/* FIX: Add the H1 here */}
        <h1 className="text-4xl font-black text-gray-900 mb-4">
          <span className="text-red-600">Split PDF Online</span> — Extract Pages
          for Free
        </h1>
        <p className="text-lg text-gray-600">
          SwiftPDF has a good tool that helps you split PDF files right in your
          browser. You do not need to install any software or make an account to
          use SwiftPDF.
        </p>
      </header>
      <section aria-label="Split PDF Tool">
        <SplitPDFClient />
      </section>
      <FaqSection faqs={faqs} />

      <Schema
        name="Split PDF Online - Extract Pages from PDF"
        description="Split PDF files into separate pages or extract a specific page range into a new PDF document for free."
        url="/split-pdf"
      />
    </div>
  );
}
