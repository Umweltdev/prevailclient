export const createCheckoutSession = async (checkoutData) => {
  const baseUrl = window.location.origin;
  const backendBaseUrl = import.meta.env.VITE_API_BASE_URL;


  try {
    const response = await fetch(`${backendBaseUrl}${import.meta.env.VITE_API_CHECKOUT_SESSION}`, {
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

export const mapToApiServiceType = (selectedServices) => {
  // Map the complex service structure to API format
  if (selectedServices.includes("brand-identity")) {
    return "brand_identity_package";
  }
  if (selectedServices.includes("ad-campaigns")) {
    return "digital_campaign";
  }
  if (selectedServices.includes("trinity-systems")) {
    return "trinity_system";
  }
  if (selectedServices.includes("complete-platform")) {
    return "complete_platform";
  }
  return "general_service";
};

export const generateTargetAudience = (selectedIndustry, selectedServices) => {
  const industryMap = {
    restaurant: "Restaurant & Food Service",
    retail: "Retail & E-commerce", 
    services: "Professional Services",
    hospitality: "Hospitality & Events",
    property: "Property & Real Estate",
    other: "Various Industries",
  };

  const industry = industryMap[selectedIndustry] || "Business";
  const serviceCount = selectedServices.length;
  
  return `${industry} businesses seeking ${serviceCount} service${serviceCount > 1 ? 's' : ''}`;
};

export const generateCampaignDuration = (selectedServices, serviceSelections) => {
  const hasComplexService = selectedServices.some(service => 
    service === "complete-platform" || 
    (service === "trinity-systems" && serviceSelections[service]?.trinity === "trinity-plus")
  );
  
  if (hasComplexService) return "4-6 months";
  if (selectedServices.length > 2) return "3-4 months";
  return "2-3 months";
};