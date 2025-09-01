"use client";
import { useEffect, useState } from "react";

export default function CtaSection() {
  const [countdown, setCountdown] = useState({
    days: "10",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const betaEndDate = new Date();
    betaEndDate.setDate(betaEndDate.getDate() + 10);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = betaEndDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const purchase = (type) => {
    console.log(`Purchased: ${type}`);
  };

  const showIndividualOptions = () => {
    console.log("Showing individual system options");
  };

  return (
    <section className="cta-section section-space">
      <div className="container">
        <div className="cta-header">
          <h2>
            Three Systems. <span className="gradient-text">Act Fast.</span>
          </h2>
          <p>Prices Triple Soon</p>
        </div>

        <p
          style={{
            fontSize: "1.25rem",
            color: "#94a3b8",
            maxWidth: "700px",
            margin: "2rem auto",
          }}
        >
          Beta pricing ends in 10 days ({countdown.days}d {countdown.hours}h{" "}
          {countdown.minutes}m {countdown.seconds}s). Early adopter pricing ends
          in 3 months. After that, each system costs €1,739. Lock in your
          savings now.
        </p>

        <div className="cta-buttons">
          <button
            className="btn btn-warning"
            style={{ fontSize: "1.125rem", padding: "1rem 2.5rem" }}
            onClick={() => purchase("bundle")}
          >
            Get All Trinity Core - €696
          </button>
          <button
            className="btn btn-primary"
            style={{ fontSize: "1.125rem", padding: "1rem 2.5rem" }}
            onClick={showIndividualOptions}
          >
            Choose Individual Systems
          </button>
        </div>

        <p style={{ color: "#64748b", marginTop: "2rem" }}>
          ⚡ One-time payment • Full source code • Lifetime ownership • No
          subscriptions
        </p>
      </div>
    </section>
  );
}
