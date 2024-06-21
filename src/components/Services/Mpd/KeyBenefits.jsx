import React from "react";
import { Box, CardMedia, Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  Home as HomeIcon,
  Info as InfoIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import Icon from "../assets/money.svg";
import Icon1 from "../assets/cash.svg";
import Icon2 from "../assets/calendar.svg";
import Icon3 from "../assets/data-storage.svg";
import Icon4 from "../assets/navigation-arrow.svg";
import Icon5 from "../assets/dollar.svg";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "75vw",
    margin: "10vh auto",

    "@media (max-width: 600px)": {
      width: "100vw",
      mt: "40px",
      flexDirection: "column",
    },
  },
  card: {
    width: "25vw",
    height: "17vw",
    padding: "36px 16px",
    display: "flex",
    flexDirection: "column",
    // textAlign: "center",
    justifyContent: "top",
    border: "1px solid #EFF3F7",
    borderRadius: "none",
    margin: "auto",
    gap: "16px",
    "@media (max-width: 600px)": {
      width: "90vw",
      height: "265px",
    },
  },
  roundedTopLeft: {
    borderRadius: "10px 0 0 0",
    "@media (max-width: 600px)": {
      borderRadius: "unset",
    },
  },
  roundedTopRight: {
    borderRadius: "0 10px 0 0",
    "@media (max-width: 600px)": {
      borderRadius: "unset",
    },
  },
  roundedBottomLeft: {
    borderRadius: "0 0 0 10px",
    "@media (max-width: 600px)": {
      borderRadius: "unset",
    },
  },
  roundedBottomRight: {
    borderRadius: "0 0 10px 0",
    "@media (max-width: 600px)": {
      borderRadius: "unset",
    },
  },
  icon: {
    fontSize: "40px",
    marginBottom: "8px",
    "@media (max-width: 600px)": {
      borderRadius: "unset",
    },
  },
});

const Card = ({ icon: IconComponent, header, text, className }) => {
  const classes = useStyles();
  return (
    <Paper className={`${classes.card} ${className}`}>
      <CardMedia
        component={"img"}
        image={IconComponent}
        sx={{ width: "37px" }}
      />
      <Typography variant="h6" sx={{ color: "#000" }}>
        {header}
      </Typography>
      <Typography variant="body1" color={"330.073px"} width={"330.073px"}>
        {text}
      </Typography>
    </Paper>
  );
};

const SixCards = () => {
  const classes = useStyles();
  return (
    <Grid
      sx={{
        color: "#fff",
        fontSize: "28px",
        fontWeight: 500,
        background: "#0D0E30",
        p: "10vh 0",
        "@media (max-width: 600px)": {
          width: "100vw",
          p: "40px 0 20px 0",
          textAlign: "unset",
          // alignItems: "center",
        },
      }}
    >
      <Typography
        sx={{
          color: "#fff",
          fontSize: "28px",
          fontWeight: 500,
          textAlign: "center",
          // m: "10vh 0",
          "@media (max-width: 600px)": {
            width: "90vw",
            alignItems: "center",
            textAlign: "unset",
            m: "30px 0 -50px 0",
            ml: "5vw",
          },
        }}
      >
        Key Benefits of Using MPD API
      </Typography>
      <div className={classes.root}>
        <Card
          icon={Icon}
          header="Valuable Gains"
          text="Experience the benefits of yield management and automated price adjustments. "
          className={classes.roundedTopLeft}
        />
        <Card
          icon={Icon1}
          header="Labour Efficiency"
          text="Streamline operations, reducing costs and boosting competitiveness. "
        />
        <Card
          icon={Icon2}
          header="Flexible Redistribution"
          text="Customise the frequency of your marketing adjustments – choose from daily, weekly, monthly, or quarterly options."
          className={classes.roundedTopRight}
        />
        <Card
          icon={Icon3}
          header="Digital Integration"
          text="Seamlessly connect with digital advertising platforms and databases. "
          className={classes.roundedBottomLeft}
        />
        <Card
          icon={Icon4}
          header="Holistic Tracking"
          text="Obtain a comprehensive view of all marketing expenditures and their impacts."
        />
        <Card
          icon={Icon5}
          header="Price Estimation"
          text="Use the Prevail admin portal for real-time price estimation (Version 2) or receive detailed spreadsheets in PDF format."
          className={classes.roundedBottomRight}
        />
      </div>
    </Grid>
  );
};

export default SixCards;
