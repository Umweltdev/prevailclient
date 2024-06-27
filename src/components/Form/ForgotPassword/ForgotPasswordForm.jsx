import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

const ForgotPasswordForm = () => {
  return (
    <Box
      component="form"
      sx={{
        margin: "auto",
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ textAlign: "center" }}>
        Enter your email to receive a link to change your password
      </Typography>
      <TextField variant="outlined" />
      <Button
        component="btn"
        sx={{
          color: "white",
          background: "#6E3EF4",
          "&:hover": {
            color: "white",
            background: "#6E3EF4",
          },
        }}
      >
        Send Email
      </Button>
    </Box>
  );
};

export default ForgotPasswordForm;
