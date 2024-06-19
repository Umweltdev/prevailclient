import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "90vw",
    "@media (max-width: 600px)": {
      display: "flex",
      alignItems: "center",
      flexDirection: "column-reverse",
      justifyContent: "center",
      width: "95vw",
      marginTop: "2vh",
    },
  },

  textContainer: {
    width: "50vw",
    textAlign: "right",
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },
  image: {
    width: 200,
    "@media (max-width: 600px)": {
      display: "none",
    },
  },
}));

const ImageTextService = ({ text, imageUrl, textHeader }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      sx={{
        // width: "80vw",
        display: "flex",
        flexDirection: "row",
        margin: "0px auto 0 auto",
        justifyContent: "center",
        alignItems: "center",
        gap: "239px",
        "@media (max-width: 600px)": {
          width: "95vw",
          flexDirection: "column",
          margin: "13vh auto 0 auto",
          marginBottom: "1vh",
          gap: "20px",
          justifyContent: "space-between",
          alignItems: "center",
        },
      }}
    >
      <img
        style={{
          width: "487px",
          height: "290px",
          borderRadius: "16px",
        }}
        src={imageUrl}
        alt=""
      />
      <Grid
        item
        sx={{
          maxWidth: "468px",
          flexGrow: 1,
          "@media (max-width: 600px)": {
            width: "100%",
          },
        }}
      >
        <Typography
          sx={{
            display: "flex",
            fontSize: "28px",
            fontWeight: "500",
            color: "#1D0D40",
            marginBottom: "20px",
            lineHeight: "110%",
            letterSpacing: "-0.28px",
            "@media (max-width: 600px)": {
              fontSize: "6vw",
              margin: "2vh 0",
            },
          }}
        >
          {textHeader}
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            color: "#505660",
            marginBottom: "3vh",
            "@media (max-width: 600px)": {
              fontSize: "4vw",
              textAlign: "justify",
              width: "100%",
            },
          }}
        >
          {text}
        </Typography>
        <Button
          sx={{
            color: "#1D0D40;",
            background: "rgba(0,0,0,0)",
            border: "1px solid #1D0D40;",
            width: "144px",
            borderRadius: "25px",
          }}
        >
          Learn more
        </Button>
      </Grid>
    </Grid>
  );
};

export default ImageTextService;
