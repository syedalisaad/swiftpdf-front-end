"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FileOutput,
  ArrowLeft,
  FilePlus,
  Loader2,
  Download,
  RefreshCw,
  Zap,
  Image as ImageIcon,
} from "lucide-react";
import ToolHeader from "@/src/components/tools/ToolHeader";
import FileCard from "@/src/components/tools/FileCard";
import { uploadFile } from "@/src/lib/api";
import { PDF_TOOLS } from "@/src/config/tools";
import { toast } from "sonner";
import RelatedTools from "../tools/RelatedTools";
import FeatureBenefits from "../tools/FeatureBenefits";
import AdBanner from "../tools/AdBanner";

export default function PDFToImageClient() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "processing" | "success">(
    "idle",
  );
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.type === "application/pdf") {
        setFile(selectedFile);
      } else {
        alert("Please select a valid PDF file.");
      }
    }
  };

  const handleConvert = async () => {
    if (!file) return;
    setStatus("processing");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const blob = await uploadFile("/pdf-to-image", formData);
      const url = window.URL.createObjectURL(blob);
      setDownloadUrl(url);
      setStatus("success");
      toast.error("Convert PDF to Image", {
        description: "File has been converted.",
      });
    } catch (error) {
      toast.error("Server Error", {
        description: "Error converting PDF to images.",
      });
      setStatus("idle");
    }
  };

  const reset = () => {
    if (downloadUrl) window.URL.revokeObjectURL(downloadUrl);
    setFile(null);
    setDownloadUrl(null);
    setStatus("idle");
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
          <span className="text-sm font-semibold uppercase tracking-wider font-bold">
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
            title="PDF to Image"
            description="Extract every page of your PDF as a high-quality JPG image instantly."
            Icon={FileOutput}
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
                      id="pdf-upload"
                    />
                    <label
                      htmlFor="pdf-upload"
                      className="flex flex-col items-center justify-center border-3 border-dashed border-gray-200 rounded-[2rem] p-20 cursor-pointer group-hover:border-red-400 group-hover:bg-red-50/50 transition-all duration-300"
                    >
                      <div className="w-20 h-20 bg-red-100 text-red-600 rounded-3xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform">
                        <FilePlus size={36} />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        Select PDF file
                      </h2>
                      <p className="text-gray-400 font-medium">
                        We'll turn each page into a JPG
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-red-50/50 p-4 rounded-2xl border border-red-100 flex items-center gap-3">
                        <Zap className="text-red-600" size={20} />
                        <p className="text-xs font-semibold text-red-800">
                          High-Speed Extraction
                        </p>
                      </div>
                      <div className="bg-red-50/50 p-4 rounded-2xl border border-red-100 flex items-center gap-3">
                        <ImageIcon className="text-red-600" size={20} />
                        <p className="text-xs font-semibold text-red-800">
                          300 DPI Clear Quality
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={handleConvert}
                      className="w-full py-5 bg-red-600 text-white rounded-2xl font-extrabold text-xl shadow-xl shadow-red-100 hover:bg-red-700 transition-all active:scale-95 flex items-center justify-center gap-3"
                    >
                      Extract Images
                    </button>
                  </div>
                )}
              </div>
            )}

            {status === "processing" && (
              <div className="py-20 text-center space-y-6">
                <Loader2
                  className="animate-spin text-red-500 mx-auto"
                  size={64}
                />
                <h2 className="text-2xl font-bold text-gray-800">
                  Rendering Pages...
                </h2>
              </div>
            )}

            {status === "success" && (
              <div className="py-10 text-center animate-in zoom-in-95 duration-500">
                <div className="w-24 h-24 bg-pink-100 text-pink-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-lg shadow-pink-50">
                  <Download size={48} />
                </div>
                <h2 className="text-3xl font-black text-gray-800 mb-2">
                  Images Ready!
                </h2>
                <div className="flex flex-col gap-4 max-w-sm mx-auto mt-8">
                  {downloadUrl && (
                    <a
                      href={downloadUrl}
                      download="extracted_images.zip"
                      className="py-4 bg-pink-600 text-white rounded-2xl font-bold text-lg hover:bg-pink-700 shadow-xl transition-all flex items-center justify-center gap-2"
                    >
                      <Download size={20} /> Download ZIP
                    </a>
                  )}
                  <button
                    onClick={reset}
                    className="flex items-center justify-center gap-2 text-gray-400 hover:text-red-600 font-bold text-sm transition-colors py-4"
                  >
                    <RefreshCw size={16} /> Process Another PDF
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
