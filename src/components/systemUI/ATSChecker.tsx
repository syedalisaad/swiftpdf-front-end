"use client";

import React, { useState } from "react";
import { Upload, AlertCircle, Loader2, X } from "lucide-react";
import AdBanner from "../tools/AdBanner";
import RelatedTools from "../tools/RelatedTools";
import FeatureBenefits from "../tools/FeatureBenefits";

type ResultType = {
  score: number;
  missing_keywords: string[];
  matched_keywords: string[];
};

export default function ATSChecker() {
  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ResultType | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file || !jobDescription)
      return setError("Resume & Job Description required");

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("job_description", jobDescription);

    try {
      const res = await fetch("https://api.swiftpdf.cloud/analyze-resume", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Server error");

      const data = await res.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-white">
      <div className="mb-2 border-b border-gray-50 pb-4">
        <AdBanner dataAdSlot="YOUR_TOP_AD_SLOT_ID" dataAdFormat="horizontal" />
      </div>
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* LEFT: FORM */}
          <form
            onSubmit={handleUpload}
            className="bg-[#111] border border-white/10 rounded-xl p-6 space-y-6"
          >
            {/* Upload */}
            <div>
              <label className="text-sm text-gray-700 mb-2 block">
                Upload Resume (PDF)
              </label>

              {!file ? (
                <div className="border border-dashed border-gray-600 rounded-lg p-6 text-center relative hover:border-red-500 transition">
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <Upload className="mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-700">Click or drag file</p>
                </div>
              ) : (
                <div className="flex justify-between items-center border border-red-600 bg-[#1a1a1a] p-3 rounded-lg">
                  <span className="text-sm text-red-600 truncate">
                    {file.name}
                  </span>
                  <X
                    onClick={() => setFile(null)}
                    className="cursor-pointer text-red-600"
                  />
                </div>
              )}
            </div>

            {/* Job Description */}
            <div>
              <label className="text-sm text-gray-700 mb-2 block">
                Job Description
              </label>
              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                rows={6}
                className="w-full bg-[#121212] text-red-600 border border-white rounded-xl p-4 text-sm leading-relaxed placeholder:text-gray-500 
focus:ring-red-500/40 focus:border-red-500 
transition-all duration-200 resize-none"
                placeholder="Paste job description..."
              />
            </div>

            {/* Error */}
            {error && (
              <div className="text-red-600 text-sm flex gap-2">
                <AlertCircle size={16} /> {error}
              </div>
            )}

            {/* Button */}
            <button
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-medium transition flex justify-center items-center gap-2"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={18} />
              ) : (
                "Analyze Resume"
              )}
            </button>
          </form>

          {/* RIGHT: RESULT */}
          <div className="bg-[#111] border border-white/10 rounded-xl p-6 flex items-center justify-center">
            {!result && !loading && (
              <p className="text-gray-500 text-sm">Results will appear here</p>
            )}

            {loading && <Loader2 className="animate-spin text-red-500" />}

            {result && (
              <div className="w-full space-y-6">
                {/* Score */}
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-500">
                    {result.score}%
                  </div>
                  <p className="text-gray-400 text-sm">Match Score</p>
                </div>

                {/* Missing */}
                <div>
                  <h3 className="text-sm font-semibold text-red-600 mb-2">
                    Missing Keywords
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {result.missing_keywords.map((kw) => (
                      <span
                        key={kw}
                        className="text-xs bg-red-500/10 text-red-600 px-2 py-1 rounded"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Matched */}
                <div>
                  <h3 className="text-sm font-semibold text-green-600 mb-2">
                    Matched Keywords
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {result.matched_keywords.map((kw) => (
                      <span
                        key={kw}
                        className="text-xs bg-green-600/10 text-green-600 px-2 py-1 rounded"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <button
                  onClick={() => window.print()}
                  className="w-full bg-red-600 text-white-600 py-2 rounded-lg text-sm hover:bg-black hover:text-white transition"
                >
                  Download Report
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mb-2 border-b border-gray-50 pb-4">
        <AdBanner dataAdSlot="YOUR_TOP_AD_SLOT_ID" dataAdFormat="horizontal" />
      </div>
      <RelatedTools />
      <FeatureBenefits />
      <div className="max-w-4xl mx-auto mt-20 space-y-10 text-gray-300">
        <section>
          <h2 className="text-2xl font-bold text-gray-600 mb-3">
            What is an ATS Resume Checker?
          </h2>
          <p className="text-gray-600">
            An ATS (Applicant Tracking System) is software used by companies to
            filter resumes. Our ATS resume checker scans your CV and compares it
            with job descriptions to ensure your resume passes automated
            screening systems.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-600 mb-3">
            How to Improve Your ATS Score
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Use keywords from the job description</li>
            <li>Avoid images and complex layouts</li>
            <li>Use standard headings like "Experience"</li>
            <li>Include measurable achievements</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-600 mb-3">
            Why ATS Optimization Matters
          </h2>
          <p className="text-gray-600">
            Over 90% of companies use ATS software to filter candidates. If your
            resume is not optimized, it may never reach a recruiter. This tool
            helps you fix that.
          </p>
        </section>
      </div>
    </div>
  );
}
