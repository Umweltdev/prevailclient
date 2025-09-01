import {
  ThemeProvider,
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Alert,
} from '@mui/material';
import { ArrowLeft, RefreshCw } from 'lucide-react';
import { theme } from '../theme.js';
import { useNavigate } from 'react-router-dom';

const gradientText = {
  background: "linear-gradient(to right, #6E3EF4, #3B82F6)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  display: "inline-block",
};

const CheckoutCancel = () => {
  const navigate = useNavigate();

  const handleContinueOrder = () => {
    // Navigate back to the wizard - the state should still be preserved in localStorage
    navigate('/');
  };

  const handleStartOver = () => {
    // Clear the wizard state and start over
    localStorage.removeItem("quoteBuilderState");
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
                  background: "linear-gradient(135deg, #F59E0B, #D97706)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 3,
                }}
              >
                <ArrowLeft size={40} color="white" />
              </Box>
              
              <Typography variant="h3" component="h1" gutterBottom>
                Payment{" "}
                <Box component="span" sx={gradientText}>
                  Cancelled
                </Box>
              </Typography>
              
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ mb: 4, maxWidth: "600px", mx: "auto" }}
              >
                No worries! Your payment was cancelled and no charges were made. 
                Your configuration has been saved and you can continue where you left off.
              </Typography>

              <Alert 
                severity="info" 
                sx={{ 
                  mb: 4, 
                  textAlign: "left"
                }}
              >
                <Typography variant="body1">
                  <strong>Your progress is saved!</strong> You can continue with your 
                  current configuration or start over with a new setup. Your selections 
                  will remain exactly as you left them.
                </Typography>
              </Alert>

              <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  onClick={handleContinueOrder}
                  startIcon={<ArrowLeft />}
                  size="large"
                  sx={{ 
                    minWidth: 200,
                    background: "linear-gradient(135deg, #6E3EF4, #3B82F6)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #5B2EF0, #2563EB)",
                    }
                  }}
                >
                  Continue Order
                </Button>
                
                <Button
                  variant="outlined"
                  onClick={handleStartOver}
                  startIcon={<RefreshCw />}
                  size="large"
                  sx={{ minWidth: 200 }}
                >
                  Start Over
                </Button>
              </Box>

              <Typography variant="body2" color="text.secondary" sx={{ mt: 4 }}>
                Questions? Contact us at{" "}
                <Box component="span" sx={{ color: "primary.main", fontWeight: "bold" }}>
                  support@yourcompany.com
                </Box>
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default CheckoutCancel;