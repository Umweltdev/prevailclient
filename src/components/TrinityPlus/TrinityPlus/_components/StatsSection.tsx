import React from "react";

const stats = [
  { icon: "🚀", value: "35%", label: "Higher ROI with GARO" },
  { icon: "📈", value: "70%", label: "Fewer Stockouts" },
  { icon: "💰", value: "30%", label: "Ad Cost Reduction" },
  { icon: "⚡", value: "4x", label: "Faster Decisions" },
];

const StatsSection = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2>
            Proven <span className="gradient-text">Performance</span>
          </h2>
        </div>

        {/* Animated Blobs */}
        <div className="blob-container">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
          <div className="blob blob-4"></div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((item, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-icon">{item.icon}</div>
              <div className="stat-value">{item.value}</div>
              <div className="stat-label">{item.label}</div>
              <div className="stat-sparkle">✨</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
