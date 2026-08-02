import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What types of items do you haul?",
    answer: "We haul a wide variety of items including furniture, home appliances, construction debris, green waste, and general household items. We do not haul hazardous materials."
  },
  {
    question: "What are your operating hours?",
    answer: "We operate from 8:00 AM to 9:00 PM, Monday through Sunday. Emergency hauling services outside these hours are available upon request for an additional fee."
  },
  {
    question: "How far in advance should I book?",
    answer: "For guaranteed availability, we recommend booking at least 24-48 hours in advance. However, we do accept same-day bookings depending on our truck availability in your area."
  },
  {
    question: "What is your cancellation policy?",
    answer: "You can cancel or reschedule for free up to 12 hours before your scheduled pickup time. Cancellations made within 12 hours may be subject to a nominal cancellation fee."
  },
  {
    question: "Are there any items you cannot haul?",
    answer: "For safety and legal reasons, we cannot haul hazardous materials, chemicals, wet paint, biological waste, asbestos, highly flammable items, or extremely heavy industrial machinery."
  },
  {
    question: "How does the instant quote calculator work?",
    answer: "Our calculator uses an algorithm based on the service type, your pickup and drop-off distance within Metro Manila, the load size, and the number of helpers required. This provides a highly accurate estimate, though final costs may vary slightly based on actual assessments and toll fees."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-zinc-500">FAQ</h3>
          <h2 className="text-3xl font-extrabold text-zinc-900 leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-500 text-sm">
            Everything you need to know about our Metro Manila hauling services, pricing, and policies.
          </p>
        </div>
        <div className="md:w-2/3 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-2xl overflow-hidden transition-all duration-200 ${isOpen ? 'border-amber-500 bg-amber-50/30' : 'border-zinc-200 bg-white hover:border-zinc-300'}`}
              >
                <button 
                  className="w-full text-left px-5 py-4 flex justify-between items-center gap-4 focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-bold text-zinc-900 text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-zinc-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-amber-600' : ''}`} />
                </button>
                <div 
                  className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}
                >
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
