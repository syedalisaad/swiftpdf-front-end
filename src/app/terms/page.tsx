// app/terms/page.tsx
export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6 text-gray-700">
      <h1 className="text-4xl font-black mb-8 text-gray-900">Terms of Service</h1>
      <div className="space-y-6">
        <p>By accessing SwiftPDF, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
        
        <h2 className="text-2xl font-bold">Use License</h2>
        <p>SwiftPDF provides free document tools. You may use these tools for personal or commercial purposes. However, you may not attempt to decompile or reverse engineer any software contained on SwiftPDF's website.</p>

        <h2 className="text-2xl font-bold text-red-600">Disclaimer</h2>
        <p>The materials on SwiftPDF's website are provided on an 'as is' basis. SwiftPDF makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.</p>
      </div>
    </div>
  );
}