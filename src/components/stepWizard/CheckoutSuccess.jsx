import React from 'react';
import {
  ThemeProvider,
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Alert,
  Divider,
} from '@mui/material';
import { Check, Home, Mail, Calendar } from 'lucide-react';
import { theme } from '../theme.js';
import { useNavigate } from 'react-router-dom';

const gradientText = {
  background: "linear-gradient(to right, #6E3EF4, #3B82F6)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  display: "inline-block",
};

const CheckoutSuccess = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    // Clear the wizard state on successful payment
    localStorage.removeItem("quoteBuilderState");
  }, []);

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          background: theme.palette.background.default,
          color: "text.primary",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="md">
          <Card elevation={8} sx={{ textAlign: "center" }}>
            <CardContent sx={{ p: { xs: 4, md: 6 } }}>
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #10B981, #059669)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 3,
                }}
              >
                <Check size={40} color="white" />
              </Box>
              
              <Typography variant="h3" component="h1" gutterBottom>
                Payment{" "}
                <Box component="span" sx={gradientText}>
                  Successful!
                </Box>
              </Typography>
              
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ mb: 4, maxWidth: "600px", mx: "auto" }}
              >
                Thank you for choosing us for your digital transformation journey. 
                Your payment has been processed successfully.
              </Typography>

              <Alert 
                severity="success" 
                sx={{ 
                  mb: 4, 
                  textAlign: "left",
                  "& .MuiAlert-message": { 
                    width: "100%" 
                  }
                }}
              >
                <Typography variant="h6" gutterBottom>
                  What happens next?
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Mail size={20} color={theme.palette.success.main} />
                    <Typography variant="body1">
                      You&apos;ll receive a confirmation email with your order details within the next few minutes.
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Calendar size={20} color={theme.palette.success.main} />
                    <Typography variant="body1">
                      Our team will contact you within 24-48 hours to begin your project.
                    </Typography>
                  </Box>
                </Box>
              </Alert>

              <Divider sx={{ my: 4 }} />

              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Need immediate assistance? Contact our support team at{" "}
                <Box component="span" sx={{ color: "primary.main", fontWeight: "bold" }}>
                  support@yourcompany.com
                </Box>
              </Typography>

              <Button
                variant="contained"
                onClick={handleBackToHome}
                startIcon={<Home />}
                size="large"
                sx={{ 
                  minWidth: 200,
                  background: "linear-gradient(135deg, #6E3EF4, #3B82F6)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #5B2EF0, #2563EB)",
                  }
                }}
              >
                Back to Home
              </Button>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default CheckoutSuccess;