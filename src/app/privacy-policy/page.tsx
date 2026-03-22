// app/privacy-policy/page.tsx
export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6 text-gray-700 leading-relaxed">
      <h1 className="text-4xl font-black mb-8 text-gray-900">Privacy Policy</h1>
      <p className="mb-4">Last Updated: March 2026</p>
      
      <section className="space-y-6">
        <p>At <strong>SwiftPDF</strong>, accessible from https://swiftpdf.cloud, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by SwiftPDF and how we use it.</p>
        
        <h2 className="text-2xl font-bold mt-8">Google AdSense & DoubleClick Cookie</h2>
        <p>Google is one of the third-party vendors on our site. It also uses cookies, known as DoubleClick cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of the DoubleClick cookie by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" className="text-red-600 underline">https://policies.google.com/technologies/ads</a></p>

        <h2 className="text-2xl font-bold mt-8">Log Files</h2>
        <p>SwiftPDF follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>

        <h2 className="text-2xl font-bold mt-8">Document Privacy</h2>
        <p>We do not store your documents. All files uploaded to SwiftPDF are processed in-browser or via secure temporary server sessions and are automatically deleted within one hour of processing. We do not look at, copy, or share your data.</p>
      </section>
    </main>
  );
}