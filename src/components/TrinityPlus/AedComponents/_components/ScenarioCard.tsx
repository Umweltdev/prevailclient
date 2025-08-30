'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement, useState } from "react";
import { User, Bot, Play, Pause } from 'lucide-react';

interface Scenario {
    title: string,
    scenario: {text: string, actor: string}[],
    icon: ReactElement
}

// Component: Scenario Card
const ScenarioCard: React.FC<Scenario> = ({ title, scenario, icon }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play animation
  const playScenario = () => {
    if (isPlaying) {
      setIsPlaying(false);
      setCurrentStep(-1);
      return;
    }

    setIsPlaying(true);
    setCurrentStep(0);
    
    scenario.forEach((_, index) => {
      setTimeout(() => {
        setCurrentStep(index);
        if (index === scenario.length - 1) {
          setTimeout(() => {
            setIsPlaying(false);
            setCurrentStep(-1);
          }, 2000);
        }
      }, index * 1500);
    });
  };

  const getActorIcon = (actor: string) => {
    return actor.toLowerCase().includes('user') || actor.toLowerCase().includes('you') ? 
      <User className="w-4 h-4" /> : 
      <Bot className="w-4 h-4" />;
  };

  const getActorColor = (actor: string) => {
    return actor.toLowerCase().includes('user') || actor.toLowerCase().includes('you') ? 
      'text-emerald-600' : 'text-blue-600';
  };

  return (
    <div 
      className="group relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-105 hover:bg-white/95 cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Gradient Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
      
      {/* Header */}
      <div className="relative flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className={`p-3 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 transition-all duration-300 group-hover:from-blue-200 group-hover:to-purple-200 group-hover:scale-110 mr-4 ${
            isHovered ? 'shadow-lg' : ''
          }`}>
            <div className="text-blue-600 transition-transform duration-300 group-hover:rotate-12">
              {icon}
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors duration-300">
            {title}
          </h3>
        </div>
        
        {/* Play Button */}
        <button 
          onClick={playScenario}
          className={`p-2 rounded-full transition-all duration-300 ${
            isPlaying 
              ? 'bg-red-100 text-red-600 hover:bg-red-200' 
              : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
          } hover:scale-110 shadow-md hover:shadow-lg`}
          title={isPlaying ? 'Stop Animation' : 'Play Scenario'}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
      </div>

      {/* Scenario Steps */}
      <div className="space-y-4 relative">
        {scenario.map((step: any, i: any) => (
          <div 
            key={i} 
            className={`relative flex items-start group/step transition-all duration-500 ${
              currentStep === i 
                ? 'transform translate-x-2 scale-105' 
                : currentStep > i 
                ? 'opacity-70' 
                : ''
            }`}
            style={{
              animationDelay: `${i * 100}ms`
            }}
          >
            {/* Step Indicator */}
            <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 mr-4 ${
              currentStep === i 
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-110' 
                : currentStep > i
                ? 'bg-green-500 text-white'
                : 'bg-gray-100 text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-500'
            }`}>
              {currentStep > i ? (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <span className="text-xs font-semibold">{i + 1}</span>
              )}
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className={`flex items-center mb-2 transition-all duration-300 ${
                currentStep === i ? 'text-blue-700 font-semibold' : ''
              }`}>
                <div className={`flex items-center ${getActorColor(step.actor)} mr-2`}>
                  {getActorIcon(step.actor)}
                  <span className="ml-1 text-sm font-medium">{step.actor}</span>
                </div>
              </div>
              
              <div className={`relative bg-gray-50 rounded-lg p-3 transition-all duration-300 group-hover/step:bg-white group-hover/step:shadow-md ${
                currentStep === i 
                  ? 'bg-gradient-to-r from-blue-50 to-purple-50 shadow-md border-l-4 border-blue-500' 
                  : ''
              }`}>
                <p className={`text-gray-600 leading-relaxed transition-all duration-300 ${
                  currentStep === i ? 'text-gray-800 font-medium' : ''
                }`}>
                  {step.text}
                </p>
                
                {/* Typing Animation */}
                {currentStep === i && (
                  <div className="flex items-center mt-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Connection Line */}
            {i < scenario.length - 1 && (
              <div className={`absolute left-4 top-8 w-0.5 h-8 transition-all duration-300 ${
                currentStep > i 
                  ? 'bg-green-500' 
                  : currentStep === i 
                  ? 'bg-gradient-to-b from-blue-500 to-purple-500' 
                  : 'bg-gray-200 group-hover:bg-blue-200'
              }`}></div>
            )}
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      {isPlaying && (
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-2xl transition-all duration-300" 
             style={{
               width: `${((currentStep + 1) / scenario.length) * 100}%`
             }}>
        </div>
      )}

      {/* Floating Elements */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
      </div>
    </div>
  );
}

export default ScenarioCard;