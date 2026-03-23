import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-gray-100 bg-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {" "}
          {/* Brand Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-black text-gray-900">SwiftPDF</h2>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Fast, secure, and free online PDF tools. We process your files
              directly in your browser for maximum privacy.
            </p>
          </div>
          {/* Navigation */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-bold text-gray-800 text-xs uppercase tracking-widest mb-2">
              Company
            </h3>
            <Link
              href="/about"
              className="text-sm text-gray-500 hover:text-red-600 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-500 hover:text-red-600 transition-colors"
            >
              Contact
            </Link>
          </div>
          {/* Legal - CRITICAL FOR ADSENSE */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-bold text-gray-800 text-xs uppercase tracking-widest mb-2">
              Legal
            </h3>
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-500 hover:text-red-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-500 hover:text-red-600 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
          <div className="flex flex-col space-y-3">
            <h3 className="font-bold text-gray-800 text-xs uppercase tracking-widest mb-2">
              Resources
            </h3>
            <Link
              href="/sitemap"
              className="text-sm text-gray-500 hover:text-red-600 transition-colors"
            >
              Site Map (All Tools)
            </Link>
            <Link
              href="/sitemap.xml"
              className="text-sm text-gray-500 hover:text-red-600 transition-colors"
            >
              XML Sitemap
            </Link>
            <p className="text-[10px] text-gray-400 mt-4 leading-tight italic">
              * This site uses cookies for analytics and personalized ads via
              Google AdSense.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            © {currentYear} SwiftPDF.cloud. All rights reserved.
          </p>
          <div className="flex gap-4 text-[10px] font-bold text-gray-300 uppercase tracking-tighter">
            <span>Secure SSL</span>
            <span>No Data Storage</span>
            <span>Cloud Powered</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
