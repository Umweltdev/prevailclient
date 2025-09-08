import { Box, Container, Typography, Grid, Paper, Stack, useTheme, alpha } from '@mui/material';

export const CampaignTypes = () => {
  const theme = useTheme();

  const campaignTypes = [
    {
      title: 'Search Ads',
      platforms: 'Google, Bing',
      features: ['Auto keyword bidding', 'Conversion-based adjustments', 'Pause expensive keywords']
    },
    {
      title: 'Social Media',
      platforms: 'Facebook, Instagram, TikTok',
      features: ['Audience testing', 'Buyer targeting', 'Non-buyer exclusion']
    },
    {
      title: 'Shopping Ads',
      platforms: 'Amazon, Google Shopping',
      features: ['Margin-based bidding', 'Product optimization', 'Auto-pause low performers']
    },
    {
      title: 'Display/Video',
      platforms: 'YouTube, Display Networks',
      features: ['Creative testing', 'Winner scaling', 'Time-based optimization']
    },
    {
      title: 'Professional',
      platforms: 'LinkedIn, Industry Sites',
      features: ['Job title targeting', 'Lead quality scoring', 'B2B nurturing']
    }
  ];

  return (
    <Box id="features" sx={{ py: { xs: 12, md: 16, lg: 20 } }}>
      <Container maxWidth="lg">
        <Typography variant="h2" fontWeight={900} textAlign="center" mb={8}>
          5 Types of &quot;Set & Forget&quot; Campaigns
        </Typography>
        
        <Grid container spacing={3}>
          {campaignTypes.map((campaign, index) => (
            <Grid item xs={12} sm={6} md={2.4} key={index}>
              <Paper sx={{ 
                p: 4, 
                height: '100%',
                background: alpha(theme.palette.background.paper, 0.7),
                backdropFilter: 'blur(10px)',
                border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: theme.shadows[10],
                  background: alpha(theme.palette.background.paper, 0.9),
                },
                transition: 'all 0.3s'
              }}>
                <Typography variant="h6" fontWeight={800} mb={1}>
                  {campaign.title}
                </Typography>
                <Typography variant="caption" color="secondary" display="block" mb={2}>
                  {campaign.platforms}
                </Typography>
                <Stack spacing={1}>
                  {campaign.features.map((feature, i) => (
                    <Typography key={i} variant="caption" sx={{ display: 'flex', alignItems: 'start' }}>
                      <span style={{ color: theme.palette.success.main, marginRight: 4 }}>•</span>
                      {feature}
                    </Typography>
                  ))}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};