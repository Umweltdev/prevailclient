import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Button,
  Grid,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
//   Fade,
  Grow,
  Stack,
} from "@mui/material";
import {
  ChevronRight,
  ChevronLeft,
  Check,
  Ruler as Schedule,
} from "lucide-react";
import { PLATFORM_TIERS } from "../data/costCalculationData.js";
import SelectableCard from "../components/SelectableCard.jsx";

const PlatformTierSelection = ({
  selectedTier,
  setSelectedTier,
  nextStep,
  prevStep,
  currentServiceIndex,
  totalServices,
}) => (
//   <Fade in timeout={500}>
    <Box>
      <Stack spacing={3} alignItems="center" textAlign="center" mb={6}>
        <Chip
          label={`Service ${
            currentServiceIndex + 1
          } of ${totalServices}: Platform Tier`}
          color="primary"
          variant="outlined"
          sx={{ px: 3, py: 1, fontSize: "0.9rem", fontWeight: 600 }}
        />
        <Typography variant="h2" gutterBottom>
          Select Your Platform Tier
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 700, fontSize: "1.1rem", lineHeight: 1.7 }}
        >
          Choose the functionality level that best matches your business
          requirements and growth plans.
        </Typography>
      </Stack>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        {PLATFORM_TIERS.map((tier, index) => (
          <Grid item xs={12} md={4} key={tier.id}>
            <Grow in timeout={300 + index * 150}>
              <div>
                <SelectableCard
                  selected={selectedTier === tier.id}
                  onClick={() => setSelectedTier(tier.id)}
                  sx={{ height: "100%" }}
                >
                  {tier.popular && (
                    <Chip
                      label="Most Popular"
                      color="primary"
                      size="small"
                      sx={{
                        position: "absolute",
                        top: -10,
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 1,
                        bgcolor: "primary.main",
                        color: "white",
                        fontWeight: 600,
                      }}
                    />
                  )}

                  <Stack spacing={2} height="100%">
                    <Box textAlign="center" pt={tier.popular ? 2 : 0}>
                      <Typography
                        variant="h3"
                        sx={{ mb: 1, fontSize: "2.5rem" }}
                      >
                        {tier.icon}
                      </Typography>
                      <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        fontWeight={700}
                      >
                        {tier.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2, lineHeight: 1.6 }}
                      >
                        {tier.description}
                      </Typography>
                      <Box sx={{ mb: 2 }}>
                        <Typography
                          variant="h4"
                          component="p"
                          color="primary"
                          sx={{ fontWeight: 800, mb: 0.5 }}
                        >
                          €{tier.minPrice.toLocaleString()} - €
                          {tier.maxPrice.toLocaleString()}
                        </Typography>
                        <Chip
                          label={tier.deliveryTime}
                          size="small"
                          icon={<Schedule size={14} />}
                          sx={{ bgcolor: "grey.100", fontSize: "0.75rem" }}
                        />
                      </Box>
                    </Box>

                    <List dense sx={{ p: 0, flexGrow: 1 }}>
                      {tier.features.map((feature, idx) => (
                        <ListItem key={idx} disableGutters sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <Box
                              sx={{
                                width: 20,
                                height: 20,
                                borderRadius: "50%",
                                bgcolor: "success.main",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Check size={12} color="white" />
                            </Box>
                          </ListItemIcon>
                          <ListItemText
                            primary={feature}
                            primaryTypographyProps={{
                              variant: "body2",
                              sx: { lineHeight: 1.6 },
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Stack>
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
          disabled={!selectedTier}
          endIcon={<ChevronRight size={20} />}
          sx={{ minWidth: 160 }}
        >
          Continue
        </Button>
      </Stack>
    </Box>
  );
  
  export default PlatformTierSelection;

PlatformTierSelection.propTypes = {
  selectedTier: PropTypes.string,
  setSelectedTier: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  currentServiceIndex: PropTypes.number,
  totalServices: PropTypes.number,
};
