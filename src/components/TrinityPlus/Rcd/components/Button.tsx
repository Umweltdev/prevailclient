
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  as?: "button" | "a";
  href?: string;
  className?: string;
};

export default function Button({
  variant = "primary",
  size = "md",
  as = "button",
  href,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-violet-200/50 relative overflow-hidden group rounded-2xl backdrop-blur-md border transform hover:scale-105 active:scale-95";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg"
  };
  
  const variantStyles = {
    primary: "bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white border-violet-300/30 shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/40",
    secondary: "bg-white/40 backdrop-blur-xl text-slate-800 border-white/30 shadow-lg hover:bg-white/60 hover:shadow-xl",
    ghost: "bg-white/20 backdrop-blur-md text-slate-700 border-white/20 hover:bg-white/30"
  };

  const cls = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`.trim();

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
    </>
  );

  if (as === "a" && href) {
    return (
      <a href={href} className={cls} {...(rest as any)}>
        {content}
      </a>
    );
  }
  return (
    <button className={cls} {...rest}>
      {content}
    </button>
  );
}