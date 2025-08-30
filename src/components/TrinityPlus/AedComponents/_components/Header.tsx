'use client'

'use client'
import { Zap, X, Menu } from 'lucide-react'
import React, { useEffect, useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
    
  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        scrollY > 50 
          ? 'bg-white/80 backdrop-blur-xl shadow-2xl border-b border-white/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center group cursor-pointer">
              <div className="relative">
                <Zap className={`w-8 h-8 transition-all duration-300 ${
                  scrollY > 50 ? 'text-blue-600' : 'text-blue-500'
                } group-hover:text-purple-600 group-hover:scale-110`} />
                <div className="absolute inset-0 w-8 h-8 bg-blue-500/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 -z-10"></div>
              </div>
              <span className={`ml-2 text-xl font-bold transition-all duration-300 ${
                scrollY > 50 ? 'text-gray-900' : 'gradient-text drop-shadow-lg'
              } group-hover:text-purple-600`}>
                AED System
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {['How It Works', 'Features', 'Results', 'Pricing'].map((item, index) => (
                <a 
                  key={item}
                  href={item === 'How It Works' ? '#How' : `#${item.toLowerCase().replace(' ', '-')}`} 
                  onClick={(e) => handleSmoothScroll(e, item === 'How It Works' ? '#How' : `#${item.toLowerCase().replace(' ', '-')}`)}
                  className={`relative px-4 py-2 rounded-full transition-all duration-300 group ${
                    scrollY > 50 
                      ? 'text-gray-700 hover:text-blue-600' 
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10">{item}</span>
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300"></div>
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-3">
              <button className={`hidden md:block px-5 py-2 rounded-full font-medium transition-all duration-300 relative overflow-hidden group ${
                scrollY > 50 
                  ? 'text-blue-600 hover:text-white' 
                  : 'text-white/90 hover:text-white'
              }`}>
                <span className="relative z-10">Sign In</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
              </button>
              
              <button className="relative px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
              </button>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`md:hidden p-2 rounded-full transition-all duration-300 ${
                  scrollY > 50 
                    ? 'text-gray-700 hover:bg-gray-100' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <div className="relative w-6 h-6">
                  <Menu className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 rotate-180 scale-50' : 'opacity-100 rotate-0 scale-100'
                  }`} />
                  <X className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-50'
                  }`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
        isMenuOpen ? 'visible' : 'invisible'
      }`}>
        <div className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0'
        }`} onClick={() => setIsMenuOpen(false)}></div>
        
        <div className={`absolute top-16 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}>
          <nav className="p-6">
            {['How It Works', 'Features', 'Results', 'Pricing'].map((item, index) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                
                className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 relative group"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={(e) => {
                  setIsMenuOpen(false);
                  handleSmoothScroll(e, item === 'How It Works' ? '#How' : `#${item.toLowerCase().replace(' ', '-')}`)
                }}
              >
                <span className="relative z-10">{item}</span>
                <div className="absolute left-0 top-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full -translate-y-1/2 transition-all duration-300"></div>
              </a>
            ))}
            
            <div className="pt-4 mt-4 border-t border-gray-200 space-y-2">
              <button className="w-full py-3 text-blue-600 hover:text-blue-700 font-medium hover:bg-blue-50 rounded-lg transition-all duration-200">
                Sign In
              </button>
              <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 relative overflow-hidden group">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header