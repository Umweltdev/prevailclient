import React from "react";
// import "@/App.css"
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const target = document.querySelector("#wizard");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="blob-container">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="blob blob-4"></div>
        <div className="blob blob-5"></div>
        <div className="blob blob-6"></div>
      </div>

      <div
        style={{
          marginTop: "40px",
        }}
        className="hero-content"
      >
        <div className="new-badge ">
          ✨ ADVANCED AI SYSTEMS - Genetic Evolution & Advertising Automation
        </div>

        <h1>
          <span className="gradient-text">Trinity Plus </span>
          <br />
          Next-Gen Business Systems
        </h1>

        <p>
          Trinity Plus adds two revolutionary systems: GARO genetic inventory
          optimizer and AED advertising automation. Transform your business with
          AI that evolves.
        </p>

        {/* Countdown Timer */}
        <div className="countdown">
          <div className="countdown-header">🔥 BETA PRICING ENDS IN</div>
          <div className="countdown-grid">
            <div className="countdown-item">
              <div className="countdown-value" id="days">
                10
              </div>
              <div className="countdown-label">Days</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-value" id="hours">
                00
              </div>
              <div className="countdown-label">Hours</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-value" id="minutes">
                00
              </div>
              <div className="countdown-label">Minutes</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-value" id="seconds">
                00
              </div>
              <div className="countdown-label">Seconds</div>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="pricing-tiers">
          <div
            className="tier active"
            onClick={() => navigate("/trinity/plus#wizard")}
          >
            <div className="tier-price">€1,160</div>
            <div className="tier-label">Beta (10 days)</div>
          </div>
          <div className="tier " onClick={() => handleScroll()}>
            <div className="tier-price">€2,895</div>
            <div className="tier-label">Early (3 months)</div>
          </div>
          <div className="tier" onClick={() => handleScroll()}>
            <div className="tier-price">€8,695</div>
            <div className="tier-label">Standard</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            className="btn btn-warning"
            onClick={() => navigate("/trinity/plus#wizard")}
            style={{ animation: "pulse 2s infinite" }}
          >
            Get Complete Trinity Plus Bundle
          </button>
          <button className="btn btn-primary" onClick={() => handleScroll()}>
            Explore Individual Systems
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
