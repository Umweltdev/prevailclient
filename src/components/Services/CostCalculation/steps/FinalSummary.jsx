import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Button,
  Grid,
  Chip,
  CircularProgress,
  TextField,
  Divider,
//   Fade,
  Paper,
  Stack,
} from "@mui/material";
import {
  ChevronLeft,
  Building,
  Globe,
  Rocket,
  Bus as Business,
} from "lucide-react";
import { BRAND_PACKAGES, CAMPAIGN_PACKAGES, industries, PLATFORM_TIERS, SERVICES, TRINITY_OPTIONS } from "../data/costCalculationData.js";
import { applyDiscount } from "../../../user-dashboard/utils.js";

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
  handleConsultationCheckout,
  isProcessing,
  isProcessingConsult,
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
    // <Fade in timeout={500}>
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
                  mb={2}
                >
                  <Typography variant="body1" fontWeight={700}>
                    Total Price:
                  </Typography>
                  <Typography
                    variant="body1"
                    fontWeight={800}
                    strikeThrough
                    sx={{
                      color: "primary.main",
                      textDecoration: "line-through",
                    }}
                  >
                    €{total.toLocaleString()}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={2}
                >
                  <Typography variant="h5" fontWeight={700}>
                    Deposit Price:
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
                    €{applyDiscount(total).toLocaleString()}
                  </Typography>
                </Stack>
                <Typography
                  variant="caption"
                  color="success.main"
                  display="block"
                  textAlign="right"
                  mb={2}
                >
                  {total < 1000 ? "50% deposit applied" : "20% deposit applied"}
                </Typography>
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
                        color: "#FFFFFF",
                      },
                    }}
                  >
                    {isProcessing ? "Processing..." : "Proceed to Checkout"}
                  </Button>

                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={handleConsultationCheckout}
                    disabled={isProcessingConsult || !name || !email}
                    sx={{
                      borderColor: "primary.main",
                      color: "primary.main",
                      "&:hover": {
                        borderColor: "primary.dark",
                        backgroundColor: "primary.main",
                        color: "white",
                      },
                    }}
                    startIcon={
                      isProcessingConsult ? (
                        <CircularProgress size={20} color="inherit" />
                      ) : null
                    }
                  >
                    {isProcessingConsult
                      ? "Processing..."
                      : "Book a Consultation (€83)"}
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
    // </Fade>
  );
};

export default FinalSummary;


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
