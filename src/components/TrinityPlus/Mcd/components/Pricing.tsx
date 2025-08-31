import { Check } from 'lucide-react'
import React from 'react'

function Pricing({visibleSections}) {
  return (
    <section id="pricing" className={`scroll-reveal ${visibleSections.has('pricing') ? 'visible' : ''} py-20 px-6`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pricing That <span className="gradient-text">Pays for Itself</span> in Week One
            </h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your business scale</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Starter",
                price: "$299",
                features: ["Up to $10K monthly revenue", "3 marketing channels", "Daily price updates", "Email support", "Basic analytics"],
                featured: false
              },
              {
                name: "Growth",
                price: "$799",
                features: ["Up to $100K monthly revenue", "Unlimited channels", "Hourly updates", "Priority support", "Custom rules", "Advanced analytics"],
                featured: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: ["Unlimited revenue", "Custom integration", "Dedicated success manager", "SLA guarantee", "API access"],
                featured: false,
                custom: true
              }
            ].map((plan, idx) => (
              <div key={idx} className={`bg-white rounded-3xl p-8 text-center relative ${plan.featured ? 'shadow-2xl scale-105 border-2 border-blue-500' : 'shadow-lg'} card-hover`}>
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                <div className="text-5xl font-bold mb-2">
                  {plan.price}
                  {!plan.custom && <span className="text-lg text-gray-500">/month</span>}
                </div>
                <ul className="my-8 space-y-3">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center justify-center gap-2 text-gray-600">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  plan.featured ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-xl' : 
                  plan.custom ? 'border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600' : 
                  'bg-gray-100 hover:bg-gray-200'
                }`}>
                  {plan.custom ? 'Contact Sales' : 'Start Free Trial'}
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 bg-green-50 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-green-800 font-semibold">
              <Check className="inline w-5 h-5 mr-2" />
              30-Day Money Back Guarantee - If MCD doesn't improve your margins, you pay nothing.
            </p>
          </div>
        </div>
    </section>
  )
}

export default Pricing