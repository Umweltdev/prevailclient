import { Box, Container, Typography, Paper, Stack, useTheme, alpha } from '@mui/material';
import { GlassCard } from '../common/GlassCard';

export const HiddenCostStory = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: { xs: 12, md: 16, lg: 20 } }}>
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center" textAlign="center" mb={8}>
          <Typography variant="h2" fontWeight={900} sx={{ fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' } }}>
            The Hidden Cost Revealer
          </Typography>
          <Typography variant="h6" color="text.secondary" fontWeight={300}>
            See the true cost of &quot;free&quot; marketing that&apos;s actually costing you thousands
          </Typography>
        </Stack>

        <GlassCard sx={{ p: { xs: 4, md: 6, lg: 8 } }}>
          <Typography variant="h3" fontWeight={800} mb={4}>
            The Shocking Truth About Your Time
          </Typography>
          
          <Paper sx={{ 
            p: 4, 
            mb: 4,
            background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.05), rgba(252, 165, 165, 0.05))',
            border: `1px solid ${alpha(theme.palette.error.main, 0.2)}`
          }}>
            <Typography variant="h5" fontWeight={700} mb={3}>
              Example: &quot;Just Posting on Instagram&quot;
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', pb: 2, borderBottom: `1px solid ${alpha(theme.palette.divider, 0.2)}` }}>
                <Typography>Time spent creating content:</Typography>
                <Typography fontWeight={700}>2 hours</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', pb: 2, borderBottom: `1px solid ${alpha(theme.palette.divider, 0.2)}` }}>
                <Typography>Your hourly value:</Typography>
                <Typography fontWeight={700}>$50/hour</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', pb: 2, borderBottom: `1px solid ${alpha(theme.palette.divider, 0.2)}` }}>
                <Typography fontWeight={700}>True cost of &quot;free&quot; post:</Typography>
                <Typography variant="h6" fontWeight={900} color="error">$150</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography fontWeight={900}>ACTUAL RESULT:</Typography>
                <Typography variant="h5" fontWeight={900} color="error">-$120 LOSS!</Typography>
              </Box>
            </Stack>
          </Paper>
        </GlassCard>
      </Container>
    </Box>
  );
};