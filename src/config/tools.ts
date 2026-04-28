import {
  Merge,
  Scissors,
  FileText,
  FileType,
  Presentation,
  TableProperties,
  Image as ImageIcon,
  FileOutput,
  FileSliders,
  FileSpreadsheet,
  FilePenLine,
  ScanSearch,
  Volume2,
  Mic2,
  FileVolume,
} from "lucide-react";

export const PDF_TOOLS = [
  // ORGANIZE
  { id: "merge-pdf", name: "Merge PDF", category: "Organize", icon: Merge, href: "/merge-pdf", color: "text-red-600" },
  { id: "split-pdf", name: "Split PDF", category: "Organize", icon: Scissors, href: "/split-pdf", color: "text-orange-600" },
  { id: "pdf-editor", name: "Edit PDF", category: "Organize", icon: FilePenLine, href: "/edit-pdf", color: "text-red-700" },
  
  // CONVERT TO PDF
  { id: "word-to-pdf", name: "Word to PDF", category: "Convert to PDF", icon: FileType, href: "/word-to-pdf", color: "text-indigo-600" },
  { id: "ppt-to-pdf", name: "PPT to PDF", category: "Convert to PDF", icon: Presentation, href: "/ppt-to-pdf", color: "text-amber-600" },
  { id: "excel-to-pdf", name: "Excel to PDF", category: "Convert to PDF", icon: TableProperties, href: "/excel-to-pdf", color: "text-green-600" },
  { id: "image-to-pdf", name: "Image to PDF", category: "Convert to PDF", icon: ImageIcon, href: "/image-to-pdf", color: "text-purple-600" },

  // CONVERT FROM PDF
  { id: "pdf-to-word", name: "PDF to Word", category: "Convert from PDF", icon: FileText, href: "/pdf-to-word", color: "text-blue-500" },
  { id: "pdf-to-ppt", name: "PDF to PPT", category: "Convert from PDF", icon: FileSliders, href: "/pdf-to-ppt", color: "text-rose-600" },
  { id: "pdf-to-excel", name: "PDF to Excel", category: "Convert from PDF", icon: FileSpreadsheet, href: "/pdf-to-excel", color: "text-emerald-600" },
  { id: "pdf-to-image", name: "PDF to Image", category: "Convert from PDF", icon: FileOutput, href: "/pdf-to-image", color: "text-pink-600" },

  // AI & ADVANCED
  { id: 'pdf-to-speech', name: 'AI PDF Reader', category: "AI Tools", icon: FileVolume, href: '/pdf-to-speech', color: 'text-violet-700' },
  { id: 'text-to-speech', name: 'AI Text Reader', category: "AI Tools", icon: Mic2, href: '/text-to-speech', color: 'text-purple-600' },
  { id: "ats-checker", name: "ATS Checker", category: "AI Tools", icon: ScanSearch, href: "/ats-checker", color: "text-cyan-600" },
];
