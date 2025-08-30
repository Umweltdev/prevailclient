import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, Target, Shield, TrendingUp, DollarSign } from 'lucide-react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  border: string;
  iconColor: string;
  delay: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ 
  icon, 
  title, 
  description, 
  gradient, 
  border, 
  iconColor,
  delay 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`
        ${gradient} backdrop-blur-sm rounded-2xl p-8 ${border}
        transform transition-all duration-700 ease-out cursor-pointer
        hover:scale-105 hover:-translate-y-2 hover:shadow-2xl
        ${isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-8 opacity-0'
        }
        ${isHovered ? 'shadow-lg' : ''}
        group relative overflow-hidden
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
        <div className={`absolute inset-0 ${gradient} blur-xl`}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className={`
          ${iconColor} mb-6 transform transition-all duration-500
          group-hover:scale-110 group-hover:rotate-12
          ${isVisible ? 'animate-pulse' : ''}
        `}>
          {icon}
        </div>
        
        <h3 className={`
          text-xl font-bold mb-3 transition-all duration-300
          ${isHovered ? 'text-slate-600' : 'text-slate-900'}
        `}>
          {title}
        </h3>
        
        <p className={`
          leading-relaxed transition-all duration-300
          ${isHovered ? 'text-gray-900' : 'text-gray-600'}
        `}>
          {description}
        </p>
      </div>
      
      {/* Hover effect border */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>
    </div>
  );
};

const Benefit: React.FC = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: <CheckCircle size={40} />,
      title: "Never Miss Payroll",
      description: "Trinity ensures employee payments are always protected and prioritized.",
      gradient: "bg-gradient-to-br from-emerald-500/20 to-green-600/20",
      border: "border border-emerald-400/30",
      iconColor: "text-emerald-400",
      delay: 100
    },
    {
      icon: <Target size={40} />,
      title: "30-Day Visibility",
      description: "See exactly what you can spend today while guaranteeing future obligations.",
      gradient: "bg-gradient-to-br from-blue-500/20 to-cyan-600/20",
      border: "border border-blue-400/30",
      iconColor: "text-blue-400",
      delay: 200
    },
    {
      icon: <Shield size={40} />,
      title: "Emergency Protected",
      description: "Always maintains minimum operational cash for unexpected needs.",
      gradient: "bg-gradient-to-br from-purple-500/20 to-violet-600/20",
      border: "border border-purple-400/30",
      iconColor: "text-purple-400",
      delay: 300
    },
    {
      icon: <TrendingUp size={40} />,
      title: "Reduce Debt Costs",
      description: "Avoid expensive emergency loans by planning weeks in advance.",
      gradient: "bg-gradient-to-br from-orange-500/20 to-amber-600/20",
      border: "border border-orange-400/30",
      iconColor: "text-orange-400",
      delay: 400
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden border-t">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl backdrop-blur-sm border border-purple-400/30 relative">
            <DollarSign className="w-8 h-8 text-purple-400 animate-pulse" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
            </div>
        </div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Animated title section */}
        <div 
          ref={titleRef}
          className={`
            text-center mb-16 transform transition-all duration-1000 ease-out
            ${titleVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-12 opacity-0'
            }
          `}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            Transform Your
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
              Cash Flow
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefit;