
import Link from 'next/link';
import { PDF_TOOLS } from '../config/tools';



export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">AllWorkflows PDF</h1>
          <p className="text-xl text-gray-600">Fast, secure, and free document tools for everyone.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PDF_TOOLS.map((tool) => (
            <Link key={tool.name} href={tool.href} className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:-translate-y-1">
              <div className={`w-12 h-12 ${tool.color} rounded-lg flex items-center justify-center mb-6`}>
                <tool.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-red-600">{tool.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{tool.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}