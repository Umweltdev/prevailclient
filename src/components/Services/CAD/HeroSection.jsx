import { Box, Typography, Button, Container } from '@mui/material';
import { styled, keyframes } from '@mui/system';

const float = keyframes`
  0% { transform: translate(0, 0); }
  100% { transform: translate(-60px, -60px); }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroSectionWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  padding: theme.spacing(15, 2.5, 10),
  textAlign: 'center',
  overflow: 'hidden',
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat',
    animation: `${float} 20s infinite linear`,
  }
}));

const HeroContent = styled(Container)({
  position: 'relative',
  zIndex: 1,
});

const HeroTitle = styled(Typography)({
  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
  fontWeight: 900,
  color: 'white',
  marginBottom: '1.5rem',
  animation: `${fadeInUp} 0.8s ease`,
});

const HeroSubtitle = styled(Typography)({
  fontSize: '1.25rem',
  color: 'rgba(255, 255, 255, 0.9)',
  marginBottom: '2rem',
  animation: `${fadeInUp} 0.8s ease 0.2s both`,
});

const HeroButton = styled(Button)(({ theme }) => ({
  background: 'white',
  color: theme.palette.primary.dark,
  padding: '18px 40px',
  borderRadius: '50px',
  fontWeight: 700,
  fontSize: '1.1rem',
  textDecoration: 'none',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  transition: 'all 0.3s ease',
  animation: `${fadeInUp} 0.8s ease 0.4s both`,
  
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
    background: 'white',
  }
}));

const HeroSection = () => {
  const scrollToPackages = () => {
    document.getElementById('packages').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroSectionWrapper component="section">
      <HeroContent maxWidth="lg">
        <HeroTitle variant="h1" component="h1">
          Transform Visibility into Opportunity with Prevail&apos;s Content Ad Campaigns
        </HeroTitle>
        <HeroSubtitle variant="h6" component="p">
          Customer insight + Market research + Google Ads creation = Your competitive edge
        </HeroSubtitle>
        <HeroButton 
          variant="contained" 
          onClick={scrollToPackages}
          disableRipple
        >
          Get Started for €350
        </HeroButton>
      </HeroContent>
    </HeroSectionWrapper>
  );
};

export default HeroSection;