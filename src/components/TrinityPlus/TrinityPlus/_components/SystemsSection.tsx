"use client";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SystemsSection = () => {
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const navigate = useNavigate();

  // Countdown Timer
  useEffect(() => {
    const betaEndDate = new Date();
    betaEndDate.setDate(betaEndDate.getDate() + 10);

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = betaEndDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        setCountdown({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      } else {
        setCountdown({
          days: String(days).padStart(2, "0"),
          hours: String(hours).padStart(2, "0"),
          minutes: String(minutes).padStart(2, "0"),
          seconds: String(seconds).padStart(2, "0"),
        });
      }
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();
    return () => clearInterval(timer);
  }, []);

  // Purchase Handler
  const purchase = (type) => {
    let message = "";

    switch (type) {
      case "garo-beta":
        message = "🧬 GARO System Beta Selected\n€2,089 • Lifetime Access";
        break;
      case "aed-beta":
        message = "🚀 AED System Beta Selected\n€232 • Lifetime Access";
        break;
      case "bundle-beta":
        message =
          "🎯 Complete E-commerce Bundle Beta Selected\n€1,159 • Lifetime Access";
        break;
      case "storefront-beta":
        message =
          "🏪 Storefront Bundle Beta Selected\n€3,019 • Lifetime Access";
        break;
      default:
        message = "Unknown option";
    }

    alert(message + "\n\n[Checkout process would begin here]");
  };

  const goToTrinityCore = () => {
    alert(
      "Trinity Core Systems:\n• Expense Manager\n• MCD System\n• RCD System\n\n[Would redirect to Trinity Core page]"
    );
  };

  const handleScroll = () => {
    const target = document.querySelector("#wizard");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="section section-alt" id="systems">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Advanced AI Systems</div>
          <h2>
            Two Revolutionary <span className="gradient-text">AI Systems</span>
          </h2>
          <p>
            Genetic evolution meets advertising automation. Each system uses
            cutting-edge AI to solve complex business challenges.
          </p>
        </div>

        {/* GARO System Pricing */}
        <div className="pricing-section-wrapper">
          <h3 className="system-title">
            GARO System Pricing (Store Front Option)
          </h3>
          <p className="system-subtitle">
            Genetic Algorithm Restocking Optimizer
          </p>
          <div className="pricing-cards">
            {/* Beta (Most Popular) */}
            <div className="pricing-card popular">
              <div className="popular-badge">Most Popular</div>
              <div className="card-header">
                <div className="tier-dot beta"></div>
                <h4>BETA USERS</h4>
              </div>
              <div className="price">€2,089</div>
              <div className="access-text">
                One-time payment • Lifetime access
              </div>
              <div className="offer-pill beta">
                ⚡ Ends in {countdown.days}d {countdown.hours}h{" "}
                {countdown.minutes}m {countdown.seconds}s
              </div>
              <ul className="features-list">
                <li>✓ GARO™ Inventory Optimization Platform</li>
                <li>✓ SquareUp POS & Payments Integration</li>
                <li>✓ Full Analytics Admin Dashboard</li>
                <li>✓ Complete Onboarding & Support</li>
                <li>✓ Comprehensive Training Program</li>
              </ul>

              {/* Add Learn More button */}
              <button
                className="btn btn-secondary"
                style={{ width: "100%", marginBottom: "0.75rem" }}
                onClick={() => navigate("/trinity/garo")}
              >
                Learn More
              </button>

              <button className="cta-button" onClick={() => handleScroll()}>
                Secure Your Spot
              </button>
            </div>

            {/* Early Adopters */}
            <div className="pricing-card">
              <div className="card-header">
                <div className="tier-dot early"></div>
                <h4>EARLY ADOPTERS</h4>
              </div>
              <div className="price">€2,439</div>
              <div className="access-text">
                One-time payment • Lifetime access
              </div>
              <div className="offer-pill early">🚀 Next 3 months</div>
              <ul className="features-list">
                <li>✓ GARO™ Inventory Optimization Platform</li>
                <li>✓ SquareUp POS & Payments Integration</li>
                <li>✓ Full Analytics Admin Dashboard</li>
                <li>✓ Complete Onboarding & Support</li>
                <li>✓ Comprehensive Training Program</li>
              </ul>

              {/* Add Learn More button */}
              <button
                className="btn btn-secondary"
                style={{ width: "100%", marginBottom: "0.75rem" }}
                onClick={() => navigate("/trinity/garo")}
              >
                Learn More
              </button>

              <button className="cta-button disabled" disabled>
                Coming Soon
              </button>
            </div>

            {/* Standard */}
            <div className="pricing-card">
              <div className="card-header">
                <div className="tier-dot post"></div>
                <h4>STANDARD</h4>
              </div>
              <div className="price">€3,599</div>
              <div className="access-text">
                One-time payment • Lifetime access
              </div>
              <div className="offer-pill post">📈 After 3 months</div>
              <ul className="features-list">
                <li>✓ GARO™ Inventory Optimization Platform</li>
                <li>✓ SquareUp POS & Payments Integration</li>
                <li>✓ Full Analytics Admin Dashboard</li>
                <li>✓ Complete Onboarding & Support</li>
                <li>✓ Comprehensive Training Program</li>
              </ul>

              {/* Add Learn More button */}
              <button
                className="btn btn-secondary"
                style={{ width: "100%", marginBottom: "0.75rem" }}
                onClick={() => navigate("/trinity/garo")}
              >
                Learn More
              </button>

              <button className="cta-button disabled" disabled>
                Coming Soon
              </button>
            </div>
          </div>
        </div>

        {/* GARO System Pricing Store front */}
        <div className="pricing-section-wrapper">
          <h3 className="system-title">
            GARO System Pricing (E-commerce Only)
          </h3>
          <p className="system-subtitle">
            Genetic Algorithm Restocking Optimizer
          </p>
          <div className="pricing-cards">
            {/* Beta (Most Popular) */}
            <div className="pricing-card popular">
              <div className="popular-badge">Most Popular</div>
              <div className="card-header">
                <div className="tier-dot beta"></div>
                <h4>BETA USERS</h4>
              </div>
              <div className="price">€696</div>
              <div className="access-text">
                One-time payment • Lifetime access
              </div>
              <div className="offer-pill beta">
                ⚡ Ends in {countdown.days}d {countdown.hours}h{" "}
                {countdown.minutes}m {countdown.seconds}s
              </div>
              <ul className="features-list">
                <li>✓ GARO™ Inventory Optimization Platform</li>
                <li>✓ SquareUp POS & Payments Integration</li>
                <li>✓ Full Analytics Admin Dashboard</li>
                <li>✓ Complete Onboarding & Support</li>
                <li>✓ Comprehensive Training Program</li>
              </ul>{" "}
              <button
                className="btn btn-secondary"
                style={{ width: "100%", marginBottom: "0.75rem" }}
                onClick={() => navigate("/trinity/garo")}
              >
                Learn More
              </button>
              <button className="cta-button" onClick={() => handleScroll()}>
                Secure Your Spot
              </button>
            </div>

            {/* Early Adopters */}
            <div className="pricing-card">
              <div className="card-header">
                <div className="tier-dot early"></div>
                <h4>EARLY ADOPTERS</h4>
              </div>
              <div className="price">€1,737</div>
              <div className="access-text">
                One-time payment • Lifetime access
              </div>
              <div className="offer-pill early">🚀 Next 3 months</div>
              <ul className="features-list">
                <li>✓ GARO™ Inventory Optimization Platform</li>
                <li>✓ SquareUp POS & Payments Integration</li>
                <li>✓ Full Analytics Admin Dashboard</li>
                <li>✓ Complete Onboarding & Support</li>
                <li>✓ Comprehensive Training Program</li>
              </ul>

              <button
                className="btn btn-secondary"
                style={{ width: "100%", marginBottom: "0.75rem" }}
                onClick={() => navigate("/trinity/garo")}
              >
                Learn More
              </button>
              <button className="cta-button disabled" disabled>
                Coming Soon
              </button>
            </div>

            {/* Standard */}
            <div className="pricing-card">
              <div className="card-header">
                <div className="tier-dot post"></div>
                <h4>STANDARD</h4>
              </div>
              <div className="price">€5,217</div>
              <div className="access-text">
                One-time payment • Lifetime access
              </div>
              <div className="offer-pill post">📈 After 3 months</div>
              <ul className="features-list">
                <li>✓ GARO™ Inventory Optimization Platform</li>
                <li>✓ SquareUp POS & Payments Integration</li>
                <li>✓ Full Analytics Admin Dashboard</li>
                <li>✓ Complete Onboarding & Support</li>
                <li>✓ Comprehensive Training Program</li>
              </ul>{" "}
              <button
                className="btn btn-secondary"
                style={{ width: "100%", marginBottom: "0.75rem" }}
                onClick={() => navigate("/trinity/garo")}
              >
                Learn More
              </button>
              <button className="cta-button disabled" disabled>
                Coming Soon
              </button>
            </div>
          </div>
        </div>

        <div className="pricing-section-wrapper">
          <h3 className="system-title">AED System Pricing</h3>
          <p className="system-subtitle">Advertising Efficiency Dashboard</p>
          <div className="pricing-cards">
            {/* Beta (Most Popular) */}
            <div className="pricing-card popular">
              <div className="popular-badge">Most Popular</div>
              <div className="card-header">
                <div className="tier-dot beta"></div>
                <h4>BETA USERS</h4>
              </div>
              <div className="price">€696</div>
              <div className="access-text">
                One-time payment • Lifetime access
              </div>
              <div className="offer-pill beta">
                ⚡ Ends in {countdown.days}d {countdown.hours}h{" "}
                {countdown.minutes}m {countdown.seconds}s
              </div>
              <ul className="features-list">
                <li>✓ AED™ Multi-Platform Integration</li>
                <li>✓ Real-time Budget Optimization</li>
                <li>✓ Unified Analytics Dashboard</li>
                <li>✓ Complete Onboarding & Support</li>
                <li>✓ Comprehensive Training Program</li>
              </ul>{" "}
              <button
                className="btn btn-secondary"
                style={{ width: "100%", marginBottom: "0.75rem" }}
                onClick={() => navigate("/trinity/aed")}
              >
                Learn More
              </button>
              <button className="cta-button" onClick={() => handleScroll()}>
                Secure Your Spot
              </button>
            </div>

            {/* Early Adopters */}
            <div className="pricing-card">
              <div className="card-header">
                <div className="tier-dot early"></div>
                <h4>EARLY ADOPTERS</h4>
              </div>
              <div className="price">€1,737</div>
              <div className="access-text">
                One-time payment • Lifetime access
              </div>
              <div className="offer-pill early">🚀 Next 3 months</div>
              <ul className="features-list">
                <li>✓ AED™ Multi-Platform Integration</li>
                <li>✓ Real-time Budget Optimization</li>
                <li>✓ Unified Analytics Dashboard</li>
                <li>✓ Complete Onboarding & Support</li>
                <li>✓ Comprehensive Training Program</li>
              </ul>{" "}
              <button
                className="btn btn-secondary"
                style={{ width: "100%", marginBottom: "0.75rem" }}
                onClick={() => navigate("/trinity/aed")}
              >
                Learn More
              </button>
              <button className="cta-button disabled" disabled>
                Coming Soon
              </button>
            </div>

            {/* Standard */}
            <div className="pricing-card">
              <div className="card-header">
                <div className="tier-dot post"></div>
                <h4>STANDARD</h4>
              </div>
              <div className="price">€5,217</div>
              <div className="access-text">
                One-time payment • Lifetime access
              </div>
              <div className="offer-pill post">📈 After 3 months</div>
              <ul className="features-list">
                <li>✓ AED™ Multi-Platform Integration</li>
                <li>✓ Real-time Budget Optimization</li>
                <li>✓ Unified Analytics Dashboard</li>
                <li>✓ Complete Onboarding & Support</li>
                <li>✓ Comprehensive Training Program</li>
              </ul>{" "}
              <button
                className="btn btn-secondary"
                style={{ width: "100%", marginBottom: "0.75rem" }}
                onClick={() => navigate("/trinity/aed")}
              >
                Learn More
              </button>
              <button className="cta-button disabled" disabled>
                Coming Soon
              </button>
            </div>
          </div>
        </div>

        <div className="pricing-section-wrapper">
          <h3 className="system-title">Expense Management System Pricing</h3>
          <p className="system-subtitle">Expense Manager Dashboard</p>
          <div className="pricing-cards">
            {/* Beta (Most Popular) */}
            <div className="pricing-card popular">
              <div className="popular-badge">Most Popular</div>
              <div className="card-header">
                <div className="tier-dot beta"></div>
                <h4>BETA USERS</h4>
              </div>
              <div className="price">€696</div>
              <div className="access-text">
                One-time payment • Lifetime access
              </div>
              <div className="offer-pill beta">
                ⚡ Ends in {countdown.days}d {countdown.hours}h{" "}
                {countdown.minutes}m {countdown.seconds}s
              </div>
              <ul className="features-list">
                <li>✓ Up to £10k monthly expenses</li>
                <li>✓ 30-day forecasting</li>
                <li>✓ Email support</li>
              </ul>
              <button
                className="btn btn-secondary"
                style={{ width: "100%", marginBottom: "0.75rem" }}
                onClick={() => navigate("/trinity/expense-manager")}
              >
                Learn More
              </button>
              <button className="cta-button" onClick={() => handleScroll()}>
                Secure Your Spot
              </button>
            </div>

            {/* Early Adopters */}
            <div className="pricing-card">
              <div className="card-header">
                <div className="tier-dot early"></div>
                <h4>STANDARD</h4>
              </div>
              <div className="price">€5,217</div>
              <div className="access-text">
                One-time payment • Lifetime access
              </div>
              <div className="offer-pill early">🚀 Next 3 months</div>
              <ul className="features-list">
                <li>✓ Up to £100k monthly expenses</li>
                <li>✓ 90-day forecasting</li>
                <li>✓ Priority support</li>
                <li>✓ API access</li>
              </ul>{" "}
              <button
                className="btn btn-secondary"
                style={{ width: "100%", marginBottom: "0.75rem" }}
                onClick={() => navigate("/trinity/expense-manager")}
              >
                Learn More
              </button>
              <button className="cta-button disabled" disabled>
                Coming Soon
              </button>
            </div>

            {/* Standard */}
            <div className="pricing-card">
              <div className="card-header">
                <div className="tier-dot post"></div>
                <h4>EARLY ADOPTERS</h4>
              </div>
              <div className="price">€1,737</div>
              <div className="access-text">
                One-time payment • Lifetime access
              </div>
              <div className="offer-pill post">📈 After 3 months</div>
              <ul className="features-list">
                <li>✓ Unlimited expenses</li>
                <li>✓ 365-day forecasting</li>
                <li>✓ Dedicated support</li>
                <li>✓ Custom integrations</li>
              </ul>{" "}
              <button
                className="btn btn-secondary"
                style={{ width: "100%", marginBottom: "0.75rem" }}
                onClick={() => navigate("/trinity/expense-manager")}
              >
                Learn More
              </button>
              <button className="cta-button disabled" disabled>
                Coming Soon
              </button>
            </div>
          </div>
        </div>

        <div className="pricing-section-wrapper">
          <h3 className="system-title">RCD System Pricing</h3>
          <p className="system-subtitle">
            Returning Customer Discounts Dashboard
          </p>
          <div className="pricing-cards">
            {/* Beta (Most Popular) */}
            <div className="pricing-card popular">
              <div className="popular-badge">Most Popular</div>
              <div className="card-header">
                <div className="tier-dot beta"></div>
                <h4>BETA USERS</h4>
              </div>
              <div className="price">€696</div>
              <div className="access-text">
                One-time payment • Lifetime access
              </div>
              <div className="offer-pill beta">
                ⚡ Ends in {countdown.days}d {countdown.hours}h{" "}
                {countdown.minutes}m {countdown.seconds}s
              </div>
              <ul className="features-list">
                <li>✓Up to 1,000 customers</li>
                <li>✓Basic vector positioning</li>
                <li>✓Simple referral system</li>
                <li>✓Email notifications</li>
              </ul>{" "}
              <button
                className="btn btn-secondary"
                style={{ width: "100%", marginBottom: "0.75rem" }}
                onClick={() => navigate("/trinity/rcd")}
              >
                Learn More
              </button>
              <button className="cta-button" onClick={() => handleScroll()}>
                Secure Your Spot
              </button>
            </div>

            {/* Early Adopters */}
            <div className="pricing-card">
              <div className="card-header">
                <div className="tier-dot early"></div>
                <h4>EARLY ADOPTERS</h4>
              </div>
              <div className="price">€1,737</div>
              <div className="access-text">
                One-time payment • Lifetime access
              </div>
              <div className="offer-pill early">🚀 Next 3 months</div>
              <ul className="features-list">
                <li>✓Unlimited customers</li>
                <li>✓Custom weights</li>
                <li>✓Custom sharing ratios</li>
                <li>✓Dedicated success manager</li>
                <li>✓White-label</li>
              </ul>{" "}
              <button
                className="btn btn-secondary"
                style={{ width: "100%", marginBottom: "0.75rem" }}
                onClick={() => navigate("/trinity/rcd")}
              >
                Learn More
              </button>
              <button className="cta-button disabled" disabled>
                Coming Soon
              </button>
            </div>

            {/* Standard */}
            <div className="pricing-card">
              <div className="card-header">
                <div className="tier-dot post"></div>
                <h4>STANDARD</h4>
              </div>
              <div className="price">€5,217</div>
              <div className="access-text">
                One-time payment • Lifetime access
              </div>
              <div className="offer-pill post">📈 After 3 months</div>
              <ul className="features-list">
                <li>✓Up to 10,000 customers</li>
                <li>✓Advanced algorithm</li>
                <li>✓Full 50/50 sharing</li>
                <li>✓Network visualization</li>
                <li>✓API access</li>
                <li>✓Priority support</li>
              </ul>{" "}
              <button
                className="btn btn-secondary"
                style={{ width: "100%", marginBottom: "0.75rem" }}
                onClick={() => navigate("/trinity/rcd")}
              >
                Learn More
              </button>
              <button className="cta-button disabled" disabled>
                Coming Soon
              </button>
            </div>
          </div>
        </div>

        {/* AED System Pricing */}
        <div className="pricing-section-wrapper">
          <h3 className="system-title">MCD System Pricing</h3>
          <p className="system-subtitle">Market Cost Displacement API</p>
          <div className="pricing-cards">
            {/* Beta (Most Popular) */}
            <div className="pricing-card popular">
              <div className="popular-badge">Most Popular</div>
              <div className="card-header">
                <div className="tier-dot beta"></div>
                <h4>BETA USERS</h4>
              </div>
              <div className="price">€696</div>
              <div className="access-text">
                One-time payment • Lifetime access
              </div>
              <div className="offer-pill beta">
                ⚡ Ends in {countdown.days}d {countdown.hours}h{" "}
                {countdown.minutes}m {countdown.seconds}s
              </div>
              <ul className="features-list">
                <li>✓ Up to $10K monthly revenue</li>
                <li>✓ 3 marketing channels</li>
                <li>✓ Daily price updates</li>
                <li>✓ Email support</li>
                <li>✓ Basic analytics</li>
              </ul>{" "}
              <button
                className="btn btn-secondary"
                style={{ width: "100%", marginBottom: "0.75rem" }}
                onClick={() => navigate("/trinity/mcd")}
              >
                Learn More
              </button>
              <button className="cta-button" onClick={() => handleScroll()}>
                Secure Your Spot
              </button>
            </div>

            {/* Early Adopters */}
            <div className="pricing-card">
              <div className="card-header">
                <div className="tier-dot early"></div>
                <h4>EARLY ADOPTERS</h4>
              </div>
              <div className="price">€1,737</div>
              <div className="access-text">
                One-time payment • Lifetime access
              </div>
              <div className="offer-pill early">🚀 Next 3 months</div>
              <ul className="features-list">
                <li>✓ Unlimited revenue</li>
                <li>✓ Custom integration</li>
                <li>✓ Dedicated success manager</li>
                <li>✓ SLA guarantee</li>
                <li>✓ API access</li>
              </ul>{" "}
              <button
                className="btn btn-secondary"
                style={{ width: "100%", marginBottom: "0.75rem" }}
                onClick={() => navigate("/trinity/mcd")}
              >
                Learn More
              </button>
              <button className="cta-button disabled" disabled>
                Coming Soon
              </button>
            </div>

            {/* Standard */}
            <div className="pricing-card">
              <div className="card-header">
                <div className="tier-dot post"></div>
                <h4>STANDARD</h4>
              </div>
              <div className="price">€5,217</div>
              <div className="access-text">
                One-time payment • Lifetime access
              </div>
              <div className="offer-pill post">📈 After 3 months</div>
              <ul className="features-list">
                <li>✓Up to $100K monthly revenue</li>
                <li>✓Unlimited channels</li>
                <li>✓Hourly updates</li>
                <li>✓Priority support</li>
                <li>✓Custom rules</li>
                <li>✓Advanced analytics</li>
              </ul>{" "}
              <button
                className="btn btn-secondary"
                style={{ width: "100%", marginBottom: "0.75rem" }}
                onClick={() => navigate("/trinity/mcd")}
              >
                Learn More
              </button>
              <button className="cta-button disabled" disabled>
                Coming Soon
              </button>
            </div>
          </div>
        </div>

        {/* Trinity Plus Bundle */}
        <div className="bundle-highlight" id="bundle">
          <h3 className="system-title">Complete Trinity Plus Bundle</h3>
          <p className="system-subtitle">
            Get all systems from Trinity AND Trinity Plus for maximum business
            evolution
          </p>
          <div className="bundle-systems-grid">
            <div className="bundle-system-item">💰 Expense Manager</div>
            <div className="bundle-system-item">📈 MCD System</div>
            <div className="bundle-system-item">🎯 RCD System</div>
            <div className="bundle-system-item">🧬 GARO System</div>
            <div className="bundle-system-item">🚀 AED System</div>
          </div>

          {/* E-commerce Bundle */}
          <div className="pricing-section-wrapper">
            <h3 className="system-title">E-commerce Bundle</h3>
            <p className="system-subtitle">
              Complete digital business solution for online stores
            </p>
            <div className="pricing-cards">
              <div className="pricing-card popular">
                <div className="popular-badge">Most Popular</div>
                <div className="card-header">
                  <div className="tier-dot beta"></div>
                  <h4>BETA USERS</h4>
                </div>
                <div className="price">€1,159</div>
                <div className="access-text">
                  One-time payment • Lifetime access
                </div>
                <div className="offer-pill beta">
                  ⚡ Ends in {countdown.days}d {countdown.hours}h{" "}
                  {countdown.minutes}m {countdown.seconds}s
                </div>
                <ul className="features-list">
                  <li>✓ All 5 Trinity Plus Systems</li>
                  <li>✓ Complete Integration Setup</li>
                  <li>✓ Full Analytics Dashboard</li>
                  <li>✓ Priority Support & Training</li>
                  <li>✓ Exclusive Beta Features</li>
                </ul>{" "}
                <button
                  className="btn btn-secondary"
                  style={{ width: "100%", marginBottom: "0.75rem" }}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Learn More
                </button>
                <button className="cta-button" onClick={() => handleScroll()}>
                  Secure Your Spot
                </button>
              </div>

              <div className="pricing-card">
                <div className="card-header">
                  <div className="tier-dot early"></div>
                  <h4>EARLY ADOPTERS</h4>
                </div>
                <div className="price">€2,899</div>
                <div className="access-text">
                  One-time payment • Lifetime access
                </div>
                <div className="offer-pill early">🚀 Next 3 months</div>
                <ul className="features-list">
                  <li>✓ All 5 Trinity Plus Systems</li>
                  <li>✓ Complete Integration Setup</li>
                  <li>✓ Full Analytics Dashboard</li>
                  <li>✓ Priority Support & Training</li>
                  <li>✓ Early Access Features</li>
                </ul>{" "}
                <button
                  className="btn btn-secondary"
                  style={{ width: "100%", marginBottom: "0.75rem" }}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Learn More
                </button>
                <button className="cta-button disabled" disabled>
                  Coming Soon
                </button>
              </div>

              <div className="pricing-card">
                <div className="card-header">
                  <div className="tier-dot post"></div>
                  <h4>STANDARD</h4>
                </div>
                <div className="price">€8,699</div>
                <div className="access-text">
                  One-time payment • Lifetime access
                </div>
                <div className="offer-pill post">📈 After 3 months</div>
                <ul className="features-list">
                  <li>✓ All 5 Trinity Plus Systems</li>
                  <li>✓ Complete Integration Setup</li>
                  <li>✓ Full Analytics Dashboard</li>
                  <li>✓ Standard Support & Training</li>
                  <li>✓ Full Feature Access</li>
                </ul>{" "}
                <button
                  className="btn btn-secondary"
                  style={{ width: "100%", marginBottom: "0.75rem" }}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Learn More
                </button>
                <button className="cta-button disabled" disabled>
                  Coming Soon
                </button>
              </div>
            </div>
          </div>

          {/* Storefront Bundle */}
          <div className="pricing-section-wrapper">
            <h3 className="system-title">Storefront Bundle (with Square)</h3>
            <p className="system-subtitle">
              Complete solution for physical storefronts with Square POS
              integration
            </p>
            <div className="pricing-cards">
              <div className="pricing-card popular">
                <div className="popular-badge">Most Popular</div>
                <div className="card-header">
                  <div className="tier-dot beta"></div>
                  <h4>BETA USERS</h4>
                </div>
                <div className="price">€3,019</div>
                <div className="access-text">
                  One-time payment • Lifetime access
                </div>
                <div className="offer-pill beta">
                  ⚡ Ends in {countdown.days}d {countdown.hours}h{" "}
                  {countdown.minutes}m {countdown.seconds}s
                </div>
                <ul className="features-list">
                  <li>✓ All 5 Trinity Plus Systems</li>
                  <li>✓ Square POS Integration</li>
                  <li>✓ Complete Setup & Training</li>
                  <li>✓ 3 Months Post-Launch Support</li>
                  <li>✓ Exclusive Beta Features</li>
                </ul>{" "}
                <button
                  className="btn btn-secondary"
                  style={{ width: "100%", marginBottom: "0.75rem" }}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Learn More
                </button>
                <button className="cta-button" onClick={() => handleScroll()}>
                  Secure Your Spot
                </button>
              </div>

              <div className="pricing-card">
                <div className="card-header">
                  <div className="tier-dot early"></div>
                  <h4>EARLY ADOPTERS</h4>
                </div>
                <div className="price">€4,759</div>
                <div className="access-text">
                  One-time payment • Lifetime access
                </div>
                <div className="offer-pill early">🚀 Next 3 months</div>
                <ul className="features-list">
                  <li>✓ All 5 Trinity Plus Systems</li>
                  <li>✓ Square POS Integration</li>
                  <li>✓ Complete Setup & Training</li>
                  <li>✓ 3 Months Post-Launch Support</li>
                  <li>✓ Early Access Features</li>
                </ul>{" "}
                <button
                  className="btn btn-secondary"
                  style={{ width: "100%", marginBottom: "0.75rem" }}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Learn More
                </button>
                <button className="cta-button disabled" disabled>
                  Coming Soon
                </button>
              </div>

              <div className="pricing-card">
                <div className="card-header">
                  <div className="tier-dot post"></div>
                  <h4>STANDARD</h4>
                </div>
                <div className="price">€10,559</div>
                <div className="access-text">
                  One-time payment • Lifetime access
                </div>
                <div className="offer-pill post">📈 After 3 months</div>
                <ul className="features-list">
                  <li>✓ All 5 Trinity Plus Systems</li>
                  <li>✓ Square POS Integration</li>
                  <li>✓ Complete Setup & Training</li>
                  <li>✓ Standard Support Package</li>
                  <li>✓ Full Feature Access</li>
                </ul>{" "}
                <button
                  className="btn btn-secondary"
                  style={{ width: "100%", marginBottom: "0.75rem" }}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Learn More
                </button>
                <button className="cta-button disabled" disabled>
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
          <div className="bundle-savings">
            Save up to €7,499 with Beta pricing!
          </div>
        </div>

        {/* Trinity Core Link */}
        {/* <div className="trinity-core-banner">
          <h3 style={{ marginBottom: "1rem" }}>Looking for Core Systems?</h3>
          <p style={{ marginBottom: "1.5rem" }}>
            Trinity Core includes Expense Manager, MCD, and RCD systems.
            <br />
            Start with the essentials and upgrade to Plus anytime.
          </p>
          <a href="#" className="btn btn-primary" onClick={goToTrinityCore}>
            Explore Trinity Core Systems →
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default SystemsSection;
