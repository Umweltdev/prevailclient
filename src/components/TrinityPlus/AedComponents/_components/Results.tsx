import React from 'react'
import ROICalculator from './ROICalculator'
import TimelineCard from './TimelineCard'

function Results() {
  return (
    <section className="py-20" id="results">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Real Results from Real Businesses
            </h2>
            <p className="text-xl text-gray-600">
              What happens when you switch to AED
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <TimelineCard
              week="Week 1"
              quote="Wow, I can see all my ads in one place!"
              metric="100% Visibility"
              color="blue"
            />
            <TimelineCard
              week="Week 2"
              quote="It moved budget from LinkedIn to TikTok and sales went up 20%"
              metric="+20% Sales"
              color="green"
            />
            <TimelineCard
              week="Month 1"
              quote="I'm spending 15% less but making 30% more"
              metric="+45% Efficiency"
              color="purple"
            />
            <TimelineCard
              week="Month 3"
              quote="I haven't logged into Facebook Ads in weeks, AED handles it all"
              metric="95% Time Saved"
              color="orange"
            />
          </div>

          {/* ROI Calculator */}
          <div className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold gradient-text text-center mb-8">Calculate Your Potential ROI</h3>
            <div className="max-w-2xl mx-auto">
              <ROICalculator />
            </div>
          </div>
        </div>
    </section>
  )
}

export default Results