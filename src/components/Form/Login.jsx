import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Paper,
  IconButton,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import Loading from "../utils/Loading";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    fontSize: "14px",
    height: "45px",
    borderRadius: "10px",
  },
  "& .MuiInputLabel-root": {
    fontSize: "14px",
  },
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { user, loading, error, dispatch } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      dispatch({ type: "LOGIN_START" });

      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          email,
          password,
        }
      );
      const user = response.data;
      dispatch({ type: "LOGIN_SUCCESS", payload: user });
      // console.log(user);
      navigate("/user/profile", { state: { user: user } });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  // http://localhost:8080/api/auth/login
  //   Object.values(formData).every((val) => val.trim() !== "")

  return (
    <Grid sx={{ margin: "25vh auto 10vh 0" }}>
      {loading && (
        <div>
          <Loading/>
        </div>
      )}

      <Grid
        xs
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          width: 500,
          "@media (max-width: 600px)": {
            width: "95vw",
            flexDirection: "column",
          },
        }}
      >
        {!loading && (
          <Paper
            elevation={3}
            sx={{
              padding: "2rem",
              width: "100%",
              maxWidth: 500,
            }}
          >
            <Typography
              variant="h4"
              align="center"
              sx={{
                fontSize: "3vw",
                fontWeight: "bold",
                "@media (max-width: 600px)": {
                  fontSize: "4.5vh",
                },
              }}
            >
              Login
            </Typography>
            {error && <span style={{ color: "red" }}>{error.message}!</span>}{" "}
            <Box
              component="form"
              sx={{
                marginY: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "2vw",
              }}
              noValidate
              autoComplete="on"
            >
              <CustomTextField
                fullWidth
                label="Email"
                variant="outlined"
                sx={{
                  width: "100%",
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Box sx={{ position: "relative" }}>
                <CustomTextField
                  fullWidth
                  label="Password"
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  sx={{
                    width: "100%",
                  }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <IconButton
                  onClick={handleTogglePassword}
                  sx={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </Box>
            </Box>
            <Typography align="center">
              Don't have an account?{" "}
              <Link
                to="/Sign Up"
                style={{
                  fontWeight: "bold",
                  textDecoration: "none",
                  margin: "1vh 0",
                }}
              >
                Sign Up
              </Link>
            </Typography>
            <Button
              variant="contained"
              onClick={handleSubmit}
              // disabled={!isFormFilled}
              fullWidth
              sx={{
                width: "100%",
                marginTop: "2vh",
                backgroundColor: "#884ED9",
                "&:hover": {
                  backgroundColor: "#6b38fb",
                },
              }}
            >
              Login
            </Button>
          </Paper>
        )}
      </Grid>
    </Grid>
  );
};

export default Login;
