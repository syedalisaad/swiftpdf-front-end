"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FilePlus,
  ArrowLeft,
  Merge,
  ShieldCheck,
  Zap,
  Sparkles,
} from "lucide-react";
import ToolHeader from "@/src/components/tools/ToolHeader";
import FileCard from "@/src/components/tools/FileCard";
import { PDF_TOOLS } from "@/src/config/tools";
import { toast } from "sonner";
import { uploadFile } from "@/src/lib/api";
import RelatedTools from "../tools/RelatedTools";
import FeatureBenefits from "../tools/FeatureBenefits";
import AdBanner from "../tools/AdBanner";

export default function MergePDFClient() {
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<"idle" | "processing" | "success">(
    "idle",
  );
  const [downloadUrl, setDownloadUrl] = useState("");

  const handleMerge = async () => {
    if (files.length < 2) {
      return toast.error("Selection Required", {
        description: "Please select at least 2 PDF files to merge.",
      });
    }

    setStatus("processing");
    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));

    try {
      const blob = await uploadFile("/merge-pdfs", formData);
      const url = window.URL.createObjectURL(blob);

      setDownloadUrl(url);
      setStatus("success");

      toast.success("Merge Complete", {
        description: "Your file is ready for download!",
      });
    } catch (error) {
      console.error(error);
      setStatus("idle");
      toast.error("Server Error", {
        description: "Failed to process the File. Please try again.",
      });
    }
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
      setStatus("idle");

      e.target.value = "";
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-4 px-4 font-sans">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-gray-500 hover:text-red-600 mb-8 transition-colors group"
        >
          <ArrowLeft
            size={18}
            className="mr-2 group-hover:-translate-x-1 transition-transform"
          />
          <span className="text-sm font-semibold uppercase tracking-wider">
            All Tools
          </span>
        </Link>
        <div className="mb-2 border-b border-gray-50 pb-4">
        <AdBanner 
          dataAdSlot="YOUR_TOP_AD_SLOT_ID" 
          dataAdFormat="horizontal" 
        />
      </div>

        <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden border border-gray-100">
          <ToolHeader
            title="Merge PDF"
            description="You can put all your PDF files together into one document that's easy to look at. This way you can have all your PDF files in one place. It will be very organized. You can do this with your PDF files quickly."
            Icon={Merge}
          />

          <div className="p-6 md:p-10">
            <input
              type="file"
              multiple
              accept=".pdf"
              onChange={handleFileChange}
              className="hidden"
              id="merge-upload"
            />
            {status === "idle" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                {files.length === 0 ? (
                  <div className="relative group">
                    <label
                      htmlFor="merge-upload"
                      className="flex flex-col items-center justify-center border-3 border-dashed border-gray-200 rounded-[2rem] p-20 cursor-pointer group-hover:border-red-400 group-hover:bg-red-50/30 transition-all duration-300"
                    >
                      <div className="w-20 h-20 bg-red-100 text-red-600 rounded-3xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        <FilePlus size={36} />
                      </div>
                      <h2 className="text-lg font-bold text-gray-800 mb-2">
                        Select your PDF files
                      </h2>
                      <p className="text-gray-400 text-lg font-medium">
                        Click to browse or drop them here
                      </p>
                    </label>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between px-2">
                      <h3 className="font-bold text-gray-700">
                        {files.length} Files Selected
                      </h3>
                      <button
                        onClick={() => setFiles([])}
                        className="text-xs font-bold text-gray-400 hover:text-red-600 uppercase tracking-widest"
                      >
                        Clear All
                      </button>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      {files.map((file, index) => (
                        <FileCard
                          key={`${file.name}-${index}`}
                          file={file}
                          index={index}
                          onRemove={removeFile}
                        />
                      ))}
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 pt-8">
                      <label
                        htmlFor="merge-upload"
                        className="flex-1 text-center py-4 px-8 border-2 border-gray-200 text-gray-600 rounded-2xl font-bold cursor-pointer hover:border-red-600 hover:text-red-600 transition-all active:scale-95"
                      >
                        Add More Files
                      </label>
                      <button
                        onClick={handleMerge}
                        className="flex-[2] py-4 px-8 bg-red-600 text-white rounded-2xl font-extrabold text-lg shadow-xl shadow-red-200 hover:bg-red-700 hover:shadow-red-300 transition-all active:scale-95 flex items-center justify-center gap-2"
                      >
                        <Merge size={20} /> Merge Files Now
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
            {status === "processing" && (
              <div className="flex flex-col items-center justify-center py-20 animate-pulse">
                <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-xl font-bold text-gray-700">
                  Merging your PDFs...
                </p>
              </div>
            )}
            {status === "success" && (
              <div className="flex flex-col items-center justify-center py-10 animate-in zoom-in-95 duration-500">
                <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
                  <Sparkles size={40} />
                </div>
                <h2 className="text-3xl font-black text-gray-800 mb-2">
                  Ready to Download!
                </h2>
                <p className="text-gray-500 mb-8 text-center">
                  Your merged PDF is compressed and optimized.
                </p>

                <div className="flex flex-col w-full gap-4">
                  <a
                    href={downloadUrl}
                    download="SwiftPDF_Merged.pdf"
                    className="w-full py-5 px-8 bg-red-600 text-white rounded-2xl font-black text-xl shadow-xl shadow-red-100 hover:bg-red-700 text-center transition-all active:scale-95 flex items-center justify-center gap-3"
                  >
                    <Zap size={24} /> Download Merged PDF
                  </a>

                  <button
                    onClick={() => {
                      setFiles([]);
                      setStatus("idle");
                      setDownloadUrl("");
                    }}
                    className="text-gray-400 font-bold hover:text-red-600 transition-colors"
                  >
                    Start Over / Merge New Files
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mb-2 border-b border-gray-50 pb-4">
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
