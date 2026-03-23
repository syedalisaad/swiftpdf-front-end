// app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-black mb-8 text-gray-900 text-center">About SwiftPDF</h1>
      <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-6 text-gray-600">
        <p className="text-lg">
          SwiftPDF was founded with a simple mission: <strong>To make professional-grade PDF tools accessible to everyone, for free.</strong>
        </p>
        <p>
          We realized that most PDF editors are either too expensive or require clunky software installations. Our platform uses high-performance cloud technology to ensure your files are processed in milliseconds, right in your browser.
        </p>
        
        <div className="pt-10 border-t border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p>Have questions or feedback? We’d love to hear from you. Reach out to our technical team:</p>
          <p className="mt-4 font-bold text-red-600">Email: support@swiftpdf.cloud</p>
          <p className="text-sm text-gray-400 mt-2">Response time: Usually within 24–48 hours.</p>
        </div>
      </div>
    </div>
  );
}