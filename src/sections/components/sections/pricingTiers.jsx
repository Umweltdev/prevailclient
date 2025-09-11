import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  Container,
  useTheme,
  alpha,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

const StyledCard = styled(Card)(({ theme, isActive, isDisabled }) => ({
  position: "relative",
  height: "100%",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  cursor: isActive ? "pointer" : isDisabled ? "not-allowed" : "default",
  background: isActive
    ? `linear-gradient(135deg, ${alpha(
        theme.palette.primary.main,
        0.05
      )} 0%, ${alpha(theme.palette.primary.main, 0.02)} 100%)`
    : theme.palette.background.paper,
  border: `2px solid ${
    isActive ? theme.palette.primary.main : "transparent"
  }`,
  borderRadius: theme.spacing(2),
  overflow: "hidden",
  opacity: isDisabled ? 0.6 : 1,
  pointerEvents: isDisabled ? "none" : "auto",

  "&::before": isActive
    ? {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "4px",
        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
      }
    : {},

  "&:hover": {
    transform: isActive
      ? "translateY(-8px)"
      : isDisabled
      ? "none"
      : "translateY(-4px)",
    boxShadow: isActive
      ? `0 20px 40px ${alpha(theme.palette.primary.main, 0.3)}`
      : isDisabled
      ? "none"
      : theme.shadows[8],
  },
}));

const PriceBadge = styled(Chip)(({ theme }) => ({
  position: "absolute",
  top: 16,
  right: 16,
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  color: theme.palette.primary.contrastText,
  fontWeight: 600,
  fontSize: "0.75rem",
  height: 28,
  "& .MuiChip-icon": {
    color: "inherit",
  },
}));

const PricingTiers = ({ onBetaAccessClick }) => {
  const theme = useTheme();

  const tiers = [
    {
      id: "beta",
      name: "Beta Access",
      price: "€530",
      duration: "Per system • 10 days left",
      isActive: true,
      badge: "ACTIVE NOW",
    //   icon: <Star />,
    },
    {
      id: "early",
      name: "Early Adopter",
      price: "€876",
      duration: "Per system • Next 3 months",
      isActive: true,
    //   icon: <Star />,
    },
    {
      id: "standard",
      name: "Standard",
      price: "€2,029",
      duration: "Per system • After 3 months",
      isActive: true,
    //   icon: <Star />,
    },
  ];

  return (
    <Box id="pricing" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
            }}
          >
            Time-Limited Pricing
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: "auto" }}
          >
            Choose the plan that fits your needs. Early access pricing
            won&apos;t last forever.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {tiers.map((tier) => (
            <Grid item xs={12} sm={6} md={4} key={tier.id}>
              <StyledCard
                isActive={tier.isActive}
                isDisabled={tier.isDisabled}
                onClick={tier.isActive ? onBetaAccessClick : undefined}
                elevation={tier.isActive ? 8 : 2}
              >
                {tier.badge && (
                  <PriceBadge
                    label={tier.badge}
                    icon={tier.icon}
                    size="small"
                  />
                )}

                <CardContent sx={{ p: 4, textAlign: "center" }}>
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        color: tier.isActive ? "primary.main" : "text.primary",
                      }}
                    >
                      {tier.name}
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="h3"
                      component="div"
                      sx={{
                        fontWeight: 700,
                        background: tier.isActive
                          ? `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
                          : "inherit",
                        backgroundClip: tier.isActive ? "text" : "inherit",
                        WebkitBackgroundClip: tier.isActive
                          ? "text"
                          : "inherit",
                        WebkitTextFillColor: tier.isActive
                          ? "transparent"
                          : "inherit",
                        color: tier.isActive ? "transparent" : "text.primary",
                        mb: 1,
                      }}
                    >
                      {tier.price}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontWeight: 500 }}
                    >
                      {tier.duration}
                    </Typography>
                  </Box>

                  {tier.isActive && (
                    <Box
                      sx={{
                        mt: 3,
                        p: 2,
                        bgcolor: alpha(theme.palette.success.main, 0.1),
                        borderRadius: 1,
                        border: `1px solid ${alpha(
                          theme.palette.success.main,
                          0.3
                        )}`,
                      }}
                    >
                      <Typography
                        variant="body2"
                        color="success.main"
                        sx={{ fontWeight: 600 }}
                      >
                        Click to get started
                      </Typography>
                    </Box>
                  )}

                  {tier.isDisabled && (
                    <Box
                      sx={{
                        mt: 3,
                        p: 2,
                        bgcolor: alpha(theme.palette.grey[500], 0.1),
                        borderRadius: 1,
                        border: `1px solid ${alpha(
                          theme.palette.grey[500],
                          0.3
                        )}`,
                      }}
                    >
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontWeight: 500 }}
                      >
                        Coming Soon
                      </Typography>
                    </Box>
                  )}
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
PricingTiers.propTypes = {
  onBetaAccessClick: PropTypes.func,
};

StyledCard.propTypes = {
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
};
export default PricingTiers;
