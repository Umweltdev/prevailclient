import { Star } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'

function Testimonials({ visibleSections }) {
  const [statsAnimated, setStatsAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement | null>(null);

  const AnimatedStat = ({ target, suffix = '' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!statsAnimated) return;

      const duration = 2000;
      const steps = 100;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [statsAnimated, target]);

    return <>{count.toLocaleString()}{suffix}</>;
  };

  // Intersection observer to trigger animation
  useEffect(() => {
    if (!statsRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !statsAnimated) {
          setStatsAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [statsAnimated]);

  return (
    <section
      id="testimonials"
      className={`scroll-reveal ${visibleSections.has('testimonials') ? 'visible' : ''} py-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Businesses Using MCD Are <span className="gradient-text">Capturing Hidden Profits</span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { text: "We were spending $30K monthly on ads and barely breaking even. MCD raised our prices by just 7% during peak campaigns – that's $200K in extra profit this year from the same customers.", author: "Sarah Chen", role: "Fashion Retailer" },
            { text: "The beauty is it's completely automatic. When our influencer campaign went viral, MCD captured an extra $12,000 that week alone. Money we would have left on the table.", author: "Marcus Williams", role: "Fitness Brand" },
            { text: "I was skeptical about price changes, but they're so gradual customers don't notice. Our margins improved 15% while our review scores actually went up.", author: "Jennifer Park", role: "Home Decor" }
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-md relative">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mb-6 text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div
          ref={statsRef}
          className="bg-white rounded-3xl p-8 shadow-xl grid md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <h3 className="text-4xl font-bold mb-2 gradient-text">
              $<AnimatedStat target={2400000} />
            </h3>
            <p className="text-gray-600">Additional profit captured</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2 gradient-text">
              <AnimatedStat target={147} />
            </h3>
            <p className="text-gray-600">Businesses optimizing</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2 gradient-text">
              <AnimatedStat target={0} />
            </h3>
            <p className="text-gray-600">Customer complaints</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;
