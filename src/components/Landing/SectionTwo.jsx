import "./assets/landing.css";
import { useRef, useEffect, useState } from "react";
import { Button, CardMedia, Grid, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import styles from "./animation.module.css";
import img from "./assets/image100.png";
import ReusedButton from "../ReusedComponents/ReusedButton";

const SectionTwo = () => {
  const { ref: myRef, inView: myElementVisible } = useInView();
  const { ref: sectionRef, inView: rocketIsVisible } = useInView();

  return (
    <Grid
      sx={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        gap: "88px",
        margin: "auto",
        "@media (max-width: 600px)": {
          flexDirection: "column",
          marginBottom: "1vh",
          gap: "1vw",
          margin: "85px auto",
          height: "unset",
          width: "100vw",
        },
      }}
    >
      <CardMedia
        sx={{
          width: "603.677px",
          height: "402.351px",
          borderRadius: "14px",
          objectFit: "cover",
          "@media (max-width: 600px)": {
            width: "90vw",
            height: "unset",
            borderRadius: "5vw",
           
          },
        }}
        component="img"
        image={img}
        alt="Paella dish"
      />
      <Grid
        sx={{
          width: "548.266px",
          "@media (max-width: 600px)": {
            width: "90vw",
            height: "unset",
            borderRadius: "5vw",
            mt: "55px"
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "1.5vw",
            color: "#884ed9",
            marginBottom: "2vh",
            textAlign: "justify",
            fontWeight: "bold",
            width: "40vw",
            "@media (max-width: 600px)": {
              fontSize: "4vw",
              textAlign: "justify",
              width: "95vw",
              margin: "2vh auto",
            },
          }}
        >
          About Us
        </Typography>

        <Typography
          sx={{
            fontSize: "38px",
            color: "#1D0D40",
            marginBottom: "24px",
            fontWeight: "500",
            width: "40vw",
            "@media (max-width: 600px)": {
              fontSize: "7vw",
              width: "95vw",
            },
          }}
        >
          Our Mission is to empower you with innovative solutions that drive long-term success.
        </Typography>

        <Typography
          sx={{
            fontSize: "16px",
            color: "#505660",
            marginBottom: "4vh",
            "@media (max-width: 600px)": {
              fontSize: "4vw",
              width: "95vw",
              marginBottom: "1vh",
            },
          }}
        >
          Prevail is a cutting-edge marketing agency specialising in redefining how businesses navigate the digital landscape. Prevail is not just a marketing agency but a strategic partner for businesses in the digital age. We aim to help businesses thrive, regardless of economic challenges, by providing innovative and holistic solutions.
        </Typography>
        <Link to={"/about"}>
          <ReusedButton text={"Learn More"}/>
        </Link>
      </Grid>
    </Grid>
  );
};

export default SectionTwo;
