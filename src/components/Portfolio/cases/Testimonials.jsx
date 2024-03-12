import { FormatQuote, Star, Start } from "@mui/icons-material";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const Testimonials = () => {
  return (
    <Card
      sx={{
        width: "75vw",
        margin: "5vh auto",
        background: "#e2ccf7",
        // padding: "0 5vw",
        borderRadius: "2vw",
        "@media (max-width: 600px)": {
          width: "95vw",
          margin: "2vh auto",
          background: "#e2ccf7",
          // padding: "0 5vw",
          borderRadius: "2vw",
        },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          "@media (max-width: 600px)": {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <FormatQuote
          sx={{
            textAlign: "right",
            marginLeft: "60vw",
            color: "#ba8bd9",
            fontSize: "10vw",
            "@media (max-width: 600px)": {
              textAlign: "right",
              marginLeft: "75vw",
              color: "#ba8bd9",
              fontSize: "10vh",
            },
          }}
        />
        <Grid>
          <Star
            sx={{
              color: "#e1aa06",
              fontSize: "2.5vw",
              "@media (max-width: 600px)": {
                color: "#e1aa06",
                fontSize: "4vh",
              },
            }}
          />
          <Star
            sx={{
              color: "#e1aa06",
              fontSize: "2.5vw",
              "@media (max-width: 600px)": {
                color: "#e1aa06",
                fontSize: "4vh",
              },
            }}
          />
          <Star
            sx={{
              color: "#e1aa06",
              fontSize: "2.5vw",
              "@media (max-width: 600px)": {
                color: "#e1aa06",
                fontSize: "4vh",
              },
            }}
          />
          <Star
            sx={{
              color: "#e1aa06",
              fontSize: "2.5vw",
              "@media (max-width: 600px)": {
                color: "#e1aa06",
                fontSize: "4vh",
              },
            }}
          />
          <Star
            sx={{
              color: "#e1aa06",
              fontSize: "2.5vw",
              "@media (max-width: 600px)": {
                color: "#e1aa06",
                fontSize: "4vh",
              },
            }}
          />
        </Grid>
        <Typography
          sx={{
            color: "#333",
            fontSize: "1.4vw",
            textAlign: "center",
            margin: "3vh 0",

            "@media (max-width: 600px)": {
              color: "#333",
              fontSize: "4.5vw",
              textAlign: "center",
              margin: "2vh 0",
            },
          }}
        >
          Salt has given me a lot of peace of mind, which is very important. We
          are much less stressed about running our business now that we know a
          full-fledged marketing team is carefully managing every aspect of our
          digital marketing. It’s like having your own marketing department, but
          without all the costs and problems that come with running one.
        </Typography>
        <Typography
          sx={{
            color: "#7097da",
            fontSize: "2vw",
            textAlign: "center",
            margin: "1vh 0",
            fontWeight: "bold",
            "@media (max-width: 600px)": {
              color: "#7097da",
              fontSize: "5vw",
              textAlign: "center",
              margin: "unset",
              fontWeight: "bold",
            },
          }}
        >
          Clive Buckley
        </Typography>
        <Typography
          sx={{
            color: "#333",
            fontSize: "1vw",
            textAlign: "center",
            margin: "1vh 0",
            fontWeight: "bold",
            "@media (max-width: 600px)": {
              color: "#333",
              fontSize: "4vw",
              textAlign: "center",
              margin: "0",
              fontWeight: "bold",
            },
          }}
        >
          Owner
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Testimonials;
