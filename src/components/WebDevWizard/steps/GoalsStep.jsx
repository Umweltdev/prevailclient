import PropTypes from "prop-types";
import { Grid, Paper, Typography, Box, Slider, Button } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import StepHeader from "../components/StepHeader.jsx";
import { goals } from "../../../data/mockData.jsx";

const GoalsStep = ({
  onUpdate,
  selectedGoals,
  budget,
  handleBack,
  handleNext,
}) => {
  const handleGoalSelect = (goalTitle) => {
    const newGoals = selectedGoals.includes(goalTitle)
      ? selectedGoals.filter((g) => g !== goalTitle)
      : [...selectedGoals, goalTitle];
    onUpdate("goals", newGoals);
  };

  const handleBudgetChange = (event, newValue) => {
    onUpdate("budget", newValue);
  };

  return (
    <Box>
      <StepHeader
        step={2}
        title="What are your primary goals?"
        subtitle="Select all that apply to help us understand your needs"
      />

      <Grid container spacing={3}>
        {goals.map((goal) => {
          const isSelected = selectedGoals.includes(goal.title);
          return (
            <Grid item xs={12} sm={6} md={4} key={goal.id}>
              <Paper
                variant="outlined"
                onClick={() => handleGoalSelect(goal.title)}
                sx={{
                  p: 3,
                  cursor: "pointer",
                  textAlign: "center",
                  height: "100%",
                  border: "2px solid",
                  borderColor: isSelected ? "primary.main" : "divider",
                  backgroundColor: isSelected
                    ? "primary.lightest"
                    : "background.paper",
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    borderColor: "primary.main",
                    boxShadow: 3,
                    transform: "translateY(-4px)",
                  },
                }}
              >
                {goal.icon}
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{ mt: 2, minHeight: "64px", fontWeight: "bold" }}
                >
                  {goal.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {goal.desc1}
                </Typography>
                <Typography
                  variant="body2"
                  color="secondary.main"
                  sx={{ fontWeight: "bold" }}
                >
                  {goal.desc2}
                </Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>

      <Box sx={{ mt: 6, textAlign: "center", maxWidth: "600px", mx: "auto" }}>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          What&apos;s your budget range?
        </Typography>
        <Slider
          value={budget}
          onChange={handleBudgetChange}
          aria-labelledby="budget-slider"
          valueLabelDisplay="auto"
          step={500}
          min={500}
          max={50000}
        />
        <Typography
          variant="h4"
          sx={{ mt: 1, color: "primary.main", fontWeight: "bold" }}
        >
          €{budget.toLocaleString()}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Estimated Investment
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
        <Button variant="outlined" onClick={handleBack} size="large">
          Back
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
          disabled={selectedGoals.length === 0}
          endIcon={<DoubleArrowIcon />}
          size="large"
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
};

GoalsStep.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  selectedGoals: PropTypes.array.isRequired,
  budget: PropTypes.number.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
};

export default GoalsStep;
