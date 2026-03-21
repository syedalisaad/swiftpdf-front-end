"use client";
import { useState, useRef, useEffect, createRef } from "react";
import {
  Loader2,
  Signature,
  Download,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Type,
  Eraser,
  X,
  Trash2,
  GripHorizontal,
} from "lucide-react";
import dynamic from "next/dynamic";
import SignatureCanvas from "react-signature-canvas";

const Document = dynamic(
  () => import("react-pdf").then((mod) => mod.Document),
  { ssr: false },
);
const Page = dynamic(() => import("react-pdf").then((mod) => mod.Page), {
  ssr: false,
});
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
  const [scale, setScale] = useState(1);
  const [showSigModal, setShowSigModal] = useState(false);
  const [renderKey, setRenderKey] = useState(0);
  const [isPdfReady, setIsPdfReady] = useState(false);

  const pageRef = useRef<HTMLDivElement>(null);

  const sigPad = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<{
    [key: string]: React.RefObject<HTMLDivElement | null>;
  }>({});

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
      prev.map((ann) => (ann.id === id ? { ...ann, text: newText } : ann)),
    );
  };

  // NEW: Function to handle style updates (Color & Size)
  const updateStyle = (id: string, property: string, value: any) => {
    setAnnotations((prev) =>
      prev.map((ann) => (ann.id === id ? { ...ann, [property]: value } : ann)),
    );
  };

  const deleteAnnotation = (id: string) => {
    setAnnotations((prev) => prev.filter((ann) => ann.id !== id));
    if (nodeRefs.current[id]) delete nodeRefs.current[id];
    setSelectedId(null);
  };

  const handleDragStop = (id: string, data: any) => {
    if (!pageRef.current) return;
    const rect = pageRef.current.getBoundingClientRect();
    const pageWidth = rect.width;
    const pageHeight = rect.height;
    console.log((data.x / pageWidth) * 100);
    setAnnotations((prev) =>
      prev.map((ann) => {
        if (ann.id === id) {
          return {
            ...ann,
            x: (data.x / pageWidth) * 100,
            y: (data.y / pageHeight) * 100,
          };
        }
        return ann;
      }),
    );
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (!uploadedFile) return;
    setAnnotations([]);
    setPageNumber(1);
    setOriginalFile(uploadedFile);
    setLoading(true);
    setIsPdfReady(false);

    const formData = new FormData();
    formData.append("pdf", uploadedFile);

    try {
      const res = await fetch("http://localhost:8000/analyze-pdf", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      const uniqueBlocks = (data.blocks || []).map(
        (block: any, idx: number) => {
          const id = block.id
            ? `${block.id}-${idx}-${Date.now()}`
            : `block-${idx}-${Date.now()}`;
          nodeRefs.current[id] = createRef<HTMLDivElement>();
          return {
            ...block,
            id,
            color: block.color || "#000000",
            fontSize: block.fontSize || 12,
          };
        },
      );

      setAnnotations(uniqueBlocks || []);
      if (data.cleanPdf) setFile(data.cleanPdf);
      setNumPages(Math.max(...(uniqueBlocks.map((b: any) => b.page) || [1])));
      setRenderKey((prev) => prev + 1);
    } catch (err) {
      alert("Analysis Error");
    } finally {
      setLoading(false);
    }
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setTimeout(() => {
      setIsPdfReady(true);
      setLoading(false);
    }, 500);
  };

  const addCustomText = () => {
    const id = `txt-${Date.now()}`;
    nodeRefs.current[id] = createRef<HTMLDivElement>();
    setAnnotations([
      ...annotations,
      {
        id,
        page: pageNumber,
        text: "Click to edit",
        x: 10,
        y: 10,
        w: 20,
        h: 4,
        type: "text",
        fontSize: 14,
        color: "#2563EB",
      },
    ]);
    setSelectedId(id);
  };

  const addEraser = () => {
    const id = `ers-${Date.now()}`;
    nodeRefs.current[id] = createRef<HTMLDivElement>();
    setAnnotations([
      ...annotations,
      {
        id,
        page: pageNumber,
        text: "",
        x: 15,
        y: 15,
        w: 10,
        h: 5,
        type: "eraser",
      },
    ]);
    setSelectedId(id);
  };

  const saveSignature = () => {
    if (sigPad.current.isEmpty()) return;

    // Get the base64 string
    const dataUrl = sigPad.current.getTrimmedCanvas().toDataURL("image/png");

    const id = `sig-${Date.now()}`;
    nodeRefs.current[id] = createRef<HTMLDivElement>();

    const newAnnotation = {
      id,
      page: pageNumber,
      text: dataUrl, // This holds the base64 string
      x: 20,
      y: 20,
      w: 25,
      h: 12,
      type: "signature",
    };

    setAnnotations((prev) => [...prev, newAnnotation]);
    setShowSigModal(false);
  };

  const handleZoom = (type: "in" | "out") => {
    setScale((prev) => {
      if (type === "in") return Math.min(prev + 0.1, 3); // max zoom
      if (type === "out") return Math.max(prev - 0.1, 0.5); // min zoom
      return prev;
    });
  };

  const handleDownload = async () => {
    if (!originalFile) return;
    setDownloading(true);
    const formData = new FormData();
    formData.append("pdf", originalFile);
    formData.append("updates", JSON.stringify(annotations));
    try {
      const res = await fetch("http://localhost:8000/process-pdf", {
        method: "POST",
        body: formData,
      });
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
      {/* Sidebar */}
      <aside className="w-20 bg-white border-r border-slate-200 flex flex-col items-center py-6 gap-6 z-50">
        <div className="text-blue-600 font-black italic text-xl underline decoration-2 underline-offset-4">
          TB
        </div>
        <button
          onClick={addCustomText}
          className="p-3 hover:bg-blue-50 text-slate-400 hover:text-blue-600 rounded-xl transition-all"
        >
          <Type size={24} />
        </button>
        <button
          onClick={addEraser}
          className="p-3 hover:bg-blue-50 text-slate-400 hover:text-blue-600 rounded-xl transition-all"
        >
          <Eraser size={24} />
        </button>
        <button
          onClick={() => setShowSigModal(true)}
          className="p-3 hover:bg-blue-50 text-slate-400 hover:text-blue-600 rounded-xl transition-all"
        >
          <Signature size={24} />
        </button>
      </aside>

      <div className="flex-1 flex flex-col relative">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between z-40">
          <input
            type="file"
            onChange={handleFileUpload}
            className="text-xs font-bold text-slate-400 cursor-pointer"
          />
          <div className="flex items-center gap-4 bg-slate-100 p-1 rounded-lg">
            <button
              onClick={() => handleZoom("out")}
              className="p-1 hover:bg-white rounded"
            >
              <ZoomOut size={16} />
            </button>
            <span className="text-[10px] font-black w-10 text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={() => handleZoom("in")}
              className="p-1 hover:bg-white rounded"
            >
              <ZoomIn size={16} />
            </button>
          </div>
          <button
            onClick={handleDownload}
            disabled={downloading || !file}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg text-xs font-black flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-sm"
          >
            {downloading ? (
              <Loader2 className="animate-spin" size={14} />
            ) : (
              <Download size={14} />
            )}
            {downloading ? "PROCESSING..." : "EXPORT PDF"}
          </button>
        </header>

        <main className="flex-1 overflow-auto bg-[#EDF0F5] p-10 flex justify-center">
          <div
            ref={pageRef}
            className="relative"
            style={{
              width: "min-content", // Forces div to be exactly the width of the scaled PDF
              height: "min-content",
            }}
          >
            {file && (
              <Document
                key={renderKey}
                file={file}
                loading={<Loader2 className="animate-spin text-blue-600" />}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                {/* Wrap Page in a div with the ref to capture exact scaled size */}
                <div
                  ref={pageRef}
                  className="relative inline-block" // Changed to inline-block to hug the PDF
                  style={{ width: "fit-content" }}
                >
                  <Page
                    pageNumber={pageNumber}
                    scale={scale}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />

                  {isPdfReady && (
                    <div className="absolute inset-0 pointer-events-none z-20">
                      {" "}
                      {annotations
                        .filter((ann) => Number(ann.page) === pageNumber)
                        .map((ann) => {
                          if (!nodeRefs.current[ann.id])
                            nodeRefs.current[ann.id] =
                              createRef<HTMLDivElement | null>();

                          return (
                            <Draggable
                              key={`${ann.id}-${scale}`}
                              nodeRef={nodeRefs.current[ann.id]}
                              handle=".drag-handle"
                              bounds="parent" // This now correctly points to the pageRef div
                              onStop={(e, data) => {
                                // 3. PERSISTENT SAVE:
                                // When user stops dragging, save the NEW percentage
                                // based on the NEW scale dimensions.
                                if (!pageRef.current) return;
                                const { width, height } =
                                  pageRef.current.getBoundingClientRect();

                                setAnnotations((prev) =>
                                  prev.map((item) =>
                                    item.id === ann.id
                                      ? {
                                          ...item,
                                          x: (data.x / width) * 100,
                                          y: (data.y / height) * 100,
                                        }
                                      : item,
                                  ),
                                );
                              }}
                              onDrag={(e, data) => handleDragStop(ann.id, data)}
                              position={{
                                x:
                                  (ann.x / 100) *
                                  (pageRef.current?.clientWidth || 0),
                                y:
                                  (ann.y / 100) *
                                  (pageRef.current?.clientHeight || 0),
                              }}
                            >
                              <div
                                ref={nodeRefs.current[ann.id]}
                                className="absolute pointer-events-auto group"
                                style={{
                                  width: `${ann.w}%`,
                                  height: `${ann.h}%`,
                                  // Ensure the container doesn't have its own transform that interferes
                                  transform: "none",
                                }}
                                onClick={() => setSelectedId(ann.id)}
                              >
                                {/* FLOATING STYLE TOOLBAR */}
                                <div
                                  className={`absolute -top-12 left-0 flex items-center gap-2 transition-all bg-white shadow-xl border border-slate-200 rounded-lg px-2 py-1.5 z-[60] opacity-0 group-hover:opacity-100 ${selectedId === ann.id ? "opacity-100" : "pointer-events-none"}`}
                                >
                                  <div className="drag-handle cursor-move p-1 text-slate-400 hover:text-blue-600 border-r pr-2">
                                    <GripHorizontal size={14} />
                                  </div>

                                  {ann.type !== "eraser" &&
                                    ann.type !== "signature" && (
                                      <div className="flex items-center gap-1.5 border-r pr-2">
                                        {[
                                          "#000000",
                                          "#EF4444",
                                          "#2563EB",
                                          "#059669",
                                          "#ffffff",
                                        ].map((c) => (
                                          <button
                                            key={c}
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              updateStyle(ann.id, "color", c);
                                            }}
                                            className={`w-4 h-4 rounded-full border border-slate-200 transition-transform hover:scale-125 ${ann.color === c ? "ring-2 ring-offset-1 ring-blue-400" : ""}`}
                                            style={{ backgroundColor: c }}
                                          />
                                        ))}
                                      </div>
                                    )}

                                  {/* Size Selection */}
                                  {ann.type !== "eraser" &&
                                    ann.type !== "signature" && (
                                      <div className="flex items-center gap-1 border-r pr-2">
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            updateStyle(
                                              ann.id,
                                              "fontSize",
                                              Math.max(
                                                8,
                                                (ann.fontSize || 12) - 2,
                                              ),
                                            );
                                          }}
                                          className="text-[10px] font-bold px-1.5 py-0.5 hover:bg-slate-100 rounded"
                                        >
                                          A-
                                        </button>
                                        <span className="text-[10px] w-5 text-center font-mono font-bold">
                                          {ann.fontSize || 12}
                                        </span>
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            updateStyle(
                                              ann.id,
                                              "fontSize",
                                              Math.min(
                                                64,
                                                (ann.fontSize || 12) + 2,
                                              ),
                                            );
                                          }}
                                          className="text-[10px] font-bold px-1.5 py-0.5 hover:bg-slate-100 rounded"
                                        >
                                          A+
                                        </button>
                                      </div>
                                    )}

                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      deleteAnnotation(ann.id);
                                    }}
                                    className="p-1 text-slate-400 hover:text-red-600 transition-colors"
                                  >
                                    <Trash2 size={14} />
                                  </button>
                                </div>

                                {/* Annotation Body */}
                                <div
                                  className={`w-full h-full transition-all ${selectedId === ann.id ? "ring-2 ring-blue-500 shadow-lg" : ""}`}
                                >
                                  {ann.type === "eraser" ? (
                                    <div className="w-full h-full bg-white" />
                                  ) : ann.type === "signature" ? (
                                    <img
                                      src={ann.text}
                                      className="w-full h-full object-contain pointer-events-none"
                                      alt="sig"
                                    />
                                  ) : (
                                    <textarea
                                      value={ann.text}
                                      onChange={(e) =>
                                        handleTextChange(ann.id, e.target.value)
                                      }
                                      className="w-full h-full bg-transparent border-none outline-none p-0 resize-none overflow-hidden focus:ring-0"
                                      style={{
                                        fontSize: `${(ann.fontSize || 10) * scale}px`,
                                        color: ann.color || "#000000",
                                        lineHeight: 1.1,
                                        fontFamily: "sans-serif",
                                        fontWeight: "500",
                                      }}
                                    />
                                  )}
                                </div>
                              </div>
                            </Draggable>
                          );
                        })}
                    </div>
                  )}
                </div>
              </Document>
            )}
          </div>
        </main>

        {/* Page Navigation */}
        {file && (
          <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-white shadow-2xl border border-slate-200 px-6 py-3 rounded-2xl flex items-center gap-6 z-50">
            <button
              onClick={() => setPageNumber((p) => Math.max(p - 1, 1))}
              className="text-slate-400 hover:text-blue-600 transition-colors"
            >
              <ChevronLeft />
            </button>
            <span className="text-xs font-black tracking-widest text-slate-600 uppercase">
              PAGE {pageNumber} / {numPages}
            </span>
            <button
              onClick={() => setPageNumber((p) => Math.min(p + 1, numPages))}
              className="text-slate-400 hover:text-blue-600 transition-colors"
            >
              <ChevronRight />
            </button>
          </div>
        )}
      </div>

      {showSigModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-slate-800">
                Draw Signature
              </h2>
              <button
                onClick={() => setShowSigModal(false)}
                className="text-slate-400 hover:text-black transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="border-2 border-slate-100 bg-slate-50 rounded-2xl overflow-hidden shadow-inner">
              <SignatureCanvas
                ref={sigPad}
                penColor="black"
                canvasProps={{
                  width: 350,
                  height: 200,
                  className: "sigCanvas",
                }}
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <button
                onClick={() => sigPad.current.clear()}
                className="py-3 border border-slate-200 rounded-xl font-bold text-slate-600 hover:bg-slate-50 transition-colors"
              >
                Clear
              </button>
              <button
                onClick={saveSignature}
                className="py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md active:scale-95"
              >
                Add Signature
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
