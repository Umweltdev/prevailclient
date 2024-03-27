import { Close } from "@mui/icons-material";
import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import coke from "./assets/coke.png";
import CardService from "./CardService";
import CardPlatform from "./CardPlatform";
import trigger from "./assets/trigger.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  imagePlaform: {
    width: "82vw",
    height: "50vh",
    objectFit: "cover",
    borderRadius: "1vw",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",

    "@media (max-width: 600px)": {
      width: "unset",
      height: "unset",
    },
  },
  imageInit: {
    width: "37vw",
    borderRadius: "1vw",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    "@media (max-width: 600px)": {
      width: "95vw",
      height: "unset",
    },
  },
});

const Platform = () => {
  const classes = useStyles();
  return (
    <Grid
      sx={{
        padding: "0 0 2vh 0",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        "@media (max-width: 600px)": {
          marginTop: "5vh",
        },
      }}
    >
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "82vw",
          margin: "0 auto",
          "@media (max-width: 600px)": {
            width: "95vw",
            margin: "0 auto",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "1.3vw",
            color: "#884ed9",
            marginBottom: "3vh",
            fontWeight: "900",
            "@media (max-width: 600px)": {
              fontSize: "4vw",
              marginBottom: "1vh",
            },
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
            width: "60vw",
            marginBottom: "3vh",
            "@media (max-width: 600px)": {
              fontSize: "6vw",
              color: "#333",
              textWeight: "bold",
              fontWeight: "bold",
              width: "95vw",
              marginBottom: "1vh",
            },
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
            "@media (max-width: 600px)": {
              fontSize: "4vw",
              color: "#636363",
              width: "95vw",
              marginBottom: "2vh",
              textAlign: "justify",
            },
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
          margin: "0 auto",
          width: "82vw",
          "@media (max-width: 600px)": {
            width: "95vw",
          },
        }}
      >
        <Grid
          sx={{
            width: "80vw",
            display: "flex",
            gap: "4vw",
            "@media (max-width: 600px)": {
              width: "95vw",
              flexDirection: "column",
            },
          }}
        >
          <Grid>
            <Typography
              sx={{
                display: "flex",
                fontSize: "1.9vw",
                fontWeight: "bold",
                marginBottom: "2vh",
                "@media (max-width: 600px)": {
                  width: "95vw",
                  fontSize: "6vw",
                  marginBottom: "1vh",
                },
              }}
            >
              Trigger
            </Typography>
            <Typography
              sx={{
                fontSize: "1.4vw",
                color: "#636363",
                margin: "1vh 0 0 0",
                // textAlign: "justify",
                width: "40vw",
                "@media (max-width: 600px)": {
                  width: "95vw",
                  fontSize: "4vw",
                  marginBottom: "1vw",
                },
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
                // textAlign: "justify",
                width: "40vw",
                marginTop: "7vh",
                "@media (max-width: 600px)": {
                  width: "95vw",
                  fontSize: "4vw",
                  marginBottom: "1vw",
                  marginTop: "0vh",
                },
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
        <img
          className={classes.imagePlaform}
          style={{}}
          src="https://plus.unsplash.com/premium_photo-1681488183639-f38511a647ef?q=80&w=1543&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
        />

        <Grid
          sx={{
            width: "83vw",
            display: "flex",
            marginBottom: "5vh",
            // gap: "5vw",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "5vw",
            "@media (max-width: 600px)": {
              width: "95vw",
              flexDirection: "column",
              marginBottom: "1vh",
              // gap: "5vw",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1vw",
            },
          }}
        >
          <Grid
            sx={{
              width: "45vw",
              "@media (max-width: 600px)": {
                width: "95vw",
              },
            }}
          >
            <Typography
              sx={{
                display: "flex",
                fontSize: "1.8vw",
                fontWeight: "bold",
                color: "#494848",
                marginBottom: "3vh",
                "@media (max-width: 600px)": {
                  fontSize: "6vw",
                  margin: "2vh 0",
                },
              }}
            >
              Initial Consideration
            </Typography>
            <Typography
              sx={{
                fontSize: "1.6vw",
                color: "#636363",
                marginBottom: "3vh",
                // textAlign: "justify",
                width: "40vw",
                "@media (max-width: 600px)": {
                  fontSize: "4vw",
                  textAlign: "justify",
                  width: "95vw",
                },
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
            className={classes.imageInit}
            style={{}}
            src="https://img.freepik.com/free-photo/copy-space-man-with-old-phone_23-2148467296.jpg?w=826"
            alt=""
          />
          {/* <spline-viewer
            style={{ width: "37vw", height: "40vh" }}
            url="https://prod.spline.design/kqWnRSHfs03RcYiO/scene.splinecode"
          ></spline-viewer> */}
        </Grid>
      </Grid>

      <Grid
        sx={{
          display: "flex",
          gap: "5vw",
          marginTop: "5vh",
          "@media (max-width: 600px)": {
            flexDirection: "column",
          },
        }}
      >
        <CardService />
        <CardPlatform />
      </Grid>
    </Grid>
  );
};

export default Platform;

//
