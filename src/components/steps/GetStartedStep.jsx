import PropTypes from "prop-types";
import { Box, Typography, Button, Paper, Grid, Chip } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StepHeader from "../ReusedComponents/StepHeader";

const GetStartedStep = ({ formData, handleBack }) => {
  const solutionsCost = formData.solutions.reduce(
    (acc, solution) => acc + solution.price,
    0
  );
  const dashboardsCost = formData.dashboards.reduce(
    (acc, dash) => acc + dash.price,
    0
  );
  const platformCost = formData.platform ? formData.platform.price : 0;
  const totalCost = solutionsCost + dashboardsCost + platformCost;

  const paths = {
    template: {
      title: "Template Solution",
      desc: "Quick deployment, proven results",
      price: totalCost * 0.6,
      deposit: totalCost * 0.6 * 0.3,
      features: [
        "Ready-to-deploy solution",
        "Industry-specific features",
        "Customizable design",
        "Free consultation included",
      ],
      buttonText: "Get Template Solution",
    },
    custom: {
      title: "Custom Development",
      desc: "Tailored to your exact needs",
      price: totalCost,
      deposit: totalCost * 0.3,
      features: [
        "100% customized solution",
        "Unique features for your business",
        "Dedicated development team",
        "Milestone-based payments",
      ],
      buttonText: "Book Consultation (£99)",
    },
  };

  const recommendedPath = totalCost > 4000 ? "custom" : "template";

  const ChoiceCard = ({ path, isRecommended }) => (
    <Paper
      variant="outlined"
      sx={{
        p: 3,
        height: "100%",
        position: "relative",
        border: "1px solid",
        borderColor: isRecommended ? "primary.main" : "divider",
        boxShadow: isRecommended ? 2 : 0,
      }}
    >
      {isRecommended && (
        <Chip
          label="Recommended"
          color="primary"
          sx={{ position: "absolute", top: 16, right: 16 }}
        />
      )}
      <Typography variant="h5">{path.title}</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {path.desc}
      </Typography>
      {path.features.map((feature) => (
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
          £{Math.round(path.price).toLocaleString()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          £{Math.round(path.deposit).toLocaleString()} deposit
        </Typography>
      </Paper>
      <Button fullWidth variant="contained" size="large">
        {path.buttonText}
      </Button>
    </Paper>
  );

  ChoiceCard.propTypes = {
    path: PropTypes.shape({
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
      <Paper variant="outlined" sx={{ p: 2, mb: 4, borderRadius: 2 }}>
        <Typography variant="h6">
          Your Configuration Total:
          <strong>£{totalCost.toLocaleString()}</strong>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Budget: £{formData.budget.toLocaleString()}
        </Typography>
      </Paper>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <ChoiceCard
            path={paths.custom}
            isRecommended={recommendedPath === "custom"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ChoiceCard
            path={paths.template}
            isRecommended={recommendedPath === "template"}
          />
        </Grid>
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