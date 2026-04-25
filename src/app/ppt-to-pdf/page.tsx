import FaqSection from "@/src/components/systemUI/FaqSection";
import PPTToPDFClient from "@/src/components/systemUI/PPTToPDFClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  // Optimized H1/Title (58 characters)
  title: "Convert PowerPoint to PDF Online — 100% Free & Secure",
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
    title: "PowerPoint to PDF Converter | SwiftPDF.cloud",
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
      answer:
        `Converting PowerPoint to PDF makes sure your slides look the same on every device.

This is really helpful because it stops problems like:

* Your slides looking different on devices

* Fonts going missing

* Layout getting messed up

when you share presentations with others.

It is also good to convert PowerPoint to PDF so you can be sure that your slides look exactly as you want.

PowerPoint, to PDF conversion helps prevent issues.

You can share PowerPoint as PDF.`,
    },
    {
      question: "Will my slide layout remain the same after conversion?",
      answer:
        `When you convert PowerPoint to PDF you can be sure that your slides will look the same on every device. This is because it stops things like formatting issues and missing fonts from happening. It also keeps the layout right.

SwiftPDF makes sure that the structure of your slides and the way things are lined up stay the same. It also keeps your images and text in the place. This means that your presentation will look just like it did when you made it even when you share it with people. Converting PowerPoint to PDF is a way to keep your presentation looking good on all devices.`,
    },
    {
      question: "Are fonts and text preserved in the PDF?",
      answer:
        `Yes. All fonts are. Converted to keep the text clear.

This way the text stays sharp and easy to read.

It is also searchable.

The fonts are. Embedded or changed to make sure this works.`,
    },
    {
      question: "What happens to animations and transitions?",
      answer:
        `When you make a PDF document from something with animations and transitions all the moving parts get turned into static slides. This makes the PDF document look really clean and professional. The animations and transitions are. You are left with a simple and nice looking PDF document, with static slides.`,
    },
    {
      question: "Is PPT to PDF conversion secure?",
      answer:
        `So your files are safe. We encrypt your files when we send them and get rid of them after we are done with them. This way we can make sure your information is private. Your files are protected because we encrypt them and then we delete them.`,
    },
    {
      question: "How long does it take to convert PowerPoint to PDF?",
      answer:
        `Most files are done fast it takes just a few seconds. This is because the time it takes to process the files depends on how big the filesre how complicated they are. The files are processed within seconds for the most part and the file size and complexity of the files play a role in this.`,
    },
    {
      question: "Can I convert both PPT and PPTX files?",
      answer:
        `Yes. SwiftPDF supports both PPT and PPTX formats and converts them into high-quality PDF files.`,
    },
    {
      question: "Will images and graphics be preserved?",
      answer:
        `The images and the icons and the charts and the graphics are all kept in good quality when they are, in the PDF. They also stay lined up properly in the PDF. The images and the graphics and the charts and the icons look great. Are easy to see in the PDF.`,
    },
    {
      question: "Do I need to install software to convert PPT to PDF?",
      answer:
        `SwiftPDF is really easy to use because it works online. This means you can convert your files directly in your browser. You do not have to install anything on your computer to use SwiftPDF. You can just go to the website. Start converting your files right away, in your browser with SwiftPDF.`,
    },
    {
      question: "Are my presentation files stored after conversion?",
      answer:
        `No the files are processed for a time and then they are automatically deleted after they have been converted.`,
    },

    // 🔥 EXTRA SEO + USER INTENT FAQs
    {
      question: "Can I convert large PowerPoint files to PDF?",
      answer:
        `Yes. SwiftPDF works with presentations.

The time it takes to process them can be different based on how large the file's.`,
    },
    {
      question: "Will the PDF be suitable for printing?",
      answer:
        `The converted PDF is really good. It looks great which makes it perfect for printing and sharing with other people, at work. The converted PDF has a quality that everyone will like.`,
    },
    {
      question: "Can I convert multiple PowerPoint files at once?",
      answer:
        `You can upload files and then convert them all at the same time. This makes the process really efficient. You can do it all in one session. You can upload all your files. Then convert these files in just one go.`,
    },
    {
      question: "Is the converted PDF editable?",
      answer:
        `PDF files are made to keep the layout the same so you cannot easily change them without using software. PDF files are really good, at keeping things looking the same that is why it is hard to edit PDF files.`,
    },
    {
      question: "Does SwiftPDF require sign-up or login?",
      answer:
        "You do not need to create an account or log in to use the PPT to PDF converter. The PPT to PDF converter is available for use, without an account or logging in.",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. SEO Header Section - Focus on Presentation Integrity */}
      <section className="bg-white py-16 px-4 border-b border-gray-100 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            High-Quality <span className="text-red-600">PowerPoint to PDF</span>{" "}
            Converter
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            You need to protect your presentation layout. You can turn your
            **PPT and PPTX slides** into non-editable PDF documents. This way
            you get to keep the fonts and images in your **PPT and PPTX slides**
            looking really good.
          </p>
        </div>
      </section>

      {/* 2. The Interactive Tool */}
      <section className="py-12" aria-label="PPT to PDF Conversion Workspace">
        <PPTToPDFClient />
      </section>
      <FaqSection faqs={pptToPdfFaqs} />

      {/* 4. Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "SwiftPDF PPT to PDF Converter",
              operatingSystem: "All",
              applicationCategory: "BusinessApplication",
              url: "https://swiftpdf.cloud/ppt-to-pdf",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to convert PowerPoint to PDF",
              description:
                "A quick 3-step guide to turning your PPT slides into a professional PDF.",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Upload",
                  text: "Upload your .ppt or .pptx file to the SwiftPDF tool.",
                },
                {
                  "@type": "HowToStep",
                  name: "Render",
                  text: "Wait while our engine renders the slides into high-quality PDF format.",
                },
                {
                  "@type": "HowToStep",
                  name: "Download",
                  text: "Download your converted PDF file instantly.",
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}
