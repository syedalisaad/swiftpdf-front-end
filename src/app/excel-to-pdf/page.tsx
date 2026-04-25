import ExcelToPDFClient from "@/src/components/systemUI/ExcelToPDFClient";
import FaqSection from "@/src/components/systemUI/FaqSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Excel to PDF Converter — Fit All Columns & Keep Formatting",
  description:
    "Easily convert XLSX, XLS, and CSV files to high-quality PDF documents. Maintain table formatting and data integrity with our free online tool.",
  keywords: [
    "excel to pdf",
    "convert xlsx to pdf",
    "convert csv to pdf",
    "spreadsheet to pdf converter",
    "free online pdf tools",
  ],
  alternates: {
    canonical: "https://swiftpdf.cloud/excel-to-pdf",
  },
  openGraph: {
    title: "Excel to PDF - Professional Converter | SwiftPDF",
    description:
      "Keep your tables perfectly aligned. Convert spreadsheets to PDF instantly.",
    url: "https://swiftpdf.cloud/excel-to-pdf",
    siteName: "SwiftPDF",
    type: "website",
    images: [
      {
        url: "https://swiftpdf.cloud/og-image.png", // Use absolute URL
        width: 1200,
        height: 630,
        alt: "SwiftPDF Excel to PDF Tool Preview",
      },
    ],
  },
};

export default function Page() {
  const excelToPdfFaqs = [
  {
    question: "How can I convert Excel to PDF online?",
    answer:
      `You need to upload your Excel file. Then you click the button that says convert. After that you can download your PDF file away. This whole thing is really fast and simple. The best part is that it all happens in your browser so you do not have to bother with anything. You can get your Excel file turned into a PDF file instantly.`
  },
  {
    question: "Which Excel formats are supported?",
    answer:
      `SwiftPDF helps you turn Excel files into PDF files. It works with XLS and XLSX files from Excel. This makes it easy to change these files into PDF files using SwiftPDF. You can use SwiftPDF to convert your XLS and XLSX files to PDF files without any trouble.`
  },
  {
    question: "Will my Excel formatting be preserved?",
    answer:
      `Yes. The tables, columns, fonts and layouts are kept to make sure your PDF looks clean and professional.

This way your PDF will look good.

The tables and columns stay as they are.

The fonts and layouts are also maintained.

So your PDF will have a look.`
  },
  {
    question: "Are charts and graphs preserved in the PDF?",
    answer:
      `The charts and the graphs and the visual elements are converted correctly. They stay clear in the final PDF. The visual elements and the charts and the graphs look really good in the PDF.`
  },
  {
    question: "Can I convert multiple Excel sheets into one PDF?",
    answer:
      `You can put all the sheets from your Excel file into one PDF document that's easy to look at. This PDF document will have all your Excel sheets in it. It will be organized in a nice way. You get one document, with all your Excel sheets.`
  },
  {
    question: "Is Excel to PDF conversion secure?",
    answer:
      `So our files are encrypted when we send them and they get deleted after we are done with them. This way our information is kept private. We make sure that our files are encrypted during the transfer and they are automatically deleted after they have been processed. This is how we keep our privacy safe.`
  },
  {
    question: "Do I need to install any software?",
    answer:
      `SwiftPDF is a thing that works completely on the internet. This means you can use SwiftPDF to change Excel files into something without having to put any new programs on your computer. You do not need to install anything to use SwiftPDF for this. SwiftPDF makes it easy to convert Excel files online.`
  },
  {
    question: "How long does it take to convert Excel to PDF?",
    answer:
      `Most files get converted in a few seconds.

It really depends on how big the file's how complicated it is.

File size and complexity are the factors here.`
  },
  {
    question: "Can I convert large Excel files?",
    answer:
      `Yes. SwiftPDF can handle files. The time it takes to process these files will be different depending on how much data's in the file. SwiftPDF is good, for files.`
  },
  {
    question: "Will the PDF be suitable for printing?",
    answer:
      `Yes. The converted PDF keeps resolution and layout. This makes it perfect, for printing and sharing.`
  },
  {
    question: "Are my files stored after conversion?",
    answer:
      `No. Files are processed for a time. They are deleted right after conversion.`
  },

  // 🔥 EXTRA SEO + USER INTENT FAQs
  {
    question: "Can I adjust page orientation in the PDF?",
    answer:
      `Yes. SwiftPDF does a job of making sure the layout looks good on its own but you can also change things, like the orientation and how things are formatted if that is something SwiftPDF can do.`
  },
  {
    question: "Will cell data remain readable in the PDF?",
    answer:
      `Yes. SwiftPDF does a job of making sure the layout looks good on its own but you can also change things, like the orientation and how things are formatted if that is something SwiftPDF can do.`
  },
  {
    question: "Is this Excel to PDF converter free?",
    answer:
      `SwiftPDF is really helpful because it lets you convert Excel files to PDF files for free. The best part is that you do not have to sign up or log in to use this service. You can just use SwiftPDF to convert your Excel files to PDF files whenever you need to. SwiftPDF makes it very easy to do this.`
  },
  {
    question: "Does SwiftPDF support mobile and desktop use?",
    answer:
      `You can convert Excel files to PDF on any device using a web browser. This is really easy to do. You do not need to have Excel on your device to convert Excel files to PDF. You can do this on any device with a web browser. So if you have Excel files and you want to convert them to PDF you can do that using a web browser on your device.`
  }
];
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. SEO Header Section - Visible to Google immediately */}
      <section className="py-16 px-4 border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Convert <span className="text-red-600">Excel to PDF</span> Online
            for Free
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Turn your spreadsheets into professional, read-only PDF documents.
            Our converter supports **XLSX, XLS, and CSV** formats while
            preserving your cell formatting, table borders, and data alignment.
          </p>
        </div>
      </section>

      {/* 2. The Interactive Tool Component */}
      <section className="py-12" aria-label="Spreadsheet Conversion Tool">
        <ExcelToPDFClient />
      </section>
      <FaqSection faqs={excelToPdfFaqs} />

      {/* 4. Structured Data (JSON-LD) for Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "SwiftPDF Excel to PDF Converter",
            operatingSystem: "All",
            applicationCategory: "BusinessApplication",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            description:
              "Free online tool to convert Excel spreadsheets (XLSX, XLS, CSV) to high-quality PDF files while keeping formatting intact.",
          }),
        }}
      />
    </div>
  );
}
