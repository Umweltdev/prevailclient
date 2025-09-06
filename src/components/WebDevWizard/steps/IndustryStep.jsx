import PropTypes from "prop-types";
import { Grid, Paper, Typography, Box, Button } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import StepHeader from "../components/StepHeader.jsx";
import { industries } from "../../../data/mockData.jsx";

const IndustryStep = ({ onSelect, selectedIndustry, handleNext }) => {
  return (
    <Box>
      <StepHeader
        step={1}
        title="What industry are you in?"
        subtitle="Select your industry to receive tailored recommendations"
      />
      <Grid container spacing={3}>
        {industries.map((industry) => (
          <Grid item xs={12} sm={6} md={4} key={industry.id}>
            <Paper
              variant="outlined"
              onClick={() => onSelect(industry.title)}
              sx={{
                p: 3,
                cursor: "pointer",
                textAlign: "center",
                height: "100%",
                border: "2px solid",
                borderColor:
                  selectedIndustry === industry.title
                    ? "primary.main"
                    : "divider",
                backgroundColor:
                  selectedIndustry === industry.title
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
              {industry.icon}
              <Typography
                variant="h6"
                component="h2"
                sx={{ mt: 2, fontWeight: "bold" }}
              >
                {industry.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {industry.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
        <Button
          variant="contained"
          onClick={handleNext}
          disabled={!selectedIndustry}
          endIcon={<DoubleArrowIcon />}
          size="large"
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
};

IndustryStep.propTypes = {
  onSelect: PropTypes.func.isRequired,
  selectedIndustry: PropTypes.string,
  handleNext: PropTypes.func.isRequired,
};

export default IndustryStep;
