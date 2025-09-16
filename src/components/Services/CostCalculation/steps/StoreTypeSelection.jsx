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
  Wifi,
  Building,
} from "lucide-react";
import SelectableCard from "../components/SelectableCard.jsx";

const StoreTypeSelection = ({
  hasPhysicalStore,
  setHasPhysicalStore,
  nextStep,
  prevStep,
}) => (
//   <Fade in timeout={300}>
    <Box>
      <Stack spacing={3} alignItems="center" textAlign="center" mb={6}>
        <Chip
          label="Business Type Configuration"
          color="primary"
          variant="outlined"
          sx={{ px: 3, py: 1, fontSize: "0.9rem", fontWeight: 600 }}
        />
        <Typography variant="h2" gutterBottom>
          Do you have a physical storefront?
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 600, fontSize: "1.1rem", lineHeight: 1.7 }}
        >
          This affects GARO system setup requirements and pricing. Physical
          stores require additional Square POS integration.
        </Typography>
      </Stack>

      <Grid container spacing={4} sx={{ mb: 6, justifyContent: "center" }}>
        <Grid item xs={12} md={5}>
          <Grow in timeout={400}>
            <div>
              <SelectableCard
                selected={hasPhysicalStore === false}
                onClick={() => setHasPhysicalStore(false)}
                sx={{ textAlign: "center" }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                    mx: "auto",
                    background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
                    boxShadow: "0 8px 25px rgba(99, 102, 241, 0.3)",
                  }}
                >
                  <Wifi size={36} color="white" />
                </Box>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  fontWeight={700}
                >
                  E-commerce Only
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 3, lineHeight: 1.6 }}
                >
                  Online business without a physical location. Perfect for
                  digital-first companies.
                </Typography>
                <Chip
                  label="Standard API setup included"
                  color="success"
                  variant="filled"
                  size="small"
                  sx={{ fontWeight: 600 }}
                />
              </SelectableCard>
            </div>
          </Grow>
        </Grid>
        <Grid item xs={12} md={5}>
          <Grow in timeout={600}>
            <div>
              <SelectableCard
                selected={hasPhysicalStore === true}
                onClick={() => setHasPhysicalStore(true)}
                sx={{ textAlign: "center" }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                    mx: "auto",
                    background: "linear-gradient(135deg, #059669, #10B981)",
                    boxShadow: "0 8px 25px rgba(5, 150, 105, 0.3)",
                  }}
                >
                  <Building size={36} color="white" />
                </Box>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  fontWeight={700}
                >
                  Physical Storefront
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 3, lineHeight: 1.6 }}
                >
                  Brick-and-mortar location with inventory management needs and
                  POS integration.
                </Typography>
                <Chip
                  label="Includes €1,600 Square setup & training"
                  color="warning"
                  variant="filled"
                  size="small"
                  sx={{ fontWeight: 600 }}
                />
              </SelectableCard>
            </div>
          </Grow>
        </Grid>
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
          disabled={hasPhysicalStore === null}
          endIcon={<ChevronRight size={20} />}
          sx={{ minWidth: 160 }}
        >
          Continue
        </Button>
      </Stack>
    </Box>
//   </Fade>
);

export default StoreTypeSelection;


StoreTypeSelection.propTypes = {
  hasPhysicalStore: PropTypes.bool,
  setHasPhysicalStore: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};
