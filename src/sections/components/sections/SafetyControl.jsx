import React from 'react';
import { Box, Container, Typography, Grid, Paper, Stack, useTheme, alpha } from '@mui/material';
import { GlassCard } from '../common/GlassCard';

export const SafetyControl = () => {
  const theme = useTheme();

  const safeguards = [
    { title: 'Daily Maximum', desc: 'Never spend more than $100/day' },
    { title: 'Per-Customer Cap', desc: 'Never pay more than $20 per customer' },
    { title: 'Platform Limits', desc: 'Never give Facebook more than 30%' },
    { title: 'Emergency Brake', desc: 'Auto-pause if losing money 3 days straight' }
  ];

  const overrides = [
    { title: 'Instant Pause', desc: 'Hit pause button anytime' },
    { title: 'Manual Adjustments', desc: 'Override any campaign instantly' },
    { title: 'Protected Campaigns', desc: 'Set "do not touch" on specific ads' },
    { title: 'Full Control', desc: 'Take back control instantly when needed' }
  ];

  return (
    <Box sx={{ py: { xs: 12, md: 16, lg: 20 } }}>
      <Container maxWidth="lg">
        <GlassCard sx={{ p: { xs: 4, md: 6, lg: 8 } }}>
          <Typography variant="h2" fontWeight={900} textAlign="center" mb={8}>
            Complete Safety & Control
          </Typography>
          
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight={800} color="primary" mb={4}>
                🛡️ Spending Safeguards
              </Typography>
              <Stack spacing={2}>
                {safeguards.map((item, index) => (
                  <Paper key={index} sx={{ p: 3, bgcolor: alpha(theme.palette.grey[50], 0.5) }}>
                    <Typography variant="subtitle1" fontWeight={700} mb={1}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.desc}
                    </Typography>
                  </Paper>
                ))}
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight={800} color="secondary" mb={4}>
                🎮 Manual Override
              </Typography>
              <Stack spacing={2}>
                {overrides.map((item, index) => (
                  <Paper key={index} sx={{ p: 3, bgcolor: alpha(theme.palette.grey[50], 0.5) }}>
                    <Typography variant="subtitle1" fontWeight={700} mb={1}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.desc}
                    </Typography>
                  </Paper>
                ))}
              </Stack>
            </Grid>
          </Grid>

          <Paper sx={{ 
            mt: 6, 
            p: 4, 
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(124, 58, 237, 0.05))',
            textAlign: 'center'
          }}>
            <Typography variant="body1">
              <strong>Remember:</strong> The automation is your assistant, not your master. 
              You're always in complete control.
            </Typography>
          </Paper>
        </GlassCard>
      </Container>
    </Box>
  );
};