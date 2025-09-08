import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import PropTypes from "prop-types";
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
  CardActionArea,
  Paper,
  Avatar,
  Slide,
  Grow,
  Zoom,
  Stack,
  Badge,
  Skeleton,
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
  Palette,
  Megaphone,
  Settings,
  Star,
  LocateOff as LocalOffer,
  Bus as Business,
  TrendingUp as Growth,
  Ruler as Schedule,
} from "lucide-react";

// Enhanced theme configuration
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
    success: {
      main: "#10B981",
      light: "#34D399",
      dark: "#059669",
    },
    warning: {
      main: "#F59E0B",
      light: "#FBBF24",
      dark: "#D97706",
    },
    error: {
      main: "#EF4444",
      light: "#F87171",
      dark: "#DC2626",
    },
    grey: {
      50: "#F9FAFB",
      100: "#F3F4F6",
      200: "#E5E7EB",
      300: "#D1D5DB",
      400: "#9CA3AF",
      500: "#6B7280",
      600: "#4B5563",
      700: "#374151",
      800: "#1F2937",
      900: "#111827",
    },
    text: {
      primary: "#111827",
      secondary: "#6B7280",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "3.5rem",
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: "-0.025em",
      "@media (max-width:600px)": {
        fontSize: "2.5rem",
      },
    },
    h2: {
      fontSize: "2.25rem",
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "-0.025em",
      "@media (max-width:600px)": {
        fontSize: "1.875rem",
      },
    },
    h3: {
      fontSize: "1.875rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: "1.125rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "12px 24px",
          fontSize: "0.95rem",
          fontWeight: 600,
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
      styleOverrides: {
        root: {
          borderRadius: 12,
          fontWeight: 600,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 12,
          },
        },
      },
    },
    MuiStepper: {
      styleOverrides: {
        root: {
          background: "transparent",
        },
      },
    },
  },
});

// Service definitions with enhanced styling
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

// Enhanced Brand Identity Packages
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

// Enhanced Campaign Packages
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

// Enhanced Trinity Options
const TRINITY_OPTIONS = [
  {
    id: "expense",
    type: "individual",
    name: "Expense Manager",
    icon: "💰",
    description:
      "AI-powered financial planning that ensures you never run out of cash",
    betaPrice: 200,
    standardPrice: 1500,
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
    betaPrice: 200,
    standardPrice: 1500,
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
    betaPrice: 200,
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
    betaPrice: 600,
    standardPrice: 4500,
    includes: ["💰 Expense Manager", "📈 MCD System", "🎯 RCD System"],
    savings: 3900,
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
    benefits: ["Complete automation", "Maximum savings", "Full integration"],
    note: "GARO requires €1,600 for physical stores",
  },
];

// Enhanced Platform tiers
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

// Enhanced SelectableCard component
const SelectableCard = ({ children, selected, onClick, sx, hover = true }) => (
  <Grow in timeout={500}>
    <Card
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
        "&::before": selected
          ? {
              content: '""',
              position: "absolute",
              top: -2,
              left: -2,
              right: -2,
              bottom: -2,
              background: "linear-gradient(135deg, #6366F1, #8B5CF6, #EC4899)",
              borderRadius: "inherit",
              zIndex: -1,
            }
          : {},
        "&:hover": hover
          ? {
              transform: "scale(1.02)",
              borderColor: selected ? "primary.main" : "primary.light",
              boxShadow: "0 8px 25px rgba(99, 102, 241, 0.15)",
              "& .card-icon": {
                transform: "scale(1.1)",
              },
            }
          : {},
        ...sx,
      }}
    >
      <CardActionArea
        onClick={onClick}
        sx={{
          height: "100%",
          borderRadius: "inherit",
          "&:hover .MuiCardActionArea-focusHighlight": {
            opacity: 0,
          },
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
      </CardActionArea>
    </Card>
  </Grow>
);

SelectableCard.propTypes = {
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
  sx: PropTypes.object,
  hover: PropTypes.bool,
};

// Enhanced Service Selection Component
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
          <Chip
            label="Step 1 of 4: Service Selection"
            color="primary"
            variant="outlined"
            sx={{
              px: 3,
              py: 1,
              fontSize: "0.9rem",
              fontWeight: 600,
            }}
          />
          <Typography variant="h2" gutterBottom>
            What services do you need?
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 600, fontSize: "1.1rem", lineHeight: 1.7 }}
          >
            Select all the services that fit your business needs. You can choose
            multiple services for a comprehensive solution.
          </Typography>

          {selectedServices.length > 0 && (
            <Zoom in>
              <Chip
                label={`${selectedServices.length} service${
                  selectedServices.length > 1 ? "s" : ""
                } selected`}
                color="success"
                variant="filled"
                icon={<Check size={16} />}
                sx={{
                  py: 2,
                  px: 3,
                  fontSize: "0.9rem",
                  fontWeight: 600,
                }}
              />
            </Zoom>
          )}
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
                      className="card-icon"
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: 3,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 3,
                        background: service.gradient,
                        transition: "transform 0.3s ease",
                        boxShadow: `0 8px 25px ${service.color}25`,
                      }}
                    >
                      <service.icon
                        style={{
                          color: "white",
                          width: 36,
                          height: 36,
                        }}
                      />
                    </Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      fontWeight={700}
                    >
                      {service.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 3, lineHeight: 1.6 }}
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
                        <Chip
                          key={benefit}
                          label={benefit}
                          size="small"
                          sx={{
                            bgcolor: "grey.100",
                            fontSize: "0.75rem",
                            height: 24,
                          }}
                        />
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
            sx={{
              minWidth: 220,
              py: 1.5,
              fontSize: "1rem",
              background:
                selectedServices.length > 0
                  ? "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)"
                  : undefined,
            }}
          >
            Continue with {selectedServices.length} service
            {selectedServices.length !== 1 ? "s" : ""}
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

