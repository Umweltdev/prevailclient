'use client'
import { Zap, ArrowRight, Play, TrendingUp, Clock, Globe, Activity } from 'lucide-react'
import { FaGoogle, FaMeta, FaLinkedin, FaTiktok } from 'react-icons/fa6';
import React, { useEffect, useState } from 'react'
import StatCard from './StatCard';

function Hero() {
  const [counters, setCounters] = useState({
    roi: 0,
    timeSaved: 0,
    platforms: 0,
    automation: 0
  });

  const [isLoaded, setIsLoaded] = useState(false);

  // Animated counters
  useEffect(() => {
    const timer = setTimeout(() => {
      setCounters({
        roi: 400,
        timeSaved: 95,
        platforms: 4,
        automation: 247
      });
      setIsLoaded(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Platform colors
  const platforms = [
    { name: 'Google', color: '#4285F4', icon: <FaGoogle/>, delay: 1200 },
    { name: 'Meta', color: '#1877F2', icon: <FaMeta/>, delay: 1400 },
    { name: 'LinkedIn', color: '#0A66C2', icon: <FaLinkedin/>, delay: 1600 },
    { name: 'TikTok', color: '#000000', icon: <FaTiktok/>, delay: 1800 }
  ];

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen overflow-hidden">

      {/* Geometric Shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center">
          {/* Badge */}
          <div className={`inline-flex items-center px-6 py-3 bg-white/70 backdrop-blur-lg text-blue-700 rounded-full text-sm font-medium mb-8 border border-white/30 shadow-lg transition-all duration-1000 hover:shadow-xl hover:scale-105 ${
            isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}>
            <Zap className="w-4 h-4 mr-2 animate-pulse" />
            AI-Powered Ad Optimization
            <div className="ml-2 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
          </div>
          
          {/* Main Headline */}
          <h1 className={`text-5xl md:text-7xl font-bold text-gray-900 mb-8 transition-all duration-1000 delay-200 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Stop Juggling
            <br />
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                4 Ad Platforms
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full transform scale-x-0 animate-pulse" 
                   style={{ animation: 'scaleX 2s ease-out 1s forwards' }}></div>
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            One intelligent system that manages all your ads, optimizes budgets automatically, 
            and delivers <span className="font-semibold text-blue-600">4x better returns</span> while you sleep.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 transition-all duration-1000 delay-600 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <button className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105">
              <span className="relative z-10 flex items-center">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
            </button>
            
            <button className="group px-10 py-4 bg-white/70 backdrop-blur-lg text-gray-700 rounded-full text-lg font-semibold border-2 border-white/30 hover:border-blue-600/50 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl hover:bg-white/80">
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Watch Demo (2 min)
            </button>
          </div>

          {/* Platform Logos */}
          <div className="flex items-center justify-center space-x-12 mb-16">
            {platforms.map((platform) => (
              <div 
                key={platform.name} 
                className={`flex flex-col items-center group cursor-pointer transition-all duration-700 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${platform.delay}ms` }}
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-xl backdrop-blur-sm border border-white/30"
                  style={{ 
                    backgroundColor: platform.color + '15',
                    boxShadow: `0 8px 32px ${platform.color}20`
                  }}
                >
                  {platform.icon}
                </div>
                <span className="text-sm text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">
                  {platform.name}
                </span>
                <div className="w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300 mt-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard 
            value={`${counters.roi}%`}
            label="Average ROI Increase"
            icon={<TrendingUp className="w-6 h-6 text-green-600" />}
            delay={2000}
          />
          <StatCard 
            value={`${counters.timeSaved}%`}
            label="Time Saved"
            icon={<Clock className="w-6 h-6 text-blue-600" />}
            delay={2200}
          />
          <StatCard 
            value={counters.platforms}
            label="Platforms Managed"
            icon={<Globe className="w-6 h-6 text-purple-600" />}
            delay={2400}
          />
          <StatCard 
            value={`${counters.automation}/7`}
            label="24/7 Automation"
            icon={<Activity className="w-6 h-6 text-orange-600" />}
            delay={2600}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes scaleX {
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  )
}

export default Hero