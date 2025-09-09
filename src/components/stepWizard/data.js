import {
  Globe,
  Rocket,
  Zap,
  TrendingUp,
} from "lucide-react";

export const betaDaysRemaining = 10;

export const gradientText = {
  background: "linear-gradient(to right, #6E3EF4, #3B82F6)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  display: "inline-block",
};

export const ALL_TRINITY_OPTIONS = [
  {
    id: "expense",
    type: "individual",
    name: "Expense Manager",
    icon: "💰",
    description:
      "AI-powered financial planning that ensures you never run out of cash",
    betaPrice: 200,
    standardPrice: 1500,
    features: [
      "Predictive cash flow",
      "7 allocation rules",
      "Emergency fund protection",
      "Automatic priority reshuffling",
    ],
  },
  {
    id: "mcd",
    type: "individual",
    name: "MCD System",
    icon: "📈",
    description:
      "Marketing Cost Displacement - automatically adjusts prices based on ad spend",
    betaPrice: 200,
    standardPrice: 1500,
    features: [
      "Real-time price optimization",
      "Marketing spend integration",
      "Automatic profit protection",
      "Platform cost tracking",
    ],
  },
  {
    id: "rcd",
    type: "individual",
    name: "RCD System",
    icon: "🎯",
    description:
      "Returning Customer Discounts - creates viral loyalty networks",
    betaPrice: 200,
    standardPrice: 1500,
    features: [
      "Automatic loyalty tracking",
      "Viral referral networks",
      "Personalized discount vectors",
      "Lifetime value optimization",
    ],
  },
  {
    id: "garo",
    type: "individual",
    name: "GARO System",
    icon: "🧬",
    description:
      "Genetic Algorithm Restocking Optimizer - evolves perfect inventory decisions",
    betaPrice: 200,
    standardPrice: 1500,
    features: [
      "500+ generation evolution",
      "Multi-objective fitness scoring",
      "70% stockout reduction",
      "Predictive demand modeling",
    ],
    note: "Physical stores: includes €1,600 for Square setup & training",
  },
  {
    id: "aed",
    type: "individual",
    name: "AED System",
    icon: "🚀",
    description:
      "Advertising Efficiency Dashboard - unifies and optimizes all ad platforms",
    betaPrice: 200,
    standardPrice: 1500,
    features: [
      "4+ platform integration",
      "Real-time budget reallocation",
      "Machine learning optimization",
      "30% cost reduction average",
    ],
  },
  {
    id: "trinity-core",
    type: "package",
    name: "Trinity Core Package",
    icon: "⚡",
    description: "Essential business intelligence: Expense Manager + MCD + RCD",
    betaPrice: 600,
    standardPrice: 4500,
    includes: ["💰 Expense Manager", "📈 MCD System", "🎯 RCD System"],
    savings: 3900,
    baseRecommended: true,
  },
  {
    id: "trinity-plus",
    type: "package",
    name: "Trinity Plus Package",
    icon: "🌟",
    description: "Complete suite: All 5 systems working in perfect harmony",
    betaPrice: 1000,
    standardPrice: 7500,
    includes: [
      "💰 Expense Manager",
      "📈 MCD System",
      "🎯 RCD System",
      "🧬 GARO System",
      "🚀 AED System",
    ],
    savings: 6500,
    bestValue: true,
    note: "GARO requires €1,600 for physical stores",
  },
];

export const solutionTypes = [
  {
    id: "website",
    name: "Website & Digital Platform",
    icon: Globe,
    description: "Custom web development & dashboards",
  },
  {
    id: "trinity",
    name: "Trinity Business Systems",
    icon: Zap,
    description: "AI-powered business intelligence",
  },
  {
    id: "both",
    name: "Complete Digital Transformation",
    icon: Rocket,
    description: "Website + Trinity systems",
  },
];

export const industries = [
  {
    id: "restaurant",
    name: "Restaurant & Food",
    icon: "🍽️",
    examples: "Restaurants, Takeaways, Cafes",
  },
  {
    id: "retail",
    name: "Retail & E-commerce",
    icon: "🛍️",
    examples: "Shops, Online Stores, Boutiques",
  },
  {
    id: "services",
    name: "Professional Services",
    icon: "💼",
    examples: "Consulting, Legal, Financial",
  },
  {
    id: "hospitality",
    name: "Hospitality & Events",
    icon: "🏨",
    examples: "Hotels, Venues, Tourism",
  },
  {
    id: "property",
    name: "Property & Real Estate",
    icon: "🏠",
    examples: "Agents, Management, Development",
  },
  {
    id: "other",
    name: "Other Industry",
    icon: "🚀",
    examples: "Tell us about your business",
  },
];
export const goals = [
  {
    id: "fees",
    name: "Eliminate Platform Fees",
    icon: "💰",
    description: "Stop paying 20-35% commission",
    savings: "Save €1,000-5,000/month",
  },
  {
    id: "brand",
    name: "Build Brand Identity",
    icon: "🎨",
    description: "Create unique digital presence",
    savings: "73% better brand recall",
  },
  {
    id: "automation",
    name: "Automate Operations",
    icon: "⚡",
    description: "Streamline workflows",
    savings: "15-20 hours/week saved",
  },
  {
    id: "scale",
    name: "Scale Your Business",
    icon: TrendingUp,
    description: "Systems that grow with you",
    savings: "Multi-location ready",
  },
  {
    id: "customers",
    name: "Own Customer Relationships",
    icon: "👥",
    description: "Direct customer connection",
    savings: "Build lasting loyalty",
  },
  {
    id: "insights",
    name: "Data-Driven Decisions",
    icon: "📊",
    description: "Analytics for growth",
    savings: "Real-time dashboards",
  },
];
export const platformTiers = [
  {
    id: "foundation",
    name: "Foundation",
    minPrice: 600,
    maxPrice: 1000,
    features: [
      "Professional Website",
      "Mobile Responsive",
      "Basic SEO",
      "Contact Forms",
      "Social Media Links",
    ],
  },
  {
    id: "full",
    name: "Full System",
    minPrice: 1200,
    maxPrice: 2000,
    features: [
      "Everything in Foundation",
      "Complete Ordering System",
      "Customer Database",
      "Email Automation",
      "Payment Processing",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    minPrice: 1800,
    maxPrice: 3000,
    features: [
      "Everything in Full System",
      "Advanced Analytics",
      "Multi-location Support",
      "API Access",
      "AI Predictions",
    ],
  },
];