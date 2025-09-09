import {
  industries,
  ALL_TRINITY_OPTIONS,
  platformTiers,
  gradientText,
} from "../data.js";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  Fade,
  TextField,
  Divider,
  CircularProgress,
} from "@mui/material";
import PropTypes from "prop-types";

import { ChevronLeft } from "lucide-react";

export const FinalSummary = ({
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
  handleMainCheckout,
  handleConsultationCheckout,
  isProcessing,
  calculateRunningTotal,
}) => {
  const trinitySelection = ALL_TRINITY_OPTIONS.find(
    (opt) => opt.id === trinitySelectionId
  );
  const tierSelection = platformTiers.find((t) => t.id === selectedTier);
  const industrySelection = industries.find((i) => i.id === selectedIndustry);

  const total = calculateRunningTotal();
  const isBundle = solutionType === "both" && trinitySelection && tierSelection;
  const finalPrice = isBundle ? Math.round(total * 0.9) : total;

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
                      {solutionType}
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
                {trinitySelection && (
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle2">Trinity System:</Typography>
                    <Typography variant="subtitle1">
                      {trinitySelection.name}
                    </Typography>
                  </Box>
                )}
                {tierSelection && (
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle2">Platform Tier:</Typography>
                    <Typography variant="subtitle1">
                      {tierSelection.name}
                    </Typography>
                  </Box>
                )}
                {hasPhysicalStore &&
                  (trinitySelectionId === "trinity-plus" ||
                    trinitySelectionId === "garo") && (
                    <Box display="flex" justifyContent="space-between">
                      <Typography variant="subtitle2">Add-on:</Typography>
                      <Typography variant="subtitle1">
                        Physical Store Setup
                      </Typography>
                    </Box>
                  )}
                {isBundle && (
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle2" color="success.main">
                      Bundle Discount:
                    </Typography>
                    <Typography variant="subtitle1" color="success.main">
                      -10%
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
                    €{finalPrice.toLocaleString()}
                  </Typography>
                </Box>
              </Box>
              <Box mt={3} display="flex" flexDirection="column" gap={2}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleMainCheckout}
                  disabled={isProcessing || !name || !email}
                  startIcon={
                    isProcessing ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : null
                  }
                >
                  {isProcessing ? "Processing..." : "Proceed to Checkout"}
                </Button>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={handleConsultationCheckout}
                  disabled={isProcessing || !name || !email}
                  sx={{
                    borderColor: "primary.main",
                    color: "primary.main",
                    "&:hover": {
                      borderColor: "primary.dark",
                      backgroundColor: "primary.main",
                      color: "white",
                    },
                  }}
                >
                  {isProcessing ? "Processing..." : "Book a Consultation (€83)"}
                </Button>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={prevStep}
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
  selectedGoals: PropTypes.array,
  trinitySelectionId: PropTypes.string,
  selectedTier: PropTypes.string,
  selectedIndustry: PropTypes.string,
  solutionType: PropTypes.string,
  hasPhysicalStore: PropTypes.bool,
  handleMainCheckout: PropTypes.func.isRequired,
  handleConsultationCheckout: PropTypes.func.isRequired,
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
};