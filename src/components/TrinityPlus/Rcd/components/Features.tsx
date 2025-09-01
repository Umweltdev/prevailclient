import GlassCard from "./GlassCard.js";

function FeatureCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <GlassCard className="p-8 text-center">
      <div className="mb-6 text-5xl animate-bounce" style={{ animationDuration: '3s' }}>{icon}</div>
      <h3 className="mb-4 text-xl font-bold text-slate-800">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </GlassCard>
  );
}

export default 

function Features() {
  const feats = [
    {
      icon: "📊",
      title: "Dual-Axis Tracking",
      desc: "Spending and frequency separately. $1,000 once ≠ $1,000 over 50 visits.",
    },
    { 
      icon: "🎯", 
      title: "Precise Positioning", 
      desc: "No tiers to miss. Every purchase moves you forward, even 0.1%." 
    },
    { 
      icon: "📈", 
      title: "Exponential Curve", 
      desc: "Discounts grow slowly, then accelerate for true loyalty." 
    },
    { 
      icon: "🔄", 
      title: "Instant Inheritance", 
      desc: "New customers start at referrer's discount. No earning period." 
    },
    { 
      icon: "🤝", 
      title: "50/50 Partnership", 
      desc: "Every purchase benefits both buyer and referrer permanently." 
    },
    { 
      icon: "🌳", 
      title: "Infinite Depth", 
      desc: "No limits. Benefit from referrals' referrals' referrals." 
    },
  ];

  return (
    <section id="features" className="py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Every Feature for Growth and Retention
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {feats.map((f, i) => (
            <div 
              key={f.title} 
              className="animate-slide-in" 
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <FeatureCard {...f} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}