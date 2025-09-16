import PropTypes from "prop-types";

import {
  Box,
  Typography,
  Button,
  Grid,
  // Fade,
  Grow,
  Zoom,
  Stack,
  Chip,
} from "@mui/material";
import { Check, ChevronRight } from "lucide-react";
import { SERVICES } from "../data/costCalculationData.js";
import SelectableCard from "../components/SelectableCard.jsx";


const ServiceSelection = ({
  selectedServices,
  setSelectedServices,
  nextStep,
}) => {
  const toggleService = (serviceId) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  return (
    // <Fade in timeout={400}>
      <Box sx={{ px: { xs: 2, md: 0 } }}>
        <Stack spacing={3} alignItems="center" textAlign="center" mb={6}>
          <Chip
            label="Step 1 of 4: Service Selection"
            color="primary"
            variant="outlined"
            sx={{
              px: 3,
              py: 1,
              fontSize: "0.9rem",
              fontWeight: 600,
            }}
          />
          <Typography variant="h2" gutterBottom>
            What services do you need?
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 600, fontSize: "1.1rem", lineHeight: 1.7 }}
          >
            Select all the services that fit your business needs. You can choose
            multiple services for a comprehensive solution.
          </Typography>

          {selectedServices.length > 0 && (
            <Zoom in>
              <Chip
                label={`${selectedServices.length} service${
                  selectedServices.length > 1 ? "s" : ""
                } selected`}
                color="success"
                variant="filled"
                icon={<Check size={16} />}
                sx={{
                  py: 2,
                  px: 3,
                  fontSize: "0.9rem",
                  fontWeight: 600,
                }}
              />
            </Zoom>
          )}
        </Stack>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {SERVICES.map((service, index) => (
            <Grid item xs={12} md={6} key={service.id}>
              <Grow in timeout={500 + index * 100}>
                <div>
                  <SelectableCard
                    selected={selectedServices.includes(service.id)}
                    onClick={() => toggleService(service.id)}
                  >
                    <Box
                      className="card-icon"
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: 3,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 3,
                        background: service.gradient,
                        transition: "transform 0.3s ease",
                        boxShadow: `0 8px 25px ${service.color}25`,
                      }}
                    >
                      <service.icon
                        style={{
                          color: "white",
                          width: 36,
                          height: 36,
                        }}
                      />
                    </Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      fontWeight={700}
                    >
                      {service.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 3, lineHeight: 1.6 }}
                    >
                      {service.description}
                    </Typography>

                    <Stack
                      direction="row"
                      spacing={1}
                      flexWrap="wrap"
                      useFlexGap
                    >
                      {service.benefits.map((benefit) => (
                        <Chip
                          key={benefit}
                          label={benefit}
                          size="small"
                          sx={{
                            bgcolor: "grey.100",
                            fontSize: "0.75rem",
                            height: 24,
                          }}
                        />
                      ))}
                    </Stack>
                  </SelectableCard>
                </div>
              </Grow>
            </Grid>
          ))}
        </Grid>

        <Box textAlign="center">
          <Button
            variant="contained"
            size="large"
            onClick={nextStep}
            disabled={selectedServices.length === 0}
            endIcon={<ChevronRight size={20} />}
            sx={{
              minWidth: 220,
              py: 1.5,
              fontSize: "1rem",
              background:
                selectedServices.length > 0
                  ? "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)"
                  : undefined,
            }}
          >
            Continue with {selectedServices.length} service
            {selectedServices.length !== 1 ? "s" : ""}
          </Button>
        </Box>
      </Box>
    // </Fade>
  );
};

export default ServiceSelection;


ServiceSelection.propTypes = {
  selectedServices: PropTypes.array.isRequired,
  setSelectedServices: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};
