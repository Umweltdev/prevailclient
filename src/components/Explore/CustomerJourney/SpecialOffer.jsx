import { Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import img1 from "../CJ/Special-Offer.svg"

const useStyles = makeStyles({
  imagePlaform: {
    width: "80vw",
    height: "50vh",
    objectFit: "cover",
    borderRadius: "5px",
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

const SpecialOffer = () => {
  const classes = useStyles();

  return (
    <Grid
      sx={{
        width: "80vw",
        display: "flex",
        // margin: "15vh auto",
        margin: "10vh auto 0 auto",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "7vw",
        height: "100vh",
        "@media (max-width: 600px)": {
          width: "95vw",
          height: "60vh",
          flexDirection: "column",
          marginBottom: "unset",
          margin: "15vh auto 0 auto",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1vw",
        },
      }}
    >
      <Grid
        sx={{
          width: "40vw",
          "@media (max-width: 600px)": {
            width: "95vw",
          },
        }}
      >
        <Typography
          sx={{
            display: "flex",
            fontSize: "3vw",
            fontWeight: "bold",
            color: "#494848",
            marginBottom: "3vh",
            "@media (max-width: 600px)": {
              fontSize: "3vw",
              margin: "2vh 0",
            },
          }}
        >
          Special Offer: The Digital Accelerator Bundle 
        </Typography>
        <Typography
          sx={{
            fontSize: "1.5vw",
            color: "#636363",
            marginBottom: "3vh",
            // textAlign: "justify",
            width: "37vw",
            "@media (max-width: 600px)": {
              fontSize: "4vw",
              textAlign: "justify",
              width: "95vw",
            },
          }}
        >
            Take advantage of our current promotion – the “Digital Accelerator” bundle, which combines our leading services to enhance your digital presence significantly. Available at a substantial discount of up to 70%, this bundle is designed to make your business shine online and attract more customers efficiently.  
     </Typography>
      </Grid>
      <img
        className={classes.imageInit}
        style={{}}
        src={img1}
      />
    </Grid>
  );
};

export default SpecialOffer;
