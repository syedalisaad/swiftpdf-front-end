"use client";
import { useState } from "react";
import Link from "next/link";
import { Scissors, ArrowLeft, FilePlus, Loader2, Download } from "lucide-react";
import SplitSettings from "@/src/components/tools/SplitSettings";
import ToolHeader from "@/src/components/tools/ToolHeader";
import FileCard from "@/src/components/tools/FileCard";
import { PDF_TOOLS } from "@/src/config/tools";
import { toast } from "sonner";
import { uploadFile } from "@/src/lib/api";
import RelatedTools from "../tools/RelatedTools";
import FeatureBenefits from "../tools/FeatureBenefits";
import AdBanner from "../tools/AdBanner";

export default function SplitPDFClient() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "processing" | "success">(
    "idle",
  );
  const [splitMode, setSplitMode] = useState<"all" | "range">("all");
  const [range, setRange] = useState("1-2");
  const [downloadUrl, setDownloadUrl] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSplit = async () => {
    if (!file) return;
    setStatus("processing");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("mode", splitMode);
    formData.append("range", range);

    try {
      const blob = await uploadFile("/word-to-pdf", formData);
      const url = window.URL.createObjectURL(blob);
      setDownloadUrl(url);
      setStatus("success");

      toast.success("Split Complete", {
        description: "Your PDF has been split successfully!",
      });
    } catch (error) {
      console.error(error);
      setStatus("idle");
      toast.error("Split Error", {
        description: "Failed to process the PDF. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12 px-4 font-sans">
      <div className="max-w-4xl mx-auto">
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
        <div className="mb-8 border-b border-gray-50 pb-4">
        <AdBanner 
          dataAdSlot="YOUR_TOP_AD_SLOT_ID" 
          dataAdFormat="horizontal" 
        />
      </div>
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100">
          <ToolHeader
            title="Split PDF"
            description="Extract pages from your PDF or save each page as a separate PDF."
            Icon={Scissors}
          />

          <div className="p-6 md:p-10">
            {status === "idle" && (
              <>
                {!file ? (
                  <div className="relative group">
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="hidden"
                      id="split-upload"
                    />
                    <label
                      htmlFor="split-upload"
                      className="flex flex-col items-center justify-center border-3 border-dashed border-gray-200 rounded-[2rem] p-20 cursor-pointer group-hover:border-red-400 group-hover:bg-red-50/30 transition-all duration-300"
                    >
                      <div className="w-20 h-20 bg-red-100 text-red-600 rounded-3xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform">
                        <FilePlus size={36} />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        Select PDF file
                      </h2>
                      <p className="text-gray-400 font-medium">
                        Click to browse your document
                      </p>
                    </label>
                  </div>
                ) : (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                    <FileCard
                      file={file}
                      index={0}
                      onRemove={() => setFile(null)}
                    />

                    <SplitSettings
                      splitMode={splitMode}
                      setSplitMode={setSplitMode}
                      range={range}
                      setRange={setRange}
                    />

                    <button
                      onClick={handleSplit}
                      className="w-full py-4 bg-red-600 text-white rounded-2xl font-extrabold text-lg shadow-xl shadow-red-200 hover:bg-red-700 transition-all active:scale-95 flex items-center justify-center gap-2"
                    >
                      <Scissors size={20} /> Split PDF Now
                    </button>
                  </div>
                )}
              </>
            )}
            {status === "processing" && (
              <div className="flex flex-col items-center justify-center py-20 animate-pulse">
                <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-xl font-bold text-gray-700">
                  Spliting your PDFs...
                </p>
              </div>
            )}

            {status === "processing" && (
              <div className="py-20 text-center animate-pulse">
                <Loader2
                  className="animate-spin text-red-600 mx-auto mb-4"
                  size={50}
                />
                <h2 className="text-2xl font-bold text-gray-800">
                  Processing PDF...
                </h2>
              </div>
            )}

            {status === "success" && (
              <div className="py-10 text-center animate-in zoom-in-95">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Download size={40} />
                </div>
                <h2 className="text-3xl font-black text-gray-800 mb-2">
                  Ready!
                </h2>
                <p className="text-gray-500 mb-8">
                  Your files are processed and ready.
                </p>

                <div className="flex flex-col gap-4 max-w-sm mx-auto">
                  <a
                    href={downloadUrl}
                    download={
                      splitMode === "all"
                        ? "SwiftPDF_Split.zip"
                        : "SwiftPDF_Split.pdf"
                    }
                    className="w-full py-4 bg-green-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-green-100 hover:bg-green-700"
                  >
                    <Download size={20} /> Download Now
                  </a>

                  <button
                    onClick={() => {
                      setFile(null);
                      setStatus("idle");
                      setDownloadUrl("");
                    }}
                    className="text-gray-400 hover:text-red-600 font-bold text-xs uppercase tracking-widest"
                  >
                    Split another file
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
