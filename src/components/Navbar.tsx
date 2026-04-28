"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Sparkles, LayoutGrid, ArrowRightLeft, FileUp, Cpu } from "lucide-react";
import { PDF_TOOLS } from "../config/tools";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  // Group tools by category for precise mapping
  const getToolsByCat = (catName: string) => 
    PDF_TOOLS.filter(tool => tool.category === catName);

  const navItems = [
    { name: "Organize", icon: LayoutGrid },
    { name: "Convert to PDF", icon: FileUp },
    { name: "Convert from PDF", icon: ArrowRightLeft },
    { name: "AI Tools", icon: Cpu },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-all shrink-0">
          <Image src="/logo.png" alt="SwiftPDF" width={50} height={50} priority />
          <span className="text-xl font-bold tracking-tight text-gray-900 hidden sm:block">
            Swift<span className="text-red-600">PDF</span>
          </span>
        </Link>

        {/* CATEGORY NAVIGATION */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div 
              key={item.name}
              className="relative"
              onMouseEnter={() => setActiveMenu(item.name)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className={`flex items-center gap-1.5 px-4 py-7 text-sm font-semibold transition-all ${
                activeMenu === item.name ? 'text-red-600' : 'text-gray-600 hover:text-red-600'
              }`}>
                <item.icon size={16} className="opacity-70" />
                {item.name}
                <ChevronDown size={14} className={`transition-transform duration-200 ${activeMenu === item.name ? "rotate-180" : ""}`} />
              </button>

              {/* DROPDOWN */}
              <div className={`absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-2xl rounded-2xl p-3 transition-all duration-300 ${
                activeMenu === item.name ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              }`}>
                <div className="flex flex-col gap-1">
                  {getToolsByCat(item.name).map((tool) => (
                    <Link
                      key={tool.id}
                      href={tool.href}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all group"
                    >
                      <tool.icon size={18} className={`${tool.color} transition-transform group-hover:scale-110`} />
                      {tool.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </nav>
  );
}