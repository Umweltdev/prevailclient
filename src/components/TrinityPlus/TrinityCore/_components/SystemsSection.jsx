import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Add thi

const systemsData = [
  {
    id: "expense",
    emoji: "💰",
    title: "Expense Manager",
    description:
      "AI-powered financial planning that ensures you never run out of cash when it matters most.",
    features: [
      "Predictive cash flow management",
      "7 intelligent allocation rules",
      "Emergency fund protection",
      "Automatic priority reshuffling",
    ],
    price: { beta: 232, early: 579, standard: 1739 },
    color: "#3b82f6",
    colorDark: "#2563eb",
    route: "expense-manager", // Add this property
  },
  {
    id: "mcd",
    emoji: "📈",
    title: "MCD System",
    description:
      "Marketing Cost Displacement that automatically adjusts prices to maintain profitability.",
    features: [
      "Real-time price optimization",
      "Marketing spend integration",
      "Automatic profit protection",
      "Platform cost tracking",
    ],
    price: { beta: 232, early: 579, standard: 1739 },
    color: "#8b5cf6",
    colorDark: "#7c3aed",
    route: "mcd", // Add this property
  },
  {
    id: "rcd",
    emoji: "🎯",
    title: "RCD System",
    description:
      "Returning Customer Discounts that create viral loyalty networks and reward repeat buyers.",
    features: [
      "Automatic loyalty tracking",
      "Viral referral networks",
      "Personalized discount vectors",
      "Lifetime value optimization",
    ],
    price: { beta: 232, early: 579, standard: 1739 },
    color: "#ec4899",
    colorDark: "#db2777",
    route: "rcd", // Add this property
  },
];

export default function SystemSection() {
  const navigate = useNavigate(); // Add this hook

  const [countdown, setCountdown] = useState({
    days: "10",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

const handleLearnMore = (systemId) => {
  const system = systemsData.find((sys) => sys.id === systemId);
  if (system) {
    navigate(`/trinity/${system.route}`);
  }
};
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

  // const handlePurchase = (type) => {
  //   alert(`Purchase triggered for ${type}`);
  // };

  // const handleTrinityPlus = () => {
  //   alert("Redirect to Trinity Plus page");
  // };

  const handleScroll = () => {
    const target = document.querySelector("#wizard");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="section section-alt section-space" id="systems">
      <div className="container">
        <div className="section-header">
          <h2>
            Three Systems. <span className="gradient-text">Total Control</span>
          </h2>
          <p>
            Each system solves a critical business challenge. Mix and match
            based on your needs.
          </p>
        </div>

        <div className="systems-grid">
          {systemsData.map((sys) => (
            <div
              key={sys.id}
              className="system-card"
              style={{
                "--card-color": sys.color,
                "--card-color-dark": sys.colorDark,
              }}
            >
              <div className="system-icon">{sys.emoji}</div>
              <h3>{sys.title}</h3>
              <p>{sys.description}</p>
              <ul className="feature-list">
                {sys.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="price-section">
                <div className="price-tier active">
                  <span>Beta (10 days):</span>
                  <span className="price">€{sys.price.beta}</span>
                </div>
                <div className="price-tier">
                  <span>Early (3 months):</span>
                  <span>€{sys.price.early}</span>
                </div>
                <div className="price-tier">
                  <span>Standard:</span>
                  <span>€{sys.price.standard}</span>
                </div>

                {/* Add Learn More button */}
                <Link
                  to={`/trinity/${
                    sys.id === "expense" ? "expense-manager" : sys.id
                  }`}
                  className="btn btn-secondary"
                  style={{
                    width: "100%",
                    marginTop: "0.75rem",
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                  onClick={() => handleLearnMore(sys.id)}
                >
                  Learn More
                </Link>

                <button
                  className="btn btn-primary"
                  style={{ width: "100%", marginTop: "0.75rem" }}
                  onClick={() => handleScroll()}
                >
                  Get {sys.title} - €{sys.price.beta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="upgrade-banner">
          <h3>🚀 Want Even More Power?</h3>
          <p>
            Upgrade to Trinity Plus and add the revolutionary GARO Genetic
            Algorithm Optimizer
          </p>
          <button
            style={{ marginTop: "1rem" }}
            className="btn btn-success"
            onClick={() => handleScroll()}
          >
            Explore Trinity Plus →
          </button>
        </div>
      </div>
    </section>
  );
}
