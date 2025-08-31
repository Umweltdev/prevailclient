import { Target, TrendingUp, Zap, Shield, BarChart3, RefreshCw } from 'lucide-react'
import React from 'react'

function Benefits({visibleSections}) {
  return (
    <section id="benefits" className={`scroll-reveal ${visibleSections.has('benefits') ? 'visible' : ''} py-20 px-6`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">
              Transform Marketing from <span className="gradient-text">Cost Center to Profit Driver</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Target className="w-8 h-8" />, title: "Marketing That Pays for Itself", desc: "When campaigns succeed, price increases offset advertising costs. Your customer acquisition becomes essentially free." },
              { icon: <TrendingUp className="w-8 h-8" />, title: "12% Average Margin Improvement", desc: "Most businesses see profit margins increase by 12% within 90 days without losing customers." },
              { icon: <Zap className="w-8 h-8" />, title: "24/7 Price Optimization", desc: "While you sleep, MCD responds to market conditions, capturing value you'd otherwise miss." },
              { icon: <Shield className="w-8 h-8" />, title: "Protected During Downturns", desc: "Poor marketing performance? Prices stay stable. You're protected when you need it most." },
              { icon: <BarChart3 className="w-8 h-8" />, title: "Data-Driven Confidence", desc: "Every price change is based on real market signals, not guesswork or competitor watching." },
              { icon: <RefreshCw className="w-8 h-8" />, title: "Sustainable Scaling", desc: "Finally scale your advertising without destroying your margins. Growth becomes profitable, not painful." }
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="text-blue-500 flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default Benefits