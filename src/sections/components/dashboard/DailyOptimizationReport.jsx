import { Grid, Typography, Paper, Stack, alpha } from '@mui/material';

export const DailyOptimizationReport = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 4, md: 6, lg: 8 },
        background: 'linear-gradient(135deg, #3B82F6 0%, #7C3AED 100%)',
        color: 'white',
      }}
    >
      <Typography variant="h4" fontWeight={800} mb={4}>
        Today&apos;s Automatic Optimizations (6:00 PM Report)
      </Typography>
      
      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 4,
              background: alpha('#FFFFFF', 0.2),
              backdropFilter: 'blur(10px)',
              color: 'white',
            }}
          >
            <Typography variant="h3" fontWeight={800}>$37</Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Saved by pausing poor performers
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 4,
              background: alpha('#FFFFFF', 0.2),
              backdropFilter: 'blur(10px)',
              color: 'white',
            }}
          >
            <Typography variant="h3" fontWeight={800}>$124</Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Extra earned by boosting winners
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 4,
              background: alpha('#FFFFFF', 0.2),
              backdropFilter: 'blur(10px)',
              color: 'white',
            }}
          >
            <Typography variant="h3" fontWeight={800}>+$161</Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Net improvement (all automatic)
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      
      <Paper
        sx={{
          p: 4,
          background: alpha('#FFFFFF', 0.1),
          backdropFilter: 'blur(10px)',
          color: 'white',
        }}
      >
        <Typography variant="subtitle1" fontWeight={700} mb={2}>
          YOUR ACTIONS NEEDED:
        </Typography>
        <Stack spacing={1}>
          <Typography variant="body2">⚠️ Radio ad ends Thursday - renewal not recommended</Typography>
          <Typography variant="body2">💡 Farmers market customers worth 4x digital customers</Typography>
          <Typography variant="body2">🎯 Stopping manual Instagram would save $1,000/month</Typography>
        </Stack>
      </Paper>
    </Paper>
  );
};