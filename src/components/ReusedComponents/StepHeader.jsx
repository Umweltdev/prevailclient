import PropTypes from "prop-types";
import { Typography } from "@mui/material";

const StepHeader = ({ step, title, subtitle }) => {
  return (
    <>
      <Typography
        variant="caption"
        display="block"
        color="text.secondary"
        sx={{ mb: 1 }}
      >
        Step {step} of 6
      </Typography>
      <Typography variant="h4" component="h1">
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        {subtitle}
      </Typography>
    </>
  );
};

StepHeader.propTypes = {
  step: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default StepHeader;
