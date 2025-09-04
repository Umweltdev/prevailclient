import React from "react";
import PricingCard from "./PricingCard.js";

function Pricing() {
  return (
    <section className="py-20 bg-gray-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that fits your business
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <PricingCard
            name="Beta"
            price="€232"
            description="Perfect for small businesses"
            features={[
              "Up to $10,000 monthly ad spend",
              "All 4 platforms included",
              "Basic optimization",
              "Email support",
              "Monthly reports",
            ]}
            cta="Book a Consultation"
            popular={false}
            clickable={true}
          />
          <PricingCard
            name="Early"
            price="€579"
            description="For large organizations"
            features={[
              "Unlimited ad spend",
              "All platforms + custom",
              "Custom ML models",
              "Dedicated support",
              "Real-time reporting",
              "White label option",
              "Custom integrations",
            ]}
            cta="Book a Consultation"
            popular={false}
            clickable={false}
          />
          <PricingCard
            name="Standard"
            price="€1,739 "
            description="For growing businesses"
            features={[
              "Up to $50,000 monthly ad spend",
              "All 4 platforms included",
              "Advanced ML optimization",
              "Priority support",
              "Weekly reports",
              "Custom rules",
              "API access",
            ]}
            cta="Book a Consultation"
            popular={true}
            clickable={false}
          />
        </div>
      </div>
    </section>
  );
}

export default Pricing;
