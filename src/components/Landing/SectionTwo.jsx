import "./assets/landing.css";
import { useRef, useEffect, useState } from "react";
import { Button, CardMedia, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const SectionTwo = () => {
  const { ref, inView, entry } = useInView(options);

  const myRef = useRef();
  const [myElementIsVisible, setMyElementI]

  return (
    <Grid
      sx={{
        width: "90vw",
        display: "flex",
        height: "100vh",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "10vw",
        margin: "10vh auto",
        "@media (max-width: 600px)": {
          width: "100vw",
          flexDirection: "column",
          marginBottom: "1vh",
          // gap: "5vw",
          justifyContent: "center",
          alignItems: "center",
          gap: "1vw",
          margin: "1vh auto",
        },
      }}
    >
      <Grid>
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
          Introduction
        </Typography>

        <Typography
          sx={{
            fontSize: "2vw",
            color: "#333",
            marginBottom: "1vh",
            fontWeight: "bold",
            width: "40vw",
            "@media (max-width: 600px)": {
              fontSize: "7vw",
              // textAlign: "justify",
              width: "95vw",
            },
          }}
        >
          Our Mission is to empower you with innovative solutions that drive
          long-term success
        </Typography>

        <Typography
          sx={{
            fontSize: "1.2vw",
            color: "#636363",
            marginBottom: "4vh",

            "@media (max-width: 600px)": {
              fontSize: "4vw",
              // textAlign: "justify",
              width: "95vw",
              marginBottom: "1vh",
            },
          }}
        >
          {/* <Typography>{myElementVisible ? "YES" : "NO"}</Typography> */}
          Prevail is a cutting-edge marketing agency specialising in redefining
          the way businesses navigate the digital landscape. At PMM, we
          recognise that the modern economy presents unique challenges for local
          businesses and small-to-medium-sized enterprises (SMEs). That is why
          “Our Mission” is to empower you with innovative solutions that drive
          long-term success. PMM is not just a marketing agency; it is a
          strategic partner for businesses in the digital age.
        </Typography>
        <Link to={"/about"}>
          <Button
            sx={{
              textTransform: "capitalize",
              backgroundColor: "#884ed9",
              color: "white",
              fontSize: "1.2vw",
              borderRadius: "3vw",
              padding: "0.5vw 5vw",
              border: "1px solid #884ed9",
              "@media (max-width: 600px)": {
                fontSize: "4.5vw",
                // textAlign: "justify",
                width: "95vw",
                margin: "0 0 4vh 0",
                borderRadius: "5vw",
              },
              "&:hover": {
                color: "#884ed9",
                borderRadius: "1px solid #884ed9",
              },
            }}
          >
            Learn More
          </Button>
        </Link>
      </Grid>
      {/* <img
        className={classes.imageInit}
        src="https://img.freepik.com/free-photo/workaholics-businesspeople-brainstorming-financial-company-ideas-analyzing-strategy-paperwork-late-night-business-office-meeting-room_482257-2170.jpg?t=st=1711367344~exp=1711370944~hmac=0f874dbfc9940b27d646b00f88a6bc6149cb22fecdbcd4941c08f352868aa65f&w=740"
        alt=""
      /> */}
      <CardMedia
        sx={{
          width: "37vw",
          height: "60vh",
          borderRadius: "1vw",
          objectFit: "cover",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
          "@media (max-width: 600px)": {
            width: "95vw",
            height: "unset",
            borderRadius: "5vw",
          },
        }}
        component="img"
        image="https://img.freepik.com/free-photo/workaholics-businesspeople-brainstorming-financial-company-ideas-analyzing-strategy-paperwork-late-night-business-office-meeting-room_482257-2170.jpg?t=st=1711367344~exp=1711370944~hmac=0f874dbfc9940b27d646b00f88a6bc6149cb22fecdbcd4941c08f352868aa65f&w=740"
        alt="Paella dish"
      />
    </Grid>
  );
};

export default SectionTwo;
