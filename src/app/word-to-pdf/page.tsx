"use client";
import { useState } from "react";
import Link from "next/link";
import { FileCode, ArrowLeft, FilePlus, Loader2, Download, CheckCircle2, RefreshCw, FileText } from "lucide-react";
import ToolHeader from "@/src/components/tools/ToolHeader";
import FileCard from "@/src/components/tools/FileCard";
import { PDF_TOOLS } from "@/src/config/tools";

export default function WordToPDFPage() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "processing" | "success">("idle");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // Logic to accept only Word documents
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
    
    // Simulate the server-side conversion logic
    setTimeout(() => {
      setStatus("success");
    }, 3500);
  };

  const reset = () => {
    setFile(null);
    setStatus("idle");
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12 px-4 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <Link href="/" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors group">
          <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
          <span className="text-sm font-semibold uppercase tracking-wider font-bold">All PDF Tools</span>
        </Link>

        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100">
          {/* Using FileText as the icon to represent the Word document source */}
          <ToolHeader 
            title="Word to PDF"
            description="Convert your Microsoft Word documents to professional PDF files instantly."
            Icon={FileText}
          />

          <div className="p-6 md:p-10">
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
                  /* File List State */
                  <div className="space-y-8">
                    {/* Reusing your FileCard - you might want to adjust the icon in FileCard later to show "DOCX" instead of "PDF" if the extension is different */}
                    <FileCard file={file} index={0} onRemove={() => setFile(null)} />
                    
                    <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100 flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600">
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
                        href="#" 
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
         <section className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PDF_TOOLS.map((tool) => (
              <Link
                key={tool.name}
                href={tool.href}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 ${tool.color} rounded-lg flex items-center justify-center mb-6`}
                >
                  <tool.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-red-600">
                  {tool.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {tool.desc}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}