import { useMemo } from "react";
import GlassCard from "./GlassCard.js";

export default 
function HowItWorks() {
  const steps = useMemo(
    () => [
      {
        num: "1",
        icon: "📍",
        title: "Track & Position",
        desc: "Every purchase updates vector position. Spending moves East (2x), frequency North.",
      },
      {
        num: "2",
        icon: "🎯", 
        title: "Personalize Precisely",
        desc: "Distance determines exact discount: 3.7%, 8.2%, 15.9%. No arbitrary tiers.",
      },
      {
        num: "3",
        icon: "🔄",
        title: "Share Your Status",
        desc: "Customers share unique code. Friends START at their discount level.",
      },
      {
        num: "4",
        icon: "📈",
        title: "Compound Together", 
        desc: "Friend purchases? Both vectors strengthen. 50% to them, 50% to referrer.",
      },
      {
        num: "5",
        icon: "⏰",
        title: "365-Day Window",
        desc: "Rolling window keeps it current. Stay engaged or drift back.",
      },
    ],
    []
  );

  return (
    <section id="how" className="py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Vector Positioning Meets Viral Growth
        </h2>
        
        <div className="space-y-8">
          {steps.map((step, i) => (
            <div 
              key={step.num} 
              className="flex flex-col md:flex-row items-center gap-8 animate-slide-in"
              style={{ animationDelay: `${i * 200}ms` }}
            >
              <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-2xl font-black text-white shadow-xl hover:scale-110 transition-transform duration-300">
                {step.num}
              </div>
              <GlassCard className="flex-1 p-8">
                <div className="flex items-center gap-6">
                  <span className="text-4xl">{step.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}