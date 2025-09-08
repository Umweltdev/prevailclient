import { Box, CardMedia, Grid, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import AccordionUsage from "./Accordion";
import styles from "./assets/about.module.css";

const FAQ = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      ref={sectionRef}
      className={`${styles.faq} ${sectionInView ? styles.visible : ""}`}
      sx={{
        display: "flex",
        gap: "70px",
        background: "#F9FAFC",
        "@media (max-width: 600px)": {
          width: "90vw",
          margin: "auto",
          padding: "50px 0",
          flexDirection: "column",
        },
      }}
      id="faqs"
    >
      <Grid
        ref={textRef}
        className={`${styles.textSlideIn} ${textInView ? styles.visible : ""}`}
        sx={{
          pl: "5vw",
          pt: "5vh",
          "@media (max-width: 600px)": {
            pl: "unset",
            pt: "unset",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "38px",
            color: "#6E3EF4",
            fontWeight: "500",
            letterSpacing: "-0.38px",
          }}
        >
          FAQs
        </Typography>
        <AccordionUsage />
      </Grid>
      <Grid
        ref={imageRef}
        className={`${styles.imageSlideIn} ${
          imageInView ? styles.visible : ""
        }`}
      >
        <CardMedia
          component={"img"}
          image={
            "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720110084/FAQ_fcfcuc.avif"
          }
          alt="FAQ"
          sx={{
            width: "50vw",
            "@media (max-width: 600px)": {
              width: "90vw",
            },
          }}
        />
      </Grid>
    </Box>
  );
};

export default FAQ;
