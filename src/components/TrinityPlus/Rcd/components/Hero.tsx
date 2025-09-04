import Button from "./Button.js";
import { FloatingBadge, VectorMap } from "./FloatingShapes.js";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center justify-center gap-16 lg:grid-cols-2">
          <div className="space-y-8 animate-fade-in col-span-2 flex flex-col items-center justify-center">
            <h1 className="text-4xl text-center lg:text-7xl font-black text-slate-800 leading-tight">
              Every Customer Gets Their{" "}
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Perfect Discount.
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent animate-pulse">
                And Their Friends Get It Too.
              </span>
            </h1>
            <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent">
                    Returning Customer Discounts API 
                </h2>
            </div>
            
            <p className="text-xl text-slate-600 text-center leading-relaxed max-w-2xl">
              A mathematical system that positions each customer on a "loyalty map" based on spending and frequency, 
              creating personalized 0-20% discounts customers can share with their entire network.
            </p>

            <div className="space-y-4">
              {[
                "Vector-based positioning for precise discounts",
                "50/50 point sharing between referrals", 
                "2.92x viral coefficient for exponential growth",
              ].map((t, i) => (
                <div key={t} className="flex items-center gap-4 animate-slide-in" style={{ animationDelay: `${i * 200}ms` }}>
                  <span className="text-2xl text-emerald-500">✓</span>
                  <span className="text-slate-800 font-medium text-lg">{t}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg">See Your Loyalty Map</Button>
              <Button variant="secondary" size="lg">Calculate ROI</Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4 w-full items-center justify-center">
              <FloatingBadge gradient="from-violet-500 to-purple-600">
                🎯 0-20% personalized
              </FloatingBadge>
              <FloatingBadge gradient="from-emerald-500 to-cyan-600">
                🔄 4.3 avg referrals
              </FloatingBadge>
              <FloatingBadge gradient="from-amber-500 to-orange-600">
                📈 287% viral growth
              </FloatingBadge>
            </div>
          </div>

          <div className="col-span-2">
            <div className="animate-float">
                <VectorMap />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}