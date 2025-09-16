import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Button,
  Grid,
  Chip,
//   Fade,
  Grow,
  Stack,
} from "@mui/material";
import {
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { TRINITY_OPTIONS } from "../data/costCalculationData.js";
import TrinityPackageCard from "../components/TrinityPackageCard.jsx";

const TrinityPackageSelection = ({
  selectedTrinity,
  setSelectedTrinity,
  nextStep,
  prevStep,
  currentServiceIndex,
  totalServices,
  isPartOfPlatform = false,
}) => (
//   <Fade in timeout={300}>
    <Box sx={{ px: { xs: 1, sm: 0 } }}>
      <Stack spacing={3} alignItems="center" textAlign="center" mb={6}>
        <Chip
          label={
            isPartOfPlatform
              ? `Service ${
                  currentServiceIndex + 1
                } of ${totalServices}: Platform Systems`
              : `Service ${
                  currentServiceIndex + 1
                } of ${totalServices}: Trinity Systems`
          }
          color="primary"
          variant="outlined"
          sx={{ px: 3, py: 1, fontSize: "0.9rem", fontWeight: 600 }}
        />
        <Typography variant="h2" gutterBottom>
          Choose Your Trinity Solution
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 700, fontSize: "1.1rem", lineHeight: 1.7, mb: 2 }}
        >
          Select individual AI systems or complete packages. Limited-time beta
          pricing available!
        </Typography>
        <Chip
          label="🔥 BETA PRICING: Save up to 87%"
          color="error"
          variant="filled"
          sx={{
            bgcolor: "error.main",
            color: "white",
            fontWeight: 700,
            fontSize: "0.9rem",
            px: 3,
            py: 1,
            animation: "pulse 2s infinite",
            "@keyframes pulse": {
              "0%": { opacity: 1 },
              "50%": { opacity: 0.8 },
              "100%": { opacity: 1 },
            },
          }}
        />
      </Stack>

      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ mb: 6 }}>
        {TRINITY_OPTIONS.map((option, index) => (
          <Grid
            item
            xs={12}
            md={option.type === "package" ? 12 : 6}
            key={option.id}
          >
            <Grow in timeout={300 + index * 100}>
              <div>
                <TrinityPackageCard
                  option={option}
                  selected={selectedTrinity === option.id}
                  onClick={() => setSelectedTrinity(option.id)}
                />
              </div>
            </Grow>
          </Grid>
        ))}
      </Grid>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Button
          variant="outlined"
          size="large"
          onClick={prevStep}
          startIcon={<ChevronLeft size={20} />}
          sx={{
            minWidth: { xs: "100%", sm: 120 },
            maxWidth: { xs: 300, sm: "none" },
          }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          size="large"
          onClick={nextStep}
          disabled={!selectedTrinity}
          endIcon={<ChevronRight size={20} />}
          sx={{
            minWidth: { xs: "100%", sm: 160 },
            maxWidth: { xs: 300, sm: "none" },
          }}
        >
          Continue
        </Button>
      </Stack>
    </Box>
//   </Fade>
);

export default TrinityPackageSelection;


TrinityPackageSelection.propTypes = {
  selectedTrinity: PropTypes.string,
  setSelectedTrinity: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  currentServiceIndex: PropTypes.number,
  totalServices: PropTypes.number,
  isPartOfPlatform: PropTypes.bool,
};
