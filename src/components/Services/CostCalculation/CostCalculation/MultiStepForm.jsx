import { useState, useCallback, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { loadStripe } from "@stripe/stripe-js";
import {
  ThemeProvider,
  createTheme,
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
  Grow,
  Zoom,
  Stack,
} from "@mui/material";
import {
  ChevronRight,
  ChevronLeft,
  Check,
  Wifi,
  Building,
  Rocket,
  RefreshCw,
  Palette,
  Megaphone,
  Settings,
} from "lucide-react";

import {
  createCheckoutSession,
  mapToApiServiceType,
  generateTargetAudience,
  generateCampaignDuration,
} from "../components/api.js";
import { applyDiscount } from "../../../user-dashboard/utils.js";

const STRIPE_KEY = import.meta.env.VITE_STRIPE_PUBLIC_KEY || "";
let stripePromise = null;
if (STRIPE_KEY) {
  stripePromise = loadStripe(STRIPE_KEY);
} else {
  console.warn(
    "VITE_STRIPE_PUBLISHABLE_KEY not set. Checkout will be disabled until configured."
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#6366F1",
      light: "#818CF8",
      dark: "#4F46E5",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#EC4899",
      light: "#F472B6",
      dark: "#DB2777",
    },
    background: {
      default: "#F8FAFC",
      paper: "#FFFFFF",
    },
    success: { main: "#10B981" },
    warning: { main: "#F59E0B" },
    error: { main: "#EF4444" },
    text: { primary: "#111827", secondary: "#6B7280" },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "3.5rem",
      fontWeight: 800,
      "@media (max-width:600px)": { fontSize: "2.5rem" },
    },
    h2: {
      fontSize: "2.25rem",
      fontWeight: 700,
      "@media (max-width:600px)": { fontSize: "1.875rem" },
    },
    h5: { fontSize: "1.25rem", fontWeight: 600 },
    button: { fontWeight: 600, textTransform: "none" },
  },
  shape: { borderRadius: 16 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "12px 24px",
          fontSize: "0.95rem",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(99, 102, 241, 0.3)",
            transform: "translateY(-1px)",
          },
        },
        contained: {
          background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
          "&:hover": {
            background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          border: "1px solid rgba(0, 0, 0, 0.05)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        },
      },
    },
    MuiChip: {
      styleOverrides: { root: { borderRadius: 12, fontWeight: 600 } },
    },
    MuiTextField: {
      styleOverrides: {
        root: { "& .MuiOutlinedInput-root": { borderRadius: 12 } },
      },
    },
    MuiStepper: {
      styleOverrides: { root: { background: "transparent" } },
    },
  },
});

const SERVICES = [
  {
    id: "brand-identity",
    name: "Brand Identity Package",
    icon: Palette,
    description:
      "Professional brand identity design and strategy that sets you apart",
    color: "#E11D48",
    gradient: "linear-gradient(135deg, #E11D48 0%, #F97316 100%)",
    benefits: ["Logo Design", "Brand Guidelines", "Marketing Materials"],
  },
  {
    id: "ad-campaigns",
    name: "Digital Ad Campaigns",
    icon: Megaphone,
    description: "Targeted digital marketing campaigns that drive real results",
    color: "#059669",
    gradient: "linear-gradient(135deg, #059669 0%, #10B981 100%)",
    benefits: ["Google Ads", "Meta Ads", "Performance Analytics"],
  },
  {
    id: "trinity-systems",
    name: "Trinity Business Systems",
    icon: Settings,
    description: "AI-powered business intelligence platforms for growth",
    color: "#7C3AED",
    gradient: "linear-gradient(135deg, #7C3AED 0%, #6366F1 100%)",
    benefits: ["AI Optimization", "Predictive Analytics", "Automation"],
  },
  {
    id: "complete-platform",
    name: "Complete Digital Platform",
    icon: Rocket,
    description: "Full-service website and business systems solution",
    color: "#DC2626",
    gradient: "linear-gradient(135deg, #DC2626 0%, #EA580C 100%)",
    benefits: ["Custom Website", "E-commerce", "Full Integration"],
  },
];

