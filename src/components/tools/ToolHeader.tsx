import React from "react";
import { LucideIcon } from "lucide-react";

interface ToolHeaderProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export default function ToolHeader({ title, description, Icon }: ToolHeaderProps) {
  return (
    <div className="bg-gradient-to-br from-red-600 via-red-500 to-orange-500 p-10 text-gray-900 relative">
      {/* Background Watermark Icon */}
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <Icon size={120} />
      </div>

      <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
        <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl mb-4 border border-white/30">
          <Icon size={28} />
        </div>
        <h3 className="text-4xl font-extrabold tracking-tight mb-2 uppercase">
          {title}
        </h3>
        <p className="text-black-50 text-lg  opacity-90 max-w-md font-medium">
          {description}
        </p>
      </div>
    </div>
  );
}