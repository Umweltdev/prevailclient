import { Box, Typography, Paper, Stack, useTheme, alpha } from '@mui/material';

export const TraditionalCampaigns = () => {
  const theme = useTheme();
  
  const campaigns = [
    { name: 'Local Magazine Ad', spent: '$500', customers: '12 customers', cpc: '$41 per customer ✅', good: true },
    { name: 'Radio Spot', spent: '$300', customers: '3 customers', cpc: '$100 per customer ❌', good: false },
    { name: 'Farmers Market Booth', spent: '$200', customers: '18 customers', cpc: '$11 per customer ✅', good: true },
  ];

  return (
    <Box>
      <Typography variant="h4" fontWeight={800} mb={4}>
        💰 Traditional Campaigns
      </Typography>
      
      <Stack spacing={3}>
        {campaigns.map((campaign, index) => (
          <Paper
            key={index}
            elevation={0}
            sx={{
              p: 4,
              background: campaign.good 
                ? alpha(theme.palette.success.main, 0.05)
                : alpha(theme.palette.error.main, 0.05),
              border: `1px solid ${campaign.good 
                ? alpha(theme.palette.success.main, 0.2)
                : alpha(theme.palette.error.main, 0.2)}`,
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box>
                <Typography variant="h6" fontWeight={700}>
                  {campaign.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {campaign.spent} spent
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'right' }}>
                <Typography 
                  variant="h5" 
                  fontWeight={700}
                  color={campaign.good ? 'success.main' : 'error.main'}
                >
                  {campaign.customers}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {campaign.cpc}
                </Typography>
              </Box>
            </Box>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};