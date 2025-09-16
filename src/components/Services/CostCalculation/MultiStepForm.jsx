import React, { useState, useCallback, useRef } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  ThemeProvider,
  Box,
  Container,
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
  Snackbar,
  Alert,
  // Fade,
  Stack,
} from "@mui/material";
import {
  Check,
  RefreshCw,
} from "lucide-react";

import {
  createCheckoutSession,
  mapToApiServiceType,
  generateTargetAudience,
  generateCampaignDuration,
} from "./components/api.js";
import { applyDiscount } from "../../user-dashboard/utils.js";
import { IndustrySelection } from "./steps/IndustrySelection.jsx";
import BrandPackageSelection from "./steps/BrandPackageSelection.jsx";
import CampaignPackageSelection from "./steps/CampaignPackages.jsx";
import TrinityPackageSelection from "./steps/TrinityPacakageSelection.jsx";
import PlatformTierSelection from "./steps/PlatformTierSelection.jsx";
import StoreTypeSelection from "./steps/StoreTypeSelection.jsx";
import FinalSummary from "./steps/FinalSummary.jsx";
import { theme } from "../../../theme.js";
import { GradientText } from "../../../sections/components/common/GradientText.jsx";
import ServiceSelection from "./steps/ServiceSelection.jsx";
import { BRAND_PACKAGES, CAMPAIGN_PACKAGES, PLATFORM_TIERS, SERVICES, TRINITY_OPTIONS } from "./data/costCalculationData.js";

const STRIPE_KEY = import.meta.env.VITE_STRIPE_PUBLIC_KEY || "";
let stripePromise = null;
if (STRIPE_KEY) {
  stripePromise = loadStripe(STRIPE_KEY);
} else {
  console.warn(
    "VITE_STRIPE_PUBLISHABLE_KEY not set. Checkout will be disabled until configured."
  );
}


