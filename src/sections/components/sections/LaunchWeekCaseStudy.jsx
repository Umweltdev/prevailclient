import { Box, Container, Typography, Grid, Paper, useTheme, alpha } from '@mui/material';
import { GlassCard } from '../common/GlassCard';

export const LaunchWeekCaseStudy = () => {
  const theme = useTheme();

  const weekData = [
    { day: 'Monday', action: 'System distributes $5,000 across all platforms', icon: '🚀' },
    { day: 'Tuesday', action: 'TikTok showing 3x results - shifts 60% budget there', icon: '📈' },
    { day: 'Wednesday', action: 'Your manual posts: $0 sales. System recommends stopping', icon: '⚠️' },
    { day: 'Thursday', action: 'Newspaper offers ad. System predicts 10-15 customers', icon: '📰' },
    { day: 'Weekend', action: 'Final results calculated and analyzed', icon: '🏆' }
  ];

  return (
    <Box sx={{ py: { xs: 12, md: 16, lg: 20 } }}>
      <Container maxWidth="xl">
        <GlassCard sx={{ 
          p: { xs: 4, md: 6, lg: 8 },
          background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.05), rgba(236, 72, 153, 0.05))'
        }}>
          <Typography variant="h2" fontWeight={900} textAlign="center" mb={6} sx={{ fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' } }}>
            Launch Week Case Study: $5,000 Budget
          </Typography>
          
          <Grid container spacing={3} mb={6}>
            {weekData.map((item, index) => (
              <Grid item xs={12} sm={6} md={2.4} key={index}>
                <Paper sx={{ 
                  p: 3, 
                  textAlign: 'center',
                  height: '100%',
                  background: alpha(theme.palette.background.paper, 0.7),
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[10],
                  },
                  transition: 'all 0.3s'
                }}>
                  <Typography variant="h2" mb={2}>{item.icon}</Typography>
                  <Typography variant="subtitle2" fontWeight={700} color="primary" mb={1}>
                    {item.day}
                  </Typography>
                  <Typography variant="caption">{item.action}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Paper sx={{ p: 4, background: alpha(theme.palette.grey[900], 0.05) }}>
            <Typography variant="h4" fontWeight={800} mb={4}>LAUNCH WEEK COMPLETE ANALYSIS</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Paper sx={{ p: 3, background: alpha(theme.palette.success.main, 0.05), border: `1px solid ${alpha(theme.palette.success.main, 0.2)}` }}>
                  <Typography variant="h6" fontWeight={700} mb={2}>🤖 Automated Digital</Typography>
                  <Typography variant="h4" fontWeight={900}>326 @ $9.20</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper sx={{ p: 3, background: alpha(theme.palette.warning.main, 0.05), border: `1px solid ${alpha(theme.palette.warning.main, 0.2)}` }}>
                  <Typography variant="h6" fontWeight={700} mb={2}>📰 Traditional</Typography>
                  <Typography variant="h4" fontWeight={900}>23 @ $21</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper sx={{ p: 3, background: alpha(theme.palette.error.main, 0.05), border: `1px solid ${alpha(theme.palette.error.main, 0.2)}` }}>
                  <Typography variant="h6" fontWeight={700} mb={2}>⏰ Your Time</Typography>
                  <Typography variant="h4" fontWeight={900}>0 customers!</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </GlassCard>
      </Container>
    </Box>
  );
};