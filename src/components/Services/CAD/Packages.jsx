import { useState, useCallback, useEffect, useRef } from "react";
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
  Paper,
  Stack,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { ChevronRight, ChevronLeft, Check, Refresh } from "@mui/icons-material";
import AddTaskIcon from "@mui/icons-material/AddTask";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { loadStripe } from "@stripe/stripe-js";
import PropTypes from "prop-types";
import { createCheckoutSession } from "../../stepWizard/api.js";
import { theme } from "../../../theme.js";

const STRIPE_KEY = import.meta.env.VITE_STRIPE_PUBLIC_KEY || "";
let stripePromise = STRIPE_KEY ? loadStripe(STRIPE_KEY) : null;

const platformTiers = [
  {
    id: "starter",
    name: "Starter Campaign",
    price: "€350",
    description:
      "Best for small businesses starting digital campaigns with focused reach.",
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
    features: [
      "Customer Insight: Deluxe segmentation (demographic, geographic, psychographic, behavioural + 2 buyer personas)",
      "Market Research: In-depth competitor benchmarking + keyword research (40+ keywords, trend analysis)",
      "Campaign Management: 3x Google Ads campaigns with ongoing optimization (2 adjustments)",
      "Ad Design: Up to 10 premium ad designs (with strategic copywriting)",
      "Analytics: Detailed analytics dashboard + next-step recommendations",
    ],
  },
];

const extractNumericPrice = (priceStr) =>
  priceStr ? parseInt(priceStr.replace(/[^\d]/g, ""), 10) || 0 : 0;

const PriceRow = ({ label, amount, isTotal = false }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <Typography
      variant={isTotal ? "h6" : "body1"}
      sx={{ fontWeight: isTotal ? "bold" : "regular" }}
    >
      {label}
    </Typography>
    <Typography
      variant={isTotal ? "h6" : "body1"}
      sx={{
        fontWeight: isTotal ? "bold" : "medium",
        color: "text.primary",
      }}
    >
      {amount}
    </Typography>
  </Box>
);
PriceRow.propTypes = {
  label: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  isTotal: PropTypes.bool,
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
SelectableCard.defaultProps = { selected: false, sx: {}, onClick: undefined };

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
              sx={{ height: "100%" }}
            >
              <Typography variant="h6">{tier.name}</Typography>
              <Typography variant="h5" color="primary" sx={{ my: 1 }}>
                {tier.price}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                {tier.description}
              </Typography>
              <List dense sx={{ mt: 2, p: 0 }}>
                {tier.features.map((feature, index) => (
                  <ListItem key={index} disableGutters sx={{ p: 0 }}>
                    <ListItemIcon sx={{ minWidth: 24 }}>
                      <Check sx={{ fontSize: 16, color: "success.main" }} />
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
  includeConsultation,
  setIncludeConsultation,
  prevStep,
  handlePayment,
  isProcessing,
  processingAction,
  stripeConfigured,
}) => {
  const tierSelection = platformTiers.find((t) => t.id === selectedTier);
  const packagePrice = extractNumericPrice(tierSelection?.price);
  const CONSULTATION_FEE = 99;

  return (
    <Fade in timeout={500}>
      <Grid container spacing={{ xs: 3, md: 5 }} alignItems="flex-start">
        <Grid item xs={12} md={7}>
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
            Review your selections, provide your details, and choose how to
            proceed.
          </Typography>
          <Card sx={{ mb: 4 }}>
            <CardContent
              sx={{ p: 3, display: "flex", flexDirection: "column", gap: 3 }}
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
          <Button
            variant="outlined"
            onClick={prevStep}
            startIcon={<ChevronLeft />}
            disabled={isProcessing}
          >
            Back to Package Selection
          </Button>
        </Grid>
        <Grid item xs={12} md={5}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 4,
              background: (theme) =>
                `linear-gradient(145deg, ${theme.palette.grey[100]} 0%, #ffffff 100%)`,
              boxShadow: "0 8px 32px 0 rgba(0,0,0,0.05)",
              position: "sticky",
              top: "24px",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Complete Your Order
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mt: 1, mb: 3 }}
            >
              Confirm your total and choose your next step.
            </Typography>
            <Paper variant="outlined" sx={{ p: 3, borderRadius: 3, mb: 3 }}>
              <Stack spacing={1.5}>
                <PriceRow
                  label="Project Subtotal"
                  amount={`€${packagePrice.toLocaleString()}`}
                />
                <Divider sx={{ my: 1 }} />
                <PriceRow
                  label="Total to Pay"
                  amount={`€${packagePrice.toLocaleString()}`}
                  isTotal
                />
              </Stack>
            </Paper>
            <FormControlLabel
              control={
                <Switch
                  checked={includeConsultation}
                  onChange={(e) => setIncludeConsultation(e.target.checked)}
                  color="primary"
                />
              }
              label={
                <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                  Add FREE 1-on-1 Consultation
                </Typography>
              }
              sx={{ mb: 3 }}
            />
            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={() => handlePayment("full")}
              disabled={isProcessing || !name || !email || !stripeConfigured}
              startIcon={
                isProcessing && processingAction === "full" ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  <AddTaskIcon />
                )
              }
              sx={{ py: 1.5, textTransform: "none", fontSize: "1.1rem", mb: 2 }}
            >
              {isProcessing && processingAction === "full"
                ? "Processing..."
                : "Pay & Start Project"}
            </Button>
            <Divider sx={{ my: 2 }}>OR</Divider>

            <Button
              fullWidth
              variant="text"
              onClick={() => handlePayment("consultation")}
              disabled={isProcessing || !name || !email || !stripeConfigured}
              startIcon={
                isProcessing && processingAction === "consultation" ? (
                  <CircularProgress size={20} />
                ) : (
                  <EventAvailableIcon />
                )
              }
            >
              Just Book a Consultation (€{CONSULTATION_FEE})
            </Button>
            {!stripeConfigured && (
              <Typography
                variant="caption"
                color="error"
                sx={{ mt: 2, display: "block", textAlign: "center" }}
              >
                Payment processing is currently unavailable.
              </Typography>
            )}
          </Paper>
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
  includeConsultation: PropTypes.bool,
  setIncludeConsultation: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  handlePayment: PropTypes.func.isRequired,
  isProcessing: PropTypes.bool.isRequired,
  processingAction: PropTypes.string,
  stripeConfigured: PropTypes.bool.isRequired,
};

