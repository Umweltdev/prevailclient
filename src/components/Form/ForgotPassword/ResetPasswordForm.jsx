import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Button, TextField } from "@mui/material";

const ResetPasswordForm = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const { id, token } = useParams(); // Extracting id and token from URL

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("http://localhost:8080/api/auth/reset-password", {
        id, // Sending id
        token,
        newPassword: password,
      });
      setLoading(false);
      setSuccess(`Password reset success! Navigate to homepage to Login`);
    } catch (err) {
      console.error(err);
      setSuccess(`Error: ${err.response.data}`);
    }
  };

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="New Password"
          type="password"
          autoComplete="current-password"
        />
        <Box sx={{ display: "flex" }}>
          <Button
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
            {loading ? "Loading" : "Reset"}
          </Button>
          <Button
            onClick={navigateHome}
            sx={{
              color: "#6E3EF4",
              background: "#fff",
              border: "1px solid #6E3EF4",
              "&:hover": {
                color: "#6E3EF4",
                background: "#fff",
                border: "1px solid #6E3EF4",
              },
            }}
          >
            Home Page
          </Button>
        </Box>
      </Box>
      {success && <p dangerouslySetInnerHTML={{ __html: success }} />}
    </Box>
  );
};

export default ResetPasswordForm;
