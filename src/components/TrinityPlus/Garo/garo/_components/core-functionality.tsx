import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Brain,
  Users,
  Clock,
  TrendingUp,
  RefreshCw,
  AlertCircle,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Genetic Algorithm",
    desc: "Evolutionary computation simulates thousands of restocking strategies",
    icon: Brain,
  },
  {
    title: "Multi-Supplier Management",
    desc: "Balance vendor lead times, costs, and reliability",
    icon: Users,
  },
  {
    title: "Perishable Optimisation",
    desc: "Shelf life, spoilage rates, and rotation strategies",
    icon: Clock,
  },
  {
    title: "Demand Forecasting",
    desc: "Learn seasonality & volatility patterns",
    icon: TrendingUp,
  },
  {
    title: "Auto Reorder Points",
    desc: "Dynamic thresholds based on real consumption",
    icon: RefreshCw,
  },
  {
    title: "Predictive Maintenance",
    desc: "MTBF/MTTR tracking for equipment",
    icon: AlertCircle,
  },
];

const CoreFunctionality = () => {
  const listRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    listRefs.current.forEach((el, i) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
          delay: i * 0.15,
          scrollTrigger: {
            trigger: el,
            start: "top 90%", // fires a bit earlier so you see it
            toggleActions: "play none none none", // don't auto-reverse on scroll back
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill()); // clean up on unmount
    };
  }, []);

  return (
    <section className="pt-20  px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative ">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-indigo-200 bg-clip-text text-transparent">
          Core Functionality
        </h2>

        <ul className="divide-y divide-slate-600/70">
          {features.map((feature, i) => (
            <li
              key={i}
              ref={(el) => {
                listRefs.current[i] = el;
              }}
              className="py-6 flex items-start gap-4 px-4 hover:bg-slate-800/20 rounded-lg transition-colors duration-300"
            >
              <feature.icon className="w-6 h-6 text-indigo-400 mt-1 transition-transform duration-300 group-hover:scale-110" />
              <div>
                <h3 className="font-semibold text-white">{feature.title}</h3>
                <p className="text-slate-300 text-sm">{feature.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CoreFunctionality;
