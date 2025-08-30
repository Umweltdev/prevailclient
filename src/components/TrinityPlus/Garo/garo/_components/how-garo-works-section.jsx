import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Package, Brain, TrendingUp, BarChart3 } from "lucide-react";
import CoreFunctionality from "./core-functionality";
import PropTypes from "prop-types";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    step: 1,
    title: "Connect SquareUp",
    desc: "Import sales/inventory data",
    icon: Package,
  },
  {
    step: 2,
    title: "Evolution Engine",
    desc: "Simulate 1000s of strategies",
    icon: Brain,
  },
  {
    step: 3,
    title: "Best Plan Selected",
    desc: "AI picks optimal strategy",
    icon: TrendingUp,
  },
  {
    step: 4,
    title: "Execute & Save",
    desc: "Approve & pay suppliers",
    icon: BarChart3,
  },
];

const Card = ({ item, i }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.from(cardRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power3.out",
      delay: i * 0.2,
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div ref={cardRef} className="relative group">
      <div className="p-8 transition-all duration-300 transform shadow-lg bg-gradient-to-br from-indigo-800/50 to-purple-800/50 backdrop-blur-lg rounded-3xl hover:scale-105 hover:shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <item.icon className="w-10 h-10 text-purple-300 transition-transform duration-300 group-hover:scale-110 group-hover:text-purple-200" />
          <div className="flex items-center justify-center rounded-full shadow-lg w-14 h-14 bg-gradient-to-r from-purple-500 to-indigo-500">
            <span className="text-xl font-extrabold text-white">
              {item.step}
            </span>
          </div>
        </div>
        <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-purple-100">
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed transition-colors duration-300 text-indigo-200/90 group-hover:text-indigo-100">
          {item.desc}
        </p>
      </div>
    </div>
  );
};

//
// -------- Variant A (Dark Gradient Background Only) --------
//
export const HowGaroWorksFade = () => {
  return (
    <section className="relative px-6 py-20 mt-10 overflow-hidden">
      {/* Only dark gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-900 to-indigo-950" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <h2 className="mb-12 text-4xl font-bold text-center text-transparent bg-gradient-to-r from-purple-400 to-indigo-100 bg-clip-text">
          How GARO Works
        </h2>
        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((item, i) => (
            <Card key={i} item={item} i={i} />
          ))}
        </div>
      </div>
      <CoreFunctionality />
    </section>
  );
};

//
// -------- Variant B (Island Card) --------
//
export const HowGaroWorksCard = () => {
  return (
    <section className="px-6 py-20">
      <div className="relative max-w-6xl mx-auto overflow-hidden shadow-2xl rounded-3xl">
        {/* Dark background inside the card */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-indigo-950" />

        <div className="relative z-10 p-12">
          <h2 className="mb-12 text-4xl font-bold text-center text-transparent bg-gradient-to-r from-purple-400 to-indigo-100 bg-clip-text">
            How GARO Works
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            {steps.map((item, i) => (
              <Card key={i} item={item} i={i} />
            ))}
          </div>
          <CoreFunctionality />
        </div>
      </div>
    </section>
  );
};

export default HowGaroWorksFade; // 👈 default export (fade version)

Card.propTypes = {
  item: {
    step: PropTypes.number,
    title: PropTypes.string,
    desc: PropTypes.string,
    icon: PropTypes.element | PropTypes.elementType
  },
  i: PropTypes.number
}