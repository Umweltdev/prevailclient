import React from 'react'

function CTA() {
  return (
    <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Stop Losing Sleep Over Cash Flow
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that never worry about running out of money. 
              30-day free trial, no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Start Your Free Trial
              </button>
              <button className="px-8 py-4 bg-white/20 backdrop-blur text-white rounded-lg font-semibold text-lg border border-white/30 hover:bg-white/30 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
            <p className="mt-6 text-white/70">
              Average user saves £12,000/year in avoided emergency loans
            </p>
          </div>
        </div>
      </section>
  )
}

export default CTA