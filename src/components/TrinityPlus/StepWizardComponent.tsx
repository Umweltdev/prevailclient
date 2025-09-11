import React, { useState, useEffect, useCallback } from "react";
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
  Wifi,
  Building,
  Globe,
  Rocket,
  Zap,
  RefreshCw,
} from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import { theme } from "../../theme.js";
import { applyDiscount } from "../user-dashboard/utils.js";


interface ImportMetaEnv {
  readonly VITE_STRIPE_PUBLIC_KEY: string;
  readonly VITE_API_BASE_URL: string;
  readonly VITE_API_MEETING_SLOTS: string;
  readonly VITE_API_BOOK_MEETING: string;
  readonly VITE_API_CHECKOUT_SESSION: string;
  readonly VITE_API_MULTIPLE_CHECKOUT_SESSION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

const STRIPE_KEY = (import.meta as any).env?.VITE_STRIPE_PUBLIC_KEY || "";
let stripePromise = null;
if (STRIPE_KEY) {
  stripePromise = loadStripe(STRIPE_KEY);
} else {
  console.warn(
    "VITE_STRIPE_PUBLISHABLE_KEY not set. Checkout will be disabled until configured."
  );
}
const betaDaysRemaining = 10;
const ALL_TRINITY_OPTIONS = [
  {
    id: "expense",
    type: "individual",
    name: "Expense Manager",
    icon: "💰",
    description:
      "AI-powered financial planning that ensures you never run out of cash",
    betaPrice: 230,
    earlyPrice: 576,
    standardPrice: 1729,
    features: [
      "Predictive cash flow",
      "7 allocation rules",
      "Emergency fund protection",
      "Automatic priority reshuffling",
    ],
  },
  {
    id: "mcd",
    type: "individual",
    name: "MCD System",
    icon: "📈",
    description:
      "Marketing Cost Displacement - automatically adjusts prices based on ad spend",
    betaPrice: 230,
    earlyPrice: 576,
    standardPrice: 1729,
    features: [
      "Real-time price optimization",
      "Marketing spend integration",
      "Automatic profit protection",
      "Platform cost tracking",
    ],
  },
  {
    id: "rcd",
    type: "individual",
    name: "RCD System",
    icon: "🎯",
    description:
      "Returning Customer Discounts - creates viral loyalty networks",
    betaPrice: 230,
    earlyPrice: 576,
    standardPrice: 1729,
    features: [
      "Automatic loyalty tracking",
      "Viral referral networks",
      "Personalized discount vectors",
      "Lifetime value optimization",
    ],
  },
  {
    id: "garo",
    type: "individual",
    name: "GARO System",
    icon: "🧬",
    description:
      "Genetic Algorithm Restocking Optimizer - evolves perfect inventory decisions",
    betaPrice: 230,
    earlyPrice: 576,
    standardPrice: 1729,
    features: [
      "500+ generation evolution",
      "Multi-objective fitness scoring",
      "70% stockout reduction",
      "Predictive demand modeling",
    ],
    note: "Physical stores: includes €1,844 for Square setup & training",
  },
  {
    id: "aed",
    type: "individual",
    name: "AED System",
    icon: "🚀",
    description:
      "Advertising Efficiency Dashboard - unifies and optimizes all ad platforms",
    betaPrice: 230,
    earlyPrice: 500,
    standardPrice: 1500,
    features: [
      "4+ platform integration",
      "Real-time budget reallocation",
      "Machine learning optimization",
      "30% cost reduction average",
    ],
  },
  {
    id: "trinity-core",
    type: "package",
    name: "Trinity Core Package",
    icon: "⚡",
    description: "Essential business intelligence: Expense Manager + MCD + RCD",
    betaPrice: 690,
    earlyPrice: 1728,
    standardPrice: 5187,
    includes: ["💰 Expense Manager", "📈 MCD System", "🎯 RCD System"],
    savings: "Save €5,187 vs standard pricing",
    baseRecommended: true,
  },
  {
    id: "trinity-plus",
    type: "package",
    name: "Trinity Plus Package",
    icon: "🌟",
    description: "Complete suite: All 5 systems working in perfect harmony",
    betaPrice: 1150,
    earlyPrice: 2880,
    standardPrice: 8645,
    includes: [
      "💰 Expense Manager",
      "📈 MCD System",
      "🎯 RCD System",
      "🧬 GARO System",
      "🚀 AED System",
    ],
    savings: "Save €6,500 vs standard pricing",
    bestValue: true,
    note: "GARO requires includes €1,600 for physical stores",
  },
];
const solutionTypes = [
  {
    id: "trinity",
    name: "Trinity Standalone Modules",
    icon: Globe,
    description: "Individual Trinity systems",
  },
  {
    id: "trinity-core",
    name: "Trinity Core",
    icon: Zap,
    description: "business intelligence tool",
  },
  {
    id: "trinity-plus",
    name: "Trinity Plus",
    icon: Rocket,
    description: "Complete business intelligence solution",
  },
];
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

const SolutionChoice = ({
  setSolutionType,
  setTrinitySelections,
  setCurrentStep,
}) => {
  const [selected, setSelected] = useState(null);

  const handleSelection = (index, solution) => {
    setSelected(index);
    setSolutionType(solution.id);

    if (solution.id === "trinity") {
      setTrinitySelections([]);
      setCurrentStep(2);
    } else if (solution.id === "trinity-core") {
      // For Trinity Core, pre-select it and go to the packages step
      setTrinitySelections(["trinity-core"]);
      setCurrentStep(2);
    } else if (solution.id === "trinity-plus") {
      setTrinitySelections(["trinity-plus"]);
      setCurrentStep(3);
    }
  };

  return (
    <Fade in timeout={500}>
      <Box>
        <Chip
          label="Step 1: Choose Your Path"
          color="primary"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <Typography variant="h2" gutterBottom>
          What type of solution do you need?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Select the best fit for your business transformation.
        </Typography>
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {solutionTypes.map((solution, i) => (
            <Grid item xs={12} md={4} key={i}>
              <SelectableCard
                selected={selected === i}
                onClick={() => handleSelection(i, solution)}
              >
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                    background:
                      "linear-gradient(to bottom right, #E0E7FF, #DDD4EF)",
                  }}
                >
                  <solution.icon
                    style={{
                      color: theme.palette.primary.main,
                      width: 32,
                      height: 32,
                    }}
                  />
                </Box>
                <Typography variant="h6" component="h3" gutterBottom>
                  {solution.name}
                </Typography>
                <Typography variant="body1">{solution.description}</Typography>
              </SelectableCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Fade>
  );
};
SolutionChoice.propTypes = {
  setSolutionType: PropTypes.func.isRequired,
  setTrinitySelections: PropTypes.func.isRequired,
  setCurrentStep: PropTypes.func.isRequired,
};
const MemoizedSolutionChoice = React.memo(SolutionChoice);

const TrinityPackages = ({
  trinitySelections,
  setTrinitySelections,
  prevStep,
  setCurrentStep,
  solutionType,
}) => {
  const individualOptions = ALL_TRINITY_OPTIONS.filter(
    (opt) => opt.type === "individual"
  );

  const packageOptions = ALL_TRINITY_OPTIONS.filter(
    (opt) => opt.type === "package"
  );

  const handleSelection = (optionId) => {
    setTrinitySelections((prev) => {
      if (prev.includes(optionId)) {
        return prev.filter((id) => id !== optionId);
      } else {
        // For packages, clear other selections and only select this package
        if (
          ALL_TRINITY_OPTIONS.find((opt) => opt.id === optionId)?.type ===
          "package"
        ) {
          return [optionId];
        } else {
          // For individual options, clear any package selections
          const filtered = prev.filter(
            (id) =>
              ALL_TRINITY_OPTIONS.find((opt) => opt.id === id)?.type !==
              "package"
          );
          return [...filtered, optionId];
        }
      }
    });
  };

  const hasGaro = trinitySelections.includes("garo");
  const hasPackage = trinitySelections.some(
    (id) => ALL_TRINITY_OPTIONS.find((opt) => opt.id === id)?.type === "package"
  );

  return (
    <Fade in timeout={500}>
      <Box>
        <Chip
          label="Trinity Systems Selection"
          color="primary"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <Typography variant="h2" gutterBottom>
          Choose Your{" "}
          <Box component="span" sx={gradientText}>
            Trinity Solution
          </Box>
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          {solutionType === "trinity"
            ? "Select individual systems. Beta pricing ends in " +
              betaDaysRemaining +
              " days!"
            : "Select a package. Beta pricing ends in " +
              betaDaysRemaining +
              " days!"}
        </Typography>
        <Chip
          label={`🔥 BETA PRICING: ${betaDaysRemaining} Days Remaining`}
          color="error"
          sx={{ mb: 4, color: "white", bgcolor: "#D92D20" }}
        />

        {/* Show Package Options only for Trinity Core and Trinity Plus */}
        {(solutionType === "trinity-core" ||
          solutionType === "trinity-plus") && (
          <>
            <Typography variant="h4" sx={{ mb: 3 }}>
              Package Deals
            </Typography>
            <Grid container spacing={3} sx={{ mb: 4 }}>
              {packageOptions
                .filter(
                  (option) =>
                    (solutionType === "trinity-core" &&
                      option.id === "trinity-core") ||
                    (solutionType === "trinity-plus" &&
                      option.id === "trinity-plus")
                )
                .map((option) => (
                  <Grid item xs={12} key={option.id}>
                    <SelectableCard
                      selected={trinitySelections.includes(option.id)}
                      onClick={() => handleSelection(option.id)}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          mb: 1,
                        }}
                      >
                        {trinitySelections.includes(option.id) && (
                          <Check size={20} color={theme.palette.success.main} />
                        )}
                      </Box>

                      <Grid container spacing={2}>
                        <Grid item xs={2} sm={1}>
                          <Typography variant="h4">{option.icon}</Typography>
                        </Grid>
                        <Grid item xs={10} sm={11}>
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="flex-start"
                            flexWrap="wrap"
                          >
                            <Box>
                              <Typography variant="h6" component="h3">
                                {option.name}
                              </Typography>
                              <Typography variant="body1" sx={{ mt: 1 }}>
                                {option.description}
                              </Typography>
                              {option.includes && (
                                <Typography
                                  variant="body2"
                                  sx={{ mt: 1, color: "text.secondary" }}
                                >
                                  Includes: {option.includes.join(", ")}
                                </Typography>
                              )}
                              {option.savings && (
                                <Chip
                                  label={option.savings}
                                  color="success"
                                  size="small"
                                  sx={{ mt: 1 }}
                                />
                              )}
                            </Box>
                            <Box textAlign="right" ml={2} mt={{ xs: 1, sm: 0 }}>
                              <Typography
                                variant="h5"
                                color="#B42318"
                                fontWeight="bold"
                              >
                                €{option.betaPrice.toLocaleString()}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{ textDecoration: "line-through" }}
                                color="text.secondary"
                              >
                                €{option.standardPrice.toLocaleString()}
                              </Typography>
                            </Box>
                          </Box>
                          {option.features && (
                            <List dense sx={{ mt: 2 }}>
                              {option.features.map((feature) => (
                                <ListItem key={feature} disableGutters>
                                  <ListItemIcon sx={{ minWidth: 24 }}>
                                    <Check
                                      size={16}
                                      color={theme.palette.success.main}
                                    />
                                  </ListItemIcon>
                                  <ListItemText primary={feature} />
                                </ListItem>
                              ))}
                            </List>
                          )}
                          {option.note && (
                            <Alert severity="warning" sx={{ mt: 2 }}>
                              {option.note}
                            </Alert>
                          )}
                        </Grid>
                      </Grid>
                    </SelectableCard>
                  </Grid>
                ))}
            </Grid>
          </>
        )}

