import { ShieldCheck, Zap, Sparkles } from "lucide-react";

const FEATURES = [
  {
    title: "Safe & Secure",
    desc: "Military-grade encryption for your documents. We delete everything within 1 hour.",
    icon: ShieldCheck,
    color: "text-red-500",
  },
  {
    title: "Swift Engine",
    desc: "Powered by high-performance servers to merge hundreds of pages in milliseconds.",
    icon: Zap,
    color: "text-orange-500",
  },
  {
    title: "Pro Features",
    desc: "Perfect formatting, table of contents retention, and high-resolution output.",
    icon: Sparkles,
    color: "text-purple-500",
  },
];

export default function FeatureBenefits() {
  return (
    <section className="mt-20">
      <div className="grid md:grid-cols-3 gap-12">
        {FEATURES.map((feature) => (
          <div key={feature.title} className="flex flex-col items-center text-center group">
            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300">
              <feature.icon size={28} className={feature.color} />
            </div>
            <h4 className="font-black text-gray-800 mb-3 text-lg">
              {feature.title}
            </h4>
            <p className="text-gray-500 leading-relaxed text-sm">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}