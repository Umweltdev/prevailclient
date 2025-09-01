'use client'
import React, { useState, useEffect, useRef } from "react";

interface Timeline {
  week: string;
  quote: string;
  metric: string;
  color: "blue" | "green" | "purple" | "orange";
}

// Component: Timeline Card
const TimelineCard: React.FC<Timeline> = ({ week, quote, metric, color }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const colors = {
    blue: {
      gradient: "from-blue-500 to-blue-600",
      light: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-700",
      icon: "text-blue-500",
    },
    green: {
      gradient: "from-green-500 to-green-600",
      light: "bg-green-50",
      border: "border-green-200",
      text: "text-green-700",
      icon: "text-green-500",
    },
    purple: {
      gradient: "from-purple-500 to-purple-600",
      light: "bg-purple-50",
      border: "border-purple-200",
      text: "text-purple-700",
      icon: "text-purple-500",
    },
    orange: {
      gradient: "from-orange-500 to-orange-600",
      light: "bg-orange-50",
      border: "border-orange-200",
      text: "text-orange-700",
      icon: "text-orange-500",
    },
  };

  const colorSet = colors[color];

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border ${colorSet.border} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div
        className={`bg-gradient-to-r ${colorSet.gradient} text-white px-4 py-2 rounded-full inline-block mb-4 font-medium text-sm transition-all duration-300 transform hover:scale-105`}
      >
        {week}
      </div>
      
      <div className="relative mb-4">
        <div className="absolute -left-2 top-0 h-full w-1 bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
        <p className={`text-lg italic ${colorSet.text} pl-4 relative`}>
          <span className="absolute left-0 top-0 text-2xl opacity-50">&ldquo;</span>
          {quote}
          <span className="absolute right-0 bottom-0 text-2xl opacity-50">&ldquo;</span>
        </p>
      </div>
      
      <div className="flex items-center justify-between border-t pt-4">
        <span className="text-sm text-gray-600 font-medium">Result:</span>
        <span
          className={`text-lg font-bold bg-gradient-to-r ${colorSet.gradient} bg-clip-text text-transparent flex items-center`}
        >
          <svg
            className={`w-5 h-5 mr-1 ${colorSet.icon}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
          {metric}
        </span>
      </div>
      
      {/* Animated progress bar */}
      <div className="mt-4 bg-gray-200 rounded-full h-1.5">
        <div
          className={`h-1.5 rounded-full bg-gradient-to-r ${colorSet.gradient} transition-all duration-1000 ease-out ${
            isVisible ? "w-full" : "w-0"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default TimelineCard;
