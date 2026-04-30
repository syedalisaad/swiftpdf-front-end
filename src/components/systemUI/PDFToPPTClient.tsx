"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FileSliders, // Better icon for PDF to PPT
  ArrowLeft,
  FilePlus,
  Loader2,
  Download,
  RefreshCw,
  Layout,
  ShieldCheck,
  AlertCircle,
  FileText,
} from "lucide-react";
import ToolHeader from "@/src/components/tools/ToolHeader";
import FileCard from "@/src/components/tools/FileCard";
import { PDF_TOOLS } from "@/src/config/tools";
import { toast } from "sonner";
import { uploadFile } from "@/src/lib/api";
import RelatedTools from "../tools/RelatedTools";
import FeatureBenefits from "../tools/FeatureBenefits";
import AdBanner from "../tools/AdBanner";

export default function PDFToPPTClient() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<
    "idle" | "processing" | "success" | "error"
  >("idle");
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      const extension = selectedFile.name.split(".").pop()?.toLowerCase();

      // Validation changed to PDF
      if (extension === "pdf") {
        setFile(selectedFile);
        setStatus("idle");
      } else {
        toast.error("Invalid File", {
          description: "Please select a valid PDF file.",
        });
      }
    }
  };

  const handleConvert = async () => {
    if (!file) return;
    setStatus("processing");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const blob = await uploadFile("/pdf-to-ppt", formData);
      const url = window.URL.createObjectURL(blob);
      setDownloadUrl(url);
      setStatus("success");
      toast.success("Conversion Complete", {
        description: "Your PDF has been converted to PowerPoint successfully!",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
      toast.error("Server Error", {
        description: "Failed to convert PDF to PPT. Please try again.",
      });
    }
  };

  const reset = () => {
    setFile(null);
    setStatus("idle");
    setDownloadUrl(null);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12 px-4 font-sans">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-gray-500 hover:text-rose-600 mb-8 transition-colors group"
        >
          <ArrowLeft
            size={18}
            className="mr-2 group-hover:-translate-x-1 transition-transform"
          />
          <span className="text-sm font-bold uppercase tracking-wider">
            Back to Dashboard
          </span>
        </Link>
        <div className="mb-2 border-b border-gray-50 pb-4">
          <AdBanner
            dataAdSlot="YOUR_TOP_AD_SLOT_ID"
            dataAdFormat="horizontal"
          />
        </div>

        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100">
          <ToolHeader
            title="PDF to PPT"
            description="Turn your static PDF documents into editable PowerPoint presentation slides."
            Icon={FileSliders}
          />

          <div className="p-6 md:p-10" >
            {(status === "idle" || status === "error") && (
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
                      className="flex flex-col items-center justify-center border-3 border-dashed border-gray-200 rounded-[2rem] p-20 cursor-pointer group-hover:border-rose-400 group-hover:bg-rose-50/50 transition-all duration-300"
                    >
                      <div className="w-20 h-20 bg-rose-100 text-rose-600 rounded-3xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform">
                        <FilePlus size={36} />
                      </div>
                      <h6 className="text-2xl font-bold text-gray-800 mb-2">
                        Select PDF file
                      </h6>
                      <p className="text-gray-400 font-medium">
                        Click to upload .pdf
                      </p>
                    </label>
                  </div>
                ) : (
                  <div className="space-y-8">
                    <FileCard
                      file={file}
                      index={0}
                      file_type="pdf"
                      onRemove={() => setFile(null)}
                    />

                    {status === "error" && (
                      <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600 animate-shake">
                        <AlertCircle size={20} />
                        <p className="text-sm font-bold">
                          Something went wrong. Please try again.
                        </p>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-rose-50/50 p-4 rounded-2xl border border-rose-100 flex items-center gap-3">
                        <Layout className="text-rose-600" size={20} />
                        <p className="text-xs font-semibold text-rose-800">
                          High-Resolution Slides
                        </p>
                      </div>
                      <div className="bg-rose-50/50 p-4 rounded-2xl border border-rose-100 flex items-center gap-3">
                        <ShieldCheck className="text-rose-600" size={20} />
                        <p className="text-xs font-semibold text-rose-800">
                          Encrypted Transfer
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={handleConvert}
                      className="w-full py-5 bg-rose-600 text-white rounded-2xl font-extrabold text-xl shadow-xl shadow-rose-100 hover:bg-rose-700 transition-all active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50"
                    >
                      Convert to PPT
                    </button>
                  </div>
                )}
              </div>
            )}

            {status === "processing" && (
              <div className="py-20 text-center space-y-6">
                <div className="relative w-24 h-24 mx-auto">
                  <Loader2
                    className="animate-spin text-rose-500 absolute inset-0"
                    size={96}
                    strokeWidth={1}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FileText className="text-rose-200" size={32} />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Generating Slides...
                  </h2>
                  <p className="text-gray-400 mt-2 font-medium italic">
                    Processing pages into presentation format.
                  </p>
                </div>
              </div>
            )}

            {status === "success" && downloadUrl && (
              <div className="py-10 text-center animate-in zoom-in-95 duration-500">
                <div className="w-24 h-24 bg-amber-100 text-amber-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-lg shadow-amber-50">
                  <Download size={48} />
                </div>
                <h2 className="text-3xl font-black text-gray-800 mb-2">
                  PowerPoint Ready
                </h2>
                <p className="text-gray-500 mb-10 max-w-xs mx-auto">
                  Your PDF has been transformed into an editable slide deck.
                </p>

                <div className="flex flex-col gap-4 max-w-sm mx-auto">
                  <a
                    href={downloadUrl}
                    download={file?.name.replace(/\.[^/.]+$/, "") + ".pptx"}
                    className="py-4 bg-amber-600 text-white rounded-2xl font-bold text-lg hover:bg-amber-700 shadow-xl shadow-amber-200 transition-all flex items-center justify-center gap-2 text-center"
                  >
                    <Download size={20} /> Download PPTX
                  </a>
                  <button
                    onClick={reset}
                    className="flex items-center justify-center gap-2 text-gray-400 hover:text-rose-600 font-bold text-sm uppercase tracking-widest transition-colors py-4"
                  >
                    <RefreshCw size={16} /> Convert Another PDF
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
        {/* Footer Tools Grid */}
        <RelatedTools />
        
      </div>
    </div>
  );
}
