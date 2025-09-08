import PropTypes from "prop-types";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import BudgetTracker from "../ReusedComponents/BudgetTracker";
import StepHeader from "../ReusedComponents/StepHeader";

const platformsData = [
  {
    title: "Foundation",
    priceRange: "€600 - €1000",
    price: 800,
    features: [
      "Professional Website",
      "Mobile Responsive",
      "Basic SEO",
      "Contact Forms",
      "Social Media Links",
    ],
  },
  {
    title: "Full System",
    priceRange: "€1200 - €2000",
    price: 1600,
    features: [
      "Everything in Foundation",
      "Complete Ordering System",
      "Customer Database",
      "Email Automation",
      "Payment Processing",
    ],
  },
  {
    title: "Premium",
    priceRange: "€1800 - €3000",
    price: 2400,
    features: [
      "Everything in Full System",
      "Advanced Analytics",
      "Multi-location Support",
      "API Access",
      "AI Predictions",
    ],
  },
];

const InvestmentStep = ({
  onUpdate,
  budget,
  totalSpentSoFar,
  selectedPlatform,
  handleBack,
  handleNext,
}) => {
  const handlePlatformSelect = (platform) => {
    onUpdate("platform", platform);
  };

  const platformCost = selectedPlatform ? selectedPlatform.price : 0;
  const totalSpent = totalSpentSoFar + platformCost;
  const remaining = budget - totalSpent;
  const isBudgetExceeded = remaining < 0;

  return (
    <Box>
      <StepHeader
        step={3}
        title="Industry-Specific Solutions"
        subtitle="Specialized dashboards for your industry"
      />

      <Paper
        variant="outlined"
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          mb: 4,
          borderRadius: 2,
        }}
      >
        <BudgetTracker
          budget={budget}
          spent={totalSpent}
          spentLabel="Spent so far"
        />
      </Paper>

      <Grid container spacing={3}>
        {platformsData.map((platform) => {
          const isSelected = selectedPlatform?.title === platform.title;
          return (
            <Grid item xs={12} md={4} key={platform.title}>
              <Paper
                variant="outlined"
                onClick={() => handlePlatformSelect(platform)}
                sx={{
                  p: 3,
                  cursor: "pointer",
                  height: "100%",
                  border: "1px solid",
                  borderColor: isSelected ? "primary.main" : "divider",
                  backgroundColor: isSelected
                    ? "primary.lightest"
                    : "background.paper",
                  boxShadow: isSelected ? 1 : 0,
                  "&:hover": { borderColor: "primary.main", boxShadow: 2 },
                }}
              >
                <Typography variant="h5">{platform.title}</Typography>
                <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
                  {platform.priceRange}
                </Typography>
                {platform.features.map((feature) => (
                  <Box
                    key={feature}
                    sx={{ display: "flex", alignItems: "center", mb: 1 }}
                  >
                    <CheckCircleIcon
                      color="success"
                      sx={{ fontSize: 18, mr: 1 }}
                    />
                    <Typography variant="body2">{feature}</Typography>
                  </Box>
                ))}
              </Paper>
            </Grid>
          );
        })}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
        <Button variant="outlined" onClick={handleBack}>
          Back
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
          disabled={!selectedPlatform || isBudgetExceeded}
          endIcon={<DoubleArrowIcon />}
        >
          Review & Proceed
        </Button>
      </Box>
    </Box>
  );
};

InvestmentStep.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  budget: PropTypes.number.isRequired,
  totalSpentSoFar: PropTypes.number.isRequired,
  selectedPlatform: PropTypes.object,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
};

export default InvestmentStep;
