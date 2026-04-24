import { Faqs } from "@/src/config/type";

interface props {
  faqs: Faqs[]
}

export default function FaqSection({faqs}:props) {
  return (
    <section className="max-w-4xl mx-auto pb-5">
      <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-8 text-center">
        Frequently Asked Questions
      </h3>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-3xl border border-slate-100 hover:border-red-100 transition-colors"
          >
            <h4 className="text-lg font-bold text-slate-800 mb-2">
              {faq.question}
            </h4>
            <p className="text-lg text-slate-500 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

 
 