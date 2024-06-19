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
  },
  card: {
    width: "25vw",
    height: "16vw",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    // textAlign: "center",
    justifyContent: "center",
    border: "1px solid #EFF3F7",
    borderRadius: "none",
    margin: "auto",
    gap: "16px",
  },
  roundedTopLeft: {
    borderRadius: "10px 0 0 0",
  },
  roundedTopRight: {
    borderRadius: "0 10px 0 0",
  },
  roundedBottomLeft: {
    borderRadius: "0 0 0 10px",
  },
  roundedBottomRight: {
    borderRadius: "0 0 10px 0",
  },
  icon: {
    fontSize: "40px",
    marginBottom: "8px",
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
    <Grid>
      <Typography
        sx={{
          color: "#1D0D40",
          fontSize: "28px",
          fontWeight: 500,
          textAlign: "center",
          m: "10vh 0"
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
