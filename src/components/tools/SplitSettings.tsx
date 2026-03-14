import React from "react";
import { Scissors } from "lucide-react";

interface SplitSettingsProps {
  splitMode: "all" | "range";
  setSplitMode: (mode: "all" | "range") => void;
  range: string;
  setRange: (range: string) => void;
}

export default function SplitSettings({ splitMode, setSplitMode, range, setRange }: SplitSettingsProps) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mt-6">
      <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
        <Scissors size={16} /> Split Options
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Option 1: Extract All */}
        <button
          onClick={() => setSplitMode("all")}
          className={`p-4 rounded-xl border-2 text-left transition-all ${
            splitMode === "all" 
            ? "border-red-600 bg-red-50" 
            : "border-transparent bg-white hover:border-gray-200"
          }`}
        >
          <p className={`font-bold ${splitMode === "all" ? "text-red-600" : "text-gray-700"}`}>Extract all pages</p>
          <p className="text-xs text-gray-500">Every page will become a separate PDF.</p>
        </button>

        {/* Option 2: Range */}
        <button
          onClick={() => setSplitMode("range")}
          className={`p-4 rounded-xl border-2 text-left transition-all ${
            splitMode === "range" 
            ? "border-red-600 bg-red-50" 
            : "border-transparent bg-white hover:border-gray-200"
          }`}
        >
          <p className={`font-bold ${splitMode === "range" ? "text-red-600" : "text-gray-700"}`}>Select Range</p>
          <p className="text-xs text-gray-500">Extract a specific set of pages.</p>
        </button>
      </div>

      {splitMode === "range" && (
        <div className="mt-4 animate-in fade-in zoom-in-95 duration-200">
          <label className="text-xs font-bold text-gray-400 mb-1 block">PAGE RANGE (e.g., 1-5, 8, 11-13)</label>
          <input 
            type="text"
            value={range}
            onChange={(e) => setRange(e.target.value)}
            placeholder="1-5"
            className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 outline-none font-mono text-sm"
          />
        </div>
      )}
    </div>
  );
}