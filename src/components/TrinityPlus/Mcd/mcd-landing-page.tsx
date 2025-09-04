import { useState, useEffect } from 'react';
import SimulationSection from './components/SimulationSection.js';
import Footer from './components/Footer.js';
import Cta from './components/Cta.js';
import FAQ from './components/FAQ.js';
import Pricing from './components/Pricing.js';
import Testimonials from './components/Testimonials.js';
import Benefits from './components/Benefits.js';
import Features from './components/Features.js';
import HowItWorks from './components/HowItWorks.js';
import Problem from './components/Problem.js';
import Hero from './components/Hero.js';
import Nav from './components/Nav.js';
import AppBarNav from '../../Navbar/Appbar.jsx';

// Simulation Component


const MCDLandingPage = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const sections = document.querySelectorAll('.scroll-reveal');
    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  

  

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">

      {/* Animated Background Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      {/* Navigation */}
      <AppBarNav color="#000" />

      {/* Hero Section */}
      <Hero/>

      {/* Problem Section */}
      <Problem visibleSections={visibleSections}/>

      {/* How It Works */}
      <HowItWorks visibleSections={visibleSections}/>

      {/* Features */}
      <Features visibleSections={visibleSections}/>

      {/* Benefits */}
      <Benefits visibleSections={visibleSections}/>

      {/* Interactive Simulation */}
      <SimulationSection visibleSections={visibleSections} />

      {/* Testimonials */}
      {/* <Testimonials visibleSections={visibleSections}/> */}

      {/* Pricing */}
      <Pricing visibleSections={visibleSections}/>

      {/* FAQ */}
      <FAQ visibleSections={visibleSections}/>

      {/* Final CTA */}
      <Cta visibleSections={visibleSections}/>

      {/* Footer */}
     <Footer/>
    </div>
  );
};

export default MCDLandingPage;