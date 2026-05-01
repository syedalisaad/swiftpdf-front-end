import Link from "next/link";
import { Metadata } from "next";
import { PDF_TOOLS } from "@/src/config/tools";

export const metadata: Metadata = {
  title: "Sitemap - All PDF Tools",
  description: "A complete list of all free online PDF tools provided by SwiftPDF, including converters, mergers, and editors.",
};

export default function HtmlSitemap() {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12 border-b border-gray-200 pb-8">
          <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">
            SwiftPDF <span className="text-red-600">Sitemap</span>
          </h1>
          <p className="text-lg text-gray-600">
            Explore our complete suite of document management tools.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Dynamic Tool Links */}
          {PDF_TOOLS.map((tool) => (
            <Link 
              key={tool.id} 
              href={tool.href}
              className="group p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 transition-all"
            >
              <h2 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-2">
                {tool.name}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                {tool.desc}
              </p>
            </Link>
          ))}

          {/* Static Legal & Support Links */}
          <div className="p-6 bg-gray-100/50 rounded-2xl border border-dashed border-gray-300">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Site Information</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-red-600 transition-colors font-medium">
                  → Home Page
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-600 hover:text-red-600 transition-colors font-medium">
                  → Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-red-600 transition-colors font-medium">
                  → About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}