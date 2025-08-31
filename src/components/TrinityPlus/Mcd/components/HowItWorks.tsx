import { BarChart3, Target, TrendingUp } from 'lucide-react'
import React from 'react'

function HowItWorks({visibleSections}) {
  return (
    <section id="how-it-works" className={`scroll-reveal ${visibleSections.has('how-it-works') ? 'visible' : ''} py-20 px-6`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Intelligent Pricing in <span className="gradient-text">Three Simple Steps</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MCD monitors your marketing performance and automatically adjusts prices to capture proven demand
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 text-center shadow-lg card-hover relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                  <BarChart3 className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Monitor</h3>
                <p className="text-gray-600">
                  MCD tracks every dollar you spend on marketing and every dollar that comes back in revenue, across all your channels.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center shadow-lg card-hover relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center">
                  <Target className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Calculate</h3>
                <p className="text-gray-600">
                  Our algorithm analyzes your marketing efficiency in real-time, determining the true market demand for your products.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center shadow-lg card-hover relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Optimize</h3>
                <p className="text-gray-600">
                  Prices automatically adjust within your set limits – rising during high-demand periods, stabilizing when needed.
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default HowItWorks