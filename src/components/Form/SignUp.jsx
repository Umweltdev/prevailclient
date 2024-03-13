import React from "react";
import DrawerAppBarWhite from "../Navbar/Appbar";
import FooterNew from "../Footer/FooterNew";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Grid sx={{ margin: "20vh 0" }}>
      {/* <DrawerAppBarWhite /> */}
      <Grid
        xs
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          width: 800,
          "@media (max-width: 600px)": {
            width: "95vw",
            flexDirection: "column",
          },
        }}
      >
        <Typography sx={{ fontSize: "3vw", fontWeight: "bold" }}>
          Sign Up
        </Typography>
        <Box
          component="form"
          sx={{
            margin: 1,
            display: "flex",
            gap: "2vw",
            flexWrap: "wrap",
            "@media (max-width: 600px)": {
              flexDirection: "column",
            },
          }}
          noValidate
          autoComplete="on"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
        >
          <TextField
            sx={{
              width: "27vw",
              "@media (max-width: 600px)": {
                width: "90vw",
              },
            }}
            id="outlined-basic"
            label="First Name"
            variant="outlined"
          />
          <TextField
            sx={{
              width: "27vw",
              "@media (max-width: 600px)": {
                width: "90vw",
              },
            }}
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
          />
          <TextField
            sx={{
              width: "27vw",
              "@media (max-width: 600px)": {
                width: "90vw",
              },
            }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <TextField
            sx={{
              width: "27vw",
              "@media (max-width: 600px)": {
                width: "90vw",
              },
            }}
            id="outlined-basic"
            label="Phone"
            variant="outlined"
          />
          <TextField
            sx={{
              width: "27vw",
              "@media (max-width: 600px)": {
                width: "90vw",
              },
            }}
            id="outlined-basic"
            label="Location"
            variant="outlined"
          />
          <TextField
            sx={{
              width: "27vw",
              "@media (max-width: 600px)": {
                width: "90vw",
              },
            }}
            id="outlined-basic"
            label="Company Name"
            variant="outlined"
          />
          <TextField
            sx={{
              width: "27vw",
              "@media (max-width: 600px)": {
                width: "90vw",
              },
            }}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
          />
          <TextField
            sx={{
              width: "27vw",
              "@media (max-width: 600px)": {
                width: "90vw",
              },
            }}
            id="outlined-basic"
            label="Confirm Password"
            type="password"
            variant="outlined"
          />
        </Box>
        <Typography>
          You already have and accont?{" "}
          <Link
            to="/Login"
            style={{
              fontWeight: "bold",
              textDecoration: "none",
              margin: "1vh 0",
            }}
          >
            Login
          </Link>
        </Typography>
        <Link to="/Stepper">
          <Button
            variant="contained"
            sx={{
              width: "56vw",
              marginTop: "2vh",
              marginBottom: "15vh",
              backgroundColor: "#884ED9",

              "@media (max-width: 600px)": {
                width: "90vw",
              },
            }}
          >
            Sign Up
          </Button>
        </Link>
      </Grid>
      {/* <FooterNew /> */}
    </Grid>
  );
};

export default SignUp;
