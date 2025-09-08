import {
  Card,
  CardContent,
  Typography,
  Box,
  Container,
  Chip,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderData } from "./assets/SliderData";
import PropTypes from "prop-types";


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
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: gradientbg || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  opacity: 0.05,
  borderRadius: 16,
  zIndex: 0,
}));

const CategoryChip = styled(Chip)(() => ({
  background: "rgba(255,255,255,0.15)",
  color: "white",
  fontWeight: 600,
  fontSize: "0.7rem",
  height: 22,
}));

const CardFooter = styled(Box)(({ theme }) => ({
  marginTop: "auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  pt: theme.spacing(1),
}));

const CustomCard = ({ icon, header, text, category, gradient }) => (
  <CardWrapper gradientbg={gradient}>
    <GradientOverlay gradientbg={gradient} />
    <CardContent
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        position: "relative",
        zIndex: 1,
        p: 1.5,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1.5 }}>
        <IconWrapper>{icon}</IconWrapper>
        <CategoryChip label={category} size="small" />
      </Box>

      <Typography
        variant="subtitle1"
        sx={{ color: "white", fontWeight: 700, mb: 0.5, lineHeight: 1.2 }}
      >
        {header}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: "rgba(255,255,255,0.85)",
          lineHeight: 1.4,
          flexGrow: 1,
          fontSize: "0.85rem",
          mb: 1.5,
        }}
      >
        {text}
      </Typography>

      <CardFooter>
        <Box
          sx={{
            flexGrow: 1,
            height: 3,
            borderRadius: 2,
            background: "rgba(255,255,255,0.25)",
            mr: 1,
          }}
        />
        <Button
          size="small"
          sx={{
            color: "white",
            fontWeight: 600,
            textTransform: "none",
            minWidth: 60,
            fontSize: "0.75rem",
          }}
        >
          Explore
        </Button>
      </CardFooter>
    </CardContent>
  </CardWrapper>
);

const Sliders = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
    appendDots: (dots) => (
      <div style={{ bottom: "-35px" }}>
        <ul style={{ margin: 0 }}>{dots}</ul>
      </div>
    ),
  };

  return (
    <SliderSection>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h1"
            sx={{ color: "white", fontWeight: 800, mb: 1.5 }}
          >
            Discover Excellence
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 500, mx: "auto" }}
          >
            Experience innovation at its finest with our carefully curated
            solutions
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
              <Box key={i} sx={{ outline: "none" }}>
                <CustomCard
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
    </SliderSection>
  );
};

export default Sliders;

CustomCard.propTypes = {
  icon: PropTypes.node.isRequired,
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  gradient: PropTypes.string,
};
