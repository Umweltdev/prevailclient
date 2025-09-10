import { useState, useCallback, useRef } from "react";
import PropTypes from "prop-types";
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
  CardActionArea,
} from "@mui/material";
import { ChevronRight, ChevronLeft, Check, RefreshCw } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";

import { theme } from "../../stepWizard/theme.js";
import { createCheckoutSession } from "../../stepWizard/api.js";
import "./assets/style.css";
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

const stripeConfigured = Boolean(STRIPE_KEY && stripePromise);

const platformTiers = [
  {
    id: "Starter",
    name: "Starter Brand Identity Package",
    price: 500,
    features: [
      "Logo design concept (up to 2 proposals)",
      "Colour scheme",
      "Typography",
      "Business card",
      "Letterhead design or invoice design",
      "Questionnaire submission",
      "Style scope",
      "X1 revision",
    ],
  },
  {
    id: "Premium",
    name: "Premium Brand Identity Package",
    price: 750,
    features: [
      "Logo design concept (up to 2 proposals)",
      "Colour scheme",
      "Typography",
      "Business card",
      "Letterhead design or invoice design",
      "Questionnaire submission",
      "Style scope",
      "Dos and don’ts",
      "Up to X3 marketing material",
      "X2 revision",
    ],
  },
  {
    id: "Elite",
    name: "Elite Brand Identity Package",
    price: 1000,
    features: [
      "Logo design concept (up to 2 proposals)",
      "Colour scheme",
      "Typography",
      "Business card",
      "Letterhead design or invoice design",
      "Questionnaire submission",
      "Style scope",
      "Dos and don’ts",
      "Up to X5 marketing material",
      "X4 revision (up to proposals)",
      "Brand personality overview",
      "Printing guide",
      "Digital asset guide",
      "1-hour consultation meeting",
    ],
  },
];

const gradientText = {
  background: "linear-gradient(to right, #6E3EF4, #3B82F6)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  display: "inline-block",
};

const SelectableCard = ({ children, selected, sx, onClick }) => (
  <Card
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
        borderColor: "rgba(136, 78, 217, 0.5)",
      },
      ...sx,
    }}
  >
    <CardActionArea onClick={onClick} sx={{ height: "100%" }}>
      <CardContent
        sx={{ display: "flex", flexDirection: "column", height: "100%", p: 3 }}
      >
        {children}
      </CardContent>
    </CardActionArea>
  </Card>
);

SelectableCard.propTypes = {
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool,
  sx: PropTypes.object,
  onClick: PropTypes.func,
};

const PlatformTier = ({ selectedTier, setSelectedTier, nextStep }) => (
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
            <SelectableCard
              selected={selectedTier === tier.id}
              onClick={() => setSelectedTier(tier.id)}
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
                €{tier.price}
              </Typography>
              <List dense sx={{ mt: 2, p: 0 }}>
                {tier.features.map((feature) => (
                  <ListItem key={feature} disableGutters sx={{ p: 0 }}>
                    <ListItemIcon sx={{ minWidth: 24 }}>
                      <Check size={16} color={theme.palette.success.main} />
                    </ListItemIcon>
                    <ListItemText primary={feature} />
                  </ListItem>
                ))}
              </List>
            </SelectableCard>
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

PlatformTier.propTypes = {
  selectedTier: PropTypes.string,
  setSelectedTier: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

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
}) => {
  const tierSelection = platformTiers.find((t) => t.id === selectedTier);

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
              <Box>
                <Typography variant="h6" gutterBottom>
                  Your Details
                </Typography>
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
              </Box>

              <Box>
                <Typography variant="h6" gutterBottom>
                  Optional Customization
                </Typography>
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
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Card sx={{ position: "sticky", top: "24px" }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Your Summary
              </Typography>
              <Divider sx={{ my: 2 }} />

              {tierSelection && (
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
              )}

              <Box mt={3} pt={2} borderTop={1} borderColor="divider">
                {tierSelection && (
                  <>
                   
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="baseline"
                    >
                      <Typography variant="subtitle2" color="text.secondary">
                        Original Price:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ textDecoration: "line-through", opacity: 0.7 }}
                      >
                        €{tierSelection.price}
                      </Typography>
                    </Box>

                   
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="baseline"
                      mt={1}
                    >
                      <Typography variant="h6">Discounted Price:</Typography>
                      <Typography variant="h5" fontWeight="bold" sx={gradientText}>
                        €{applyDiscount(tierSelection.price)}
                      </Typography>
                    </Box>

                    <Typography
                      variant="caption"
                      color="success.main"
                      display="block"
                      textAlign="right"
                      mt={1}
                    >
                      {tierSelection.price < 1000
                        ? "20% discount applied"
                        : "50% discount applied"}
                    </Typography>
                  </>
                )}
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
                      : "Checkout Disabled"}
                </Button>

                <Button
                  variant="outlined"
                  fullWidth
                  disabled={!tierSelection}
                  onClick={() =>
                    window.open(
                      "https://calendly.com/your-consultation-link",
                      "_blank"
                    )
                  }
                >
                  Book a Consultation
                </Button>

                <Button
                  variant="outlined"
                  fullWidth
                  onClick={prevStep}
                  startIcon={<ChevronLeft />}
                >
                  Back
                </Button>
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
  isProcessing: PropTypes.bool,
};

const StepWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showToast, setShowToast] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [keywords, setKeywords] = useState("");
  const [selectedSystems, setSelectedSystems] = useState("");
  const [selectedTier, setSelectedTier] = useState(null);
  const [selectedDashboards, setSelectedDashboards] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const wizardRef = useRef(null);

  const showToastMessage = (message) => {
    setShowToast(message);
    setTimeout(() => setShowToast(null), 3000);
  };

  const steps = ["Package Type", "Review"];

  const nextStep = useCallback(() => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    setTimeout(
      () => wizardRef.current?.scrollIntoView({ behavior: "smooth" }),
      50
    );
  }, [steps.length]);

  const prevStep = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    setTimeout(
      () => wizardRef.current?.scrollIntoView({ behavior: "smooth" }),
      50
    );
  }, []);

  const resetSelections = () => {
    setCurrentStep(1);
    setSelectedTier(null);
    setName("");
    setEmail("");
    setAdditionalNotes("");
    setKeywords("");
    setSelectedSystems("");
    setSelectedDashboards("");
    showToastMessage("Selections have been reset.");
  };

  const tierSelection = platformTiers.find((t) => t.id === selectedTier);

  const handleCheckout = useCallback(async () => {
    if (!name || !email) {
      showToastMessage("Error: Please enter your name and email to proceed.");
      return;
    }

    if (!stripeConfigured) {
      showToastMessage("Error: Stripe is not configured.");
      return;
    }

    setIsProcessing(true);
    try {
      const finalPrice = tierSelection.price;
      const checkoutData = {
        name,
        email,
        price: applyDiscount(finalPrice),
        serviceType: tierSelection.id,
        notes:
          `${additionalNotes || ""} | Systems: ${selectedSystems || "None"} | Dashboards: ${selectedDashboards || "None"} | Keywords: ${keywords || "None"}`.trim(),
      };

      const session = await createCheckoutSession(checkoutData);
      const stripe = await stripePromise;
      if (!stripe) throw new Error("Stripe.js has not loaded yet.");

      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      if (error) throw new Error(error.message);
    } catch (error) {
      console.error("Checkout error:", error);
      showToastMessage(`Error: ${error.message || "Unknown error occurred"}`);
    } finally {
      setIsProcessing(false);
    }
  }, [
    name,
    email,
    tierSelection,
    additionalNotes,
    keywords,
    selectedSystems,
    selectedDashboards,
  ]);

  const renderStepContent = () => {
    if (currentStep === steps.length) {
      return (
        <FinalSummary
          {...{
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
          }}
        />
      );
    }
    return <PlatformTier {...{ selectedTier, setSelectedTier, nextStep }} />;
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          background: theme.palette.background.default,
          color: "text.primary",
        }}
      >
        <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }} ref={wizardRef}>
          <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
            <Typography variant="h1" gutterBottom>
              Your Partner in Accelerating the
              <Box component="span" sx={gradientText}>
                Digital Space
              </Box>
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: "720px", mx: "auto" }}
            >
              Our goal is to help businesses thrive by providing innovative and
              holistic solutions.
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

          {renderStepContent()}
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
              showToast?.toLowerCase().includes("error") ? "error" : "success"
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

export default StepWizard;
