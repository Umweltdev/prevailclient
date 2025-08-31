import Button from "./Button.js";
import { FloatingBadge } from "./FloatingShapes.js";
import GlassCard from "./GlassCard.js";

function PricingCard({
  name,
  price,
  desc,
  features,
  featured,
}: {
  name: string;
  price: string;
  desc: string;
  features: string[];
  featured?: boolean;
}) {
  return (
    <GlassCard 
      className={`relative p-10 text-center ${
        featured ? 'ring-2 ring-violet-400/50 scale-110 shadow-2xl shadow-violet-500/25' : ''
      }`}
    >
      {featured && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2">
          <FloatingBadge className="animate-pulse">
            ✨ MOST POPULAR ✨
          </FloatingBadge>
        </div>
      )}
      <h3 className="mb-2 text-2xl font-bold text-slate-800">{name}</h3>
      <p className="mb-6 text-slate-600">{desc}</p>
      <div className="mb-8">
        <span className="text-6xl font-black bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
          {price}
        </span>
        {price !== "Custom" && <span className="text-slate-500 text-lg">/mo</span>}
      </div>
      <ul className="mb-10 space-y-4 text-left">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3 text-slate-700">
            <span className="text-emerald-500 text-xl">✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Button variant={featured ? "primary" : "secondary"} size="lg" className="w-full">
        Start Free Trial
      </Button>
    </GlassCard>
  );
}

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$299",
      desc: "Test the Waters",
      features: [
        "Up to 1,000 customers",
        "Basic vector positioning",
        "Simple referral system",
        "Email notifications",
      ],
      featured: false,
    },
    {
      name: "Growth",
      price: "$799",
      desc: "Full Power",
      features: [
        "Up to 10,000 customers",
        "Advanced algorithm",
        "Full 50/50 sharing",
        "Network visualization",
        "API access",
        "Priority support",
      ],
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "Unlimited Scale",
      features: [
        "Unlimited customers",
        "Custom weights",
        "Custom sharing ratios",
        "Dedicated success manager",
        "White-label",
      ],
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Investment That Pays Through Growth
        </h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((p, i) => (
            <div 
              key={p.name}
              className="animate-slide-in"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <PricingCard {...p} />
            </div>
          ))}
        </div>

        <div className="mt-16">
          <GlassCard className="mx-auto max-w-4xl p-12 text-center border-emerald-200/40">
            <div className="mb-4">
              <span className="text-4xl">🎯</span>
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent mb-4">
              Dual Guarantee
            </h3>
            <p className="text-xl text-slate-700 leading-relaxed">
              110% Retention ROI + 3x Growth in 12 months or full refund
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}