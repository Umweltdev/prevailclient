import { ArrowRight } from 'lucide-react'
import React from 'react'

function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Stop Wasting Money on Ads?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join 1,000+ businesses already using AED to maximize their advertising ROI
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center">
              Start 14-Day Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-200">
              Schedule Demo
            </button>
          </div>
          <p className="text-white/80 mt-6 text-sm">
            No credit card required • Setup in 10 minutes • Cancel anytime
          </p>
        </div>
    </section>
  )
}

export default CTA