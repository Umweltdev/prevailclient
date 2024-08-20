// ErrorPage.js
import { Button, CardMedia, Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import img404 from "./404.png";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Grid
      sx={{
        textAlign: "center",
        padding: "50px",
        background: "linear-gradient(135deg, #d1c4e9, #ffffff, #bbdefb)",
        height: "100vh",
      }}
    >
      <CardMedia
        component="img"
        image={img404}
        sx={{ width: "500px", margin: "auto", mt: "20px" }}
      />
      <Typography variant="h3" sx={{ color: "#884ED9" }}>
        Oops! Something went wrong.
      </Typography>
      <Typography>We can't find the page you're looking for.</Typography>
      <Button variant="contained" sx={{ mt: "40px" }} onClick={handleGoBack}>
        Go Back
      </Button>
    </Grid>
  );
};

export default ErrorPage;
