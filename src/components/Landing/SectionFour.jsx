import React from 'react';
import {
  Grid,
  Typography,
  Box,
  Container,
  useMediaQuery,
  Paper,
  Card,
  CardContent,
  Chip,
  Stack
} from '@mui/material';
import { styled, useTheme, alpha } from '@mui/material/styles';
import {
  TrendingUp,
  Rocket,
  Star,
  AutoAwesome
} from '@mui/icons-material';

const GradientBackground = styled(Paper)(({ theme }) => ({
  background: `linear-gradient(135deg, 
    ${theme.palette.primary.dark} 0%, 
    ${theme.palette.primary.main} 50%,
    ${theme.palette.secondary.main} 100%)`,
  borderRadius: theme.spacing(3),
  padding: theme.spacing(6, 4),
  color: theme.palette.common.white,
  position: 'relative',
  overflow: 'hidden',
  minHeight: '400px',
  display: 'flex',
  alignItems: 'center',
  boxShadow: theme.shadows[8],
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `radial-gradient(circle at 70% 20%, ${alpha(theme.palette.common.white, 0.1)} 0%, transparent 50%)`,
    zIndex: 1,
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4, 3),
    minHeight: '300px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3, 2),
    minHeight: '250px',
  },
}));

const FloatingIcon = styled(Box)(({ theme }) => ({
  position: 'absolute',
  color: alpha(theme.palette.common.white, 0.15),
  zIndex: 1,
  '& .MuiSvgIcon-root': {
    fontSize: '4rem',
  },
  [theme.breakpoints.down('md')]: {
    '& .MuiSvgIcon-root': {
      fontSize: '3rem',
    },
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  width: '100%',
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.common.white, 0.2),
  color: theme.palette.common.white,
  fontWeight: 600,
  border: `1px solid ${alpha(theme.palette.common.white, 0.3)}`,
  '& .MuiChip-icon': {
    color: theme.palette.common.white,
  },
}));

const BrandCard = styled(Card)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.common.white, 0.1),
  backdropFilter: 'blur(10px)',
  border: `1px solid ${alpha(theme.palette.common.white, 0.2)}`,
  borderRadius: theme.spacing(2),
  color: theme.palette.common.white,
  marginTop: theme.spacing(3),
  '& .MuiCardContent-root': {
    padding: theme.spacing(2),
    '&:last-child': {
      paddingBottom: theme.spacing(2),
    },
  },
}));

const SectionFour = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <GradientBackground elevation={0}>
        {/* Floating decorative icons */}
        <FloatingIcon sx={{ top: '10%', right: '5%' }}>
          <TrendingUp />
        </FloatingIcon>
        <FloatingIcon sx={{ bottom: '15%', right: '8%' }}>
          <Rocket />
        </FloatingIcon>
        <FloatingIcon sx={{ top: '60%', right: '2%' }}>
          <AutoAwesome />
        </FloatingIcon>

        <ContentContainer>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Stack spacing={3}>
                <Box>
                  <Typography 
                    variant={isSmallScreen ? "h4" : "h3"} 
                    sx={{ 
                      fontWeight: 700,
                      lineHeight: 1.2,
                      mb: 2,
                      background: `linear-gradient(45deg, ${theme.palette.common.white} 30%, ${alpha(theme.palette.secondary.light, 0.8)} 90%)`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Elevate Your Brand with Prevail
                  </Typography>
                </Box>

                <Typography 
                  variant="h6" 
                  sx={{ 
                    opacity: 0.9,
                    lineHeight: 1.6,
                    fontWeight: 400,
                    maxWidth: isSmallScreen ? '100%' : '85%'
                  }}
                >
                  Choose our Digital Accelerator Bundle Package and set the stage for a 
                  future-proof digital presence that is comprehensive, impactful, and cost-effective.
                </Typography>

                <Typography 
                  variant="body1" 
                  sx={{ 
                    opacity: 0.8,
                    lineHeight: 1.7,
                    maxWidth: isSmallScreen ? '100%' : '85%'
                  }}
                >
                  Embrace the digital transformation designed to take your brand to new heights 
                  with our comprehensive suite of digital solutions.
                </Typography>
              </Stack>
            </Grid>

            {!isMediumScreen && (
              <Grid item xs={12} md={4}>
                <BrandCard>
                  <CardContent>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                      <Rocket sx={{ fontSize: '1.2rem' }} />
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Success Partnership
                      </Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      Prevail – Your Partner in Success
                    </Typography>
                  </CardContent>
                </BrandCard>
              </Grid>
            )}
          </Grid>

          {/* Mobile brand text */}
          {isMediumScreen && (
            <Box sx={{ mt: 4, textAlign: 'center' }}>
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  fontWeight: 600,
                  opacity: 0.9,
                  fontStyle: 'italic'
                }}
              >
                Prevail – Your Partner in Success
              </Typography>
            </Box>
          )}
        </ContentContainer>
      </GradientBackground>
    </Container>
  );
};

export default SectionFour;