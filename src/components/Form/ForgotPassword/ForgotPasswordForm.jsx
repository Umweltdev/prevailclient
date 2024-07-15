import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    try {
      await axios.post(
        "https://prevailserver-4b3c670a5496.herokuapp.com/api/auth/forgot-password",
        {
          email,
        }
      );
      // console.log("Password reset email sent");
      setSuccess("Password reset email sent");
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
      setSuccess(`Email does not exist!`);
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
      <Typography sx={{ color: "#333", fontSize: "19px" }}>
        
        {success && <p dangerouslySetInnerHTML={{ __html: success }} />}
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          width: "80%",
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
        {loading ? "Loading..." : "Send Email"}
      </Button>
    </Box>
  );
};

export default ForgotPasswordForm;
