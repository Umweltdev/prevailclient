import PropTypes from "prop-types";
import { useState } from "react";
import { Box, Typography, Button, Paper, Grid, Chip } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StepHeader from "../../../ReusedComponents/StepHeader";
import BudgetTracker from "../../../ReusedComponents/BudgetTracker";

const GetStartedStep = ({ formData, handleBack }) => {
  const [selectedPath, setSelectedPath] = useState(null);

  const solutionsCost = formData.solutions.reduce(
    (acc, solution) => acc + solution.price,
    0
  );
  const dashboardsCost = formData.dashboards.reduce(
    (acc, dash) => acc + dash.price,
    0
  );
  const platformCost = formData.platform ? formData.platform.price : 0;
  const totalSpent = solutionsCost + dashboardsCost + platformCost;
  const budget = formData.budget;

  const options = [
    {
      title: "Template Solution",
      desc: "Quick deployment, proven results",
      price: totalSpent * 0.6,
      deposit: totalSpent * 0.6 * 0.3,
      features: [
        "Ready-to-deploy solution",
        "Industry-specific features",
        "Customizable design",
        "Free consultation included",
      ],
      buttonText: "Get Template Solution",
    },
    {
      title: "Custom Development",
      desc: "Tailored to your exact needs",
      price: totalSpent,
      deposit: totalSpent * 0.3,
      features: [
        "100% customized solution",
        "Unique features for your business",
        "Dedicated development team",
        "Milestone-based payments",
      ],
      buttonText: "Book Consultation (€99)",
    },
    {
      title: "Hybrid Approach",
      desc: "Mix of templates + customization",
      price: totalSpent * 0.8,
      deposit: totalSpent * 0.8 * 0.3,
      features: [
        "Partially customized solution",
        "Faster deployment",
        "Budget-friendly",
        "Dedicated support",
      ],
      buttonText: "Choose Hybrid Approach",
    },
    {
      title: "Subscription Model",
      desc: "Pay monthly and scale gradually",
      price: totalSpent * 0.4,
      deposit: totalSpent * 0.4 * 0.3,
      features: [
        "Lower upfront cost",
        "Monthly updates",
        "Flexible scaling",
        "Support included",
      ],
      buttonText: "Subscribe Now",
    },
  ];

  const recommendedIndex = totalSpent > 4000 ? 1 : 0;

  const ChoiceCard = ({ option, isRecommended }) => {
    const isSelected = selectedPath === option.title;

    return (
      <Paper
        variant="outlined"
        sx={{
          p: 3,
          height: "100%",
          position: "relative",
          border: "1px solid",
          borderColor: isSelected
            ? "primary.main"
            : isRecommended
              ? "primary.main"
              : "divider",
          boxShadow: isSelected ? 2 : 0,
          cursor: "pointer",
          backgroundColor: isSelected ? "primary.lightest" : "background.paper",
        }}
        onClick={() => setSelectedPath(option.title)}
      >
        {isRecommended && (
          <Chip
            label="Recommended"
            color="primary"
            sx={{ position: "absolute", top: 16, right: 16 }}
          />
        )}
        <Typography variant="h5">{option.title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {option.desc}
        </Typography>
        {option.features.map((feature) => (
          <Box
            key={feature}
            sx={{ display: "flex", alignItems: "center", mb: 1 }}
          >
            <CheckCircleIcon color="success" sx={{ fontSize: 18, mr: 1 }} />
            <Typography variant="body2">{feature}</Typography>
          </Box>
        ))}
        <Paper
          sx={{
            p: 2,
            mt: 3,
            mb: 2,
            background: (theme) => theme.palette.grey[100],
          }}
        >
          <Typography variant="h4" color="primary.main">
            €{Math.round(option.price).toLocaleString()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            €{Math.round(option.deposit).toLocaleString()} deposit
          </Typography>
        </Paper>
        <Button fullWidth variant="contained" size="large">
          {option.buttonText}
        </Button>
      </Paper>
    );
  };

  ChoiceCard.propTypes = {
    option: PropTypes.shape({
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      deposit: PropTypes.number.isRequired,
      features: PropTypes.arrayOf(PropTypes.string).isRequired,
      buttonText: PropTypes.string.isRequired,
    }).isRequired,
    isRecommended: PropTypes.bool.isRequired,
  };

  return (
    <Box>
      <StepHeader
        step={6}
        title="Choose Your Path"
        subtitle="Based on your selections and budget"
      />

      <BudgetTracker budget={budget} spent={totalSpent} />

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {options.map((option, index) => (
          <Grid item xs={12} md={6} key={option.title}>
            <ChoiceCard
              option={option}
              isRecommended={index === recommendedIndex}
            />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 4 }}>
        <Button variant="outlined" onClick={handleBack}>
          Back
        </Button>
      </Box>
    </Box>
  );
};

GetStartedStep.propTypes = {
  formData: PropTypes.object.isRequired,
  handleBack: PropTypes.func.isRequired,
};

export default GetStartedStep;
