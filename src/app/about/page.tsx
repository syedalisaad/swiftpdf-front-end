// app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-black mb-8 text-gray-900 text-center">
        About SwiftPDF
      </h1>

      <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-6 text-gray-600">
        {/* Intro */}
        <p className="text-lg">
          SwiftPDF was started with an idea: to make good quality PDF tools
          available to everyone for no cost.
        </p>

        <p>
          We found out that most tools for documents are either very pricey,
          hard to use or need software programs to be installed. SwiftPDF makes
          things easier by giving us a safe and totally online platform that
          works right away without any problems. SwiftPDF is, about making
          things simple.
        </p>

        {/* Mission */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Our Mission</h2>
          <p>
            Our goal is to make it easy for people to manage documents. We do
            this by giving them tools for working with PDF files. These tools
            are simple to use so people do not need to know a lot, about
            technology. We want to help students, professionals and businesses
            by giving them trustworthy solutions for working with PDF files. Our
            PDF tools are what we are focusing on to make this happen.
          </p>
        </div>

        {/* Vision */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Our Vision</h2>
          <p>
            We imagine a world where handling documentss easy, quick and
            available to everyone. SwiftPDF wants to be a platform that people
            trust, for their daily document tasks.
          </p>
        </div>

        {/* Why SwiftPDF */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Why Choose SwiftPDF?
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              You can use these tools for free. They do not cost you any money.
            </li>
            <li>There are no charges, with these tools.</li>
            <li>You do not need to sign up or make an account to use them.</li>
            <li>These tools work fast because they use the cloud.</li>
            <li>
              The tools keep your files safe. Then they delete them
              automatically.
            </li>
            <li>You can use these tools on any device or browser you like.</li>
            <li>These free tools really work on all devices and browsers.</li>
          </ul>
        </div>

        {/* Security */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Security & Privacy
          </h2>
          <p>
            We care about keeping your information private. All files are
            scrambled to keep them safe while they are being sent to us. These
            files are also automatically deleted from our computers once we are
            done working with them. We do not keep, follow or look at your
            documents for longer than we need to finish processing them.
          </p>
        </div>

        {/* Tech */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            How It Works
          </h2>
          <p>
            SwiftPDF uses fast computers on the internet to work on files right
            away. Everything happens in your browser. You can upload a file
            SwiftPDF can process the file Then you can download the file all
            within a few seconds. SwiftPDF makes this happen quickly.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">
            All-in-One Free PDF Toolkit
          </h3>
          <p>
            SwiftPDF is a platform that makes it easy to do things with PDFs.

It has a lot of tools that help you work with PDFs like changing PDFs into formats editing PDFs and putting PDFs together.

You can use SwiftPDF to do lots of things with PDFs.

The platform can also split PDFs into pieces, which is really helpful when you need to work with PDFs.

Some of the things that SwiftPDF doesre really smart like helping you with PDFs.

You can use SwiftPDF in your browser, which's pretty convenient when you need to work with PDFs.

You do not have to install any software on your computer to use SwiftPDF, which's great when you need to work with PDFs.

SwiftPDF does not make you create an account to use SwiftPDF so you can just start working with PDFs.

The people who made SwiftPDF want to make it easy for you to work with documents, like PDFs.

Their goal is to make SwiftPDF a safe and easy way for everyone to work with documents, PDFs.

SwiftPDF is trying to help people handle their documents quickly so SwiftPDF is a help when you need to work with PDFs.

SwiftPDF is a tool to use when you need to work with PDFs because SwiftPDF makes it easy to do things with PDFs.
          </p>
        </div>

        {/* Contact */}
        <div className="pt-10 border-t border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p>
            Have questions. Need to give feedback? We really want to hear from
            you. Reach out to our team:
          </p>

          <p className="mt-4 font-bold text-red-600">
            Email: support@swiftpdf.cloud
          </p>

          <p className="text-sm text-gray-400 mt-2">
            Response time: Usually within 24–48 hours.
          </p>
        </div>
      </div>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SwiftPDF",
      "url": "https://swiftpdf.cloud",
      "logo": "https://swiftpdf.cloud/logo.png", // Replace with your actual logo URL
      "description": "SwiftPDF is a leading provider of free, secure, and web-based PDF management tools, helping users worldwide merge, split, and convert documents instantly.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Karachi",
        "addressCountry": "PK"
      },
      "sameAs": [
        "https://www.linkedin.com/company/swift-pdf-cloud"
        // Add other social links here
      ]
    }),
  }}
/>
    </div>
  );
}
