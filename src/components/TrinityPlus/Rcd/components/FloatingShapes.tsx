import GlassCard from "./GlassCard.js";

export function FloatingShapes() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-gradient-to-br from-violet-400/30 to-purple-500/20 blur-3xl animate-pulse" />
      <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-gradient-to-bl from-cyan-400/30 to-blue-500/20 blur-3xl animate-bounce" 
           style={{ animationDuration: '8s', animationDelay: '2s' }} />
      <div className="absolute left-1/3 -bottom-20 h-72 w-72 rounded-full bg-gradient-to-tr from-emerald-400/30 to-green-500/20 blur-3xl animate-pulse" 
           style={{ animationDelay: '4s' }} />
      
      {/* Floating geometric shapes */}
      <div className="absolute left-[10%] top-[20%] h-4 w-4 rotate-45 bg-gradient-to-br from-violet-500 to-purple-600 opacity-60 animate-bounce" 
           style={{ animationDuration: '6s', animationDelay: '1s' }} />
      <div className="absolute right-[15%] top-[30%] h-6 w-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 opacity-50 animate-pulse" 
           style={{ animationDuration: '4s' }} />
      <div className="absolute left-[70%] top-[60%] h-3 w-3 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 opacity-70 animate-bounce" 
           style={{ animationDuration: '5s', animationDelay: '3s' }} />
      <div className="absolute right-[25%] bottom-[25%] h-5 w-5 rotate-12 bg-gradient-to-br from-amber-500 to-orange-600 opacity-60 animate-pulse" 
           style={{ animationDuration: '7s', animationDelay: '2s' }} />
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(139,69,19,0.1)_1px,transparent_0)] bg-[length:40px_40px] opacity-30" />
    </div>
  );
}


export function FloatingBadge({ 
  children, 
  className = "",
  gradient = "from-violet-500 to-purple-600"
}: { 
  children: React.ReactNode; 
  className?: string;
  gradient?: string;
}) {
  return (
    <div
      className={`
        inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white
        bg-gradient-to-r ${gradient} rounded-2xl shadow-lg backdrop-blur-sm
        border border-white/20 hover:scale-105 transition-transform duration-300 text-nowrap
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export function AnimatedStat({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) {
  return (
    <div 
      className="text-center transform hover:scale-110 transition-transform duration-500"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-5xl font-black bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3 animate-pulse">
        {value}
      </div>
      <div className="text-slate-600 font-medium">{label}</div>
    </div>
  );
}

export function VectorMap() {
  return (
    <div className="relative h-20 overflow-hidden">
      <GlassCard className="h-full p-6">
        {/* Grid background */}
        <div className="absolute inset-6 bg-[linear-gradient(90deg,rgba(139,69,19,0.1)_1px,transparent_1px),linear-gradient(0deg,rgba(139,69,19,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
        
        {/* Axes */}
        <div className="absolute inset-y-6 left-1/2 w-0.5 bg-gradient-to-b from-violet-400 to-purple-500 opacity-60" />
        <div className="absolute left-6 right-6 top-1/2 h-0.5 bg-gradient-to-r from-violet-400 to-purple-500 opacity-60" />

        {/* Animated dots with glow effects */}
        <div className="absolute left-[35%] bottom-[30%] h-4 w-4 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg shadow-violet-500/50 animate-pulse" />
        <div className="absolute left-[70%] bottom-[60%] h-5 w-5 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/50 animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute left-[80%] bottom-[75%] h-6 w-6 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 shadow-lg shadow-emerald-500/50 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute left-[55%] bottom-[45%] h-4 w-4 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg shadow-amber-500/50 animate-bounce" style={{ animationDelay: '0.5s' }} />
        <div className="absolute left-[90%] bottom-[80%] h-5 w-5 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 shadow-lg shadow-pink-500/50 animate-pulse" style={{ animationDelay: '1.5s' }} />

        {/* Labels */}
        <span className="absolute bottom-8 right-8 text-sm text-slate-500 font-medium">Spending →</span>
        <span className="absolute left-8 top-8 text-sm text-slate-500 font-medium">Frequency ↑</span>
      </GlassCard>
    </div>
  );
}

export function StatsBar() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <GlassCard className="p-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <AnimatedStat value="2.92x" label="Viral Coefficient" delay={0} />
            <AnimatedStat value="$0" label="CAC After Month 3" delay={200} />
            <AnimatedStat value="23%" label="Retention Increase" delay={400} />
            <AnimatedStat value="847%" label="Combined ROI" delay={600} />
          </div>
        </GlassCard>
      </div>
    </section>
  );
}