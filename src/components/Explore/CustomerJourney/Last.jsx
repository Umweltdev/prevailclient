import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // paper: {
  //   padding: theme.spacing(4),
  //   textAlign: "center",
  //   backgroundColor: "#FFFFFF",
  //   borderRadius: theme.shape.borderRadius,
  //   boxShadow: theme.shadows[3],
  //   maxWidth: "1000px",
  //   margin: "auto",
  // },
  text: {
    fontSize: "26px",
    color: "#34205F",
    textAlign: "center",
    fontWeight: "600",
  },
}));

const Last = () => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="40vh"
      bgcolor="#F4F4F4"
      padding="140px 0"
    >
      <Paper
        sx={{
          padding: "10px",
          textAlign: "center",
          backgroundColor: "#FFFFFF",
          borderRadius: "5",
          boxShadow: "3",
          maxWidth: "1000px",
          margin: "auto",
        }}
      >
        <Typography
          sx={{
            fontSize: "32px",
            fontWeight: "700",
            lineHeight: "150%",
            padding: "20px",
            "@media (max-width: 767px)": {
              fontSize: "24px",
              width: "80vw"
            },
          }}
        >
          At Prevail, we are committed to guiding you through each stage of the
          customer journey with strategic expertise and technological prowess.
          Let us help you transform potential interest into lasting customer
          loyalty. Start your journey with us today!
        </Typography>
      </Paper>
    </Box>
  );
};

export default Last;
