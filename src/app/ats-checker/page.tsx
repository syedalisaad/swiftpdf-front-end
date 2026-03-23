import ATSChecker from "@/src/components/systemUI/ATSChecker";

export const metadata = {
  title: "Free ATS Resume Checker | Score & Optimize Your CV | TalentBees",
  description:
    "Get an instant ATS compatibility score. Our free tool analyzes your resume against job descriptions to identify missing keywords and boost your hiring chances.",
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "TalentBees ATS Resume Checker",
  url: "https://swiftpdf.cloud/ats-checker",
  applicationCategory: "BusinessApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Analyze your resume against job descriptions to get an ATS compatibility score.",
};

export default function ATSPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-12 text-center">
          <span className="px-4 py-1.5 bg-cyan-100 text-cyan-700 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">
            AI Powered Analysis
          </span>
          <h1 className="text-5xl font-black text-gray-900 mb-4 tracking-tight">
            ATS Resume <span className="text-red-600">Checker</span>
          </h1>
          <h2 className="text-gray-500 text-lg max-w-2xl mx-auto font-normal">
            Boost your <strong>interview chances</strong> by optimizing your CV
            for Applicant Tracking Systems. Our AI scanner identifies{" "}
            <strong>missing skills </strong>
            and formatting issues in seconds.
          </h2>
        </header>

        <ATSChecker />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
