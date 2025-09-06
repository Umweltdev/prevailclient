import { Box, Grid, Typography, Chip, Paper, useTheme, alpha } from '@mui/material';

export const DigitalCampaigns = () => {
  const theme = useTheme();
  
  const campaigns = [
    { name: 'Google Ads', status: 'Auto-optimizing ✅', amount: '$400/month', customers: '42 customers last week', performing: true },
    { name: 'Facebook', status: 'Auto-optimizing ✅', amount: '$300/month', customers: '18 customers last week', performing: true },
    { name: 'Instagram', status: 'Paused ⏸️', amount: '$0/month', customers: 'Only 4 customers last week', performing: false },
    { name: 'TikTok', status: 'Increased ⬆️', amount: '$500/month', customers: '262 customers last week!', performing: true },
  ];

  return (
    <Box>
      <Typography variant="h4" fontWeight={800} mb={4}>
        📊 Automated Digital Campaigns
      </Typography>
      
      <Grid container spacing={3}>
        {campaigns.map((campaign, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                background: campaign.performing 
                  ? alpha(theme.palette.success.main, 0.05)
                  : alpha(theme.palette.error.main, 0.05),
                border: `1px solid ${campaign.performing 
                  ? alpha(theme.palette.success.main, 0.2)
                  : alpha(theme.palette.error.main, 0.2)}`,
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6" fontWeight={700}>
                  {campaign.name}
                </Typography>
                <Chip 
                  label={campaign.status} 
                  size="small"
                  sx={{
                    bgcolor: campaign.performing 
                      ? alpha(theme.palette.success.main, 0.1)
                      : alpha(theme.palette.error.main, 0.1),
                    color: campaign.performing 
                      ? theme.palette.success.main
                      : theme.palette.error.main,
                    fontWeight: 600,
                  }}
                />
              </Box>
              <Typography 
                variant="h4" 
                fontWeight={800}
                sx={{
                  textDecoration: campaign.performing ? 'none' : 'line-through',
                  opacity: campaign.performing ? 1 : 0.5,
                }}
              >
                {campaign.amount}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {campaign.customers}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      
      <Paper
        elevation={0}
        sx={{
          mt: 4,
          p: 4,
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(124, 58, 237, 0.05))',
          border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
        }}
      >
        <Typography variant="h6" fontWeight={700}>
          Total: $1,200/month actively managed by automation
        </Typography>
      </Paper>
    </Box>
  );
};