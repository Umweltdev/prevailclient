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
        gap: 1,
        mb: 4,
        borderRadius: 2,
      }}
    >
      <Typography>
        Budget: <strong>£{budget.toLocaleString()}</strong>
      </Typography>
      <Typography color="error">
        {spentLabel}: <strong>£{spent.toLocaleString()}</strong>
      </Typography>
      <Typography color={isBudgetExceeded ? "error" : "success.main"}>
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
