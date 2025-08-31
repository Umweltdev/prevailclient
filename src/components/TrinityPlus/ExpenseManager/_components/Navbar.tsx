"use client"
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  logo?: string;
  menuItems?: { label: string; href: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ 
  logo = "Logo",
  menuItems = [
    { label: "Home", href: "#home" },
    { label: "How To", href: "#howto" },
    { label: "Demo", href: "#demo" },
    { label: "Pricing", href: "#pricing" },
    { label: "Faq", href: "#faq" }
  ]
}) => {
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleBack = () => {
    navigate(-1); // Go back to previous page
  };
  return (
      <nav className={`
        fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ease-in-out
        ${isScrolled 
          ? 'bg-white/10 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent backdrop-blur-md border-b border-white/20 shadow-lg' 
          : 'bg-gray-50/95 text-gray-700'
        }
      `}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-semibold animate-pulse duration-1000 cursor-pointer">
            <div className="logo flex items-center" onClick={()=> document.querySelector('#home')?.scrollIntoView({ behavior: "smooth", block: "start" })}>
                <div className="logo-icon">🧬</div>
                <span className='gradient-text'>{logo || 'Trinity'}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                onClick={(e) => {
                  if(item.label === 'Home'){
                    handleBack()
                  }else{
                    handleSmoothScroll(e, item.href)
                  }
                }}
                className=" hover:text-gray-900 transition-colors duration-200 text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-700 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
  )
}

export default Navbar