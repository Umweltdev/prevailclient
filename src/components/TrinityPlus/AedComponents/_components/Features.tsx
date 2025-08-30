'use client'
import { BarChart3, DollarSign, Target, RefreshCw, Shield, AlertTriangle, Users, Coffee } from 'lucide-react'
import React, { useState, useEffect, useRef } from 'react'
import EmployeeCard from './EmployeeCard'

function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden" 
      id="features"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/5 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full animate-pulse-medium"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/3 w-40 h-40 bg-indigo-400/15 rounded-full animate-pulse-fast"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Users className="w-5 h-5 mr-2" />
            <span>Your AI-Powered Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
            It&lsquo;s Like Having 5 Employees in One
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto flex items-center justify-center">
            <Coffee className="w-5 h-5 mr-2 animate-bounce" />
            Each working 24/7 for the price of a coffee subscription
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <EmployeeCard
            title="The Analyst"
            icon={<BarChart3 className="w-8 h-8" />}
            tasks={[
              "Watches numbers 24/7",
              "Spots trends you'd miss",
              "Never needs coffee breaks"
            ]}
            delay={0}
            isVisible={isVisible}
          />
          <EmployeeCard
            title="The Accountant"
            icon={<DollarSign className="w-8 h-8" />}
            tasks={[
              "Tracks every penny",
              "Never overspends",
              "Manages all platform budgets"
            ]}
            delay={0.2}
            isVisible={isVisible}
          />
          <EmployeeCard
            title="The Strategist"
            icon={<Target className="w-8 h-8" />}
            tasks={[
              "Decides budget allocation",
              "Plans for best returns",
              "Adjusts in real-time"
            ]}
            delay={0.4}
            isVisible={isVisible}
          />
          <EmployeeCard
            title="The Technician"
            icon={<RefreshCw className="w-8 h-8" />}
            tasks={[
              "Connects all platforms",
              "Fixes issues automatically",
              "Keeps everything running"
            ]}
            delay={.6}
            isVisible={isVisible}
          />
          <EmployeeCard
            title="The Security Guard"
            icon={<Shield className="w-8 h-8" />}
            tasks={[
              "Watches for problems",
              "Stops bad situations",
              "Protects your money"
            ]}
            delay={.8}
            isVisible={isVisible}
          />
          <EmployeeCard
            title="Emergency Response"
            icon={<AlertTriangle className="w-8 h-8" />}
            tasks={[
              "One-click pause all",
              "Instant notifications",
              "Auto-stops if issues"
            ]}
            delay={1}
            isVisible={isVisible}
          />
        </div>
      </div>
    </section>
  )
}

export default Features