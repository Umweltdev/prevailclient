import { loadStripe } from "@stripe/stripe-js";

console.log("Stripe Key Loaded:", import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const backendBaseUrl = import.meta.env.VITE_API_BASE_URL;

export const proceedToCheckout = async (checkoutData) => {
  try {
    const stripe = await stripePromise;
    if (!stripe) throw new Error("Stripe.js has not loaded.");

    console.log("Sending this data to backend:", checkoutData);
    
    const response = await fetch(
      `${backendBaseUrl}${import.meta.env.VITE_API_CHECKOUT_SESSION}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(checkoutData),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to create checkout session.");
    }

    const session = await response.json();

    const { error } = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (error) throw new Error(error.message);
    
    return { error: null };

  } catch (error) {
    console.error("Stripe Checkout Error:", error);
    return { error: error.message || "An unknown error occurred." };
  }
};