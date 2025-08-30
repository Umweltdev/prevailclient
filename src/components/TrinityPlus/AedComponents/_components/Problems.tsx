'use client'

import { X, CheckCircle, ArrowRight, Zap, BarChart3, Clock, Brain } from 'lucide-react'
import React, { useState, useEffect } from 'react'

function Problems() {
  const [activeTab, setActiveTab] = useState('without');
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden" id="how">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse-medium"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Your Current Reality vs. AED Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the dramatic difference AED makes in your daily advertising workflow
          </p>
        </div>

        {/* Enhanced Tab Switcher with animation */}
        <div className="flex justify-center mb-12 animate-on-scroll">
          <div className="bg-white/80 flex flex-col items-center justify-center backdrop-blur-sm rounded-full p-1 shadow-lg border border-gray-200/50">
            <button
              onClick={() => setActiveTab('without')}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-500 flex items-center ${
                activeTab === 'without' 
                  ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg transform scale-105' 
                  : 'text-gray-600 hover:text-gray-900 bg-white'
              }`}
            >
              <X className={`w-5 h-5 mr-2 transition-all ${activeTab === 'without' ? 'scale-125' : ''}`} />
              Without AED 😰
            </button>
            <button
              onClick={() => setActiveTab('with')}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-500 flex items-center ${
                activeTab === 'with' 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg transform scale-105' 
                  : 'text-gray-600 hover:text-gray-900 bg-white'
              }`}
            >
              <CheckCircle className={`w-5 h-5 mr-2 animate-ping transition-all ${activeTab === 'with' ? 'scale-125' : ''}`} />
              With AED 😊
            </button>
          </div>
        </div>

        {/* Comparison Content with enhanced animations */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20 animate-on-scroll">
          {activeTab === 'without' ? (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Zap className="w-8 h-8 text-red-500 mr-3 animate-pulse" />
                  Your Daily Struggle:
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start animate-on-scroll">
                    <div className="bg-red-100 p-2 rounded-full mr-4">
                      <Clock className="w-6 h-6 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-lg text-gray-900">3+ Hours Wasted Daily</p>
                      <p className="text-gray-600 mt-1">Logging into multiple platforms and manually compiling data</p>
                    </div>
                  </li>
                  <li className="flex items-start animate-on-scroll">
                    <div className="bg-red-100 p-2 rounded-full mr-4">
                      <BarChart3 className="w-6 h-6 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-lg text-gray-900">Manual Budget Guesswork</p>
                      <p className="text-gray-600 mt-1">Making decisions based on incomplete or outdated information</p>
                    </div>
                  </li>
                  <li className="flex items-start animate-on-scroll">
                    <div className="bg-red-100 p-2 rounded-full mr-4">
                      <X className="w-6 h-6 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-lg text-gray-900">Missed Opportunities</p>
                      <p className="text-gray-600 mt-1">Can&lsquo;t monitor 24/7, losing money during off-hours</p>
                    </div>
                  </li>
                  <li className="flex items-start animate-on-scroll">
                    <div className="bg-red-100 p-2 rounded-full mr-4">
                      <Brain className="w-6 h-6 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-lg text-gray-900">Cognitive Overload</p>
                      <p className="text-gray-600 mt-1">Too many dashboards and metrics causing analysis paralysis</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center animate-on-scroll">
                <div className="text-center p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-inner border border-red-100/50">
                  <div className="text-6xl mb-4 animate-bounce">😰</div>
                  <div className="bg-white py-4 px-6 rounded-xl shadow-md mb-4">
                    <p className="text-3xl font-bold text-red-500 mb-2">40% Budget Waste</p>
                    <p className="text-gray-600">Average loss from poor optimization</p>
                  </div>
                  <div className="bg-white py-3 px-6 rounded-xl shadow-md">
                    <p className="text-xl font-semibold text-gray-800">$12,500 Monthly Loss</p>
                    <p className="text-gray-600 text-sm">Based on average $50k ad spend</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Zap className="w-8 h-8 text-green-500 mr-3 animate-pulse" />
                  Your New Reality:
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start animate-on-scroll">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <Clock className="w-6 h-6 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-lg text-gray-900">10 Minutes Daily</p>
                      <p className="text-gray-600 mt-1">One intuitive dashboard for all your advertising needs</p>
                    </div>
                  </li>
                  <li className="flex items-start animate-on-scroll">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <BarChart3 className="w-6 h-6 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-lg text-gray-900">AI-Powered Optimization</p>
                      <p className="text-gray-600 mt-1">Real-time budget allocation to top-performing campaigns</p>
                    </div>
                  </li>
                  <li className="flex items-start animate-on-scroll">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-lg text-gray-900">24/7 Monitoring</p>
                      <p className="text-gray-600 mt-1">Never miss an opportunity, even while you sleep</p>
                    </div>
                  </li>
                  <li className="flex items-start animate-on-scroll">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <Brain className="w-6 h-6 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-lg text-gray-900">Actionable Insights</p>
                      <p className="text-gray-600 mt-1">Clear, concise reports that drive decision-making</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center animate-on-scroll">
                <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-inner border border-green-100/50">
                  <div className="text-6xl mb-4 animate-bounce">🚀</div>
                  <div className="bg-white py-4 px-6 rounded-xl shadow-md mb-4">
                    <p className="text-3xl font-bold text-green-500 mb-2">4x ROI Improvement</p>
                    <p className="text-gray-600">Average return with AED optimization</p>
                  </div>
                  <div className="bg-white py-3 px-6 rounded-xl shadow-md">
                    <p className="text-xl font-semibold text-gray-800">$50,000 Monthly Gain</p>
                    <p className="text-gray-600 text-sm">Based on average $50k ad spend</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 animate-on-scroll">
          <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center mx-auto">
            Transform Your Advertising
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-gray-600 mt-4">Join hundreds of marketers who have transformed their results</p>
        </div>
      </div>
    </section>
  )
}

export default Problems