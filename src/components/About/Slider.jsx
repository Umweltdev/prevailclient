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


const SliderSection = styled(Box)(({ theme }) => ({
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  minHeight: "60vh",
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(4, 0),
}));

const CardWrapper = styled(Card)(({ theme, }) => ({
  background: "rgba(255, 255, 255, 0.08)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: 16,
  display: "flex",
  flexDirection: "column",
  height: "auto",
  padding: theme.spacing(2),
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
  },
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(1.5),
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 50,
  height: 50,
  borderRadius: "50%",
  background: "rgba(255,255,255,0.2)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.8rem",
  border: "1.5px solid rgba(255,255,255,0.25)",
  marginBottom: theme.spacing(1.5),
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

        <Box sx={{ "& .slick-slide": { px: isMobile ? 1 : 4 } }}>
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
