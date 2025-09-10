import {
  ThemeProvider,
  Box,
  Container,
  Typography,
  Button,
  Paper,
  Stack,
  Link,
} from "@mui/material";
import { WarningAmber, ArrowBack, Replay } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { theme } from "../../theme.js";

const gradientText = {
  background: "linear-gradient(to right, #6E3EF4, #3B82F6)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  display: "inline-block",
  fontWeight: 700,
};

const CheckoutCancel = () => {
  const navigate = useNavigate();

  const handleContinueOrder = () => {
    navigate("/");
  };

  const handleStartOver = () => {
    localStorage.removeItem("quoteBuilderState");
    navigate("/");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: { xs: 2, sm: 3 },
          background: "linear-gradient(170deg, #f8fafc 0%, #eef2f9 100%)",
        }}
      >
        <Container maxWidth="sm">
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 5 },
              borderRadius: 4,
              textAlign: "center",
              border: "1px solid rgba(0, 0, 0, 0.08)",
              boxShadow: "0px 16px 40px -12px rgba(0,0,0,0.05)",
            }}
          >
            <Stack spacing={3} alignItems="center">
              <WarningAmber sx={{ fontSize: 60, color: "warning.main" }} />

              <Typography
                variant="h3"
                component="h1"
                sx={{ fontSize: { xs: "2.2rem", sm: "3rem" } }}
              >
                Payment{" "}
                <Box component="span" sx={gradientText}>
                  Cancelled
                </Box>
              </Typography>

              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ fontWeight: 400, maxWidth: "500px" }}
              >
                No worries! Your payment was not processed. Your progress has
                been saved if you&apos;d like to continue where you left off.
              </Typography>

              <Paper
                variant="outlined"
                sx={{
                  p: 3,
                  width: "100%",
                  textAlign: "center",
                  backgroundColor: "rgba(255, 193, 7, 0.05)",
                  borderColor: "rgba(255, 193, 7, 0.2)",
                  borderRadius: 3,
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Your selections are saved.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Continue with your current configuration or start fresh.
                </Typography>
              </Paper>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ pt: 2, width: "100%", justifyContent: "center" }}
              >
                <Button
                  variant="contained"
                  onClick={handleContinueOrder}
                  startIcon={<ArrowBack />}
                  size="large"
                  sx={{
                    minWidth: 220,
                    py: 1.5,
                    fontSize: "1rem",
                    borderRadius: "12px",
                    textTransform: "none",
                    background: "linear-gradient(135deg, #6E3EF4, #3B82F6)",
                    transition: "transform 0.2s ease",
                    "&:hover": {
                      transform: "scale(1.03)",
                      background: "linear-gradient(135deg, #5B2EF0, #2563EB)",
                    },
                  }}
                >
                  Continue Order
                </Button>

                <Button
                  variant="outlined"
                  onClick={handleStartOver}
                  startIcon={<Replay />}
                  size="large"
                  sx={{
                    minWidth: 220,
                    py: 1.5,
                    fontSize: "1rem",
                    borderRadius: "12px",
                    textTransform: "none",
                  }}
                >
                  Start Over
                </Button>
              </Stack>

              <Typography variant="body1" color="text.secondary" sx={{ pt: 2 }}>
                Questions? Contact us at{" "}
                <Link
                  href="mailto:support@yourcompany.com"
                  sx={{ fontWeight: "bold", color: "primary.main" }}
                >
                  Prevailandumweltdevmailer@gmail.com
                </Link>
              </Typography>
            </Stack>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default CheckoutCancel;
