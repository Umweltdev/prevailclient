import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Chip,
  Collapse,
  useTheme,
  alpha,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { GlassCard } from '../common/GlassCard';

export const SuperpowersSection = () => {
  const theme = useTheme();
  const [hoveredCard, setHoveredCard] = useState(null);

  const superpowers = [
    {
      id: 'autopilot',
      number: '#1',
      icon: '🤖',
      title: 'The Autopilot',
      subtitle: 'Automation That Actually Spends Your Money',
      color: theme.palette.primary.main,
      gradient: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
      features: [
        'Controls your ad accounts 24/7',
        'Reallocates budget every minute',
        'Uses multilevel queue scheduling for better prices',
      ],
      details: 'Like giving a trusted assistant your credit card with strict rules: "Never spend more than $100/day", "Never pay more than $5 per customer", "Stop what\'s not working immediately"',
    },
    {
      id: 'truth',
      number: '#2',
      icon: '📊',
      title: 'Complete Truth Dashboard',
      subtitle: 'See The Real Cost of Everything',
      color: theme.palette.secondary.main,
      gradient: 'linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)',
      features: [
        'Track traditional advertising ROI',
        'Reveal hidden time costs',
        'Compare everything apples-to-apples',
      ],
      details: 'Example: 3 hours on Instagram = $150 real cost at $50/hour',
    },
  ];

  return (
    <Box sx={{ py: { xs: 12, md: 16, lg: 20 }, bgcolor: alpha(theme.palette.grey[50], 0.5) }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {superpowers.map((power) => (
            <Grid item xs={12} md={6} key={power.id}>
              <Box
                onMouseEnter={() => setHoveredCard(power.id)}
                onMouseLeave={() => setHoveredCard(null)}
                sx={{ position: 'relative', height: '100%' }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    inset: -8,
                    background: power.gradient,
                    borderRadius: 3,
                    filter: 'blur(24px)',
                    opacity: hoveredCard === power.id ? 0.3 : 0.2,
                    transition: 'opacity 0.3s',
                    zIndex: 0,
                  }}
                />
                <GlassCard
                  sx={{
                    position: 'relative',
                    p: { xs: 4, md: 6 },
                    height: '100%',
                    background: hoveredCard === power.id 
                      ? alpha(theme.palette.background.paper, 0.8)
                      : alpha(theme.palette.background.paper, 0.7),
                    transform: hoveredCard === power.id ? 'translateY(-4px)' : 'none',
                    zIndex: 1,
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        background: `linear-gradient(135deg, ${alpha(power.color, 0.1)} 0%, ${alpha(power.color, 0.2)} 100%)`,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '3rem',
                      }}
                    >
                      {power.icon}
                    </Box>
                    <Chip
                      label={`SUPERPOWER ${power.number}`}
                      size="small"
                      sx={{
                        background: power.gradient,
                        color: 'white',
                        fontWeight: 800,
                        fontSize: '0.625rem',
                        letterSpacing: '0.1em',
                      }}
                    />
                  </Box>

                  <Typography variant="h3" fontWeight={900} sx={{ mb: 1, fontSize: { xs: '2rem', md: '2.5rem' } }}>
                    {power.title}
                  </Typography>
                  <Typography variant="h6" color="text.secondary" fontWeight={300} sx={{ mb: 4 }}>
                    {power.subtitle}
                  </Typography>

                  <Stack spacing={2}>
                    {power.features.map((feature, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box
                          sx={{
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            background: power.gradient,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <CheckCircleIcon sx={{ fontSize: 14, color: 'white' }} />
                        </Box>
                        <Typography variant="body2" color="text.primary">
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>

                  <Collapse in={hoveredCard === power.id}>
                    <Box
                      sx={{
                        mt: 4,
                        pt: 4,
                        borderTop: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
                      }}
                    >
                      <Typography variant="body2" color="text.secondary" fontStyle="italic">
                        {power.details}
                      </Typography>
                    </Box>
                  </Collapse>
                </GlassCard>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};