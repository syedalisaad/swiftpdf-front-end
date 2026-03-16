import React from "react";
import { GripVertical, X, FileText, FileSpreadsheet, File as FileIcon } from "lucide-react";

interface FileCardProps {
  file: File;
  index: number;
  file_type?: 'word' | 'excel' | 'pdf' | 'ppt'; // Optional with default
  onRemove: (index: number) => void;
}

const TYPE_CONFIG = {
  pdf: {
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-100",
    accent: "bg-red-600",
    hover: "hover:border-red-200",
    icon: FileIcon
  },
  word: {
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    accent: "bg-blue-600",
    hover: "hover:border-blue-200",
    icon: FileText
  },
  excel: {
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-100",
    accent: "bg-green-600",
    hover: "hover:border-green-200",
    icon: FileSpreadsheet
  },
   ppt: {
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-100",
    accent: "bg-orange-600",
    hover: "hover:border-orange-200",
    icon: FileSpreadsheet
  }
};

export default function FileCard({ 
  file, 
  index, 
  file_type = 'pdf', // Defaulting to pdf
  onRemove 
}: FileCardProps) {
  
  const config = TYPE_CONFIG[file_type];
  const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);

  return (
    <div className={`flex items-center justify-between p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md ${config.hover} transition-all group animate-in fade-in slide-in-from-left-2 duration-300`}>
      <div className="flex items-center gap-4">
        {/* Drag Handle */}
        <GripVertical className="text-gray-300 group-hover:text-gray-400 cursor-grab active:cursor-grabbing" size={20} />
        
        {/* File Thumbnail Icon */}
        <div className="relative">
          <div className={`w-12 h-14 ${config.bg} rounded-lg flex flex-col items-center justify-center border ${config.border} shadow-sm`}>
            {/* Top Bar Accent */}
            <div className={`${config.accent} w-full h-1.5 absolute top-0 rounded-t-lg`}></div>
            
            {/* Dynamic Icon */}
            <config.icon size={20} className={config.color} />
            
            <span className={`text-[9px] font-black uppercase mt-1 ${config.color}`}>
              {file_type}
            </span>
          </div>

          {/* File Index Badge */}
          <div className="absolute -top-2 -right-2 bg-white text-gray-500 text-[10px] w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center font-bold shadow-sm">
            {index + 1}
          </div>
        </div>

        {/* File Info */}
        <div className="overflow-hidden">
          <p className="text-sm font-bold text-gray-800 truncate max-w-[140px] md:max-w-md" title={file.name}>
            {file.name}
          </p>
          <div className="flex items-center gap-2">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              {fileSizeMB} MB
            </p>
            <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              Ready
            </p>
          </div>
        </div>
      </div>

      {/* Remove Button */}
      <button 
        onClick={() => onRemove(index)} 
        className="p-2.5 bg-gray-50 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all active:scale-90 border border-transparent hover:border-red-100"
        title="Remove file"
      >
        <X size={18} />
      </button>
    </div>
  );
}