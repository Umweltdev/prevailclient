import { useState } from "react";
import { 
  CardMedia, 
  Grid, 
  Typography, 
  Skeleton, 
  Box,
  Fade,
  Grow
} from "@mui/material";
import { Link } from "react-router-dom";
import { styled, keyframes } from "@mui/material/styles";
import ReusedButton from "../ReusedComponents/ReusedButton";
import { useInView } from "react-intersection-observer";

// Enhanced animations using Material-UI's styled system
const slideInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Main container with full screen split layout
const MainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  minHeight: '100vh',
  gap: '60px',
  background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: 0,
    minHeight: 'auto',
  },
}));

// Image container taking full left side
const ImageContainer = styled(Grid)(({ theme, inview }) => ({
  position: 'relative',
  overflow: 'hidden',
  opacity: inview ? 1 : 0,
  transform: inview ? 'translateX(0)' : 'translateX(-50px)',
  animation: inview ? `${slideInLeft} 0.8s cubic-bezier(0.4, 0, 0.2, 1)` : 'none',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, 
      rgba(136, 78, 217, 0.1) 0%, 
      rgba(29, 13, 64, 0.05) 50%, 
      transparent 100%)`,
    opacity: 0,
    transition: 'opacity 0.5s ease',
    zIndex: 1,
  },
  '&:hover::before': {
    opacity: 1,
  },
  [theme.breakpoints.down('md')]: {
    width: '100vw',
    order: 2,
  },
}));

// Content container taking full right side
const ContentContainer = styled(Grid)(({ theme, inview }) => ({
  paddingLeft: 0,
  paddingTop: '15vh',
  paddingRight: '80px',
  width: '50vw',
  opacity: inview ? 1 : 0,
  transform: inview ? 'translateX(0)' : 'translateX(50px)',
  animation: inview ? `${slideInRight} 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both` : 'none',
  [theme.breakpoints.down('md')]: {
    paddingLeft: '5vw',
    paddingRight: '5vw',
    paddingTop: '0',
    width: '90vw',
    margin: 'auto',
    order: 1,
    paddingBottom: '50px',
  },
}));

// Enhanced section label with modern styling
const SectionLabel = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(14px, 1.5vw, 20px)',
  color: '#884ed9',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '3px',
  marginBottom: theme.spacing(2),
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: 0,
    width: '80px',
    height: '4px',
    background: 'linear-gradient(45deg, #884ed9, #6E3EF4)',
    borderRadius: '2px',
  },
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    '&::after': {
      left: '50%',
      transform: 'translateX(-50%)',
    },
  },
}));

// Main heading with gradient effect
const MainHeading = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(28px, 4vw, 48px)',
  color: '#1D0D40',
  fontWeight: 600,
  lineHeight: 1.2,
  letterSpacing: '-0.02em',
  marginBottom: theme.spacing(3),
  background: 'linear-gradient(135deg, #1D0D40 0%, #6E3EF4 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));

// Enhanced description text
const DescriptionText = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(16px, 1.2vw, 18px)',
  color: '#64748b',
  lineHeight: 1.7,
  fontWeight: 400,
  marginBottom: theme.spacing(5),
  textAlign: 'justify',
  '& strong': {
    color: '#334155',
    fontWeight: 600,
  },
  [theme.breakpoints.down('md')]: {
    textAlign: 'left',
    marginBottom: theme.spacing(4),
  },
}));

// Content wrapper for better organization
const ContentWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  width: '100%',
  maxWidth: '600px',
  [theme.breakpoints.down('md')]: {
    maxWidth: '90vw',
  },
}));

// Button container with enhanced styling
const ButtonContainer = styled(Box)(({ theme, inview }) => ({
  opacity: inview ? 1 : 0,
  transform: inview ? 'translateY(0)' : 'translateY(20px)',
  animation: inview ? `${fadeInUp} 0.6s ease-out 0.6s both` : 'none',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(4),
  },
}));

// Enhanced skeleton with brand colors
const StyledSkeleton = styled(Skeleton)(({ theme }) => ({
  width: '50vw',
  height: '100vh',
  transform: 'scale(1)',
  '&::after': {
    background: 'linear-gradient(90deg, transparent, rgba(136, 78, 217, 0.1), transparent)',
  },
  [theme.breakpoints.down('md')]: {
    width: '100vw',
    height: '60vh',
  },
}));

// Styled image with enhanced effects
const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  width: '55vw',
  height: '100vh',
  objectFit: 'cover',
  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'scale(1.05)',
    filter: 'brightness(1.1) contrast(1.1)',
  },
  [theme.breakpoints.down('md')]: {
    width: '100vw',
    height: 'auto',
    minHeight: '60vh',
  },
}));

const SectionTwo = () => {
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <MainContainer>
      {/* Image Section - Full Left Side */}
      <ImageContainer ref={imageRef} inview={imageInView ? 1 : 0}>
        {!imageLoaded && (
          <StyledSkeleton
            variant="rectangular"
            animation="wave"
          />
        )}
        <Grow in={imageLoaded} timeout={1000}>
          <StyledCardMedia
            component="img"
            image="https://res.cloudinary.com/dtzuqacg3/image/upload/v1720109209/Empowering-Others_bh2qxl.avif"
            alt="Empowering Others - Strategic Partnership"
            onLoad={() => setImageLoaded(true)}
            sx={{
              display: imageLoaded ? 'block' : 'none',
            }}
          />
        </Grow>
      </ImageContainer>

      {/* Content Section - Full Right Side */}
      <ContentContainer ref={textRef} inview={textInView ? 1 : 0}>
        <ContentWrapper>
          <Fade in={textInView} timeout={600}>
            <SectionLabel variant="overline">
              About Us
            </SectionLabel>
          </Fade>

          <Fade in={textInView} timeout={800} style={{ transitionDelay: '200ms' }}>
            <MainHeading variant="h1">
              Our Mission is to empower you with innovative solutions that drive long-term success.
            </MainHeading>
          </Fade>

          <Fade in={textInView} timeout={1000} style={{ transitionDelay: '400ms' }}>
            <DescriptionText variant="body1">
              <strong>Prevail</strong> is a cutting-edge marketing agency specialising in redefining how businesses navigate the digital landscape. We're not just a marketing agency but a <strong>strategic partner</strong> for businesses in the digital age.
              <br /><br />
              We aim to help businesses thrive, regardless of economic challenges, by providing innovative and holistic solutions that deliver measurable results and drive sustainable growth.
            </DescriptionText>
          </Fade>
        </ContentWrapper>

        <ButtonContainer inview={textInView ? 1 : 0}>
          <Link to="/about-us" style={{ textDecoration: 'none' }}>
            <ReusedButton text="Learn More" />
          </Link>
        </ButtonContainer>
      </ContentContainer>
    </MainContainer>
  );
};

export default SectionTwo;