// Enhanced Industry Selection
const IndustrySelection = ({
  selectedIndustry,
  setSelectedIndustry,
  nextStep,
  prevStep,
}) => (
  <Fade in timeout={500}>
    <Box>
      <Stack spacing={3} alignItems="center" textAlign="center" mb={6}>
        <Chip
          label="Step 2 of 4: Industry Selection"
          color="primary"
          variant="outlined"
          sx={{ px: 3, py: 1, fontSize: "0.9rem", fontWeight: 600 }}
        />
        <Typography variant="h2" gutterBottom>
          What industry is your business in?
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 600, fontSize: "1.1rem", lineHeight: 1.7 }}
        >
          This helps us tailor our recommendations and customize the solution
          for your specific industry needs.
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
                  <Box
                    sx={{
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 3,
                      mx: "auto",
                      background: `linear-gradient(135deg, ${industry.color}20, ${industry.color}10)`,
                      border: `2px solid ${industry.color}30`,
                    }}
                  >
                    <Typography
                      variant="h3"
                      component="p"
                      sx={{ fontSize: "2.5rem" }}
                    >
                      {industry.icon}
                    </Typography>
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    textAlign="center"
                    fontWeight={600}
                  >
                    {industry.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign="center"
                    sx={{ lineHeight: 1.6 }}
                  >
                    {industry.examples}
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
          sx={{ minWidth: 120 }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          size="large"
          onClick={nextStep}
          disabled={!selectedIndustry}
          endIcon={<ChevronRight size={20} />}
          sx={{ minWidth: 160 }}
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

// Enhanced Brand Package Selection
const BrandPackageSelection = ({
  selectedPackage,
  setSelectedPackage,
  nextStep,
  prevStep,
  currentServiceIndex,
  totalServices,
}) => (
  <Fade in timeout={500}>
    <Box>
      <Stack spacing={3} alignItems="center" textAlign="center" mb={6}>
        <Chip
          label={`Service ${
            currentServiceIndex + 1
          } of ${totalServices}: Brand Identity`}
          color="primary"
          variant="outlined"
          sx={{ px: 3, py: 1, fontSize: "0.9rem", fontWeight: 600 }}
        />
        <Typography variant="h2" gutterBottom>
          Choose Your Brand Identity Package
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 700, fontSize: "1.1rem", lineHeight: 1.7 }}
        >
          Select the package that best fits your brand identity needs. All
          packages include professional design and brand strategy.
        </Typography>
      </Stack>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        {BRAND_PACKAGES.map((pkg, index) => (
          <Grid item xs={12} md={4} key={pkg.id}>
            <Grow in timeout={300 + index * 150}>
              <div>
                <SelectableCard
                  selected={selectedPackage === pkg.id}
                  onClick={() => setSelectedPackage(pkg.id)}
                  sx={{
                    height: "100%",
                    position: "relative",
                  }}
                >
                  {pkg.popular && (
                    <Chip
                      label="Most Popular"
                      color="primary"
                      size="small"
                      sx={{
                        position: "absolute",
                        top: -10,
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 1,
                        bgcolor: "primary.main",
                        color: "white",
                        fontWeight: 600,
                      }}
                    />
                  )}

                  <Stack spacing={2} height="100%">
                    <Box textAlign="center" pt={pkg.popular ? 2 : 0}>
                      <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        fontWeight={700}
                      >
                        {pkg.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2, lineHeight: 1.6 }}
                      >
                        {pkg.description}
                      </Typography>
                      <Box sx={{ mb: 2 }}>
                        <Typography
                          variant="h3"
                          component="p"
                          color="primary"
                          sx={{ fontWeight: 800, mb: 0.5 }}
                        >
                          €{pkg.price.toLocaleString()}
                        </Typography>
                        <Chip
                          label={pkg.deliveryTime}
                          size="small"
                          icon={<Schedule size={14} />}
                          sx={{ bgcolor: "grey.100", fontSize: "0.75rem" }}
                        />
                      </Box>
                    </Box>

                    <List dense sx={{ p: 0, flexGrow: 1 }}>
                      {pkg.features.map((feature, idx) => (
                        <ListItem key={idx} disableGutters sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <Box
                              sx={{
                                width: 20,
                                height: 20,
                                borderRadius: "50%",
                                bgcolor: "success.main",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Check size={12} color="white" />
                            </Box>
                          </ListItemIcon>
                          <ListItemText
                            primary={feature}
                            primaryTypographyProps={{
                              variant: "body2",
                              sx: { lineHeight: 1.6 },
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
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
          sx={{ minWidth: 120 }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          size="large"
          onClick={nextStep}
          disabled={!selectedPackage}
          endIcon={<ChevronRight size={20} />}
          sx={{ minWidth: 160 }}
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
  currentServiceIndex: PropTypes.number,
  totalServices: PropTypes.number,
};

// Enhanced Campaign Package Selection
const CampaignPackageSelection = ({
  selectedCampaign,
  setSelectedCampaign,
  nextStep,
  prevStep,
  currentServiceIndex,
  totalServices,
}) => (
  <Fade in timeout={500}>
    <Box>
      <Stack spacing={3} alignItems="center" textAlign="center" mb={6}>
        <Chip
          label={`Service ${
            currentServiceIndex + 1
          } of ${totalServices}: Digital Campaigns`}
          color="primary"
          variant="outlined"
          sx={{ px: 3, py: 1, fontSize: "0.9rem", fontWeight: 600 }}
        />
        <Typography variant="h2" gutterBottom>
          Choose Your Campaign Package
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 700, fontSize: "1.1rem", lineHeight: 1.7 }}
        >
          Select the campaign package that matches your marketing goals and
          budget. All packages include professional setup and optimization.
        </Typography>
      </Stack>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        {CAMPAIGN_PACKAGES.map((campaign, index) => (
          <Grid item xs={12} md={4} key={campaign.id}>
            <Grow in timeout={300 + index * 150}>
              <div>
                <SelectableCard
                  selected={selectedCampaign === campaign.id}
                  onClick={() => setSelectedCampaign(campaign.id)}
                  sx={{ height: "100%" }}
                >
                  {campaign.featured && (
                    <Chip
                      label="Most Popular"
                      color="primary"
                      size="small"
                      sx={{
                        position: "absolute",
                        top: -10,
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 1,
                        bgcolor: "primary.main",
                        color: "white",
                        fontWeight: 600,
                      }}
                    />
                  )}

                  <Stack spacing={2} height="100%">
                    <Box textAlign="center" pt={campaign.featured ? 2 : 0}>
                      <Typography variant="h3" sx={{ mb: 1, fontSize: "2rem" }}>
                        {campaign.icon}
                      </Typography>
                      <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        fontWeight={700}
                      >
                        {campaign.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2, lineHeight: 1.6 }}
                      >
                        {campaign.description}
                      </Typography>
                      <Box sx={{ mb: 2 }}>
                        <Typography
                          variant="h3"
                          component="p"
                          color="primary"
                          sx={{ fontWeight: 800, mb: 0.5 }}
                        >
                          €{campaign.price.toLocaleString()}
                        </Typography>
                        <Chip
                          label={campaign.deliveryTime}
                          size="small"
                          icon={<Schedule size={14} />}
                          sx={{ bgcolor: "grey.100", fontSize: "0.75rem" }}
                        />
                      </Box>
                    </Box>

                    <List dense sx={{ p: 0, flexGrow: 1 }}>
                      {campaign.features.map((feature, idx) => (
                        <ListItem key={idx} disableGutters sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <Box
                              sx={{
                                width: 20,
                                height: 20,
                                borderRadius: "50%",
                                bgcolor: "success.main",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Check size={12} color="white" />
                            </Box>
                          </ListItemIcon>
                          <ListItemText
                            primary={feature}
                            primaryTypographyProps={{
                              variant: "body2",
                              sx: { lineHeight: 1.6 },
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
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
          sx={{ minWidth: 120 }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          size="large"
          onClick={nextStep}
          disabled={!selectedCampaign}
          endIcon={<ChevronRight size={20} />}
          sx={{ minWidth: 160 }}
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
  currentServiceIndex: PropTypes.number,
  totalServices: PropTypes.number,
};

// Enhanced Trinity Package Selection
const TrinityPackageSelection = ({
  selectedTrinity,
  setSelectedTrinity,
  nextStep,
  prevStep,
  currentServiceIndex,
  totalServices,
  isPartOfPlatform = false,
}) => (
  <Fade in timeout={500}>
    <Box>
      <Stack spacing={3} alignItems="center" textAlign="center" mb={6}>
        <Chip
          label={
            isPartOfPlatform
              ? `Service ${
                  currentServiceIndex + 1
                } of ${totalServices}: Platform Systems`
              : `Service ${
                  currentServiceIndex + 1
                } of ${totalServices}: Trinity Systems`
          }
          color="primary"
          variant="outlined"
          sx={{ px: 3, py: 1, fontSize: "0.9rem", fontWeight: 600 }}
        />
        <Typography variant="h2" gutterBottom>
          Choose Your Trinity Solution
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 700, fontSize: "1.1rem", lineHeight: 1.7, mb: 2 }}
        >
          Select individual AI systems or complete packages. Limited-time beta
          pricing available!
        </Typography>
        <Chip
          label="🔥 BETA PRICING: Save up to 87%"
          color="error"
          variant="filled"
          sx={{
            bgcolor: "error.main",
            color: "white",
            fontWeight: 700,
            fontSize: "0.9rem",
            px: 3,
            py: 1,
            animation: "pulse 2s infinite",
            "@keyframes pulse": {
              "0%": { opacity: 1 },
              "50%": { opacity: 0.8 },
              "100%": { opacity: 1 },
            },
          }}
        />
      </Stack>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        {TRINITY_OPTIONS.map((option, index) => (
          <Grid
            item
            xs={12}
            lg={option.type === "package" ? 12 : 6}
            key={option.id}
          >
            <Grow in timeout={300 + index * 100}>
              <div>
                <SelectableCard
                  selected={selectedTrinity === option.id}
                  onClick={() => setSelectedTrinity(option.id)}
                  sx={{ height: "100%" }}
                >
                  <Stack spacing={2} height="100%">
                    {/* Header with badges */}
                    <Box
                      sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 1 }}
                    >
                      {option.baseRecommended && (
                        <Chip
                          label="Recommended"
                          size="small"
                          sx={{
                            bgcolor: "info.main",
                            color: "white",
                            fontWeight: 600,
                          }}
                        />
                      )}
                      {option.bestValue && (
                        <Chip
                          label="Best Value"
                          size="small"
                          color="success"
                          variant="filled"
                          sx={{ fontWeight: 600 }}
                        />
                      )}
                      <Chip
                        label={`Save ${option.savings}%`}
                        size="small"
                        sx={{
                          bgcolor: "error.light",
                          color: "error.contrastText",
                          fontWeight: 600,
                        }}
                      />
                    </Box>

                    {/* Content */}
                    <Grid container spacing={2}>
                      <Grid item xs={2} sm={1}>
                        <Typography variant="h3" sx={{ fontSize: "2.5rem" }}>
                          {option.icon}
                        </Typography>
                      </Grid>
                      <Grid item xs={10} sm={11}>
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="flex-start"
                          flexWrap="wrap"
                          mb={2}
                        >
                          <Box flexGrow={1} mr={2}>
                            <Typography
                              variant="h5"
                              component="h3"
                              fontWeight={700}
                              gutterBottom
                            >
                              {option.name}
                            </Typography>
                            <Typography
                              variant="body1"
                              color="text.secondary"
                              sx={{ lineHeight: 1.6, mb: 2 }}
                            >
                              {option.description}
                            </Typography>
                          </Box>
                          <Box textAlign="right" minWidth={140}>
                            <Typography
                              variant="h4"
                              sx={{
                                color: "error.main",
                                fontWeight: 800,
                                mb: 0.5,
                              }}
                            >
                              €{option.betaPrice.toLocaleString()}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                textDecoration: "line-through",
                                color: "text.disabled",
                                fontWeight: 600,
                              }}
                            >
                              €{option.standardPrice.toLocaleString()}
                            </Typography>
                          </Box>
                        </Box>

                        {/* Benefits chips */}
                        {option.benefits && (
                          <Stack
                            direction="row"
                            spacing={1}
                            flexWrap="wrap"
                            useFlexGap
                            mb={2}
                          >
                            {option.benefits.map((benefit) => (
                              <Chip
                                key={benefit}
                                label={benefit}
                                size="small"
                                sx={{
                                  bgcolor: "primary.light",
                                  color: "primary.contrastText",
                                  fontSize: "0.75rem",
                                }}
                              />
                            ))}
                          </Stack>
                        )}

                        {/* Features list */}
                        {option.features && (
                          <List dense sx={{ py: 0, mb: 2 }}>
                            {option.features.map((feature, idx) => (
                              <ListItem
                                key={idx}
                                disableGutters
                                sx={{ py: 0.25 }}
                              >
                                <ListItemIcon sx={{ minWidth: 24 }}>
                                  <Check
                                    size={14}
                                    color={theme.palette.success.main}
                                  />
                                </ListItemIcon>
                                <ListItemText
                                  primary={feature}
                                  primaryTypographyProps={{
                                    variant: "body2",
                                    sx: { lineHeight: 1.5 },
                                  }}
                                />
                              </ListItem>
                            ))}
                          </List>
                        )}

                        {/* Package includes */}
                        {option.includes && (
                          <Box mb={2}>
                            <Typography
                              variant="subtitle2"
                              gutterBottom
                              fontWeight={600}
                            >
                              Includes:
                            </Typography>
                            <Stack
                              direction="row"
                              spacing={0.5}
                              flexWrap="wrap"
                              useFlexGap
                              mb={2}
                            >
                              {option.includes.map((item) => (
                                <Chip
                                  key={item}
                                  label={item}
                                  size="small"
                                  sx={{
                                    bgcolor: "grey.100",
                                    fontSize: "0.75rem",
                                  }}
                                />
                              ))}
                            </Stack>
                            {option.savings && (
                              <Typography
                                variant="subtitle1"
                                sx={{
                                  color: "success.main",
                                  fontWeight: 700,
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 1,
                                }}
                              >
                                <LocalOffer size={16} />
                                Save €{option.savings.toLocaleString()} vs
                                individual pricing
                              </Typography>
                            )}
                          </Box>
                        )}

                        {/* Warning note */}
                        {option.note && (
                          <Alert
                            severity="warning"
                            sx={{
                              mt: 2,
                              borderRadius: 2,
                              fontSize: "0.875rem",
                            }}
                          >
                            {option.note}
                          </Alert>
                        )}
                      </Grid>
                    </Grid>
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
          sx={{ minWidth: 120 }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          size="large"
          onClick={nextStep}
          disabled={!selectedTrinity}
          endIcon={<ChevronRight size={20} />}
          sx={{ minWidth: 160 }}
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
  currentServiceIndex: PropTypes.number,
  totalServices: PropTypes.number,
  isPartOfPlatform: PropTypes.bool,
};

// Enhanced Platform Tier Selection
const PlatformTierSelection = ({
  selectedTier,
  setSelectedTier,
  nextStep,
  prevStep,
  currentServiceIndex,
  totalServices,
}) => (
  <Fade in timeout={500}>
    <Box>
      <Stack spacing={3} alignItems="center" textAlign="center" mb={6}>
        <Chip
          label={`Service ${
            currentServiceIndex + 1
          } of ${totalServices}: Platform Tier`}
          color="primary"
          variant="outlined"
          sx={{ px: 3, py: 1, fontSize: "0.9rem", fontWeight: 600 }}
        />
        <Typography variant="h2" gutterBottom>
          Select Your Platform Tier
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 700, fontSize: "1.1rem", lineHeight: 1.7 }}
        >
          Choose the functionality level that best matches your business
          requirements and growth plans.
        </Typography>
      </Stack>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        {PLATFORM_TIERS.map((tier, index) => (
          <Grid item xs={12} md={4} key={tier.id}>
            <Grow in timeout={300 + index * 150}>
              <div>
                <SelectableCard
                  selected={selectedTier === tier.id}
                  onClick={() => setSelectedTier(tier.id)}
                  sx={{ height: "100%" }}
                >
                  {tier.popular && (
                    <Chip
                      label="Most Popular"
                      color="primary"
                      size="small"
                      sx={{
                        position: "absolute",
                        top: -10,
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 1,
                        bgcolor: "primary.main",
                        color: "white",
                        fontWeight: 600,
                      }}
                    />
                  )}

                  <Stack spacing={2} height="100%">
                    <Box textAlign="center" pt={tier.popular ? 2 : 0}>
                      <Typography
                        variant="h3"
                        sx={{ mb: 1, fontSize: "2.5rem" }}
                      >
                        {tier.icon}
                      </Typography>
                      <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        fontWeight={700}
                      >
                        {tier.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2, lineHeight: 1.6 }}
                      >
                        {tier.description}
                      </Typography>
                      <Box sx={{ mb: 2 }}>
                        <Typography
                          variant="h4"
                          component="p"
                          color="primary"
                          sx={{ fontWeight: 800, mb: 0.5 }}
                        >
                          €{tier.minPrice.toLocaleString()} - €
                          {tier.maxPrice.toLocaleString()}
                        </Typography>
                        <Chip
                          label={tier.deliveryTime}
                          size="small"
                          icon={<Schedule size={14} />}
                          sx={{ bgcolor: "grey.100", fontSize: "0.75rem" }}
                        />
                      </Box>
                    </Box>

                    <List dense sx={{ p: 0, flexGrow: 1 }}>
                      {tier.features.map((feature, idx) => (
                        <ListItem key={idx} disableGutters sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <Box
                              sx={{
                                width: 20,
                                height: 20,
                                borderRadius: "50%",
                                bgcolor: "success.main",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Check size={12} color="white" />
                            </Box>
                          </ListItemIcon>
                          <ListItemText
                            primary={feature}
                            primaryTypographyProps={{
                              variant: "body2",
                              sx: { lineHeight: 1.6 },
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
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
          sx={{ minWidth: 120 }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          size="large"
          onClick={nextStep}
          disabled={!selectedTier}
          endIcon={<ChevronRight size={20} />}
          sx={{ minWidth: 160 }}
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
  currentServiceIndex: PropTypes.number,
  totalServices: PropTypes.number,
};

// Enhanced Store Type Selection
const StoreTypeSelection = ({
  hasPhysicalStore,
  setHasPhysicalStore,
  nextStep,
  prevStep,
}) => (
  <Fade in timeout={500}>
    <Box>
      <Stack spacing={3} alignItems="center" textAlign="center" mb={6}>
        <Chip
          label="Business Type Configuration"
          color="primary"
          variant="outlined"
          sx={{ px: 3, py: 1, fontSize: "0.9rem", fontWeight: 600 }}
        />
        <Typography variant="h2" gutterBottom>
          Do you have a physical storefront?
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 600, fontSize: "1.1rem", lineHeight: 1.7 }}
        >
          This affects GARO system setup requirements and pricing. Physical
          stores require additional Square POS integration.
        </Typography>
      </Stack>

      <Grid container spacing={4} sx={{ mb: 6, justifyContent: "center" }}>
        <Grid item xs={12} md={5}>
          <Grow in timeout={400}>
            <div>
              <SelectableCard
                selected={hasPhysicalStore === false}
                onClick={() => setHasPhysicalStore(false)}
                sx={{ textAlign: "center" }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                    mx: "auto",
                    background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
                    boxShadow: "0 8px 25px rgba(99, 102, 241, 0.3)",
                  }}
                >
                  <Wifi size={36} color="white" />
                </Box>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  fontWeight={700}
                >
                  E-commerce Only
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 3, lineHeight: 1.6 }}
                >
                  Online business without a physical location. Perfect for
                  digital-first companies.
                </Typography>
                <Chip
                  label="Standard API setup included"
                  color="success"
                  variant="filled"
                  size="small"
                  sx={{ fontWeight: 600 }}
                />
              </SelectableCard>
            </div>
          </Grow>
        </Grid>
        <Grid item xs={12} md={5}>
          <Grow in timeout={600}>
            <div>
              <SelectableCard
                selected={hasPhysicalStore === true}
                onClick={() => setHasPhysicalStore(true)}
                sx={{ textAlign: "center" }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                    mx: "auto",
                    background: "linear-gradient(135deg, #059669, #10B981)",
                    boxShadow: "0 8px 25px rgba(5, 150, 105, 0.3)",
                  }}
                >
                  <Building size={36} color="white" />
                </Box>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  fontWeight={700}
                >
                  Physical Storefront
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 3, lineHeight: 1.6 }}
                >
                  Brick-and-mortar location with inventory management needs and
                  POS integration.
                </Typography>
                <Chip
                  label="Includes €1,600 Square setup & training"
                  color="warning"
                  variant="filled"
                  size="small"
                  sx={{ fontWeight: 600 }}
                />
              </SelectableCard>
            </div>
          </Grow>
        </Grid>
      </Grid>

      <Stack direction="row" spacing={2} justifyContent="center">
        <Button
          variant="outlined"
          size="large"
          onClick={prevStep}
          startIcon={<ChevronLeft size={20} />}
          sx={{ minWidth: 120 }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          size="large"
          onClick={nextStep}
          disabled={hasPhysicalStore === null}
          endIcon={<ChevronRight size={20} />}
          sx={{ minWidth: 160 }}
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

// Enhanced Final Summary
const FinalSummary = ({
  selectedServices,
  selectedIndustry,
  serviceSelections,
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
  handleCheckout,
  isProcessing,
  calculateTotal,
}) => {
  const total = calculateTotal();

  const getServiceName = (serviceId) => {
    const service = SERVICES.find((s) => s.id === serviceId);
    return service?.name || "Unknown Service";
  };

  const getServiceSelectionDetails = (serviceId) => {
    const selection = serviceSelections[serviceId];
    let details = [];
    let price = 0;

    if (serviceId === "brand-identity" && selection?.package) {
      const pkg = BRAND_PACKAGES.find((p) => p.id === selection.package);
      if (pkg) {
        details.push(pkg.name);
        price += pkg.price;
      }
    }

    if (serviceId === "ad-campaigns" && selection?.campaign) {
      const campaign = CAMPAIGN_PACKAGES.find(
        (p) => p.id === selection.campaign
      );
      if (campaign) {
        details.push(campaign.name);
        price += campaign.price;
      }
    }

    if (
      (serviceId === "trinity-systems" || serviceId === "complete-platform") &&
      selection?.trinity
    ) {
      const trinity = TRINITY_OPTIONS.find((p) => p.id === selection.trinity);
      if (trinity) {
        details.push(trinity.name);
        price += trinity.betaPrice;
      }
    }

    if (serviceId === "complete-platform" && selection?.tier) {
      const tier = PLATFORM_TIERS.find((t) => t.id === selection.tier);
      if (tier) {
        details.push(`${tier.name} Platform`);
        price += (tier.minPrice + tier.maxPrice) / 2;
      }
    }

    return { details, price };
  };

  const industryInfo = industries.find((i) => i.id === selectedIndustry);

  return (
    <Fade in timeout={500}>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={8}>
          <Stack spacing={4}>
            <Box>
              <Stack spacing={3} alignItems="center" textAlign="center" mb={4}>
                <Chip
                  label="Final Step: Review & Purchase"
                  color="primary"
                  variant="outlined"
                  sx={{ px: 3, py: 1, fontSize: "0.9rem", fontWeight: 600 }}
                />
                <Typography variant="h2" gutterBottom>
                  Confirm Your Configuration
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ maxWidth: 600, fontSize: "1.1rem", lineHeight: 1.7 }}
                >
                  Review your selections and provide your details to proceed
                  with your custom solution.
                </Typography>
              </Stack>
            </Box>

            <Paper
              elevation={0}
              sx={{ p: 4, border: "1px solid", borderColor: "grey.200" }}
            >
              <Typography variant="h5" gutterBottom fontWeight={700} mb={3}>
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
                    variant="outlined"
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
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Paper>

            <Paper
              elevation={0}
              sx={{ p: 4, border: "1px solid", borderColor: "grey.200" }}
            >
              <Typography variant="h5" gutterBottom fontWeight={700} mb={3}>
                Optional Customization
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Keywords (comma-separated)"
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    placeholder="marketing, sales, growth"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Preferred Systems"
                    value={selectedSystems}
                    onChange={(e) => setSelectedSystems(e.target.value)}
                    placeholder="CRM, ERP, Analytics"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Dashboard Preferences"
                    value={selectedDashboards}
                    onChange={(e) => setSelectedDashboards(e.target.value)}
                    placeholder="Sales, Marketing, Finance"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Additional Notes"
                    value={additionalNotes}
                    onChange={(e) => setAdditionalNotes(e.target.value)}
                    placeholder="Tell us about any specific requirements or questions you have..."
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
              position: "sticky",
              top: "24px",
              border: "1px solid",
              borderColor: "grey.200",
              borderRadius: 3,
            }}
          >
            <Box sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom fontWeight={700}>
                Order Summary
              </Typography>
              <Divider sx={{ my: 2 }} />

              <Stack spacing={3}>
                <Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    fontWeight={600}
                    color="primary"
                  >
                    Selected Services ({selectedServices.length}):
                  </Typography>
                  {selectedServices.map((serviceId) => {
                    const { details, price } =
                      getServiceSelectionDetails(serviceId);
                    return (
                      <Paper
                        key={serviceId}
                        elevation={0}
                        sx={{
                          mb: 2,
                          p: 2,
                          bgcolor: "grey.50",
                          borderRadius: 2,
                          border: "1px solid",
                          borderColor: "grey.200",
                        }}
                      >
                        <Typography variant="subtitle1" fontWeight={700}>
                          {getServiceName(serviceId)}
                        </Typography>
                        {details.map((detail, idx) => (
                          <Typography
                            key={idx}
                            variant="body2"
                            color="text.secondary"
                            sx={{ ml: 1 }}
                          >
                            • {detail}
                          </Typography>
                        ))}
                        <Typography
                          variant="h6"
                          color="primary"
                          sx={{ mt: 1, fontWeight: 700 }}
                        >
                          €{price.toLocaleString()}
                        </Typography>
                      </Paper>
                    );
                  })}
                </Box>

                {industryInfo && (
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="body1" fontWeight={600}>
                      Industry:
                    </Typography>
                    <Chip
                      label={industryInfo.name}
                      icon={<Business size={16} />}
                      size="small"
                      variant="outlined"
                    />
                  </Stack>
                )}

                {hasPhysicalStore !== null && (
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="body1" fontWeight={600}>
                      Store Type:
                    </Typography>
                    <Chip
                      label={
                        hasPhysicalStore ? "Physical Store" : "E-commerce Only"
                      }
                      icon={
                        hasPhysicalStore ? (
                          <Building size={16} />
                        ) : (
                          <Globe size={16} />
                        )
                      }
                      size="small"
                      variant="outlined"
                    />
                  </Stack>
                )}

                {hasPhysicalStore && (
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="body1" fontWeight={600}>
                      Setup Fee:
                    </Typography>
                    <Typography variant="h6" fontWeight={700}>
                      €1,600
                    </Typography>
                  </Stack>
                )}
              </Stack>

              <Box mt={4} pt={3} borderTop={1} borderColor="grey.300">
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={3}
                >
                  <Typography variant="h5" fontWeight={700}>
                    Total Price:
                  </Typography>
                  <Typography
                    variant="h4"
                    fontWeight={800}
                    sx={{
                      background:
                        "linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #EC4899 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    €{total.toLocaleString()}
                  </Typography>
                </Stack>

                <Stack spacing={2}>
                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    onClick={handleCheckout}
                    disabled={isProcessing || !name || !email}
                    startIcon={
                      isProcessing ? (
                        <CircularProgress size={20} color="inherit" />
                      ) : (
                        <Rocket size={20} />
                      )
                    }
                    sx={{
                      py: 2,
                      fontSize: "1rem",
                      fontWeight: 700,
                      background:
                        "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
                        transform: "translateY(-1px)",
                        boxShadow: "0 8px 25px rgba(99, 102, 241, 0.4)",
                      },
                    }}
                  >
                    {isProcessing ? "Processing..." : "Proceed to Checkout"}
                  </Button>

                  <Button
                    variant="outlined"
                    fullWidth
                    size="large"
                    onClick={() =>
                      window.open(
                        "https://calendly.com/your-consultation-link",
                        "_blank"
                      )
                    }
                    startIcon={<Schedule size={20} />}
                    sx={{
                      py: 2,
                      borderColor: "primary.main",
                      color: "primary.main",
                      fontWeight: 600,
                      "&:hover": {
                        borderColor: "primary.dark",
                        backgroundColor: "primary.main",
                        color: "white",
                        transform: "translateY(-1px)",
                      },
                    }}
                  >
                    Book a Free Consultation
                  </Button>

                  <Button
                    variant="text"
                    fullWidth
                    onClick={prevStep}
                    startIcon={<ChevronLeft size={20} />}
                    sx={{
                      py: 1.5,
                      color: "text.secondary",
                      fontWeight: 600,
                    }}
                  >
                    Back to Edit
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Fade>
  );
};

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
  isProcessing: PropTypes.bool.isRequired,
  calculateTotal: PropTypes.func.isRequired,
};

// Enhanced Main Wizard Component
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
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  const wizardRef = useRef(null);

  // Calculate total price
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

    // Add physical store setup fee for GARO
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

  // Get dynamic steps
  const getSteps = useCallback(() => {
    const steps = ["Services"];

    if (selectedServices.length === 0) return steps;

    // Add industry step
    if (
      selectedServices.some((s) =>
        ["brand-identity", "ad-campaigns", "complete-platform"].includes(s)
      )
    ) {
      steps.push("Industry");
    }

    // Add service-specific steps
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

    // Add store type step if needed
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
    setCurrentServiceIndex(0);
    showToastMessage("Configuration has been reset. Start fresh!");
  }, [showToastMessage]);

  const handleCheckout = useCallback(async () => {
    if (!name || !email) {
      showToastMessage("Error: Please enter your name and email to proceed.");
      return;
    }

    setIsProcessing(true);

    try {
      // Mock checkout process
      await new Promise((resolve) => setTimeout(resolve, 2500));

      const total = calculateTotal();
      showToastMessage(
        `Success! Your order for €${total.toLocaleString()} has been processed. We'll be in touch soon!`
      );
    } catch (error) {
      showToastMessage(
        `Error: ${error.message || "Something went wrong. Please try again."}`
      );
    } finally {
      setIsProcessing(false);
    }
  }, [name, email, calculateTotal, showToastMessage]);

  // Helper function to update service selections
  const updateServiceSelection = (serviceId, key, value) => {
    setServiceSelections((prev) => ({
      ...prev,
      [serviceId]: {
        ...prev[serviceId],
        [key]: value,
      },
    }));
  };

  // Render step content
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
          isProcessing={isProcessing}
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
          {/* Hero Section */}
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
          </Fade>

          {/* Progress Stepper */}
          <Fade in timeout={1200}>
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
                {steps.map((label, index) => (
                  <Step key={label}>
                    <StepLabel
                      StepIconComponent={({ active, completed }) => (
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
                          {completed ? <Check size={20} /> : index + 1}
                        </Box>
                      )}
                    >
                      {label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Fade>

          {/* Step Content */}
          {renderStepContent()}
        </Container>

        {/* Enhanced Toast Notifications */}
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
