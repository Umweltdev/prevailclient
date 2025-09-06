import PropTypes from "prop-types";
import { Box, Typography, Grid, Paper, Button, Chip } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import StepHeader from "../components/StepHeader.jsx";
import BudgetTracker from "../components/BudgetTracker.jsx";
import { dashboardsData } from "../../../data/mockData.jsx";


const UniversalStep = ({
  onUpdate,
  budget,
  solutionsSpent,
  selectedDashboards,
  handleBack,
  handleNext,
}) => {
  const handleDashboardSelect = (dashboard) => {
    const isSelected = selectedDashboards.some(
      (d) => d.title === dashboard.title
    );
    const newDashboards = isSelected
      ? selectedDashboards.filter((d) => d.title !== dashboard.title)
      : [...selectedDashboards, dashboard];
    onUpdate("dashboards", newDashboards);
  };

  const discountRate = 0.2; // 20%

  const dashboardsSpent = selectedDashboards.reduce(
    (acc, dash) => acc + dash.price * (1 - discountRate),
    0
  );

  const totalSpent = solutionsSpent + dashboardsSpent;

  return (
    <Box>
      <StepHeader
        step={4}
        title="Universal Business Dashboards"
        subtitle="Essential tools and analytics every business needs to thrive"
      />
      <BudgetTracker
        budget={budget}
        spent={totalSpent}
        spentLabel="Total Spent"
      />
      <Grid container spacing={3}>
        {dashboardsData.map((dashboard) => {
          const isSelected = selectedDashboards.some(
            (d) => d.title === dashboard.title
          );
          const discountedPrice = dashboard.price * (1 - discountRate);
          const canAfford = budget - totalSpent >= discountedPrice;
          const isDisabled = !isSelected && !canAfford;

          return (
            <Grid item xs={12} sm={6} md={4} key={dashboard.title}>
              <Paper
                variant="outlined"
                onClick={
                  isDisabled ? null : () => handleDashboardSelect(dashboard)
                }
                sx={{
                  p: 3,
                  cursor: "pointer",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  border: "2px solid",
                  position: "relative",
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
                {isDisabled && !isSelected && (
                  <Chip
                    label="Budget Exceeded"
                    color="error"
                    size="small"
                    sx={{ position: "absolute", top: 16, right: 16 }}
                  />
                )}
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  sx={{ mb: 1 }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {dashboard.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    color={isDisabled ? "text.disabled" : "primary.main"}
                    sx={{
                      fontWeight: "bold",
                      textDecoration:
                        isDisabled && !isSelected ? "line-through" : "none",
                    }}
                  >
                    £{Math.round(discountedPrice)}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2, flexGrow: 1 }}
                >
                  {dashboard.desc}
                </Typography>
                <Box>
                  {dashboard.features.map((feature) => (
                    <Box
                      key={feature}
                      sx={{ display: "flex", alignItems: "center", mb: 0.5 }}
                    >
                      <CheckCircleIcon
                        color={isDisabled ? "disabled" : "success"}
                        sx={{ fontSize: 16, mr: 1 }}
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
          endIcon={<DoubleArrowIcon />}
          size="large"
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
};

UniversalStep.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  budget: PropTypes.number.isRequired,
  solutionsSpent: PropTypes.number.isRequired,
  selectedDashboards: PropTypes.array.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
};

export default UniversalStep;
