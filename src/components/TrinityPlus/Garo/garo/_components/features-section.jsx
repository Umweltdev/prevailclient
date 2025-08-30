import { Shield, Database, Zap, RefreshCw } from "lucide-react";

const FeatureSection = () => {
  return (
    <section className="py-20  relative overflow-hidden ">
      {/* Section background with gradient */}
      

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading (optional, looks gucci with context) */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-slate-800">Why Choose Us</h2>
          <p className="text-slate-600 mt-2">
            Built with performance, security, and flexibility in mind.
          </p>
        </div>

        {/* Features grid */}
        <div className="flex flex-wrap justify-center items-center gap-10 text-slate-700 font-medium">
          {[
            { icon: Shield, label: "GDPR Compliant" },
            { icon: Database, label: "No Code Change Needed" },
            { icon: Zap, label: "CSV/API Integration" },
            { icon: RefreshCw, label: "100+ Strategies Simulated" },
          ].map((feature, i) => (
            <div
              key={i}
              className="flex items-center space-x-3 px-5 py-3 rounded-2xl backdrop-blur-md  shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Icon with gradient */}
              <div
                className="p-2 rounded-lg shadow"
                style={{
                  background:
                    "linear-gradient(135deg, #6E3EF4 0%, #409AFF 100%)",
                }}
              >
                <feature.icon className="w-5 h-5 text-white" />
              </div>

              {/* Label */}
              <span className="text-slate-800 font-medium">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
