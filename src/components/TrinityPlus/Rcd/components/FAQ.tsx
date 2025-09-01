import { useState } from "react";
import GlassCard from "./GlassCard.js";

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const items = [
    {
      q: "How does vector positioning work?",
      a: "Every customer exists at a point on a 2D map. Spending moves them horizontally (2x weight), frequency vertically. Distance from origin determines discount (0-20%).",
    },
    {
      q: "How does the 50/50 viral split work?",
      a: "When someone you referred makes a $100 purchase, they get full credit (100 points) for their position, and you get 50 points added to yours. Both vectors strengthen.",
    },
    {
      q: "Can this create runaway discounts?",
      a: "No. The exponential curve approaches but never exceeds your set maximum (e.g., 20%). Customers earning max discounts have proven their value.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {items.map((item, i) => (
            <div
              key={item.q}
              className="animate-slide-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <FAQItem
                q={item.q}
                a={item.a}
                open={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <GlassCard className="p-8">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between text-left group"
      >
        <h3 className="text-xl font-bold text-slate-800 group-hover:text-violet-600 transition-colors duration-300">
          {q}
        </h3>
        <span
          className={`text-3xl text-violet-600 transition-all duration-500 transform ${
            open ? "rotate-45 scale-110" : "hover:scale-125"
          }`}
        >
          +
        </span>
      </button>
      <div className={`transition-all duration-500 overflow-hidden ${open ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
        <div className="border-t border-violet-200/50 pt-6">
          <p className="text-slate-600 leading-relaxed">{a}</p>
        </div>
      </div>
    </GlassCard>
  );
}