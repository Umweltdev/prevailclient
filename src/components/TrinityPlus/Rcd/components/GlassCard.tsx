
export default function GlassCard({
  children,
  className = "",
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`
        relative backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl shadow-xl 
        ${hover ? 'hover:bg-white/50 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]' : ''} 
        transition-all duration-700 group
        ${className}
      `}
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}