export const createCheckoutSession = async (checkoutData) => {
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;

  try {
    const response = await fetch( `${import.meta.env.VITE_API_CHECKOUT_SESSION}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...checkoutData,
        success_url: `${baseUrl}/checkout-success`,
        cancel_url: `${baseUrl}/checkout-cancel`,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || `HTTP ${response.status}: ${response.statusText}`
      );
    }

    const session = await response.json();
    return session;
  } catch (error) {
    throw new Error(`Failed to create checkout session: ${error.message}`);
  }
};

export const mapToApiServiceType = (solutionType) => {
  // Handle consultation specifically
  if (solutionType === "consultation") {
    return "consultation";
  }

  if (solutionType === "website" || solutionType === "both") {
    return "brand_identity_package";
  }

  if (solutionType === "trinity") {
    return "trinity_system";
  }

  // Default fallback
  return "web_development";
};

export const generateTargetAudience = (selectedIndustry, selectedGoals) => {
  const industryMap = {
    restaurant: "Restaurant & Food Service",
    retail: "Retail & E-commerce",
    services: "Professional Services",
    hospitality: "Hospitality & Events",
    property: "Property & Real Estate",
    other: "Various Industries",
  };

  const industry = industryMap[selectedIndustry] || "Business";
  const goals = selectedGoals ? selectedGoals.join(", ") : "growth and efficiency";

  return `${industry} businesses focusing on ${goals}`;
};

/**
 * Generates campaign duration based on service complexity
 * @param {string} solutionType - Solution type
 * @param {string} trinitySelectionId - Trinity selection
 * @returns {string} Campaign duration
 */
export const generateCampaignDuration = (solutionType, trinitySelectionId) => {
  // Handle consultation specifically
  if (solutionType === "consultation") {
    return "1 hour session";
  }

  if (solutionType === "both") return "4-6 months";
  if (solutionType === "trinity") {
    if (trinitySelectionId === "trinity-plus") return "3-4 months";
    return "2-3 months";
  }
  return "2-3 months";
};