const Packages = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTier, setSelectedTier] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [keywords, setKeywords] = useState("");
  const [selectedSystems, setSelectedSystems] = useState("");
  const [selectedDashboards, setSelectedDashboards] = useState("");
  const [includeConsultation, setIncludeConsultation] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingAction, setProcessingAction] = useState(null);
  const [showToast, setShowToast] = useState(null);

  const wizardRef = useRef(null);
  const stripeConfigured = Boolean(STRIPE_KEY && stripePromise);
  const steps = ["Package Type", "Review & Pay"];

  useEffect(() => {
    try {
      const saved = JSON.parse(
        localStorage.getItem("quoteBuilderState") || "{}"
      );
      if (saved) {
        setCurrentStep(saved.currentStep || 1);
        setSelectedTier(saved.selectedTier || null);
        setName(saved.name || "");
        setEmail(saved.email || "");
        setIncludeConsultation(saved.includeConsultation || false);
      }
    } catch (err) {
      console.error("Failed to load saved quote state:", err);
    }
  }, []);

  useEffect(() => {
    const stateToSave = {
      currentStep,
      selectedTier,
      name,
      email,
      includeConsultation,
    };
    try {
      localStorage.setItem("quoteBuilderState", JSON.stringify(stateToSave));
    } catch (err) {
      console.error("Failed to save quote state:", err);
    }
  }, [currentStep, selectedTier, name, email, includeConsultation]);

  const showToastMessage = useCallback((message) => {
    setShowToast(message);
    setTimeout(() => setShowToast(null), 4000);
  }, []);

  const nextStep = useCallback(
    () => setCurrentStep((s) => Math.min(s + 1, steps.length)),
    [steps.length]
  );
  const prevStep = useCallback(
    () => setCurrentStep((s) => Math.max(s - 1, 1)),
    []
  );

  const handlePayment = useCallback(
    async (action) => {
      if (!name || !email) {
        showToastMessage("Please enter your name and email.");
        return;
      }
      if (action === "full" && !selectedTier) {
        showToastMessage("Please select a package tier.");
        return;
      }
      if (!stripeConfigured) {
        showToastMessage("Stripe is not configured.");
        return;
      }

      setIsProcessing(true);
      setProcessingAction(action);

      const tierSelection = platformTiers.find((t) => t.id === selectedTier);
      const packagePrice = extractNumericPrice(tierSelection?.price);
      const CONSULTATION_FEE = 99;

      const isFullPayment = action === "full";

      const priceToCharge = isFullPayment ? packagePrice : CONSULTATION_FEE;

      try {
        const checkoutData = {
          name,
          email,
          price: priceToCharge,
          serviceType: isFullPayment
            ? `package_${tierSelection?.id}`
            : "consultation_fee",
          notes: isFullPayment
            ? `Full package payment for ${tierSelection?.name}. ${includeConsultation ? "Free consultation included." : ""} | Keywords: ${keywords || "None"} | Systems: ${selectedSystems || "None"} | Dashboards: ${selectedDashboards || "None"} | Notes: ${additionalNotes || "None"}`
            : `Consultation booking. Related package interest: ${tierSelection?.name || "N/A"}.`,
        };

        const session = await createCheckoutSession(checkoutData);
        if (!session?.id) throw new Error("Invalid checkout session");

        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
          sessionId: session.id,
        });
        if (error) throw new Error(error.message || "Stripe redirect error");
      } catch (err) {
        console.error(err);
        showToastMessage(err.message || "Unknown error occurred");
      } finally {
        setIsProcessing(false);
        setProcessingAction(null);
      }
    },
    [
      name,
      email,
      selectedTier,
      includeConsultation,
      additionalNotes,
      selectedSystems,
      selectedDashboards,
      keywords,
      stripeConfigured,
      showToastMessage,
    ]
  );

  const renderStepContent = () =>
    currentStep === 1 ? (
      <PlatformTier
        selectedTier={selectedTier}
        setSelectedTier={setSelectedTier}
        nextStep={nextStep}
      />
    ) : (
      <FinalSummary
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
        includeConsultation={includeConsultation}
        setIncludeConsultation={setIncludeConsultation}
        prevStep={prevStep}
        handlePayment={handlePayment}
        isProcessing={isProcessing}
        processingAction={processingAction}
        stripeConfigured={stripeConfigured}
      />
    );

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          background: theme.palette.background.default,
          color: "text.primary",
        }}
      >
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }} ref={wizardRef}>
          <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
            <Typography variant="h1" gutterBottom>
              Select Your Campaign Package
            </Typography>
            <Button
              onClick={() => {
                setCurrentStep(1);
                setSelectedTier(null);
                setName("");
                setEmail("");
                setIncludeConsultation(false);
              }}
              startIcon={<Refresh />}
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
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {renderStepContent()}
        </Container>
        <Snackbar
          open={Boolean(showToast)}
          autoHideDuration={4000}
          onClose={() => setShowToast(null)}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert severity="warning" variant="filled" sx={{ width: "100%" }}>
            {showToast}
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
};

export default Packages;