const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [serviceSelections, setServiceSelections] = useState({});
  const [hasPhysicalStore, setHasPhysicalStore] = useState(null);
  const [showToast, setShowToast] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [keywords, setKeywords] = useState("");
  const [selectedSystems, setSelectedSystems] = useState("");
  const [selectedDashboards, setSelectedDashboards] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isProcessingConsult, setIsProcessingConsult] = useState(false);

  const wizardRef = useRef(null);

  const calculateTotal = useCallback(() => {
    let total = 0;

    selectedServices.forEach((serviceId) => {
      const selection = serviceSelections[serviceId];
      if (!selection) return;

      if (serviceId === "brand-identity" && selection.package) {
        const pkg = BRAND_PACKAGES.find((p) => p.id === selection.package);
        total += pkg?.price || 0;
      }

      if (serviceId === "ad-campaigns" && selection.campaign) {
        const campaign = CAMPAIGN_PACKAGES.find(
          (p) => p.id === selection.campaign
        );
        total += campaign?.price || 0;
      }

      if (
        (serviceId === "trinity-systems" ||
          serviceId === "complete-platform") &&
        selection.trinity
      ) {
        const trinity = TRINITY_OPTIONS.find((p) => p.id === selection.trinity);
        total += trinity?.betaPrice || 0;
      }

      if (serviceId === "complete-platform" && selection.tier) {
        const tier = PLATFORM_TIERS.find((t) => t.id === selection.tier);
        if (tier) {
          total += (tier.minPrice + tier.maxPrice) / 2;
        }
      }
    });

    if (hasPhysicalStore) {
      selectedServices.forEach((serviceId) => {
        const selection = serviceSelections[serviceId];
        if (
          selection?.trinity === "garo" ||
          selection?.trinity === "trinity-plus"
        ) {
          total += 1600;
        }
      });
    }
    return Math.round(total);
  }, [selectedServices, serviceSelections, hasPhysicalStore]);

  const getSteps = React.useCallback(() => {
    const steps = ["Services"];

    if (selectedServices.length === 0) return steps;

    if (
      selectedServices.some((s) =>
        ["brand-identity", "ad-campaigns", "complete-platform"].includes(s)
      )
    ) {
      steps.push("Industry");
    }

    selectedServices.forEach((serviceId) => {
      const service = SERVICES.find((s) => s.id === serviceId);
      switch (serviceId) {
        case "brand-identity":
          steps.push(`${service.name}`);
          break;
        case "ad-campaigns":
          steps.push(`${service.name}`);
          break;
        case "trinity-systems":
          steps.push(`${service.name}`);
          break;
        case "complete-platform":
          steps.push(`Platform Systems`);
          steps.push(`Platform Tier`);
          break;
      }
    });

    const needsStoreType = selectedServices.some((serviceId) => {
      const selection = serviceSelections[serviceId];
      return (
        selection?.trinity === "garo" || selection?.trinity === "trinity-plus"
      );
    });

    if (needsStoreType) {
      steps.push("Store Type");
    }

    steps.push("Review");
    return steps;
  }, [selectedServices, serviceSelections]);

  const steps = getSteps();

  const nextStep = useCallback(() => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
      setTimeout(
        () => wizardRef.current?.scrollIntoView({ behavior: "smooth" }),
        100
      );
    }
  }, [currentStep, steps.length]);

  const prevStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setTimeout(
        () => wizardRef.current?.scrollIntoView({ behavior: "smooth" }),
        100
      );
    }
  }, [currentStep]);

  const showToastMessage = useCallback((message) => {
    setShowToast(message);
    setTimeout(() => setShowToast(null), 4000);
  }, []);

  const resetSelections = useCallback(() => {
    setCurrentStep(1);
    setSelectedServices([]);
    setSelectedIndustry(null);
    setServiceSelections({});
    setHasPhysicalStore(null);
    setName("");
    setEmail("");
    setAdditionalNotes("");
    setKeywords("");
    setSelectedSystems("");
    setSelectedDashboards("");
    showToastMessage("Configuration has been reset. Start fresh!");
  }, [showToastMessage]);

  const handleCheckout = useCallback(async () => {
    if (!name || !email) {
      showToastMessage("Error: Please enter your name and email to proceed.");
      return;
    }

    setIsProcessing(true);

    try {
      const total = calculateTotal();
      console.log("total", total);
      const depositPrice = applyDiscount(total);

      console.log("depositPrice", depositPrice);

      const checkoutData = {
        name,
        email,
        serviceType: mapToApiServiceType(selectedServices, serviceSelections),
        price: depositPrice,
        targetAudience: generateTargetAudience(
          selectedIndustry,
          selectedServices
        ),
        campaignDuration: generateCampaignDuration(
          selectedServices,
          serviceSelections
        ),
        notes: `${additionalNotes || ""} | Systems: ${
          selectedSystems || "None"
        } | Dashboards: ${selectedDashboards || "None"} | Keywords: ${
          keywords || "None"
        } | Services: ${selectedServices.join(", ")} | Industry: ${
          selectedIndustry || "None"
        } | Physical Store: ${hasPhysicalStore ? "Yes" : "No"}`.trim(),
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
    } catch (error) {
      console.error("Checkout error:", error);
      showToastMessage(
        `Error: ${error.message || "Something went wrong. Please try again."}`
      );
    } finally {
      setIsProcessing(false);
    }
  }, [
    name,
    email,
    calculateTotal,
    selectedServices,
    serviceSelections,
    selectedIndustry,
    hasPhysicalStore,
    additionalNotes,
    selectedSystems,
    selectedDashboards,
    keywords,
    showToastMessage,
  ]);

  const handleConsultationCheckout = useCallback(async () => {
    if (!name || !email) {
      showToastMessage("Error: Please enter your name and email to proceed.");
      return;
    }

    setIsProcessingConsult(true);

    try {      
      const consultationData = {
        name,
        email,
        serviceType: "consultation",
        price: 83,
        targetAudience: generateTargetAudience(
          selectedIndustry,
          selectedServices
        ),
        campaignDuration: "consultation",
        notes: `CONSULTATION REQUEST | Services of Interest: ${
          selectedServices.join(", ") || "None specified"
        } | Industry: ${
          selectedIndustry || "None specified"
        } | Additional Notes: ${additionalNotes || "None"} | Systems: ${
          selectedSystems || "None"
        } | Dashboards: ${selectedDashboards || "None"} | Keywords: ${
          keywords || "None"
        } | Physical Store: ${hasPhysicalStore ? "Yes" : "No"}`.trim(),
      };

      const session = await createCheckoutSession(consultationData);

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
    } catch (error) {
      console.error("Consultation checkout error:", error);
      showToastMessage(
        `Error: ${error.message || "Something went wrong. Please try again."}`
      );
    } finally {
      setIsProcessingConsult(false);
    }
  }, [
    name,
    email,
    selectedServices,
    selectedIndustry,
    hasPhysicalStore,
    additionalNotes,
    selectedSystems,
    selectedDashboards,
    keywords,
    showToastMessage,
  ]);

  const updateServiceSelection = (serviceId, key, value) => {
    setServiceSelections((prev) => ({
      ...prev,
      [serviceId]: {
        ...prev[serviceId],
        [key]: value,
      },
    }));
  };

  const renderStepContent = () => {
    const stepName = steps[currentStep - 1];

    if (stepName === "Services") {
      return (
        <ServiceSelection
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
          nextStep={nextStep}
        />
      );
    }

    if (stepName === "Industry") {
      return (
        <IndustrySelection
          selectedIndustry={selectedIndustry}
          setSelectedIndustry={setSelectedIndustry}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    }

    if (stepName.includes("Brand Identity")) {
      const serviceId = "brand-identity";
      return (
        <BrandPackageSelection
          selectedPackage={serviceSelections[serviceId]?.package}
          setSelectedPackage={(value) =>
            updateServiceSelection(serviceId, "package", value)
          }
          nextStep={nextStep}
          prevStep={prevStep}
          currentServiceIndex={selectedServices.indexOf(serviceId)}
          totalServices={selectedServices.length}
        />
      );
    }

    if (stepName.includes("Digital Ad Campaigns")) {
      const serviceId = "ad-campaigns";
      return (
        <CampaignPackageSelection
          selectedCampaign={serviceSelections[serviceId]?.campaign}
          setSelectedCampaign={(value) =>
            updateServiceSelection(serviceId, "campaign", value)
          }
          nextStep={nextStep}
          prevStep={prevStep}
          currentServiceIndex={selectedServices.indexOf(serviceId)}
          totalServices={selectedServices.length}
        />
      );
    }

    if (stepName.includes("Trinity Business Systems")) {
      const serviceId = "trinity-systems";
      return (
        <TrinityPackageSelection
          selectedTrinity={serviceSelections[serviceId]?.trinity}
          setSelectedTrinity={(value) =>
            updateServiceSelection(serviceId, "trinity", value)
          }
          nextStep={nextStep}
          prevStep={prevStep}
          currentServiceIndex={selectedServices.indexOf(serviceId)}
          totalServices={selectedServices.length}
        />
      );
    }

    if (stepName.includes("Platform Systems")) {
      const serviceId = "complete-platform";
      return (
        <TrinityPackageSelection
          selectedTrinity={serviceSelections[serviceId]?.trinity}
          setSelectedTrinity={(value) =>
            updateServiceSelection(serviceId, "trinity", value)
          }
          nextStep={nextStep}
          prevStep={prevStep}
          currentServiceIndex={selectedServices.indexOf(serviceId)}
          totalServices={selectedServices.length}
          isPartOfPlatform={true}
        />
      );
    }

    if (stepName.includes("Platform Tier")) {
      const serviceId = "complete-platform";
      return (
        <PlatformTierSelection
          selectedTier={serviceSelections[serviceId]?.tier}
          setSelectedTier={(value) =>
            updateServiceSelection(serviceId, "tier", value)
          }
          nextStep={nextStep}
          prevStep={prevStep}
          currentServiceIndex={selectedServices.indexOf(serviceId)}
          totalServices={selectedServices.length}
        />
      );
    }

    if (stepName === "Store Type") {
      return (
        <StoreTypeSelection
          hasPhysicalStore={hasPhysicalStore}
          setHasPhysicalStore={setHasPhysicalStore}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    }

    if (stepName === "Review") {
      return (
        <FinalSummary
          selectedServices={selectedServices}
          selectedIndustry={selectedIndustry}
          serviceSelections={serviceSelections}
          hasPhysicalStore={hasPhysicalStore}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          additionalNotes={additionalNotes}
          setAdditionalNotes={setAdditionalNotes}
          keywords={keywords}
          setKeywords={setKeywords}
          selectedSystems={selectedSystems}
          setSelectedSystems={setSelectedSystems}
          selectedDashboards={selectedDashboards}
          setSelectedDashboards={setSelectedDashboards}
          prevStep={prevStep}
          handleCheckout={handleCheckout}
          handleConsultationCheckout={handleConsultationCheckout}
          isProcessing={isProcessing}
          isProcessingConsult={isProcessingConsult}
          calculateTotal={calculateTotal}
        />
      );
    }

    return null;
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, rgba(99, 102, 241, 0.05) 100%)`,
        }}
      >
        <Container
          maxWidth="xl"
          sx={{ py: { xs: 18, md: 20 } }}
          ref={wizardRef}
        >
          {/* <Fade in={true} timeout={400}> */}
            <Box textAlign="center" mb={{ xs: 6, md: 10 }}>
              <Typography variant="h1" gutterBottom>
                Your Partner in Accelerating the
                <Box component="span" sx={GradientText}>
                  Digital Space
                </Box>
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{
                  maxWidth: "800px",
                  mx: "auto",
                  mb: 4,
                  lineHeight: 1.6,
                  fontWeight: 400,
                }}
              >
                Our goal is to help businesses thrive by providing innovative,
                holistic solutions that accelerate growth and digital
                transformation.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  onClick={resetSelections}
                  startIcon={<RefreshCw size={18} />}
                  sx={{
                    color: "text.secondary",
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "grey.100",
                    },
                  }}
                >
                  Start Over
                </Button>
              </Stack>
              <Typography variant="body2" color="text.secondary">
                Trusted by 500+ businesses worldwide
              </Typography>
            </Box>
          {/* </Fade> */}

          {/* <Fade in timeout={500}> */}
            <Box mb={{ xs: 6, md: 8 }}>
              <Stepper
                activeStep={currentStep - 1}
                alternativeLabel
                sx={{
                  "& .MuiStepLabel-label": {
                    fontWeight: 600,
                    fontSize: "0.9rem",
                  },
                  "& .MuiStepIcon-root": {
                    fontSize: "2rem",
                    "&.Mui-active": {
                      color: "primary.main",
                    },
                    "&.Mui-completed": {
                      color: "success.main",
                    },
                  },
                }}
              >
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel
                      StepIconComponent={({ active, completed, icon }) => (
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            bgcolor: completed
                              ? "success.main"
                              : active
                                ? "primary.main"
                                : "grey.300",
                            color: "white",
                            fontWeight: 700,
                            fontSize: "1rem",
                            transition: "all 0.3s ease",
                          }}
                        >
                          {completed ? <Check size={20} /> : icon}
                        </Box>
                      )}
                    >
                      {label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          {/* </Fade> */}
          {renderStepContent()}
        </Container>
        <Snackbar
          open={!!showToast}
          autoHideDuration={6000}
          onClose={() => setShowToast(null)}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          sx={{
            "& .MuiSnackbarContent-root": {
              borderRadius: 3,
            },
          }}
        >
          <Alert
            onClose={() => setShowToast(null)}
            severity={
              showToast && showToast.toLowerCase().includes("error")
                ? "error"
                : showToast && showToast.toLowerCase().includes("success")
                  ? "success"
                  : "info"
            }
            sx={{
              width: "100%",
              borderRadius: 3,
              fontWeight: 600,
            }}
            variant="filled"
          >
            {showToast}
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
};

export default MultiStepForm;
