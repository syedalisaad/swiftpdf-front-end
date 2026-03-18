"use client";
import { useState, useRef, useEffect, createRef } from "react"; // Added createRef
import {
  Loader2, Image as ImageIcon, Signature, Download,
  ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Type, Eraser, X, Trash2, GripHorizontal
} from "lucide-react";
import dynamic from "next/dynamic";
import SignatureCanvas from "react-signature-canvas";

const Document = dynamic(() => import("react-pdf").then((mod) => mod.Document), { ssr: false });
const Page = dynamic(() => import("react-pdf").then((mod) => mod.Page), { ssr: false });
const Draggable = dynamic(() => import("react-draggable"), { ssr: false });

export default function TalentBeesProEditor() {
  const [file, setFile] = useState<any>(null);
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [annotations, setAnnotations] = useState<any[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.2);
  const [showSigModal, setShowSigModal] = useState(false);
  
  const sigPad = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // FIX: We need a way to store refs for Draggable nodes
  const nodeRefs = useRef<{[key: string]: React.RefObject<HTMLDivElement>}>({});

  useEffect(() => {
    const setupPdfJS = async () => {
      const { pdfjs } = await import("react-pdf");
      pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
      setMounted(true);
    };
    setupPdfJS();
  }, []);

  const handleTextChange = (id: string, newText: string) => {
    setAnnotations((prev) =>
      prev.map((ann) => (ann.id === id ? { ...ann, text: newText } : ann))
    );
  };

  const deleteAnnotation = (id: string) => {
    setAnnotations((prev) => prev.filter((ann) => ann.id !== id));
    if (nodeRefs.current[id]) delete nodeRefs.current[id];
    setSelectedId(null);
  };

  const handleDragStop = (id: string, data: any) => {
    if (!containerRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();
    
    setAnnotations((prev) =>
      prev.map((ann) => {
        if (ann.id === id) {
          return {
            ...ann,
            x: (data.x / width) * 100,
            y: (data.y / height) * 100,
          };
        }
        return ann;
      })
    );
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (!uploadedFile) return;
    setAnnotations([]);
    setPageNumber(1);
    setOriginalFile(uploadedFile);
    setLoading(true);

    const formData = new FormData();
    formData.append("pdf", uploadedFile);

    try {
      const res = await fetch("http://localhost:8000/analyze-pdf", { method: "POST", body: formData });
      const data = await res.json();
      
      const uniqueBlocks = (data.blocks || []).map((block: any, idx: number) => {
        const id = block.id ? `${block.id}-${idx}-${Date.now()}` : `block-${idx}-${Date.now()}`;
        // Initialize ref for each block
        nodeRefs.current[id] = createRef<HTMLDivElement>();
        return { ...block, id };
      });

      setAnnotations(uniqueBlocks);
      if (data.cleanPdf) setFile(data.cleanPdf);
      setNumPages(Math.max(...(uniqueBlocks.map((b: any) => b.page) || [1])));
    } catch (err) {
      alert("Analysis Error");
    } finally {
      setLoading(false);
    }
  };

  const addCustomText = () => {
    const id = `txt-${Date.now()}`;
    nodeRefs.current[id] = createRef<HTMLDivElement>();
    setAnnotations([...annotations, {
      id, page: pageNumber, text: "Click to edit",
      x: 10, y: 10, w: 20, h: 4, type: "text", isCustom: true, fontSize: 12
    }]);
    setSelectedId(id);
  };

  const addEraser = () => {
    const id = `ers-${Date.now()}`;
    nodeRefs.current[id] = createRef<HTMLDivElement>();
    setAnnotations([...annotations, {
      id, page: pageNumber, text: "", x: 15, y: 15, w: 10, h: 5, type: "eraser"
    }]);
    setSelectedId(id);
  };

  const saveSignature = () => {
    if (sigPad.current.isEmpty()) return;
    const dataUrl = sigPad.current.getTrimmedCanvas().toDataURL("image/png");
    const id = `sig-${Date.now()}`;
    nodeRefs.current[id] = createRef<HTMLDivElement>();
    setAnnotations([...annotations, {
      id, page: pageNumber, text: dataUrl, x: 20, y: 20, w: 25, h: 12, type: "signature"
    }]);
    setShowSigModal(false);
  };

  const handleDownload = async () => {
    if (!originalFile) return;
    setDownloading(true);
    const formData = new FormData();
    formData.append("pdf", originalFile);
    formData.append("updates", JSON.stringify(annotations));
    try {
      const res = await fetch("http://localhost:8000/process-pdf", { method: "POST", body: formData });
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `Edited_${originalFile.name}`;
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
      <aside className="w-20 bg-white border-r border-slate-200 flex flex-col items-center py-6 gap-6 z-50">
        <div className="text-blue-600 font-black italic text-xl">TB</div>
        <button onClick={addCustomText} className="p-3 hover:bg-blue-50 text-slate-400 hover:text-blue-600 rounded-xl transition-all"><Type size={24} /></button>
        <button onClick={addEraser} className="p-3 hover:bg-blue-50 text-slate-400 hover:text-blue-600 rounded-xl transition-all"><Eraser size={24} /></button>
        <button onClick={() => setShowSigModal(true)} className="p-3 hover:bg-blue-50 text-slate-400 hover:text-blue-600 rounded-xl transition-all"><Signature size={24} /></button>
      </aside>

      <div className="flex-1 flex flex-col relative">
        <header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between z-40">
          <input type="file" onChange={handleFileUpload} className="text-xs font-bold text-slate-400 cursor-pointer" />
          <div className="flex items-center gap-4 bg-slate-100 p-1 rounded-lg">
            <button onClick={() => setScale(s => Math.max(0.5, s - 0.1))} className="p-1 hover:bg-white rounded"><ZoomOut size={16} /></button>
            <span className="text-[10px] font-black w-10 text-center">{Math.round(scale * 100)}%</span>
            <button onClick={() => setScale(s => s + 0.1)} className="p-1 hover:bg-white rounded"><ZoomIn size={16} /></button>
          </div>
          <button onClick={handleDownload} disabled={downloading || !file} className="bg-blue-600 text-white px-6 py-2 rounded-lg text-xs font-black flex items-center gap-2">
            {downloading ? <Loader2 className="animate-spin" size={14} /> : <Download size={14} />}
            {downloading ? "PROCESSING..." : "EXPORT PDF"}
          </button>
        </header>

        <main className="flex-1 overflow-auto bg-[#EDF0F5] p-10 flex justify-center">
          <div ref={containerRef} className="relative shadow-2xl h-fit bg-white">
            {file && (
              <Document file={file} loading={<Loader2 className="animate-spin text-blue-600" />}>
                <Page pageNumber={pageNumber} scale={scale} renderTextLayer={false} renderAnnotationLayer={false} />
                
                <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
                  {annotations.filter((ann) => Number(ann.page) === pageNumber).map((ann) => {
                    // Get or create the ref for this specific element
                    if (!nodeRefs.current[ann.id]) {
                      nodeRefs.current[ann.id] = createRef<HTMLDivElement>();
                    }

                    return (
                      <Draggable
                        key={ann.id}
                        nodeRef={nodeRefs.current[ann.id]} // THE FIX
                        handle=".drag-handle"
                        bounds="parent"
                        onStop={(e, data) => handleDragStop(ann.id, data)}
                        position={{ 
                          x: (ann.x / 100) * (containerRef.current?.clientWidth || 0), 
                          y: (ann.y / 100) * (containerRef.current?.clientHeight || 0) 
                        }}
                      >
                        <div
                          ref={nodeRefs.current[ann.id]} // ATTACH REF HERE
                          className="pointer-events-auto absolute group"
                          style={{ width: `${ann.w}%`, height: `${ann.h}%` }}
                          onClick={() => setSelectedId(ann.id)}
                        >
                          {/* Control Bar */}
                          <div className={`absolute -top-8 left-0 flex items-center gap-1 transition-opacity bg-white shadow-md border rounded px-1 py-0.5 opacity-0 group-hover:opacity-100 ${selectedId === ann.id ? 'opacity-100' : ''}`}>
                            <div className="drag-handle cursor-move p-1 text-slate-400 hover:text-blue-600">
                              <GripHorizontal size={14} />
                            </div>
                            <button onClick={(e) => { e.stopPropagation(); deleteAnnotation(ann.id); }} className="p-1 text-slate-400 hover:text-red-600">
                              <Trash2 size={14} />
                            </button>
                          </div>

                          <div className={`w-full h-full ${selectedId === ann.id ? 'ring-2 ring-blue-500' : ''}`}>
                            {ann.type === "eraser" ? (
                              <div className="w-full h-full bg-white " />
                            ) : ann.type === "signature" ? (
                              <img src={ann.text} className="w-full h-full object-contain pointer-events-none" alt="sig" />
                            ) : (
                              <textarea
                                value={ann.text}
                                onChange={(e) => handleTextChange(ann.id, e.target.value)}
                                className="w-full h-full bg-transparent border-none outline-none p-0 resize-none overflow-hidden focus:ring-0 text-black"
                                style={{
                                  fontSize: `${(ann.fontSize || 10) * scale}px`,
                                  lineHeight: 1.1,
                                  fontFamily: "sans-serif",
                                }}
                              />
                            )}
                          </div>
                        </div>
                      </Draggable>
                    );
                  })}
                </div>
              </Document>
            )}
          </div>
        </main>

        {file && (
          <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-white shadow-xl border px-6 py-3 rounded-2xl flex items-center gap-6 z-50">
            <button onClick={() => setPageNumber(p => Math.max(p - 1, 1))}><ChevronLeft /></button>
            <span className="text-xs font-black">PAGE {pageNumber} / {numPages}</span>
            <button onClick={() => setPageNumber(p => Math.min(p + 1, numPages))}><ChevronRight /></button>
          </div>
        )}
      </div>

      {showSigModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-slate-800">Draw Signature</h2>
              <button onClick={() => setShowSigModal(false)} className="text-slate-400 hover:text-black transition-colors"><X size={24}/></button>
            </div>
            <div className="border-2 border-slate-100 bg-slate-50 rounded-2xl overflow-hidden shadow-inner">
              <SignatureCanvas ref={sigPad} penColor="black" canvasProps={{ width: 350, height: 200, className: "sigCanvas" }} />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <button onClick={() => sigPad.current.clear()} className="py-3 border border-slate-200 rounded-xl font-bold text-slate-600 hover:bg-slate-50">Clear</button>
              <button onClick={saveSignature} className="py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700">Add Signature</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}