'use client'
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Shield, Zap, RefreshCw, Layers, PiggyBank, Activity, 
  ArrowRight, CheckCircle, Sparkles
} from 'lucide-react';

const HowItWorks: React.FC = () => {
  const [activeRule, setActiveRule] = useState(1);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [titleVisible, setTitleVisible] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const rules = useMemo(
  () => [
    {
      id: 1,
      title: "Save Up For It",
      icon: PiggyBank,
      description: "Like a digital piggy bank, Trinity automatically reserves daily income for upcoming expenses.",
      example: "£2,000 rent due in 20 days? Trinity blocks £100/day for 20 days. Simple.",
      color: "emerald",
      gradient: "from-emerald-500/20 to-green-600/20",
      iconBg: "from-emerald-500 to-green-600"
    },
    {
      id: 2,
      title: "Find Another Way", 
      icon: RefreshCw,
      description: "Can't save in time? Trinity offers smart alternatives with clear trade-offs.",
      example: "Need £3,000 in 5 days but can only save £500? Choose: savings withdrawal, loan, or reschedule.",
      color: "blue",
      gradient: "from-blue-500/20 to-cyan-600/20",
      iconBg: "from-blue-500 to-cyan-600"
    },
    {
      id: 4,
      title: "Adapt to Change",
      icon: Zap,
      description: "Priorities shift? Trinity instantly recalculates everything like a financial Tetris master.",
      example: "Emergency AC repair? Trinity reshuffles all expenses to accommodate it immediately.",
      color: "yellow",
      gradient: "from-yellow-500/20 to-orange-600/20", 
      iconBg: "from-yellow-500 to-orange-600"
    },
    {
      id: 5,
      title: "The Subscription Model",
      icon: Layers,
      description: "For distant expenses, take small daily 'subscriptions' instead of blocking huge chunks.",
      example: "£3,000 needed in 90 days? Allocate 15% daily for all 90 days instead of blocking 30 full days.",
      color: "purple",
      gradient: "from-purple-500/20 to-violet-600/20",
      iconBg: "from-purple-500 to-violet-600"
    },
    {
      id: 6,
      title: "Keep the Lights On",
      icon: Shield,
      description: "Run multiple subscriptions while always maintaining emergency cash reserves.",
      example: "Trinity ensures you never drop below survival money, canceling lowest-priority subscriptions if needed.",
      color: "indigo",
      gradient: "from-indigo-500/20 to-blue-600/20",
      iconBg: "from-indigo-500 to-blue-600"
    },
    {
      id: 7,
      title: "Everything Connected",
      icon: Activity,
      description: "Every financial decision ripples through your entire cash flow - Trinity tracks it all.",
      example: "Pay off a loan? More daily capacity. Take a penalty? Temporarily reduced flow. All automatic.",
      color: "pink",
      gradient: "from-pink-500/20 to-rose-600/20",
      iconBg: "from-pink-500 to-rose-600"
    }
  ],
  [] // no dependencies → memoized once
);
  // const rules: Rule[] = ;

  // Intersection Observer for title
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

  // Intersection Observer for cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleCards(prev => [...new Set([...prev, id])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('[data-id]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveRule(prev => {
        const currentIndex = rules.findIndex(rule => rule.id === prev);
        const nextIndex = (currentIndex + 1) % rules.length;
        return rules[nextIndex].id;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, rules]);

  const handleRuleClick = (ruleId: number) => {
    setActiveRule(ruleId);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 relative overflow-hidden border-t" id='howto'
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title Section */}
        <div 
          ref={titleRef}
          className={`
            text-center mb-20 transform transition-all duration-1000 ease-out
            ${titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
          `}
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl backdrop-blur-sm border border-purple-400/30 relative">
              <Sparkles className="w-8 h-8 text-purple-400 animate-pulse" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-slate-900">
              The 7 Smart Rules That
            </span>
            <span className="block gradient-text bg-clip-text text-transparent animate-pulse">
              Keep You Afloat
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Trinity follows battle-tested financial principles that adapt to your unique situation
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Rules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rules.map((rule) => {
            const Icon = rule.icon;
            const isActive = activeRule === rule.id;
            const isVisible = visibleCards.includes(rule.id);
            
            return (
              <div
                key={rule.id}
                data-id={rule.id}
                onClick={() => handleRuleClick(rule.id)}
                className={`
                  cursor-pointer rounded-3xl p-8 transition-all duration-700 ease-out
                  transform hover:scale-[1.02] hover:-translate-y-1 group relative
                  ${isActive
                    ? `bg-slate-200 border-2 border-${rule.color}-400 shadow-2xl shadow-${rule.color}-200/50`
                    : 'bg-white/60 border border-gray-200 hover:border-purple-300 shadow-md'
                  }
                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                `}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6 relative z-10">
                  <div className={`
                    p-4 rounded-2xl transition-all duration-500
                    bg-gradient-to-r ${rule.iconBg} text-white
                    group-hover:scale-110 group-hover:rotate-3 shadow-sm
                  `}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`
                        text-sm font-bold px-3 py-1 rounded-full
                        ${isActive
                          ? `bg-${rule.color}-100 text-${rule.color}-700`
                          : 'bg-gray-100 text-gray-500'
                        }
                      `}>
                        Rule {rule.id}
                      </span>
                      {isActive && (
                        <CheckCircle className="w-5 h-5 text-emerald-500 animate-pulse" />
                      )}
                    </div>
                    <h3 className={`
                      text-xl font-semibold transition-colors duration-300
                      ${isActive ? 'gradient-text' : 'text-slate-800'}
                    `}>
                      {rule.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {rule.description}
                </p>

                {/* Example Box */}
                <div className={`
                  rounded-2xl p-4 transition-all duration-300
                  ${isActive
                    ? `bg-${rule.color}-50 border border-${rule.color}-200`
                    : 'bg-gray-50 border border-gray-100'
                  }
                `}>
                  <div className="flex items-start gap-3">
                    <ArrowRight className={`
                      w-4 h-4 mt-0.5 flex-shrink-0
                      ${isActive ? `text-${rule.color}-500` : 'text-gray-400'}
                    `} />
                    <p className={`
                      text-sm font-mono leading-relaxed
                      ${isActive ? `text-${rule.color}-700` : 'text-slate-600'}
                    `}>
                      {rule.example}
                    </p>
                  </div>
                </div>
              </div>

            );
          })}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-16 gap-2">
          {rules.map((rule) => (
            <button
              key={rule.id}
              onClick={() => handleRuleClick(rule.id)}
              className={`
                transition-all duration-500 rounded-full
                ${activeRule === rule.id
                  ? 'w-12 h-3 bg-gradient-to-r from-cyan-400 to-purple-400'
                  : 'w-3 h-3 bg-gray-600 hover:bg-gray-500'
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;