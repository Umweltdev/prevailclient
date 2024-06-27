import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://localhost:8080/api/auth/forgot-password", {
        email,
      });
      console.log("Password reset email sent");
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
      // console.log("Error sending email", err);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        margin: "auto",
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          width: "20vw",
          "@media (max-width: 900px)": {
            width: "80vw",
            fontWeight: "16px",
          },
        }}
      >
        Enter your email to receive change password link
      </Typography>
      <TextField
        variant="outlined"
        type="email"
        value={email}
        label="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        component="button"
        type="submit"
        sx={{
          color: "white",
          background: "#6E3EF4",
          "&:hover": {
            color: "white",
            background: "#6E3EF4",
          },
        }}
      >
        {loading ? "Loading" : "Send Email"}
      </Button>
    </Box>
  );
};

export default ForgotPasswordForm;
