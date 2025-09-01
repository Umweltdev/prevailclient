import React from "react";
import { Brain } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-800 to-indigo-900 py-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 px-6">
        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <Brain className="w-6 h-6 text-purple-200" />
          <span className="text-lg font-semibold text-purple-50">
            GARO - Genetic Algorithm Restocking Optimisation
          </span>
        </div>

        {/* Copyright */}
        <p className="text-purple-100 text-sm text-center sm:text-right">
          © 2025 GARO. Built for SMEs ready to evolve.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
