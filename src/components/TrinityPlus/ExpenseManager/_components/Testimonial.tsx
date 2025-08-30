'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Quote, Star, TrendingUp, Users, Award } from 'lucide-react';

interface Testimonial {
  name: string;
  business: string;
  quote: string;
  metric: string;
  avatar: string;
  rating: number;
  industry: string;
}

const Testimonial: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Chen",
      business: "Digital Marketing Agency",
      quote: "Before Trinity, I was constantly stressed about cash flow. Now I can see 30 days ahead and never worry about making payroll.",
      metric: "Zero missed payments in 18 months",
      avatar: "SC",
      rating: 5,
      industry: "Marketing"
    },
    {
      name: "Marcus Johnson",
      business: "Construction Company", 
      quote: "Trinity saved my business. It caught a cash crunch 3 weeks early and gave me options. Without it, I'd have defaulted on a major supplier.",
      metric: "£45,000 in avoided emergency loans",
      avatar: "MJ",
      rating: 5,
      industry: "Construction"
    },
    {
      name: "Emma Williams",
      business: "Retail Chain",
      quote: "The subscription model for distant expenses is genius. I'm funding expansion without blocking operational cash.",
      metric: "3 new locations opened with optimal cash flow",
      avatar: "EW",
      rating: 5,
      industry: "Retail"
    }
  ];

  // Intersection Observer for section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleTestimonialChange((currentTestimonial + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [currentTestimonial, isPaused]);

  const handleTestimonialChange = (index: number) => {
    if (index === currentTestimonial) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentTestimonial(index);
      setIsTransitioning(false);
    }, 300);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-slate-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className={`
          text-center mb-16 transform transition-all duration-1000 ease-out
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
        `}>
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border border-purple-400/30">
              <Users className="w-8 h-8 text-purple-400" />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Trusted by Growing
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Businesses
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"></div>
        </div>

        {/* Main Testimonial Card */}
        <div 
          className="max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`
            bg-gradient-to-br from-purple-500/20 to-blue-600/20 backdrop-blur-xl rounded-3xl p-12 
            border border-purple-400/30 shadow-2xl relative overflow-hidden
            transform transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-1
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
          `}>
            {/* Floating quote icon */}
            <div className="absolute top-8 left-8 opacity-20">
              <Quote className="w-16 h-16 text-purple-400" />
            </div>

            {/* Content Container */}
            <div className={`
              transition-all duration-500 ease-in-out transform
              ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
            `}>
              {/* Header Section */}
              <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-6">
                {/* User Info */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {currentData.avatar}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{currentData.name}</h3>
                    <p className="text-gray-300 text-lg">{currentData.business}</p>
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(currentData.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="ml-2 text-sm text-gray-400">{currentData.industry}</span>
                    </div>
                  </div>
                </div>

                {/* Metric Badge */}
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-6 backdrop-blur-sm border border-cyan-400/30 text-center min-w-64">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="w-5 h-5 text-cyan-400 mr-2" />
                    <span className="text-sm text-cyan-300 font-medium">Key Result</span>
                  </div>
                  <div className="text-lg font-bold text-cyan-400">{currentData.metric}</div>
                </div>
              </div>

              {/* Quote */}
              <div className="relative mb-8">
                <p className="text-2xl md:text-3xl text-gray-100 italic font-light leading-relaxed pl-8">
                  {`"${currentData.quote}"`}
                </p>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex gap-3 justify-center">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleTestimonialChange(idx)}
                  className={`
                    transition-all duration-500 ease-out rounded-full
                    ${currentTestimonial === idx 
                      ? 'w-12 h-3 bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg' 
                      : 'w-3 h-3 bg-gray-600 hover:bg-gray-500'
                    }
                  `}
                />
              ))}
            </div>

            {/* Animated border effect */}
            <div className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20 animate-pulse"></div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className={`
            flex justify-center items-center gap-8 mt-12 transform transition-all duration-1000 ease-out delay-500
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
          `}>
            <div className="flex items-center gap-2 text-gray-400">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-sm">98% Customer Satisfaction</span>
            </div>
            <div className="w-1 h-6 bg-gray-600 rounded-full"></div>
            <div className="flex items-center gap-2 text-gray-400">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-sm">500+ Happy Businesses</span>
            </div>
            <div className="w-1 h-6 bg-gray-600 rounded-full"></div>
            <div className="flex items-center gap-2 text-gray-400">
              <Award className="w-5 h-5 text-purple-400" />
              <span className="text-sm">Industry Leading</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;