import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Your Document Security Matters",
  description:
    "Learn how SwiftPDF handles your data, our commitment to document privacy, and our use of Google AdSense cookies.",
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
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-gray-900 tracking-tight">
            Privacy <span className="text-red-600">Policy</span>
          </h1>
          <p className="text-sm text-gray-400 font-medium uppercase tracking-widest">
            Effective Date: {lastUpdated}
          </p>
        </header>

        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Introduction
            </h2>
            <p>
              At <strong>SwiftPDF</strong>, which you can find at{" "}
              <a
                href="https://swiftpdf.cloud"
                className="text-red-600 hover:underline"
                aria-label="SwiftPDF Homepage"
              >
                swiftpdf.cloud
              </a>
              . We really care about keeping our visitors information safe. Here
              is our Privacy Policy. It explains what kinds of information we
              gather and how we use it to make sure your PDF processing is safe
              and secure.
            </p>
          </div>

          <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
            <h2 className="text-2xl font-bold text-red-900 mb-4">
              2. Document & File Privacy
            </h2>
            <p className="text-red-800">
              We do not keep your documents on our system. Any files you upload
              are automatically deleted from our servers for good after 60
              minutes. SwiftPDF is designed to protect your files; we do not
              share your data with any company or person.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Google AdSense & DoubleClick Cookie
            </h2>
            <p className="mb-4">
              Google uses DoubleClick cookies to figure out what ads to show you
              when you visit our site. If you do not want Google to use these
              cookies, you can opt-out by visiting the official Google privacy
              page.
            </p>
            <p>
              Review the full policy at:{" "}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 underline inline-block"
              >
                How Google uses cookies in advertising
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Log Files & Analytics
            </h2>
            <p>
              SwiftPDF uses log files to see what is popular and ensure the site
              is working properly. This data (like browser type and IP) is not
              used to find out who you are as a person.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. GDPR & CCPA Compliance
            </h2>
            <p>
              Under GDPR and CCPA, you have the right to request deletion or
              access to your data. Since we do not store documents permanently,
              your data footprint remains minimal.
            </p>
          </div>

          <footer className="pt-10 border-t border-gray-100 mt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              6. Contact Us
            </h2>
            <p>
              If you have any questions, please reach out to us at{" "}
              <strong>support@swiftpdf.cloud</strong> or connect with us on{" "}
              <a
                href="https://www.linkedin.com/company/swift-pdf-cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
              .
            </p>
          </footer>
        </section>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy",
            description:
              "Learn how SwiftPDF protects your data. We offer secure, browser-based PDF processing where your files are automatically deleted after conversion.",
            url: "https://swiftpdf.cloud/privacy-policy",
            mainEntity: {
              "@type": "PrivacyPolicy",
              name: "SwiftPDF Data Privacy & Security Policy",
              operatingRegion: "Worldwide",
              datePublished: "2026-01-01", // Update to your actual launch/update date
            },
          }),
        }}
      />
    </div>
  );
}