const BRAND_PACKAGES = [
  {
    id: "starter",
    name: "Starter Brand Identity",
    price: 500,
    popular: false,
    description: "Perfect for new businesses starting their brand journey",
    features: [
      "Logo design concept (up to 2 proposals)",
      "Colour scheme development",
      "Typography selection",
      "Business card design",
      "Letterhead or invoice design",
      "Brand questionnaire & style scope",
      "1 revision round",
    ],
    deliveryTime: "5-7 business days",
  },
  {
    id: "premium",
    name: "Premium Brand Identity",
    price: 750,
    popular: true,
    description: "Most popular choice for established businesses",
    features: [
      "Logo design concept (up to 2 proposals)",
      "Comprehensive colour scheme",
      "Typography system",
      "Business card design",
      "Letterhead or invoice design",
      "Brand questionnaire & style scope",
      "Brand dos and don'ts guide",
      "Up to 3 marketing materials",
      "2 revision rounds",
    ],
    deliveryTime: "7-10 business days",
  },
  {
    id: "elite",
    name: "Elite Brand Identity",
    price: 1000,
    popular: false,
    description: "Complete brand system for premium businesses",
    features: [
      "Logo design concept (up to 2 proposals)",
      "Full colour system",
      "Typography hierarchy",
      "Complete stationery suite",
      "Brand questionnaire & style scope",
      "Comprehensive brand guidelines",
      "Up to 5 marketing materials",
      "4 revision rounds",
      "Brand personality overview",
      "Printing & digital asset guides",
      "1-hour consultation meeting",
    ],
    deliveryTime: "10-14 business days",
  },
];

const CAMPAIGN_PACKAGES = [
  {
    id: "starter",
    name: "Starter Campaign",
    price: 350,
    description: "Perfect for small businesses starting digital marketing",
    icon: "🚀",
    features: [
      "Basic customer segmentation",
      "Competitor scan + keyword research (10-15 keywords)",
      "1x Google Ads campaign setup",
      "Up to 4 custom ad designs",
      "Performance report after 2 months",
    ],
    deliveryTime: "3-5 business days",
  },
  {
    id: "growth",
    name: "Growth Campaign",
    price: 500,
    description: "Most popular for SMEs seeking wider reach",
    featured: true,
    icon: "📈",
    features: [
      "Advanced customer segmentation",
      "Comprehensive competitor analysis",
      "2x Google Ads campaigns with optimization",
      "Up to 7 premium ad designs",
      "Mid-campaign update + final report",
      "CTR, conversions & ROI insights",
    ],
    deliveryTime: "5-7 business days",
  },
  {
    id: "premium",
    name: "Premium Campaign",
    price: 750,
    description: "Complete solution for market domination",
    icon: "🏆",
    features: [
      "Deluxe segmentation + 2 buyer personas",
      "In-depth competitor benchmarking",
      "3x Google Ads campaigns with ongoing optimization",
      "Up to 10 premium ad designs with copywriting",
      "Detailed analytics dashboard",
      "Strategic recommendations & next steps",
    ],
    deliveryTime: "7-10 business days",
  },
];

