import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useInView } from "react-intersection-observer";
import Form from "./Form";
import ContactInfo from "./ContactInfo";
import styles from "./assets/contact.module.css"; // Import the animation CSS

const MainPage = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: infoRef, inView: infoInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Grid
      ref={sectionRef}
      className={`${styles.contact} ${sectionInView ? styles.visible : ""}`}
      sx={{
        pt: "158px",
        background: "linear-gradient(135deg, #F9FAFC, white);",
      }}
    >
      <Box
        ref={textRef}
        className={`${styles.textSlideIn} ${textInView ? styles.visible : ""}`}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          textAlign: "center",
          width: "817px",
          margin: "0 auto",
          "@media (max-width: 767px)": {
            width: "90vw",
            alignItems: "center",
          },
        }}
      >
        <Typography
          sx={{ color: "#6E3EF4", fontSize: "24px", fontWeight: "400;" }}
        >
          Contact Us
        </Typography>
        <Typography
          sx={{ fontSize: "18px;", fontWeight: "400", color: "505660" }}
        >
          Fill out the form below and let us know how we can assist you. Whether
          you're interested in reshaping your brand identity, developing a
          cutting-edge website, or harnessing the power of advanced marketing
          technologies, our team is ready to help steer your next big leap
          forward. 
        </Typography>
      </Box>
      <Box
        sx={{
          py: "108px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "61px",
          "@media (max-width: 600px)": {
            flexDirection: "column",
            height: "unset",
          },
        }}
      >
        <Box
          ref={formRef}
          className={`${styles.formSlideIn} ${
            formInView ? styles.visible : ""
          }`}
        >
          <Form />
        </Box>
        <Box
          ref={infoRef}
          className={`${styles.infoSlideIn} ${
            infoInView ? styles.visible : ""
          }`}
        >
          <ContactInfo />
        </Box>
      </Box>
    </Grid>
  );
};

export default MainPage;
