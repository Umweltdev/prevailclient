import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BasicButtons from "./Button";
import { Button, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  cardContainer: {
    // width: 600,
    // height: 420,
    display: "flex",
    flexDirection: "column",
    padding: "4vh 2vw",
    borderRadius: "5px",
    boxShadow:
      "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",

    // width: "100%",
    // justifyContent: "center",
    // alignItems: "center",
    // textDecoration: "none",

    "@media (max-width: 600px)": {
      width: "95vw",
      // height: 345,
      display: "flex",
      // flexDirection: "column",
      // justifyContent: "center",
      // alignItems: "center",
      // textDecoration: "none",
      // gap: "0",
    },
  },

  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    gap: "1vw",
  },

  header: {
    fontSize: "6vw",
    fontWeight: "bold",
    padding: "2vh 0",
    marginBottom: "2vh",
    color: "#ab63f3",

    "@media (max-width: 600px)": {
      // fontSize: 20,
      // textAlign: "center",
      fontWeight: "bold",
      padding: "1vh 0",
    },
  },

  text: {
    // fontSize: "0.1vw",
    width: "25vw",
    textAlign: "justify",
    textJustify: "distribute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2vw",
    marginBottom: "4vh",

    "@media (max-width: 600px)": {
      fontSize: 14,
      // textAlign: "center",
      width: "unset",
    },
  },

  btn: {
    color: "#3101ae",
    backgroundColor: "#d6c0ee",
    fontSize: "2vw",
    width: "10vw",
    padding: "1vh 0 2vh 0",
    borderRadius: "35px",

    "@media (max-width: 600px)": {
      padding: "0",
      width: "unset",
      fontSize: "5vw",
    },
  },
});

export default function BasicCard({ headerText, text, icon }) {
  const classes = useStyles();

  return (
    <Card elevation={1} className={classes.cardContainer}>
      <Grid className={classes.cardHeader}>
        <Grid>
          <Typography
            sx={{
              fontSize: "1.5vw",
              fontWeight: "bold",
              marginBottom: "1vh",
              color: "#ab63f3",
              "@media (max-width: 600px)": {
                fontSize: "5vw",
                fontWeight: "unset",
                marginBottom: "1vh",
                color: "#ab63f3",
              },
            }}
          >
            {headerText}
          </Typography>
          <Typography
            sx={{
              fontSize: "1vw",
              "@media (max-width: 600px)": {
                fontSize: "4vw",
              },
            }}
            className={classes.text}
          >
            {text}
          </Typography>
          <Button
            sx={{
              color: "white",
              backgroundColor: "#ab63f3",
              fontSize: "0.9vw",
              width: "10vw",
              borderRadius: "35px",
              marginTop: "2vh",
              textAlign: "center",

              "@media (max-width: 600px)": {
                // padding: "0",
                width: "unset",
                fontSize: "3vw",
                
              },
            }}
            variant="contained"
          >
            Learn More
          </Button>
        </Grid>
        <Grid>
          <Grid> {icon}</Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
