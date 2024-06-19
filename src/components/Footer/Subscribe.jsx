import { Visibility } from "@mui/icons-material";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React from "react";

const Subscribe = () => {
  return (
    <Grid
      sx={{
        height: "40vh",
        background: "#3E2162",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        "@media (max-width: 600px)": {
          flexDirection: "column",
          width: "100vw",
          height: "50vh",
          mt: "-12vh",
        },
      }}
    >
      <Grid sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Typography
          sx={{
            fontSize: "38px",
            fontWeight: "700",
            letterSpacing: "-0.38px",
            width: "594.07px",
            "@media (max-width: 600px)": {
              flexDirection: "column",
              width: "90vw",
              fontSize: "28px",
            },
          }}
        >
          Subscribe to our Newsletter
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "400",
            letterSpacing: "-0.38px",
            lineHeight: "160%",
            color: "#C1B2D5",
            "@media (max-width: 600px)": {
              flexDirection: "column",
              width: "90vw",
              fontSize: "14px",
            },
          }}
        >
          Follow our Newsletter to stay updated
        </Typography>
      </Grid>
      <Grid sx={{ color: "white", borderRadius: "25px" }}>
        <FormControl
          sx={{
            m: 1,
            width: "607.299px",
            height: "60px",
            color: "#656565",
            borderRadius: "25px",
            "@media (max-width: 600px)": {
              width: "90vw",
            },
          }}
          variant="outlined"
        >
          <InputLabel
            htmlFor="outlined-adornment-password"
            sx={{ color: "white" }}
          >
            Enter your email address
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" edge="end">
                  <Button
                    sx={{
                      color: "#fff",
                      background: "#6E3EF4;",
                      width: "144px",
                      borderRadius: "25px",
                      "@media (max-width: 600px)": {
                        display: "none",
                      },
                      "&:hover": {
                        color: "#fff",
                        background: "#6E3EF4;",
                      },
                    }}
                  >
                    Sign Up
                  </Button>
                </IconButton>
              </InputAdornment>
            }
            label="Enter your email address"
            sx={{
              borderRadius: "30px",
              "& .MuiOutlinedInput-input": {
                color: "#656565",
                borderRadius: "30px",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderRadius: "30px",
                borderColor: "#656565",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#656565",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#656565",
              },
            }}
          />
          <Grid
            sx={{
              display: "none",
              borderRadius: "25px",
              "@media (max-width: 600px)": {
                display: "block",
                margin: "10px 0 55px 0",
              },
            }}
          >
            <Button sx={{ borderRadius: "25px" }}>Sign Up</Button>
          </Grid>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default Subscribe;
