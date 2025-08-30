import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { Check } from "lucide-react";


// Define the industries object with proper typing
const industries = {
  retail: {
    title: "Retail",
    icon: "🛒",
    description:
      "Optimize inventory for retail with real-time demand forecasting and automated restocking.",
    benefits: [
      "Reduce overstock by up to 40%",
      "Improve sales with better availability",
      "Streamline supply chain operations",
    ],
  },
  hospitality: {
    title: "Hospitality",
    icon: "🍽️",
    description:
      "Ensure your restaurant or hotel never runs out of essentials while minimizing waste.",
    benefits: [
      "Cut food waste by 35%",
      "Enhance guest satisfaction",
      "Simplify procurement processes",
    ],
  },
  manufacturing: {
    title: "Manufacturing",
    icon: "🏭",
    description:
      "Streamline raw material inventory to keep production lines running smoothly.",
    benefits: [
      "Reduce stockouts by 90%",
      "Lower holding costs",
      "Improve production efficiency",
    ],
  },
  hostel: {
    title: "Hostel",
    icon: "🏡",
    description:
      "Manage hostel supplies efficiently with predictive restocking and reduced waste.",
    benefits: [
      "Minimize supply shortages by 50%",
      "Enhance guest experience",
      "Optimize operational costs",
    ],
  },
};

const IndustrySection = () => {
  const [activeTab, setActiveTab] = useState("retail");

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-[#6E3EF4] to-[#409AFF] bg-clip-text text-transparent animate-text-shine">
          Who Is GARO For?
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.keys(industries).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`relative px-6 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none cursor-pointer ${
                activeTab === key
                  ? "bg-gradient-to-r from-[#6E3EF4] to-[#409AFF] text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-100 hover:shadow-md hover:scale-105"
              }`}
            >
              <span className="flex items-center space-x-2">
                <span>{industries[key].icon}</span>
                <span>{industries[key].title}</span>
              </span>
            </button>
          ))}
        </div>
        <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-[#6E3EF4]/30 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-[#6E3EF4]">
              {industries[activeTab].title}
            </h3>
            <p className="text-gray-700 mb-6">
              {industries[activeTab].description}
            </p>
            <div className="space-y-3">
              {industries[activeTab].benefits.map((benefit) => (
                <div key={benefit} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-800">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </Tilt>
      </div>
    </section>
  );
};

// Move animation to a CSS file or inline with Tailwind
// For Tailwind, use animate-pulse or custom keyframes via a CSS file
// Example CSS (save as industry-section.css and import):
/*
@keyframes textShine {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}
.animate-text-shine {
  background-size: 200% auto;
  animation: textShine 5s ease-in-out infinite alternate;
}
*/

export default IndustrySection;
