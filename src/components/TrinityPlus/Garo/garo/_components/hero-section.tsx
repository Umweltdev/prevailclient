import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import CountUp from "react-countup";

const HeroSection = () => {
  const [animatedStats, setAnimatedStats] = useState({
    waste: 0,
    cost: 0,
    stockouts: 0,
  });

  useEffect(() => {
    // Animate stats after component mounts
    setAnimatedStats({
      waste: 42,
      cost: 28,
      stockouts: 91,
    });
  }, []);

  return (
    <section className="relative flex items-center min-h-screen px-4 pt-40 pb-16 overflow-hidden md:pt-20 sm:px-6 0">
      {/* Animated background blobs with parallax */}

      <div className="relative z-10 mx-auto text-center max-w-7xl">
        {/* Decorative gradient line with subtle animation */}
        {/* <div className="absolute -z-10 -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#6E3EF4] to-[#409AFF] rounded-full opacity-40 animate-pulse"></div> */}

        {/* Headline with text reveal animation */}
        <h1 className="hero-title text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[#6E3EF4] to-[#409AFF] bg-clip-text text-transparent leading-tight tracking-tight">
          Evolve Your Restocking. Cut Waste <br /> Reduce Stockouts.
        </h1>

        <p className="max-w-3xl mx-auto mb-10 text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl">
          Genetic Algorithm Restocking Optimisation with SquareUp API
          Integration — the intelligent evolution engine that transforms your
          inventory management
        </p>

        {/* CTA Buttons with shine effect and tilt */}
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <button
              className="relative inline-flex items-center justify-center min-w-[280px] px-6 py-3 text-base font-semibold text-white transition-all duration-300 transform rounded-lg sm:min-w-0 sm:w-auto sm:px-8 sm:py-4 sm:rounded-xl sm:text-lg hover:scale-105 hover:shadow-2xl group"
              style={{
                background: "linear-gradient(90deg, #6E3EF4 0%, #409AFF 100%)",
              }}
            >
              <span className="relative z-10 flex items-center justify-center">
                Simulate My Strategy
                <svg
                  className="inline w-4 h-4 ml-2 sm:w-5 sm:h-5 group-hover:animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </span>
              {/* Shine effect */}
              <div className="absolute inset-0 w-full h-full transition-all duration-500 transform -skew-x-12 -left-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-full"></div>
            </button>
          </Tilt>

          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <button className="relative inline-flex items-center justify-center min-w-[00200px] px-6 py-3 sm:min-w-0 sm:w-auto sm:px-8 sm:py-4 border-2 border-[#6E3EF4] rounded-lg sm:rounded-xl text-base sm:text-lg font-semibold text-[#6E3EF4] hover:bg-[#6E3EF4]/10 hover:text-[#409AFF] transition-all duration-300 group overflow-hidden">
              <span className="relative z-10">Book Consultation (€40-€75)</span>
              <div className="absolute inset-0 bg-[#6E3EF4]/5 group-hover:bg-[#6E3EF4]/15 transition-colors duration-300"></div>
            </button>
          </Tilt>
        </div>

        {/* Animated Stats with CountUp and Tilt */}
        <div className="grid grid-cols-1 gap-6 mt-16 sm:grid-cols-3 sm:gap-8">
          <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
            <div className="bg-white/50 backdrop-blur-md rounded-2xl p-6 border border-[#6E3EF4]/20 hover:border-[#6E3EF4] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
              <div className="text-4xl font-bold text-[#6E3EF4]">
                <CountUp
                  start={0}
                  end={animatedStats.waste}
                  duration={2.5}
                  suffix="%"
                />
              </div>
              <div className="mt-2 text-gray-700">Waste Reduction</div>
            </div>
          </Tilt>
          <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
            <div className="bg-white/50 backdrop-blur-md rounded-2xl p-6 border border-[#409AFF]/20 hover:border-[#409AFF] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
              <div className="text-4xl font-bold text-[#409AFF]">
                <CountUp
                  start={0}
                  end={animatedStats.cost}
                  duration={2.5}
                  suffix="%"
                />
              </div>
              <div className="mt-2 text-gray-700">Lower Supplier Cost</div>
            </div>
          </Tilt>
          <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
            <div className="bg-white/50 backdrop-blur-md rounded-2xl p-6 border border-[#6E3EF4]/20 hover:border-[#6E3EF4] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
              <div className="text-4xl font-bold text-[#6E3EF4]">
                <CountUp
                  start={0}
                  end={animatedStats.stockouts}
                  duration={2.5}
                  suffix="%"
                />
              </div>
              <div className="mt-2 text-gray-700">Fewer Stockouts</div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
