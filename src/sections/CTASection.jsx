import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  Stack,
  useTheme,
  alpha,
} from "@mui/material";
import { gradients } from "../theme.js";
import { GlassCard } from "./components/common/GlassCard.jsx";

export const CTASection = () => {
  const theme = useTheme();

  return (
    <Box id="pricing" sx={{ py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
        <Stack
          spacing={2}
          alignItems="center"
          textAlign="center"
          mb={{ xs: 6, md: 8 }}
        >
          <Box sx={{ width: "100%", position: "relative", zIndex: 1 }}>
            <Typography
              variant="h2"
              fontWeight={900}
              mb={2}
              sx={{ fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" } }}
            >
              Transform Your Marketing Today
            </Typography>

            <Typography
              variant="h5"
              fontWeight={300}
              mb={{ xs: 5, md: 8 }}
              sx={{
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
                opacity: 0.9,
              }}
            >
              Stop managing ads manually. Let automation do it better.
            </Typography>
            <GlassCard
              id="features"
              sx={{
                width: "100%",
                px: { xs: 2, sm: 4 },
                py: { xs: 5, md: 8 },
                background: gradients.secondary,
                color: "white",
              }}
            >
              <Grid
                container
                spacing={3}
                justifyContent="center"
                alignItems="stretch"
                sx={{
                  mb: { xs: 6, md: 8 },
                  maxWidth: { xs: "100%", md: 1000 },
                  mx: "auto",
                }}
              >
                {[
                  { value: "24/7", label: "Always Optimizing" },
                  { value: "$0", label: "Monthly Fees" },
                  { value: "91%", label: "Cost Reduction" },
                ].map((stat, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    key={index}
                    display="flex"
                    justifyContent="center"
                  >
                    <Paper
                      sx={{
                        p: { xs: 3, md: 4 },
                        width: "100%",
                        maxWidth: 300,
                        background: alpha("#FFFFFF", 0.15),
                        backdropFilter: "blur(12px)",
                        color: "white",
                        textAlign: "center",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 3,
                      }}
                    >
                      <Typography
                        variant="h2"
                        fontWeight={900}
                        sx={{
                          fontSize: {
                            xs: "1.8rem",
                            sm: "2.2rem",
                            md: "2.6rem",
                          },
                          lineHeight: 1.2,
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: "0.9rem", sm: "1rem" },
                          color: theme.palette.common.white,
                          mt: 1,
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={3}
                justifyContent="center"
                alignItems="center"
                sx={{ width: "100%" }}
              >
                <Button
                  variant="contained"
                  startIcon={<span>🚀</span>}
                  fullWidth
                  sx={{
                    bgcolor: "white",
                    color: theme.palette.primary.main,
                    px: { xs: 2.5, sm: 3.5 },
                    py: { xs: 1.2, sm: 1.25 },
                    fontSize: { xs: "0.95rem", sm: "1rem" },
                    fontWeight: 700,
                    borderRadius: 2,
                    minWidth: { xs: "100%", sm: 200 },
                    "&:hover": {
                      bgcolor: alpha("#FFFFFF", 0.9),
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  Start Free Trial
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<span>👥</span>}
                  fullWidth
                  sx={{
                    borderColor: "white",
                    color: "white",
                    px: { xs: 2.5, sm: 3.5 },
                    py: { xs: 1.2, sm: 1.25 },
                    fontSize: { xs: "0.95rem", sm: "1rem" },
                    fontWeight: 700,
                    borderRadius: 2,
                    minWidth: { xs: "100%", sm: 200 },
                    backdropFilter: "blur(10px)",
                    background: alpha("#FFFFFF", 0.1),
                    "&:hover": {
                      borderColor: "white",
                      background: alpha("#FFFFFF", 0.2),
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  Book Demo
                </Button>
              </Stack>
              <Typography
                variant="body2"
                sx={{
                  mt: 4,
                  opacity: 0.9,
                  color: theme.palette.common.white,
                  fontSize: { xs: "0.85rem", sm: "1rem" },
                  textAlign: "center",
                }}
              >
                No credit card required • Setup in 5 minutes • Cancel anytime
              </Typography>
            </GlassCard>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
