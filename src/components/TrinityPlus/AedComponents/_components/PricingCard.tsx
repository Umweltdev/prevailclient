/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React from "react";

// Component: Pricing Card
interface Pricing {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
  clickable?: boolean; // ✅ new prop
}

const PricingCard: React.FC<Pricing> = ({
  name,
  price,
  description,
  features,
  cta,
  popular,
  clickable = true, // default true
}) => {
  const navigate = useNavigate()
  return (
    <div
      className={`relative bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 flex flex-col ${
        popular ? "ring-2 ring-blue-600" : ""
      } ${clickable ? "hover:scale-105" : "opacity-70"}`}
    >
      {popular && (
        <div className="absolute animate-bounce top-2 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
            Current Price
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="text-4xl font-bold text-gray-900">
          {price}
          {price !== "Custom" && (
            <span className="text-lg text-gray-600"></span>
          )}
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature: string, i: number) => (
          <li key={i} className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      {/* ✅ Button pushed to bottom */}
      <div className="mt-auto">
        <button
          disabled={!clickable}
          onClick={()=> navigate('/trinity/plus#wizard')}
          className={`w-full py-3 rounded-lg font-semibold transition-all ${
            clickable
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transform hover:scale-105"
              : "bg-gray-200 text-gray-500 cursor-not-allowed"
          }`}
        >
          {cta}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
