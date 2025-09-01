import React, { useEffect, useState } from 'react'

function Nav() {
    const [scrolled, setScrolled] = useState(false);
    // Handle navbar scroll effect
      useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
      const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-white/95 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-3xl font-bold gradient-text">MCD</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" onClick={(e) => handleSmoothScroll(e, 'how-it-works')} 
               className="text-gray-600 hover:text-gray-900 transition-colors font-medium">How It Works</a>
            <a href="#features" onClick={(e) => handleSmoothScroll(e, 'features')}
               className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Features</a>
            <a href="#pricing" onClick={(e) => handleSmoothScroll(e, 'pricing')}
               className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Pricing</a>
            <a href="#faq" onClick={(e) => handleSmoothScroll(e, 'faq')}
               className="text-gray-600 hover:text-gray-900 transition-colors font-medium">FAQ</a>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              Start Free Trial
            </button>
          </div>
        </div>
      </nav>
  )
}

export default Nav