        {/* Show Individual Options only for Trinity Standalone Modules */}
        {solutionType === "trinity" && (
          <>
            <Typography variant="h4" sx={{ mb: 3 }}>
              Individual Systems
            </Typography>
            <Grid container spacing={3} sx={{ mb: 4 }}>
              {individualOptions.map((option) => (
                <Grid item xs={12} lg={6} key={option.id}>
                  <SelectableCard
                    selected={trinitySelections.includes(option.id)}
                    onClick={() => handleSelection(option.id)}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        mb: 1,
                      }}
                    >
                      {trinitySelections.includes(option.id) && (
                        <Check size={20} color={theme.palette.success.main} />
                      )}
                    </Box>

                    <Grid container spacing={2}>
                      <Grid item xs={2} sm={1}>
                        <Typography variant="h4">{option.icon}</Typography>
                      </Grid>
                      <Grid item xs={10} sm={11}>
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="flex-start"
                          flexWrap="wrap"
                        >
                          <Box>
                            <Typography variant="h6" component="h3">
                              {option.name}
                            </Typography>
                            <Typography variant="body1" sx={{ mt: 1 }}>
                              {option.description}
                            </Typography>
                          </Box>
                          <Box textAlign="right" ml={2} mt={{ xs: 1, sm: 0 }}>
                            <Typography
                              variant="h5"
                              color="#B42318"
                              fontWeight="bold"
                            >
                              €{option.betaPrice.toLocaleString()}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{ textDecoration: "line-through" }}
                              color="text.secondary"
                            >
                              €{option.standardPrice.toLocaleString()}
                            </Typography>
                          </Box>
                        </Box>
                        {option.features && (
                          <List dense sx={{ mt: 2 }}>
                            {option.features.map((feature) => (
                              <ListItem key={feature} disableGutters>
                                <ListItemIcon sx={{ minWidth: 24 }}>
                                  <Check
                                    size={16}
                                    color={theme.palette.success.main}
                                  />
                                </ListItemIcon>
                                <ListItemText primary={feature} />
                              </ListItem>
                            ))}
                          </List>
                        )}
                        {option.note && (
                          <Alert severity="warning" sx={{ mt: 2 }}>
                            {option.note}
                          </Alert>
                        )}
                      </Grid>
                    </Grid>
                  </SelectableCard>
                </Grid>
              ))}
            </Grid>
          </>
        )}

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
            onClick={() => {
              if (
                trinitySelections.includes("garo") ||
                trinitySelections.includes("trinity-plus")
              ) {
                setCurrentStep(3);
              } else {
                setCurrentStep(4);
              }
            }}
            disabled={trinitySelections.length === 0}
            endIcon={<ChevronRight />}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Fade>
  );
};

