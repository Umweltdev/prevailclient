import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BasicButtons from "./Button";
import { Button, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import theme from "../../theme";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    width: 490,
    // height: 420,
    display: "flex",
    flexDirection: "column",
    padding: "1vw",
    borderRadius: "5px",
    // width: "100%",
    // justifyContent: "center",
    // alignItems: "center",
    // textDecoration: "none",

    "@media (max-width: 600px)": {
      width: "90vw",
      height: 345,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textDecoration: "none",
      gap: "0",
    },
  },

  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "4vh",
    width: "100%",
  },

  header: {
    fontSize: theme.typography.fontSizeMedium,
    // textAlign: "center",
    fontWeight: "bold",
    padding: "2vh 0",
    // color: "#333",
    color: theme.palette.primary.dark,
    "@media (max-width: 600px)": {
      fontSize: 20,
      textAlign: "center",
      fontWeight: "bold",
      padding: "1vh 0",
    },
  },

  text: {
    fontSize: theme.typography.fontSize,
    width: "100%",
    textAlign: "justify",
    textJustify: "distribute",
    "@media (max-width: 600px)": {
      fontSize: 14,
      textAlign: "center",
    },
  },

  btn: {
    color: "#3101ae",
    backgroundColor: "#d6c0ee",
    fontSize: "2vw",
    width: "10vw",
    padding: "2vh 0 2vh 0",
    borderRadius: "35px",

    "@media (max-width: 600px)": {
      padding: "0",
      width: "unset",
    },
  },
}));

export default function BasicCard({ headerText, text, icon }) {
  const classes = useStyles();

  return (
    <Card elevation={1} className={classes.cardContainer}>
      <Grid className={classes.cardHeader}>
        <Typography variant={1} className={classes.header}>
          {headerText}
        </Typography>
        {icon}
      </Grid>

      <Typography className={classes.text} variant="body2">
        {text}
      </Typography>

      <Button
        sx={{
          color: "#3101ae",
          backgroundColor: "#d6c0ee",
          fontSize: theme.typography.fontSizeSmall,
          width: "10vw",
          fontWeight: theme.typography.fontWeightRegular,
          borderRadius: "35px",
          marginTop: "4vh",
          textAlign: "center",
          "@media (max-width: 600px)": {
            padding: "1vh 2vh",
            width: "unset",
          },
        }}
        variant="contained"
      >
        Learn More
      </Button>
    </Card>
  );
}
