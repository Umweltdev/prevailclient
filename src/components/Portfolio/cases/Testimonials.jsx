import { FormatQuote, Star } from "@mui/icons-material"; // Corrected import
import { Card, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles"; // Check if this path is correct for your MUI version
import React from "react";

const useStyles = makeStyles({
  cardContainer: {
    width: "70vw",
    height: "25vw",
    margin: "5vh auto 20vh 0",
    background: "#e2ccf7",
    display: "flex",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px",
    borderRadius: "5vw",

    "@media (max-width: 600px)": {
      width: "90vw",
      height: "70vh",
      margin: "2vh auto",
      background: "#e2ccf7",
      // padding: "0 5vw",
      borderRadius: "2vw",
    },
  },

  iconQuote: {
    textAlign: "right",
    color: "#ba8bd9",
    fontSize: "20vw",
    marginLeft: "17vh",
    display: "flex",
    flexDirection: " column-reverse",

    "@media (max-width: 600px)": {
      fontSize: "10vh",
    },
  },

  textImage: {
    width: "20vw",
    height: "30vw",
    objectFit: "cover",
    "@media (max-width: 600px)": {
      width: "95vw",
      height: "40vh",
      objectFit: "cover",
    },
  },

  text: {
    padding: "1vw",
    textJustify: "distribute",
    textAlign: "justify",
  },

  textSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  classBotm: {
    marginTop: "3vh",
    "@media (max-width: 600px)": {
      marginTop: "1vh",
    },
  },

  authorName: {
    fontWeight: "600",
  },
});

const Testimonials = () => {
  const classes = useStyles();

  return (
    <Card
      sx={{
        width: "80vw",
        height: "25vw",
        margin: "5vh auto 15vh auto",
        // background: "#e2ccf7",
        display: "flex",
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px",
        borderRadius: "2vw",

        "@media (max-width: 600px)": {
          width: "95vw",
          height: "85vh",
          margin: "2vh auto",
          flexDirection: "column",
          background: "#e2ccf7",
          // padding: "0 5vw",
          borderRadius: "2vh",
        },
      }}
    >
      <img
        className={classes.textImage}
        src="https://images.unsplash.com/photo-1542190891-2093d38760f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJsYWNrJTIwYnVzc2luZXNzJTIwbWFufGVufDB8fDB8fHww"
        alt="ceo"
      />

      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          "@media (max-width: 600px)": {
            width: "95vw",
            margin: "2vh auto",
            background: "#e2ccf7",
            // padding: "0 5vw",
            borderRadius: "2vw",
          },
        }}
      >
        <Typography className={classes.text}>
          <FormatQuote
            sx={{
              textAlign: "right",
              color: "#ba8bd9",
              fontSize: "5vw",
              marginLeft: "53vw",
              display: "flex",
              flexDirection: " column-reverse",

              "@media (max-width: 600px)": {
                fontSize: "10vw",
                marginLeft: "70vw",
              },
            }}
          />

          <Typography
            sx={{
              textJustify: "distribute",
              textAlign: "justify",
              width: "57vw",
              "@media (max-width: 600px)": {
                fontSize: "4vw",
                width: "80vw",
              },
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            repellendus odit ex officiis ipsam velit incidunt dolores nobis,
            praesentium vero aperiam. Aperiam rerum laborum dignissimos neque
            est, reprehenderit ea eligendi doloribus vero alias magnam odio,
            ullam perspiciatis officia, voluptatem necessitatibus.
          </Typography>
          <Grid className={classes.classBotm}>
            <Grid>
              <Star sx={{ color: "#e1aa06" }} />
              <Star sx={{ color: "#e1aa06" }} />
              <Star sx={{ color: "#e1aa06" }} />
              <Star sx={{ color: "#e1aa06" }} />
              <Star sx={{ color: "#e1aa06" }} />
            </Grid>
            <Typography
              sx={{ fontWeight: "bold" }}
              className={classes.authorName}
            >
              James Huddork
            </Typography>
            <Typography sx={{ fontSize: "13px" }}>20th April, 2023</Typography>
          </Grid>
        </Typography>
      </Grid>
    </Card>
  );
};

export default Testimonials;
