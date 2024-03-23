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
        // width: "75vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "75vw",
          margin: "0 auto",
        }}
      >
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
            marginBottom: "5vh",
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

      <Grid
        sx={{
          display: "flex",
          gap: "4vw",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "top",
          margin: "4vh auto",
          width: "75vw",
        }}
      >
        <Grid
          sx={{ width: "75vw", margin: "1vh 0", display: "flex", gap: "4vw" }}
        >
          <Grid>
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
                margin: "1vh 0 0 0",
                textAlign: "justify",
                width: "37vw",
              }}
            >
              Imagine you are starting a journey with each customer, and the
              first step is understanding what they really need or desire. We
              know how important it is for your business to truly grasp the
              challenges and emotional factors that drive customer interest in
              what you have to offer. By looking at how people interact with
              your online presence, such as your website performance, customer
              interaction, plus organic and paid traffic,
            </Typography>
          </Grid>
          <Grid>
            <Typography
              sx={{
                fontSize: "1.4vw",
                color: "#636363",
                margin: "1vh 0 0 0",
                textAlign: "justify",
                width: "37vw",
                marginTop: "7vh",
              }}
            >
              We can help you gain insights into what your customers like and
              don&#39;t like. We utilise tools like Google Analytics and Google
              Trends to make sense of all this information and provide you with
              our &quot;Search Engine Marketing (SEM)&quot; services. With our
              expertise in search engine optimisation (SEO) and paid ads, we
              help restore your confident to stand out in the digital realm and
              attract the right customers.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          sx={{
            width: "75vw",
            display: "flex",
            marginBottom: "5vh",
            // gap: "5vw",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "4vw",
          }}
        >
          <Grid sx={{ width: "37vw" }}>
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
                textAlign: "justify",
                width: "37vw",
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
          <img
            style={{
              width: "37vw",
              borderRadius: "1vw",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
            }}
            src="https://img.freepik.com/free-photo/copy-space-man-with-old-phone_23-2148467296.jpg?w=826"
            alt=""
          />
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

//
