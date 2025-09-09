"use client";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export default function HeroSection() {
  const navigate = useNavigate();
  // Countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [pricingMessage, setPricingMessage] = useState(null);

  // Set beta end date
  const betaEndDate = new Date();
  betaEndDate.setDate(betaEndDate.getDate() + 10);

  // Countdown logic
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = betaEndDate.getTime() - now;

      if (distance < 0) {
        setPricingMessage("EARLY ADOPTER PRICING NOW ACTIVE - €500 per system");
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Smooth scroll
  // const scrollToSection = (sectionId) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  // };

  // Purchase handler
  const purchase = (type) => {
    let message = "";

    switch (type) {
      case "expense":
        message =
          "💰 Trinity Expense Manager - BETA PRICE: €200\n\n" +
          "You're getting:\n" +
          "• Complete expense management system\n" +
          "• 7 intelligent allocation rules\n" +
          "• Emergency fund protection\n" +
          "• Full source code\n\n" +
          "Price after beta: €500 (early) → €1,500 (standard)\n" +
          "You save: €696 beta!";
        break;
      case "mcd":
        message =
          "📈 MCD System - BETA PRICE: €200\n\n" +
          "Marketing Cost Displacement includes:\n" +
          "• Automatic price optimization\n" +
          "• Marketing cost coverage\n" +
          "• Profit protection algorithms\n" +
          "• Full source code\n\n" +
          "Price after beta: €500 (early) → €1,500 (standard)\n" +
          "You save: €1,300!";
        break;
      case "rcd":
        message =
          "🎯 RCD System - BETA PRICE: €200\n\n" +
          "Returning Customer Discount includes:\n" +
          "• Automatic loyalty tracking\n" +
          "• Viral referral networks\n" +
          "• Customer lifetime optimization\n" +
          "• Full source code\n\n" +
          "Price after beta: €500 (early) → €1,500 (standard)\n" +
          "You save: € 1,696!";
        break;
      case "bundle":
        message =
          "🎯 COMPLETE TRINITY SYSTEM - BETA PRICE: €600\n\n" +
          "You're getting ALL THREE systems:\n\n" +
          "✓ Trinity Expense Manager\n" +
          "✓ MCD System\n" +
          "✓ RCD System\n" +
          "✓ Full integration support\n\n" +
          "Beta price: €600 (next 10 days)\n" +
          "Early adopter: €1,500 (next 3 months)\n" +
          "Standard price: €4,500\n\n" +
          "YOU SAVE €3,900!";
        break;
      default:
        message = "System not found!";
    }

    alert(message + "\n\n[Checkout process would begin here]");
  };

  const handleScroll = () => {
    const target = document.querySelector("#wizard");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      style={{
        background: "transparent",
        border: "none",
        boxShadow: "none",
      }}
      className="hero section-alt  "
    >
      <div className="hero-content container">
        {/* Pricing Alert */}
        <div className="pricing-alert">
          {pricingMessage ? (
            <div style={{ color: "#f59e0b", fontWeight: 600 }}>
              {pricingMessage}
            </div>
          ) : (
            <>
              <div
                style={{
                  color: "#ef4444",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                }}
              >
                🔥 BETA PRICING ENDS IN:
              </div>
              <div className="countdown-timer">
                <div className="countdown-unit">
                  <div className="countdown-value">
                    {String(timeLeft.days).padStart(2, "0")}
                  </div>
                  <div className="countdown-label">Days</div>
                </div>
                <div className="countdown-unit">
                  <div className="countdown-value">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </div>
                  <div className="countdown-label">Hours</div>
                </div>
                <div className="countdown-unit">
                  <div className="countdown-value">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </div>
                  <div className="countdown-label">Minutes</div>
                </div>
                <div className="countdown-unit">
                  <div className="countdown-value">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </div>
                  <div className="countdown-label">Seconds</div>
                </div>
              </div>
            </>
          )}
        </div>

        <h1>
          Three Intelligent Systems for
          <br />
          <span className="gradient-text">Trinity Core System</span>
        </h1>

        <p>
          Expense management, dynamic pricing, and customer loyalty systems.
          Each powerful alone. Exponentially stronger together.
        </p>

        {/* Pricing Tiers */}
        <div className="pricing-tiers" id="pricing">
          <h3 style={{ marginBottom: "1rem" }}>Time-Limited Pricing</h3>
          <div className="tier-grid">
            <div
              className="tier-card active cursor-pointer"
              onClick={() => navigate("/trinity/plus#wizard")}
            >
              <div className="tier-badge">ACTIVE NOW</div>
              <div className="tier-name">Beta Access</div>
              <div className="tier-price"> €690</div>
              <div className="tier-duration">Per system • 10 days left</div>
            </div>
            <div
              className="tier-card"
              style={{ cursor: "not-allowed", pointerEvents: "none" }}
            >
              <div className="tier-name">Early Adopter</div>
              <div className="tier-price"> €1728</div>
              <div className="tier-duration">Per system • Next 3 months</div>
            </div>
            <div
              className="tier-card"
              style={{ cursor: "not-allowed", pointerEvents: "none" }}
            >
              <div className="tier-name">Standard</div>
              <div className="tier-price">€5187</div>
              <div className="tier-duration">Per system • After 3 months</div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="hero-buttons">
          <button
            className="btn btn-warning"
            onClick={() => navigate("/trinity/plus#wizard")}
            style={{ animation: "pulse 2s infinite" }}
          >
            Get All 3 Trinity Core - €690 (Beta)
          </button>
          <button className="btn btn-secondary" onClick={() => handleScroll()}>
            Explore Individual Systems
          </button>
        </div>

        <Box
          sx={{
            position: "relative",
            display: "inline-block",
            mt: 5,
            px: 2,
            py: 1,
            borderRadius: "9999px",
            bgcolor: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: 3,
            animation: "pulse 2s infinite",
            "@keyframes pulse": {
              "0%, 100%": { opacity: 1 },
              "50%": { opacity: 0.6 },
            },
          }}
        >
          <Typography
            variant="caption" // smaller text
            sx={{ color: "text.primary", fontWeight: 400, fontSize: "0.7rem" }} // adjust as needed
          >
            🎉 Lock in the beta price by booking a consultation during launch
            week — 3 days before beta ends
          </Typography>
        </Box>
      </div>
    </section>
  );
}
