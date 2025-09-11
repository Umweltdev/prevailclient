import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Stack,
  useTheme,
  alpha,
  styled,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GradientText } from "./components/common/GradientText";
import PricingTiers from "./components/sections/pricingTiers.jsx";

const MotionBox = motion(Box);

const GradientBackground = styled(Box)({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: "hidden",
  zIndex: -1,
  pointerEvents: "none",
  "& .orb": {
    position: "absolute",
    borderRadius: "50%",
    filter: "blur(120px)",
    opacity: 0.12,
  },
});

const AnimatedChip = styled(Chip)(({ theme }) => ({
  background: alpha(theme.palette.primary.main, 0.1),
  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
  backdropFilter: "blur(12px)",
  padding: "6px 12px",
  "& .MuiChip-label": {
    fontWeight: 600,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    fontSize: "0.8rem",
  },
}));

const PulsingDot = styled(Box)(({ theme }) => ({
  width: 10,
  height: 10,
  borderRadius: "50%",
  background: theme.palette.primary.main,
  animation: "pulse 2s infinite",
  "@keyframes pulse": {
    "0%": { opacity: 1, transform: "scale(1)" },
    "50%": { opacity: 0.4, transform: "scale(0.7)" },
    "100%": { opacity: 1, transform: "scale(1)" },
  },
}));

export const HeroSection = () => {
  const theme = useTheme();

  return (
    <Box sx={{ mt: 14, textAlign: "center" }}>
      <GradientBackground>
        <Box
          className="orb"
          sx={{
            top: -220,
            left: -220,
            width: 520,
            height: 520,
            background: theme.palette.primary.main,
          }}
        />
        <Box
          className="orb"
          sx={{
            top: -180,
            right: -220,
            width: 520,
            height: 520,
            background: theme.palette.secondary.main,
          }}
        />
        <Box
          className="orb"
          sx={{
            bottom: -200,
            left: "25%",
            width: 520,
            height: 520,
            background: theme.palette.primary.light,
          }}
        />
      </GradientBackground>

      <Container maxWidth="md">
        <MotionBox
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Stack
            spacing={{ xs: 4, md: 6 }}
            alignItems="center"
            textAlign="center"
          >
            <AnimatedChip
              icon={<PulsingDot />}
              label="Automated Marketing Revolution"
            />

            <GradientText
              variant="h1"
              component="h1"
              gradient="primary"
              sx={{
                fontWeight: 900,
                fontSize: { xs: "2.75rem", md: "4.5rem" },
                lineHeight: 1.05,
                letterSpacing: "-0.015em",
              }}
            >
              Universal Outreach Hub
            </GradientText>

            <Typography
              variant="h5"
              sx={{
                color: "text.secondary",
                maxWidth: "700px",
                fontWeight: 400,
                fontSize: { xs: "1.1rem", md: "1.35rem", lg: "1.5rem" },
                lineHeight: 1.6,
              }}
            >
              The all-in-one marketing command center to elevate your outreach,
              automate campaigns, and maximize conversions.
            </Typography>

            <PricingTiers />

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={3}
              sx={{ mt: { xs: 3, md: 5 } }}
            >
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                size="large"
                startIcon={<span>🚀</span>}
                sx={{
                  background:
                    "linear-gradient(135deg, #3B82F6 0%, #7C3AED 100%)",
                  px: 5,
                  py: 2.2,
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  borderRadius: 2.5,
                  boxShadow: "0 12px 28px -6px rgba(59,130,246,0.35)",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #2563EB 0%, #6D28D9 100%)",
                    transform: "translateY(-3px)",
                    boxShadow: "0 20px 40px -8px rgba(59,130,246,0.45)",
                  },
                }}
              >
                Start Your Free Trial
              </Button>

              <Button
                component={Link}
                to="/contact"
                variant="outlined"
                size="large"
                startIcon={<span>👥</span>}
                sx={{
                  borderColor: alpha(theme.palette.divider, 0.25),
                  color: theme.palette.text.primary,
                  px: 5,
                  py: 2.2,
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  borderRadius: 2.5,
                  backdropFilter: "blur(8px)",
                  background: alpha(theme.palette.background.paper, 0.6),
                  "&:hover": {
                    borderColor: theme.palette.primary.main,
                    background: alpha(theme.palette.primary.main, 0.08),
                  },
                }}
              >
                Book a Demo
              </Button>
            </Stack>
          </Stack>
        </MotionBox>
      </Container>
    </Box>
  );
};
