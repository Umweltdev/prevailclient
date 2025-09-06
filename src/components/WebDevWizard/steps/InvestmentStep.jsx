import PropTypes from "prop-types";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import StepHeader from "../components/StepHeader.jsx";
import BudgetTracker from "../components/BudgetTracker.jsx";
import { platformsData } from "../../../data/mockData.jsx";


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

  return (
    <Box>
      <StepHeader
        step={5}
        title="Choose Your Platform Foundation"
        subtitle="Select the platform tier that matches your overall needs and budget"
      />

      <BudgetTracker
        budget={budget}
        spent={totalSpent}
        spentLabel="Total Investment"
      />

      <Grid container spacing={3}>
        {platformsData.map((platform) => {
          const isSelected = selectedPlatform?.title === platform.title;
          const canAfford = budget - totalSpentSoFar >= platform.price;
          const isDisabled = !isSelected && !canAfford;

          return (
            <Grid item xs={12} md={4} key={platform.title}>
              <Paper
                variant="outlined"
                onClick={
                  isDisabled ? null : () => handlePlatformSelect(platform)
                }
                sx={{
                  p: 3,
                  cursor: isDisabled ? "not-allowed" : "pointer",
                  height: "100%",
                  border: "2px solid",
                  borderColor: isSelected ? "primary.main" : "divider",
                  backgroundColor: isSelected
                    ? "primary.lightest"
                    : isDisabled
                      ? "action.disabledBackground"
                      : "background.paper",
                  boxShadow: isSelected ? 3 : 0,
                  color: isDisabled ? "text.disabled" : "inherit",
                  transition: "all 0.2s ease-in-out",
                  "&:hover": isDisabled
                    ? {}
                    : {
                        borderColor: "primary.main",
                        boxShadow: 3,
                        transform: "translateY(-4px)",
                      },
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  {platform.title}
                </Typography>
                <Typography
                  variant="h6"
                  color={isDisabled ? "text.disabled" : "primary.main"}
                  sx={{ mb: 2, fontWeight: "bold" }}
                >
                  {platform.priceRange}
                </Typography>
                <Box>
                  {platform.features.map((feature) => (
                    <Box
                      key={feature}
                      sx={{ display: "flex", alignItems: "center", mb: 1 }}
                    >
                      <CheckCircleIcon
                        color={isDisabled ? "disabled" : "success"}
                        sx={{ fontSize: 18, mr: 1 }}
                      />
                      <Typography variant="body2">{feature}</Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
        <Button variant="outlined" onClick={handleBack} size="large">
          Back
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
          disabled={!selectedPlatform}
          endIcon={<DoubleArrowIcon />}
          size="large"
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
