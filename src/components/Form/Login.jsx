import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import DrawerAppBar from "../Navbar/Appbar";
import { Link } from "react-router-dom";
import FooterNew from "../Footer/FooterNew";

const Login = () => {
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
        <Typography
          sx={{
            fontSize: "3vw",
            fontWeight: "bold",
            textAlign: "center",
            "@media (max-width: 600px)": {
              fontSize: "4.5vh",
              flexDirection: "column",
            },
          }}
        >
          Login
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
              width: 500,
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
              width: 500,
              "@media (max-width: 600px)": {
                width: "90vw",
              },
            }}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
          />
        </Box>
        <Typography>
          You dont have account with us?{" "}
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
            width: 500,
            marginTop: "2vh",
            marginBottom: "15vh",
            backgroundColor: "#884ED9",

            "@media (max-width: 600px)": {
              width: "90vw",
            },
          }}
        >
          Login
        </Button>
      </Grid>
    </Grid>
  );
};

export default Login;
