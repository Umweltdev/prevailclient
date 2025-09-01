'use client'
import React, { useState } from 'react'
import FAQItem from './FAQ'

function FAQPage() {
  const [activeFaq, setActiveFaq] = useState<null | number>(null);
  return (
    <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600">
              In plain English
            </p>
          </div>

          <div className="space-y-4">
            <FAQItem
              question="How does it know where to put my money?"
              answer="Simple! It looks at what's making money and what isn't. If Google brings you $3 for every $1 spent, but Facebook only brings $1.50, it gives more money to Google. It's like a smart investor watching your portfolio."
              isOpen={activeFaq === 0}
              onClick={() => setActiveFaq(activeFaq === 0 ? null : 0)}
            />
            <FAQItem
              question="What if I want to change something?"
              answer="You're always in control! There's a simple dashboard where you can set budgets, choose goals (more sales vs. lower costs), pause everything with one click, or override any decision. It's your system - AED just does the heavy lifting."
              isOpen={activeFaq === 1}
              onClick={() => setActiveFaq(activeFaq === 1 ? null : 1)}
            />
            <FAQItem
              question="Is it safe? What about my data?"
              answer="Absolutely! Think of it like online banking - encrypted connections (like a locked vault), password protected, you can stop everything instantly, and there's a full history of every action. Your data never leaves your control."
              isOpen={activeFaq === 2}
              onClick={() => setActiveFaq(activeFaq === 2 ? null : 2)}
            />
            <FAQItem
              question="Will it spend all my money?"
              answer="Never! You set strict limits: maximum daily spend, maximum per platform, and automatic stops if something seems wrong. AED respects your budget constraints and can even connect to your accounting system to ensure you never overspend."
              isOpen={activeFaq === 3}
              onClick={() => setActiveFaq(activeFaq === 3 ? null : 3)}
            />
            <FAQItem
              question="How quickly will I see results?"
              answer="Most businesses see improvements within the first week! Week 1: Everything organized in one place. Week 2: First optimizations kick in. Month 1: 20-30% better performance. Month 3: Full optimization with 4x average ROI."
              isOpen={activeFaq === 4}
              onClick={() => setActiveFaq(activeFaq === 4 ? null : 4)}
            />
          </div>
        </div>
      </section>
  )
}

export default FAQPage