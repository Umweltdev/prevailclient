import React from 'react'
import { ChevronDown, Check, X, Shield, Zap, Target, BarChart3, Clock, RefreshCw, Lock, TrendingUp, AlertCircle, Star, Mail, Phone, ArrowRight, DollarSign, Activity, AlertTriangle } from 'lucide-react';

function Problem({visibleSections}) {
  return (
    <section id="problem" className={`scroll-reveal ${visibleSections.has('problem') ? 'visible' : ''} py-20 px-6 bg-gray-50`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="gradient-text">$50,000 Question</span> Every Business Owner Faces
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You spend $5,000 on Facebook ads. They work brilliantly – sales are pouring in. 
              But here's the painful irony: those advertising costs just ate up most of your profit margin.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-lg glow-effect card-hover">
            <h3 className="text-2xl font-semibold mb-6">Right now, your business is trapped in the advertising paradox:</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <X className="w-5 h-5 text-red-600" />
                </div>
                <span className="text-gray-700">Successful campaigns = thinner margins</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <X className="w-5 h-5 text-red-600" />
                </div>
                <span className="text-gray-700">More customers = less profit per sale</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <X className="w-5 h-5 text-red-600" />
                </div>
                <span className="text-gray-700">Scaling means spending more to earn less</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <X className="w-5 h-5 text-red-600" />
                </div>
                <span className="text-gray-700">You're winning on revenue but losing on profit</span>
              </li>
            </ul>
            <p className="mt-8 text-gray-600 text-lg bg-blue-50 p-4 rounded-xl">
              Meanwhile, your competitors face the same squeezed margins, creating a race to the bottom that nobody wins.
            </p>
          </div>
        </div>
    </section>
  )
}

export default Problem