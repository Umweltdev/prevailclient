import React from 'react'

function Hero() {
  return (
    <section className="relative overflow-hidden mt-20" id='home'>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse animation-delay-2000" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 to-cyan-600 bg-clip-text text-transparent mb-6">
              Never Run Out of
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Cash Again
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 mb-8 max-w-3xl mx-auto">
              Trinity sees 30 days into your financial future, automatically juggling expenses 
              so you always have money when you need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-black/60 backdrop-blur text-white rounded-lg font-semibold text-lg border border-white/20 hover:bg-black transition-all duration-300">
                Watch 2-Min Demo
              </button>
            </div>
            {/* <GlassButton className='text-black animate-pulse'>
              No credit card required • 30-day free trial • Cancel anytime
            </GlassButton> */}
            <div className="relative inline-block mt-6 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-md animate-pulse">
              <span className="text-gray-800 font-medium text-sm">
                No credit card required • 30-day free trial • Cancel anytime
              </span>
            </div>
            {/* <p className="mt-6 text-gray-400">
              No credit card required • 30-day free trial • Cancel anytime
            </p> */}
          </div>
        </div>
      </section>
  )
}

export default Hero