import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SwiftPDF - Your Document Security Matters",
  description: "Learn how SwiftPDF handles your data, our commitment to document privacy, and our use of Google AdSense cookies.",
  alternates: {
    canonical: "https://swiftpdf.cloud/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  const lastUpdated = "March 20, 2026";

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mb-10 mx-auto py-20 px-6 text-gray-700 leading-relaxed bg-white shadow-sm border-x border-gray-100">
        <header className="border-b border-gray-100 pb-8 mb-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-gray-900 tracking-tight">Privacy <span className="text-red-600">Policy</span></h1>
          <p className="text-sm text-gray-400 font-medium uppercase tracking-widest">Effective Date: {lastUpdated}</p>
        </header>
        
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p>
              At <strong>SwiftPDF</strong>, accessible from <a href="https://swiftpdf.cloud" className="text-red-600 hover:underline">https://swiftpdf.cloud</a>, 
              the privacy of our visitors is our highest priority. This Privacy Policy document outlines the types of 
              information collected and how we utilize it to provide a secure PDF processing experience.
            </p>
          </div>

          <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
            <h2 className="text-2xl font-bold text-red-900 mb-4">2. Document & File Privacy</h2>
            <p className="text-red-800">
              <strong>We do not store your documents.</strong> SwiftPDF is designed to process files either directly 
              in your browser or via secure, encrypted temporary sessions. All uploaded files are 
              automatically and permanently deleted from our servers within <strong>60 minutes</strong> of processing. 
              We do not claim ownership, copy, or share your data with any third party.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Google AdSense & DoubleClick Cookie</h2>
            <p className="mb-4">
              Google is a third-party vendor on our site. It uses cookies, known as DoubleClick cookies, 
              to serve ads based on your visit to <strong>SwiftPDF.cloud</strong> and other sites on the internet.
            </p>
            <p>
              Visitors can choose to decline the use of the DoubleClick cookie by visiting the 
              Google Ad and Content Network Privacy Policy at: 
              <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-red-600 underline block mt-2">
                https://policies.google.com/technologies/ads
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Log Files & Analytics</h2>
            <p>
              SwiftPDF follows standard log file procedures. These files capture IP addresses, browser types, 
              Internet Service Providers (ISP), date/time stamps, and referring pages. This data is used solely 
              for analyzing trends and administering the site; it is <strong>not</strong> linked to any 
              personally identifiable information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. GDPR & CCPA Compliance</h2>
            <p>
              We respect your data rights. Under the GDPR (General Data Protection Regulation) and 
              CCPA (California Consumer Privacy Act), users have the right to request data deletion, 
              access, and portability. Since we do not store personal profiles or long-term documents, 
              your risk is minimized by design.
            </p>
          </div>

          <footer className="pt-10 border-t border-gray-100 mt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-2">6. Contact Us</h2>
            <p>If you have any questions regarding this policy, please contact us at <strong>support@swiftpdf.cloud</strong>.</p>
          </footer>
        </section>
      </div>
    </div>
  );
}