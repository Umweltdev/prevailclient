import React, { useState, useCallback, useEffect, useRef } from "react";
import { theme } from "../../stepWizard/theme.js";
import {
  ThemeProvider,
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  Stepper,
  Step,
  StepLabel,
  Snackbar,
  Alert,
  TextField,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Fade,
  CircularProgress,
} from "@mui/material";
import "./assets/styles.css";
import PropTypes from "prop-types";
import { ChevronRight, ChevronLeft, Check, RefreshCw } from "lucide-react";
import { createCheckoutSession } from "../../stepWizard/api.js";
import { loadStripe } from "@stripe/stripe-js";
import { applyDiscount } from "../../user-dashboard/utils.js";

const STRIPE_KEY = import.meta.env.VITE_STRIPE_PUBLIC_KEY || "";
let stripePromise = null;
if (STRIPE_KEY) {
  stripePromise = loadStripe(STRIPE_KEY);
} else {
  console.warn(
    "VITE_STRIPE_PUBLISHABLE_KEY not set. Checkout will be disabled until configured."
  );
}

const platformTiers = [
  {
    id: "starter",
    name: "Starter Campaign",
    price: "€350",
    description:
      "Best for small businesses starting digital campaigns with focused reach.",
    featured: false,
    type: "starter",
    features: [
      "Customer Insight: Basic segmentation (demographic + geographic overview)",
      "Market Research: Competitor scan + keyword research (10-15 keywords)",
      "Campaign Setup: 1x Google Ads campaign setup",
      "Ad Design: Up to 4 custom ad designs (using client-provided images)",
      "Reporting: 1x performance report (after 2 months)",
    ],
  },
  {
    id: "growth",
    name: "Growth Campaign",
    price: "€500",
    description:
      "Best for SMEs seeking wider reach and continuous improvement.",
    featured: true,
    type: "growth",
    features: [
      "Customer Insight: Advanced segmentation (demographic + geographic + psychographic)",
      "Market Research: Competitor analysis + keyword research (20-30 keywords)",
      "Campaign Management: 2x Google Ads campaigns with optimization (1 adjustment)",
      "Ad Design: Up to 7 custom ad designs (using client-provided images)",
      "Enhanced Reporting: Mid-campaign update + final report (CTR, conversions, ROI insights)",
    ],
  },
  {
    id: "premium",
    name: "Premium Campaign",
    price: "€750",
    description:
      "Best for businesses aiming for dominance in their market with data-driven scaling.",
    featured: false,
    type: "premium",
    features: [
      "Customer Insight: Deluxe segmentation (demographic, geographic, psychographic, behavioural + 2 buyer personas)",
      "Market Research: In-depth competitor benchmarking + keyword research (40+ keywords, trend analysis)",
      "Campaign Management: 3x Google Ads campaigns with ongoing optimization (2 adjustments)",
      "Ad Design: Up to 10 premium ad designs (with strategic copywriting)",
      "Analytics: Detailed analytics dashboard + next-step recommendations",
    ],
  },
];

const gradientText = {
  background: "linear-gradient(to right, #6E3EF4, #3B82F6)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  display: "inline-block",
};

const extractNumericPrice = (priceStr) => {
  if (!priceStr) return 0;
  const digits = priceStr.replace(/[^\d]/g, "");
  const parsed = parseInt(digits, 10);
  return Number.isFinite(parsed) ? parsed : 0;
};

const SelectableCard = ({ children, selected, sx, onClick }) => (
  <Card
    onClick={onClick}
    elevation={selected ? 8 : 2}
    sx={{
      cursor: "pointer",
      height: "100%",
      border: "2px solid",
      borderColor: selected ? "primary.main" : "transparent",
      transform: selected ? "scale(1.03)" : "none",
      transition:
        "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        transform: "scale(1.03)",
        borderColor: "rgba(136,78,217,0.5)",
      },
      ...sx,
    }}
  >
    <CardContent
      sx={{ display: "flex", flexDirection: "column", height: "100%", p: 3 }}
    >
      {children}
    </CardContent>
  </Card>
);

