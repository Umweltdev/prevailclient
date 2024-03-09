import { Accordion, Grid, Typography, createTheme } from "@mui/material";
import React from "react";
import AccordionUsage from "./Accordion";
import { makeStyles } from "@mui/styles";
const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  image: {
    width: "30vw",

    "@media (max-width: 600px)": {
      display: "none",
    },
  },
}));

const Advantages = () => {
  const classes = useStyles();
  return (
    <Grid
      sx={{
        display: "flex",
        padding: "10vh",
        justifyContent: "center",
        alignItems: "top",
        gap: "4vw",
        "@media (max-width: 600px)": {
          display: "unset",
          padding: "2vh 0",
          justifyContent: "center",
          alignItems: "top",
          gap: "4vw",
        },
      }}
    >
      <Grid
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <img
          className={classes.image}
          src="https://img.freepik.com/free-vector/ui-ux-designers-isometric-composition-with-small-people-creating-custom-design-web-site-3d-vector-illustration_1284-68939.jpg?t=st=1709736669~exp=1709740269~hmac=e49daffd87aa3d7a0df9f6d4b12d8760952a23f7fbf33869718cc687a9cc3ab5&w=1060"
          alt=""
        />

        <Typography
          sx={{
            width: "40vw",
            textAlign: "center",
            "@media (max-width: 600px)": {
              fontSize: "4.5",
              width: "95vw",
              textAlign: "center",
              justifyContent: "justify",
              margin: "2vh 0",
            },
          }}
        >
          With Prevail's “Custom Website Development & Management” service, you
          can experience the pride of presenting a website that not only
          functions but also dazzles. You can take control of your online
          identity with ease. Your audience will navigate a visually stunnin
          interface that proudly showcases your brand, leaving a lasting
          impression and fostering brand loyalty. Our solution empowers you to
          manage your website effortlessly and captivate your audiences from the
          very first click, allowing you to focus on what truly matters -
          growing your business.
        </Typography>
      </Grid>
      <Grid>
        <AccordionUsage />
      </Grid>
    </Grid>
  );
};

export default Advantages;
