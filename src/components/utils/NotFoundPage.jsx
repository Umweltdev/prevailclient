// NotFoundPage.js
import { Button, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import img404 from "./404.png";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Grid
      sx={{
        textAlign: "center",
        justifyItems: "center",
        padding: "50px",
        background: "linear-gradient(135deg, #d1c4e9, #ffffff, #bbdefb)",
        height: "100vh",
      }}
    >
      <CardMedia
        component="img"
        image={img404}
        sx={{ width: "500px", margin: "auto", mt: "40px" }}
      />
      <Typography variant="h3" sx={{ color: "#884ED9" }}>
        Page Not Found
      </Typography>
      <Typography >
        The page you are looking for doesn't exist.
      </Typography>
      <Button variant="contained" sx={{ mt: "40px" }} onClick={handleGoBack}>
        Go Back
      </Button>
    </Grid>
  );
};

export default NotFoundPage;
