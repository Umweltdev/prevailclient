import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react'

function FAQ({visibleSections}) {
    const [activeFaq, setActiveFaq] = useState(0)
    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

  const faqs = [
    {
      question: "Won't customers notice price changes?",
      answer: "Changes are typically 2-5% and happen gradually. In 3 years of operation, we've had zero customer complaints about price adjustments. The smoothing algorithm ensures changes are virtually invisible to customers."
    },
    {
      question: "What if prices go too high?",
      answer: "You set the maximum cap (usually 15%). MCD will never exceed your comfort zone, and the self-balancing nature brings prices down if sales drop. You have complete control over the limits."
    },
    {
      question: "How quickly will I see results?",
      answer: "Most businesses see margin improvements within the first week. Full optimization typically occurs within 30 days as the system learns your marketing patterns."
    },
    {
      question: "Does this work with my platform?",
      answer: "MCD integrates with Shopify, WooCommerce, BigCommerce, and custom platforms via API. Setup takes less than 10 minutes with our guided integration."
    },
    {
      question: "Can I exclude certain products?",
      answer: "Yes, you have complete control over which products use MCD pricing. You can exclude specific products, categories, or set different rules for different product lines."
    }
  ];
  return (
    <section id="faq" className={`scroll-reveal ${visibleSections.has('faq') ? 'visible' : ''} py-20 px-6 bg-gray-50`}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">
              Questions? <span className="gradient-text">We've Got Answers</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <ChevronDown className={`w-5 h-5 text-blue-500 flex-shrink-0 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeFaq === idx ? 'max-h-96' : 'max-h-0'}`}>
                  <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default FAQ