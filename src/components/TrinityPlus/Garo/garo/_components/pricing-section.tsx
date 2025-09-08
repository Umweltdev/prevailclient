import React from "react";
import Tilt from "react-parallax-tilt";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PricingSection = () => {
  const navigate = useNavigate()
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(110,62,244,0.08),transparent_50%)] pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-[#6E3EF4]/20 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto relative ">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#6E3EF4] to-[#409AFF] rounded-full opacity-90 animate-pulse"></div> */}
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#6E3EF4] to-[#409AFF] bg-clip-text text-transparent heritle">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Get lifetime access to GARO™ with our revolutionary inventory
            optimization platform
          </p>
        </div>

        {/* Ecormmerce only */}
        <div className="mb-12">
          <h2 className="text-center text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent">
            E-Commerce Only
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Beta Users Card */}
          <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
            <div className="group relative bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-[#6E3EF4]/30 hover:border-[#6E3EF4]/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#6E3EF4]/20 h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#6E3EF4] rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold text-[#6E3EF4] tracking-widest">
                    BETA USERS
                  </span>
                </div>
              </div>

              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-[#6E3EF4] to-[#409AFF] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-5xl font-black bg-gradient-to-r from-[#6E3EF4] to-[#409AFF] bg-clip-text text-transparent">
                    €696
                  </span>
                </div>
                <p className="text-gray-700 text-center font-medium">
                  One-time payment • Lifetime access
                </p>
                <div className="mt-3 px-3 py-1 bg-[#6E3EF4]/10 rounded-full text-center">
                  <span className="text-xs text-[#6E3EF4] font-semibold">
                    ⚡ Next 10 days only
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {[
                  "GARO™ Inventory Optimization Platform",
                  "SquareUp POS & Payments Integration",
                  "Full Analytics Admin Dashboard",
                  "Complete Onboarding & Support",
                  "Comprehensive Training Program",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 group/item">
                    <div className="w-6 h-6 bg-[#6E3EF4]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#6E3EF4]" />
                    </div>
                    <span className="text-gray-700 group-hover/item:text-gray-800 transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate("/trinity/plus#wizard")}
                className="w-full py-4 bg-gradient-to-r from-[#6E3EF4] to-[#409AFF] rounded-xl font-bold text-white hover:from-[#5B2CCF] hover:to-[#2D7BE5] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#6E3EF4]/25 hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group/btn"
              >
                <span className="relative ">Secure Your Spot</span>
                <div className="absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 group-hover/btn:left-full transition-all duration-500"></div>
              </button>
            </div>
          </Tilt>

          {/* Early Adopters Card - Most Popular */}
          <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
            <div className="group relative lg:scale-105 bg-white/80 backdrop-blur-md rounded-2xl p-8 border-2 border-[#6E3EF4]/50 hover:border-[#6E3EF4]/70 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#6E3EF4]/30 h-full flex flex-col">
              <div className="flex items-center justify-between mb-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#409AFF] rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold text-[#409AFF] tracking-widest">
                    EARLY ADOPTERS
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-5xl font-black bg-gradient-to-r from-[#6E3EF4] to-[#409AFF] bg-clip-text text-transparent">
                    €1,737
                  </span>
                </div>
                <p className="text-gray-700 text-center font-medium">
                  One-time payment • Lifetime access
                </p>
                <div className="mt-3 px-3 py-1 bg-[#409AFF]/10 rounded-full text-center">
                  <span className="text-xs text-[#409AFF] font-semibold">
                    🚀 Next 3 months
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {[
                  "GARO™ Inventory Optimization Platform",
                  "SquareUp POS & Payments Integration",
                  "Full Analytics Admin Dashboard",
                  "Complete Onboarding & Support",
                  "Comprehensive Training Program",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 group/item">
                    <div className="w-6 h-6 bg-[#409AFF]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#409AFF]" />
                    </div>
                    <span className="text-gray-700 group-hover/item:text-gray-800 transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate("/trinity/plus#wizard")}
                className="w-full py-4 bg-gradient-to-r from-[#6E3EF4] to-[#409AFF] rounded-xl font-bold text-white hover:from-[#5B2CCF] hover:to-[#2D7BE5] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#6E3EF4]/25 hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group/btn"
              >
                <span className="relative ">Get Started Now</span>
                <div className="absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 group-hover/btn:left-full transition-all duration-500"></div>
              </button>
            </div>
          </Tilt>

          {/* Post Launch Card */}
          <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
            <div className="group relative bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-[#6E3EF4]/30 hover:border-[#6E3EF4]/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#6E3EF4]/20 h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#6E3EF4] rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold text-[#6E3EF4] tracking-widest">
                    STANDARD
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-5xl font-black bg-gradient-to-r from-[#6E3EF4] to-[#409AFF] bg-clip-text text-transparent">
                    €5,217
                  </span>
                </div>
                <p className="text-gray-700 text-center font-medium">
                  One-time payment • Lifetime access
                </p>
                <div className="mt-3 px-3 py-1 bg-[#6E3EF4]/10 rounded-full text-center">
                  <span className="text-xs text-[#6E3EF4] font-semibold">
                    📈 After 3 months
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {[
                  "GARO™ Inventory Optimization Platform",
                  "SquareUp POS & Payments Integration",
                  "Full Analytics Admin Dashboard",
                  "Complete Onboarding & Support",
                  "Comprehensive Training Program",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 group/item">
                    <div className="w-6 h-6 bg-[#6E3EF4]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#6E3EF4]" />
                    </div>
                    <span className="text-gray-700 group-hover/item:text-gray-800 transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate("/trinity/plus#wizard")}
                className="w-full py-4 bg-gradient-to-r from-[#6E3EF4] to-[#409AFF] rounded-xl font-bold text-white hover:from-[#5B2CCF] hover:to-[#2D7BE5] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#6E3EF4]/25 hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group/btn"
              >
                <span className="relative ">Reserve Your License</span>
                <div className="absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 group-hover/btn:left-full transition-all duration-500"></div>
              </button>
            </div>
          </Tilt>
        </div>

        {/* Pricing Cards store front*/}
        <div className="my-12">
          <h2 className="text-center text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent">
            Store Front Option
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Beta Users Card */}
          <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
            <div className="group relative bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-[#6E3EF4]/30 hover:border-[#6E3EF4]/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#6E3EF4]/20 h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#6E3EF4] rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold text-[#6E3EF4] tracking-widest">
                    BETA USERS
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-5xl font-black bg-gradient-to-r from-[#6E3EF4] to-[#409AFF] bg-clip-text text-transparent">
                    €1,160
                  </span>
                </div>
                <p className="text-gray-700 text-center font-medium">
                  One-time payment • Lifetime access
                </p>
                <div className="mt-3 px-3 py-1 bg-[#6E3EF4]/10 rounded-full text-center">
                  <span className="text-xs text-[#6E3EF4] font-semibold">
                    ⚡ Next 10 days only
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {[
                  "GARO™ Inventory Optimization Platform",
                  "SquareUp POS & Payments Integration",
                  "Full Analytics Admin Dashboard",
                  "Complete Onboarding & Support",
                  "Comprehensive Training Program",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 group/item">
                    <div className="w-6 h-6 bg-[#6E3EF4]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#6E3EF4]" />
                    </div>
                    <span className="text-gray-700 group-hover/item:text-gray-800 transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate("/trinity/plus#wizard")}
                className="w-full py-4 bg-gradient-to-r from-[#6E3EF4] to-[#409AFF] rounded-xl font-bold text-white hover:from-[#5B2CCF] hover:to-[#2D7BE5] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#6E3EF4]/25 hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group/btn"
              >
                <span className="relative ">Secure Your Spot</span>
                <div className="absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 group-hover/btn:left-full transition-all duration-500"></div>
              </button>
            </div>
          </Tilt>

          {/* Early Adopters Card - Most Popular */}
          <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
            <div className="group relative lg:scale-105 bg-white/80 backdrop-blur-md rounded-2xl p-8 border-2 border-[#6E3EF4]/50 hover:border-[#6E3EF4]/70 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#6E3EF4]/30 h-full flex flex-col">
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-[#6E3EF4] to-[#409AFF] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              </div>

              <div className="flex items-center justify-between mb-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#409AFF] rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold text-[#409AFF] tracking-widest">
                    EARLY ADOPTERS
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-5xl font-black bg-gradient-to-r from-[#6E3EF4] to-[#409AFF] bg-clip-text text-transparent">
                    €2,895
                  </span>
                </div>
                <p className="text-gray-700 text-center font-medium">
                  One-time payment • Lifetime access
                </p>
                <div className="mt-3 px-3 py-1 bg-[#409AFF]/10 rounded-full text-center">
                  <span className="text-xs text-[#409AFF] font-semibold">
                    🚀 Next 3 months
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {[
                  "GARO™ Inventory Optimization Platform",
                  "SquareUp POS & Payments Integration",
                  "Full Analytics Admin Dashboard",
                  "Complete Onboarding & Support",
                  "Comprehensive Training Program",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 group/item">
                    <div className="w-6 h-6 bg-[#409AFF]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#409AFF]" />
                    </div>
                    <span className="text-gray-700 group-hover/item:text-gray-800 transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate("/trinity/plus#wizard")}
                className="w-full py-4 bg-gradient-to-r from-[#6E3EF4] to-[#409AFF] rounded-xl font-bold text-white hover:from-[#5B2CCF] hover:to-[#2D7BE5] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#6E3EF4]/25 hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group/btn"
              >
                <span className="relative ">Get Started Now</span>
                <div className="absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 group-hover/btn:left-full transition-all duration-500"></div>
              </button>
            </div>
          </Tilt>

          {/* Post Launch Card */}
          <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
            <div className="group relative bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-[#6E3EF4]/30 hover:border-[#6E3EF4]/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#6E3EF4]/20 h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#6E3EF4] rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold text-[#6E3EF4] tracking-widest">
                    STANDARD
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-5xl font-black bg-gradient-to-r from-[#6E3EF4] to-[#409AFF] bg-clip-text text-transparent">
                    €8,695
                  </span>
                </div>
                <p className="text-gray-700 text-center font-medium">
                  One-time payment • Lifetime access
                </p>
                <div className="mt-3 px-3 py-1 bg-[#6E3EF4]/10 rounded-full text-center">
                  <span className="text-xs text-[#6E3EF4] font-semibold">
                    📈 After 3 months
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {[
                  "GARO™ Inventory Optimization Platform",
                  "SquareUp POS & Payments Integration",
                  "Full Analytics Admin Dashboard",
                  "Complete Onboarding & Support",
                  "Comprehensive Training Program",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 group/item">
                    <div className="w-6 h-6 bg-[#6E3EF4]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#6E3EF4]" />
                    </div>
                    <span className="text-gray-700 group-hover/item:text-gray-800 transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate("/trinity/plus#wizard")}
                className="w-full py-4 bg-gradient-to-r from-[#6E3EF4] to-[#409AFF] rounded-xl font-bold text-white hover:from-[#5B2CCF] hover:to-[#2D7BE5] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#6E3EF4]/25 hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group/btn"
              >
                <span className="relative ">Reserve Your License</span>
                <div className="absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 group-hover/btn:left-full transition-all duration-500"></div>
              </button>
            </div>
          </Tilt>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-700 mb-4">
            All plans include lifetime updates and priority support
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-700">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-md rounded-full border border-[#6E3EF4]/20">
              <Check className="w-4 h-4 text-[#6E3EF4]" />
              30-day money-back guarantee
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-md rounded-full border border-[#6E3EF4]/20">
              <Check className="w-4 h-4 text-[#6E3EF4]" />
              Instant access
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-md rounded-full border border-[#6E3EF4]/20">
              <Check className="w-4 h-4 text-[#6E3EF4]" />
              No monthly fees
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
