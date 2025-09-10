import React from "react";
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
import {
  CheckCircle,
  Home,
  MailOutline,
  CalendarToday,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { theme } from "../../theme.js";

const gradientText = {
  background: "linear-gradient(to right, #6E3EF4, #3B82F6)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  display: "inline-block",
  fontWeight: 700,
};

const CheckoutSuccess = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    localStorage.removeItem("quoteBuilderState");
  }, []);

  const handleBackToHome = () => {
    navigate("/booking");
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
              <CheckCircle sx={{ fontSize: 60, color: "success.main" }} />

              <Typography
                variant="h3"
                component="h1"
                sx={{ fontSize: { xs: "2.2rem", sm: "3rem" } }}
              >
                Payment{" "}
                <Box component="span" sx={gradientText}>
                  Successful!
                </Box>
              </Typography>

              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ fontWeight: 400, maxWidth: "500px" }}
              >
                Thank you for choosing us for your digital transformation
                journey. Your payment has been processed successfully.
              </Typography>

              <Paper
                variant="outlined"
                sx={{
                  p: 3,
                  width: "100%",
                  textAlign: "left",
                  backgroundColor: "rgba(46, 212, 122, 0.05)",
                  borderColor: "rgba(46, 212, 122, 0.2)",
                  borderRadius: 3,
                }}
              >
                <Typography
                  variant="h6"
                  component="p"
                  sx={{ fontWeight: "bold", mb: 2 }}
                >
                  What happens next?
                </Typography>
                <Stack spacing={2}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <MailOutline sx={{ color: "success.dark" }} />
                    <Typography variant="body1">
                      You&apos;ll receive a confirmation email with your order
                      details within the next few minutes.
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <CalendarToday sx={{ color: "success.dark" }} />
                    <Typography variant="body1">
                      Our team will contact you within 24-48 hours to begin your
                      project.
                    </Typography>
                  </Box>
                </Stack>
              </Paper>

              <Typography variant="body1" color="text.secondary" sx={{ pt: 2 }}>
                Need immediate assistance? Contact our support team at{" "}
                <Link
                  href="mailto:prevailclient@gmail.com"
                  sx={{ fontWeight: "bold", color: "primary.main" }}
                >
                  Prevailandumweltdevmailer@gmail.com
                </Link>
              </Typography>

              <Button
                variant="contained"
                onClick={handleBackToHome}
                startIcon={<Home />}
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
                Book Consultation
              </Button>
            </Stack>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default CheckoutSuccess;
