import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 py-6 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-white/80 border-b border-white/30 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-3 group">
          <span className="text-3xl group-hover:animate-spin transition-transform duration-500">🔄</span>
          <span className="text-3xl font-black bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            RCD
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {[
            { href: "#problem", label: "Problem" },
            { href: "#solution", label: "Solution" },
            { href: "#how", label: "How It Works" },
            { href: "#features", label: "Features" },
            { href: "#pricing", label: "Pricing" },
          ].map((l) => (
            <Link
              key={l.href}
              to={l.href}
              onClick={(e)=> handleSmoothScroll(e, l.href)}
              className="text-slate-700 font-semibold transition-all duration-300 hover:text-violet-600 hover:scale-110 relative group"
            >
              {l.label}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-600 to-purple-600 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          <Button className="animate-pulse hover:animate-none">
            Activate Viral Growth
          </Button>
        </div>
      </div>
    </nav>
  );
}