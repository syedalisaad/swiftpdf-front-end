import RelatedTools from '../components/tools/RelatedTools';
import FeatureBenefits from '../components/tools/FeatureBenefits';
import { Sparkles } from 'lucide-react';


export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50/50 pb-20 selection:bg-red-100 selection:text-red-900">
      
      {/* 2. Structured JSON-LD Schema (Tells Google exactly what this web app is) */}
    

      <div className="max-w-6xl mx-auto px-4 pt-16">
        
        {/* --- HERO SECTION --- */}
        <header className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <span className="flex items-center gap-2 bg-white border border-red-100 shadow-sm px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-red-600">
              <Sparkles size={14} className="fill-red-600" /> 100% Secure & Cloud Based
            </span>
          </div>
          
          {/* SEO Optimized H1 with primary target keywords */}
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
            Free Online <span className="text-red-600">PDF Tools</span>
          </h1>
          
          <h2 className="text-slate-500 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Fast, secure, and free document workflows for everyone. Convert, edit, 
            and manage your files directly in your browser without installations.
          </h2>
        </header>

        {/* --- GRID OF TOOLS (Make sure RelatedTools uses standard grid & anchor tags) --- */}
        <section aria-label="Available PDF Tools" className="mb-20">
          <RelatedTools />
        </section>

        <section aria-label="Features and Benefits" className="mb-20">
          <FeatureBenefits />
        </section>

        {/* --- DENSE SEO CONTENT BLOCK (Search Engines need Text to rank you) --- */}
        <section className="bg-white rounded-[40px] p-10 border border-red-50/50 shadow-[0_20px_50px_rgba(220,38,38,0.03)] mb-16">
          <h3 className="text-2xl font-black text-slate-900 mb-6">
            Why Choose swiftpdf for Your PDF Management?
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-slate-600 text-sm leading-relaxed">
            <p>
              Managing business paperwork shouldn't take hours. Whether you need to 
              <strong> merge PDF files</strong>, extract specific pages with our 
              <strong> split PDF engine</strong>, or convert scans using optical recognition, 
              swiftpdf brings local desktop speed straight to your browser. No registration required.
            </p>
            <p>
              Security is our benchmark. All files uploaded to our server are treated with end-to-end 
              encryption and automatically wiped from our temporary caching directory after processing, 
              meeting standard regulatory measures for digital privacy.
            </p>
          </div>
        </section>

        {/* --- ACCORDION FAQ BLOCK (Captures People-Also-Ask queries) --- */}
        <section className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-3xl border border-slate-100 hover:border-red-100 transition-colors">
              <h4 className="font-bold text-slate-800 mb-2">Are my PDF files safe on swiftpdf?</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Yes. We process files through server-side memory streams and do not permanently store your documents. All temporary uploads are purged in real-time using automated crons.</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-100 hover:border-red-100 transition-colors">
              <h4 className="font-bold text-slate-800 mb-2">Can I convert heavy Image files to PDF?</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Yes. Our engine scales heavy uncompressed graphical formats (JPG, WebP, PNG) into standardized web-scaled single document exports.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}