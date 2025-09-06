import { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Button,
  Paper,
  Grid,
  Chip,
  CircularProgress,
  Snackbar,
  Alert,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import StepHeader from "./StepHeader.jsx";
import { proceedToCheckout } from "../../../redux/stripeService.js";


const ChoiceCard = ({ path, isRecommended, onPay, isProcessing }) => {
  if (!path) return null;

  return (
    <Paper
      variant="outlined"
      sx={{
        p: { xs: 2, md: 3 },
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border: "2px solid",
        borderColor: isRecommended ? "primary.main" : "divider",
        boxShadow: isRecommended ? 3 : 0,
        transition: "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
        "&:hover": {
          boxShadow: 5,
          transform: "translateY(-4px)",
        },
      }}
    >
      {isRecommended && (
        <Chip
          label="Recommended"
          color="primary"
          sx={{ position: "absolute", top: 16, right: 16 }}
        />
      )}
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        {path.title}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: 2, flexGrow: 1, mt: 1 }}
      >
        {path.desc}
      </Typography>
      <Paper
        sx={{
          p: 2,
          my: 2,
          textAlign: "center",
          background: (theme) => theme.palette.grey[100],
        }}
      >
        <Typography
          variant="h4"
          color="primary.main"
          sx={{ fontWeight: "bold" }}
        >
          {path.consultationFee
            ? `£${path.consultationFee}`
            : `£${Math.round(path.price).toLocaleString()}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {path.consultationFee
            ? "One-time Consultation Fee"
            : `Total Price (Deposit: £${Math.round(
                path.deposit
              ).toLocaleString()})`}
        </Typography>
      </Paper>
      <Button
        fullWidth
        variant="contained"
        size="large"
        onClick={onPay}
        disabled={isProcessing}
        sx={{ mt: "auto" }}
      >
        {isProcessing ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          path.buttonText
        )}
      </Button>
    </Paper>
  );
};

ChoiceCard.propTypes = {
  path: PropTypes.object.isRequired,
  isRecommended: PropTypes.bool.isRequired,
  onPay: PropTypes.func.isRequired,
  isProcessing: PropTypes.bool.isRequired,
};

const CheckoutStep = ({ formData, handleBack }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [processingPath, setProcessingPath] = useState(null);

  const discountRate = 0.2;
  const solutionsCost = formData.solutions.reduce(
    (acc, s) => acc + s.price * (1 - discountRate),
    0
  );
  const dashboardsCost = formData.dashboards.reduce(
    (acc, d) => acc + d.price * (1 - discountRate),
    0
  );
  const platformCost = formData.platform ? formData.platform.price : 0;
  const totalCost = solutionsCost + dashboardsCost + platformCost;

  const paths = {
    template: {
      title: "Template Solution",
      desc: "Quick deployment with proven, industry-specific results.",
      price: totalCost * 0.6,
      deposit: totalCost * 0.6 * 0.3,
      buttonText: "Pay Deposit & Get Template",
    },
    custom: {
      title: "Custom Development",
      desc: "A solution tailored precisely to your unique business needs.",
      price: totalCost,
      deposit: totalCost * 0.3,
      buttonText: "Pay Consultation Fee (£99)",
      consultationFee: 99,
    },
  };
  const recommendedPathKey = totalCost > 4000 ? "custom" : "template";

  const handlePayment = async (pathKey) => {
    setIsProcessing(true);
    setProcessingPath(pathKey);
    setError(null);

    const selectedPath = paths[pathKey];
    const priceToCharge =
      selectedPath.consultationFee || Math.round(selectedPath.deposit);

    const checkoutData = {
      name: formData.name,
      email: formData.email,
      price: priceToCharge,
      serviceType: "web_development",
      selectedPath: selectedPath.title,
      fullQuote: `£${Math.round(selectedPath.price).toLocaleString()}`,
      industry: formData.industry,
      platform: formData.platform?.title || "Not Selected",
    };

    const result = await proceedToCheckout(checkoutData);
    if (result.error) {
      setError(result.error);
    }

    setIsProcessing(false);
    setProcessingPath(null);
  };

  return (
    <Box>
      <StepHeader
        step={7}
        title="Finalize and Pay"
        subtitle="Review your configuration and choose a payment path."
      />
      <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
        <Grid item xs={12} md={5}>
          <Box sx={{ height: "100%" }}>
            <Typography variant="h6" gutterBottom>
              Configuration Summary
            </Typography>
            <Paper
              variant="outlined"
              sx={{ p: { xs: 2, md: 3 }, height: "100%" }}
            >
              <List disablePadding>
                <ListItem disablePadding>
                  <ListItemText primary="Name" secondary={formData.name} />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText primary="Email" secondary={formData.email} />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText
                    primary="Industry"
                    secondary={formData.industry}
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText
                    primary="Platform"
                    secondary={formData.platform?.title || "N/A"}
                  />
                </ListItem>
                <Divider sx={{ my: 2 }} />
                <ListItem disablePadding>
                  <ListItemText
                    primary={
                      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                        Total Quote
                      </Typography>
                    }
                    secondary={
                      <Typography
                        variant="h6"
                        color="primary"
                        sx={{ fontWeight: "bold" }}
                      >
                        £{totalCost.toLocaleString()}
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <ChoiceCard
            path={paths[recommendedPathKey]}
            isRecommended={true}
            onPay={() => handlePayment(recommendedPathKey)}
            isProcessing={isProcessing && processingPath === recommendedPathKey}
          />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 4 }}>
        <Button variant="outlined" onClick={handleBack} disabled={isProcessing}>
          Back
        </Button>
      </Box>
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError(null)}
      >
        <Alert
          onClose={() => setError(null)}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
};

CheckoutStep.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    industry: PropTypes.string.isRequired,
    solutions: PropTypes.array.isRequired,
    dashboards: PropTypes.array.isRequired,
    platform: PropTypes.object,
  }).isRequired,
  handleBack: PropTypes.func.isRequired,
};

export default CheckoutStep;
