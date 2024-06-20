import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Paper,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(135deg, #d1c4e9, #ffffff, #bbdefb)",
    padding: "2rem 0",
    minHeight: "10vh", // Ensure full height of the viewport
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: theme.spacing(4),
  },
}));
const Hero = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h6" pt="176px" align="center" color="primary" gutterBottom>
          Customer Journey
        </Typography>
        <Typography variant="h4" align="center" gutterBottom>
          Enhance Your Customer Journey
          <br /> with Prevail’s Expert Services 
        </Typography>
        <Typography variant="body1" align="center">
          Are you ready to take your business to the next level? Imagine having
          a comprehensive view of your customer’s journey, from the moment they
          discover your business to the point where they become loyal advocates.
          The Customer Journey (CJ) strategy offers a powerful marketing tool
          that enables you to gain a deeper understanding of your customers'
          experiences from the beginning until the end. When crafted with care,
          it can weave together a compelling story of your customer’s journey
          with your business and leave a lasting impact that resonates with
          them. 
        </Typography>
      </Container>
    </Box>
  );
};

export default Hero;
