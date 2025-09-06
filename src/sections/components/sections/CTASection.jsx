import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper, Stack, useTheme, alpha } from '@mui/material';

export const CTASection = () => {
  const theme = useTheme();

  return (
    <Box id="pricing" sx={{ py: { xs: 16, md: 20, lg: 24 } }}>
      <Container maxWidth="lg">
        <Paper sx={{ 
          p: { xs: 6, md: 10, lg: 12 },
          background: 'linear-gradient(135deg, #3B82F6 0%, #7C3AED 100%)',
          color: 'white',
          textAlign: 'center',
          borderRadius: 3,
          position: 'relative',
          overflow: 'hidden'
        }}>
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography variant="h2" fontWeight={900} mb={3} sx={{ fontSize: { xs: '3rem', md: '4rem' } }}>
              Transform Your Marketing Today
            </Typography>
            <Typography variant="h5" fontWeight={300} mb={8} sx={{ opacity: 0.9 }}>
              Stop managing ads manually. Let automation do it better.
            </Typography>
            
            <Grid container spacing={3} sx={{ mb: 8, maxWidth: 800, mx: 'auto' }}>
              <Grid item xs={12} md={4}>
                <Paper sx={{ 
                  p: 4, 
                  background: alpha('#FFFFFF', 0.2),
                  backdropFilter: 'blur(10px)',
                  color: 'white'
                }}>
                  <Typography variant="h2" fontWeight={900}>24/7</Typography>
                  <Typography>Always Optimizing</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper sx={{ 
                  p: 4, 
                  background: alpha('#FFFFFF', 0.2),
                  backdropFilter: 'blur(10px)',
                  color: 'white'
                }}>
                  <Typography variant="h2" fontWeight={900}>$0</Typography>
                  <Typography>Monthly Fees</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper sx={{ 
                  p: 4, 
                  background: alpha('#FFFFFF', 0.2),
                  backdropFilter: 'blur(10px)',
                  color: 'white'
                }}>
                  <Typography variant="h2" fontWeight={900}>91%</Typography>
                  <Typography>Cost Reduction</Typography>
                </Paper>
              </Grid>
            </Grid>
            
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
              <Button
                variant="contained"
                size="large"
                startIcon={<span>🚀</span>}
                sx={{
                  bgcolor: 'white',
                  color: theme.palette.primary.main,
                  px: 6,
                  py: 2,
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  '&:hover': {
                    bgcolor: alpha('#FFFFFF', 0.9),
                    transform: 'scale(1.05)',
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
                  borderColor: 'white',
                  color: 'white',
                  borderWidth: 2,
                  px: 6,
                  py: 2,
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  backdropFilter: 'blur(10px)',
                  background: alpha('#FFFFFF', 0.1),
                  '&:hover': {
                    borderColor: 'white',
                    background: alpha('#FFFFFF', 0.2),
                    borderWidth: 2,
                  },
                }}
              >
                Book Demo
              </Button>
            </Stack>
            
            <Typography variant="body1" sx={{ mt: 4, opacity: 0.9 }}>
              No credit card required • Setup in 5 minutes • Cancel anytime
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};