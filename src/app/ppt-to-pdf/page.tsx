"use client";
import { useState } from "react";
import Link from "next/link";
import { 
  Presentation, 
  ArrowLeft, 
  FilePlus, 
  Loader2, 
  Download, 
  RefreshCw, 
  Layout, 
  ShieldCheck 
} from "lucide-react";
import ToolHeader from "@/src/components/tools/ToolHeader";
import FileCard from "@/src/components/tools/FileCard";
import { PDF_TOOLS } from "@/src/config/tools";

export default function PPTToPDFPage() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "processing" | "success">("idle");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      const extension = selectedFile.name.split('.').pop()?.toLowerCase();
      
      if (extension === "ppt" || extension === "pptx") {
        setFile(selectedFile);
      } else {
        alert("Please select a valid PowerPoint file (.ppt or .pptx)");
      }
    }
  };

  const handleConvert = async () => {
    if (!file) return;
    setStatus("processing");
    
    // Logic for your FastAPI /api/ppt-to-pdf endpoint
    setTimeout(() => {
      setStatus("success");
    }, 4000); // PPTs usually take a bit longer to render
  };

  const reset = () => {
    setFile(null);
    setStatus("idle");
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12 px-4 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <Link href="/" className="inline-flex items-center text-gray-500 hover:text-orange-600 mb-8 transition-colors group">
          <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
          <span className="text-sm font-semibold uppercase tracking-wider font-bold">Back to Dashboard</span>
        </Link>

        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100">
          <ToolHeader 
            title="PPT to PDF"
            description="Convert your PowerPoint presentations to high-quality PDF documents for easy sharing."
            Icon={Presentation}
          />

          <div className="p-6 md:p-10">
            {status === "idle" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                {!file ? (
                  /* Upload Area */
                  <div className="relative group">
                    <input 
                      type="file" 
                      accept=".ppt,.pptx" 
                      onChange={handleFileChange} 
                      className="hidden" 
                      id="ppt-upload" 
                    />
                    <label 
                      htmlFor="ppt-upload" 
                      className="flex flex-col items-center justify-center border-3 border-dashed border-gray-200 rounded-[2rem] p-20 cursor-pointer group-hover:border-orange-400 group-hover:bg-orange-50/50 transition-all duration-300"
                    >
                      <div className="w-20 h-20 bg-orange-100 text-orange-600 rounded-3xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform">
                        <FilePlus size={36} />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">Select PowerPoint file</h2>
                      <p className="text-gray-400 font-medium">Click to upload .ppt or .pptx</p>
                    </label>
                  </div>
                ) : (
                  /* Selected File State */
                  <div className="space-y-8">
                    <FileCard file={file} index={0} onRemove={() => setFile(null)} />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-orange-50/50 p-4 rounded-2xl border border-orange-100 flex items-center gap-3">
                            <Layout className="text-orange-600" size={20} />
                            <p className="text-xs font-semibold text-orange-800">Preserves Slide Layouts</p>
                        </div>
                        <div className="bg-orange-50/50 p-4 rounded-2xl border border-orange-100 flex items-center gap-3">
                            <ShieldCheck className="text-orange-600" size={20} />
                            <p className="text-xs font-semibold text-orange-800">Secure Processing</p>
                        </div>
                    </div>

                    <button 
                      onClick={handleConvert}
                      className="w-full py-5 bg-orange-600 text-white rounded-2xl font-extrabold text-xl shadow-xl shadow-orange-100 hover:bg-orange-700 transition-all active:scale-95 flex items-center justify-center gap-3"
                    >
                      Convert to PDF
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Converting State */}
            {status === "processing" && (
              <div className="py-20 text-center space-y-6">
                <div className="relative w-24 h-24 mx-auto">
                    <Loader2 className="animate-spin text-orange-500 absolute inset-0" size={96} strokeWidth={1} />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Presentation className="text-orange-200" size={32} />
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Converting Slides...</h2>
                    <p className="text-gray-400 mt-2 font-medium italic">Rendering fonts and images for high quality.</p>
                </div>
              </div>
            )}

            {/* Success State */}
            {status === "success" && (
              <div className="py-10 text-center animate-in zoom-in-95 duration-500">
                <div className="w-24 h-24 bg-red-100 text-red-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-lg shadow-red-50">
                  <Download size={48} />
                </div>
                <h2 className="text-3xl font-black text-gray-800 mb-2">Conversion Ready</h2>
                <p className="text-gray-500 mb-10 max-w-xs mx-auto">Your presentation has been transformed into a perfect PDF.</p>
                
                <div className="flex flex-col gap-4 max-w-sm mx-auto">
                    <a 
                        href="#" 
                        className="py-4 bg-red-600 text-white rounded-2xl font-bold text-lg hover:bg-red-700 shadow-xl shadow-red-200 transition-all flex items-center justify-center gap-2 text-center"
                    >
                        <Download size={20} /> Download PDF
                    </a>
                    <button 
                        onClick={reset}
                        className="flex items-center justify-center gap-2 text-gray-400 hover:text-orange-600 font-bold text-sm uppercase tracking-widest transition-colors py-4"
                    >
                        <RefreshCw size={16} /> Convert Another PPT
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