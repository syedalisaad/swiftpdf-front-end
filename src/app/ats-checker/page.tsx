import ATSChecker from "@/src/components/systemUI/ATSChecker";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free ATS Resume Checker | Score & Optimize Your CV | SwiftPDF",
  description:
    "Get an instant ATS compatibility score. Our AI scanner analyzes your resume against job descriptions to identify missing keywords and boost your hiring chances.",
  alternates: {
    canonical: "https://swiftpdf.cloud/ats-checker",
  },
  keywords: [
    "ATS resume checker",
    "resume keyword scanner",
    "CV ATS optimizer",
    "resume score checker",
    "job description matcher",
  ],
  openGraph: {
    title: "AI Resume Scanner - Free ATS Compatibility Check",
    description:
      "Is your resume getting filtered out? Scan it now to see your score.",
    url: "https://swiftpdf.cloud/ats-checker",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SwiftPDF ATS Checker Tool Preview",
      },
    ],
  },
};

export default function ATSPage() {
  return (
    <main className="min-h-screen bg-[#F9FAFB] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-12 text-center">
          <span className="px-4 py-1.5 bg-cyan-100 text-cyan-700 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">
            AI Powered Analysis
          </span>
          <h1 className="text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Free <span className="text-red-600">ATS Resume Checker</span> &
            Scanner
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-normal">
            Optimize your CV for **Applicant Tracking Systems**. Our AI scanner
            identifies
            <strong> missing skills</strong> and formatting issues in seconds.
          </p>
        </header>

        {/* The Tool */}
        <section aria-label="Resume Scanner Tool">
          <ATSChecker />
        </section>

        {/* NEW: Educational Content Section (Fixes "Low Value Content" flag) */}
        <section className="mt-24 max-w-4xl mx-auto border-t border-gray-200 pt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How Applicant Tracking Systems (ATS) Work
          </h2>

          <div className="grid md:grid-cols-2 gap-10 text-gray-700 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Why is an ATS Score Important?
              </h3>
              <p>
                Over 95% of Fortune 500 companies use ATS software to filter
                candidates. If your resume lacks the specific **keywords** found
                in the job description, human recruiters may never even see your
                application.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How to Optimize Your CV
              </h3>
              <ul className="list-disc ml-5 space-y-2">
                <li>Use standard headings (Experience, Education).</li>
                <li>Avoid complex graphics or tables that confuse AI.</li>
                <li>
                  Match your **Skill Keywords** exactly as they appear in the
                  job post.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-4">
              Frequently Asked Questions
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900">
                  Is this resume checker free?
                </h4>
                <p className="text-sm text-gray-600">
                  Yes, SwiftPDF provides a 100% free ATS scan to help job
                  seekers improve their visibility.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Do you store my resume?
                </h4>
                <p className="text-sm text-gray-600">
                  Privacy is our priority. Resumes are processed in real-time
                  and are not stored permanently on our servers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "SwiftPDF ATS Resume Checker",
            url: "https://swiftpdf.cloud/ats-checker",
            applicationCategory: "BusinessApplication",
            browserRequirements: "Requires JavaScript",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            description:
              "Analyze your resume against job descriptions to get an ATS compatibility score and keyword suggestions.",
          }),
        }}
      />
    </main>
  );
}
