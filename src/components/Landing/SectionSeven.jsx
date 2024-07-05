import { Box, CardMedia, Grid, Typography } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import CardNoBorder from "./assets/CardNoBorder";
import { DigitalAcelerator } from "./assets/LandingData";
import ReusedButton from "../ReusedComponents/ReusedButton";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import styles from "./assets/animation.module.css"; // Import the animation CSS

const FAQ = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
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

  // Create refs and state for each card
  const cardRefs = useRef(DigitalAcelerator.map(() => React.createRef()));
  const [cardInView, setCardInView] = useState(
    DigitalAcelerator.map(() => false)
  );

  useEffect(() => {
    cardRefs.current.forEach((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCardInView((prev) => {
              const newInView = [...prev];
              newInView[index] = true;
              return newInView;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
    });
  }, []);

  return (
    <Box
      sx={{
        p: "100px 0 0 0",
        "@media (max-width: 600px)": {
          p: "40px 0 0 0",
        },
      }}
      id={"DAB_call_to_action"}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          mb: "66px",
          "@media (max-width: 600px)": {
            width: "90vw",
          },
        }}
      >
        <Typography
          sx={{ color: "#6E3EF4", fontSize: "24px", fontWeight: "400" }}
          ref={titleRef}
          className={titleInView ? styles.fadeInUp : styles.hidden}
        >
          Product
        </Typography>
        <Typography
          sx={{
            width: "684px",
            color: "#1D0D40",
            fontSize: "48px",
            fontWeight: "500",
            textAlign: "center",
            "@media (max-width: 600px)": {
              width: "90vw",
              fontSize: "32px",
            },
          }}
          ref={textRef}
          // className={textInView ? styles.fadeInUp : styles.hidden}
        >
          Digital Accelerator Bundle brings Agility to Your Enterprise
        </Typography>
        <Typography
          sx={{
            width: "629.297px",
            color: "#505660",
            fontSize: "16px",
            fontWeight: "400",
            textAlign: "center",
            "@media (max-width: 600px)": {
              width: "90vw",
              fontSize: "16px",
            },
          }}
          ref={textRef}
          // className={textInView ? styles.fadeInUp : styles.hidden}
        >
          Discover how our Digital Accelerator Bundle package serves as your
          strategic gateway to digital success. This exclusive, comprehensive
          solution is crafted to enhance your online visibility and impact
          through three essential services: Website Development, Brand Identity,
          and Search Engine Optimisation (SEO).
        </Typography>
        <Link to={"/services/digitalaccelerator"}>
          <ReusedButton text={"Learn More"} />
        </Link>
      </Box>
      <Box
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
          sx={{
            pl: "5vw",
            pt: "5vh",
            width: "50vw",
            "@media (max-width: 600px)": {
              pl: "unset",
              pt: "unset",
              width: "90vw",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "38px",
              color: "#1D0D40",
              fontWeight: "500",
              letterSpacing: "-0.38px",
              width: "553px",
              "@media (max-width: 600px)": {
                width: "90vw",
                fontSize: "24px",
              },
            }}
            ref={textRef}
            className={textInView ? styles.fadeInUp : styles.hidden}
          >
            Why Opt for Our Digital Accelerator Bundle Package?
          </Typography>
          <Box
            sx={{
              mt: "61px",
              display: "flex",
              flexDirection: "column",
              gap: "57px",
            }}
          >
            {DigitalAcelerator.map((data, i) => (
              <CardNoBorder
                header={data.header}
                text={data.text}
                icon={data.icon}
                key={i}
                ref={cardRefs.current[i]}
                className={`${
                  cardInView[i] ? styles.slideInLeft : styles.hidden
                } ${styles[`delay-${i}`]}`}
              />
            ))}
          </Box>
        </Grid>
        <Grid
          ref={imageRef}
          className={imageInView ? styles.slideInRight : styles.hidden}
        >
          <CardMedia
            component={"img"}
            image="https://res.cloudinary.com/dtzuqacg3/image/upload/v1720109209/DAB-Rocket_f6h8ic.avif"
            alt="DAB-Rocket"
            sx={{
              width: "50vw",
              "@media (max-width: 600px)": {
                width: "90vw",
              },
            }}
          />
        </Grid>
      </Box>
    </Box>
  );
};

export default FAQ;