const TRINITY_OPTIONS = [
  {
    id: "expense",
    type: "individual",
    name: "Expense Manager",
    icon: "💰",
    description:
      "AI-powered financial planning that ensures you never run out of cash",
    betaPrice: 230,
    standardPrice: 2074,
    savings: 87,
    features: [
      "Predictive cash flow modeling",
      "7 intelligent allocation rules",
      "Emergency fund protection",
      "Automatic priority reshuffling",
      "Real-time expense tracking",
    ],
    benefits: [
      "Avoid cash shortages",
      "Optimize spending",
      "Build emergency funds",
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
    savings: 87,
    features: [
      "Real-time price optimization",
      "Marketing spend integration",
      "Automatic profit protection",
      "Platform cost tracking",
      "Dynamic pricing algorithms",
    ],
    benefits: [
      "Maintain profit margins",
      "Optimize ad ROI",
      "Automated pricing",
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
    savings: 87,
    features: [
      "Automatic loyalty tracking",
      "Viral referral networks",
      "Personalized discount vectors",
      "Lifetime value optimization",
      "Customer journey mapping",
    ],
    benefits: ["Increase customer retention", "Viral growth", "Higher LTV"],
  },
  {
    id: "garo",
    type: "individual",
    name: "GARO System",
    icon: "🧬",
    description:
      "Genetic Algorithm Restocking Optimizer - evolves perfect inventory decisions",
    betaPrice: 2230,
    standardPrice: 2074,
    savings: 87,
    features: [
      "500+ generation evolution",
      "Multi-objective fitness scoring",
      "70% stockout reduction",
      "Predictive demand modeling",
      "Automated reorder points",
    ],
    benefits: ["Reduce stockouts", "Optimize inventory", "Predict demand"],
    note: "Physical stores: includes €1,600 for Square setup & training",
  },
  {
    id: "aed",
    type: "individual",
    name: "AED System",
    icon: "🚀",
    description:
      "Advertising Efficiency Dashboard - unifies and optimizes all ad platforms",
    betaPrice: 230,
    standardPrice: 1500,
    savings: 87,
    features: [
      "4+ platform integration",
      "Real-time budget reallocation",
      "Machine learning optimization",
      "30% cost reduction average",
      "Cross-platform analytics",
    ],
    benefits: ["Unified ad management", "Reduce ad costs", "ML optimization"],
  },
  {
    id: "trinity-core",
    type: "package",
    name: "Trinity Core Package",
    icon: "⚡",
    description: "Essential business intelligence: Expense Manager + MCD + RCD",
    betaPrice: 690,
    standardPrice: 5187,
    includes: ["💰 Expense Manager", "📈 MCD System", "🎯 RCD System"],
    savings: 1728,
    baseRecommended: true,
    benefits: [
      "Complete financial control",
      "Automated pricing",
      "Customer loyalty",
    ],
  },
  {
    id: "trinity-plus",
    type: "package",
    name: "Trinity Plus Package",
    icon: "🌟",
    description: "Complete suite: All 5 systems working in perfect harmony",
    betaPrice: 2994,
    standardPrice: 10489,
    includes: [
      "💰 Expense Manager",
      "📈 MCD System",
      "🎯 RCD System",
      "🧬 GARO System",
      "🚀 AED System",
    ],
    savings: 4724,
    bestValue: true,
    benefits: ["Complete automation", "Maximum savings", "Full integration"],
    note: "GARO requires €1,600 for physical stores",
  },
];

const PLATFORM_TIERS = [
  {
    id: "foundation",
    name: "Foundation",
    minPrice: 600,
    maxPrice: 1000,
    description: "Perfect starting point for your digital presence",
    icon: "🏗️",
    features: [
      "Professional responsive website",
      "Mobile-first design",
      "Basic SEO optimization",
      "Contact forms & lead capture",
      "Social media integration",
      "SSL certificate & security",
    ],
    deliveryTime: "7-10 business days",
  },
  {
    id: "full",
    name: "Full System",
    minPrice: 1200,
    maxPrice: 2000,
    description: "Complete business solution with advanced features",
    icon: "🎯",
    popular: true,
    features: [
      "Everything in Foundation",
      "Complete ordering system",
      "Customer database & CRM",
      "Email automation workflows",
      "Payment processing integration",
      "Analytics & reporting dashboard",
      "Inventory management",
    ],
    deliveryTime: "14-21 business days",
  },
  {
    id: "premium",
    name: "Premium Enterprise",
    minPrice: 1800,
    maxPrice: 3000,
    description: "Enterprise-grade solution for scaling businesses",
    icon: "🚀",
    features: [
      "Everything in Full System",
      "Advanced analytics & insights",
      "Multi-location support",
      "API access & integrations",
      "AI-powered predictions",
      "Priority support & training",
      "Custom integrations",
    ],
    deliveryTime: "21-28 business days",
  },
];

const industries = [
  {
    id: "restaurant",
    name: "Restaurant & Food",
    icon: "🍽️",
    examples: "Restaurants, Takeaways, Cafes, Food Delivery",
    color: "#EF4444",
  },
  {
    id: "retail",
    name: "Retail & E-commerce",
    icon: "🛍️",
    examples: "Online Stores, Boutiques, Fashion, Electronics",
    color: "#8B5CF6",
  },
  {
    id: "services",
    name: "Professional Services",
    icon: "💼",
    examples: "Consulting, Legal, Financial, Healthcare",
    color: "#059669",
  },
  {
    id: "hospitality",
    name: "Hospitality & Events",
    icon: "🏨",
    examples: "Hotels, Venues, Tourism, Event Planning",
    color: "#DC2626",
  },
  {
    id: "property",
    name: "Property & Real Estate",
    icon: "🏠",
    examples: "Agents, Property Management, Development",
    color: "#0891B2",
  },
  {
    id: "other",
    name: "Other Industry",
    icon: "🚀",
    examples: "Tell us about your unique business",
    color: "#6366F1",
  },
];

const gradientText = {
  background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #EC4899 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

// --- Reusable Components ---

const SelectableCard = ({ children, selected, onClick, sx }) => (
  <Grow in timeout={500}>
    <Card
      onClick={onClick}
      elevation={0}
      sx={{
        cursor: "pointer",
        height: "100%",
        border: "2px solid",
        borderColor: selected ? "primary.main" : "grey.200",
        transform: selected ? "scale(1.02)" : "none",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        position: "relative",
        overflow: "visible",
        background: selected
          ? "linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)"
          : "white",
        "&:hover": {
          transform: "scale(1.02)",
          borderColor: selected ? "primary.main" : "primary.light",
          boxShadow: "0 8px 25px rgba(99, 102, 241, 0.15)",
        },
        ...sx,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          p: 3,
          position: "relative",
        }}
      >
        {selected && (
          <Zoom in>
            <Box
              sx={{
                position: "absolute",
                top: 16,
                right: 16,
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(99, 102, 241, 0.4)",
              }}
            >
              <Check size={16} color="white" />
            </Box>
          </Zoom>
        )}
        {children}
      </CardContent>
    </Card>
  </Grow>
);

SelectableCard.propTypes = {
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  sx: PropTypes.object,
};

const ServiceSelection = ({
  selectedServices,
  setSelectedServices,
  nextStep,
}) => {
  const toggleService = (serviceId) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  return (
    <Fade in timeout={700}>
      <Box sx={{ px: { xs: 2, md: 0 } }}>
        <Stack spacing={3} alignItems="center" textAlign="center" mb={6}>
          <Typography variant="h2" gutterBottom>
            What services do you need?
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 600 }}
          >
            Select all services that fit your business needs for a comprehensive
            solution.
          </Typography>
        </Stack>
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {SERVICES.map((service, index) => (
            <Grid item xs={12} md={6} key={service.id}>
              <Grow in timeout={500 + index * 100}>
                <div>
                  <SelectableCard
                    selected={selectedServices.includes(service.id)}
                    onClick={() => toggleService(service.id)}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: 3,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 3,
                        background: service.gradient,
                        boxShadow: `0 8px 25px ${service.color}25`,
                      }}
                    >
                      <service.icon size={36} color="white" />
                    </Box>
                    <Typography variant="h5" component="h3" fontWeight={700}>
                      {service.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ my: 2 }}
                    >
                      {service.description}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      flexWrap="wrap"
                      useFlexGap
                    >
                      {service.benefits.map((benefit) => (
                        <Chip key={benefit} label={benefit} size="small" />
                      ))}
                    </Stack>
                  </SelectableCard>
                </div>
              </Grow>
            </Grid>
          ))}
        </Grid>
        <Box textAlign="center">
          <Button
            variant="contained"
            size="large"
            onClick={nextStep}
            disabled={selectedServices.length === 0}
            endIcon={<ChevronRight size={20} />}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Fade>
  );
};

