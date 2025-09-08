import { Box, Container, Typography, Paper, Stack, useTheme, alpha } from '@mui/material';
import { GlassCard } from '../common/GlassCard';

export const CombinedPowersStory = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: { xs: 12, md: 16, lg: 20 }, bgcolor: alpha(theme.palette.grey[50], 0.5) }}>
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center" textAlign="center" mb={8}>
          <Typography variant="h2" fontWeight={900}>
            Both Powers Combined
          </Typography>
          <Typography variant="h6" color="text.secondary" fontWeight={300}>
            Watch how the complete system transforms a real product launch
          </Typography>
        </Stack>

        <GlassCard sx={{ p: { xs: 4, md: 6, lg: 8 } }}>
          <Typography variant="h3" fontWeight={800} mb={4}>
            Scenario: New Product Launch Week
          </Typography>
          
          <Stack spacing={3}>
            <Paper sx={{ p: 4, background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(124, 58, 237, 0.05))' }}>
              <Typography variant="h5" fontWeight={700} mb={2}>Monday - You Set It Up</Typography>
              <Typography paragraph>You tell the system: &quot;New product launch, $5,000 budget for the week&quot;</Typography>
              <Box sx={{ p: 3, bgcolor: alpha(theme.palette.background.paper, 0.7), borderRadius: 2 }}>
                <Typography fontWeight={700} mb={1}>System immediately:</Typography>
                <ul style={{ margin: 0, paddingLeft: 20 }}>
                  <li>Distributes budget across all digital platforms</li>
                  <li>Starts testing different messages/audiences</li>
                  <li>Begins real-time optimization</li>
                </ul>
              </Box>
            </Paper>
          </Stack>
        </GlassCard>
      </Container>
    </Box>
  );
};