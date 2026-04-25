import FaqSection from "@/src/components/systemUI/FaqSection";
import PDFToWordClient from "@/src/components/systemUI/PDFToWordClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PDF to Word Converter — 100% Free & Editable | SwiftPDF",
  description:
    "Easily convert your PDF files into editable Microsoft Word documents. SwiftPDF preserves your original fonts, images, and layout with high accuracy.",
  keywords: [
    "pdf to word",
    "convert pdf to docx",
    "pdf to editable word",
    "online pdf converter",
    "free pdf to word",
  ],
  alternates: {
    canonical: "https://swiftpdf.cloud/pdf-to-word",
  },
  openGraph: {
    title: "PDF to Word Converter | SwiftPDF.cloud",
    description:
      "Lightning-fast PDF to Word conversion. Safe, secure, and professional quality.",
    url: "https://swiftpdf.cloud/pdf-to-word",
    type: "website",
    images: [
      { url: "https://swiftpdf.cloud/og-image.png", width: 1200, height: 630 },
    ],
  },
};

export default function Page() {
  const pdfToWordFaqs = [
  {
    question: "Why is SwiftPDF the most reliable PDF to Word converter?",
    answer:
      "SwiftPDF is made to change PDF files into Word files accurately. It keeps the layout and structure of the file the same. SwiftPDF also keeps the formatting the same. This means that headers and footers and margins stay the same. So you get a document that you can edit easily. SwiftPDF does a job of making sure the PDF, to Word conversion is perfect."
  },
  {
    question: "Does SwiftPDF preserve the original layout of PDFs?",
    answer:
      "SwiftPDF is really good at keeping things looking the same. It uses methods to make sure the original layout stays the same. This includes things like columns and headers and footers and the space, around the edges of the page. SwiftPDF does all this when it is converting files."
  },
  {
    question: "Is my data safe when using SwiftPDF?",
    answer:
      "Yes. All of your file processing is done with a strong protection. This protection is called 256-bit SSL encryption. So your files are handled in a secure way.. After we are done converting your files they are automatically deleted from our servers. This happens within a time."
  },
  {
    question: "What is PDF to DOCX conversion used for?",
    answer:
      "Converting a PDF to a DOCX file is really helpful because it lets you edit the content of the PDF in Microsoft Word or Office 365. This way you can make changes to the PDF. It will still look the same with all the formatting and tables and structure of the PDF staying intact. You can edit the PDF content, in Microsoft Word or Office 365."
  },
  {
    question: "Will tables and data remain editable after conversion?",
    answer:
      "SwiftPDF is really useful because it keeps tables in a format that you can edit. This means you can easily change things in reports, data sheets and other structured content. You can modify the tables in SwiftPDF without any hassle, which's great for things like financial reports and data sheets. SwiftPDF makes it easy to work with tables, in these kinds of documents."
  },
  {
    question: "Are images preserved during PDF to Word conversion?",
    answer:
      "Yes. All images stay in quality. They remain in their positions, in the Word document."
  },
  {
    question: "How long are my files stored on SwiftPDF servers?",
    answer:
      "Files arThe information is temporarily. Then it is automatically removed within 60 minutes. This is done to make sure that the information of the user is private and secure. The system does this to protect the user data. The data of the user is removed after 60 minutes to ensure privacy and security of the user information."
  },

   {
    question: "Can I convert scanned PDFs to Word?",
    answer:
      "Yes. SwiftPDF can extract text from scanned PDFs. It uses OCR to do this. The result is Word files. SwiftPDF supports conversion, like this."
  },
  {
    question: "Is there a file size limit for PDF to Word conversion?",
    answer:
      "SwiftPDF works with big files.. How fast it works can be different. It depends on how large the file's how complicated it is."
  },
  {
    question: "Do I need to install any software?",
    answer:
      "SwiftPDF works completely on the internet in your web browser. You do not need to download anything or install it on your computer. SwiftPDF is really easy to use because of this."
  },
  {
    question: "Does SwiftPDF support mobile devices?",
    answer:
      "Yes. You can use SwiftPDF on your phone on a tablet and on a desktop computer, without any problems. SwiftPDF works fine on devices. It also works fine on tablets and desktop devices."
  },
  {
    question: "Will formatting be exactly the same after conversion?",
    answer:
      "Most of the time the answer is yes. When we are talking about layouts SwiftPDF may need some small adjustments but it is designed to keep things as accurate, as possible with SwiftPDF."
  },
  {
    question: "Is SwiftPDF free to use?",
    answer:
      "Yes. SwiftPDF is free to use. You do not need to sign up or pay a subscription fee."
  }
  
];
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. SEO Header Section - Focus on Accuracy & Ease */}
      <section className="bg-white py-16 px-4 border-b border-gray-100 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Accurate <span className="text-red-600">PDF to Word</span> Converter
            Online
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            You can change your PDF documents into Microsoft Word files that you can edit. Our system rebuilds your document layout keeping the fonts, tables and images exactly as they are. This way you get editable Microsoft Word files.
          </p>
        </div>
      </section>

      {/* 2. The Interactive Tool */}
      <section className="py-12" aria-label="PDF to Word Conversion Tool">
        <PDFToWordClient />
      </section>
      <FaqSection faqs={pdfToWordFaqs} />

      {/* 4. Multi-Schema Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "SwiftPDF PDF to Word Converter",
              operatingSystem: "All",
              applicationCategory: "BusinessApplication",
              url: "https://swiftpdf.cloud/pdf-to-word",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to convert PDF to Word editable format",
              description:
                "A simple 3-step guide to turning PDFs into DOCX files.",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Upload",
                  text: "Upload your PDF file to the SwiftPDF converter.",
                },
                {
                  "@type": "HowToStep",
                  name: "Convert",
                  text: "Click 'Convert to Word' to begin the reconstruction process.",
                },
                {
                  "@type": "HowToStep",
                  name: "Download",
                  text: "Download your high-quality .docx file instantly.",
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}
