import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';

// Styled components
const TrustWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 2.5),
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  color: 'white !important',
  marginBottom: theme.spacing(6),
  fontSize: '2.5rem',
  fontWeight: 800,
}));

const StatsGrid = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  textAlign: 'center',
}));

const StatItem = styled(Box)(({ theme }) => ({
  animation: 'fadeIn 1s ease',
}));

const StatNumber = styled(Typography)(({ theme }) => ({
  fontSize: '3rem',
  fontWeight: 900,
  marginBottom: theme.spacing(0.5),
  color: 'white',
}));

const StatLabel = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  opacity: 0.9,
  color: 'white',
}));

const FeaturesGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(6),
}));

const FeatureCard = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(3),
  background: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '15px',
  backdropFilter: 'blur(10px)',
  transition: 'all 0.3s ease',
  color: 'white',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.2)',
    transform: 'translateY(-5px)',
  },
}));

const FeatureIconBox = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  background: 'rgba(255, 255, 255, 0.2)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  fontSize: '1.5rem',
}));

const FeatureTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(1),
  color: 'white',
}));

const FeatureDescription = styled(Typography)(({ theme }) => ({
  opacity: 0.9,
  color: 'white',
}));

const TrustBuilders = () => { 
  const stats = [
    { number: '€154B', label: 'Digital spend in Ireland' },
    { number: '80%', label: 'Google users in target markets' },
    { number: '3.5x', label: 'Average ROI increase' },
    { number: '24/7', label: 'Campaign monitoring' }
  ];

  const features = [
    { icon: '🎯', title: 'Precision Targeting', description: 'Reach your exact audience with laser-focused campaigns' },
    { icon: '📈', title: 'Continuous Optimisation', description: 'Real-time adjustments for maximum performance' },
    { icon: '🏆', title: 'Local Dominance', description: 'Outperform competitors in your market' },
    { icon: '🔍', title: 'SEO Mastery', description: 'Keyword research that drives results' },
    { icon: '📊', title: 'Analytics Dashboard', description: 'Track every metric that matters' }
  ];

  return (
    <TrustWrapper component="section">
      <Container maxWidth="lg">
        <SectionTitle variant="h2" component="h2" sx={{ color: 'white' }}>
          Why Choose Prevail?
        </SectionTitle>
        
        {/* Stats Section */}
        <StatsGrid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <StatItem>
                <StatNumber variant="h3" component="div">
                  {stat.number}
                </StatNumber>
                <StatLabel variant="body1">
                  {stat.label}
                </StatLabel>
              </StatItem>
            </Grid>
          ))}
        </StatsGrid>

        {/* Features Section */}
        <FeaturesGrid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
              <FeatureCard elevation={0}>
                <FeatureIconBox>
                  {feature.icon}
                </FeatureIconBox>
                <FeatureTitle variant="h6" component="h3">
                  {feature.title}
                </FeatureTitle>
                <FeatureDescription variant="body2">
                  {feature.description}
                </FeatureDescription>
              </FeatureCard>
            </Grid>
          ))}
        </FeaturesGrid>
      </Container>
    </TrustWrapper>
  );
};

export default TrustBuilders;