import { Coffee, PieChart, Brain } from 'lucide-react'
import React from 'react'
import ProcessCard from './ProcessCard'

function Analogy() {
  return (
    <section className="py-20" id='How'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              How AED Works
            </h2>
            <p className="text-xl text-gray-600">
              Think of it like a restaurant chain manager
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ProcessCard
              step="1"
              title="Morning Check-In"
              description="AED visits each 'restaurant' (platform) and checks performance"
              icon={<Coffee className="w-8 h-8" />}
              details={[
                "How many customers? (Impressions)",
                "How many ordered? (Clicks)",
                "How many paid? (Conversions)",
                "How much profit? (Revenue)"
              ]}
            />
            <ProcessCard
              step="2"
              title="Budget Meeting"
              description="Analyzes which platforms are making money"
              icon={<PieChart className="w-8 h-8" />}
              details={[
                "Google: $3 return per $1 ✅",
                "TikTok: $3.50 return per $1 🎉",
                "LinkedIn: $1.50 return per $1 🤔",
                "Decision: More budget to TikTok!"
              ]}
            />
            <ProcessCard
              step="3"
              title="Smart Learning"
              description="Notices patterns and adjusts automatically"
              icon={<Brain className="w-8 h-8" />}
              details={[
                "TikTok rocks on weekends",
                "LinkedIn best Tuesday AM",
                "Instagram lunch hours winner",
                "Auto-adjusts by day/time"
              ]}
            />
          </div>
        </div>
    </section>
  )
}

export default Analogy