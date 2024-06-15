import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  Avatar
} from "@mui/material";
import { styled } from "@mui/system";
import Carousel from "react-material-ui-carousel";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const testimonials = [
  {
    rating: 4.8,
    text: "Payments are the main interaction point between Accenture's financial services clients and their customers, and are core to our relationships beyond that sector too.",
    name: "Charolette Hanlin",
    title: "Co-Founder, Heroes Digital",
    avatar: "path/to/avatar1.jpg",
  },
  {
    rating: 4.8,
    text: "Payments are the main interaction point between Accenture's financial services clients and their customers, and are core to our relationships beyond that sector too.",
    name: "Charolette Hanlin",
    title: "Co-Founder, Heroes Digital",
    avatar: "path/to/avatar1.jpg",
  },
  {
    rating: 4.8,
    text: "Payments are the main interaction point between Accenture's financial services clients and their customers, and are core to our relationships beyond that sector too.",
    name: "Charolette Hanlin",
    title: "Co-Founder, Heroes Digital",
    avatar: "path/to/avatar1.jpg",
  },
  {
    rating: 4.8,
    text: "Payments are the main interaction point between Accenture's financial services clients and their customers, and are core to our relationships beyond that sector too.",
    name: "Charolette Hanlin",
    title: "Co-Founder, Heroes Digital",
    avatar: "path/to/avatar1.jpg",
  }
];

const TestimonialCard = styled(Card)(({ theme }) => ({
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  textAlign: "left",
  height: "100%",
}));

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#6A1B9A",
  color: "#fff",
  borderRadius: "20px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#5a0f8a",
  },
}));

const SectionFour = () => {
  const isMobile = window.innerWidth <= 600;

  return (
    <Box sx={{ padding: "50px 0", backgroundColor: "#f8f9fa" }}>
      <Container>
        <Typography variant="h6" sx={{ color: "#6A1B9A", marginBottom: "20px", textAlign: "center" }}>
          Testimonials
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "20px", textAlign: "center" }}>
          See What Our Customers Are Saying
        </Typography>
        <Typography sx={{ maxWidth: "600px", margin: "0 auto", marginBottom: "40px", textAlign: "center" }}>
          Discover how our tailored strategies have transformed businesses, straight from those who’ve experienced remarkable growth with Prevail.
        </Typography>
        <Box sx={{ textAlign: "center", marginBottom: "40px" }}>
          <CustomButton>Learn more</CustomButton>
        </Box>
        <Carousel
          navButtonsAlwaysVisible
          autoPlay={false}
          indicators={true}
          indicatorIconButtonProps={{
            style: {
              color: "#6A1B9A",
            }
          }}
          activeIndicatorIconButtonProps={{
            style: {
              color: "#6A1B9A"
            }
          }}
          navButtonsProps={{
            style: {
              backgroundColor: "transparent",
              color: "#6A1B9A",
              borderRadius: "50%",
            }
          }}
          navButtonsWrapperProps={{
            style: {
              top: "calc(50% - 20px)",
              height: "auto"
            }
          }}
          NextIcon={<ArrowForwardIosIcon style={{ fontSize: 30 }} />}
          PrevIcon={<ArrowBackIosIcon style={{ fontSize: 30 }} />}
        >
          {Array.from(new Array(Math.ceil(testimonials.length / (isMobile ? 1 : 3))), (_, i) => (
            <Grid container spacing={4} justifyContent="center" key={i}>
              {testimonials.slice(i * (isMobile ? 1 : 3), i * (isMobile ? 1 : 3) + (isMobile ? 1 : 3)).map((testimonial, j) => (
                <Grid item xs={12} sm={6} md={4} key={j}>
                  <TestimonialCard>
                    <CardContent>
                      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                        <Typography variant="h6" sx={{ fontWeight: "bold", marginRight: "5px" }}>
                          {testimonial.rating}
                        </Typography>
                        <Typography sx={{ color: "#FFD700" }}>★</Typography>
                        <Typography sx={{ color: "#FFD700" }}>★</Typography>
                        <Typography sx={{ color: "#FFD700" }}>★</Typography>
                        <Typography sx={{ color: "#FFD700" }}>★</Typography>
                        <Typography sx={{ color: "#FFD700" }}>★</Typography>
                      </Box>
                      <Typography sx={{ fontSize: "14px", marginBottom: "10px" }}>
                        “{testimonial.text}”
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Avatar src={testimonial.avatar} sx={{ width: 40, height: 40, marginRight: "10px" }} />
                        <Box>
                          <Typography sx={{ fontWeight: "bold" }}>{testimonial.name}</Typography>
                          <Typography sx={{ fontSize: "12px", color: "#757575" }}>{testimonial.title}</Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </TestimonialCard>
                </Grid>
              ))}
            </Grid>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};

export default SectionFour;
