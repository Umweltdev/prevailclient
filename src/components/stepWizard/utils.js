import { loadStripe } from "@stripe/stripe-js";
import { createCheckoutSession, mapToApiServiceType, generateTargetAudience, generateCampaignDuration } from "./api";

const STRIPE_KEY = import.meta.env.VITE_STRIPE_PUBLIC_KEY || "";
let stripePromise = null;
if (STRIPE_KEY) {
  stripePromise = loadStripe(STRIPE_KEY);
} else {
  console.warn("VITE_STRIPE_PUBLISHABLE_KEY not set. Checkout will be disabled until configured.");
}

export const processCheckout = async ({
  name,
  email,
  serviceType,
  price,
  notes = "",
  targetAudience = "Business consultation",
  campaignDuration = "1 session",
  onError = null,
  onSuccess = null
}) => {
  // Validation
  if (!name || !email) {
    const errorMsg = "Please enter your name and email to proceed.";
    if (onError) onError(errorMsg);
    return;
  }

  if (!price || price <= 0) {
    const errorMsg = "Invalid price specified.";
    if (onError) onError(errorMsg);
    return;
  }

  try {
    const checkoutData = {
      name,
      email,
      serviceType,
      price,
      targetAudience,
      campaignDuration,
      notes
    };

    const session = await createCheckoutSession(checkoutData);
    const stripe = await stripePromise;
    
    if (!stripe) {
      throw new Error("Stripe.js has not loaded yet.");
    }

    const { error } = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (error) {
      throw new Error(error.message);
    }

    if (onSuccess) onSuccess();

  } catch (error) {
    console.error("Checkout error:", error);
    const errorMsg = error.message || "Unknown error occurred";
    if (onError) onError(errorMsg);
  }
};

/**
 * Specific checkout function for consultation bookings
 * @param {Object} params - Consultation parameters
 * @param {string} params.name - Customer name
 * @param {string} params.email - Customer email
 * @param {Function} [params.onError] - Error callback function
 * @param {Function} [params.onSuccess] - Success callback function
 * @returns {Promise<void>}
 */
export const processConsultationCheckout = async ({
  name,
  email,
  onError = null,
  onSuccess = null
}) => {
  return processCheckout({
    name,
    email,
    serviceType: "consultation",
    price: 83,
    targetAudience: "Business consultation",
    campaignDuration: "1 session",
    notes: "Business consultation session - 60 minutes",
    onError,
    onSuccess
  });
};

/**
 * Main product checkout function
 * @param {Object} params - Main checkout parameters
 * @returns {Promise<void>}
 */
export const processMainCheckout = async ({
  name,
  email,
  solutionType,
  trinitySelectionId,
  selectedTier,
  selectedIndustry,
  selectedGoals,
  hasPhysicalStore,
  additionalNotes,
  keywords,
  selectedSystems,
  selectedDashboards,
  calculateRunningTotal,
  onError = null,
  onSuccess = null
}) => {
  const total = calculateRunningTotal();
  const isBundle = solutionType === "both" && trinitySelectionId && selectedTier;
  const finalPrice = isBundle ? Math.round(total * 0.9) : total;

  const notes = `${additionalNotes || ""} | Systems: ${
    selectedSystems || "None"
  } | Dashboards: ${selectedDashboards || "None"} | Keywords: ${
    keywords || "None"
  } | Solution: ${solutionType} | Trinity: ${
    trinitySelectionId || "None"
  } | Tier: ${selectedTier || "None"} | Physical Store: ${
    hasPhysicalStore ? "Yes" : "No"
  }`.trim();

  return processCheckout({
    name,
    email,
    serviceType: mapToApiServiceType(solutionType, trinitySelectionId),
    price: finalPrice,
    targetAudience: generateTargetAudience(selectedIndustry, selectedGoals),
    campaignDuration: generateCampaignDuration(solutionType, trinitySelectionId),
    notes,
    onError,
    onSuccess
  });
};