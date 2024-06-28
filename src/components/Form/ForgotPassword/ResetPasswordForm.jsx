import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Button,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const ResetPasswordForm = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const { id, token } = useParams();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        "https://prevailserver-4b3c670a5496.herokuapp.com/api/auth/reset-password",
        {
          id, // Sending id
          token,
          newPassword: password,
        }
      );
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
    <Box
      sx={{
        magin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        elevation="3"
        component="form"
        onSubmit={handleSubmit}
        sx={{
          "& .MuiTextField-root": {
            m: 1,
            width: "45ch",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "4",
            "@media (max-width: 900px)": {
              flexDirection: "column",
              width: "90vw",
              alignItems: "center",
              margin: "auto",
            },
          },
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl
          sx={{
            mt: "30vh",
            mb: "10px",
            width: "45ch",
            "@media (max-width: 900px)": {
              width: "80vw",
            },
          }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Enter New Password
          </InputLabel>
          <OutlinedInput
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Enter New Password"
          />
        </FormControl>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "1vw",
            "@media (max-width: 900px)": {
              flexDirection: "column",
            },
          }}
        >
          <Button
            type="submit"
            sx={{
              color: "white",
              background: "#6E3EF4",
              "@media (max-width: 900px)": {
                width: "80vw",
              },
              "&:hover": {
                color: "white",
                background: "#6E3EF4",
              },
            }}
          >
            {loading ? "Loading" : "Reset Password"}
          </Button>
          <Button
            onClick={navigateHome}
            sx={{
              color: "#6E3EF4",
              background: "#fff",
              border: "1px solid #6E3EF4",
              "@media (max-width: 900px)": {
                width: "80vw",
              },
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
        <Typography sx={{ textAlign: "center", mt: "20px", width: "30ch" }}>
          {success && <p dangerouslySetInnerHTML={{ __html: success }} />}
        </Typography>
      </Box>
    </Box>
  );
};

export default ResetPasswordForm;
