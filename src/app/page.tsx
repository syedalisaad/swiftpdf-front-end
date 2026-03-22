
import Link from 'next/link';
import { PDF_TOOLS } from '../config/tools';
import RelatedTools from '../components/tools/RelatedTools';
import FeatureBenefits from '../components/tools/FeatureBenefits';



export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">AllWorkflows PDF</h1>
          <p className="text-xl text-gray-600">Fast, secure, and free document tools for everyone.</p>
        </header>

        <RelatedTools/>
        <FeatureBenefits/>
      </div>
    </main>
  );
}