import { useNavigate } from "react-router-dom";
import Button from "./Button.js";
import GlassCard from "./GlassCard.js";

export default function CTA() {
  const navigate = useNavigate()
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <GlassCard className="p-4 md:p-16 text-center relative overflow-hidden">
          {/* Floating elements inside CTA */}
          <div className="absolute top-8 left-8 w-3 h-3 rounded-full bg-violet-400 animate-bounce opacity-60" />
          <div className="absolute top-12 right-12 w-2 h-2 rounded-full bg-cyan-400 animate-pulse opacity-60" />
          <div className="absolute bottom-8 left-16 w-4 h-4 rotate-45 bg-emerald-400 animate-bounce opacity-60" style={{ animationDelay: '1s' }} />
          
          <h2 className="text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Stop Choosing Between Retention and Growth.
          </h2>
          <p className="text-3xl text-slate-800 font-bold mb-4">Mathematics Gives You Both.</p>
          <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-3xl mx-auto">
            Every customer gets their perfect discount while building your business through referrals. 
            The first system where retention creates acquisition.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button onClick={()=> navigate('/trinity/step-wizard')} size="lg" className="text-xl px-12 py-6">
              Activate Complete System Now
            </Button>
            <Button variant="secondary" size="lg" className="text-xl px-12 py-6">
              See Interactive Demo
            </Button>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}