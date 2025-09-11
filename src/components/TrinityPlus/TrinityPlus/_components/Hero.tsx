import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

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
      <div className="relative">
        <div className="blob-container">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
          <div className="blob blob-4"></div>
          <div className="blob blob-5"></div>
          <div className="blob blob-6"></div>
        </div>
      </div>

      <div
        style={{
          marginTop: "40px",
        }}
        className="hero-content"
      >
        <div className="new-badge">
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
        <Typography
          variant="h5"
          align="center"
          sx={{
            mt: 4,
            mb: 2,
            fontWeight: 700,
            color: "text.primary",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            background: "linear-gradient(90deg, #ff6f61, #ffb88c)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          Trinity Plus Ecommerce
        </Typography>
        <div className="pricing-tiers">
          <div
            className="tier active"
            onClick={() => navigate("/trinity/plus#wizard")}
          >
            <div className="tier-price">€1,150</div>
            <div className="tier-label">Beta (10 days)</div>
          </div>
          <div
            className="tier"
            style={{ cursor: "not-allowed", pointerEvents: "none" }}
          >
            <div className="tier-price">€2,880</div>
            <div className="tier-label">Early (3 months)</div>
          </div>
          <div
            className="tier"
            style={{ cursor: "not-allowed", pointerEvents: "none" }}
          >
            <div className="tier-price">€8,645</div>
            <div className="tier-label">Standard</div>
          </div>
        </div>
        <Typography
          variant="h5"
          align="center"
          sx={{
            mt: 6,
            mb: 2,
            fontWeight: 700,
            color: "text.primary",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            background: "linear-gradient(90deg, #ff6f61, #ffb88c)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          Trinity Plus Ecommerce + Storefront
        </Typography>
        <div className="pricing-tiers">
          <div
            className="tier active"
            onClick={() => navigate("/trinity/plus#wizard")}
          >
            <div className="tier-price">€2,994</div>
            <div className="tier-label">Beta (10 days)</div>
          </div>
          <div
            className="tier"
            style={{ cursor: "not-allowed", pointerEvents: "none" }}
          >
            <div className="tier-price">€4,724</div>
            <div className="tier-label">Early (3 months)</div>
          </div>
          <div
            className="tier"
            style={{ cursor: "not-allowed", pointerEvents: "none" }}
          >
            <div className="tier-price">€10,489</div>
            <div className="tier-label">Standard</div>
          </div>
        </div>
        <Box
          sx={{
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
            flexWrap: "wrap",
            mt: 4,
          }}
        >
          <button
            className="btn btn-warning"
            onClick={() => navigate("/trinity/plus#wizard")}
            style={{
              animation: "pulse 2s infinite",
              padding: "12px 24px",
              fontSize: "1rem",
              fontWeight: 600,
              borderRadius: "8px",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              // "&:hover": {
              //   transform: "scale(1.05)",
              //   boxShadow: "0 6px 16px rgba(0, 0, 0, 0.3)",
              // },
            }}
          >
            Get Complete Trinity Plus Bundle
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleScroll()}
            style={{
              padding: "12px 24px",
              fontSize: "1rem",
              fontWeight: 600,
              borderRadius: "8px",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              // "&:hover": {
              //   transform: "scale(1.05)",
              //   boxShadow: "0 6px 16px rgba(0, 0, 0, 0.3)",
              // },
            }}
          >
            Explore Individual Systems
          </button>
        </Box>

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
            week — 3 days before beta ends
          </Typography>
        </Box>
      </div>
    </section>
  );
};

export default Hero;
