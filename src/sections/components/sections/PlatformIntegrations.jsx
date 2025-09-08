import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper, 
  Chip, 
  Stack,
  useTheme, 
  alpha 
} from '@mui/material';

export const PlatformIntegrations = () => {
  const theme = useTheme();

  const platforms = [
    { name: 'Google Ads', icon: '🔍', status: 'Connected' },
    { name: 'Facebook Ads', icon: '📘', status: 'Connected' },
    { name: 'TikTok Ads', icon: '🎵', status: 'Connected' },
    { name: 'LinkedIn Ads', icon: '💼', status: 'Connected' },
    { name: 'Amazon Ads', icon: '📦', status: 'Connected' },
    { name: '15+ More', icon: '➕', status: 'Available' }
  ];

  return (
    <Box sx={{ py: { xs: 12, md: 16, lg: 20 }, bgcolor: alpha(theme.palette.grey[50], 0.5) }}>
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center" textAlign="center" mb={8}>
          <Typography variant="h2" fontWeight={900} sx={{ fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' } }}>
            Direct API Access
          </Typography>
          <Typography variant="h6" color="text.secondary" fontWeight={300}>
            Complete control over all major advertising platforms
          </Typography>
        </Stack>
        
        <Grid container spacing={3}>
          {platforms.map((platform, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <Paper sx={{ 
                p: 4,
                textAlign: 'center',
                background: alpha(theme.palette.background.paper, 0.7),
                backdropFilter: 'blur(10px)',
                border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.1)',
                  boxShadow: theme.shadows[10],
                },
                transition: 'all 0.3s'
              }}>
                <Typography variant="h2" mb={2}>{platform.icon}</Typography>
                <Typography variant="subtitle2" fontWeight={700} mb={2}>
                  {platform.name}
                </Typography>
                <Chip 
                  label={platform.status} 
                  size="small"
                  color={platform.status === 'Connected' ? 'success' : 'primary'}
                  sx={{ fontWeight: 600 }}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};