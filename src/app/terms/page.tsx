// app/terms/page.tsx
export default function TermsOfService() {
  return (
   <div className="max-w-4xl mx-auto py-20 px-6 text-gray-700">
  <h1 className="text-4xl font-black mb-8 text-gray-900">
    Terms & Conditions
  </h1>

  <div className="space-y-6">

    <p>
      By accessing or using SwiftPDF, you agree to be bound by these Terms &
      Conditions, all applicable laws, and regulations. If you do not agree
      with any part of these terms, you should not use our services.
    </p>

    <p>
      You are responsible for ensuring compliance with local laws applicable in
      your jurisdiction while using our platform.
    </p>

    {/* Use License */}
    <h2 className="text-2xl font-bold">Use of Service</h2>
    <p>
      SwiftPDF provides free online document tools for personal and commercial
      use. You are allowed to use our services for lawful purposes only.
    </p>

    <p>
      You agree not to misuse, copy, reverse engineer, or attempt to extract
      the source code, algorithms, or infrastructure of the platform.
    </p>

    <p>
      Any attempt to disrupt, overload, or exploit the system is strictly
      prohibited.
    </p>

    {/* Privacy & Data Handling */}
    <h2 className="text-2xl font-bold">Privacy & Data Handling</h2>
    <p>
      SwiftPDF respects your privacy. We do not permanently store uploaded
      files. All documents are processed temporarily and automatically deleted
      shortly after processing.
    </p>

    <p>
      We do not sell, share, or misuse user data. File processing is strictly
      limited to the requested operation.
    </p>

    {/* Security */}
    <h2 className="text-2xl font-bold">Security</h2>
    <p>
      We use secure encryption (SSL) to protect data during transfer. While we
      take strong security measures, we cannot guarantee absolute security over
      internet-based transmissions.
    </p>

    {/* Disclaimer */}
    <h2 className="text-2xl font-bold text-red-600">Disclaimer</h2>
    <p>
      The services and materials provided by SwiftPDF are offered on an "as is"
      and "as available" basis. We make no warranties, expressed or implied,
      regarding accuracy, reliability, or availability of the service.
    </p>

    <p>
      SwiftPDF disclaims all liability for any direct or indirect damages
      resulting from the use or inability to use our services.
    </p>

    {/* Limitation of Liability */}
    <h2 className="text-2xl font-bold">Limitation of Liability</h2>
    <p>
      SwiftPDF shall not be held responsible for any loss, damage, or data
      issues arising from the use of our platform, including but not limited to
      file corruption, service interruptions, or processing errors.
    </p>

    {/* User Responsibility */}
    <h2 className="text-2xl font-bold">User Responsibility</h2>
    <p>
      Users are solely responsible for the content they upload. You must ensure
      that files do not contain illegal, harmful, copyrighted, or restricted
      material.
    </p>

    {/* Changes */}
    <h2 className="text-2xl font-bold">Changes to Terms</h2>
    <p>
      We may update or modify these Terms & Conditions at any time without prior
      notice. Continued use of SwiftPDF after changes means you accept the
      updated terms.
    </p>

    {/* Final */}
    <h2 className="text-2xl font-bold">Contact</h2>
    <p>
      If you have any questions regarding these Terms & Conditions, you may
      contact us at <strong>support@swiftpdf.cloud</strong>.
    </p>

  </div>
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Terms and Conditions | SwiftPDF",
      "description": "The official terms of service for SwiftPDF. Learn about your rights, our service usage policies, and our commitment to document security.",
      "url": "https://swiftpdf.cloud/terms",
      "mainEntity": {
        "@type": "ServiceChannel",
        "serviceType": "Legal Terms",
        "name": "SwiftPDF Terms of Service",
        "provider": {
          "@type": "Organization",
          "name": "SwiftPDF",
          "url": "https://swiftpdf.cloud"
        }
      }
    }),
  }}
/>
</div>
  );
}