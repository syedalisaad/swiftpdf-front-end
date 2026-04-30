"use client";
import { uploadFile } from "@/src/lib/api";
import { useState, useRef, useEffect } from "react";
import {
  Volume2,
  VolumeX,
  Trash2,
  Copy,
  FileUp,
  ArrowLeft,
} from "lucide-react";
import RelatedTools from "../tools/RelatedTools";
import FeatureBenefits from "../tools/FeatureBenefits";
import AdBanner from "../tools/AdBanner";
import Link from "next/link";
import { toast } from "sonner";

interface AIReaderProps {
  mode: "pdf" | "text"; // Pass this to switch UI
}

export default function AIReader({ mode }: AIReaderProps) {
  const [text, setText] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      const englishVoice = availableVoices.find((v) => v.lang.startsWith("en"));
      if (englishVoice && !selectedVoice) setSelectedVoice(englishVoice.name);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, [selectedVoice]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const data = await uploadFile("/extract-text", formData, true);
      if (data.text) setText(data.text);
    } catch (error: any) {
      toast.error("Selection Required", {
        description: error.message || "Failed to extract text.",
      });
    } finally {
      setLoading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleListen = () => {
    if (!window.speechSynthesis) return alert("Browser not supported");

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    if (!text.trim()) return alert("Please enter or upload text first!");

    const utterance = new SpeechSynthesisUtterance(text);
    const voice = voices.find((v) => v.name === selectedVoice);
    if (voice) utterance.voice = voice;
    utterance.rate = rate;
    utterance.pitch = pitch;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    // Add toast notification here if you have one
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]  font-sans">
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
          <div >
            <div className="p-6 border-b border-gray-50 flex items-center justify-between bg-gradient-to-r from-white to-slate-50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-600 rounded-lg text-white">
                  <Volume2 size={20} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    {mode === "pdf" ? "PDF Voice Reader" : "Text Voice Reader"}
                  </h2>
                  <p className="text-xs text-gray-500">
                    AI Text-to-Speech Engine
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                v1.0 Free
              </span>
            </div>
            {mode === "pdf" && (
              <>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept=".pdf,.docx,.txt"
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={loading}
                  className="w-full mb-6 border-2 border-dashed border-gray-200 py-10 rounded-2xl text-gray-400 hover:border-blue-400 hover:bg-blue-50/30 hover:text-blue-600 transition-all flex flex-col items-center justify-center gap-3 group"
                >
                  <div className="p-4 bg-gray-50 rounded-full group-hover:bg-blue-100 transition-colors">
                    {loading ? (
                      <span className="animate-spin inline-block text-xl">
                        ⏳
                      </span>
                    ) : (
                      <FileUp size={28} />
                    )}
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-gray-700">
                      {loading
                        ? "Reading Document..."
                        : "Click to Upload PDF / Docx"}
                    </p>
                  </div>
                </button>
              </>
            )}

            {/* Settings Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <div className="space-y-1">
                <label className="text-[10px] font-black text-gray-400 uppercase ml-1">
                  Voice
                </label>
                <select
                  value={selectedVoice}
                  onChange={(e) => setSelectedVoice(e.target.value)}
                  className="w-full bg-white border-none rounded-lg text-sm p-2 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  {voices.map((voice) => (
                    <option key={voice.name} value={voice.name}>
                      {voice.name.replace("Google", "")}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex gap-4">
                <div className="flex-1 space-y-1">
                  <label className="text-[10px] font-black text-gray-400 uppercase text-center block">
                    Speed ({rate}x)
                  </label>
                  <input
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={rate}
                    onChange={(e) => setRate(parseFloat(e.target.value))}
                    className="w-full accent-blue-600"
                  />
                </div>
                <div className="flex-1 space-y-1">
                  <label className="text-[10px] font-black text-gray-400 uppercase text-center block">
                    Pitch ({pitch})
                  </label>
                  <input
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={pitch}
                    onChange={(e) => setPitch(parseFloat(e.target.value))}
                    className="w-full accent-blue-600"
                  />
                </div>
              </div>
            </div>

            <div className="relative group">
              <textarea
                className="w-full p-5 bg-white border border-gray-100 rounded-2xl mb-4 text-gray-700 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none resize-none transition-all shadow-inner"
                rows={mode === "pdf" ? 6 : 10}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={
                  mode === "pdf"
                    ? "Text from your PDF will appear here..."
                    : "Paste your text here to listen..."
                }
              />
              <div className="absolute bottom-8 right-4 flex gap-2">
                <button
                  onClick={copyToClipboard}
                  title="Copy Text"
                  className="p-2 bg-white shadow-md rounded-lg text-gray-400 hover:text-blue-600 border border-gray-100 transition-colors"
                >
                  <Copy size={16} />
                </button>
                <button
                  onClick={() => setText("")}
                  title="Clear"
                  className="p-2 bg-white shadow-md rounded-lg text-gray-400 hover:text-red-600 border border-gray-100 transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
              <div className="absolute bottom-8 left-4 text-[10px] text-gray-400 font-bold uppercase tracking-tight bg-white/50 px-2 rounded">
                {text.length} Chars |{" "}
                {text.trim().split(/\s+/).filter(Boolean).length} Words
              </div>
            </div>

            {/* Main Action Button */}
            <button
              onClick={handleListen}
              className={`w-full py-5 rounded-2xl font-black text-xl transition-all shadow-lg flex items-center justify-center gap-3 ${
                isSpeaking
                  ? "bg-rose-500 hover:bg-rose-600 text-white shadow-rose-200"
                  : "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200"
              }`}
            >
              {isSpeaking ? (
                <>
                  <VolumeX size={24} /> Stop Reading
                </>
              ) : (
                <>
                  <Volume2 size={24} /> Start Reading Aloud
                </>
              )}
            </button>
          </div>
        </div>
        <div className="mb-2 border-b border-gray-50 pb-4">
          <AdBanner
            dataAdSlot="YOUR_TOP_AD_SLOT_ID"
            dataAdFormat="horizontal"
          />
        </div>
        <RelatedTools />
        
      </div>
    </div>
  );
}
