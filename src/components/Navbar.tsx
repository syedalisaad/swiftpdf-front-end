"use client";
import { useState } from "react"; // Added for state
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react"; // Added for the arrow icon
import { PDF_TOOLS } from "../config/tools";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownTools = PDF_TOOLS.slice(0, 4);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* LOGO SECTION */}
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <Image
            src="/logo.png"
            alt="SwiftPDF Logo"
            width={70}
            height={70}
            className="object-contain"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-red-600 transition-colors py-4">
              Tools{" "}
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`absolute top-full -left-4 w-52 bg-white border border-gray-100 shadow-xl rounded-xl py-2 transition-all duration-200 ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
            >
              {dropdownTools.map((tool) => (
                <Link
                  key={tool.id}
                  href={tool.href}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors"
                >
                  <tool.icon size={18} className="text-red-500" />
                  {tool.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
