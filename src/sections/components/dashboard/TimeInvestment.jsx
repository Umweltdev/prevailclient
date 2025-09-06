import React from 'react';
import { Box, Typography, Paper, Stack, useTheme, alpha } from '@mui/material';

export const TimeInvestment = () => {
  const theme = useTheme();
  
  const investments = [
    { name: 'Blog Writing', hours: '8 hours/month', cost: '$400', revenue: '$200', loss: -200, negative: true },
    { name: 'Manual Instagram Posts', hours: '20 hours/month', cost: '$1,000', revenue: '$300', loss: -700, negative: true },
    { name: 'Email Newsletter', hours: '4 hours/month', cost: '$200', revenue: '$800', loss: 600, negative: false },
  ];

  return (
    <Box>
      <Typography variant="h4" fontWeight={800} mb={4}>
        ⏰ Time Investment Analysis
      </Typography>
      
      <Stack spacing={3}>
        {investments.map((item, index) => (
          <Paper
            key={index}
            elevation={0}
            sx={{
              p: 4,
              background: item.negative 
                ? alpha(theme.palette.error.main, 0.05)
                : alpha(theme.palette.success.main, 0.05),
              border: `1px solid ${item.negative 
                ? alpha(theme.palette.error.main, 0.2)
                : alpha(theme.palette.success.main, 0.2)}`,
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box>
                <Typography variant="h6" fontWeight={700}>
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {item.hours}
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'right' }}>
                <Typography 
                  variant="h4" 
                  fontWeight={800}
                  color={item.negative ? 'error.main' : 'success.main'}
                >
                  {item.negative ? '-' : '+'}${Math.abs(item.loss)}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Cost: {item.cost}
                </Typography>
                <br />
                <Typography variant="caption" color="text.secondary">
                  Revenue: {item.revenue}
                </Typography>
              </Box>
            </Box>
          </Paper>
        ))}
      </Stack>
      
      <Paper
        elevation={0}
        sx={{
          mt: 4,
          p: 4,
          background: alpha(theme.palette.error.main, 0.05),
          border: `1px solid ${alpha(theme.palette.error.main, 0.2)}`,
        }}
      >
        <Typography variant="h6" fontWeight={700}>
          Total Hidden Cost: $1,600/month in time value
        </Typography>
      </Paper>
    </Box>
  );
};