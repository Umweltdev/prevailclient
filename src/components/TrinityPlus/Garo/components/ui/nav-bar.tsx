"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./resizable-navbar";
import { useRef } from "react";
import { Brain, Sparkles } from "lucide-react";

interface NavItem {
  name: string;
  link: string;
}

interface NavBarProps {
  navItems?: NavItem[];
  logoText?: string;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  scrolled?: boolean;
}

export function NavBar({
  navItems,
  logoText = "GARO",
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  scrolled = false,
}: NavBarProps) {
  const logoRef = useRef(null);

  return (
    <div
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 
        ${scrolled ? "backdrop-blur-md py-2" : "py-4"}
      `}
    >
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div ref={logoRef} className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-purple-500/30 blur-lg animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                <Brain className="w-8 h-8 sm:w-9 sm:h-9 text-indigo-300 drop-shadow-[0_0_12px_rgba(110,62,244,0.8)] group-hover:text-purple-300 transition-colors duration-300" />
                <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-blue-300 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
              </div>
            </div>
            <div className="relative overflow-hidden">
              <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#6E3EF4] via-[#409AFF] to-[#6E3EF4] bg-clip-text text-transparent tracking-tight bg-300% animate-gradient-x">
                {logoText}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          </div>

          {/* Nav Links */}
          <NavItems items={navItems} />

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <button
              className={`group relative px-4 py-2 rounded-full font-medium text-sm overflow-hidden transition-all duration-200 flex items-center justify-center min-h-[40px] ${
                scrolled
                  ? "text-white bg-gradient-to-r from-[#6E3EF4]/70 to-[#409AFF]/70 hover:bg-[#6E3EF4]/80"
                  : "text-[#6E3EF4] border-2 border-[#6E3EF4] hover:text-white hover:bg-[#6E3EF4]"
              }`}
              aria-label="Book a consultation"
            >
              <span className="relative z-10">Book Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#6E3EF4]/0 to-[#409AFF]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </button>

            <button
              className={`group relative px-4 py-2 rounded-full font-medium text-sm text-white overflow-hidden transition-all duration-200 flex items-center justify-center min-h-[40px] ${
                scrolled
                  ? "bg-gradient-to-r from-[#6E3EF4]/70 to-[#409AFF]/70 hover:bg-[#5B2CC3]/80"
                  : "bg-gradient-to-r from-[#6E3EF4] to-[#409AFF] hover:bg-[#5B2CC3]"
              }`}
              aria-label="Run a free simulation"
            >
              <span className="relative z-10 flex items-center justify-center space-x-1">
                <span>Run Simulation</span>
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse self-center" />
              </span>
            </button>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <div className="flex items-center space-x-3 group">
              <div ref={logoRef} className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-purple-500/30 blur-lg animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <Brain className="w-8 h-8 sm:w-9 sm:h-9 text-indigo-300 drop-shadow-[0_0_12px_rgba(110,62,244,0.8)] group-hover:text-purple-300 transition-colors duration-300" />
                  <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-blue-300 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
                </div>
              </div>
              <div className="relative overflow-hidden">
                <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#6E3EF4] via-[#409AFF] to-[#6E3EF4] bg-clip-text text-transparent tracking-tight bg-300% animate-gradient-x">
                  {logoText}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </div>

            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            <div className="flex w-full flex-col gap-3">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className={`group relative px-4 py-2 rounded-full font-medium text-sm overflow-hidden transition-all duration-200 flex items-center justify-center min-h-[40px] w-full ${
                  scrolled
                    ? "text-white bg-gradient-to-r from-[#6E3EF4]/70 to-[#409AFF]/70 hover:bg-[#6E3EF4]/80"
                    : "text-[#6E3EF4] border-2 border-[#6E3EF4] hover:text-white hover:bg-[#6E3EF4]"
                }`}
                aria-label="Book a consultation"
              >
                <span className="relative z-10">Book Consultation</span>
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className={`group relative px-4 py-2 rounded-full font-medium text-sm text-white overflow-hidden transition-all duration-200 flex items-center justify-center min-h-[40px] w-full ${
                  scrolled
                    ? "bg-gradient-to-r from-[#6E3EF4]/70 to-[#409AFF]/70 hover:bg-[#5B2CC3]/80"
                    : "bg-gradient-to-r from-[#6E3EF4] to-[#409AFF] hover:bg-[#5B2CC3]"
                }`}
                aria-label="Run a free simulation"
              >
                <span className="relative z-10 flex items-center justify-center space-x-1">
                  <span>Run Simulation</span>
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse self-center" />
                </span>
              </button>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
