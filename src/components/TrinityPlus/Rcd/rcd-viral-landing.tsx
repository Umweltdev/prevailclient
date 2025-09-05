import FAQ from "../../About/FAQ.jsx";
import FooterNew from "../../Footer/FooterNew.jsx";
import AppBarNav from "../../Navbar/Appbar.jsx";
import CTA from "./components/CTA.js";
import Features from "./components/Features.js";
import { FloatingShapes, StatsBar } from "./components/FloatingShapes.js";
import GlassCard from "./components/GlassCard.js";
import Hero from "./components/Hero.js";
import HowItWorks from "./components/HowItWorks.js";
import Nav from "./components/Nav.js";
import Pricing from "./components/Pricing.js";
import Problem from "./components/Problem.js";
import Solution from "./components/Solution.js";

export default function RcdLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-violet-50/30 text-slate-900 relative">
      <FloatingShapes />
      <AppBarNav color="#000" />
      <Hero />
      <StatsBar />
      <Problem />
      <Solution />
      <HowItWorks />
      <Features />
      <Pricing />
      <FAQ />
      <CTA />

      <FooterNew />
    </div>
  );
}