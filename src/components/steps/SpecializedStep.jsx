import PropTypes from "prop-types";
import { Box, Typography, Grid, Paper, Button, Chip } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import BudgetTracker from "../ReusedComponents/BudgetTracker";
import StepHeader from "../ReusedComponents/StepHeader";

const solutionsData = [
  { title: 'Financial Management', desc: 'Complete financial oversight', price: 1500, features: ['P&L tracking', 'Cash flow forecasting', 'Budget analysis', '20% discount applied'] },
  { title: 'Customer Relationship', desc: 'CRM & insights', price: 1500, features: ['Customer database', 'Lifetime value', 'Satisfaction tracking', '20% discount applied'] },
  { title: 'Employee Management', desc: 'HR & workforce', price: 1500, features: ['Staff scheduling', 'Performance reviews', 'Payroll tracking', '20% discount applied'] },
  { title: 'Marketing & Sales', desc: 'Growth tracking', price: 1500, features: ['Lead generation', 'Campaign ROI', 'Pipeline management', '20% discount applied'] },
  { title: 'Operations Analytics', desc: 'KPI monitoring', price: 1500, features: ['Process efficiency', 'Quality metrics', 'Risk assessment', '20% discount applied'] },
  { title: 'Inventory Management', desc: 'Stock control', price: 1500, features: ['Stock levels', 'Reorder automation', 'Supplier tracking', '20% discount applied'] },
];

const SpecializedStep = ({
  onUpdate,
  selectedIndustry,
  budget,
  selectedSolutions,
  handleBack,
  handleNext,
}) => {
  const availableSolutions =
    solutionsData[selectedIndustry] || solutionsData["Default"];

  const handleSolutionSelect = (solution) => {
    const isSelected = selectedSolutions.some(
      (s) => s.title === solution.title
    );
    const newSolutions = isSelected
      ? selectedSolutions.filter((s) => s.title !== solution.title)
      : [...selectedSolutions, solution];
    onUpdate("solutions", newSolutions);
  };

  const discountRate = 0.2;

  const totalSpent = selectedSolutions.reduce(
    (sum, sol) => sum + sol.price * (1 - discountRate),
    0
  );

  const isBudgetExceeded = budget - totalSpent < 0;

  return (
    <Box>
      <StepHeader
        step={3}
        title="Industry-Specific Solutions"
        subtitle={`Specialized dashboards for ${selectedIndustry}`}
      />

      <BudgetTracker budget={budget} spent={totalSpent} />

      <Grid container spacing={2}>
        {availableSolutions.map((solution) => {
          const isSelected = selectedSolutions.some(
            (s) => s.title === solution.title
          );
          const discountedPrice = solution.price * (1 - discountRate);
          const canAfford = budget - totalSpent >= discountedPrice;
          const isDisabled = !isSelected && !canAfford;

          return (
            <Grid item xs={12} sm={6} md={4} key={solution.title}>
              <Paper
                variant="outlined"
                onClick={
                  isDisabled ? null : () => handleSolutionSelect(solution)
                }
                sx={{
                  p: 3,
                  height: "100%",
                  position: "relative",
                  border: "1px solid",
                  borderColor: isSelected ? "primary.main" : "divider",
                  backgroundColor: isSelected
                    ? "primary.lightest"
                    : isDisabled
                      ? "action.disabledBackground"
                      : "background.paper",
                  boxShadow: isSelected ? 1 : 0,
                  cursor: isDisabled ? "not-allowed" : "pointer",
                  color: isDisabled ? "text.disabled" : "inherit",
                  "&:hover": isDisabled
                    ? {}
                    : { borderColor: "primary.main", boxShadow: 2 },
                }}
              >
                {isDisabled && (
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
                >
                  <Typography variant="h6">{solution.title}</Typography>
                  <Typography
                    variant="h6"
                    // 👇 Color is now also conditional
                    color={isDisabled ? "text.disabled" : "primary"}
                    sx={{
                      textDecoration: isDisabled ? "line-through" : "none",
                    }}
                  >
                    £{Math.round(discountedPrice)}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {solution.desc}
                </Typography>
                {solution.features.map((feature) => (
                  <Box
                    key={feature}
                    sx={{ display: "flex", alignItems: "center", mb: 0.5 }}
                  >
                    <CheckCircleIcon
                      // 👇 Icon color is also conditional
                      color={isDisabled ? "disabled" : "success"}
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
SpecializedStep.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  selectedIndustry: PropTypes.string,
  budget: PropTypes.number.isRequired,
  selectedSolutions: PropTypes.array.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
};

export default SpecializedStep;
