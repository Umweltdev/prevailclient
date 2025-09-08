import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Stack,
  useTheme,
  alpha,
  styled,
} from '@mui/material';
import { motion } from 'framer-motion';
import { GradientText } from '../common/GradientText';

const MotionBox = motion(Box);

const GradientBackground = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: 'hidden',
  zIndex: -1,
  pointerEvents: 'none',
  '& .orb': {
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(100px)',
    opacity: 0.1,
  },
});

const AnimatedChip = styled(Chip)(({ theme }) => ({
  background: alpha(theme.palette.primary.main, 0.1),
  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
  backdropFilter: 'blur(10px)',
  padding: '4px 8px',
  '& .MuiChip-label': {
    fontWeight: 600,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    fontSize: '0.875rem',
  },
}));

const PulsingDot = styled(Box)(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  background: theme.palette.primary.main,
  animation: 'pulse 2s infinite',
  '@keyframes pulse': {
    '0%': { opacity: 1, transform: 'scale(1)' },
    '50%': { opacity: 0.5, transform: 'scale(0.8)' },
    '100%': { opacity: 1, transform: 'scale(1)' },
  },
}));

export const HeroSection = () => {
  const theme = useTheme();

  return (
    <Box sx={{ position: 'relative', py: { xs: 16, md: 24, lg: 32 }, overflow: 'hidden' }}>
      <GradientBackground>
        <Box 
          className="orb" 
          sx={{ 
            top: -200, 
            left: -200, 
            width: 500, 
            height: 500, 
            background: theme.palette.primary.main 
          }} 
        />
        <Box 
          className="orb" 
          sx={{ 
            top: -200, 
            right: -200, 
            width: 500, 
            height: 500, 
            background: theme.palette.secondary.main 
          }} 
        />
        <Box 
          className="orb" 
          sx={{ 
            bottom: -200, 
            left: '20%', 
            width: 500, 
            height: 500, 
            background: theme.palette.primary.light 
          }} 
        />
      </GradientBackground>
      
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Stack spacing={5} alignItems="center" textAlign="center">
            <AnimatedChip
              icon={<PulsingDot />}
              label="Automated Marketing Revolution"
            />

            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '3.5rem', md: '5rem', lg: '7rem' },
                lineHeight: { xs: 1.1, md: 1 },
                letterSpacing: '-0.02em',
                '& br': { display: { xs: 'none', md: 'block' } },
              }}
            >
              Universal
              <br />
              <GradientText variant="h1" component="span" gradient="primary">
                Outreach Hub
              </GradientText>
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: 'text.secondary',
                maxWidth: '800px',
                fontWeight: 300,
                fontSize: { xs: '1.25rem', md: '1.5rem', lg: '2rem' },
              }}
            >
              Your Complete Marketing Command Center
            </Typography>

            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={3} 
              sx={{ mt: 6 }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<span>🚀</span>}
                sx={{
                  background: 'linear-gradient(135deg, #3B82F6 0%, #7C3AED 100%)',
                  px: 5,
                  py: 2.5,
                  fontSize: '1.125rem',
                  borderRadius: 3,
                  '&:hover': {
                    background: 'linear-gradient(135deg, #2563EB 0%, #6D28D9 100%)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 20px 40px -10px rgba(59, 130, 246, 0.5)',
                  },
                }}
              >
                Start Your Free Trial
              </Button>
              
              <Button
                variant="outlined"
                size="large"
                startIcon={<span>👥</span>}
                sx={{
                  borderColor: alpha(theme.palette.divider, 0.3),
                  color: theme.palette.text.primary,
                  backdropFilter: 'blur(10px)',
                  background: alpha(theme.palette.background.paper, 0.5),
                  px: 5,
                  py: 2.5,
                  fontSize: '1.125rem',
                  borderRadius: 3,
                  borderWidth: 2,
                  '&:hover': {
                    borderColor: theme.palette.primary.main,
                    background: alpha(theme.palette.primary.main, 0.05),
                    borderWidth: 2,
                  },
                }}
              >
                Book a Demo
              </Button>
            </Stack>
          </Stack>
        </MotionBox>
      </Container>
    </Box>
  );
};