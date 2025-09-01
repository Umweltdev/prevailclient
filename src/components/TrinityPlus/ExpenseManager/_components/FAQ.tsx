'use client'
import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'

function FAQ() {
    const [faqOpen, setFaqOpen] = useState<number | null>(null);
    const faqs = [
        {
        question: "How is this different from regular budgeting software?",
        answer: "Traditional budgeting tells you what you've spent. Trinity tells you what you CAN spend today while guaranteeing future obligations are met. It's predictive, not reactive."
        },
        {
        question: "What if my revenue fluctuates?",
        answer: "Trinity recalculates everything in real-time. Revenue spike? More capacity. Slow week? It adjusts allocations to keep you safe."
        },
        {
        question: "How do penalties work?",
        answer: "Think of penalties like a financial hangover - they reduce your daily capacity but fade over time. A £10/day penalty might drop to £5/day after 6 months."
        },
        {
        question: "Can I override Trinity's suggestions?",
        answer: "Absolutely. Trinity provides options and recommendations, but you always make the final decision. It's your advisor, not your boss."
        },
        {
        question: "What businesses benefit most?",
        answer: "Any business with irregular expenses and regular income: agencies, consultancies, retail, construction, restaurants - if cash flow keeps you up at night, Trinity helps."
        }
    ];
  return (
    <section className="py-20 border-t" id='faq'>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              {/* Trusted by Growing */}
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                FAQ
              </span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="text-slate-900 rounded-lg border border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-200 transition"
                >
                  <span className="text-slate-900 font-semibold text-left">{faq.question}</span>
                  <ChevronDown 
                    className={`text-gray-400 transition-transform ${faqOpen === idx ? 'rotate-180' : ''}`} 
                    size={20} 
                  />
                </button>
                {faqOpen === idx && (
                  <div className="px-6 py-4 border-t border-gray-700">
                    <p className="text-slate-900">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default FAQ