"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  FileCode, ArrowLeft, FilePlus, Loader2, 
  Download,  RefreshCw, FileText 
} from "lucide-react";
import ToolHeader from "@/src/components/tools/ToolHeader";
import FileCard from "@/src/components/tools/FileCard";
import { PDF_TOOLS } from "@/src/config/tools";
import { uploadFile } from "@/src/lib/api";
import { toast } from "sonner";
import RelatedTools from "../tools/RelatedTools";
import FeatureBenefits from "../tools/FeatureBenefits";
import AdBanner from "../tools/AdBanner";

export default function WordToPDFClient() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "processing" | "success">("idle");
  const [downloadUrl, setDownloadUrl] = useState<string>(""); // Added inside component

  // Cleanup to prevent memory leaks
  useEffect(() => {
    return () => {
      if (downloadUrl) window.URL.revokeObjectURL(downloadUrl);
    };
  }, [downloadUrl]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.name.endsWith(".doc") || selectedFile.name.endsWith(".docx")) {
        setFile(selectedFile);
      } else {
        alert("Please select a valid Word document (.doc or .docx)");
      }
    }
  };

  const handleConvert = async () => {
    if (!file) return;
    setStatus("processing");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const blob =  await uploadFile("/word-to-pdf", formData);
      const url = window.URL.createObjectURL(blob);
      setDownloadUrl(url);
      setStatus("success");
       toast.success("PDF Complete", {
        description: "Your Doc has been converted PDF successfully!",
      });
    } catch (error) {
      setStatus("idle");
        toast.error("Server Error", {
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
        <Link href="/" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors group">
          <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
          <span className="text-sm font-semibold uppercase tracking-wider font-bold">All PDF Tools</span>
        </Link>
        <div className="mb-2 border-b border-gray-50 pb-4">
        <AdBanner 
          dataAdSlot="YOUR_TOP_AD_SLOT_ID" 
          dataAdFormat="horizontal" 
        />
      </div>
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100">
          <ToolHeader 
            title="Word to PDF"
            description="Convert your Microsoft Word documents to professional PDF files instantly."
            Icon={FileText}
          />

          <div >
            {status === "idle" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                {!file ? (
                  /* Upload Area */
                  <div className="relative group">
                    <input 
                      type="file" 
                      accept=".doc,.docx" 
                      onChange={handleFileChange} 
                      className="hidden" 
                      id="word-upload" 
                    />
                    <label 
                      htmlFor="word-upload" 
                      className="flex flex-col items-center justify-center border-3 border-dashed border-gray-200 rounded-[2rem] p-20 cursor-pointer group-hover:border-blue-500 group-hover:bg-blue-50/50 transition-all duration-300"
                    >
                      <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-3xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-transform">
                        <FilePlus size={36} />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">Select Word file</h2>
                      <p className="text-gray-400 font-medium">.doc or .docx documents</p>
                    </label>
                  </div>
                ) : (
                  <div className="space-y-8">
                    <FileCard file={file} file_type="word" index={0} onRemove={() => setFile(null)} />
                    
                    <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100 flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 shrink-0">
                           <FileCode size={24} />
                        </div>
                        <p className="text-sm font-medium text-blue-800">
                           We'll preserve all your fonts, margins, and formatting during the conversion.
                        </p>
                    </div>

                    <button 
                      onClick={handleConvert}
                      className="w-full py-5 bg-blue-600 text-white rounded-2xl font-extrabold text-xl shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95 flex items-center justify-center gap-3"
                    >
                      Convert to PDF
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Processing State */}
            {status === "processing" && (
              <div className="py-20 text-center">
                <div className="flex justify-center mb-8">
                    <div className="relative">
                        <Loader2 className="animate-spin text-blue-600" size={80} strokeWidth={1.5} />
                        <div className="absolute inset-0 flex items-center justify-center text-blue-300">
                            <FileText size={24} />
                        </div>
                    </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Generating PDF...</h2>
                <p className="text-gray-400 mt-2">Almost there, finalizing the document structure.</p>
              </div>
            )}

            {/* Success State */}
            {status === "success" && (
              <div className="py-10 text-center animate-in zoom-in-95 duration-500">
                <div className="w-24 h-24 bg-red-100 text-red-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-lg shadow-red-50">
                  <Download size={48} />
                </div>
                <h2 className="text-3xl font-black text-gray-800 mb-2">Download Ready</h2>
                <p className="text-gray-500 mb-10">Your Word document has been successfully converted to PDF.</p>
                
                <div className="flex flex-col gap-4 max-w-sm mx-auto">
                    <a 
                        href={downloadUrl} 
                        download={`${file?.name.split('.')[0]}.pdf`}
                        className="py-4 bg-red-600 text-white rounded-2xl font-bold text-lg hover:bg-red-700 shadow-xl shadow-red-200 transition-all flex items-center justify-center gap-2 text-center"
                    >
                        <Download size={20} /> Download your PDF
                    </a>
                    <button 
                        onClick={reset}
                        className="flex items-center justify-center gap-2 text-gray-400 hover:text-blue-600 font-bold text-sm uppercase tracking-widest transition-colors py-4"
                    >
                        <RefreshCw size={16} /> Choose another Word file
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
        {/* Footer Navigation section */}
        <RelatedTools/>
        <FeatureBenefits/>
      </div>
    </div>
  );
}