import PropTypes from "prop-types";
import { Grid, Paper, Typography, Box, Slider } from "@mui/material";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PaletteIcon from "@mui/icons-material/Palette";
import BoltIcon from "@mui/icons-material/Bolt";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import StepHeader from "../ReusedComponents/StepHeader";

const goals = [
  {
    icon: <AttachMoneyIcon sx={{ fontSize: 40 }} color="secondary" />,
    title: "Eliminate Platform Fees",
    desc1: "Stop paying 20-35% commission",
    desc2: "Save £1,000-5,000/month",
  },
  {
    icon: <PaletteIcon sx={{ fontSize: 40 }} color="secondary" />,
    title: "Build Brand Identity",
    desc1: "Create unique digital presence",
    desc2: "73% better brand recall",
  },
  {
    icon: <BoltIcon sx={{ fontSize: 40 }} color="secondary" />,
    title: "Automate Operations",
    desc1: "Streamline workflows",
    desc2: "15-20 hours/week saved",
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 40 }} color="secondary" />,
    title: "Scale Your Business",
    desc1: "Systems that grow with you",
    desc2: "Multi-location ready",
  },
  {
    icon: <PeopleIcon sx={{ fontSize: 40 }} color="secondary" />,
    title: "Own Customer Relationships",
    desc1: "Direct customer connection",
    desc2: "Build lasting loyalty",
  },
  {
    icon: <BarChartIcon sx={{ fontSize: 40 }} color="secondary" />,
    title: "Data-Driven Decisions",
    desc1: "Analytics for growth",
    desc2: "Real-time dashboards",
  },
];

const GoalsStep = ({ onUpdate, selectedGoals, budget }) => {
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
        subtitle="Select all that apply"
      />
      <Grid container spacing={2}>
        {goals.map((goal) => {
          const isSelected = selectedGoals.includes(goal.title);
          return (
            <Grid item xs={12} sm={6} md={4} key={goal.title}>
              <Paper
                variant="outlined"
                onClick={() => handleGoalSelect(goal.title)}
                sx={{
                  p: 3,
                  cursor: "pointer",
                  textAlign: "center",
                  border: "1px solid",
                  borderColor: isSelected ? "primary.main" : "divider",
                  backgroundColor: isSelected
                    ? "primary.lightest"
                    : "background.paper",
                  boxShadow: isSelected ? 1 : 0,
                  "&:hover": { borderColor: "primary.main", boxShadow: 2 },
                }}
              >
                {goal.icon}
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{ mt: 2, minHeight: "64px" }}
                >
                  {goal.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {goal.desc1}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontWeight: "bold" }}
                >
                  {goal.desc2}
                </Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>

      <Box sx={{ mt: 6, textAlign: "center" }}>
        <Typography variant="h5" component="h2" gutterBottom>
          What&apos;s your budget range?
        </Typography>
        <Slider
          value={budget}
          onChange={handleBudgetChange}
          aria-labelledby="budget-slider"
          valueLabelDisplay="off"
          step={500}
          min={500}
          max={50000}
        />
        <Typography
          variant="h4"
          sx={{ mt: 2, color: "primary.main", fontWeight: "bold" }}
        >
          £{budget.toLocaleString()}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Investment Range
        </Typography>
      </Box>
    </Box>
  );
};

GoalsStep.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  selectedGoals: PropTypes.array.isRequired,
  budget: PropTypes.number.isRequired,
};

export default GoalsStep;
