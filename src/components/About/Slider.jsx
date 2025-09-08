/* eslint-disable react/prop-types */
import React from "react";
import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Container,
  Chip,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { sliderData } from "./assets/SliderData";

// Floating animation keyframes
const float = keyframes`
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-10px) rotate(1deg);
  }
  66% {
    transform: translateY(5px) rotate(-1deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
  }
  70% {
    box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
`;

// Styled components
const SliderContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(8, 0), // Increased top/bottom padding
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, rgba(120, 119, 198, 0.2) 0%, transparent 50%)
    `,
    pointerEvents: 'none',
  },
}));

const StyledCard = styled(Card)(({ theme, gradientbg }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '24px',
  padding: theme.spacing(3),
  height: '400px',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  // Add margin to prevent cutoff
  margin: theme.spacing(2, 0),
  '&:hover': {
    transform: 'translateY(-8px) scale(1.02)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
    '& .icon-container': {
      animation: `${float} 3s ease-in-out infinite`,
    },
    '& .gradient-overlay': {
      opacity: 0.8,
    },
    '& .content-text': {
      transform: 'translateY(-5px)',
    }
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: gradientbg || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    opacity: 0.1,
    transition: 'opacity 0.3s ease',
  },
  [theme.breakpoints.down('md')]: {
    height: '350px',
    padding: theme.spacing(2),
    margin: theme.spacing(1.5, 0), // Responsive margin
  },
}));

const IconContainer = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  background: 'rgba(255, 255, 255, 0.2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '2.5rem',
  marginBottom: theme.spacing(3),
  border: '2px solid rgba(255, 255, 255, 0.3)',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-2px',
    left: '-2px',
    right: '-2px',
    bottom: '-2px',
    borderRadius: '50%',
    background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.2))',
    zIndex: -1,
  },
}));

const GradientOverlay = styled(Box)(({ gradientbg }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: gradientbg || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  opacity: 0.05,
  transition: 'opacity 0.3s ease',
  borderRadius: '24px',
}));

const StyledChip = styled(Chip)(() => ({
  background: 'rgba(255, 255, 255, 0.2)',
  color: 'white',
  fontWeight: 600,
  border: '1px solid rgba(255, 255, 255, 0.3)',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.3)',
  },
}));

const CustomSliderCard = ({ icon, header, text, category, gradient }) => {
  return (
    <StyledCard gradientbg={gradient}>
      <GradientOverlay className="gradient-overlay" gradientbg={gradient} />
      <CardContent sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%',
        position: 'relative',
        zIndex: 1,
        padding: 0
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <IconContainer className="icon-container">
            {icon}
          </IconContainer>
          <StyledChip 
            label={category} 
            size="small"
            sx={{ mt: 1 }}
          />
        </Box>
        
        <Typography 
          variant="h4" 
          sx={{ 
            color: 'white',
            fontWeight: 700,
            mb: 2,
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            fontSize: { xs: '1.5rem', md: '2rem' }
          }}
        >
          {header}
        </Typography>
        
        <Typography 
          variant="body1" 
          className="content-text"
          sx={{ 
            color: 'rgba(255, 255, 255, 0.9)',
            lineHeight: 1.6,
            fontSize: '1.1rem',
            flexGrow: 1,
            transition: 'transform 0.3s ease',
            textShadow: '0 1px 2px rgba(0,0,0,0.2)'
          }}
        >
          {text}
        </Typography>
        
        <Box 
          sx={{ 
            mt: 'auto', 
            pt: 2,
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}
        >
          <Box 
            sx={{ 
              width: 40, 
              height: 4, 
              background: 'linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 100%)',
              borderRadius: 2,
              flexGrow: 1
            }} 
          />
          <Typography 
            variant="caption" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: 1
            }}
          >
            Explore More
          </Typography>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

const Sliders = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <SliderContainer>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              color: 'white',
              fontWeight: 800,
              mb: 2,
              textShadow: '0 4px 8px rgba(0,0,0,0.3)',
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            Discover Excellence
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Experience innovation at its finest with our carefully curated solutions
          </Typography>
        </Box>

        <Box sx={{ 
          // Add padding to the slider container to prevent cutoff
          py: 4,
          '& .slick-slide': {
            padding: { xs: '0 8px', md: '0 16px' }
          },
          '& .slick-list': {
            // Ensure slider list has enough padding
            padding: '0 0 20px 0 !important',
          },
          '& .slick-track': {
            // Add margin to track for hover effects
            margin: '20px 0',
          },
          '& .slick-dots': {
            bottom: '-60px',
            '& li button:before': {
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 0.5)',
              opacity: 1,
            },
            '& li.slick-active button:before': {
              color: 'white',
              animation: `${pulse} 2s infinite`,
            }
          }
        }}>
          <Slider {...settings}>
            {sliderData.map((data, i) => (
              <Box key={i} sx={{ outline: 'none' }}>
                <CustomSliderCard
                  icon={data.icon}
                  text={data.text}
                  header={data.header}
                  category={data.category}
                  gradient={data.gradient}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </SliderContainer>
  );
};

export default Sliders;