"use client";
import {
  Zap,
  ArrowRight,
  Play,
  TrendingUp,
  Clock,
  Globe,
  Activity,
} from "lucide-react";
import { FaGoogle, FaMeta, FaLinkedin, FaTiktok } from "react-icons/fa6";
import React from "react";
import StatCard from "./StatCard";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  const navigate = useNavigate();

  // Platform data
  const platforms = [
    { name: "Google", color: "#4285F4", icon: <FaGoogle /> },
    { name: "Meta", color: "#1877F2", icon: <FaMeta /> },
    { name: "LinkedIn", color: "#0A66C2", icon: <FaLinkedin /> },
    { name: "TikTok", color: "#000000", icon: <FaTiktok /> },
  ];

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen overflow-hidden">
      {/* Geometric Shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center px-6 py-3 bg-white/70 backdrop-blur-lg text-blue-700 rounded-full text-sm font-medium mb-8 border border-white/30 shadow-lg"
        >
          <Zap className="w-4 h-4 mr-2 animate-pulse" />
          AI-Powered Ad Optimization
          <div className="ml-2 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          custom={0.4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-8"
        >
          Stop Juggling
          <br />
          <span className="relative">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              4 Ad Platforms
            </span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          custom={0.6}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent mb-8"
        >
          Advertising Expensive Distribution API
        </motion.h2>

        <motion.p
          custom={0.8}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          One intelligent system that manages all your ads, optimizes budgets
          automatically, and delivers{" "}
          <span className="font-semibold text-blue-600">4x better returns</span>{" "}
          while you sleep.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <button
            onClick={() => navigate("/trinity/plus#wizard")}
            className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105"
          >
            <span className="relative flex items-center">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>

          <button className="group px-10 py-4 bg-white/70 backdrop-blur-lg text-gray-700 rounded-full text-lg font-semibold border-2 border-white/30 hover:border-blue-600/50 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl hover:bg-white/80">
            <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            Watch Demo (2 min)
          </button>
        </motion.div>

        {/* Platform Logos */}
        <motion.div
          className="flex items-center justify-center space-x-12 mb-16"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2, delayChildren: 1.2 },
            },
          }}
        >
          {platforms.map((platform) => (
            <motion.div
              key={platform.name}
              variants={fadeUp}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-xl backdrop-blur-sm border border-white/30"
                style={{
                  backgroundColor: platform.color + "15",
                  boxShadow: `0 8px 32px ${platform.color}20`,
                }}
              >
                {platform.icon}
              </div>
              <span className="text-sm text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">
                {platform.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Hero Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2, delayChildren: 2 },
            },
          }}
        >
          <motion.div variants={fadeUp}>
            <StatCard
              value="400%"
              label="Average ROI Increase"
              icon={<TrendingUp className="w-6 h-6 text-green-600" />}
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <StatCard
              value="95%"
              label="Time Saved"
              icon={<Clock className="w-6 h-6 text-blue-600" />}
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <StatCard
              value="4"
              label="Platforms Managed"
              icon={<Globe className="w-6 h-6 text-purple-600" />}
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <StatCard
              value="24/7"
              label="Automation"
              icon={<Activity className="w-6 h-6 text-orange-600" />}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
