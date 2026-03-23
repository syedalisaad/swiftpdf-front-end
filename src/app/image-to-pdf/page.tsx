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
  return (
    <main className="min-h-screen bg-gray-50">
      {/* 1. SEO Header - Direct Benefit for the User */}
      <section className="bg-white py-16 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Convert <span className="text-red-600">Images to PDF</span> Instantly for Free
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The easiest way to combine your photos into a single, high-quality document. 
            Upload **JPG, PNG, or WEBP** files and generate a professional PDF in seconds.
          </p>
        </div>
      </section>

      {/* 2. The Interactive Tool */}
      <section className="py-10" aria-label="Image to PDF Converter Tool">
        <ImageToPDFClient />
      </section>

      {/* 3. High-Value Content Section (Crucial for AdSense) */}
      <article className="max-w-5xl mx-auto px-6 py-20 border-t border-gray-200 mt-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-3 text-lg">Multiple Formats</h3>
            <p className="text-sm text-gray-600">
              Convert any image type. Whether you have screenshots in <strong>PNG</strong>, 
              photos in <strong>JPG</strong>, or modern <strong>WEBP</strong> files, our 
              converter handles them all seamlessly.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-3 text-lg">Auto-Scaling</h3>
            <p className="text-sm text-gray-600">
              No more awkward white spaces. Our engine automatically scales your images to 
              fit a standard A4 or Letter page size while maintaining the <strong>original aspect ratio</strong>.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-3 text-lg">Privacy First</h3>
            <p className="text-sm text-gray-600">
              Your sensitive photos are safe. SwiftPDF processes files using secure browser 
              technologies, ensuring your data is <strong>never stored</strong> or shared with third parties.
            </p>
          </div>
        </div>
      </article>

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