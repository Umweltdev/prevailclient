import PropTypes from "prop-types";
import {
  Grid,
  Paper,
  Typography,
  Box,
  Slider,
  Button,
  Stack,
} from "@mui/material";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PaletteIcon from "@mui/icons-material/Palette";
import BoltIcon from "@mui/icons-material/Bolt";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import StepHeader from "../../../ReusedComponents/StepHeader";

const goals = [
  {
    icon: <AttachMoneyIcon sx={{ fontSize: 40, color: "#2E7D32" }} />,
    title: "Eliminate Platform Fees",
    desc1: "Stop paying 20-35% commission",
    desc2: "Save £1,000-5,000/month",
  },
  {
    icon: <PaletteIcon sx={{ fontSize: 40, color: "#6A1B9A" }} />,
    title: "Build Brand Identity",
    desc1: "Create unique digital presence",
    desc2: "73% better brand recall",
  },
  {
    icon: <BoltIcon sx={{ fontSize: 40, color: "#EF6C00" }} />,
    title: "Automate Operations",
    desc1: "Streamline workflows",
    desc2: "15-20 hours/week saved",
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 40, color: "#0277BD" }} />,
    title: "Scale Your Business",
    desc1: "Systems that grow with you",
    desc2: "Multi-location ready",
  },
  {
    icon: <PeopleIcon sx={{ fontSize: 40, color: "#C62828" }} />,
    title: "Own Customer Relationships",
    desc1: "Direct customer connection",
    desc2: "Build lasting loyalty",
  },
  {
    icon: <BarChartIcon sx={{ fontSize: 40, color: "#2E7D32" }} />,
    title: "Data-Driven Decisions",
    desc1: "Analytics for growth",
    desc2: "Real-time dashboards",
  },
];

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

  const handleBudgetChange = (_, newValue) => {
    onUpdate("budget", newValue);
  };
  

  const canContinue = selectedGoals.length > 0 && Number(budget) > 0;

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "stretch",
          gap: 4,
          flexWrap: "wrap",
          mb: 5,
        }}
      >
        <Box sx={{ flex: "1 1 380px", minWidth: 320 }}>
          <StepHeader
            step={2}
            title="What are your primary goals?"
            subtitle="Select all that apply"
          />
        </Box>

        <Paper
          elevation={2}
          sx={{
            flex: "0 1 420px",
            minWidth: 320,
            p: 3,
            borderRadius: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 1.5,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Budget Range
          </Typography>

          <Slider
            value={budget}
            onChange={handleBudgetChange}
            step={500}
            min={500}
            max={100000}
            valueLabelDisplay="auto"
            sx={{
              color: "#1976D2",
              "& .MuiSlider-thumb": {
                width: 22,
                height: 22,
                bgcolor: "#fff",
                border: "2px solid #1976D2",
              },
            }}
          />

          <Box sx={{ display: "flex", alignItems: "baseline", gap: 1 }}>
            <Typography
              variant="h4"
              sx={{ color: "#1976D2", fontWeight: 800, lineHeight: 1 }}
            >
              £{Number(budget).toLocaleString()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Investment Range
            </Typography>
          </Box>
        </Paper>
      </Box>
      <Grid container spacing={3}>
        {goals.map((goal) => {
          const isSelected = selectedGoals.includes(goal.title);
          return (
            <Grid item xs={12} sm={6} md={4} key={goal.title}>
              <Paper
                variant="outlined"
                onClick={() => handleGoalSelect(goal.title)}
                sx={{
                  p: 3,
                  height: "100%",
                  cursor: "pointer",
                  textAlign: "center",
                  borderRadius: 3,
                  border: isSelected
                    ? "2px solid #1976D2"
                    : "1px solid #E0E0E0",
                  backgroundColor: isSelected ? "#E3F2FD" : "#FFFFFF",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    borderColor: "#1976D2",
                    boxShadow: 4,
                  },
                }}
              >
                {goal.icon}
                <Typography
                  variant="h6"
                  sx={{ mt: 2, mb: 0.5, fontWeight: 700, minHeight: 56 }}
                >
                  {goal.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {goal.desc1}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 700, color: "#424242", mt: 0.5 }}
                >
                  {goal.desc2}
                </Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
      <Stack direction="row" justifyContent="space-between" sx={{ mt: 6 }}>
        <Button variant="outlined" onClick={handleBack}>
          Back
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
          disabled={!canContinue}
          sx={{
            bgcolor: canContinue ? "#1976D2" : "#90CAF9",
            "&:hover": { bgcolor: canContinue ? "#115293" : "#90CAF9" },
          }}
        >
          Continue
        </Button>
      </Stack>
    </Box>
  );
};

GoalsStep.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  selectedGoals: PropTypes.arrayOf(PropTypes.string).isRequired,
  budget: PropTypes.number.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
};

export default GoalsStep;
