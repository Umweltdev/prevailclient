import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  imageBudget: {
    width: "40vw",
    objectFit: "cover",
    borderRadius: "1vw",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px"
  },
});

const Budget = () => {
  const classes = useStyles();
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "row",
        margin: "15vh auto",
        justifyContent: "center",
        gap: "2vw",
      }}
    >
      <Grid
        sx={{
          "@media (max-width: 600px)": {
            padding: "5vh 0",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "3vw",
            width: "43vw",
            fontWeight: "bold",
            marginBottom: "3vh",
            "@media (max-width: 600px)": {
              fontSize: "4.5vw",
              width: "95vw",
              textAlign: "center",
            },
          }}
        >
          Budget
        </Typography>

        <Typography
          sx={{
            fontSize: "1.4vw",
            width: "40vw",
            "@media (max-width: 600px)": {
              fontSize: "4.5vw",
              width: "95vw",
              textAlign: "center",
            },
          }}
        >
          Do not let budget constraints limit your growth. Embrace the digital
          age with the Marketing Price Displacement (MPD) API. Sign up now to
          transform your approach to pricing and marketing, and start reaping
          the benefits of a smarter, more agile business strategy. Your journey
          towards increased market share and proportional income growth begins
          here.
        </Typography>
        <Link to={"/about"}>
          <Button
            sx={{
              textTransform: "capitalize",
              backgroundColor: "#884ed9",
              color: "white",
              fontSize: "1.2vw",
              borderRadius: "3vw",
              padding: "0.5vw 5vw",
              border: "1px solid #884ed9",
              marginTop: "4vh",
              "&:hover": {
                color: "#884ed9",
                borderRadius: "1px solid #884ed9",
              },
            }}
          >
            Request A Free Audit
          </Button>
        </Link>
      </Grid>
      <img
        className={classes.imageBudget}
        src="https://img.freepik.com/premium-photo/digital-design-businessman-show-growth-graph-earning-with-digital-marketing-strategy_35761-549.jpg?w=740"
        alt=""
      />
    </Grid>
  );
};

export default Budget;
