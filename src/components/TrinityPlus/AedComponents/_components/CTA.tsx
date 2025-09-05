import { ArrowRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

function CTA() {
  const navigate = useNavigate();
  return (
    <section
      style={{
        padding: "5rem 0",
        background: "linear-gradient(to right, #4c1d95, #6d28d9)", // Purple-900 → Violet-700
        color: "white",
      }}
    >
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Stop Wasting Money on Ads?
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Join 1,000+ businesses already using AED to maximize their advertising
          ROI
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate("/trinity/plus#wizard")}
            className="px-8 py-4 bg-white text-blue-600 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center"
          >
            Get Bundle <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          <button className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-200">
            Schedule Demo
          </button>
        </div>
        <p className="text-white/80 mt-6 text-sm">
          No credit card required • Setup in 10 minutes • Cancel anytime
        </p>
      </div>
    </section>
  );
}

export default CTA;
