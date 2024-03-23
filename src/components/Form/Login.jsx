import React, { useState } from "react";
import { Box, Button, Grid, TextField, Typography, Paper, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import DrawerAppBar from "../Navbar/Appbar";
import FooterNew from "../Footer/FooterNew";

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

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Grid sx={{ margin: "30vh 0" }}>
      {/* <DrawerAppBar /> */}
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
      </Grid>
    </Grid>
  );
};

export default Login;
