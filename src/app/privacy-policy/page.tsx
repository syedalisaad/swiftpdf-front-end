import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SwiftPDF - Your Document Security Matters",
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
              >
                https://swiftpdf.cloud
              </a>
              , <br />
              We really care about keeping our visitors information Here is our
              Privacy Policy. It explains what kinds of information we gather
              and how we use it to make sure your PDF processing is safe and
              secure. We want to make sure you know how we handle your
              information when you use SwiftPDF. This policy is important to us,
              at SwiftPDF.
            </p>
          </div>

          <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
            <h2 className="text-2xl font-bold text-red-900 mb-4">
              2. Document & File Privacy
            </h2>
            <p className="text-red-800">
              We do not keep your documents on our system. The SwiftPDF system
              is made to work on your files in your browser or, through safe and
              secret temporary sessions. Any files you upload are automatically
              deleted from our servers for good after 60 minutes of working on
              them. We do not say that your data belongs to us we do not make
              copies of it and we do not give your data to anyone. SwiftPDF is
              designed to protect your files. We take this very seriously.
              SwiftPDF does not share your data with any company or person.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Google AdSense & DoubleClick Cookie
            </h2>
            <p className="mb-4">
              Google is a company that helps us with ads, on our site. It uses
              something called cookies, DoubleClick cookies to show ads to
              people who visit SwiftPDF.cloud and other websites on the
              internet. Google uses these DoubleClick cookies to figure out what
              ads to show you when you visit SwiftPDF.cloud and other sites. If
              you do not want Google to use DoubleClick cookies you can say no
              by going to the Google Ad and Content Network Privacy page.
            </p>
            <p>
              Policy at:
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 underline block mt-2"
              >
                https://policies.google.com/technologies/ads
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Log Files & Analytics
            </h2>
            <p>
              SwiftPDF does what most people do when it comes to log files. They
              keep a record of things like the internet address you are coming
              from the kind of browser you use who your internet provider's when
              you visited and where you came from. SwiftPDF uses this
              information to see what is popular and to make sure the site is
              working properly. They do not use this information to find out who
              you are as a person. SwiftPDF just uses this data to understand
              what people like, about SwiftPDF and to make SwiftPDF better.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. GDPR & CCPA Compliance
            </h2>
            <p>
              We really care about your information. The law says that you have
              rights when it comes to your data like the GDPR and the CCPA.
              These laws say that you can ask us to delete your data look at
              your data and even take your data else. We do not keep a lot of
              information, about you like profiles or documents so you do not
              have to worry much about your data being hurt.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Data Security
            </h2>

            <p>
              SwiftPDF takes the security of your data seriously. They use the
              ways to keep your information safe when they are working with it.
              When you send files to SwiftPDF they make sure that everything is
              locked and secure. They use something called HTTPS connections to
              keep your data safe when you are uploading or downloading files
              from SwiftPDF. This means your SwiftPDF information is protected
              the time.
            </p>

            <p className="mt-3">
              We process the files, in temporary memory. The uploaded files are
              never stored permanently on our servers. When we are done with the
              operation the uploaded files are automatically removed. This is so
              that the uploaded files cannot be accessed or used without
              permission.
            </p>

            <p className="mt-3">
              We always keep an eye on our systems at SwiftPDF. Make changes to
              them so that people who use SwiftPDF have a safe and reliable
              experience. We want to make sure that SwiftPDF is secure, for all
              users of SwiftPDF.
            </p>
          </div>

          <footer className="pt-10 border-t border-gray-100 mt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              7. Contact Us
            </h2>
            <p>
              If you have any questions about this policy, please reach out to
              us at <strong>support@swiftpdf.cloud</strong> or connect with us
              on{" "}
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
    </div>
  );
}
