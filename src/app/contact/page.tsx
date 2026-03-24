import { Linkedin, Mail, MessageSquare } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | SwiftPDF Support & Feedback",
  description: "Have a question or a complaint? Reach out to the SwiftPDF team via LinkedIn or Email for fast support.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">
          How can we <span className="text-red-600">help?</span>
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Whether you found a bug or have a feature request, we want to hear from you.
        </p>

        <div className="grid gap-6">
          <a 
            href="https://www.linkedin.com/company/swift-pdf-cloud" 
            target="_blank"
            className="flex items-center p-6 bg-white rounded-2xl border-2 border-transparent hover:border-blue-500 shadow-sm transition-all group"
          >
            <div className="bg-blue-50 p-4 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Linkedin size={28} />
            </div>
            <div className="text-left ml-6">
              <h2 className="text-xl font-bold text-gray-900">Connect on LinkedIn — Best for complex file issues.</h2>
              <p className="text-sm text-gray-500">Fastest response for bug reports and business inquiries.</p>
            </div>
          </a>

          {/* Email - The Formal Channel */}
          <a 
            href="mailto:support@swiftpdf.cloud" 
            className="flex items-center p-6 bg-white rounded-2xl border-2 border-transparent hover:border-red-500 shadow-sm transition-all group"
          >
            <div className="bg-red-50 p-4 rounded-xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <Mail size={28} />
            </div>
            <div className="text-left ml-6">
              <h2 className="text-xl font-bold text-gray-900">Email Support</h2>
              <p className="text-sm text-gray-500">support@swiftpdf.cloud </p>
            </div>
          </a>
        </div>

        <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100">
          <p className="text-sm text-blue-800 leading-relaxed italic">
            "As a developer, I personally review every piece of feedback to improve our PDF conversion accuracy. 
            Connecting on LinkedIn helps me understand who my users are so I can build better tools for you."
          </p>
          <p className="mt-4 font-bold text-blue-900">— Founder, SwiftPDF</p>
        </div>
      </div>
    </main>
  );
}