import React from "react";
import Header from "./_components/Header.js";
import Hero from "./_components/Hero.js";
import Problems from "./_components/Problems.js";
import Analogy from "./_components/Analogy.js";
import Features from "./_components/Features.js";
import Results from "./_components/Results.js";
import Scenario from "./_components/Scenario.js";
import FAQPage from "./_components/FAQPage.js";
import Pricing from "./_components/Pricing.js";
import CTA from "./_components/CTA.js";
import Footer from "./_components/Footer.js";
import FloatingBlobs from "./_components/FloatingBlob.js";
import AppBarNav from "../../Navbar/Appbar.jsx";

// Main Landing Page Component
function AEDLandingPage() {
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <AppBarNav color="#000" />/{/* Hero Section */}
      <Hero />
      {/* Problem/Solution Section */}
      <Problems />
      {/* Restaurant Analogy Section */}
      <Analogy />
      {/* Features Section */}
      <Features />
      {/* Real Results Section */}
      <Results />
      {/* Scenarios Section */}
      <Scenario />
      {/* FAQ Section */}
      <FAQPage />
      {/* Pricing Section */}
      <Pricing />
      {/* CTA Section */}
      <CTA />
      {/* Footer */}
      <Footer />
      {/* Floating Blob */}
      {/* <FloatingBlobs /> */}
    </div>
  );
}

export default AEDLandingPage;
