import React from "react";

const BottomVillian = () => {
  return (
    <section
      className="py-20 px-6 relative overflow-hidden animate-gradient"
      style={{
        background:
          "linear-gradient(135deg, rgba(209, 196, 233, 0.8), rgba(255, 255, 255, 0.9), rgba(187, 222, 251, 0.8))",
        backgroundSize: "200% 200%",
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative ">
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full opacity-80"></div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Ready to Evolve Your Inventory?
        </h2>

        <p className="text-lg sm:text-xl text-gray-800 mb-10 max-w-2xl mx-auto leading-relaxed">
          Let GARO simulate thousands of strategies for your business — and
          discover how much you can save.
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="relative px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl text-lg font-semibold text-white hover:from-purple-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group overflow-hidden">
            <span className="relative  flex items-center justify-center">
              Simulate My Strategy
              <svg
                className="inline ml-2 w-5 h-5 group-hover:animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button className="relative px-8 py-4 border-2 border-purple-500 rounded-xl text-lg font-semibold text-purple-700 hover:bg-purple-500/10 hover:text-purple-800 transition-all duration-300 group overflow-hidden">
            <span className="relative ">Book a Demo</span>
            <div className="absolute inset-0 bg-purple-500/5 group-hover:bg-purple-500/10 transition-colors duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BottomVillian;
