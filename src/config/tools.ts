import { 
  Merge, Scissors, FileText, FileType, 
  Presentation, TableProperties, Image as ImageIcon, FileOutput, FileSliders
} from 'lucide-react';

export const PDF_TOOLS = [
  { 
    id: 'merge-pdf',
    name: 'Merge PDF', 
    desc: 'Combine multiple PDFs into one', 
    icon: Merge, 
    href: '/merge-pdf', 
    color: 'bg-red-50 text-red-600' 
  },
  { 
    id: 'split-pdf',
    name: 'Split PDF', 
    desc: 'Extract pages from your PDF', 
    icon: Scissors, 
    href: '/split-pdf', 
    color: 'bg-orange-50 text-orange-600' 
  },
  { 
    id: 'pdf-to-word',
    name: 'PDF to Word', 
    desc: 'Convert PDF to editable Docx', 
    icon: FileText, 
    href: '/pdf-to-word', 
    color: 'bg-blue-50 text-blue-500' 
  },
  { 
    id: 'word-to-pdf',
    name: 'Word to PDF', 
    desc: 'Create PDF from Docx files', 
    icon: FileType, 
    href: '/word-to-pdf', 
    color: 'bg-indigo-50 text-indigo-600' 
  },
  { 
    id: 'ppt-to-pdf',
    name: 'PPT to PDF', 
    desc: 'PowerPoint to PDF slides', 
    icon: Presentation, 
    href: '/ppt-to-pdf', 
    color: 'bg-amber-50 text-amber-600' 
  },
{ 
    id: 'pdf-to-ppt',
    name: 'PDF to PPT', 
    desc: 'Convert PDF to PowerPoint slides', 
    icon: FileSliders, 
    href: '/pdf-to-ppt', 
    color: 'bg-rose-50 text-rose-600' 
  },
  { 
    id: 'excel-to-pdf',
    name: 'Excel to PDF', 
    desc: 'Turn spreadsheets into PDF', 
    icon: TableProperties, 
    href: '/excel-to-pdf', 
    color: 'bg-green-50 text-green-600' 
  },
  { 
    id: 'image-to-pdf',
    name: 'Image to PDF', 
    desc: 'Convert Image to PDF', 
    icon: ImageIcon, 
    href: '/image-to-pdf', 
    color: 'bg-purple-50 text-purple-600' 
  },
  { 
    id: 'pdf-to-image',
    name: 'PDF to Image', 
    desc: 'Extract images from PDF', 
    icon: FileOutput, 
    href: '/pdf-to-image', 
    color: 'bg-pink-50 text-pink-600' 
  },
];