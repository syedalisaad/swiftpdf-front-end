

export default function FaqSection() {
 

  return (
    <section className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-black text-slate-900 mb-8 text-center">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-3xl border border-slate-100 hover:border-red-100 transition-colors">
              <h4 className="font-bold text-slate-800 mb-2">
                Are my PDF files safe on swiftpdf?
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Yes. We process files through server-side memory streams and do
                not store them in a database or keep your documents permanently.
                All temporary uploads are purged in real-time via automated cron
                jobs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-100 hover:border-red-100 transition-colors">
              <h4 className="font-bold text-slate-800 mb-2">
                Can I convert heavy Image files to PDF?
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Yes. Our engine scales heavy uncompressed graphical formats
                (JPG, WebP, PNG) into standardized web-scaled single document
                exports.
              </p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-100 hover:border-red-100 transition-colors">
              <h4 className="font-bold text-slate-800 mb-2">
                Why you are providing this service totally free?
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                We believe in making powerful PDF tools accessible to everyone.
                Our goal is to provide a seamless, secure, and free solution for
                all your PDF needs. and our plan to earn and manage our
                expensive through the Google ads and sponsorships.
              </p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-100 hover:border-red-100 transition-colors">
              <h4 className="font-bold text-slate-800 mb-2">
                How do we help you and what are the benefits?
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Our mission is to make document management easier and more
                efficient. By providing these services completely free, we
                ensure that high-quality tools are accessible to
                everyone—especially students and those starting their careers
                who may not have the budget for expenses premium software.
              </p>
            </div>
          </div>
        </section>
  );
}

 
 