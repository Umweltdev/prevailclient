import { Box, CardMedia, Grid, Typography, Container } from "@mui/material";
import React from "react";
import AccordionUsage from "./Accordion";
import styles from "./assets/animation.module.css"; // Import the new CSS module
import { useInView } from "react-intersection-observer";
import { styled } from "@mui/material/styles";

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  width: "100%",
  height: "auto",
  objectFit: "cover",
  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    transform: "scale(1.05)",
    filter: "brightness(1.1) contrast(1.1)",
  },
  [theme.breakpoints.down("md")]: {
    width: "100vw",
    height: "auto",
    minHeight: "60vh",
  },
}));

const CoreValues = () => {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Visibility threshold for the image
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Visibility threshold for the text
  });

  return (
    <Box
      sx={{
        display: "flex",
        gap: "60px",
        background: "#F9FAFC",
        flexDirection: "row", // Changed from row-reverse to row (text left, image right)
        "@media (max-width: 600px)": {
          width: "100vw",
          margin: "auto",
          padding: "50px 0",
          flexDirection: "column",
        },
      }}
      id="faqs"
    >
      {/* Text Section - Now on the left */}
      <Grid
        ref={textRef}
        className={textInView ? styles.slideInLeft : styles.hidden} // Changed from slideInRight to slideInLeft
        sx={{
          pl: "5vw", // Added left padding for better spacing
          pt: "15vh",
          width: "50vw",
          "@media (max-width: 600px)": {
            pl: "5vw",
            pt: "unset",
            width: "90vw",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ pl: 0 }}>
          <Box
            sx={{
              mb: 5, // Enhanced spacing using theme units
              maxWidth: "646px", // Changed to maxWidth for better responsiveness
              "@media (max-width: 600px)": {
                width: "90vw",
              },
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontSize: { xs: "28px", md: "38px" }, // Responsive typography
                color: "#6E3EF4",
                fontWeight: 600, // Enhanced font weight
                letterSpacing: "-0.02em", // Improved letter spacing
                mb: 2, // Theme-based margin
                lineHeight: 1.2, // Better line height
                fontFamily:
                  "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif", // Enhanced font stack
                "@media (max-width: 600px)": {
                  width: "90vw",
                },
              }}
            >
              Our Core Values
            </Typography>

            <Typography
              variant="body1"
              component="p"
              sx={{
                fontSize: { xs: "14px", md: "16px" }, // Responsive font size
                color: "#505660",
                fontWeight: 400,
                lineHeight: 1.6, // Improved line height for readability
                fontFamily:
                  "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
                textAlign: "justify", // Better text alignment
                "@media (max-width: 600px)": {
                  width: "90vw",
                  textAlign: "left",
                },
              }}
            >
              At Prevail, our commitment to redefining the digital landscape for
              small-to-medium-sized enterprises (SMEs) is deeply embedded in our
              core values. These values not only guide our strategies and
              decisions but also help us build meaningful relationships with the
              businesses we serve.
            </Typography>
          </Box>

          <Box
            sx={{
              mb: 5, // Enhanced spacing
              maxWidth: "646px", // Changed to maxWidth for better responsiveness
              mt: { xs: 6, md: 12 }, // Responsive top margin
              "@media (max-width: 600px)": {
                width: "90vw",
              },
            }}
          >
            <AccordionUsage />
          </Box>
        </Container>
      </Grid>

      {/* Image Section - Now on the right */}
      <Grid
        ref={imageRef}
        className={imageInView ? styles.slideInRight : styles.hidden} // Changed from slideInLeft to slideInRight
        sx={{
          display: "flex",
          alignItems: "center", // Center the image vertically
          justifyContent: "center", // Center the image horizontally
        }}
      >
        <StyledCardMedia
          component="img"
          image="https://res.cloudinary.com/dtzuqacg3/image/upload/v1720109211/Core-Values_r829ly.avif"
          alt="Core Values illustration showing our company principles"
          onLoad={() => setImageLoaded(true)}
          sx={{
            display: imageLoaded ? "block" : "none",
          }}
        />
      </Grid>
    </Box>
  );
};

export default CoreValues;
