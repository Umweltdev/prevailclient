import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";

function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden mt-20" id="home">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse animation-delay-2000" />
      </div>

      <div className="relative  container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 to-cyan-600 bg-clip-text text-transparent mb-6">
            Never Run Out of
            <Box
              sx={{ pb: 1.5 }} // padding-bottom using MUI
              className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
            >
              Cash Again
            </Box>
          </h1>

          {/* Added Expense Manager subtitle */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent">
              Expense Manager
            </h2>
          </div>

          <p className="text-xl md:text-2xl text-gray-500 mb-8 max-w-3xl mx-auto">
            Trinity sees 30 days into your financial future, automatically
            juggling expenses so you always have money when you need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/trinity/plus#wizard")}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Start Beta
            </button>
            {/* <button onClick={()=> navigate('/trinity/plus#wizard')} className="px-8 py-4 bg-black/60 backdrop-blur text-white rounded-lg font-semibold text-lg border border-white/20 hover:bg-black transition-all duration-300">
              Watch 2-Min Demo
            </button> */}
          </div>
          {/* <GlassButton className='text-black animate-pulse'>
              No credit card required • 30-day free trial • Cancel anytime
            </GlassButton> */}
          <Box
            sx={{
              position: "relative",
              display: "inline-block",
              mt: 6,
              px: 2,
              py: 1,
              borderRadius: "9999px",
              bgcolor: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: 3,
              animation: "pulse 2s infinite",
              "@keyframes pulse": {
                "0%, 100%": { opacity: 1 },
                "50%": { opacity: 0.6 },
              },
            }}
          >
            {" "}
            <Typography
              variant="body2"
              sx={{ color: "text.primary", fontWeight: 400 }}
            >
              {" "}
              🎉 Lock in the beta price by booking a consultation during launch
              week — 3 days before beta ends{" "}
            </Typography>{" "}
          </Box>
          {/* <p className="mt-6 text-gray-400">
              No credit card required • 30-day free trial • Cancel anytime
            </p> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