SelectableCard.propTypes = {
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool,
  sx: PropTypes.object,
  onClick: PropTypes.func,
};
SelectableCard.defaultProps = {
  selected: false,
  sx: {},
  onClick: undefined,
};
const MemoizedSelectableCard = React.memo(SelectableCard);

const PlatformTier = ({ selectedTier, setSelectedTier, nextStep }) => {
  return (
    <Fade in timeout={500}>
      <Box>
        <Chip
          label="Package Type"
          color="primary"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <Typography variant="h2" gutterBottom>
          Choose Your Package
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Choose the functionality you need for your brand identity.
        </Typography>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          {platformTiers.map((tier) => (
            <Grid item xs={12} md={4} key={tier.id}>
              <MemoizedSelectableCard
                selected={selectedTier === tier.id}
                onClick={() => setSelectedTier(tier.id)}
                sx={{ height: "100%" }}
              >
                <Typography variant="h6" component="h3">
                  {tier.name}
                </Typography>
                <Typography
                  variant="h5"
                  component="p"
                  color="primary"
                  sx={{ my: 1 }}
                >
                  {tier.price}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {tier.description}
                </Typography>

                <List dense sx={{ mt: 2, p: 0 }}>
                  {tier.features.map((feature, index) => (
                    <ListItem key={index} disableGutters sx={{ p: 0 }}>
                      <ListItemIcon sx={{ minWidth: 24 }}>
                        <Check size={16} color={theme.palette.success.main} />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>
              </MemoizedSelectableCard>
            </Grid>
          ))}
        </Grid>

        <Box display="flex" gap={2}>
          <Button
            variant="contained"
            onClick={nextStep}
            disabled={!selectedTier}
            endIcon={<ChevronRight />}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Fade>
  );
};

PlatformTier.propTypes = {
  selectedTier: PropTypes.string,
  setSelectedTier: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};
const MemoizedPlatformTier = React.memo(PlatformTier);

const FinalSummary = ({
  selectedTier,
  name,
  setName,
  email,
  setEmail,
  additionalNotes,
  setAdditionalNotes,
  keywords,
  setKeywords,
  selectedSystems,
  setSelectedSystems,
  selectedDashboards,
  setSelectedDashboards,
  prevStep,
  handleCheckout,
  isProcessing,
  stripeConfigured,
}) => {
  const tierSelection = platformTiers.find((t) => t.id === selectedTier);
  const priceDisplay = tierSelection?.price || "€0";

  return (
    <Fade in timeout={500}>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={8}>
          <Chip
            label="Final Step: Review & Purchase"
            color="primary"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <Typography variant="h2" gutterBottom>
            Confirm Your Configuration
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Review your selections and provide your details to proceed.
          </Typography>

          <Card>
            <CardContent
              sx={{ display: "flex", flexDirection: "column", gap: 4, p: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Keywords (comma-separated)"
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Systems (e.g. CRM)"
                    value={selectedSystems}
                    onChange={(e) => setSelectedSystems(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Dashboards (e.g. Sales)"
                    value={selectedDashboards}
                    onChange={(e) => setSelectedDashboards(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="Additional Notes"
                    value={additionalNotes}
                    onChange={(e) => setAdditionalNotes(e.target.value)}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Card sx={{ position: "sticky", top: "24px" }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6">Your Summary</Typography>
              <Divider sx={{ my: 2 }} />

              <Box display="flex" flexDirection="column" gap={1}>
                {tierSelection ? (
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="subtitle2">Package Tier:</Typography>
                    <Typography variant="subtitle1">
                      {tierSelection.name}
                    </Typography>
                  </Box>
                ) : (
                  <Typography variant="body2" color="text.secondary">
                    No package selected
                  </Typography>
                )}
              </Box>

              <Box mt={3} pt={2} borderTop={1} borderColor="divider">
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="baseline"
                >
                  <Typography variant="h6">Total Price:</Typography>
                  <Typography variant="h5" fontWeight="bold" sx={gradientText}>
                    {priceDisplay}
                  </Typography>
               
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="baseline"
                >
                  <Typography variant="h6">Deposit Price:</Typography>
                  
                  <Typography variant="h5" fontWeight="bold" sx={gradientText}>
                  {applyDiscount(Number(priceDisplay.replace(/[^\d.]/g, '')))}
                  </Typography>
                
                </Box>
                <Typography variant="caption" color="success.main" display="block" textAlign="right" mt={1}>
                    {(Number(priceDisplay.replace(/[^\d.]/g, ''))) < 1000
                      ? "50% deposit applied"
                      : "20% deposit applied"}
                  </Typography>
              </Box>

              <Box mt={3} display="flex" flexDirection="column" gap={2}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleCheckout}
                  disabled={
                    isProcessing || !name || !email || !stripeConfigured
                  }
                  startIcon={
                    isProcessing ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : null
                  }
                >
                  {isProcessing
                    ? "Processing..."
                    : stripeConfigured
                      ? "Proceed to Checkout"
                      : "Checkout Unavailable"}
                </Button>

                <Button
                  variant="outlined"
                  fullWidth
                  onClick={prevStep}
                  startIcon={<ChevronLeft />}
                >
                  Back
                </Button>

                {!stripeConfigured && (
                  <Typography variant="caption" color="error" sx={{ mt: 1 }}>
                    Stripe publishable key not configured. Set
                    VITE_STRIPE_PUBLISHABLE_KEY in your .env.
                  </Typography>
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fade>
  );
};

FinalSummary.propTypes = {
  selectedTier: PropTypes.string,
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  additionalNotes: PropTypes.string,
  setAdditionalNotes: PropTypes.func.isRequired,
  keywords: PropTypes.string,
  setKeywords: PropTypes.func.isRequired,
  selectedSystems: PropTypes.string,
  setSelectedSystems: PropTypes.func.isRequired,
  selectedDashboards: PropTypes.string,
  setSelectedDashboards: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  handleCheckout: PropTypes.func.isRequired,
  isProcessing: PropTypes.bool.isRequired,
  stripeConfigured: PropTypes.bool.isRequired,
};
FinalSummary.defaultProps = {
  additionalNotes: "",
  keywords: "",
  selectedSystems: "",
  selectedDashboards: "",
  selectedTier: null,
};

const MemoizedFinalSummary = React.memo(FinalSummary);

const Packages = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTier, setSelectedTier] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [keywords, setKeywords] = useState("");
  const [selectedSystems, setSelectedSystems] = useState("");
  const [selectedDashboards, setSelectedDashboards] = useState("");

  const [showToast, setShowToast] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const wizardRef = useRef(null);
  const stripeConfigured = Boolean(STRIPE_KEY && stripePromise);

  useEffect(() => {
    try {
      const saved = JSON.parse(
        localStorage.getItem("quoteBuilderState") || "{}"
      );
      if (saved) {
        if (saved.currentStep) setCurrentStep(saved.currentStep);
        if (saved.selectedTier) setSelectedTier(saved.selectedTier);
        if (saved.name) setName(saved.name);
        if (saved.email) setEmail(saved.email);
      }
    } catch (e) {
      /* ignore parse errors */
    }
  }, []);

  useEffect(() => {
    const stateToSave = {
      currentStep,
      selectedTier,
      name,
      email,
    };
    try {
      localStorage.setItem("quoteBuilderState", JSON.stringify(stateToSave));
    } catch (e) {
      // ignore storage errors
    }
  }, [currentStep, selectedTier, name, email]);

  const showToastMessage = useCallback((message) => {
    setShowToast(message);
    window.setTimeout(() => setShowToast(null), 4000);
  }, []);

  const steps = ["Package Type", "Review"];
  const nextStep = useCallback(() => {
    setCurrentStep((s) => {
      const next = Math.min(s + 1, steps.length);
      setTimeout(
        () => wizardRef.current?.scrollIntoView({ behavior: "smooth" }),
        50
      );
      return next;
    });
  }, []);
  const prevStep = useCallback(() => {
    setCurrentStep((s) => {
      const prev = Math.max(s - 1, 1);
      setTimeout(
        () => wizardRef.current?.scrollIntoView({ behavior: "smooth" }),
        50
      );
      return prev;
    });
  }, []);

  const resetSelections = useCallback(() => {
    setCurrentStep(1);
    setSelectedTier(null);
    setName("");
    setEmail("");
    setAdditionalNotes("");
    setKeywords("");
    setSelectedSystems("");
    setSelectedDashboards("");
    showToastMessage("Selections have been reset.");
  }, [showToastMessage]);

  const handleCheckout = useCallback(
    async (ev) => {
      ev?.preventDefault?.();
      if (!name || !email) {
        showToastMessage("Error: Please enter your name and email to proceed.");
        return;
      }
      if (!selectedTier) {
        showToastMessage("Error: Please select a package tier.");
        return;
      }
      if (!stripeConfigured) {
        showToastMessage("Error: Stripe is not configured.");
        return;
      }

      const tierSelection = platformTiers.find((t) => t.id === selectedTier);
      const priceValue = extractNumericPrice(tierSelection?.price);

      setIsProcessing(true);
      try {
        const checkoutData = {
          name,
          email,
          price: applyDiscount(priceValue),
          serviceType: tierSelection?.id || "unknown",
          notes:
            `${additionalNotes || ""} | Selected Systems: ${selectedSystems || "None"} | Dashboards: ${
              selectedDashboards || "None"
            } | Keywords: ${keywords || "None"}`.trim(),
        };

        const session = await createCheckoutSession(checkoutData);
        if (!session || !session.id)
          throw new Error("Invalid checkout session response");

        const stripe = await stripePromise;
        if (!stripe) throw new Error("Stripe.js failed to load");

        const { error } = await stripe.redirectToCheckout({
          sessionId: session.id,
        });
        if (error) throw new Error(error.message || "Stripe redirect error");
      } catch (err) {
        console.error("Checkout error:", err);
        showToastMessage(`Error: ${err.message || "Unknown error occurred"}`);
      } finally {
        setIsProcessing(false);
      }
    },
    [
      name,
      email,
      selectedTier,
      stripeConfigured,
      showToastMessage,
      additionalNotes,
      selectedSystems,
      selectedDashboards,
      keywords,
    ]
  );

  const renderStepContent = () => {
    if (currentStep === steps.length) {
      return (
        <MemoizedFinalSummary
          selectedTier={selectedTier}
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
          isProcessing={isProcessing}
          stripeConfigured={stripeConfigured}
        />
      );
    }

    return (
      <MemoizedPlatformTier
        selectedTier={selectedTier}
        setSelectedTier={setSelectedTier}
        nextStep={nextStep}
      />
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          background: theme.palette.background.default,
          color: "text.primary",
        }}
      >
        <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }} ref={wizardRef}>
          <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
            <Typography variant="h1" gutterBottom>
              Select Your Campaign Package
            </Typography>

            <Button
              onClick={resetSelections}
              startIcon={<RefreshCw size={16} />}
              sx={{ mt: 3, color: "text.secondary" }}
            >
              Start Over
            </Button>
          </Box>

          <Stepper
            activeStep={currentStep - 1}
            alternativeLabel
            sx={{ mb: { xs: 5, md: 7 } }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <div className="my-container">{renderStepContent()}</div>
        </Container>

        <Snackbar
          open={!!showToast}
          autoHideDuration={6000}
          onClose={() => setShowToast(null)}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            onClose={() => setShowToast(null)}
            severity={
              showToast && showToast.toLowerCase().includes("error")
                ? "error"
                : "success"
            }
            sx={{ width: "100%" }}
            variant="filled"
          >
            {showToast}
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
};

export default Packages;