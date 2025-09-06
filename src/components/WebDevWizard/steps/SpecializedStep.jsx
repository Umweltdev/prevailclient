import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Grid,
  Button,
  Chip,
  Card,
  CardHeader,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import StepHeader from "../components/StepHeader.jsx";
import BudgetTracker from "../components/BudgetTracker.jsx";
import { solutionsData } from "../../../data/mockData.jsx";

const SpecializedStep = ({
  onUpdate,
  selectedIndustry,
  budget,
  selectedSolutions,
  handleBack,
  handleNext,
}) => {
  const availableSolutions = solutionsData[selectedIndustry] || [];

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

  return (
    <Box>
      <StepHeader
        step={4}
        title="Industry-Specific Solutions"
        subtitle={`Specialized dashboards tailored for the ${selectedIndustry} sector`}
      />

      <BudgetTracker
        budget={budget}
        spent={totalSpent}
        spentLabel="Solutions Cost"
      />

      <Grid container spacing={3}>
        {availableSolutions.map((solution) => {
          const isSelected = selectedSolutions.some(
            (s) => s.title === solution.title
          );
          const discountedPrice = solution.price * (1 - discountRate);
          const canAfford = budget - totalSpent >= discountedPrice;
          const isDisabled = !isSelected && !canAfford;

          return (
            <Grid item xs={12} sm={6} md={4} key={solution.title}>
              {/* UPDATED: Switched from Paper to Card for better structure */}
              <Card
                variant="outlined"
                onClick={
                  isDisabled ? null : () => handleSolutionSelect(solution)
                }
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  borderWidth: "2px",
                  borderColor: isSelected ? "primary.main" : "divider",
                  backgroundColor: isSelected
                    ? "primary.lightest"
                    : isDisabled
                      ? "action.disabledBackground"
                      : "background.paper",
                  boxShadow: isSelected ? 4 : 0,
                  cursor: isDisabled ? "not-allowed" : "pointer",
                  color: isDisabled ? "text.disabled" : "inherit",
                  transition:
                    "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": isDisabled
                    ? {}
                    : {
                        borderColor: "primary.main",
                        boxShadow: 4,
                        transform: "translateY(-4px)",
                      },
                }}
              >
                {isDisabled && !isSelected && (
                  <Chip
                    label="Budget Exceeded"
                    color="error"
                    size="small"
                    sx={{ position: "absolute", top: 16, right: 16, zIndex: 1 }}
                  />
                )}
                {/* UPDATED: Used CardHeader for better title/subtitle alignment */}
                <CardHeader
                  title={
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {solution.title}
                    </Typography>
                  }
                  subheader={
                    <Typography variant="body2" color="text.secondary">
                      {solution.desc}
                    </Typography>
                  }
                  action={
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
                  }
                />
                <Divider />
                {/* UPDATED: Used List for better feature alignment */}
                <CardContent sx={{ flexGrow: 1, pt: 1 }}>
                  <List dense>
                    {solution.features.map((feature) => (
                      <ListItem key={feature} sx={{ p: 0 }}>
                        <ListItemIcon sx={{ minWidth: "32px" }}>
                          <CheckCircleIcon
                            color={isDisabled ? "disabled" : "success"}
                            sx={{ fontSize: 18 }}
                          />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
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

SpecializedStep.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  selectedIndustry: PropTypes.string.isRequired,
  budget: PropTypes.number.isRequired,
  selectedSolutions: PropTypes.array.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
};

export default SpecializedStep;