ServiceSelection.propTypes = {
  selectedServices: PropTypes.array.isRequired,
  setSelectedServices: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

const IndustrySelection = ({
  selectedIndustry,
  setSelectedIndustry,
  nextStep,
  prevStep,
}) => (
  <Fade in timeout={500}>
    <Box>
      <Stack spacing={3} alignItems="center" textAlign="center" mb={6}>
        <Typography variant="h2" gutterBottom>
          What industry is your business in?
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 600 }}
        >
          This helps us tailor our recommendations for your specific needs.
        </Typography>
      </Stack>
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {industries.map((industry, index) => (
          <Grid item xs={12} sm={6} md={4} key={industry.id}>
            <Grow in timeout={300 + index * 100}>
              <div>
                <SelectableCard
                  selected={selectedIndustry === industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                >
                  <Typography variant="h3" component="p" sx={{ mb: 2 }}>
                    {industry.icon}
                  </Typography>
                  <Typography variant="h6" component="h3" fontWeight={600}>
                    {industry.name}
                  </Typography>
                </SelectableCard>
              </div>
            </Grow>
          </Grid>
        ))}
      </Grid>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button
          variant="outlined"
          size="large"
          onClick={prevStep}
          startIcon={<ChevronLeft size={20} />}
        >
          Back
        </Button>
        <Button
          variant="contained"
          size="large"
          onClick={nextStep}
          disabled={!selectedIndustry}
          endIcon={<ChevronRight size={20} />}
        >
          Continue
        </Button>
      </Stack>
    </Box>
  </Fade>
);

