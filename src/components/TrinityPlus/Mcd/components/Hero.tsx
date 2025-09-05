import React from 'react'
import { ChevronDown, Check, X, Shield, Zap, Target, BarChart3, Clock, RefreshCw, Lock, TrendingUp, AlertCircle, Star, Mail, Phone, ArrowRight, DollarSign, Activity, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Hero() {
    const navigate = useNavigate()
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-16 relative bg-gradient-radial">
        <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="hero-fade-1 text-5xl md:text-7xl font-bold leading-tight mb-6 text-gray-900">
            Your Marketing Shouldn't<br/>
            Eat Your Profits.<br/>
            <span className="gradient-text">It Should Create Them.</span>
            </h1>
            <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent">
                    Market Cost Displacement API
                </h2>
            </div>
            <p className="hero-fade-2 text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto">
            Introducing Marketing Cost Displacement – The intelligent pricing engine that turns successful advertising into higher margins, automatically.
            </p>
            <div className="hero-fade-3 flex flex-col md:flex-row gap-4 justify-center mb-12">
                <button onClick={()=> navigate('/trinity/plus#wizard')} className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group">
                    See MCD in Action
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border-2 border-gray-300 rounded-full font-semibold text-lg hover:border-blue-500 hover:text-blue-600 hover:-translate-y-0.5 transition-all duration-300">
                    Schedule Demo
                </button>
            </div>
            <div className="relative inline-block mb-12 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-md animate-pulse">
                <span className="text-gray-800 font-medium text-sm">
                    Lock in beta price by making a purchase during launch week • 3 days before beta ends
                </span>
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