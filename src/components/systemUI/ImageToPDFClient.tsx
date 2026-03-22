"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Image as ImageIcon,
  ArrowLeft,
  FilePlus,
  Loader2,
  Download,
  RefreshCw,
  LayoutTemplate,
  ShieldCheck,
} from "lucide-react";
import ToolHeader from "@/src/components/tools/ToolHeader";
import FileCard from "@/src/components/tools/FileCard";
import { PDF_TOOLS } from "@/src/config/tools";
import { uploadFile } from "@/src/lib/api"; // Added API import

export default function ImageToPDFClient() {
  // Changed to handle multiple files
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<"idle" | "processing" | "success">(
    "idle",
  );
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      const validFiles = selectedFiles.filter((file) => {
        const ext = file.name.split(".").pop()?.toLowerCase();
        return ["jpg", "jpeg", "png", "webp"].includes(ext || "");
      });

      if (validFiles.length !== selectedFiles.length) {
        alert("Some files were skipped. Please upload JPG, PNG, or WEBP only.");
      }

      setFiles((prev) => [...prev, ...validFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleConvert = async () => {
    if (files.length === 0) return;
    setStatus("processing");

    const formData = new FormData();
    // Append all files for the backend to handle as a list
    files.forEach((file) => formData.append("files", file));

    try {
      const blob = await uploadFile("/image-to-pdf", formData);
      const url = window.URL.createObjectURL(blob);
      setDownloadUrl(url);
      setStatus("success");
    } catch (error) {
      console.error(error);
      alert("Error converting images. Please try again.");
      setStatus("idle");
    }
  };

  const reset = () => {
    if (downloadUrl) window.URL.revokeObjectURL(downloadUrl);
    setFiles([]);
    setDownloadUrl(null);
    setStatus("idle");
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12 px-4 font-sans">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-gray-500 hover:text-purple-600 mb-8 transition-colors group"
        >
          <ArrowLeft
            size={18}
            className="mr-2 group-hover:-translate-x-1 transition-transform"
          />
          <span className="text-sm font-semibold uppercase tracking-wider font-bold">
            All PDF Tools
          </span>
        </Link>

        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100">
          <ToolHeader
            title="Image to PDF"
            description="Convert your JPG, PNG, and WEBP images into a clean, well-laid-out PDF document."
            Icon={ImageIcon}
          />

          <div className="p-6 md:p-10">
            {status === "idle" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                {files.length === 0 ? (
                  <div className="relative group">
                    <input
                      type="file"
                      multiple // Allowed multiple selection
                      accept=".jpg,.jpeg,.png,.webp"
                      onChange={handleFileChange}
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="flex flex-col items-center justify-center border-3 border-dashed border-gray-200 rounded-[2rem] p-20 cursor-pointer group-hover:border-purple-400 group-hover:bg-purple-50/50 transition-all duration-300"
                    >
                      <div className="w-20 h-20 bg-purple-100 text-purple-600 rounded-3xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform">
                        <FilePlus size={36} />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        Select Images
                      </h2>
                      <p className="text-gray-400 font-medium">
                        Upload JPG, PNG, or WEBP
                      </p>
                    </label>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-4">
                      {files.map((f, i) => (
                        <FileCard
                          key={i}
                          file={f}
                          index={i}
                          onRemove={() => removeFile(i)}
                        />
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-purple-50/50 p-4 rounded-2xl border border-purple-100 flex items-center gap-3">
                        <LayoutTemplate className="text-purple-600" size={20} />
                        <p className="text-xs font-semibold text-purple-800">
                          Auto Page-Fit Placement
                        </p>
                      </div>
                      <div className="bg-purple-50/50 p-4 rounded-2xl border border-purple-100 flex items-center gap-3">
                        <ShieldCheck className="text-purple-600" size={20} />
                        <p className="text-xs font-semibold text-purple-800">
                          Original Quality Retention
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={handleConvert}
                      className="w-full py-5 bg-purple-600 text-white rounded-2xl font-extrabold text-xl shadow-xl shadow-purple-100 hover:bg-purple-700 transition-all active:scale-95 flex items-center justify-center gap-3"
                    >
                      Convert {files.length}{" "}
                      {files.length === 1 ? "Image" : "Images"} to PDF
                    </button>

                    <button
                      onClick={() =>
                        document.getElementById("image-upload")?.click()
                      }
                      className="w-full py-3 text-purple-600 font-bold hover:bg-purple-50 rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      <FilePlus size={18} /> Add More Images
                      <input
                        type="file"
                        multiple
                        accept=".jpg,.jpeg,.png,.webp"
                        onChange={handleFileChange}
                        className="hidden"
                        id="image-upload"
                      />
                    </button>
                  </div>
                )}
              </div>
            )}

            {status === "processing" && (
              <div className="py-20 text-center space-y-6">
                <div className="relative w-24 h-24 mx-auto">
                  <Loader2
                    className="animate-spin text-purple-500 absolute inset-0"
                    size={96}
                    strokeWidth={1}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageIcon className="text-purple-200" size={32} />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Processing Images...
                  </h2>
                  <p className="text-gray-400 mt-2 font-medium italic">
                    Optimizing layout and stitching pages together.
                  </p>
                </div>
              </div>
            )}

            {status === "success" && (
              <div className="py-10 text-center animate-in zoom-in-95 duration-500">
                <div className="w-24 h-24 bg-red-100 text-red-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-lg shadow-red-50">
                  <Download size={48} />
                </div>
                <h2 className="text-3xl font-black text-gray-800 mb-2">
                  Download Ready
                </h2>
                <p className="text-gray-500 mb-10 max-w-xs mx-auto">
                  Your images have been perfectly converted into a clean PDF
                  document.
                </p>

                <div className="flex flex-col gap-4 max-w-sm mx-auto">
                  {downloadUrl && (
                    <a
                      href={downloadUrl}
                      download="converted_images.pdf"
                      className="py-4 bg-red-600 text-white rounded-2xl font-bold text-lg hover:bg-red-700 shadow-xl shadow-red-200 transition-all flex items-center justify-center gap-2 text-center"
                    >
                      <Download size={20} /> Download PDF
                    </a>
                  )}
                  <button
                    onClick={reset}
                    className="flex items-center justify-center gap-2 text-gray-400 hover:text-purple-600 font-bold text-sm uppercase tracking-widest transition-colors py-4"
                  >
                    <RefreshCw size={16} /> Convert More Images
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
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-rose-600">
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
