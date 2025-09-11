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
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  width: "100%",
  minWidth: 300,
  minHeight: 320,
  cursor: isActive ? "pointer" : isDisabled ? "not-allowed" : "default",
  background: isActive
    ? `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(
        theme.palette.primary.main,
        0.02
      )} 100%)`
    : theme.palette.background.paper,
  border: `2px solid ${isActive ? theme.palette.primary.main : "transparent"}`,
  borderRadius: theme.spacing(2),
  overflow: "hidden",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
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
  top: 10,
  left: 10,
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  color: theme.palette.primary.contrastText,
  fontWeight: 400,
  fontSize: "0.55rem",
  height: 28,
  "& .MuiChip-icon": { color: "inherit" },
}));

const PricingTiers = ({ onBetaAccessClick }) => {
  const theme = useTheme();

  const tiers = [
    {
      id: "beta",
      name: "Beta Access",
      price: "€530",
      perSystem: "Per system",
      duration: "10 days left",
      isActive: true,
      badge: "ACTIVE NOW",
      // icon: <Star />,
    },
    {
      id: "early",
      name: "Early Adopter",
      price: "€876",
      perSystem: "Per system",
      duration: "Next 3 months",
      isActive: true,
      // icon: <Star />,
    },
    {
      id: "standard",
      name: "Standard",
      price: "€2,029",
      perSystem: "Per system",
      duration: "After 3 months",
      isActive: true,
      // icon: <Star />,
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
              fontSize: { xs: "2rem", md: "3rem" },
              color: theme.palette.primary.main,
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

        <Grid container spacing={6} justifyContent="center">
          {tiers.map((tier) => (
            <Grid item xs={12} sm={6} md={4} key={tier.id}>
              <StyledCard
                isActive={tier.isActive}
                isDisabled={tier.isDisabled}
                onClick={tier.isActive ? onBetaAccessClick : undefined}
              >
                {tier.badge && (
                  <PriceBadge label={tier.badge} icon={tier.icon} />
                )}

                <CardContent
                  sx={{ flexGrow: 1, textAlign: "center", py: 2, px: 4 }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      color: tier.isActive
                        ? theme.palette.primary.main
                        : "text.primary",
                      mb: 2,
                    }}
                  >
                    {tier.name}
                  </Typography>

                  <Typography
                    variant="h3"
                    component="div"
                    sx={{
                      fontWeight: 800,
                      fontSize: { xs: "2rem", md: "2.5rem" },
                      background: tier.isActive
                        ? `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
                        : "inherit",
                      backgroundClip: tier.isActive ? "text" : "inherit",
                      WebkitBackgroundClip: tier.isActive ? "text" : "inherit",
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
                    variant="body1"
                    color="text.primary"
                    sx={{ fontWeight: 600, display: "block" }}
                  >
                    {tier.perSystem}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontWeight: 500, display: "block", mb: 3 }}
                  >
                    {tier.duration}
                  </Typography>
                </CardContent>

                <Box
                  sx={{
                    p: 2,
                    textAlign: "center",
                    borderTop: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
                  }}
                >
                  <Typography
                    variant="button"
                    color="primary"
                    sx={{ fontWeight: 600, cursor: "pointer" }}
                    onClick={onBetaAccessClick}
                  >
                    Contact Us
                  </Typography>
                </Box>
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
