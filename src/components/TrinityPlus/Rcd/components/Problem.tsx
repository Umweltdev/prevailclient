import GlassCard from "./GlassCard.js";

export default function Problem() {
  return (
    <section id="problem" className="py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black bg-gradient-to-r from-red-500 to-rose-600 bg-clip-text text-transparent mb-6">
            Two Problems. <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">One Mathematical Solution.</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Your loyalty program fails at retention AND acquisition
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {[
            {
              title: "❌ Broken Loyalty",
              items: [
                "Fixed tiers frustrate customers",
                "Points expire, feel cheated",
                "No way to share benefits",
              ],
              text: "Sarah spends $5,000 yearly. Mike spends $5,100. Mike gets \"Gold\" while Sarah stays \"Silver\" – for $100 difference.",
            },
            {
              title: "❌ Expensive Growth", 
              items: [
                "Facebook CAC up 89% YoY",
                "No referral incentive",
                "Paying for free customers",
              ],
              text: "You're paying $30+ per customer while happy customers would gladly refer friends – if there was something in it for both.",
            }
          ].map((problem, i) => (
            <GlassCard key={i} className="p-8 border-red-200/40">
              <h3 className="text-2xl font-bold text-red-600 mb-6">{problem.title}</h3>
              <p className="text-slate-700 mb-6 text-lg leading-relaxed">{problem.text}</p>
              <ul className="space-y-3">
                {problem.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-600">
                    <span className="text-red-500 text-xl">⚠️</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}