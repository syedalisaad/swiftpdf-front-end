import React from "react";
import { GripVertical, X } from "lucide-react";

interface FileCardProps {
  file: File;
  index: number;
  onRemove: (index: number) => void;
}

export default function FileCard({ file, index, onRemove }: FileCardProps) {
  // Helper to format file size
  const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);

  return (
    <div className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-red-100 transition-all group animate-in fade-in slide-in-from-left-2 duration-300">
      <div className="flex items-center gap-4">
        {/* Drag Handle */}
        <GripVertical className="text-gray-300 group-hover:text-gray-400 cursor-grab active:cursor-grabbing" size={20} />
        
        {/* PDF Thumbnail Icon */}
        <div className="relative">
          <div className="w-12 h-14 bg-red-50 rounded-lg flex flex-col items-center justify-center border border-red-100">
            <div className="bg-red-600 w-full h-2 absolute top-0 rounded-t-lg"></div>
            <span className="text-[10px] font-black text-red-600 mt-1">PDF</span>
          </div>
          {/* File Index Badge */}
          <div className="absolute -top-2 -right-2 bg-white text-gray-500 text-[10px] w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center font-bold shadow-sm">
            {index + 1}
          </div>
        </div>

        {/* File Info */}
        <div className="overflow-hidden">
          <p className="text-sm font-bold text-gray-800 truncate max-w-[150px] md:max-w-md">
            {file.name}
          </p>
          <p className="text-xs font-medium text-gray-400 uppercase tracking-tighter">
            {fileSizeMB} MB
          </p>
        </div>
      </div>

      {/* Remove Button */}
      <button 
        onClick={() => onRemove(index)} 
        className="p-2 bg-gray-50 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all active:scale-90"
        title="Remove file"
      >
        <X size={18} />
      </button>
    </div>
  );
}