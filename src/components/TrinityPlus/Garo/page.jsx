import { useState, useEffect } from "react";
import { gsap } from "gsap";
import HeroSection from "./garo/_components/hero-section";
import FeatureSection from "./garo/_components/features-section";
import BackgroundBlobs from "./components/ui/background-blobs";
import IndustrySection from "./garo/_components/Industry-section";
import HowGaroWorksSection from "./garo/_components/how-garo-works-section";
import Footer from "./components/footer";
import PricingSection from "./garo/_components/pricing-section";
import BottomVillian from "./garo/_components/bottom-villian";
import { NavBar } from "./components/ui/nav-bar";

const GAROLandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    waste: 0,
    cost: 0,
    stockouts: 0,
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <NavBar
        logoText="GARO"
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        scrolled={scrolled}
      />

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
      <Footer />
    </div>
  );
};

export default GAROLandingPage;
