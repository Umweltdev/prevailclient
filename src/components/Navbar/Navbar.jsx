import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logoImg from "../../assets/pmmlogo.png";
import { Menu } from "@mui/icons-material";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return;

    () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Conditionally apply fade-out logic based on screen size
  const applyFadeOut = !window.matchMedia("(max-width: 768px)").matches; // Adjust breakpoint as needed

  const calculateOpacity = () => {
    if (scrollPosition > 50 && scrollPosition < 270) {
      // Calculate opacity based on scroll position for larger screens
      return 1 - (scrollPosition - 50) / (270 - 50);
    } else if (scrollPosition >= 270) {
      // Completely faded out for larger screens
      return 0;
    } else {
      // Fully visible
      return 1;
    }
  };

  const navbarStyle = {
    opacity: applyFadeOut ? calculateOpacity() : 1, // Always fully visible on mobile
  };

  return (
    <div className="navContainer" style={navbarStyle}>
      <Link to="/">
        <img className="navLogo" src={logoImg} alt="" />
      </Link>
      <ul className="navPages">
        <Link to="/About" className="navLinks">
          About Us
        </Link>
        <Link to="/Portfolio" className="navLinks">
          Portfolio
        </Link>
        <Link to="/Blog" className="navLinks">
          Blog
        </Link>
        <Link to="/Services" className="navLinks">
          Services
        </Link>
        <Link to="/Contact" className="navLinks">
          Contact
        </Link>
      </ul>
      {/* Harmburger for mobile view */}
      <Menu className="mobileMenu" sx={{ fontSize: "5vw" }} />
    </div>
  );
};

export default Navbar;
