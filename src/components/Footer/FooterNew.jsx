import { Grid, Typography } from "@mui/material";
import React from "react";
import logo from "./assets/pmmlogo.png";
import { Call, Email, LocationOn } from "@mui/icons-material";
import CustomizedAccordions from "./Accordion";
import AccordionTransition from "./AccordionTwo";
import { makeStyles } from "@mui/styles";

const accord = [
  {
    header: "Empowering Local Bussinesses",
    text: "Recognise the struggle of local SMEs in the current economic climate. Prevail is committed to empowering these businesses, providing them with the tools and resources to compete effectively against larger enterprises.",
  },
  {
    header: "Innovative and Accessible Technology",
    text: `Address the gap in technology accessibility between large corporations and “small-to-medium-sized" enterprises (SMEs). Prevail will focus on bringing innovative, affordable tech solutions to local businesses, allowing them to harness automation and other advancements without the need for full-time programmers.`,
  },
  {
    header: "Adaptive Bussiness Strategies",
    text: "Understand the volatility in consumer demands and behaviours. Prevail offers insights and tools to help local businesses quickly adapt to changing market conditions, ensuring they remain competitive and responsive to consumer needs.",
  },
  {
    header: "Market Equity and Fair Competition",
    text: "Address the challenge of market share decline for local businesses. Prevail stands for creating a more equitable market where local businesses can compete fairly with larger enterprises, ensuring diversity and choice in the market.",
  },
];

const service = [
  {
    header: "Brand Identity",
    text: `Creating a cohesive brand identity is crucial in today's crowded digital and physical landscape. Our "Brand Identity Package" service lays the foundation for a lasting impression`,
  },
  {
    header: "Website Developement Managment",
    text: `In today's fast-paced digital world, small to medium-sized enterprises (SMEs) and local businesses face unique challenges. The need for a robust and dynamic online presence is more critical than ever.`,
  },
  {
    header: "Custom Website Developement & Management",
    text: `With Prevail’s “Custom Website Development & Management” service, you can embark on a digital transformation like never before. Our service offers two package options: the “Custom Website Executive Package” and the “Custom Website Elite Package”,`,
  },
  {
    header: "Search Engine Marketing (SEM)",
    text: `In the heart of every local business and SME beats a dream - a vision of growth, recognition, and success. At Prevail, we understand this dream and share it. In the digital marketplace, standing out is necessary, and our Search Engine Marketing (SEM) service can be a game-changer. `,
  },
  {
    header: "Marketing Price Displacement (MPD)",
    text: `Welcome to the future of digital marketing with Prevail's Marketing Price Displacement (MPD) API. We understand that small and medium-sized enterprises (SMEs) and local businesses face unique challenges in the ever-changing digital landscape.`,
  },
  {
    header: "Digital Accelerator",
    text: `Attention SMEs and local businesses in Ireland! The digital landscape is evolving rapidly, and it is no longer an option to stay competitive, but a necessity. Imagine having a cutting-edge website, a brand identity that resonates with your audience, and a marketing strategy that puts you at the top of search results`,
  },
];

const useStyles = makeStyles({
  image: {
    width: "7vw",
    "@media (max-width: 600px)": {
      width: "22vw",
    },
  },
});

const FooterNew = () => {
  const classes = useStyles();
  return (
    <Grid sx={{ boxShadow: "0px -1px 1px #ba8bd7", background: "#884ed9" }}>
      <Grid
        sx={{
          display: "flex",
          padding: "7vh 0",
          justifyContent: "center",
          alignItems: "top",
          gap: "3vw",
          borderRadius: "0 0 5vw 5vw",
          background: "white",
          "@media (max-width: 600px)": {
            display: "flex",
            flexDirection: "column",
            padding: "3vh 0",
            justifyContent: "center",
            alignItems: "top",
            gap: "3vw",
            borderRadius: "0 0 5vw 5vw",
            background: "white",
          },
        }}
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2vw",
            "@media (max-width: 600px)": {
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <img
            // style={{
            //   width: "7vw",
            //   "@media (max-width: 600px)": {
            //     width: "24vw",
            //   },
            // }}
            className={classes.image}
            src={logo}
            alt=""
          />
          <Typography
            sx={{
              display: "flex",
              fontSize: "1vw",
              width: "20vw",
              justifyContent: "left",
              alignItems: "center",
              gap: "1vw",
              "@media (max-width: 600px)": {
                justifyContent: "center",
                alignItems: "center",
                width: "90vw",
                textAlign: "center",
                fontSize: "3vw",
              },
            }}
          >
            <LocationOn
              sx={{
                color: "#884ed9",
                "@media (max-width: 600px)": {
                  fontSize: "4vw",
                },
              }}
            />
            Glencullen House, Kylemore Rd, Dublin 10, D10 K729{" "}
          </Typography>
          <Typography
            sx={{
              display: "flex",
              fontSize: "1vw",
              width: "20vw",
              justifyContent: "left",
              alignItems: "center",
              gap: "1vw",
              "@media (max-width: 600px)": {
                justifyContent: "center",
                alignItems: "center",
                width: "90vw",
                textAlign: "center",
                fontSize: "3vw",
              },
            }}
          >
            <Email
              sx={{
                color: "#884ed9",
                "@media (max-width: 600px)": {
                  fontSize: "4vw",
                },
              }}
            />
            info@prevail.com
          </Typography>
          <Typography
            sx={{
              display: "flex",
              fontSize: "1vw",
              width: "20vw",
              justifyContent: "left",
              alignItems: "center",
              gap: "1vw",
              "@media (max-width: 600px)": {
                justifyContent: "center",
                alignItems: "center",
                width: "90vw",
                textAlign: "center",
                fontSize: "3vw",
              },
            }}
          >
            <Call
              sx={{
                color: "#884ed9",
                "@media (max-width: 600px)": {
                  fontSize: "4vw",
                },
              }}
            />
            info@prevail.com
          </Typography>
        </Grid>
        <Grid className="">
          <Typography
            sx={{
              fontSize: "1.6vw",
              fontWeight: "bold",
              "@media (max-width: 600px)": {
                fontSize: "4vw",
                textAlign: "center",
                marginTop: "5vh",
              },
            }}
          >
            Our Core Values
          </Typography>
          {accord.map((data, index) => (
            <Grid key={index}>
              <CustomizedAccordions header={data.header} text={data.text} />
            </Grid>
          ))}
        </Grid>
        <Grid className="">
          <Typography
            sx={{
              fontSize: "1.6vw",
              fontWeight: "bold",
              "@media (max-width: 600px)": {
                fontSize: "5vw",
                textAlign: "center",
                marginTop: "4vh",
              },
            }}
          >
            Services
          </Typography>
          {service.map((data, index) => (
            <Grid key={index}>
              <AccordionTransition header={data.header} text={data.text} />
            </Grid>
          ))}
        </Grid>
        <Grid className=""></Grid>
      </Grid>
      <Typography
        sx={{
          color: "white",
          background: "#884ed9",
          padding: "1vw 0 1vw 10vw",
        }}
      >
        © 2024 Prevail | All Right Reserved{" "}
      </Typography>
    </Grid>
  );
};

export default FooterNew;
