import React, { useState, useEffect, useCallback, useMemo } from "react";
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
  Paper,
  Stack,
  FormControlLabel,
  Switch,
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
  TrendingUp,
  Target,
  PackageCheck,
  CalendarCheck,
} from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import { theme } from "./theme.js";
import {
  createCheckoutSession,
  mapToApiServiceType,
  generateTargetAudience,
  generateCampaignDuration,
} from "./api";
import { applyDiscount } from "../user-dashboard/utils.js";

const STRIPE_KEY = import.meta.env.VITE_STRIPE_PUBLIC_KEY || "";
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
    betaPrice: 200,
    standardPrice: 1500,
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
    betaPrice: 200,
    standardPrice: 1500,
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
    betaPrice: 200,
    standardPrice: 1500,
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
    betaPrice: 200,
    standardPrice: 1500,
    features: [
      "500+ generation evolution",
      "Multi-objective fitness scoring",
      "70% stockout reduction",
      "Predictive demand modeling",
    ],
    note: "Physical stores: includes €1,600 for Square setup & training",
  },
  {
    id: "aed",
    type: "individual",
    name: "AED System",
    icon: "🚀",
    description:
      "Advertising Efficiency Dashboard - unifies and optimizes all ad platforms",
    betaPrice: 200,
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
    betaPrice: 600,
    standardPrice: 4500,
    includes: ["💰 Expense Manager", "📈 MCD System", "🎯 RCD System"],
    savings: 3900,
    baseRecommended: true,
  },
  {
    id: "trinity-plus",
    type: "package",
    name: "Trinity Plus Package",
    icon: "🌟",
    description: "Complete suite: All 5 systems working in perfect harmony",
    betaPrice: 1000,
    standardPrice: 7500,
    includes: [
      "💰 Expense Manager",
      "📈 MCD System",
      "🎯 RCD System",
      "🧬 GARO System",
      "🚀 AED System",
    ],
    savings: 6500,
    bestValue: true,
    note: "GARO requires €1,600 for physical stores",
  },
];
const solutionTypes = [
  {
    id: "website",
    name: "Website & Digital Platform",
    icon: Globe,
    description: "Custom web development & dashboards",
  },
  {
    id: "trinity",
    name: "Trinity Business Systems",
    icon: Zap,
    description: "AI-powered business intelligence",
  },
  {
    id: "both",
    name: "Complete Digital Transformation",
    icon: Rocket,
    description: "Website + Trinity systems",
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
const goals = [
  {
    id: "fees",
    name: "Eliminate Platform Fees",
    icon: "💰",
    description: "Stop paying 20-35% commission",
    savings: "Save €1,000-5,000/month",
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

const PriceRow = ({
  label,
  amount,
  isTotal = false,
  strikeThrough = false,
}) => (
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
        color: strikeThrough ? "error.main" : "text.primary",
        textDecoration: strikeThrough ? "line-through" : "none",
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
  strikeThrough: PropTypes.bool,
};

const SelectableCard = ({ children, selected, ...props }) => (
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
      ...props.sx,
    }}
    {...props}
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

const SolutionChoice = ({ solutionType, setSolutionType, nextStep }) => (
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
        {solutionTypes.map((solution) => (
          <Grid item xs={12} md={4} key={solution.id}>
            <SelectableCard
              selected={solutionType === solution.id}
              onClick={() => setSolutionType(solution.id)}
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
      <Button
        variant="contained"
        onClick={nextStep}
        disabled={!solutionType}
        endIcon={<ChevronRight />}
      >
        Continue
      </Button>
    </Box>
  </Fade>
);
SolutionChoice.propTypes = {
  solutionType: PropTypes.string,
  setSolutionType: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};
const MemoizedSolutionChoice = React.memo(SolutionChoice);

const IndustryStep = ({
  selectedIndustry,
  setSelectedIndustry,
  nextStep,
  prevStep,
}) => (
  <Fade in timeout={500}>
    <Box>
      <Chip
        label="Step 2: Your Industry"
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
          disabled={!selectedIndustry}
          endIcon={<ChevronRight />}
        >
          Continue
        </Button>
      </Box>
    </Box>
  </Fade>
);
IndustryStep.propTypes = {
  selectedIndustry: PropTypes.string,
  setSelectedIndustry: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};
const MemoizedIndustryStep = React.memo(IndustryStep);

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
          label="Step 3: Your Goals"
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
const MemoizedGoalsStep = React.memo(GoalsStep);

const TrinityPackages = ({
  trinitySelectionId,
  setTrinitySelectionId,
  recommendations,
  nextStep,
  prevStep,
}) => (
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
        Select individual systems or complete packages. Beta pricing ends in{" "}
        {betaDaysRemaining} days!
      </Typography>
      <Chip
        label={`🔥 BETA PRICING: ${betaDaysRemaining} Days Remaining`}
        color="error"
        sx={{ mb: 4, color: "white", bgcolor: "#D92D20" }}
      />
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {ALL_TRINITY_OPTIONS.map((option) => (
          <Grid
            item
            xs={12}
            lg={option.type === "package" ? 12 : 6}
            key={option.id}
          >
            <SelectableCard
              selected={trinitySelectionId === option.id}
              onClick={() => setTrinitySelectionId(option.id)}
            >
              <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                {recommendations.trinityRec === option.id &&
                  !option.bestValue && (
                    <Chip
                      label="Recommended"
                      size="small"
                      sx={{ bgcolor: "#3B82F6", color: "white" }}
                    />
                  )}
                {option.bestValue && (
                  <Chip
                    label="Best Value"
                    size="small"
                    color="success"
                    variant="filled"
                  />
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
                  {option.includes && (
                    <Box mt={2}>
                      {" "}
                      {option.includes.map((item) => (
                        <Chip key={item} label={item} sx={{ mr: 1, mb: 1 }} />
                      ))}{" "}
                      {option.savings && (
                        <Typography
                          variant="subtitle1"
                          color="success.main"
                          fontWeight="bold"
                          sx={{ mt: 1 }}
                        >
                          Save €{option.savings.toLocaleString()} vs standard
                          pricing
                        </Typography>
                      )}{" "}
                    </Box>
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
          disabled={!trinitySelectionId}
          endIcon={<ChevronRight />}
        >
          Continue
        </Button>
      </Box>
    </Box>
  </Fade>
);
TrinityPackages.propTypes = {
  trinitySelectionId: PropTypes.string,
  setTrinitySelectionId: PropTypes.func.isRequired,
  recommendations: PropTypes.object.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};
const MemoizedTrinityPackages = React.memo(TrinityPackages);

const AEDUpsell = ({
  aedUpsellChoice,
  setAEDUpsellChoice,
  trinitySelectionId,
  nextStep,
  prevStep,
}) => {
  const currentSelection = ALL_TRINITY_OPTIONS.find(
    (opt) => opt.id === trinitySelectionId
  );

  const upsellOptions = useMemo(() => {
    const allOptions = [
      {
        id: "aed-only",
        name: "AED System only",
        price: 232,
        description:
          "Add just the Advertising Efficiency Dashboard to your current selection.",
        includes: ["AED System only"],
      },
      {
        id: "trinity-core",
        name: "Upgrade to Trinity Core",
        price: 695,
        description:
          "Upgrade to complete core package (Expense + MCD + RCD + AED).",
        includes: ["Expense Manager", "MCD System", "RCD System", "AED System"],
      },
      {
        id: "trinity-plus",
        name: "Upgrade to Trinity Plus",
        price: 1159,
        description: "Complete suite with all 5 systems including AED.",
        includes: ["All 5 Trinity Systems", "GARO Inventory", "AED Dashboard"],
      },
      {
        id: "skip",
        name: "No, thank you",
        price: 0,
        description: "I'll continue with my current selection.",
        includes: ["No additional systems"],
      },
    ];

    if (currentSelection?.type === "package") {
      return allOptions.filter((option) => {
        if (
          option.id === "trinity-core" &&
          currentSelection.id === "trinity-core"
        )
          return false;
        if (
          option.id === "trinity-plus" &&
          (currentSelection.id === "trinity-core" ||
            currentSelection.id === "trinity-plus")
        )
          return false;
        return true;
      });
    }
    return allOptions;
  }, [currentSelection]);

  return (
    <Fade in timeout={500}>
      <Box>
        <Chip
          label="Advertising Efficiency Boost"
          color="primary"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <Typography variant="h2" gutterBottom>
          Unify all ad platforms with Trinity AED?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Maximize your advertising ROI with our AI-powered platform
          unification.
        </Typography>
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {upsellOptions.map((option) => (
            <Grid item xs={12} md={6} key={option.id}>
              <SelectableCard
                selected={aedUpsellChoice === option.id}
                onClick={() => setAEDUpsellChoice(option.id)}
              >
                <Box display="flex" alignItems="flex-start" gap={2}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        "linear-gradient(to bottom right, #E0E7FF, #DDD4EF)",
                      flexShrink: 0,
                    }}
                  >
                    <Target size={24} color={theme.palette.primary.main} />
                  </Box>
                  <Box flexGrow={1}>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {option.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      {option.description}
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                      {option.includes.map((item, index) => (
                        <Chip
                          key={index}
                          label={item}
                          size="small"
                          sx={{ mr: 0.5, mb: 0.5 }}
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </Box>
                  {option.price > 0 && (
                    <Box textAlign="right" ml={2}>
                      <Typography
                        variant="h6"
                        color="primary"
                        fontWeight="bold"
                      >
                        +€{option.price.toLocaleString()}
                      </Typography>
                    </Box>
                  )}
                </Box>
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
            disabled={!aedUpsellChoice}
            endIcon={<ChevronRight />}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Fade>
  );
};
AEDUpsell.propTypes = {
  aedUpsellChoice: PropTypes.string,
  setAEDUpsellChoice: PropTypes.func.isRequired,
  trinitySelectionId: PropTypes.string,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};
const MemoizedAEDUpsell = React.memo(AEDUpsell);

const StoreType = ({
  trinitySelectionId,
  hasPhysicalStore,
  setHasPhysicalStore,
  nextStep,
  prevStep,
}) => {
  const trinitySelection = ALL_TRINITY_OPTIONS.find(
    (opt) => opt.id === trinitySelectionId
  );
  const basePrice = trinitySelection ? trinitySelection.betaPrice : 0;
  const setupCost = 1600;

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
                €{(basePrice + setupCost).toLocaleString()}
              </Typography>
              <Typography variant="body2" color="warning.main">
                Includes €{setupCost.toLocaleString()} Square setup & training
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
            onClick={nextStep}
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
  trinitySelectionId: PropTypes.string,
  hasPhysicalStore: PropTypes.bool,
  setHasPhysicalStore: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};
const MemoizedStoreType = React.memo(StoreType);

const PlatformTierStep = ({
  selectedTier,
  setSelectedTier,
  recommendations,
  nextStep,
  prevStep,
}) => (
  <Fade in timeout={500}>
    <Box>
      <Chip
        label="Platform Tier"
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
                €{tier.minPrice.toLocaleString()} - €
                {tier.maxPrice.toLocaleString()}
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
PlatformTierStep.propTypes = {
  selectedTier: PropTypes.string,
  setSelectedTier: PropTypes.func.isRequired,
  recommendations: PropTypes.object.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};
const MemoizedPlatformTierStep = React.memo(PlatformTierStep);

const FinalSummary = ({
  trinitySelectionId,
  selectedTier,
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
  prevStep,
  isProcessing,
  calculateRunningTotal,
  handlePayment,
  processingAction,
  includeConsultation,
  setIncludeConsultation,
}) => {
  const trinitySelection = ALL_TRINITY_OPTIONS.find(
    (opt) => opt.id === trinitySelectionId
  );
  const tierSelection = platformTiers.find((t) => t.id === selectedTier);
  const industrySelection = industries.find((i) => i.id === selectedIndustry);

  const total = calculateRunningTotal();
  const isBundle = solutionType === "both" && trinitySelection && tierSelection;
  const finalPrice = isBundle ? Math.round(total * 0.9) : total;
  const CONSULTATION_FEE = 99;
  const stripeConfigured = Boolean(STRIPE_KEY && stripePromise);

  return (
    <Fade in timeout={500}>
      <Grid container spacing={4} alignItems="flex-start">
        <Grid item xs={12} lg={7}>
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

        <Grid item xs={12} lg={5}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              background: (theme) =>
                `linear-gradient(145deg, ${theme.palette.grey[100]} 0%, #ffffff 100%)`,
              boxShadow: "0 8px 32px 0 rgba(0,0,0,0.05)",
              position: "sticky",
              top: "24px",
            }}
          >
            <Typography variant="h6" component="h3" gutterBottom>
              Your Summary
            </Typography>
            <Divider sx={{ my: 2 }} />

            <Stack spacing={1} sx={{ mb: 2 }}>
              {industrySelection && (
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="body2">Industry:</Typography>
                  <Typography variant="body2" fontWeight="medium">
                    {industrySelection.name}
                  </Typography>
                </Box>
              )}
              {trinitySelection && (
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="body2">Trinity System:</Typography>
                  <Typography variant="body2" fontWeight="medium">
                    {trinitySelection.name}
                  </Typography>
                </Box>
              )}
              {tierSelection && (
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="body2">Platform Tier:</Typography>
                  <Typography variant="body2" fontWeight="medium">
                    {tierSelection.name}
                  </Typography>
                </Box>
              )}
              {hasPhysicalStore &&
                (trinitySelectionId === "trinity-plus" ||
                  trinitySelectionId === "garo") && (
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="body2">Add-on:</Typography>
                    <Typography variant="body2" fontWeight="medium">
                      Physical Store Setup
                    </Typography>
                  </Box>
                )}
              {isBundle && (
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="body2" color="success.main">
                    Bundle Discount:
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight="medium"
                    color="success.main"
                  >
                    -10%
                  </Typography>
                </Box>
              )}
            </Stack>
            <Paper variant="outlined" sx={{ p: 2, borderRadius: 2, mb: 3 }}>
              <Stack spacing={1.5}>
                <PriceRow
                  label="Project Subtotal"
                  amount={`€${finalPrice.toLocaleString()}`}
                />
                <Fade in={includeConsultation} timeout={400}>
                  <Stack spacing={1.5} sx={{ mt: 1.5 }}>
                    <PriceRow
                      label="Consultation Fee"
                      amount={`+ €${CONSULTATION_FEE}`}
                    />
                    <PriceRow
                      label="Instant Bonus"
                      amount={`- €${CONSULTATION_FEE}`}
                      strikeThrough={true}
                    />
                  </Stack>
                </Fade>
                <Divider sx={{ my: 1 }} />
                <PriceRow
                  label="Total to Pay"
                  amount={`€${finalPrice.toLocaleString()}`}
                  isTotal
                />
              </Stack>
            </Paper>

            {/* Actions */}
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
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  <PackageCheck size={20} />
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
                  <CalendarCheck size={20} />
                )
              }
            >
              Just Book a Consultation (€{CONSULTATION_FEE})
            </Button>
          </Paper>
          <Button
            variant="outlined"
            onClick={prevStep}
            startIcon={<ChevronLeft />}
            sx={{ mt: 2, width: "100%" }}
          >
            Back
          </Button>
        </Grid>
      </Grid>
    </Fade>
  );
};

FinalSummary.propTypes = {
  trinitySelectionId: PropTypes.string,
  selectedTier: PropTypes.string,
  selectedIndustry: PropTypes.string,
  solutionType: PropTypes.string,
  hasPhysicalStore: PropTypes.bool,
  name: PropTypes.string,
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
  isProcessing: PropTypes.bool,
  calculateRunningTotal: PropTypes.func,
  handlePayment: PropTypes.func.isRequired,
  processingAction: PropTypes.string,
  includeConsultation: PropTypes.bool.isRequired,
  setIncludeConsultation: PropTypes.func.isRequired,
};
const MemoizedFinalSummary = React.memo(FinalSummary);

const StepWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [solutionType, setSolutionType] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [trinitySelectionId, setTrinitySelectionId] = useState(null);
  const [selectedTier, setSelectedTier] = useState(null);
  const [hasPhysicalStore, setHasPhysicalStore] = useState(null);
  const [showToast, setShowToast] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [keywords, setKeywords] = useState("");
  const [selectedSystems, setSelectedSystems] = useState("");
  const [selectedDashboards, setSelectedDashboards] = useState("");
  const [aedUpsellChoice, setAEDUpsellChoice] = useState(null);
  const [includeConsultation, setIncludeConsultation] = useState(false);
  const [processingAction, setProcessingAction] = useState(null);

  useEffect(() => {
    const savedState = localStorage.getItem("quoteBuilderState");
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      setCurrentStep(parsedState.currentStep || 1);
      setSolutionType(parsedState.solutionType || null);
      setSelectedIndustry(parsedState.selectedIndustry || null);
      setSelectedGoals(parsedState.selectedGoals || []);
      setTrinitySelectionId(parsedState.trinitySelectionId || null);
      setSelectedTier(parsedState.selectedTier || null);
      setHasPhysicalStore(parsedState.hasPhysicalStore || null);
      setAEDUpsellChoice(parsedState.aedUpsellChoice || null);
      setIncludeConsultation(parsedState.includeConsultation || false);
    }
  }, []);

  useEffect(() => {
    const stateToSave = {
      currentStep,
      solutionType,
      selectedIndustry,
      selectedGoals,
      trinitySelectionId,
      selectedTier,
      hasPhysicalStore,
      aedUpsellChoice,
      includeConsultation,
    };
    localStorage.setItem("quoteBuilderState", JSON.stringify(stateToSave));
  }, [
    currentStep,
    solutionType,
    selectedIndustry,
    selectedGoals,
    trinitySelectionId,
    selectedTier,
    hasPhysicalStore,
    aedUpsellChoice,
    includeConsultation,
  ]);

  const calculateRunningTotal = useCallback(() => {
    let total = 0;
    const trinitySelection = ALL_TRINITY_OPTIONS.find(
      (opt) => opt.id === trinitySelectionId
    );
    const tier = platformTiers.find((t) => t.id === selectedTier);

    let baseTrinityPrice = trinitySelection ? trinitySelection.betaPrice : 0;

    if (aedUpsellChoice && aedUpsellChoice !== "skip") {
      const upsellPackage = ALL_TRINITY_OPTIONS.find(
        (opt) => opt.id === aedUpsellChoice && opt.type === "package"
      );
      if (upsellPackage) {
        baseTrinityPrice = upsellPackage.betaPrice;
      } else if (aedUpsellChoice === "aed-only") {
        const aedCost =
          ALL_TRINITY_OPTIONS.find((opt) => opt.id === "aed")?.betaPrice || 0;
        baseTrinityPrice += aedCost;
      }
    }

    total += baseTrinityPrice;

    if (tier) {
      total += (tier.minPrice + tier.maxPrice) / 2;
    }

    if (
      hasPhysicalStore &&
      (trinitySelectionId === "trinity-plus" || trinitySelectionId === "garo")
    ) {
      total += 1600;
    }

    return Math.round(total);
  }, [aedUpsellChoice, selectedTier, trinitySelectionId, hasPhysicalStore]);

  const showToastMessage = useCallback((message) => {
    setShowToast(message);
  }, []);

  const getSteps = useCallback(() => {
    if (solutionType === "trinity") {
      const steps = ["Solution Type", "Trinity Package", "AED Upsell"];
      if (
        trinitySelectionId === "trinity-plus" ||
        trinitySelectionId === "garo"
      ) {
        steps.push("Store Type");
      }
      steps.push("Review & Purchase");
      return steps;
    }
    if (solutionType === "website")
      return ["Solution Type", "Industry", "Goals", "Platform Tier", "Review"];
    if (solutionType === "both")
      return [
        "Solution Type",
        "Industry",
        "Trinity Package",
        "Platform Tier",
        "Review",
      ];
    return ["Solution Type"];
  }, [solutionType, trinitySelectionId]);

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
    setSelectedGoals([]);
    setTrinitySelectionId(null);
    setSelectedTier(null);
    setHasPhysicalStore(null);
    setName("");
    setEmail("");
    setAdditionalNotes("");
    setKeywords("");
    setSelectedSystems("");
    setSelectedDashboards("");
    setAEDUpsellChoice(null);
    setIncludeConsultation(false);
    localStorage.removeItem("quoteBuilderState");
    showToastMessage("Selections have been reset.");
  }, [showToastMessage]);

  const recommendations = useMemo(() => {
    let trinityRec = "trinity-core";
    let tierRec = "full";
    if (selectedGoals.includes("scale") || selectedIndustry === "retail")
      trinityRec = "trinity-plus";
    if (
      selectedGoals.includes("automation") &&
      selectedGoals.includes("insights")
    )
      tierRec = "premium";
    else if (selectedGoals.length <= 1 && !selectedGoals.includes("scale"))
      tierRec = "foundation";
    return { trinityRec, tierRec };
  }, [selectedGoals, selectedIndustry]);

  const handlePayment = useCallback(
    async (action) => {
      if (!name || !email) {
        showToastMessage("Error: Please enter your name and email to proceed.");
        return;
      }

      const stripeConfigured = Boolean(STRIPE_KEY && stripePromise);
      if (!stripeConfigured) {
        showToastMessage("Error: Payment processing is not configured.");
        return;
      }

      setIsProcessing(true);
      setProcessingAction(action);

      const CONSULTATION_FEE = 99;
      let priceToCharge;
      let serviceDescription;

      if (action === "full") {
        const total = calculateRunningTotal();
        const isBundle =
          solutionType === "both" &&
          ALL_TRINITY_OPTIONS.find((opt) => opt.id === trinitySelectionId) &&
          platformTiers.find((t) => t.id === selectedTier);
        const basePrice = isBundle ? Math.round(total * 0.9) : total; 

        priceToCharge = applyDiscount(basePrice);

        serviceDescription = mapToApiServiceType(
          solutionType,
          trinitySelectionId
        );
      } else {
        priceToCharge = CONSULTATION_FEE;
        serviceDescription = "consultation_booking";
      }

      try {
        const checkoutData = {
          name,
          email,
          price: priceToCharge,
          serviceType: serviceDescription,
          targetAudience: generateTargetAudience(
            selectedIndustry,
            selectedGoals
          ),
          campaignDuration: generateCampaignDuration(
            solutionType,
            trinitySelectionId
          ),
          notes:
            action === "full"
              ? `Full purchase. ${includeConsultation ? "Free consultation included." : ""} | Notes: ${additionalNotes || ""} | Systems: ${selectedSystems || "None"} | Dashboards: ${selectedDashboards || "None"} | Keywords: ${keywords || "None"} | Solution: ${solutionType} | Trinity: ${trinitySelectionId || "None"} | Tier: ${selectedTier || "None"} | Physical Store: ${hasPhysicalStore ? "Yes" : "No"}`.trim()
              : `Consultation booking. Customer interested in ${solutionType || "general services"}.`,
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
        setProcessingAction(null);
      }
    },
    [
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
      showToastMessage,
      includeConsultation,
    ]
  );

  const renderStepContent = () => {
    const steps = getSteps();
    const isReviewStep = steps.length > 1 && steps.length === currentStep;

    const stepProps = {
      solutionType,
      setSolutionType,
      selectedIndustry,
      setSelectedIndustry,
      selectedGoals,
      setSelectedGoals,
      trinitySelectionId,
      setTrinitySelectionId,
      selectedTier,
      setSelectedTier,
      hasPhysicalStore,
      setHasPhysicalStore,
      aedUpsellChoice,
      setAEDUpsellChoice,
      recommendations,
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
      isProcessing,
      calculateRunningTotal,
      nextStep,
      prevStep,
      handlePayment,
      processingAction,
      includeConsultation,
      setIncludeConsultation,
    };

    if (isReviewStep && solutionType) {
      return <MemoizedFinalSummary {...stepProps} />;
    }

    switch (solutionType) {
      case "trinity":
        switch (currentStep) {
          case 1:
            return <MemoizedSolutionChoice {...stepProps} />;
          case 2:
            return <MemoizedTrinityPackages {...stepProps} />;
          case 3:
            return <MemoizedAEDUpsell {...stepProps} />;
          case 4:
            return trinitySelectionId === "trinity-plus" ||
              trinitySelectionId === "garo" ? (
              <MemoizedStoreType {...stepProps} />
            ) : null;
          default:
            return null;
        }
      case "website":
        switch (currentStep) {
          case 1:
            return <MemoizedSolutionChoice {...stepProps} />;
          case 2:
            return <MemoizedIndustryStep {...stepProps} />;
          case 3:
            return <MemoizedGoalsStep {...stepProps} />;
          case 4:
            return <MemoizedPlatformTierStep {...stepProps} />;
          default:
            return null;
        }
      case "both":
        switch (currentStep) {
          case 1:
            return <MemoizedSolutionChoice {...stepProps} />;
          case 2:
            return <MemoizedIndustryStep {...stepProps} />;
          case 3:
            return <MemoizedTrinityPackages {...stepProps} />;
          case 4:
            return <MemoizedPlatformTierStep {...stepProps} />;
          default:
            return null;
        }
      default:
        return <MemoizedSolutionChoice {...stepProps} />;
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
        <Container
          maxWidth="xl"
          sx={{ py: { xs: 6, md: 8 }, pt: { xs: 20, md: 22 } }}
        >
          <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
            <Typography variant="h1" component="h1" gutterBottom>
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
