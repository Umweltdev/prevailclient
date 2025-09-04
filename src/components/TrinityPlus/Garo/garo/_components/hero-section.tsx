import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate()
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

      <div className="relative  mx-auto text-center max-w-7xl">
        {/* Decorative gradient line with subtle animation */}
        {/* <div className="absolute - -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#6E3EF4] to-[#409AFF] rounded-full opacity-40 animate-pulse"></div> */}

        {/* Headline with text reveal animation */}
        <h1
          className="text-4xl sm:text-6xl md:text-7xl  font-extrabold mb-8 
  bg-gradient-to-r from-[#6E3EF4] via-[#5A3DFB] to-[#409AFF] 
  bg-clip-text text-transparent 
  leading-[1.1] tracking-tight 
  drop-shadow-[0_4px_12px_rgba(64,154,255,0.6)] 
  animate-gradient"
        >
          <span className="block">Evolve Your Restocking.</span>
          <span className="block">Cut Waste, Reduce Stockouts.</span>
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent">
            Genetic Algorithm Restocking Optimisation API 
          </h2>
        </div>

        <p className="max-w-3xl mx-auto mb-10 text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl">
          Genetic Algorithm Restocking Optimisation with SquareUp API
          Integration — the intelligent evolution engine that transforms your
          inventory management
        </p>

        {/* CTA Buttons with shine effect and tilt */}
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <button
            onClick={()=> navigate('/trinity/plus#wizard')}
              className="relative inline-flex items-center justify-center min-w-[280px] px-6 py-3 text-base font-semibold text-white transition-all duration-300 transform rounded-lg sm:min-w-0 sm:w-auto sm:px-8 sm:py-4 sm:rounded-xl sm:text-lg hover:scale-105 hover:shadow-2xl group"
              style={{
                background: "linear-gradient(90deg, #6E3EF4 0%, #409AFF 100%)",
              }}
            >
              <span onClick={()=> navigate('/trinity/plus#wizard')} className="relative  flex items-center justify-center">
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
              <span className="relative ">Book Consultation (€40-€75)</span>
              <div className="absolute inset-0 bg-[#6E3EF4]/5 group-hover:bg-[#6E3EF4]/15 transition-colors duration-300"></div>
            </button>
          </Tilt>
        </div>

        <div className="relative inline-block mt-6 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-md animate-pulse">
          <span className="text-gray-800 font-medium text-sm">
            Lock in beta price by making a purchase during launch week • 3 days before beta ends
          </span>
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
