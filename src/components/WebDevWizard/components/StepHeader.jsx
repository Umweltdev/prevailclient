import PropTypes from "prop-types";
import { Typography, Box, Chip } from "@mui/material";

const StepHeader = ({ step, title, subtitle }) => {
  return (
    <Box sx={{ mb: { xs: 5, md: 6 }, textAlign: "center" }}>
      <Chip
        label={`Step ${step} of 7`}
        color="primary"
        variant="outlined"
        sx={{ mb: 2 }}
      />

      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: "bold",
          background: "linear-gradient(45deg, #1976d2 30%, #64b5f6 90%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        gutterBottom
      >
        {title}
      </Typography>

      <Typography
        variant="h6"
        color="text.secondary"
        sx={{
          maxWidth: "600px",
          mx: "auto",
          fontWeight: 400,
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

StepHeader.propTypes = {
  step: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default StepHeader;
