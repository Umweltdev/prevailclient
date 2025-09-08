import PropTypes from "prop-types";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import BudgetTracker from "../ReusedComponents/BudgetTracker";
import StepHeader from "../ReusedComponents/StepHeader";

const dashboardsData = [
  {
    title: "Financial Management",
    desc: "Complete financial oversight",
    price: 1350,
    features: ["P&L tracking", "Cash flow forecasting", "Budget analysis"],
  },
  {
    title: "Customer Relationship",
    desc: "CRM & insights",
    price: 1350,
    features: ["Customer database", "Lifetime value", "Satisfaction tracking"],
  },
  {
    title: "Employee Management",
    desc: "HR & workforce",
    price: 1350,
    features: ["Staff scheduling", "Performance reviews", "Payroll tracking"],
  },
  {
    title: "Marketing & Sales",
    desc: "Growth tracking",
    price: 1350,
    features: ["Lead generation", "Campaign ROI", "Pipeline management"],
  },
  {
    title: "Operations Analytics",
    desc: "KPI monitoring",
    price: 1350,
    features: ["Process efficiency", "Quality metrics", "Risk assessment"],
  },
  {
    title: "Inventory Management",
    desc: "Stock control",
    price: 1350,
    features: ["Stock levels", "Reorder automation", "Supplier tracking"],
  },
];

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

  const dashboardsSpent = selectedDashboards.reduce(
    (acc, dash) => acc + dash.price,
    0
  );
  const totalSpent = solutionsSpent + dashboardsSpent;
  const remaining = budget - totalSpent;
  const isBudgetExceeded = remaining < 0;

  return (
    <Box>
      <StepHeader
        step={5}
        title="Universal Business Dashboards"
        subtitle="Essential tools every business needs"
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
          spentLabel="Spent"
        />
      </Paper>

      <Grid container spacing={2}>
        {dashboardsData.map((dashboard) => {
          const isSelected = selectedDashboards.some(
            (d) => d.title === dashboard.title
          );
          return (
            <Grid item xs={12} sm={6} md={4} key={dashboard.title}>
              <Paper
                variant="outlined"
                onClick={() => handleDashboardSelect(dashboard)}
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
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="flex-start"
                >
                  <Typography variant="h6">{dashboard.title}</Typography>
                  <Typography variant="h6" color="primary">
                    €{dashboard.price}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {dashboard.desc}
                </Typography>
                {dashboard.features.map((feature) => (
                  <Box
                    key={feature}
                    sx={{ display: "flex", alignItems: "center", mb: 0.5 }}
                  >
                    <CheckCircleIcon
                      color="success"
                      sx={{ fontSize: 16, mr: 1 }}
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
          disabled={isBudgetExceeded}
          endIcon={<DoubleArrowIcon />}
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
