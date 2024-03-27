import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import imago from "../assets/sect2.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  // imagePlaform: {
  //   width: "78vw",
  //   height: "50vh",
  //   objectFit: "cover",
  //   borderRadius: "5px",
  //   boxShadow:
  //     "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",

  //   "@media (max-width: 600px)": {
  //     width: "unset",
  //     height: "unset",
  //   },
  // },
  // imageInit: {
  //   width: "37vw",
  //   borderRadius: "1vw",
  //   boxShadow:
  //     "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
  //   "@media (max-width: 600px)": {
  //     width: "95vw",
  //     height: "unset",
  //   },
  // },
});

const ServiceDetails2 = () => {
  const classes = useStyles()
  return (
    <Grid
      sx={{
        width: "80vw",
        margin: "15vh auto",
        alignItems: "center",

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
      {/* <img
        className={classes.imageInit}
        style={{}}
        src="https://img.freepik.com/free-photo/identity-branding-commercial-copyright-marketing-concept_53876-15819.jpg?t=st=1711555253~exp=1711558853~hmac=092b77dc87c0c9f02c8b378d341e2e85981ab1e0fc24816ed19c92d77dd3c8e6&w=740"
        alt=""
      /> */}
      {/* <spline-viewer
            style={{ width: "37vw", height: "40vh" }}
            url="https://prod.spline.design/kqWnRSHfs03RcYiO/scene.splinecode"
          ></spline-viewer> */}
      <Card
        sx={{
         
          margin: "0 auto",
          textAlign: "center",
          width: "70vw",
          padding: "3vw",
          borderRadius: "1.5vw",
          boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
          "@media (max-width: 600px)": {
            width: "95vw",
          },
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "3vw",
            fontWeight: '900',
            marginBottom: "2vh",
            color: "#333",
            "@media (max-width: 600px)": {
              fontSize: "6vw",
              margin: "2vh 0",
            },
          }}
        >
          Pain Points
        </Typography>
        <Typography
          sx={{
            fontSize: "1.4vw",
            color: "#636363",
            marginBottom: "3vh",
            textAlign: "center",
            width: "50vw",
            margin: "0 auto",
            "@media (max-width: 600px)": {
              fontSize: "4vw",
              textAlign: "justify",
              width: "95vw",
            },
          }}
        >
          In today's fast-paced, competitive world, merely existing is not
          enough. Small and local businesses often struggle to stand out in the
          crowded marketplace. Your brand might be getting lost in the digital
          noise, and potential customers may not even notice you.
        </Typography>
      </Card>
    </Grid>
  );
};

export default ServiceDetails2;