IndustrySelection.propTypes = {
  selectedIndustry: PropTypes.string,
  setSelectedIndustry: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

const BrandPackageSelection = ({
  selectedPackage,
  setSelectedPackage,
  nextStep,
  prevStep,
}) => (
  <Fade in timeout={500}>
    <Box>
      <Stack spacing={3} alignItems="center" textAlign="center" mb={6}>
        <Typography variant="h2" gutterBottom>
          Choose Your Brand Identity Package
        </Typography>
      </Stack>
      <Grid container spacing={4} sx={{ mb: 6 }} alignItems="stretch">
        {BRAND_PACKAGES.map((pkg, index) => (
          <Grid item xs={12} md={4} key={pkg.id}>
            <Grow in timeout={300 + index * 150}>
              <div>
                <SelectableCard
                  selected={selectedPackage === pkg.id}
                  onClick={() => setSelectedPackage(pkg.id)}
                >
                  <Stack height="100%" justifyContent="space-between">
                    <Box>
                      <Typography variant="h5" component="h3" fontWeight={700}>
                        {pkg.name}
                      </Typography>
                      <Typography
                        variant="h3"
                        component="p"
                        color="primary"
                        sx={{ my: 2 }}
                      >
                        €{pkg.price.toLocaleString()}
                      </Typography>
                      <List dense>
                        {pkg.features.map((feature, idx) => (
                          <ListItem key={idx} disableGutters sx={{ py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                              <Check
                                size={16}
                                color={theme.palette.success.main}
                              />
                            </ListItemIcon>
                            <ListItemText primary={feature} />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </Stack>
                </SelectableCard>
              </div>
            </Grow>
          </Grid>
        ))}
      </Grid>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button
          variant="outlined"
          size="large"
          onClick={prevStep}
          startIcon={<ChevronLeft size={20} />}
        >
          Back
        </Button>
        <Button
          variant="contained"
          size="large"
          onClick={nextStep}
          disabled={!selectedPackage}
          endIcon={<ChevronRight size={20} />}
        >
          Continue
        </Button>
      </Stack>
    </Box>
  </Fade>
);

BrandPackageSelection.propTypes = {
  selectedPackage: PropTypes.string,
  setSelectedPackage: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

const CampaignPackageSelection = ({
  selectedCampaign,
  setSelectedCampaign,
  nextStep,
  prevStep,
}) => (
  <Fade in timeout={500}>
    <Box>
      <Stack spacing={3} alignItems="center" textAlign="center" mb={6}>
        <Typography variant="h2" gutterBottom>
          Choose Your Campaign Package
        </Typography>
      </Stack>
      <Grid container spacing={4} sx={{ mb: 6 }} alignItems="stretch">
        {CAMPAIGN_PACKAGES.map((campaign, index) => (
          <Grid item xs={12} md={4} key={campaign.id}>
            <Grow in timeout={300 + index * 150}>
              <div>
                <SelectableCard
                  selected={selectedCampaign === campaign.id}
                  onClick={() => setSelectedCampaign(campaign.id)}
                >
                  <Stack height="100%" justifyContent="space-between">
                    <Box>
                      <Typography variant="h5" component="h3" fontWeight={700}>
                        {campaign.name}
                      </Typography>
                      <Typography
                        variant="h3"
                        component="p"
                        color="primary"
                        sx={{ my: 2 }}
                      >
                        €{campaign.price.toLocaleString()}
                      </Typography>
                      <List dense>
                        {campaign.features.map((feature, idx) => (
                          <ListItem key={idx} disableGutters sx={{ py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                              <Check
                                size={16}
                                color={theme.palette.success.main}
                              />
                            </ListItemIcon>
                            <ListItemText primary={feature} />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </Stack>
                </SelectableCard>
              </div>
            </Grow>
          </Grid>
        ))}
      </Grid>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button
          variant="outlined"
          size="large"
          onClick={prevStep}
          startIcon={<ChevronLeft size={20} />}
        >
          Back
        </Button>
        <Button
          variant="contained"
          size="large"
          onClick={nextStep}
          disabled={!selectedCampaign}
          endIcon={<ChevronRight size={20} />}
        >
          Continue
        </Button>
      </Stack>
    </Box>
  </Fade>
);

CampaignPackageSelection.propTypes = {
  selectedCampaign: PropTypes.string,
  setSelectedCampaign: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

const TrinityPackageSelection = ({
  selectedTrinity,
  setSelectedTrinity,
  nextStep,
  prevStep,
}) => (
  <Fade in timeout={500}>
    <Box>
      <Stack spacing={3} alignItems="center" textAlign="center" mb={6}>
        <Typography variant="h2" gutterBottom>
          Choose Your Trinity Solution
        </Typography>
      </Stack>
      <Grid container spacing={4} sx={{ mb: 6 }} alignItems="stretch">
        {TRINITY_OPTIONS.map((option, index) => (
          <Grid
            item
            xs={12}
            md={option.type === "package" ? 12 : 6}
            key={option.id}
          >
            <Grow in timeout={300 + index * 100}>
              <div>
                <SelectableCard
                  selected={selectedTrinity === option.id}
                  onClick={() => setSelectedTrinity(option.id)}
                >
                  <Typography variant="h5" component="h3" fontWeight={700}>
                    {option.name}
                  </Typography>
                  <Typography variant="h4" sx={{ my: 1 }}>
                    €{option.betaPrice.toLocaleString()}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {option.description}
                  </Typography>
                </SelectableCard>
              </div>
            </Grow>
          </Grid>
        ))}
      </Grid>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button
          variant="outlined"
          size="large"
          onClick={prevStep}
          startIcon={<ChevronLeft size={20} />}
        >
          Back
        </Button>
        <Button
          variant="contained"
          size="large"
          onClick={nextStep}
          disabled={!selectedTrinity}
          endIcon={<ChevronRight size={20} />}
        >
          Continue
        </Button>
      </Stack>
    </Box>
  </Fade>
);

TrinityPackageSelection.propTypes = {
  selectedTrinity: PropTypes.string,
  setSelectedTrinity: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

const PlatformTierSelection = ({
  selectedTier,
  setSelectedTier,
  nextStep,
  prevStep,
}) => (
  <Fade in timeout={500}>
    <Box>
      <Stack spacing={3} alignItems="center" textAlign="center" mb={6}>
        <Typography variant="h2" gutterBottom>
          Select Your Platform Tier
        </Typography>
      </Stack>
      <Grid container spacing={4} sx={{ mb: 6 }} alignItems="stretch">
        {PLATFORM_TIERS.map((tier, index) => (
          <Grid item xs={12} md={4} key={tier.id}>
            <Grow in timeout={300 + index * 150}>
              <div>
                <SelectableCard
                  selected={selectedTier === tier.id}
                  onClick={() => setSelectedTier(tier.id)}
                >
                  <Stack height="100%" justifyContent="space-between">
                    <Box>
                      <Typography variant="h5" component="h3" fontWeight={700}>
                        {tier.name}
                      </Typography>
                      <Typography variant="h4" sx={{ my: 1 }}>
                        €{tier.minPrice.toLocaleString()} - €
                        {tier.maxPrice.toLocaleString()}
                      </Typography>
                      <List dense>
                        {tier.features.map((feature, idx) => (
                          <ListItem key={idx} disableGutters sx={{ py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                              <Check
                                size={16}
                                color={theme.palette.success.main}
                              />
                            </ListItemIcon>
                            <ListItemText primary={feature} />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </Stack>
                </SelectableCard>
              </div>
            </Grow>
          </Grid>
        ))}
      </Grid>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button
          variant="outlined"
          size="large"
          onClick={prevStep}
          startIcon={<ChevronLeft size={20} />}
        >
          Back
        </Button>
        <Button
          variant="contained"
          size="large"
          onClick={nextStep}
          disabled={!selectedTier}
          endIcon={<ChevronRight size={20} />}
        >
          Continue
        </Button>
      </Stack>
    </Box>
  </Fade>
);

PlatformTierSelection.propTypes = {
  selectedTier: PropTypes.string,
  setSelectedTier: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

const StoreTypeSelection = ({
  hasPhysicalStore,
  setHasPhysicalStore,
  nextStep,
  prevStep,
}) => (
  <Fade in timeout={500}>
    <Box>
      <Stack spacing={3} alignItems="center" textAlign="center" mb={6}>
        <Typography variant="h2" gutterBottom>
          Do you have a physical storefront?
        </Typography>
      </Stack>
      <Grid container spacing={4} sx={{ mb: 6, justifyContent: "center" }}>
        <Grid item xs={12} sm={6} md={5}>
          <SelectableCard
            selected={hasPhysicalStore === false}
            onClick={() => setHasPhysicalStore(false)}
          >
            <Stack alignItems="center" spacing={2}>
              <Wifi size={36} />
              <Typography variant="h5" component="h3" fontWeight={700}>
                E-commerce Only
              </Typography>
            </Stack>
          </SelectableCard>
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <SelectableCard
            selected={hasPhysicalStore === true}
            onClick={() => setHasPhysicalStore(true)}
          >
            <Stack alignItems="center" spacing={2}>
              <Building size={36} />
              <Typography variant="h5" component="h3" fontWeight={700}>
                Physical Storefront
              </Typography>
            </Stack>
          </SelectableCard>
        </Grid>
      </Grid>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button
          variant="outlined"
          size="large"
          onClick={prevStep}
          startIcon={<ChevronLeft size={20} />}
        >
          Back
        </Button>
        <Button
          variant="contained"
          size="large"
          onClick={nextStep}
          disabled={hasPhysicalStore === null}
          endIcon={<ChevronRight size={20} />}
        >
          Continue
        </Button>
      </Stack>
    </Box>
  </Fade>
);

StoreTypeSelection.propTypes = {
  hasPhysicalStore: PropTypes.bool,
  setHasPhysicalStore: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

const FinalSummary = ({
  selectedServices,
  selectedIndustry,
  hasPhysicalStore,
  name,
  setName,
  email,
  setEmail,
  prevStep,
  handleCheckout,
  handleConsultationCheckout,
  isProcessing,
  isProcessingConsult,
  calculateTotal,
}) => {
  const total = calculateTotal();
  const industryInfo = industries.find((i) => i.id === selectedIndustry);

  return (
    <Fade in timeout={500}>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={8}>
          <Stack spacing={4}>
            <Paper elevation={0} sx={{ p: { xs: 2, md: 4 } }}>
              <Typography variant="h5" fontWeight={700} mb={3}>
                Your Details
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Email *"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Grid>
              </Grid>
            </Paper>
          </Stack>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Paper
            elevation={0}
            sx={{
              position: { xs: "static", lg: "sticky" },
              top: "24px",
              p: { xs: 2, md: 3 },
            }}
          >
            <Typography variant="h5" gutterBottom fontWeight={700}>
              Order Summary
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Stack spacing={2}>
              {selectedServices.map((serviceId) => (
                <Box key={serviceId}>
                  <Typography variant="subtitle1" fontWeight={700}>
                    {SERVICES.find((s) => s.id === serviceId)?.name}
                  </Typography>
                </Box>
              ))}
              {industryInfo && (
                <Typography>Industry: {industryInfo.name}</Typography>
              )}
              {hasPhysicalStore !== null && (
                <Typography>
                  Store Type: {hasPhysicalStore ? "Physical" : "E-commerce"}
                </Typography>
              )}
            </Stack>
            <Box mt={4} pt={3} borderTop={1} borderColor="grey.300">
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
              >
                <Typography variant="h5" fontWeight={700}>
                  Deposit Price:
                </Typography>
                <Typography variant="h4" fontWeight={800} sx={gradientText}>
                  €{applyDiscount(total).toLocaleString()}
                </Typography>
              </Stack>
              <Stack spacing={2}>
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  onClick={handleCheckout}
                  disabled={isProcessing || !name || !email}
                >
                  {isProcessing ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    "Proceed to Checkout"
                  )}
                </Button>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={handleConsultationCheckout}
                  disabled={isProcessingConsult || !name || !email}
                >
                  {isProcessingConsult ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    "Book a Consultation (€83)"
                  )}
                </Button>
                <Button variant="text" fullWidth onClick={prevStep}>
                  Back to Edit
                </Button>
              </Stack>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Fade>
  );
};

// --- Main Form Component ---

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [serviceSelections, setServiceSelections] = useState({});
  const [hasPhysicalStore, setHasPhysicalStore] = useState(null);
  const [showToast, setShowToast] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [additionalNotes, setAdditionalNotes] = useState("");
  // const [keywords, setKeywords] = useState("");
  // const [selectedSystems, setSelectedSystems] = useState("");
  // const [selectedDashboards, setSelectedDashboards] = useState("");
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

    const needsPhysicalStoreSetup = selectedServices.some(
      (serviceId) =>
        serviceSelections[serviceId]?.trinity === "garo" ||
        serviceSelections[serviceId]?.trinity === "trinity-plus"
    );

    if (hasPhysicalStore && needsPhysicalStoreSetup) {
      total += 1600;
    }

    return Math.round(total);
  }, [selectedServices, serviceSelections, hasPhysicalStore]);

  const getSteps = useCallback(() => {
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
      if (service) {
        switch (serviceId) {
          case "brand-identity":
          case "ad-campaigns":
          case "trinity-systems":
            steps.push(service.name);
            break;
          case "complete-platform":
            steps.push("Platform Systems");
            steps.push("Platform Tier");
            break;
          default:
            break;
        }
      }
    });

    if (
      selectedServices.some(
        (serviceId) =>
          serviceSelections[serviceId]?.trinity === "garo" ||
          serviceSelections[serviceId]?.trinity === "trinity-plus"
      )
    ) {
      steps.push("Store Type");
    }
    steps.push("Review");
    return steps;
  }, [selectedServices, serviceSelections]);

  const steps = getSteps();

  useEffect(() => {
    if (currentStep > steps.length) {
      setCurrentStep(steps.length);
    }
  }, [steps, currentStep]);

  const scrollUp = () => {
    setTimeout(
      () => wizardRef.current?.scrollIntoView({ behavior: "smooth" }),
      100
    );
  };

  const nextStep = useCallback(() => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
      scrollUp();
    }
  }, [currentStep, steps.length]);

  const prevStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      scrollUp();
    }
  }, [currentStep]);

  const showToastMessage = useCallback((message) => {
    setShowToast(message);
  }, []);

  const resetSelections = useCallback(() => {
    setCurrentStep(1);
    setSelectedServices([]);
    setSelectedIndustry(null);
    setServiceSelections({});
    setHasPhysicalStore(null);
    setName("");
    setEmail("");
    showToastMessage("Configuration has been reset. Start fresh!");
  }, [showToastMessage]);

  const handleCheckout = useCallback(async () => {
    if (!name || !email) {
      showToastMessage("Error: Please enter your name and email.");
      return;
    }
    setIsProcessing(true);
    try {
      const checkoutData = {
        name,
        email,
        price: applyDiscount(calculateTotal()),
        serviceType: mapToApiServiceType(selectedServices, serviceSelections),
        targetAudience: generateTargetAudience(
          selectedIndustry,
          selectedServices
        ),
        campaignDuration: generateCampaignDuration(
          selectedServices,
          serviceSelections
        ),
        notes: `Details | Services: ${selectedServices.join(
          ", "
        )} | Industry: ${selectedIndustry || "N/A"} | Physical Store: ${
          hasPhysicalStore === null ? "N/A" : hasPhysicalStore ? "Yes" : "No"
        }`.trim(),
      };
      const session = await createCheckoutSession(checkoutData);
      const stripe = await stripePromise;
      if (!stripe || !session?.id) throw new Error("Checkout failed.");
      await stripe.redirectToCheckout({ sessionId: session.id });
    } catch (error) {
      showToastMessage(`Error: ${error.message}`);
    } finally {
      setIsProcessing(false);
    }
  }, [
    name,
    email,
    calculateTotal,
    showToastMessage,
    selectedServices,
    serviceSelections,
    selectedIndustry,
    hasPhysicalStore,
  ]);

  const handleConsultationCheckout = useCallback(async () => {
    if (!name || !email) {
      showToastMessage("Error: Please enter your name and email.");
      return;
    }
    setIsProcessingConsult(true);
    try {
      const checkoutData = {
        name,
        email,
        price: 83,
        serviceType: "consultation",
      };
      const session = await createCheckoutSession(checkoutData);
      const stripe = await stripePromise;
      if (!stripe || !session?.id) throw new Error("Checkout failed.");
      await stripe.redirectToCheckout({ sessionId: session.id });
    } catch (error) {
      showToastMessage(`Error: ${error.message}`);
    } finally {
      setIsProcessingConsult(false);
    }
  }, [name, email, showToastMessage]);

  const updateServiceSelection = (serviceId, key, value) => {
    setServiceSelections((prev) => ({
      ...prev,
      [serviceId]: { ...prev[serviceId], [key]: value },
    }));
  };

  const renderStepContent = () => {
    const stepName = steps[currentStep - 1];
    if (!stepName) return null;

    switch (stepName) {
      case "Services":
        return (
          <ServiceSelection
            {...{ selectedServices, setSelectedServices, nextStep }}
          />
        );
      case "Industry":
        return (
          <IndustrySelection
            {...{ selectedIndustry, setSelectedIndustry, nextStep, prevStep }}
          />
        );
      case "Brand Identity Package":
        return (
          <BrandPackageSelection
            selectedPackage={serviceSelections["brand-identity"]?.package}
            setSelectedPackage={(v) =>
              updateServiceSelection("brand-identity", "package", v)
            }
            {...{ nextStep, prevStep }}
          />
        );
      case "Digital Ad Campaigns":
        return (
          <CampaignPackageSelection
            selectedCampaign={serviceSelections["ad-campaigns"]?.campaign}
            setSelectedCampaign={(v) =>
              updateServiceSelection("ad-campaigns", "campaign", v)
            }
            {...{ nextStep, prevStep }}
          />
        );
      case "Trinity Business Systems":
        return (
          <TrinityPackageSelection
            selectedTrinity={serviceSelections["trinity-systems"]?.trinity}
            setSelectedTrinity={(v) =>
              updateServiceSelection("trinity-systems", "trinity", v)
            }
            {...{ nextStep, prevStep }}
          />
        );
      case "Platform Systems":
        return (
          <TrinityPackageSelection
            selectedTrinity={serviceSelections["complete-platform"]?.trinity}
            setSelectedTrinity={(v) =>
              updateServiceSelection("complete-platform", "trinity", v)
            }
            {...{ nextStep, prevStep }}
          />
        );
      case "Platform Tier":
        return (
          <PlatformTierSelection
            selectedTier={serviceSelections["complete-platform"]?.tier}
            setSelectedTier={(v) =>
              updateServiceSelection("complete-platform", "tier", v)
            }
            {...{ nextStep, prevStep }}
          />
        );
      case "Store Type":
        return (
          <StoreTypeSelection
            {...{ hasPhysicalStore, setHasPhysicalStore, nextStep, prevStep }}
          />
        );
      case "Review":
        return (
          <FinalSummary
            {...{
              selectedServices,
              selectedIndustry,
              serviceSelections,
              hasPhysicalStore,
              name,
              setName,
              email,
              setEmail,
              prevStep,
              handleCheckout,
              handleConsultationCheckout,
              isProcessing,
              isProcessingConsult,
              calculateTotal,
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
        <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }} ref={wizardRef}>
          <Fade in timeout={1000}>
            <Box textAlign="center" mb={{ xs: 6, md: 10 }}>
              <Typography variant="h1" gutterBottom>
                Your Partner in Accelerating the{" "}
                <Box component="span" sx={gradientText}>
                  Digital Space
                </Box>
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ maxWidth: "800px", mx: "auto", mb: 4, fontWeight: 400 }}
              >
                Our goal is to help businesses thrive by providing innovative,
                holistic solutions that accelerate growth and digital
                transformation.
              </Typography>
              <Button
                onClick={resetSelections}
                startIcon={<RefreshCw size={18} />}
              >
                Start Over
              </Button>
            </Box>
          </Fade>

          <Fade in timeout={1200}>
            <Box mb={{ xs: 6, md: 8 }}>
              <Stepper activeStep={currentStep - 1} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Fade>

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
              showToast?.toLowerCase().includes("error") ? "error" : "info"
            }
            variant="filled"
            sx={{ width: "100%" }}
          >
            {showToast}
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
};

export default MultiStepForm;


FinalSummary.propTypes = {
  selectedServices: PropTypes.array.isRequired,
  selectedIndustry: PropTypes.string,
  serviceSelections: PropTypes.object.isRequired,
  hasPhysicalStore: PropTypes.bool,
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
  handleConsultationCheckout: PropTypes.func.isRequired,
  isProcessing: PropTypes.bool.isRequired,
  isProcessingConsult: PropTypes.bool.isRequired,
  calculateTotal: PropTypes.func.isRequired,
};
