"use client";
import { useRef } from "react";
import { Brain, Sparkles } from "lucide-react";

import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Check,
  TrendingUp,
  Package,
  Clock,
  Shield,
  Users,
  BarChart3,
  AlertCircle,
  ArrowRight,
  Zap,
  Database,
  RefreshCw,
} from "lucide-react";
import { Star } from "lucide-react";
import { gsap } from "gsap";
import CountUp from "react-countup";
import Tilt from "react-parallax-tilt"; // For 3D tilt effect
import HeroSection from "./garo/_components/hero-section.js";
import FeatureSection from "./garo/_components/features-section.js";
import BackgroundBlobs from "./components/ui/background-blobs.js";
import IndustrySection from "./garo/_components/Industry-section.js";
import HowGaroWorksSection from "./garo/_components/how-garo-works-section.js";
import Footer from "./components/footer.js";
import CoreFunctionality from "./garo/_components/core-functionality.js";
import PricingSection from "./garo/_components/pricing-section.js";
import BottomVillian from "./garo/_components/bottom-villian.js";
import { NavBar } from "./components/ui/nav-bar.js";
import AppBarNav from "../../Navbar/Appbar.jsx";
import FooterNew from "../../Footer/FooterNew.jsx";

const GAROLandingPage = () => {
  const [activeTab, setActiveTab] = useState("restaurants");
  const [scrolled, setScrolled] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    waste: 0,
    cost: 0,
    stockouts: 0,
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const logoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Animate stats
    const interval = setInterval(() => {
      setAnimatedStats((prev) => ({
        waste: Math.min(prev.waste + 1, 30),
        cost: Math.min(prev.cost + 1, 15),
        stockouts: Math.min(prev.stockouts + 2, 40),
      }));
    }, 50);

    setTimeout(() => clearInterval(interval), 2000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    gsap.to(".blob-1", {
      x: 50,
      y: 50,
      scale: 1.2,
      repeat: -1,
      yoyo: true,
      duration: 5,
      ease: "sine.inOut",
    });
    gsap.to(".blob-2", {
      x: -50,
      y: -50,
      scale: 1.2,
      repeat: -1,
      yoyo: true,
      duration: 6,
      ease: "sine.inOut",
    });
    gsap.from(".hero-title", {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.2,
    });
  }, []);

  const industries = {
    restaurants: {
      title: "Restaurants & Food Chains",
      icon: "🍴",
      description:
        "Slash food waste, extend shelf life, and keep kitchens stocked.",
      benefits: [
        "30% waste reduction",
        "Smart FIFO/FEFO",
        "Real-time demand prediction",
      ],
    },
    hotels: {
      title: "Hotels & Hospitality",
      icon: "🏨",
      description:
        "Manage perishables, amenities, and maintenance parts seamlessly.",
      benefits: [
        "Predictive maintenance",
        "Multi-location sync",
        "Automated reordering",
      ],
    },
    manufacturing: {
      title: "Service & Manufacturing",
      icon: "⚙️",
      description:
        "Predict equipment failures, optimise spare parts, and reduce downtime costs.",
      benefits: [
        "MTBF/MTTR tracking",
        "Criticality scoring",
        "Downtime prevention",
      ],
    },
  };

  const faqs = [
    {
      q: "What if I already use an ERP?",
      a: "GARO works alongside ERPs—enhancing decision quality, not replacing tools.",
    },
    {
      q: "Is it secure?",
      a: "Fully GDPR-compliant with role-based access & encryption.",
    },
    {
      q: "I'm a small business. Can I afford this?",
      a: "Built for SMEs — minimal SKU requirements, instant ROI tracking, and flexible pricing.",
    },
    {
      q: "How does GARO connect to my system?",
      a: "GARO integrates directly with SquareUp POS via API or CSV upload.",
    },
  ];

  return (
    <div
      className="min-h-screen text-gray-900 relative w-full"
      style={{
        background:
          "linear-gradient(135deg, rgba(209, 196, 233, 0.8), rgba(255, 255, 255, 0.9), rgba(187, 222, 251, 0.8))",
        backgroundSize: "200% 200%",
        animation: "gradientShift 8s ease infinite",
      }}
    >
      <style>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
      {/* Navigation */}
      <AppBarNav color="#000" />
      {/* <NavBar /> */}
      <div className="relative bg-gradient-to-b from-gray-50 to-indigo-10">
        {/* Blobs behind hero */}
        <BackgroundBlobs variant={1} />
        <HeroSection />

        {/* Blobs behind features */}
        <BackgroundBlobs variant={2} />
        <FeatureSection />

        <IndustrySection />

        <HowGaroWorksSection />

        <PricingSection />
      </div>
      {/* Industry Solutions */}
      {/* Features Grid */}
      {/* Pricing Section - NEW (AFTER) */}
      {/* FAQ Section */}
      {/* Final CTA */}
      <BottomVillian />
      {/* Footer */}
      {/* Footer */}
      <FooterNew />{" "}
    </div>
  );
};

export default GAROLandingPage;
