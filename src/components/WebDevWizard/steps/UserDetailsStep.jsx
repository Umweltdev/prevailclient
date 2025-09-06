import PropTypes from "prop-types";
import { Box, Button, Paper, TextField, Grid } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import StepHeader from "../components/StepHeader.jsx";

// Changed prop from 'onUpdate' to 'handleDataChange'
const UserDetailsStep = ({
  handleDataChange,
  formData,
  handleBack,
  handleNext,
}) => {
  const { name = "", email = "" } = formData;
  const isFormValid =
    name.trim() !== "" && email.trim() !== "" && /^\S+@\S+\.\S+$/.test(email);

  const handleChange = (e) => {
    // Used 'handleDataChange' here
    handleDataChange(e.target.name, e.target.value);
  };

  return (
    <Box>
      <StepHeader
        step={6}
        title="Your Details"
        subtitle="Please provide your contact information to finalize your quote."
      />
      <Paper variant="outlined" sx={{ p: 4, maxWidth: "600px", mx: "auto" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="Full Name"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="Email Address"
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              error={email.trim() !== "" && !/^\S+@\S+\.\S+$/.test(email)}
              helperText={
                email.trim() !== "" && !/^\S+@\S+\.\S+$/.test(email)
                  ? "Please enter a valid email."
                  : ""
              }
            />
          </Grid>
        </Grid>
      </Paper>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
        <Button variant="outlined" onClick={handleBack} size="large">
          Back
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
          disabled={!isFormValid}
          endIcon={<DoubleArrowIcon />}
          size="large"
        >
          Proceed to Checkout
        </Button>
      </Box>
    </Box>
  );
};

UserDetailsStep.propTypes = {
  handleDataChange: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
};

export default UserDetailsStep;
