import { useState, useEffect, useCallback, useMemo } from "react";
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
  CircularProgress,
  Snackbar,
  Alert,
  TextField,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Fade,
} from "@mui/material";
import {
  ChevronRight,
  ChevronLeft,
  Check,
  RefreshCw,
  TrendingUp,
} from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import { theme } from "../../theme.js";

// STRIPE INITIALIZATION
const stripePromise = loadStripe(
  "pk_test_51OsCJ5P1A39VkufThp1PVDexesvf2XAY8faTyK0uucC1qRl9NW9QkpBdwXQDyjCAjzL166zjMWNn5Zr25ZkaQJVi00vurq61mj"
);


const industries = [
  {
    id: "restaurant",
    name: "Restaurant & Food",
    icon: "🍽️",
    examples: "Restaurants, Takeaways, Cafes",
  },
  {
    id: "retail",
    name: "Retail & E-commerce",
    icon: "🛍️",
    examples: "Shops, Online Stores, Boutiques",
  },
  {
    id: "services",
    name: "Professional Services",
    icon: "💼",
    examples: "Consulting, Legal, Financial",
  },
  {
    id: "hospitality",
    name: "Hospitality & Events",
    icon: "🏨",
    examples: "Hotels, Venues, Tourism",
  },
  {
    id: "property",
    name: "Property & Real Estate",
    icon: "🏠",
    examples: "Agents, Management, Development",
  },
  {
    id: "other",
    name: "Other Industry",
    icon: "🚀",
    examples: "Tell us about your business",
  },
];
const goals = [
  {
    id: "fees",
    name: "Eliminate Platform Fees",
    icon: "💰",
    description: "Stop paying 20-35% commission",
    savings: "Save £1,000-5,000/month",
  },
  {
    id: "brand",
    name: "Build Brand Identity",
    icon: "🎨",
    description: "Create unique digital presence",
    savings: "73% better brand recall",
  },
  {
    id: "automation",
    name: "Automate Operations",
    icon: "⚡",
    description: "Streamline workflows",
    savings: "15-20 hours/week saved",
  },
  {
    id: "scale",
    name: "Scale Your Business",
    icon: TrendingUp,
    description: "Systems that grow with you",
    savings: "Multi-location ready",
  },
  {
    id: "customers",
    name: "Own Customer Relationships",
    icon: "👥",
    description: "Direct customer connection",
    savings: "Build lasting loyalty",
  },
  {
    id: "insights",
    name: "Data-Driven Decisions",
    icon: "📊",
    description: "Analytics for growth",
    savings: "Real-time dashboards",
  },
];
const platformTiers = [
  {
    id: "foundation",
    name: "Foundation",
    minPrice: 600,
    maxPrice: 1000,
    features: [
      "Professional Website",
      "Mobile Responsive",
      "Basic SEO",
      "Contact Forms",
      "Social Media Links",
    ],
  },
  {
    id: "full",
    name: "Full System",
    minPrice: 1200,
    maxPrice: 2000,
    features: [
      "Everything in Foundation",
      "Complete Ordering System",
      "Customer Database",
      "Email Automation",
      "Payment Processing",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    minPrice: 1800,
    maxPrice: 3000,
    features: [
      "Everything in Full System",
      "Advanced Analytics",
      "Multi-location Support",
      "API Access",
      "AI Predictions",
    ],
  },
];

const gradientText = {
  background: "linear-gradient(to right, #6E3EF4, #3B82F6)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  display: "inline-block",
};


const SelectableCard = ({ children, selected, ...props }) => (
  <Card
    {...props}
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
      ...props.sx,
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
  children: PropTypes.node,
  selected: PropTypes.bool,
  sx: PropTypes.object,
};

const IndustryStep = ({ selectedIndustry, setSelectedIndustry, nextStep }) => (
  <Fade in timeout={500}>
    <Box>
      <Chip
        label="Step 1: Your Industry"
        color="primary"
        variant="outlined"
        sx={{ mb: 2 }}
      />
      <Typography variant="h2" gutterBottom>
        What industry is your business in?
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        This helps us tailor our recommendations for you.
      </Typography>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {industries.map((industry) => (
          <Grid item xs={12} sm={6} md={4} key={industry.id}>
            <SelectableCard
              selected={selectedIndustry === industry.id}
              onClick={() => setSelectedIndustry(industry.id)}
            >
              <Typography
                variant="h3"
                component="p"
                sx={{ fontSize: "3rem", mb: 2 }}
              >
                {industry.icon}
              </Typography>
              <Typography variant="h6" component="h3" gutterBottom>
                {industry.name}
              </Typography>
              <Typography variant="body1">{industry.examples}</Typography>
            </SelectableCard>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        onClick={nextStep}
        disabled={!selectedIndustry}
        endIcon={<ChevronRight />}
      >
        Continue
      </Button>
    </Box>
  </Fade>
);
IndustryStep.propTypes = {
  selectedIndustry: PropTypes.string,
  setSelectedIndustry: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

const GoalsStep = ({ selectedGoals, setSelectedGoals, nextStep, prevStep }) => {
  const toggleGoal = (goalId) => {
    setSelectedGoals((prev) =>
      prev.includes(goalId)
        ? prev.filter((g) => g !== goalId)
        : [...prev, goalId]
    );
  };
  return (
    <Fade in timeout={500}>
      <Box>
        <Chip
          label="Step 2: Your Goals"
          color="primary"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <Typography variant="h2" gutterBottom>
          What are your primary business goals?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Select all that apply. This helps us suggest the right features.
        </Typography>
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {goals.map((goal) => (
            <Grid item xs={12} sm={6} md={4} key={goal.id}>
              <SelectableCard
                selected={selectedGoals.includes(goal.id)}
                onClick={() => toggleGoal(goal.id)}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                    background:
                      "linear-gradient(to bottom right, #E0E7FF, #DDD4EF)",
                  }}
                >
                  {typeof goal.icon === "string" ? (
                    <Typography sx={{ fontSize: "2rem" }}>
                      {goal.icon}
                    </Typography>
                  ) : (
                    <goal.icon
                      style={{
                        color: theme.palette.primary.main,
                        width: 28,
                        height: 28,
                      }}
                    />
                  )}
                </Box>
                <Typography variant="h6" component="h3" gutterBottom>
                  {goal.name}
                </Typography>
                <Typography variant="body1" sx={{ flexGrow: 1 }}>
                  {goal.description}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="success.main"
                  fontWeight="bold"
                  sx={{ mt: 2 }}
                >
                  {goal.savings}
                </Typography>
              </SelectableCard>
            </Grid>
          ))}
        </Grid>
        <Box display="flex" gap={2}>
          <Button
            variant="outlined"
            onClick={prevStep}
            startIcon={<ChevronLeft />}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={nextStep}
            disabled={selectedGoals.length === 0}
            endIcon={<ChevronRight />}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Fade>
  );
};
GoalsStep.propTypes = {
  selectedGoals: PropTypes.array.isRequired,
  setSelectedGoals: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

const PlatformTier = ({
  selectedTier,
  setSelectedTier,
  recommendations,
  nextStep,
  prevStep,
}) => (
  <Fade in timeout={500}>
    <Box>
      <Chip
        label="Step 3: Platform Tier"
        color="primary"
        variant="outlined"
        sx={{ mb: 2 }}
      />
      <Typography variant="h2" gutterBottom>
        Select Your Platform Tier
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Choose the functionality you need for your website or digital platform.
      </Typography>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {platformTiers.map((tier) => (
          <Grid item xs={12} md={4} key={tier.id}>
            <SelectableCard
              selected={selectedTier === tier.id}
              onClick={() => setSelectedTier(tier.id)}
            >
              {recommendations.tierRec === tier.id && (
                <Chip
                  label="Recommended"
                  size="small"
                  sx={{ bgcolor: "#3B82F6", color: "white", mb: 2 }}
                />
              )}
              <Typography variant="h6" component="h3">
                {tier.name}
              </Typography>
              <Typography
                variant="h5"
                component="p"
                color="primary"
                sx={{ my: 1 }}
              >
                £{tier.minPrice} - £{tier.maxPrice}
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
          variant="outlined"
          onClick={prevStep}
          startIcon={<ChevronLeft />}
        >
          Back
        </Button>
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
  recommendations: PropTypes.object.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

const FinalSummary = ({
  selectedTier,
  selectedIndustry,
  name,
  setName,
  email,
  setEmail,
  additionalNotes,
  setAdditionalNotes,
  prevStep,
  handleCheckout,
  isProcessing,
  calculatePrice,
}) => {
  const tierSelection = platformTiers.find((t) => t.id === selectedTier);
  const industrySelection = industries.find((i) => i.id === selectedIndustry);
  const finalPrice = calculatePrice();
  return (
    <Fade in timeout={500}>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={8}>
          <Chip
            label="Step 4: Review & Purchase"
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
                <Typography variant="h6" component="h3" gutterBottom>
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
                <Typography variant="h6" component="h3" gutterBottom>
                  Optional Notes
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Additional Notes or Requirements"
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card sx={{ position: "sticky", top: "24px" }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" component="h3" gutterBottom>
                Your Summary
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Box display="flex" flexDirection="column" gap={1}>
                {industrySelection && (
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle2">Industry:</Typography>
                    <Typography variant="subtitle1">
                      {industrySelection.name}
                    </Typography>
                  </Box>
                )}
                {tierSelection && (
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle2">Platform Tier:</Typography>
                    <Typography variant="subtitle1">
                      {tierSelection.name}
                    </Typography>
                  </Box>
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
                    £{finalPrice.toLocaleString()}
                  </Typography>
                </Box>
              </Box>
              <Box mt={3} display="flex" flexDirection="column" gap={2}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleCheckout}
                  disabled={isProcessing || !name || !email}
                  startIcon={
                    isProcessing ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : null
                  }
                >
                  {isProcessing ? "Processing..." : "Proceed to Checkout"}
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
  selectedIndustry: PropTypes.string,
  name: PropTypes.string,
  setName: PropTypes.func,
  email: PropTypes.string,
  setEmail: PropTypes.func,
  additionalNotes: PropTypes.string,
  setAdditionalNotes: PropTypes.func,
  prevStep: PropTypes.func,
  handleCheckout: PropTypes.func,
  isProcessing: PropTypes.bool,
  calculatePrice: PropTypes.func,
};


const WebDevWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [selectedTier, setSelectedTier] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showToast, setShowToast] = useState(null);

  const steps = ["Industry", "Goals", "Platform Tier", "Review & Purchase"];

  useEffect(() => {
    const savedState = localStorage.getItem("webDevQuoteState");
    if (savedState) {
      const parsed = JSON.parse(savedState);
      setCurrentStep(parsed.currentStep || 1);
      setSelectedIndustry(parsed.selectedIndustry || null);
      setSelectedGoals(parsed.selectedGoals || []);
      setSelectedTier(parsed.selectedTier || null);
    }
  }, []);

  useEffect(() => {
    const stateToSave = {
      currentStep,
      selectedIndustry,
      selectedGoals,
      selectedTier,
    };
    localStorage.setItem("webDevQuoteState", JSON.stringify(stateToSave));
  }, [currentStep, selectedIndustry, selectedGoals, selectedTier]);

  const calculatePrice = useCallback(() => {
    if (!selectedTier) return 0;
    const tier = platformTiers.find((t) => t.id === selectedTier);
    return tier ? Math.round((tier.minPrice + tier.maxPrice) / 2) : 0;
  }, [selectedTier]);

  const showToastMessage = useCallback((message) => {
    setShowToast(message);
  }, []);

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const resetSelections = useCallback(() => {
    setCurrentStep(1);
    setSelectedIndustry(null);
    setSelectedGoals([]);
    setSelectedTier(null);
    setName("");
    setEmail("");
    setAdditionalNotes("");
    localStorage.removeItem("webDevQuoteState");
    showToastMessage("Selections have been reset.");
  }, [showToastMessage]);

  const recommendations = useMemo(() => {
    let tierRec = "full";
    if (
      selectedGoals.includes("automation") &&
      selectedGoals.includes("insights")
    )
      tierRec = "premium";
    else if (selectedGoals.length <= 1 && !selectedGoals.includes("scale"))
      tierRec = "foundation";
    return { tierRec };
  }, [selectedGoals]);

  const handleCheckout = useCallback(async () => {
    if (!name || !email) {
      showToastMessage("Error: Please enter your name and email.");
      return;
    }
    setIsProcessing(true);

    const payload = {
      name,
      email,
      serviceType: "web_development",
      price: calculatePrice(),
      targetAudience:
        industries.find((i) => i.id === selectedIndustry)?.name ||
        "Not specified",
      platformTier: selectedTier,
      selectedGoals: selectedGoals,
      notes: additionalNotes,
    };

    try {
      const response = await fetch(
        "https://prevail-services-e973123f8b1e.herokuapp.com/api/create-checkout-session",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Failed to create checkout session."
        );
      }

      const session = await response.json();
      const stripe = await stripePromise;
      if (!stripe) throw new Error("Stripe.js has not loaded.");

      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      if (error) throw new Error(error.message);
    } catch (error) {
      showToastMessage(
        `Error: ${error.message ?? "An unknown error occurred."}`
      );
    } finally {
      setIsProcessing(false);
    }
  }, [
    name,
    email,
    selectedIndustry,
    selectedGoals,
    selectedTier,
    additionalNotes,
    calculatePrice,
    showToastMessage,
  ]);

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <IndustryStep
            {...{ selectedIndustry, setSelectedIndustry, nextStep }}
          />
        );
      case 2:
        return (
          <GoalsStep
            {...{ selectedGoals, setSelectedGoals, nextStep, prevStep }}
          />
        );
      case 3:
        return (
          <PlatformTier
            {...{
              selectedTier,
              setSelectedTier,
              recommendations,
              nextStep,
              prevStep,
            }}
          />
        );
      case 4:
        return (
          <FinalSummary
            {...{
              selectedTier,
              selectedIndustry,
              name,
              setName,
              email,
              setEmail,
              additionalNotes,
              setAdditionalNotes,
              prevStep,
              handleCheckout,
              isProcessing,
              calculatePrice,
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          background: theme.palette.background.default,
          color: "text.primary",
          overflowX: "hidden",
        }}
      >
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
          <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
            <Typography variant="h1" component="h1" gutterBottom>
              Build Your{" "}
              <Box component="span" sx={gradientText}>
                Digital Platform
              </Box>
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: "720px", mx: "auto" }}
            >
              Follow the steps to configure and purchase your new web
              development package.
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
          <Box>{renderStepContent()}</Box>
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

export default WebDevWizard;