TrinityPackages.propTypes = {
  trinitySelections: PropTypes.array.isRequired,
  setTrinitySelections: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  setCurrentStep: PropTypes.func.isRequired,
  solutionType: PropTypes.string, // Add this line
};
const MemoizedTrinityPackages = React.memo(TrinityPackages);

const StoreType = ({
  trinitySelections,
  hasPhysicalStore,
  setHasPhysicalStore,
  nextStep,
  prevStep,
  setCurrentStep,
}) => {
  const needsStoreInfo =
    trinitySelections.includes("trinity-plus") ||
    trinitySelections.includes("garo");

  useEffect(() => {
    if (!needsStoreInfo) nextStep();
  }, [needsStoreInfo, nextStep]);

  if (!needsStoreInfo) return null;

  const basePrice = trinitySelections.reduce((total, id) => {
    const selection = ALL_TRINITY_OPTIONS.find((opt) => opt.id === id);
    return total + (selection ? selection.betaPrice : 0);
  }, 0);

  const STORE_SETUP_FEE = 1844;

  return (
    <Fade in timeout={500}>
      <Box>
        <Chip
          label="Business Type"
          color="primary"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <Typography variant="h2" gutterBottom>
          Do you have a physical storefront?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          This affects GARO system setup requirements.
        </Typography>
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={6}>
            <SelectableCard
              selected={hasPhysicalStore === false}
              onClick={() => setHasPhysicalStore(false)}
            >
              <Wifi size={32} color={theme.palette.primary.main} />
              <Typography variant="h6" component="h3" sx={{ my: 2 }}>
                E-commerce Only
              </Typography>
              <Typography variant="body1">
                Online business without a physical location.
              </Typography>
              <Typography
                variant="h5"
                component="p"
                fontWeight="bold"
                sx={{ mt: "auto", pt: 2 }}
              >
                €{basePrice.toLocaleString()}
              </Typography>
              <Typography variant="body2" color="success.main">
                Standard API setup
              </Typography>
            </SelectableCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <SelectableCard
              selected={hasPhysicalStore === true}
              onClick={() => setHasPhysicalStore(true)}
            >
              <Building size={32} color={theme.palette.primary.main} />
              <Typography variant="h6" component="h3" sx={{ my: 2 }}>
                Physical Storefront
              </Typography>
              <Typography variant="body1">
                Brick-and-mortar with inventory.
              </Typography>
              <Typography
                variant="h5"
                component="p"
                fontWeight="bold"
                sx={{ mt: "auto", pt: 2 }}
              >
                €{(basePrice + STORE_SETUP_FEE).toLocaleString()}
              </Typography>
              <Typography variant="body2" color="warning.main">
                includes €1844 Square setup & training
              </Typography>
            </SelectableCard>
          </Grid>
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
            onClick={() => setCurrentStep(4)}
            disabled={hasPhysicalStore === null}
            endIcon={<ChevronRight />}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Fade>
  );
};
StoreType.propTypes = {
  trinitySelections: PropTypes.array.isRequired,
  hasPhysicalStore: PropTypes.bool,
  setHasPhysicalStore: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  setCurrentStep: PropTypes.func.isRequired,
};
const MemoizedStoreType = React.memo(StoreType);

