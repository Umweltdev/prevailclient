'use client'
import { Sparkles } from "lucide-react";
import React, { ReactElement, useEffect, useState } from "react";

interface Stat {
    value: string | number,
    label: string,
    icon: ReactElement,
    delay?: number,
}
// Component: Stat Card
const StatCard: React.FC<Stat> = ({ value, label, icon, delay }) =>{
    const [isVisible, setIsVisible] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (isVisible) {
      const numericValue = parseInt(value.toString().replace(/\D/g, ''));
      let start = 0;
      const duration = 2000;
      const increment = numericValue / (duration / 16);
      
      const animate = () => {
        start += increment;
        if (start < numericValue) {
          setAnimatedValue(Math.floor(start));
          requestAnimationFrame(animate);
        } else {
          setAnimatedValue(numericValue);
        }
      };
      animate();
    }
  }, [isVisible, value]);

  const displayValue = value.toString().includes('%') ? `${animatedValue}%` :
                     value.toString().includes('/') ? `${animatedValue}/7` :
                     animatedValue;

  return (
    <div className={`relative group bg-white/60 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-105 hover:bg-white/70 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    }`}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse" />
          </div>
        </div>
        
        <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors duration-300">
          {displayValue}
        </div>
        
        <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
          {label}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
    </div>
  );
};

export default StatCard;