import PropTypes from "prop-types";
import { Paper, Typography, Box } from "@mui/material";

const BudgetTracker = ({ budget, spent, spentLabel = "Spent" }) => {
  const remaining = budget - spent;
  const isBudgetExceeded = remaining < 0;

  return (
    <Paper
      variant="outlined"
      sx={{
        p: 2,
        mb: 4,
        borderRadius: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "nowrap", // prevent wrapping
          gap: 2,
          width: "100%",
        }}
      >
        <Box sx={{ flex: "1 1 30%", minWidth: 100 }}>
          <Typography variant="body1">
            Budget: <strong>€{budget.toLocaleString()}</strong>
          </Typography>
        </Box>
        <Box sx={{ flex: "1 1 30%", minWidth: 100 }}>
          <Typography variant="body1" color="error">
            {spentLabel}: <strong>€{spent.toLocaleString()}</strong>
          </Typography>
        </Box>
        <Box sx={{ flex: "1 1 30%", minWidth: 100 }}>
          <Typography
            variant="body1"
            color={isBudgetExceeded ? "error" : "success.main"}
          >
            Remaining: <strong>€{remaining.toLocaleString()}</strong>
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

BudgetTracker.propTypes = {
  budget: PropTypes.number.isRequired,
  spent: PropTypes.number.isRequired,
  spentLabel: PropTypes.string,
};

export default BudgetTracker;
