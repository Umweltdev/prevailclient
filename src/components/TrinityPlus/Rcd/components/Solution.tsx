import GlassCard from "./GlassCard.js";

export default function Solution() {
  return (
    <section id="solution" className="py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          GPS Coordinates for Loyalty + Viral Sharing
        </h2>
        
        <div className="grid gap-8 lg:grid-cols-2">
          <GlassCard className="p-10 text-center">
            <div className="mb-6 text-6xl animate-bounce" style={{ animationDuration: '2s' }}>📍</div>
            <h3 className="mb-4 text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Vector Positioning
            </h3>
            <p className="mb-6 text-lg text-slate-600">Every customer on a 2D loyalty map</p>
            <ul className="space-y-3 text-slate-700 text-left max-w-sm mx-auto">
              <li className="flex items-center gap-2">
                <span className="text-violet-500">•</span>
                X-axis: Spending (2x weight)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-violet-500">•</span>
                Y-axis: Purchase frequency
              </li>
              <li className="flex items-center gap-2">
                <span className="text-violet-500">•</span>
                Distance: Loyalty strength
              </li>
              <li className="flex items-center gap-2">
                <span className="text-violet-500">•</span>
                Discount: 0-20% precisely
              </li>
            </ul>
          </GlassCard>

          <GlassCard className="p-10 text-center">
            <div className="mb-6 text-6xl animate-pulse">🚀</div>
            <h3 className="mb-4 text-3xl font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
              Viral Mechanics
            </h3>
            <p className="mb-6 text-lg text-slate-600">Share discounts, grow together</p>
            <ul className="space-y-3 text-slate-700 text-left max-w-sm mx-auto">
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">•</span>
                Friends inherit your discount
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">•</span>
                50/50 point sharing
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">•</span>
                Permanent partnerships
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">•</span>
                Infinite network depth
              </li>
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}