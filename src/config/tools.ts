import {
  Merge,
  Scissors,
  FileText,
  FileType,
  Presentation,
  TableProperties,
  Image as ImageIcon,
  FileSliders,
  FileSpreadsheet,
  FilePenLine,
  ScanSearch,
  Mic2,
  FileVolume,
  FileInputIcon,
} from "lucide-react";


export const PDF_TOOLS = [
  // ORGANIZE
  { 
    id: "merge-pdf", 
    name: "Merge PDF", 
    category: "Organize", 
    icon: Merge, 
    href: "/merge-pdf", 
    color: "text-red-600",
    desc: "Combine multiple PDF files into one organized document."
  },
  { 
    id: "split-pdf", 
    name: "Split PDF", 
    category: "Organize", 
    icon: Scissors, 
    href: "/split-pdf", 
    color: "text-orange-600",
    desc: "Separate one PDF into multiple files or extract specific pages."
  },
  { 
    id: "pdf-editor", 
    name: "Edit PDF", 
    category: "Organize", 
    icon: FilePenLine, 
    href: "/edit-pdf", 
    color: "text-red-700",
    desc: "Modify text, images, and annotations directly in your PDF."
  },
  
  // CONVERT TO PDF
  { 
    id: "word-to-pdf", 
    name: "Word to PDF", 
    category: "Convert to PDF", 
    icon: FileType, 
    href: "/word-to-pdf", 
    color: "text-indigo-600",
    desc: "Transform Microsoft Word documents into high-quality PDFs."
  },
  { 
    id: "ppt-to-pdf", 
    name: "PPT to PDF", 
    category: "Convert to PDF", 
    icon: Presentation, 
    href: "/ppt-to-pdf", 
    color: "text-amber-600",
    desc: "Convert PowerPoint presentations into easy-to-share PDF slides."
  },
  { 
    id: "excel-to-pdf", 
    name: "Excel to PDF", 
    category: "Convert to PDF", 
    icon: TableProperties, 
    href: "/excel-to-pdf", 
    color: "text-green-600",
    desc: "Change Excel spreadsheets into clean, readable PDF tables."
  },
  { 
    id: "image-to-pdf", 
    name: "Image to PDF", 
    category: "Convert to PDF", 
    icon: ImageIcon, 
    href: "/image-to-pdf", 
    color: "text-purple-600",
    desc: "Convert JPG, PNG, and other images into a single PDF file."
  },

  // CONVERT FROM PDF
  { 
    id: "pdf-to-word", 
    name: "PDF to Word", 
    category: "Convert from PDF", 
    icon: FileText, 
    href: "/pdf-to-word", 
    color: "text-blue-500",
    desc: "Turn your PDF back into an editable Microsoft Word document."
  },
  { 
    id: "pdf-to-ppt", 
    name: "PDF to PPT", 
    category: "Convert from PDF", 
    icon: FileSliders, 
    href: "/pdf-to-ppt", 
    color: "text-rose-600",
    desc: "Convert PDF content into editable PowerPoint presentation slides."
  },
  { 
    id: "pdf-to-excel", 
    name: "PDF to Excel", 
    category: "Convert from PDF", 
    icon: FileSpreadsheet, 
    href: "/pdf-to-excel", 
    color: "text-emerald-600",
    desc: "Extract PDF data and tables directly into Excel spreadsheets."
  },
  { 
    id: "pdf-to-image", 
    name: "PDF to Image", 
    category: "Convert from PDF", 
    icon: FileInputIcon, 
    href: "/pdf-to-image", 
    color: "text-pink-600",
    desc: "Export pages from your PDF as high-quality image files."
  },

  // AI & ADVANCED
  { 
    id: 'pdf-to-speech', 
    name: 'AI PDF Reader', 
    category: "AI Tools", 
    icon: FileVolume, 
    href: '/pdf-to-speech', 
    color: 'text-violet-700',
    desc: "Use AI to listen to your PDF documents with natural voices."
  },
  { 
    id: 'text-to-speech', 
    name: 'AI Text Reader', 
    category: "AI Tools", 
    icon: Mic2, 
    href: '/text-to-speech', 
    color: 'text-purple-600',
    desc: "Convert any text into high-quality AI-generated speech."
  },
  { 
    id: "ats-checker", 
    name: "ATS Checker", 
    category: "AI Tools", 
    icon: ScanSearch, 
    href: "/ats-checker", 
    color: "text-cyan-600",
    desc: "Optimize your resume to pass Applicant Tracking Systems easily."
  },
];
