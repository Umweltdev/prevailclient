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

export const CTASection = () => {
  const theme = useTheme();

  return (
    <Box id="pricing" sx={{ py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
        <Paper
          sx={{
            p: { xs: 6, md: 10, lg: 12 },
            background: "linear-gradient(135deg, #3B82F6 0%, #7C3AED 100%)",
            color: "white",
            textAlign: "center",
            borderRadius: 3,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box sx={{ position: "relative", zIndex: 1 }}>
            {/* Heading */}
            <Typography
              variant="h2"
              fontWeight={900}
              mb={3}
              sx={{ fontSize: { xs: "2rem", sm: "2.5rem", md: "4rem" } }}
            >
              Transform Your Marketing Today
            </Typography>

            <Typography
              variant="h5"
              fontWeight={300}
              mb={8}
              sx={{
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                opacity: 0.9,
              }}
            >
              Stop managing ads manually. Let automation do it better.
            </Typography>

            <Grid
              container
              spacing={3}
              justifyContent="center"
              alignItems="stretch"
              sx={{ mb: 8, maxWidth: 800, mx: "auto" }}
            >
              {[
                { value: "24/7", label: "Always Optimizing" },
                { value: "$0", label: "Monthly Fees" },
                { value: "91%", label: "Cost Reduction" },
              ].map((stat, index) => (
                <Grid
                  item
                  xs={10} // narrower on mobile
                  sm={4} // equal split on tablet/desktop
                  key={index}
                  sx={{ mx: "auto" }} // centers on mobile
                >
                  <Paper
                    sx={{
                      p: { xs: 3, md: 4 },
                      background: alpha("#FFFFFF", 0.2),
                      backdropFilter: "blur(10px)",
                      color: "white",
                      textAlign: "center",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 2,
                    }}
                  >
                    <Typography
                      variant="h2"
                      fontWeight={900}
                      sx={{
                        fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
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
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<span>🚀</span>}
                sx={{
                  bgcolor: "white",
                  color: theme.palette.primary.main,
                  px: { xs: 4, sm: 6 },
                  py: { xs: 1.5, sm: 2 },
                  fontSize: { xs: "1rem", sm: "1.25rem" },
                  fontWeight: 700,
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
                size="large"
                startIcon={<span>👥</span>}
                sx={{
                  borderColor: "white",
                  color: "white",
                  borderWidth: 2,
                  px: { xs: 4, sm: 6 },
                  py: { xs: 1.5, sm: 2 },
                  fontSize: { xs: "1rem", sm: "1.25rem" },
                  fontWeight: 700,
                  backdropFilter: "blur(10px)",
                  background: alpha("#FFFFFF", 0.1),
                  "&:hover": {
                    borderColor: "white",
                    background: alpha("#FFFFFF", 0.2),
                    borderWidth: 2,
                  },
                }}
              >
                Book Demo
              </Button>
            </Stack>

            {/* Footer note */}
            <Typography
              variant="body1"
              sx={{
                mt: 4,
                opacity: 0.9,
                fontSize: { xs: "0.85rem", sm: "1rem" },
              }}
            >
              No credit card required • Setup in 5 minutes • Cancel anytime
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};
