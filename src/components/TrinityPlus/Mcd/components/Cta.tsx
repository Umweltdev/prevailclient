import { Check } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Cta({ visibleSections }) {
  const navigate = useNavigate()
  return (
    <section className="py-20 px-6">
      <div
        className={`scroll-reveal ${
          visibleSections.has("final-cta") ? "visible" : ""
        } max-w-5xl mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white relative overflow-hidden`}
        id="final-cta"
      >
        <div className="absolute inset-0 bg-white opacity-5"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stop Letting Marketing Eat Your Profits
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-95">
            Every day without MCD, you're leaving money on the table. Join 147
            businesses already transforming marketing spend into profit margin.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
            <button onClick={()=> navigate('/trinity/plus#wizard')} className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
              Get Beta Bundle
            </button>
            <button className="px-8 py-4 border-2 border-white rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Schedule a Demo
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-6 justify-center text-white/90">
            <div className="flex items-center gap-2 justify-center">
              <Check className="w-5 h-5" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Check className="w-5 h-5" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Check className="w-5 h-5" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
