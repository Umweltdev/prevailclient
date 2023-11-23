import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // You can adjust the fade-out starting point and end point here
  const fadeOutStart = 50;
  const fadeOutEnd = 370;

  const calculateOpacity = () => {
    if (scrollPosition > fadeOutStart && scrollPosition < fadeOutEnd) {
      // Calculate opacity based on scroll position
      return 1 - (scrollPosition - fadeOutStart) / (fadeOutEnd - fadeOutStart);
    } else if (scrollPosition >= fadeOutEnd) {
      // Completely faded out
      return 0;
    } else {
      // Fully visible
      return 1;
    }
  };

  const navbarStyle = {
    opacity: calculateOpacity(),
  };

  return (
    <div className="navContainer" style={navbarStyle}>
      <Link to="/" className="navLogo">
        PREVAIL
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
    </div>
  );
};

export default Navbar;
