import PropTypes from "prop-types";
import { Grid, Typography, Box, Button, Grow, Stack } from "@mui/material";
import { industries } from "../data/costCalculationData.js";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SelectableCard from "../../../ReusedComponents/SelectableCard";
import StepHeader from "../../../ReusedComponents/StepHeader.jsx";

export const IndustrySelection = ({
  selectedIndustry,
  setSelectedIndustry,
  nextStep,
  prevStep,
}) => {
  return (
    <Box>
      <StepHeader
        step={1}
        title="What industry are you in?"
        subtitle="Select your industry to receive tailored recommendations"
      />
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {industries.map((industry, index) => (
          <Grid item xs={12} sm={6} md={4} key={industry.id}>
            <Grow in timeout={300 + index * 100}>
              <div>
                <SelectableCard
                  selected={selectedIndustry === industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                >
                  <Box
                    sx={{
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 3,
                      mx: "auto",
                      background: `linear-gradient(135deg, ${industry.color}20, ${industry.color}10)`,
                      border: `2px solid ${industry.color}30`,
                    }}
                  >
                    <Typography
                      variant="h3"
                      component="p"
                      sx={{ fontSize: "2.5rem" }}
                    >
                      {industry.icon}
                    </Typography>
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    textAlign="center"
                    fontWeight={600}
                  >
                    {industry.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign="center"
                    sx={{ lineHeight: 1.6 }}
                  >
                    {industry.examples}
                  </Typography>
                </SelectableCard>
              </div>
            </Grow>
          </Grid>
        ))}
      </Grid>

      <Stack direction="row" spacing={2} justifyContent="center">
        <Button
          variant="outlined"
          size="large"
          onClick={prevStep}
          startIcon={<ChevronLeft size={20} />}
          sx={{ minWidth: 120 }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          size="large"
          onClick={nextStep}
          disabled={!selectedIndustry}
          endIcon={<ChevronRight size={20} />}
          sx={{ minWidth: 160 }}
        >
          Continue
        </Button>
      </Stack>
    </Box>
  );
};

IndustrySelection.propTypes = {
  selectedIndustry: PropTypes.string,
  setSelectedIndustry: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};
