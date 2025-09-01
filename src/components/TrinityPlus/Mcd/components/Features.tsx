import { Zap, Shield, Target, Clock, RefreshCw, Lock } from 'lucide-react'
import React from 'react'

function Features({visibleSections}) {
  return (
    <section id="features" className={`scroll-reveal ${visibleSections.has('features') ? 'visible' : ''} py-20 px-6 bg-gray-50`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Every Feature Built for <span className="gradient-text">Profit Protection</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sophisticated technology that works silently in the background
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Zap className="w-6 h-6" />, title: "Invisible to Customers", desc: "Changes happen so gradually (typically 2-3% per week) that customers never experience price shock.", color: "blue" },
              { icon: <Shield className="w-6 h-6" />, title: "Safety Caps", desc: "Set a maximum increase limit (usually 15%) to ensure you never price yourself out of the market.", color: "purple" },
              { icon: <Target className="w-6 h-6" />, title: "Channel Intelligence", desc: "Google Ads showing high intent? Bigger adjustment. Email campaign? Smaller change. MCD knows the difference.", color: "pink" },
              { icon: <Clock className="w-6 h-6" />, title: "Instant Response", desc: "Choose hourly, daily, or weekly price updates based on your business velocity.", color: "green" },
              { icon: <RefreshCw className="w-6 h-6" />, title: "Self-Balancing", desc: "Prices naturally settle at the perfect point between maximum profit and customer demand.", color: "indigo" },
              { icon: <Lock className="w-6 h-6" />, title: "Pause Protection", desc: "When marketing underperforms, prices automatically stabilize or decrease to maintain competitiveness.", color: "yellow" }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-md card-hover group">
                <div className={`w-12 h-12 mb-4 bg-${feature.color}-100 rounded-xl flex items-center justify-center text-${feature.color}-600 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default Features