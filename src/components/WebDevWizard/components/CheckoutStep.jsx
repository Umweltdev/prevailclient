import { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Button,
  Paper,
  Grid,
  CircularProgress,
  Snackbar,
  Alert,
  Divider,
  Stack,
  Switch,
  FormControlLabel,
  Fade,
} from "@mui/material";
import AddTaskIcon from "@mui/icons-material/AddTask";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import StepHeader from "./StepHeader.jsx";
import { proceedToCheckout } from "../../../redux/stripeService.js";
import { applyDiscount } from "../../user-dashboard/utils.js";


const CheckoutStep = ({ formData, handleBack }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [processingAction, setProcessingAction] = useState(null);
  const [includeConsultation, setIncludeConsultation] = useState(false);

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
  const CONSULTATION_FEE = 99;

  const handlePayment = async (action) => {
    setIsProcessing(true);
    setProcessingAction(action);
    setError(null);

    const isFullPayment = action === "full";
    const priceToCharge = isFullPayment ? applyDiscount(totalCost) : CONSULTATION_FEE;

    const checkoutData = {
      name: formData.name,
      email: formData.email,
      industry: formData.industry,
      platform: formData.platform?.title || "Not Selected",
      fullQuote: `€${totalCost.toLocaleString()}`,
      price: priceToCharge,
      serviceType: isFullPayment ? "web_development_full" : "consultation_fee",
      notes: isFullPayment
        ? `Full package payment. ${includeConsultation ? "Free consultation included." : ""}`
        : `Consultation booking. Full quote is €${totalCost}.`,
    };

    const result = await proceedToCheckout(checkoutData);
    if (result.error) {
      setError(result.error);
    }

    setIsProcessing(false);
    setProcessingAction(null);
  };
  return (
    <Box>
      <StepHeader
        step={7}
        title="Finalize and Pay"
        subtitle="Review your configuration and choose your payment path."
      />
      <Grid container spacing={{ xs: 3, md: 5 }} alignItems="flex-start">
        <Grid item xs={12} md={5}>
          <Paper
            variant="outlined"
            sx={{ p: { xs: 3, md: 4 }, height: "100%", borderRadius: 4 }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3 }}>
              Configuration Summary
            </Typography>
            <Stack spacing={2.5}>
              <SummaryItem label="Name" value={formData.name} />
              <SummaryItem label="Email" value={formData.email} />
              <SummaryItem label="Industry" value={formData.industry} />
              <SummaryItem
                label="Platform"
                value={formData.platform?.title || "N/A"}
              />
              <Divider sx={{ pt: 1 }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  pt: 1,
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Total Quote
                </Typography>
                <Typography
                  variant="h5"
                  color="primary.main"
                  sx={{ fontWeight: "bold" }}
                >
                  €{totalCost.toLocaleString()}
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </Grid>
        <Grid item xs={12} md={7}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 4,
              background: (theme) =>
                `linear-gradient(145deg, ${theme.palette.primary.lighter} 0%, #ffffff 100%)`,
              boxShadow: "0 8px 32px 0 rgba(0,0,0,0.05)",
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
              Confirm your total and add a complimentary consultation session.
            </Typography>
            <Paper variant="outlined" sx={{ p: 3, borderRadius: 3, mb: 3 }}>
              <Stack spacing={1.5}>
                <PriceRow
                  label="Project Subtotal"
                  amount={`€${totalCost.toLocaleString()}`}
                />
                <Fade in={includeConsultation} timeout={400}>
                  <Box>
                    <PriceRow
                      label="Consultation Fee"
                      amount={`+ €${CONSULTATION_FEE}`}
                    />
                  </Box>
                </Fade>
                <Fade in={includeConsultation} timeout={400}>
                  <Box>
                    <PriceRow
                      label="Instant Bonus"
                      amount={`- €${CONSULTATION_FEE}`}
                      strikeThrough
                    />
                  </Box>
                </Fade>
                <Divider sx={{ my: 1 }} />
                <PriceRow
                  label="Total to Pay"
                  amount={`€${totalCost.toLocaleString()}`}
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
                  Add FREE 1-on-1 Consultation Session
                </Typography>
              }
              sx={{ mb: 3 }}
            />

            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={() => handlePayment("full")}
              disabled={isProcessing && processingAction === "full"}
              startIcon={
                isProcessing && processingAction === "full" ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  <AddTaskIcon />
                )
              }
              sx={{ py: 1.5, textTransform: "none", fontSize: "1.1rem" }}
            >
              Pay & Start Project
            </Button>

            <Divider sx={{ my: 3 }}>OR</Divider>

            <Button
              fullWidth
              variant="text"
              onClick={() => handlePayment("consultation")}
              disabled={isProcessing && processingAction === "consultation"}
              startIcon={
                isProcessing && processingAction === "consultation" ? (
                  <CircularProgress size={20} />
                ) : (
                  <EventAvailableIcon />
                )
              }
            >
              Book a Consultation (€{CONSULTATION_FEE})
            </Button>
          </Paper>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 4 }}>
        <Button variant="text" onClick={handleBack} disabled={isProcessing}>
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
const SummaryItem = ({ label, value }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <Typography variant="body1" color="text.secondary">
      {label}
    </Typography>
    <Typography
      variant="body1"
      sx={{ fontWeight: "medium", textAlign: "right" }}
    >
      {value}
    </Typography>
  </Box>
);

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
SummaryItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
PriceRow.propTypes = {
  label: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  isTotal: PropTypes.bool,
  strikeThrough: PropTypes.bool,
};
CheckoutStep.propTypes = {
  formData: PropTypes.object.isRequired,
  handleBack: PropTypes.func.isRequired,
};

export default CheckoutStep;
