import RelatedTools from "../components/tools/RelatedTools";
import FeatureBenefits from "../components/tools/FeatureBenefits";
import { Sparkles } from "lucide-react";
import FaqSection from "../components/systemUI/FaqSection";

export default function Home() {
  const faqs = [
  {
    question: "Are my PDF files safe on swiftpdf?",
    answer:
      "Yes. We handle files in a way. We use the servers memory to process files. This means we do not save files in a database. We also do not keep your documents forever. * All temporary uploads are removed away. This is done automatically by our system. It uses cron jobs to purge files in time. Files are not stored permanently on our servers. We make sure files are deleted quickly."
  },
  {
    question: "Can I convert heavy image files to PDF?",
    answer:
      "Our engine is really good at taking files like JPG and PNG and WebP and turning them into PDF documents that work well on the web. It does this without making the pictures look bad. Our engine makes sure the PDF documents are good, for the web. Our engine takes care of JPG and PNG and WebP files."
  },
  {
    question: "Why is this service free?",
    answer:
      "We want to make PDF tools easy to use for everyone. Our website is free because we get money from ads and people who help us so we do not charge the people who use our PDF tools."
  },
  {
    question: "How does this help users?",
    answer:
      "We make it easy for students and professionals and startups to manage their documents. We do this by giving them tools that they can really count on. The best part is that they do not have to buy any software to use these tools. Our document management tools are free and reliable, for students and professionals and startups."
  }
];
  return (
    <div className="min-h-screen bg-slate-50/50 pb-20 selection:bg-red-100 selection:text-red-900">
      <div className="max-w-6xl mx-auto px-4 pt-16">
        <header className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <span className="flex items-center gap-2 bg-white border border-red-100 shadow-sm px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-red-600">
              <Sparkles size={14} className="fill-red-600" /> 100% Secure &
              Cloud Based
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
            Free Online <span className="text-red-600">PDF Tools</span>
          </h1>

          <h2 className="text-slate-500 text-xl max-w-4xl mx-auto font-medium leading-relaxed">
            You can do lots of things with your documents. For example you can
            convert them edit them and manage your files. The best part is that
            you can do all of this in your browser. You do not have to install
            anything on your computer. This way you can work with your documents
            in an secure way. Document workflows are free, for everyone. You can
            convert documents edit documents. Manage documents without any
            hassle.
          </h2>
        </header>

        <section aria-label="Available PDF Tools" className="mb-20">
          <RelatedTools />
        </section>

        <section aria-label="Features and Benefits" className="mb-20">
          
        </section>

        <section className="bg-white rounded-[40px] p-10 border border-red-50/50 shadow-[0_20px_50px_rgba(220,38,38,0.03)] mb-16">
          <h3 className="text-xl font-black text-slate-900 mb-6">
            Why Choose swiftpdf for Your PDF Management?
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-slate-600 text-lg leading-relaxed">
            <p>
              Doing business paperwork should not take a lot of time. If you
              need to put PDF files or take out certain pages with our tool that
              splits PDF files or change scans into text using a special reader
              swiftpdf makes it happen really fast right in your browser. You do
              not have to sign up for it.
            </p>
            <p>
              We care about security. All files that people upload to our server
              are kept safe with encryption from start to finish. We also
              automatically delete these files from our storage area after we
              are done with them. This is what we do to meet the rules that're
              in place to protect peoples private information on the internet.
              Security is very important, to us. We care about security. All
              files that people upload to our server are kept safe with
              encryption from start to finish. We also automatically delete
              these files from our storage area after we are done with them.
              This is what we do to meet the rules that're in place to protect
              peoples private information on the internet. Security is very
              important, to us.
            </p>
          </div>
        </section>

        <FaqSection faqs={faqs} />
      </div>
    </div>
  );
}