const FinalSummary = ({
  trinitySelections,
  selectedIndustry,
  solutionType,
  hasPhysicalStore,
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
  handleCheckout,
  handleConsultationCheckout,
  isCheckoutProcessing,
  isConsultationProcessing,
  calculateRunningTotal,
  setCurrentStep,
  setHasPhysicalStore,
}) => {
  const selectedTrinityOptions = ALL_TRINITY_OPTIONS.filter((opt) =>
    trinitySelections.includes(opt.id)
  );

  const industrySelection = industries.find((i) => i.id === selectedIndustry);

  const total = calculateRunningTotal();
  const finalPrice = total;

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

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
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Typography variant="h6" component="h3" gutterBottom>
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
              <Typography variant="h6" component="h3" gutterBottom>
                Your Summary
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Box display="flex" flexDirection="column" gap={1}>
                {solutionType && (
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle2">Solution:</Typography>
                    <Typography variant="subtitle1" textTransform="capitalize">
                      {solutionType === "trinity"
                        ? "Trinity Standalone Modules"
                        : solutionType === "trinity-core"
                          ? "Trinity Core"
                          : "Trinity Plus"}
                    </Typography>
                  </Box>
                )}
                {industrySelection && (
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle2">Industry:</Typography>
                    <Typography variant="subtitle1">
                      {industrySelection.name}
                    </Typography>
                  </Box>
                )}

                {selectedTrinityOptions.map((option) => (
                  <Box
                    key={option.id}
                    display="flex"
                    justifyContent="space-between"
                    mb={1}
                  >
                    <Typography variant="subtitle2">{option.name}:</Typography>
                    <Typography variant="subtitle1">
                      €{option.betaPrice.toLocaleString()}
                    </Typography>
                  </Box>
                ))}

                {hasPhysicalStore !== null &&
                  (trinitySelections.includes("trinity-plus") ||
                    trinitySelections.includes("garo")) && (
                    <Box display="flex" justifyContent="space-between">
                      <Typography variant="subtitle2">Store Type:</Typography>
                      <Typography variant="subtitle1">
                        {hasPhysicalStore
                          ? "Physical Store"
                          : "E-commerce Only"}
                      </Typography>
                    </Box>
                  )}
                {hasPhysicalStore &&
                  (trinitySelections.includes("trinity-plus") ||
                    trinitySelections.includes("garo")) && (
                    <Box display="flex" justifyContent="space-between">
                      <Typography variant="subtitle2">Add-on:</Typography>
                      <Typography variant="subtitle1">
                        Physical Store Setup
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
                    €{applyDiscount(finalPrice).toLocaleString()}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="success.main"
                    display="block"
                    textAlign="right"
                    mt={1}
                  >
                    {finalPrice < 1000
                      ? "50% deposit applied"
                      : "20% deposit applied"}
                  </Typography>
                </Box>
              </Box>
              <Box mt={3} display="flex" flexDirection="column" gap={2}>
                <Button
                  sx={{
                    borderColor: "#3B82F6",
                    color: "#3B82F6",
                    "&:hover": {
                      borderColor: "#2563EB",
                      backgroundColor: "rgba(59, 130, 246, 0.04)",
                    },
                  }}
                  variant="outlined"
                  fullWidth
                  onClick={handleCheckout}
                  disabled={
                    isCheckoutProcessing ||
                    !name ||
                    !email ||
                    !validateEmail(email)
                  }
                  startIcon={
                    isCheckoutProcessing ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : null
                  }
                >
                  {isCheckoutProcessing
                    ? "Processing..."
                    : "Proceed to Checkout"}
                </Button>

                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleConsultationCheckout}
                  disabled={
                    isConsultationProcessing ||
                    !name ||
                    !email ||
                    !validateEmail(email)
                  }
                  startIcon={
                    isConsultationProcessing ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : null
                  }
                >
                  {isConsultationProcessing
                    ? "Processing..."
                    : "Book a Consultation €83"}
                </Button>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => {
                    if (
                      trinitySelections.includes("garo") ||
                      trinitySelections.includes("trinity-plus")
                    ) {
                      setHasPhysicalStore(null);
                      setCurrentStep(3);
                    } else if (solutionType === "trinity") {
                      setCurrentStep(2);
                    } else {
                      setCurrentStep(1);
                    }
                  }}
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
  trinitySelections: PropTypes.array.isRequired,
  selectedIndustry: PropTypes.string,
  solutionType: PropTypes.string,
  hasPhysicalStore: PropTypes.bool,
  name: PropTypes.string,
  handleConsultationCheckout: PropTypes.func.isRequired,
  isCheckoutProcessing: PropTypes.bool,
  isConsultationProcessing: PropTypes.bool,
  setName: PropTypes.func,
  email: PropTypes.string,
  setEmail: PropTypes.func,
  additionalNotes: PropTypes.string,
  setAdditionalNotes: PropTypes.func,
  keywords: PropTypes.string,
  setKeywords: PropTypes.func,
  selectedSystems: PropTypes.string,
  setSelectedSystems: PropTypes.func,
  selectedDashboards: PropTypes.string,
  setSelectedDashboards: PropTypes.func,
  prevStep: PropTypes.func,
  handleCheckout: PropTypes.func,
  calculateRunningTotal: PropTypes.func,
  setCurrentStep: PropTypes.func,
  setHasPhysicalStore: PropTypes.func,
};
const MemoizedFinalSummary = React.memo(FinalSummary);

const StepWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [solutionType, setSolutionType] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [trinitySelections, setTrinitySelections] = useState([]);
  const [hasPhysicalStore, setHasPhysicalStore] = useState(null);
  const [showToast, setShowToast] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [keywords, setKeywords] = useState("");
  const [selectedSystems, setSelectedSystems] = useState("");
  const [selectedDashboards, setSelectedDashboards] = useState("");

  const [isCheckoutProcessing, setIsCheckoutProcessing] = useState(false);
  const [isConsultationProcessing, setIsConsultationProcessing] =
    useState(false);

  const STORE_SETUP_FEE = 1844;

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };
  useEffect(() => {
    const savedState = localStorage.getItem("quoteBuilderState");
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      setCurrentStep(parsedState.currentStep || 1);
      setSolutionType(parsedState.solutionType || null);
      setSelectedIndustry(parsedState.selectedIndustry || null);
      setTrinitySelections(parsedState.trinitySelections || []);
      setHasPhysicalStore(parsedState.hasPhysicalStore || null);
    }
  }, []);

  useEffect(() => {
    const stateToSave = {
      currentStep,
      solutionType,
      selectedIndustry,
      trinitySelections,
      hasPhysicalStore,
    };
    localStorage.setItem("quoteBuilderState", JSON.stringify(stateToSave));
  }, [
    currentStep,
    solutionType,
    selectedIndustry,
    trinitySelections,
    hasPhysicalStore,
  ]);

  const calculateRunningTotal = useCallback(() => {
    let total = trinitySelections.reduce((sum, id) => {
      const selection = ALL_TRINITY_OPTIONS.find((opt) => opt.id === id);
      return sum + (selection ? selection.betaPrice : 0);
    }, 0);

    if (
      hasPhysicalStore &&
      (trinitySelections.includes("trinity-plus") ||
        trinitySelections.includes("garo"))
    ) {
      total += STORE_SETUP_FEE;
    }

    return Math.round(total);
  }, [trinitySelections, hasPhysicalStore]);

  const showToastMessage = useCallback((message) => {
    setShowToast(message);
  }, []);

  const getSteps = useCallback(() => {
    return [
      "Solution Type",
      "Trinity Package",
      "Store Type",
      "Review & Purchase",
    ];
  }, []);

  const nextStep = useCallback(() => {
    const steps = getSteps();
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  }, [currentStep, getSteps]);

  const prevStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep]);

  const resetSelections = useCallback(() => {
    setCurrentStep(1);
    setSolutionType(null);
    setSelectedIndustry(null);
    setTrinitySelections([]);
    setHasPhysicalStore(null);
    setName("");
    setEmail("");
    setAdditionalNotes("");
    setKeywords("");
    setSelectedSystems("");
    setSelectedDashboards("");
    localStorage.removeItem("quoteBuilderState");
    showToastMessage("Selections have been reset.");
  }, [showToastMessage]);

  // Inside the StepWizard component...

  const handleCheckout = useCallback(async () => {
    if (!name || !email) {
      showToastMessage("Error: Please enter your name and email to proceed.");
      return;
    }
    setIsCheckoutProcessing(true);

    const parseToArray = (str) =>
      str
        ? str
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean)
        : [];

    const commonData = {
      selectedSystems: parseToArray(selectedSystems),
      selectedIndustryDashboards: parseToArray(selectedDashboards),
      selectedUniversalDashboards: [],
      additionalNotes,
    };

    const selectedServices = [];

    trinitySelections.forEach((id) => {
      const selection = ALL_TRINITY_OPTIONS.find((opt) => opt.id === id);
      if (selection) {
        selectedServices.push({
          serviceType: id,
          price: selection.betaPrice,
          keywords: parseToArray(keywords),
          ...commonData,
        });
      }
    });

    if (
      hasPhysicalStore &&
      (trinitySelections.includes("trinity-plus") ||
        trinitySelections.includes("garo"))
    ) {
      selectedServices.push({
        serviceType: "store_setup",
        price: STORE_SETUP_FEE,
        description: "Square setup & training for physical stores",
      });
    }

    const originalTotal = calculateRunningTotal();

    const payload = {
      name,
      email,
      totalPrice: originalTotal,
      selectedServices,
    };

    try {
      const response = await fetch(
        `${(import.meta as any).env.VITE_API_BASE_URL!}${(import.meta as any).env.VITE_API_MULTIPLE_CHECKOUT_SESSION!}`,
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
      if (!stripe) throw new Error("Stripe.js has not loaded yet.");
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      if (error) throw new Error(error.message);
    } catch (error) {
      showToastMessage(`Error: ${error.message ?? "Unknown error"}`);
    } finally {
      setIsCheckoutProcessing(false);
    }
  }, [
    name,
    email,
    trinitySelections,
    hasPhysicalStore,
    additionalNotes,
    keywords,
    selectedSystems,
    selectedDashboards,
    calculateRunningTotal,
    showToastMessage,
  ]);

  const handleConsultationCheckout = useCallback(async () => {
    if (!name || !email) {
      showToastMessage("Error: Please enter your name and email to proceed.");
      return;
    }
    if (!validateEmail(email)) {
      showToastMessage("Error: Please enter a valid email.");
      return;
    }

    setIsConsultationProcessing(true);

    try {
      const payload = {
        name,
        email,
        consultation: true,
        price: 83,
        selectedServices: [
          {
            serviceType: "consultation",
            price: 83,
            keywords: [],
            selectedSystems: [],
            selectedIndustryDashboards: [],
            selectedUniversalDashboards: [],
            additionalNotes: additionalNotes,
          },
        ],
        totalPrice: 83,
      };

      const response = await fetch(
        "https://prevail-services-e973123f8b1e.herokuapp.com/api/create-multiple-checkout-session",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Failed to create consultation session."
        );
      }

      const session = await response.json();
      const stripe = await stripePromise;
      if (!stripe) throw new Error("Stripe.js has not loaded yet.");

      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      if (error) throw new Error(error.message);
    } catch (error) {
      showToastMessage(`Error: ${error.message ?? "Unknown error"}`);
    } finally {
      setIsConsultationProcessing(false);
    }
  }, [name, email, additionalNotes, showToastMessage]);

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <MemoizedSolutionChoice
            setSolutionType={setSolutionType}
            setTrinitySelections={setTrinitySelections}
            setCurrentStep={setCurrentStep}
          />
        );
      case 2:
        return (
          <MemoizedTrinityPackages
            trinitySelections={trinitySelections}
            setTrinitySelections={setTrinitySelections}
            nextStep={nextStep}
            prevStep={prevStep}
            setCurrentStep={setCurrentStep}
            solutionType={solutionType} // Add this line
          />
        );
      case 3:
        return (
          <MemoizedStoreType
            trinitySelections={trinitySelections}
            hasPhysicalStore={hasPhysicalStore}
            setHasPhysicalStore={setHasPhysicalStore}
            nextStep={nextStep}
            prevStep={prevStep}
            setCurrentStep={setCurrentStep}
          />
        );
      case 4:
        return (
          <MemoizedFinalSummary
            trinitySelections={trinitySelections}
            selectedIndustry={selectedIndustry}
            solutionType={solutionType}
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
            isCheckoutProcessing={isCheckoutProcessing}
            isConsultationProcessing={isConsultationProcessing}
            calculateRunningTotal={calculateRunningTotal}
            setCurrentStep={setCurrentStep}
            setHasPhysicalStore={setHasPhysicalStore}
          />
        );
      default:
        return null;
    }
  };

  const steps = getSteps();

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
            <Typography variant="h1" component="h1" gutterBottom id="wizard">
              Your Partner in Accelerating the{" "}
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

export default StepWizard;


