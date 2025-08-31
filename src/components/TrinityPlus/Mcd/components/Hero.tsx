import React from 'react'
import { ChevronDown, Check, X, Shield, Zap, Target, BarChart3, Clock, RefreshCw, Lock, TrendingUp, AlertCircle, Star, Mail, Phone, ArrowRight, DollarSign, Activity, AlertTriangle } from 'lucide-react';

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-16 relative bg-gradient-radial">
        <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="hero-fade-1 text-5xl md:text-7xl font-bold leading-tight mb-6 text-gray-900">
            Your Marketing Shouldn't<br/>
            Eat Your Profits.<br/>
            <span className="gradient-text">It Should Create Them.</span>
            </h1>
            <p className="hero-fade-2 text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto">
            Introducing Marketing Cost Displacement – The intelligent pricing engine that turns successful advertising into higher margins, automatically.
            </p>
            <div className="hero-fade-3 flex flex-col md:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group">
                See MCD in Action
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 rounded-full font-semibold text-lg hover:border-blue-500 hover:text-blue-600 hover:-translate-y-0.5 transition-all duration-300">
                Schedule Demo
            </button>
            </div>
            <div className="hero-fade-4 flex flex-col md:flex-row gap-8 justify-center text-gray-600">
            <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-500" />
                <span>Sets up in 10 minutes</span>
            </div>
            <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-blue-500" />
                <span>Your data stays yours</span>
            </div>
            <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-500" />
                <span>12% avg margin improvement</span>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Hero