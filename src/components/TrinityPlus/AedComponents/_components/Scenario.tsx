import { ShoppingCart, DollarSign, Clock } from 'lucide-react'
import React from 'react'
import ScenarioCard from './ScenarioCard'

function Scenario() {
  return (
    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Real-Life Scenarios
            </h2>
            <p className="text-xl text-gray-600">
              See AED in action during critical moments
            </p>
          </div>

          <div className="space-y-8">
            <ScenarioCard
              title="Black Friday Sale"
              scenario={[
                { actor: "You", text: "I have $50,000 for Black Friday ads" },
                { actor: "AED", text: "Analyzing past Black Fridays... Instagram goes crazy!" },
                { actor: "Result", text: "Auto-shifts 40% budget to Instagram" },
                { actor: "Outcome", text: "Record sales! 🎉" }
              ]}
              icon={<ShoppingCart className="w-6 h-6" />}
            />
            <ScenarioCard
              title="Budget Crunch"
              scenario={[
                { actor: "Company", text: "We're tight on cash this month" },
                { actor: "AED", text: "No problem, I'll only run ads when you have extra money" },
                { actor: "Result", text: "Ads automatically pause/resume based on cash flow" },
                { actor: "Outcome", text: "Zero overspending! 💰" }
              ]}
              icon={<DollarSign className="w-6 h-6" />}
            />
            <ScenarioCard
              title="3 AM Crisis"
              scenario={[
                { actor: "3 AM", text: "TikTok ads start performing terribly" },
                { actor: "AED", text: "Notices immediately, shifts money to other platforms" },
                { actor: "You", text: "Wake up to notification, problem already solved" },
                { actor: "Outcome", text: "Crisis averted! 🛡️" }
              ]}
              icon={<Clock className="w-6 h-6" />}
            />
          </div>
        </div>
    </section>
  )
}

export default Scenario