import Link from "next/link";
import { Linkedin } from "lucide-react"; // Make sure lucide-react is installed

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-gray-100 bg-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-black text-gray-900">SwiftPDF</h2>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Fast, secure, and free online PDF tools. We process your files
              directly in your browser for maximum privacy.
            </p>
          </div>

          {/* Navigation & Contact */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-bold text-gray-800 text-xs uppercase tracking-widest mb-2">
              Support
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
              Contact Support
            </Link>
            {/* The "Best Way" Call to Action */}
            <div className="pt-2">
              <p className="text-[11px] font-bold text-gray-400 uppercase mb-1">Report Issues:</p>
              <a 
                href="https://www.linkedin.com/company/swift-pdf-cloud" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-blue-600 font-semibold hover:text-blue-800 transition-colors"
              >
                <Linkedin size={16} />
                DM on LinkedIn
              </a>
            </div>
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

          {/* Resources & SEO */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-bold text-gray-800 text-xs uppercase tracking-widest mb-2">
              Resources
            </h3>
            <Link
              href="/site-map"
              className="text-sm text-gray-500 hover:text-red-600 transition-colors"
            >
              Site Map (All Tools)
            </Link>
            <Link
              href="/sitemap.xml"
              target="_blank"
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
            © {currentYear} SwiftPDF.cloud. 
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