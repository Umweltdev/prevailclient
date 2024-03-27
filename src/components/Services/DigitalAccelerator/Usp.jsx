import { Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import wow from "../assets/dera.png";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  imageCard: {
    width: "40vw",
    height: "60vh",
    objectFit: "cover",
    borderRadius: "1vw",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;",
  },
});

const usp = () => {
  const classes = useStyles();

  return (
    <Grid
      sx={{
        background: "#fff",
        margin: "0 auto",
        padding: "5vw",
      }}
    >
      <Grid
        sx={{
          width: "80vw",
          margin: "0 auto",
          borderRadius: "2vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "3vw",
          gap: "4vw",
        }}
      >
        <Grid>
          <Typography
            sx={{
              width: "40vw",
              // padding: "10vh 0",
              color: "#333",
              textAlign: "",
              fontSize: "1.2vw",
              margin: "0 auto",

              "@media (max-width: 600px)": {
                width: "50vw",
                padding: "3vh 0",
                color: "white",
                textAlign: "center",
                fontSize: "4vw",
                margin: "0 auto",
                fontWeight: "unset",
              },
            }}
          >
            Our Digital Presence Accelerator stands out because of its
            integrated approach. We don't just focus on one area of your digital
            presence; we enhance your website aesthetics, brand identity, and
            online marketing in a holistic manner, ensuring that all the
            elements work together seamlessly. This collaborative effort not
            only elevates your brand but also delivers tangible results, saving
            you valuable time and resources by entrusting all aspects of your
            digital presence to us. <br /> Don't let your business fall behind
            in the digital race. Experience the satisfaction and confidence that
            come with having a robust online presence and take the logical step
            of improving your business. Sign up now for a free consultation and
            take the first step towards revolutionising your digital presence.
            Let us help you make your business the new digital landmark!
          </Typography>
          <Link to={"/about"}>
            <Button
              sx={{
                textTransform: "capitalize",
                backgroundColor: "#884ed9",
                color: "white",
                fontSize: "1.2vw",
                borderRadius: "5vw",
                padding: "0.5vw 5vw",
                border: "1px solid #884ed9",
                marginTop: "4vh",
                "&:hover": {
                  color: "#884ed9",
                  borderRadius: "1px solid #884ed9",
                },
              }}
            >
              Sign Up for Your Free Consultation
            </Button>
          </Link>
        </Grid>
        <img
          className={classes.imageCard}
          src="https://img.freepik.com/free-photo/map-lying-wooden-table_53876-105723.jpg?t=st=1711546470~exp=1711550070~hmac=d7237c66b8d9e019842d35ae2a991cafec377c59d9762d3623e4000d763283c6&w=740"
          alt=""
        />
      </Grid>
    </Grid>
  );
};

export default usp;
