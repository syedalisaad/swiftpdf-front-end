"use client";
import { useState, useEffect } from "react"; // Added useEffect for cleanup
import Link from "next/link";
import {
  FileText,
  ArrowLeft,
  FilePlus,
  Loader2,
  Download,
  CheckCircle2,
  RefreshCw,
} from "lucide-react";
import ToolHeader from "@/src/components/tools/ToolHeader";
import FileCard from "@/src/components/tools/FileCard";
import { PDF_TOOLS } from "@/src/config/tools";
import { uploadFile } from "@/src/lib/api";
import { toast } from "sonner";
import RelatedTools from "../tools/RelatedTools";
import FeatureBenefits from "../tools/FeatureBenefits";
import AdBanner from "../tools/AdBanner";

export default function PDFToWordClient() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "processing" | "success">(
    "idle",
  );
  const [downloadUrl, setDownloadUrl] = useState<string>(""); // Moved inside component

  useEffect(() => {
    return () => {
      if (downloadUrl) window.URL.revokeObjectURL(downloadUrl);
    };
  }, [downloadUrl]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleConvert = async () => {
    if (!file) return;
    setStatus("processing");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const blob = await uploadFile("/pdf-to-word", formData);
      const url = window.URL.createObjectURL(blob);
      setDownloadUrl(url);
      setStatus("success");
      toast.success("Split Complete", {
        description: "Your PDF has been converted word successfully!",
      });
    } catch (error) {
      console.error("Conversion Error:", error);
      setStatus("idle");
      toast.error("Split Complete", {
        description: "Failed to process the PDF. Please try again.",
      });
    }
  };

  const reset = () => {
    setFile(null);
    setStatus("idle");
    if (downloadUrl) window.URL.revokeObjectURL(downloadUrl);
    setDownloadUrl("");
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12 px-4 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <Link
          href="/"
          className="inline-flex items-center text-gray-500 hover:text-red-600 mb-8 transition-colors group"
        >
          <ArrowLeft
            size={18}
            className="mr-2 group-hover:-translate-x-1 transition-transform"
          />
          <span className="text-sm font-semibold uppercase tracking-wider">
            Back to Tools
          </span>
        </Link>
        <div className="mb-8 border-b border-gray-50 pb-4">
        <AdBanner 
          dataAdSlot="YOUR_TOP_AD_SLOT_ID" 
          dataAdFormat="horizontal" 
        />
      </div>

        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100">
          <ToolHeader
            title="PDF to Word"
            description="Convert your PDF documents into editable DOCX files with high accuracy."
            Icon={FileText}
          />

          <div className="p-6 md:p-10">
            {status === "idle" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                {!file ? (
                  <div className="relative group">
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="hidden"
                      id="convert-upload"
                    />
                    <label
                      htmlFor="convert-upload"
                      className="flex flex-col items-center justify-center border-3 border-dashed border-gray-200 rounded-[2rem] p-20 cursor-pointer group-hover:border-red-400 group-hover:bg-red-50/30 transition-all duration-300"
                    >
                      <div className="w-20 h-20 bg-red-50 text-red-600 rounded-3xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform">
                        <FilePlus size={36} />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        Select PDF file
                      </h2>
                      <p className="text-gray-400 font-medium text-center">
                        Upload the file you want to turn into Word
                      </p>
                    </label>
                  </div>
                ) : (
                  <div className="space-y-8">
                    <FileCard
                      file={file}
                      index={0}
                      onRemove={() => setFile(null)}
                    />
                    <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 flex items-start gap-4">
                      <div className="p-2 bg-blue-600 rounded-lg text-white shrink-0">
                        <CheckCircle2 size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-900">
                          Ready for Conversion
                        </h4>
                        <p className="text-sm text-blue-700 opacity-80">
                          This will create an editable .docx file.
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={handleConvert}
                      className="w-full py-5 bg-blue-600 text-white rounded-2xl font-extrabold text-xl shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95 flex items-center justify-center gap-3"
                    >
                      Convert to Word
                    </button>
                  </div>
                )}
              </div>
            )}

            {status === "processing" && (
              <div className="py-20 text-center space-y-6">
                <div className="relative w-24 h-24 mx-auto">
                  <Loader2
                    className="animate-spin text-blue-600 absolute inset-0"
                    size={96}
                    strokeWidth={1.5}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FileText className="text-blue-200" size={32} />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Converting to Word...
                </h2>
              </div>
            )}

            {status === "success" && (
              <div className="py-10 text-center animate-in zoom-in-95 duration-500">
                <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8">
                  <Download size={48} />
                </div>
                <h2 className="text-3xl font-black text-gray-800 mb-2">
                  Great Success!
                </h2>
                <div className="flex flex-col gap-4 max-w-sm mx-auto mt-8">
                  <a
                    href={downloadUrl}
                    download={`${file?.name.replace(".pdf", "")}.docx`}
                    className="py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 shadow-xl shadow-blue-200 flex items-center justify-center gap-2"
                  >
                    <Download size={20} /> Download DOCX
                  </a>
                  <button
                    onClick={reset}
                    className="flex items-center justify-center gap-2 text-gray-400 hover:text-red-600 font-bold text-sm uppercase tracking-widest py-4"
                  >
                    <RefreshCw size={16} /> Convert Another File
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mb-8 border-b border-gray-50 pb-4">
        <AdBanner 
          dataAdSlot="YOUR_TOP_AD_SLOT_ID" 
          dataAdFormat="horizontal" 
        />
      </div>
        <RelatedTools />
        <FeatureBenefits />
      </div>
    </div>
  );
}
