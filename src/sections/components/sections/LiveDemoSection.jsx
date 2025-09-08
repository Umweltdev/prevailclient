import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  LinearProgress,
  Stack,
  Paper,
  Chip,
  Alert,
  useTheme,
  alpha,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { GlassCard } from '../common/GlassCard';

export const LiveDemoSection = () => {
  const theme = useTheme();
  const [isRunning, setIsRunning] = useState(false);
  const [platforms, setPlatforms] = useState([
    { name: 'TikTok', value: 500, cpc: '$3.75', icon: '🎵', yesterday: '$15 → 4 customers', gradient: 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)' },
    { name: 'Google', value: 400, cpc: '$4.00', icon: '🔍', yesterday: '$20 → 5 customers', gradient: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)' },
    { name: 'Facebook', value: 300, cpc: '$10.00', icon: '📘', yesterday: '$30 → 3 customers', gradient: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)' },
    { name: 'Instagram', value: 200, cpc: '$25.00', icon: '📷', yesterday: '$25 → 1 customer', gradient: 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)' },
  ]);

  const realTimeEvents = [
    {
      time: 'Monday, 9:00 AM',
      title: 'System Analysis',
      action: 'Checking all platforms',
      data: [
        { platform: 'Google', cpc: '$4', status: 'good' },
        { platform: 'Facebook', cpc: '$10', status: 'ok' },
        { platform: 'Instagram', cpc: '$25', status: 'bad' },
        { platform: 'TikTok', cpc: '$3.75', status: 'excellent' }
      ]
    },
    {
      time: 'Monday, 9:01 AM',
      title: 'Automatic Optimization',
      action: 'Budget reallocation in progress',
      changes: [
        { action: 'PAUSE', platform: 'Instagram', reason: 'Too expensive!' },
        { action: 'INCREASE', platform: 'TikTok', amount: '+$20/day' },
        { action: 'INCREASE', platform: 'Google', amount: '+$10/day' },
        { action: 'REDUCE', platform: 'Facebook' }
      ]
    },
    {
      time: 'Tuesday, 2:47 PM',
      title: 'Viral Detection',
      action: 'TikTok surge - 50 visitors in 10 minutes!',
      response: 'Immediately added $50 to TikTok, pulled from Facebook'
    }
  ];

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setPlatforms(prev => prev.map(platform => ({
        ...platform,
        value: Math.max(50, Math.min(800, platform.value + (Math.random() - 0.5) * 100))
      })));
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'excellent': return theme.palette.success.light;
      case 'good': return theme.palette.info.light;
      case 'ok': return theme.palette.warning.light;
      case 'bad': return theme.palette.error.light;
      default: return theme.palette.grey[200];
    }
  };

  return (
    <Box sx={{ py: { xs: 12, md: 16, lg: 20 } }}>
      <Container maxWidth="xl">
        <Stack spacing={2} alignItems="center" textAlign="center" mb={8}>
          <Typography variant="h2" fontWeight={900} sx={{ fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' } }}>
            Live Demo - Real-Time Control
          </Typography>
          <Typography variant="h6" color="text.secondary" fontWeight={300}>
            Watch automation optimize campaigns in real-time
          </Typography>
        </Stack>

        <GlassCard sx={{ p: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
          <Grid container spacing={{ xs: 3, md: 4, lg: 6 }}>
            <Grid item xs={12} lg={6}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                <Typography variant="h4" fontWeight={800} spacing={{ xs: 3, md: 4, lg: 6 }}>
                  Platform Performance
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => setIsRunning(!isRunning)}
                  startIcon={isRunning ? <PauseIcon /> : <PlayArrowIcon />}
                  sx={{
                    background: isRunning 
                      ? theme.palette.error.main 
                      : 'linear-gradient(135deg, #3B82F6 0%, #7C3AED 100%)',
                    px: 3,
                    '&:hover': {
                      background: isRunning 
                        ? theme.palette.error.dark 
                        : 'linear-gradient(135deg, #2563EB 0%, #6D28D9 100%)',
                    }
                    
                  }}
                  spacing={{ xs: 3, md: 4, lg: 6 }}
                >
                  {isRunning ? 'Pause' : 'Start'} Automation
                </Button>
              </Box>
              <Stack spacing={2}>
                {platforms.map((platform) => (
                  <Paper
                    key={platform.name}
                    elevation={0}
                    sx={{
                      p: 3,
                      background: alpha(theme.palette.grey[50], 0.5),
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Typography variant="h4" sx={{ mr: 2 }}>{platform.icon}</Typography>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="subtitle1" fontWeight={700}>
                          {platform.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          CPC: {platform.cpc}
                        </Typography>
                      </Box>
                      <Box sx={{ textAlign: 'right' }}>
                        <Typography variant="h5" fontWeight={800}>
                          ${Math.round(platform.value)}/mo
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {platform.yesterday}
                        </Typography>
                      </Box>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={(platform.value / 800) * 100}
                      sx={{
                        height: 8,
                        borderRadius: 1,
                        bgcolor: alpha(theme.palette.grey[300], 0.2),
                        '& .MuiLinearProgress-bar': {
                          borderRadius: 1,
                          background: platform.gradient,
                        },
                      }}
                    />
                  </Paper>
                ))}
              </Stack>
              {isRunning && (
                <Stack spacing={2} sx={{ mt: 3 }}>
                  <Alert
                    severity="success"
                    sx={{
                      bgcolor: alpha(theme.palette.success.main, 0.1),
                      '& .MuiAlert-icon': {
                        animation: 'pulse 1.5s infinite',
                      },
                    }}
                  >
                    <Typography fontWeight={700}>
                      Automation Active - Optimizing in Real-Time
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 0.5 }}>
                      Just moved $50 from Instagram to TikTok (3.75x better ROI)
                    </Typography>
                  </Alert>
                  
                  <Alert
                    severity="info"
                    sx={{ bgcolor: alpha(theme.palette.info.main, 0.1) }}
                  >
                    <Typography variant="body2">
                      <strong>Queue Scheduling Active:</strong> Managing 15+ platforms simultaneously for optimal pricing
                    </Typography>
                  </Alert>
                </Stack>
              )}
            </Grid>
            <Grid item xs={12} lg={6}>
              <Typography variant="h4" fontWeight={800} mb={4}>
                What Happens Every Day
              </Typography>
              
              <Stack spacing={2} sx={{ maxHeight: 600, overflowY: 'auto', pr: 1 }}>
                {realTimeEvents.map((event, index) => (
                  <Paper
                    key={index}
                    elevation={0}
                    sx={{
                      p: 3,
                      background: alpha(theme.palette.grey[50], 0.5),
                      backdropFilter: 'blur(10px)',
                      borderLeft: `4px solid ${theme.palette.secondary.main}`,
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <Typography variant="caption" color="secondary" fontWeight={600}>
                        {event.time}
                      </Typography>
                      <Typography variant="subtitle2" fontWeight={700}>
                        {event.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {event.action}
                    </Typography>
                    
                    {event.data && (
                      <Grid container spacing={1}>
                        {event.data.map((d, i) => (
                          <Grid item xs={6} key={i}>
                            <Box
                              sx={{
                                p: 1.5,
                                borderRadius: 1,
                                bgcolor: alpha(getStatusColor(d.status), 0.1),
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                              }}
                            >
                              <Typography variant="caption" fontWeight={600}>
                                {d.platform}
                              </Typography>
                              <Typography variant="caption" fontWeight={700}>
                                {d.cpc}
                              </Typography>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    )}
                    
                    {event.changes && (
                      <Stack spacing={1} sx={{ mt: 2 }}>
                        {event.changes.map((change, i) => (
                          <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Chip
                              label={change.action}
                              size="small"
                              sx={{
                                bgcolor: change.action === 'PAUSE' ? theme.palette.error.main :
                                        change.action === 'INCREASE' ? theme.palette.success.main :
                                        theme.palette.warning.main,
                                color: 'white',
                                fontWeight: 700,
                                fontSize: '0.625rem',
                              }}
                            />
                            <Typography variant="caption">{change.platform}</Typography>
                            {change.amount && (
                              <Typography variant="caption" fontWeight={700}>
                                {change.amount}
                              </Typography>
                            )}
                          </Box>
                        ))}
                      </Stack>
                    )}
                    
                    {event.response && (
                      <Typography variant="body2" color="success.main" sx={{ mt: 2 }}>
                        → {event.response}
                      </Typography>
                    )}
                  </Paper>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </GlassCard>
      </Container>
    </Box>
  );
};
