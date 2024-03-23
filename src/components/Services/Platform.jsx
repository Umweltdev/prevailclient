import { Close } from "@mui/icons-material";
import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import coke from "./assets/coke.png";
import CardService from "./CardService";
import CardPlatform from "./CardPlatform";
import trigger from "./assets/trigger.png";

const Platform = () => {
  return (
    <Grid
      sx={{
        padding: "0 0 5vh 0",
        margin: "0 auto",
        width: "90vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Grid sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{
            fontSize: "1.3vw",
            color: "#884ed9",
            marginBottom: "3vh",
            fontWeight: "900",
          }}
        >
          Customer Journey
        </Typography>
        <Typography
          sx={{
            fontSize: "2.5vw",
            color: "#333",
            textWeight: "bold",
            fontWeight: "bold",
            width: "50vw",
            marginBottom: "3vh",
          }}
        >
          How you attract more customers with Prevail
        </Typography>
        <Typography
          sx={{
            fontSize: "1.4vw",
            color: "#636363",
            width: "60vw",
            marginBottom: "10vh",
          }}
        >
          Are you ready to take your business to the next level? Imagine having
          a comprehensive view of your customer’s journey, from the moment they
          discover your business to the point where they become loyal advocates.
          The Customer Journey (CJ) strategy offers a powerful marketing tool
          that enables you to gain a deeper understanding of your customers&#39;
          experiences from the very beginning until the very end. When crafted
          with care, it can weave together a compelling story of your
          customers&#39; journey with your business and leave a lasting impact
          that resonates with them.
        </Typography>
      </Grid>
      <img
        style={{
          width: "75vw",
          height: "50vh",
          objectFit: "cover",
          borderRadius: "5px",
          margin: "3vh auto",
          boxShadow:
            "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;",
        }}
        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image"
      />
      <Grid
        sx={{
          display: "flex",
          gap: "4vw",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Grid sx={{ width: "75vw", margin: "1vh 0" }}>
          <Typography
            sx={{
              display: "flex",
              fontSize: "1.9vw",
              fontWeight: "bold",
              marginBottom: "2vh",
            }}
          >
            Trigger
          </Typography>
          <Typography
            sx={{
              fontSize: "1.4vw",
              color: "#636363",
              margin: "2vh 0 0 0",
              textAlign: "justify",
            }}
          >
            Imagine you are starting a journey with each customer, and the first
            step is understanding what they really need or desire. We know how
            important it is for your business to truly grasp the challenges and
            emotional factors that drive customer interest in what you have to
            offer. By looking at how people interact with your online presence,
            such as your website performance, customer interaction, plus organic
            and paid traffic, we can help you gain insights into what your
            customers like and don&#39;t like. We utilise tools like Google
            Analytics and Google Trends to make sense of all this information
            and provide you with our &quot;Search Engine Marketing (SEM)&quot;
            services. With our expertise in search engine optimisation (SEO) and
            paid ads, we help restore your confident to stand out in the digital
            realm and attract the right customers.
          </Typography>
        </Grid>
        <Grid sx={{ width: "75vw", display: "flex", marginBottom: "5vh" }}>
          <Grid sx={{}}>
            <Typography
              sx={{
                display: "flex",
                fontSize: "1.8vw",
                fontWeight: "bold",
                color: "#494848",
                marginBottom: "3vh",
              }}
            >
              Initial Consideration
            </Typography>
            <Typography
              sx={{
                fontSize: "1.4vw",
                color: "#636363",
                marginBottom: "3vh",
                lineHeight: "6vh",
              }}
            >
              After this trigger event, consumers move into the initial
              consideration phase, where your ideal target audience thinks about
              brands or products that can meet their newly identified needs.
              Creating a consistent presence of your brand across all digital
              marketing touchpoints can be challenging when trying to achieve a
              lasting impression on consumers to increase brand familiarity.
            </Typography>
          </Grid>
          <img style={{ width: "18vw" }} src={trigger} alt="" />
        </Grid>
      </Grid>

      <Grid sx={{ display: "flex", gap: "5vw" }}>
        <CardService />
        <CardPlatform />
      </Grid>
    </Grid>
  );
};

export default Platform;
