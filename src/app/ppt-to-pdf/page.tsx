import Schema from "@/src/components/Schema";
import FaqSection from "@/src/components/systemUI/FaqSection";
import PPTToPDFClient from "@/src/components/systemUI/PPTToPDFClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  // Updated Title: Lead with highest volume keyword (58 characters)
  title: "PPT to PDF Converter | Convert PowerPoint to PDF Online",
  description:
    "Convert PPT and PPTX to PDF online for free. SwiftPDF preserves your original slide layouts, fonts, and images with perfect accuracy. No signup required.",
  keywords: [
    "ppt to pdf",
    "pptx to pdf",
    "convert powerpoint to pdf online",
    "free ppt converter",
    "swiftpdf",
  ],
  alternates: {
    canonical: "https://swiftpdf.cloud/ppt-to-pdf",
  },
  openGraph: {
    title: "PowerPoint to PDF Converter.cloud",
    description:
      "Lightning-fast PPT to PDF conversion. Professional quality, secure, and 100% free.",
    url: "https://swiftpdf.cloud/ppt-to-pdf",
    type: "website",
    images: [
      { url: "https://swiftpdf.cloud/og-inage.png", width: 1200, height: 630 },
    ],
  },
};

export default function Page() {
  const pptToPdfFaqs = [
    {
      question: "Why should I convert PowerPoint to PDF?",
      answer: "Converting your presentation to PDF ensures that your slides look the same on every device. It prevents common issues like missing fonts, broken layouts, or formatting shifts when sharing your deck with others.",
    },
    {
      question: "Will my slide layout remain the same after conversion?",
      answer: "Yes. SwiftPDF is designed to maintain the exact structure of your slides. Your text alignment, images, charts, and table positions are preserved with high fidelity.",
    },
    {
      question: "Are fonts and text preserved in the PDF?",
      answer: "Absolutely. All fonts are embedded or accurately rendered to ensure the text remains sharp, clear, and fully searchable within the PDF.",
    },
    {
      question: "What happens to animations and transitions?",
      answer: "Since PDF is a static format, any animations or slide transitions will be removed. Each slide in your PowerPoint will become a single, high-quality static page in the PDF.",
    },
    {
      question: "Is PPT to PDF conversion secure?",
      answer: "Yes. Your files are protected with SSL encryption during transfer and are automatically deleted from our servers once the conversion is complete to ensure your privacy.",
    },
    {
      question: "How long does it take to convert PowerPoint to PDF?",
      answer: "Most presentations are converted within seconds. Processing time may vary slightly depending on the file size and the complexity of the graphics within your slides.",
    },
    {
      question: "Can I convert both PPT and PPTX files?",
      answer: "Yes, SwiftPDF supports both the older .ppt format and the modern .pptx format used by Microsoft PowerPoint 2007 and later.",
    },
    {
      question: "Will images and graphics be preserved?",
      answer: "Yes. All high-resolution images, icons, and vector graphics are preserved during conversion, ensuring your presentation looks professional when printed or shared.",
    },
    {
      question: "Do I need to install software to convert PPT to PDF?",
      answer: "No. SwiftPDF is a cloud-based tool that works directly in your web browser. No downloads or installations are required.",
    },
    {
      question: "Is this PPT to PDF tool free?",
      answer: "Yes, SwiftPDF is completely free to use. You can convert your presentations without any hidden costs, sign-ups, or login requirements.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. SEO Header Section */}
      <section className="bg-white py-16 px-4 border-b border-gray-100 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            High-Quality <span className="text-red-600">PowerPoint to PDF</span>{" "}
            Converter
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Protect your presentation layout by converting **PPT and PPTX slides** 
            into non-editable, professional PDF documents. Maintain the integrity 
            of your fonts, graphics, and charts effortlessly.
          </p>

          {/* New H2 Section for SEO Hierarchy */}
          <h2 className="text-2xl font-bold text-gray-800">
            Professional PPTX to PDF Conversion Online
          </h2>
          <p className="text-gray-500 mt-2">
            The fastest way to turn your presentation decks into shareable documents.
          </p>
        </div>
      </section>

      {/* 2. The Interactive Tool */}
      <section className="py-12" aria-label="PPT to PDF Conversion Workspace">
        <PPTToPDFClient />
      </section>

      {/* 3. Cleaned FAQ Section */}
      <FaqSection faqs={pptToPdfFaqs} />

      <Schema
        name="PowerPoint to PDF Converter - Convert PPT & PPTX Online"
        description="Convert PowerPoint presentations (PPT and PPTX) to high-quality PDF documents online for free while preserving animations and layout."
        url="/ppt-to-pdf"
      />
    </div>
  );
}