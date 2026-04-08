import Link from "next/link";
import { PDF_TOOLS } from "@/src/config/tools";

interface RelatedToolsProps {
  activeTool?: string;
  hoverColor?: string;
}

export default function RelatedTools({ activeTool, hoverColor = "hover:text-red-600" }: RelatedToolsProps) {
  // Filter out the current tool so you don't recommend the page the user is already on
  const filteredTools = PDF_TOOLS.filter((tool) => tool.name !== activeTool);

  return (
    <section className="mt-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredTools.map((tool) => (
          <Link
            key={tool.name}
            href={tool.href}
            className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:-translate-y-1"
          >
            <div className={`w-12 h-12 ${tool.color} rounded-lg flex items-center justify-center mb-6`}>
              <tool.icon size={24} />
            </div>
            <h3 className={`text-xl font-bold text-gray-800 mb-2 transition-colors ${hoverColor}`}>
              {tool.name}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {tool.desc}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}