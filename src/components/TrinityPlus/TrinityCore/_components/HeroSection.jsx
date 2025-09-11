"use client";

import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export default function HeroSection() {
  const navigate = useNavigate();

  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [pricingMessage, setPricingMessage] = useState(null);
  const [countdownActive, setCountdownActive] = useState(false);

  const countdownStart = useMemo(() => {
    return new Date(Date.UTC(2025, 8, 11, 11, 0, 0));
  }, []);

  const countdownEnd = useMemo(() => {
    const end = new Date(countdownStart);
    end.setUTCDate(end.getUTCDate() + 10);
    return end;
  }, [countdownStart]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      if (now < countdownStart) {
        setCountdownActive(false);
        return;
      }

      setCountdownActive(true);

      const distance = countdownEnd.getTime() - now.getTime();

      if (distance <= 0) {
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
  }, [countdownStart, countdownEnd]);

  const handleScroll = () => {
    const target = document.querySelector("#wizard");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      style={{ background: "transparent", border: "none", boxShadow: "none" }}
      className="hero section-alt"
    >
      <div className="hero-content container">
        <div className="pricing-alert">
          {pricingMessage ? (
            <div style={{ color: "#f59e0b", fontWeight: 600 }}>
              {pricingMessage}
            </div>
          ) : !countdownActive ? (
            <div style={{ color: "#3b82f6", fontWeight: 600 }}>
              ⏳ Countdown begins Sept 11, 2025 @ 12:00 PM (Ireland time)
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

        <div className="pricing-tiers" id="pricing">
          <h3 style={{ marginBottom: "1rem" }}>Time-Limited Pricing</h3>
          <div className="tier-grid">
            <div
              className={`tier-card ${
                countdownActive && !pricingMessage
                  ? "active cursor-pointer"
                  : ""
              }`}
              onClick={() =>
                countdownActive && !pricingMessage
                  ? navigate("/trinity/plus#wizard")
                  : undefined
              }
              style={{
                cursor:
                  countdownActive && !pricingMessage
                    ? "pointer"
                    : "not-allowed",
                pointerEvents:
                  countdownActive && !pricingMessage ? "auto" : "none",
              }}
            >
              <div className="tier-badge">
                {countdownActive && !pricingMessage
                  ? "ACTIVE NOW"
                  : "COMING SOON"}
              </div>
              <div className="tier-name">Beta Access</div>
              <div className="tier-price"> €690</div>
              <div className="tier-duration">
                Per system •{" "}
                {countdownActive ? "10 days left" : "Starts Sept 11"}
              </div>
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

        <div className="hero-buttons">
          <button
            className="btn btn-warning"
            onClick={() => navigate("/trinity/plus#wizard")}
            style={{
              animation: "pulse 2s infinite",
              cursor:
                countdownActive && !pricingMessage ? "pointer" : "not-allowed",
              pointerEvents:
                countdownActive && !pricingMessage ? "auto" : "none",
            }}
          >
            Get All 3 Trinity Core - €690 (Beta)
          </button>
          <button className="btn btn-secondary" onClick={handleScroll}>
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
            variant="caption"
            sx={{ color: "text.primary", fontWeight: 400, fontSize: "0.7rem" }}
          >
            🎉 Lock in the beta price by booking a consultation during launch
            week 3 days before beta ends
          </Typography>
        </Box>
      </div>
    </section>
  );
}
