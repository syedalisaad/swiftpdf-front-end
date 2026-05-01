import Schema from "@/src/components/Schema";
import ATSChecker from "@/src/components/systemUI/ATSChecker";
import FaqSection from "@/src/components/systemUI/FaqSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Your Resume Score | Free ATS CV Checker",
  description:
    "Free AI Resume Scanner for an instant ATS score. Analyze your resume against job descriptions to find missing keywords and boost your hiring chances.",
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
  const atsCheckerFaqs = [
    {
      question: "What is an ATS resume checker?",
      answer: `An ATS resume checker looks at your resume to see if it works well with Applicant Tracking Systems.

This is important because these systems are often used by companies to automatically screen resumes.

The checker helps make sure your resume meets the standards that hiring managers are looking for.

It also helps ensure your resume passes the automated screening process used by Applicant Tracking Systems.

So you can use an ATS resume checker to review your resume, against Applicant Tracking Systems.`,
    },
    {
      question: "How does an ATS checker work?",
      answer: `This thing looks at your resume to find words it checks the way it is laid out the order of things and how easy it is to read. Then it compares your resume with what the job's asking, for. After that it gives you a score. Tells you how you can make your resume better. It really helps with your resume and the job requirements so you know what to do to make it great.`,
    },
    {
      question: "Why is ATS optimization important?",
      answer: `Most companies use a computer program called ATS to sort through resumes.

This program helps them pick the ones.

To get picked you should make your resume in a way that the ATS likes.

That way you have a chance of getting past the first check and being chosen for an interview.

The ATS software looks for words and phrases.

So you should use those words in your resume.

It makes it more likely that the ATS will select your resume.

Companies use ATS to save time.

They get resumes and it is hard to look through them all.

The ATS helps them find the ones that're a good fit.

You want to make sure your resume gets past the ATS.

Then you have a chance of getting a job.`,
    },
    {
      question: "Can I check my resume against a job description?",
      answer: `Yes. You can upload your resume. Then paste a job description. This will show how well your resume matches the job.`,
    },
    {
      question: "What file formats are supported?",
      answer: `The tool looks at the layout and the headings and the fonts and the structure. This is to make sure that resumes are compatible with ATS systems. The tool checks all of these things to ensure that resumes work, with ATS systems.`,
    },
    {
      question: "Will my resume formatting be analyzed?",
      answer: `The tool looks at the layout and the headings and the fonts and the structure. This is to make sure that resumes are compatible with ATS systems. The tool checks all of these things to ensure that resumes work, with ATS systems.`,
    },
    {
      question: "Does the ATS checker suggest improvements?",
      answer: `You will receive ideas to make your keywords better to make the formatting of your resume look good and to make the overall quality of your resume good. The suggestions you get will be, about improving your keywords and the overall resume quality.`,
    },
    {
      question: "Is my resume data secure?",
      answer: `Yes. We process your files in a way. They get automatically deleted once we are done analyzing them.`,
    },
    {
      question: "Do I need to install any software?",
      answer: `The ATS checker does all of its work, on the internet in your browser. It is something that you can use online. The ATS checker is a thing that works in your browser.`,
    },
    {
      question: "How long does it take to analyze a resume?",
      answer: `When people look at resumes they usually do it quickly it only takes a few seconds. This is because they have to look at a lot of resumes. The time it takes can be different depending on how big the file's how complicated it is. Most resumes are looked at within seconds depending on the file size of the resumes and the complexity of the resumes.`,
    },

    // 🔥 EXTRA HIGH-INTENT FAQs
    {
      question: "Can I improve my resume score after checking?",
      answer: `Yes. You can change your resume based on the suggestions. Then you can re-check it to make your ATS score better.

You can update your resume again to improve your ATS score.`,
    },
    {
      question: "Does the ATS checker detect missing keywords?",
      answer: `Yes. It finds missing keywords and weak keywords.

These are based on the job description.

The goal is to make my resume more relevant.

It checks the job description and my resume.

Then it suggests keywords to add.

This helps me improve my chances.

The tool uses the job description to identify these keywords.

It tells me which keywords are missing.

It also tells me which keywords are weak.

I add these keywords to my resume.

This makes my resume more relevant, to the job.`,
    },
    {
      question: "Is this ATS checker free to use?",
      answer: `Yes. SwiftPDF has a free ATS resume checker. You do not need to sign up to use it.`,
    },
    {
      question: "Will my resume pass all ATS systems after optimization?",
      answer: `When you are looking for a job your resume is really important. Optimizing your resume can make a difference. It can help your resume get through the filters that companies use to resumes. This is called an ATS filter. So optimizing your resume is a way to increase your chances of getting an interview. Optimizing your resume is something you should do to help your resume get noticed.`,
    },
  ];
  return (
    <div className="min-h-screen bg-[#F9FAFB] py-16">
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
            Optimize your resume for Applicant Tracking Systems. Our tool checks
            your resume. Quickly finds missing skills and formatting issues. It
            helps you fix them fast. So you can make your resume for Applicant
            Tracking Systems. This way Applicant Tracking Systems can easily
            notice your resume. The tool is quick and easy to use. It scans your
            resume to see if it meets Applicant Tracking Systems requirements.
            You can use it to improve your resume, for Applicant Tracking
            Systems.
          </p>
        </header>

        {/* The Tool */}
        <section aria-label="Resume Scanner Tool">
          <ATSChecker />
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">
            How to <span className="text-red-600">Optimize Your CV</span> in 3
            Steps
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center font-black text-xl mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Upload Resume</h3>
              <p className="text-gray-500 text-sm">
                Please upload your resume to our scanner. You can upload it as a
                PDF or a Word document. Our scanner is very safe. It will look
                at your resume.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center font-black text-xl mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Paste Job Desc</h3>
              <p className="text-gray-500 text-sm">
                Add job description to find missing keywords. This will help
                identify skills. Job description is key, to finding candidate.
                It highlights qualifications. We need to add job description.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center font-black text-xl mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Get Your Score</h3>
              <p className="text-gray-500 text-sm">
                You will get a score that tells you how well things work
                together and some tips to make them work better. You will find
                out how compatible things are and what you can do to improve
                them. Receive a compatibility score and optimization tips to
                help you make things work perfectly.
              </p>
            </div>
          </div>
        </section>
        <FaqSection faqs={atsCheckerFaqs} />
      </div>

      <Schema
        name="AI ATS Resume Checker - Get Your ATS Score for Free"
        description="Scan your resume against AI-powered Applicant Tracking Systems. Get a professional ATS score and tips to optimize your CV for job applications instantly."
        url="/ats-checker"
      />
    </div>
  );
}
