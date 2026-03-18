"use client";
import { useState, useRef, useEffect } from "react";
import { 
  Save, Loader2, Image as ImageIcon, Signature, Move, X, 
  Download, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, 
  Type, Palette, Trash2, CheckCircle2, 
  MousePointer2
} from "lucide-react";
import dynamic from "next/dynamic";

const Document = dynamic(() => import("react-pdf").then((mod) => mod.Document), { ssr: false });
const Page = dynamic(() => import("react-pdf").then((mod) => mod.Page), { ssr: false });
const Draggable = dynamic(() => import("react-draggable"), { ssr: false });
const SignatureCanvas = dynamic(() => import("react-signature-canvas"), { ssr: false });

export default function TalentBeesProEditor() {
  const [file, setFile] = useState<File | null>(null);
  const [annotations, setAnnotations] = useState<any[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [isSigning, setIsSigning] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.2);

  const sigPad = useRef<any>(null);
  const imageUploadRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const setupPdfJS = async () => {
      const { pdfjs } = await import("react-pdf");
      pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
      setMounted(true);
    };
    setupPdfJS();
  }, []);

  const handleTextChange = (id: string, newText: string) => {
    setAnnotations(prev => prev.map(ann => 
      ann.id === id ? { ...ann, text: newText } : ann
    ));
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (!uploadedFile) return;
    setFile(uploadedFile);
    setLoading(true);

    const formData = new FormData();
    formData.append("pdf", uploadedFile);

    try {
      const res = await fetch("http://localhost:8000/analyze-pdf", { method: "POST", body: formData });
      const data = await res.json();
      setAnnotations(data.blocks || []);
      // Calculate total pages if backend doesn't provide it
      const maxPage = Math.max(...(data.blocks?.map((b: any) => b.page) || [1]));
      setNumPages(maxPage);
    } catch (err) {
      console.error("Analysis Error", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!file) return;
    setDownloading(true);
    const formData = new FormData();
    formData.append("pdf", file);
    // Send the current state of annotations
    formData.append("updates", JSON.stringify(annotations));

    try {
      const res = await fetch("http://localhost:8000/process-pdf", { method: "POST", body: formData });
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `Edited_${file.name}`;
      link.click();
    } catch (err) {
      alert("Export failed");
    } finally {
      setDownloading(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden">
      {/* TOOLBAR */}
      <aside className="w-20 bg-white border-r border-slate-200 flex flex-col items-center py-6 gap-6 z-50">
        <div className="text-blue-600 font-black italic text-xl">TB</div>
        <button onClick={() => setIsSigning(true)} className="p-3 hover:bg-blue-50 text-slate-400 hover:text-blue-600 rounded-xl transition-all"><Signature size={24} /></button>
        <button onClick={() => imageUploadRef.current?.click()} className="p-3 hover:bg-blue-50 text-slate-400 hover:text-blue-600 rounded-xl transition-all"><ImageIcon size={24} /></button>
      </aside>

      <div className="flex-1 flex flex-col relative">
        <header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between z-40">
          <input type="file" onChange={handleFileUpload} className="text-xs font-bold text-slate-400" />
          <div className="flex items-center gap-4 bg-slate-100 p-1 rounded-lg">
             <button onClick={() => setScale(s => Math.max(0.5, s - 0.1))} className="p-1 hover:bg-white rounded"><ZoomOut size={16}/></button>
             <span className="text-[10px] font-black w-10 text-center">{Math.round(scale * 100)}%</span>
             <button onClick={() => setScale(s => s + 0.1)} className="p-1 hover:bg-white rounded"><ZoomIn size={16}/></button>
          </div>
          <button onClick={handleDownload} disabled={downloading || !file} className="bg-blue-600 text-white px-6 py-2 rounded-lg text-xs font-black flex items-center gap-2">
            {downloading ? <Loader2 className="animate-spin" size={14}/> : <Download size={14}/>}
            {downloading ? "PROCESSING..." : "EXPORT PDF"}
          </button>
        </header>

        <main className="flex-1 overflow-auto bg-[#EDF0F5] p-10 flex justify-center">
          <div className="relative shadow-2xl h-fit">
            {file && (
              <Document file={file}>
                <Page pageNumber={pageNumber} scale={scale} renderTextLayer={false} renderAnnotationLayer={false} />
                <div className="absolute inset-0 pointer-events-none z-20">
                  {annotations.filter(a => a.page === pageNumber).map((ann) => (
                    <div key={ann.id} className="pointer-events-auto">
                      {ann.type !== "signature" && ann.type !== "image" ? (
                        <div
                          className={`absolute border ${selectedId === ann.id ? 'border-blue-500 ring-2 ring-blue-100' : 'border-transparent hover:border-blue-200'}`}
                          style={{ left: `${ann.x}%`, top: `${ann.y}%`, width: `${ann.w}%`, height: `${ann.h}%` }}
                          onClick={() => setSelectedId(ann.id)}
                        >
                          <textarea
                            value={ann.text}
                            onChange={(e) => handleTextChange(ann.id, e.target.value)}
                            className="w-full h-full bg-white/10 outline-none px-0.5 resize-none overflow-hidden"
                            style={{ fontSize: `${(ann.fontSize || 10) * scale}px`, color: ann.color || "#000", lineHeight: 1.1 }}
                          />
                        </div>
                      ) : (
                        <Draggable bounds="parent" onStart={() => setSelectedId(ann.id)}>
                          <div className={`absolute z-40 cursor-move border-2 ${selectedId === ann.id ? 'border-blue-500' : 'border-transparent'}`} style={{ left: `${ann.x}%`, top: `${ann.y}%` }}>
                            <img src={ann.data} className={ann.type === "image" ? "w-24 h-24 object-contain" : "w-40 h-auto"} draggable={false} alt="obj" />
                          </div>
                        </Draggable>
                      )}
                    </div>
                  ))}
                </div>
              </Document>
            )}
          </div>
        </main>

        {/* PAGINATION */}
        {file && (
          <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-white shadow-xl border px-6 py-3 rounded-2xl flex items-center gap-6 z-50">
            <button onClick={() => setPageNumber(p => Math.max(p - 1, 1))}><ChevronLeft/></button>
            <span className="text-xs font-black">PAGE {pageNumber} / {numPages}</span>
            <button onClick={() => setPageNumber(p => Math.min(p + 1, numPages))}><ChevronRight/></button>
          </div>
        )}
      </div>
      <input type="file" ref={imageUploadRef} className="hidden" accept="image/*" onChange={(e) => {/* Handle image same as before */}} />
    </div>
  );
}