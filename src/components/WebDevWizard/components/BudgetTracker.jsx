import PropTypes from "prop-types";
import { Paper, Typography } from "@mui/material";

const BudgetTracker = ({ budget, spent, spentLabel = "Spent" }) => {
  const remaining = budget - spent;
  const isBudgetExceeded = remaining < 0;

  return (
    <Paper
      variant="outlined"
      sx={{
        p: 2,
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 2,
        mb: 4,
        borderRadius: 2,
        backgroundColor: "grey.50",
      }}
    >
      <Typography variant="body1">
        Budget: <strong>£{budget.toLocaleString()}</strong>
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {spentLabel}: <strong>£{spent.toLocaleString()}</strong>
      </Typography>
      <Typography
        variant="body1"
        color={isBudgetExceeded ? "error.main" : "success.main"}
      >
        Remaining: <strong>£{remaining.toLocaleString()}</strong>
      </Typography>
    </Paper>
  );
};

BudgetTracker.propTypes = {
  budget: PropTypes.number.isRequired,
  spent: PropTypes.number.isRequired,
  spentLabel: PropTypes.string,
};

export default BudgetTracker;
