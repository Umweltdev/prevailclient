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
import React, {useState} from "react";
import axios from "axios";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    // try {
    //   const response = await axios.post(
    //     "https://us17.api.mailchimp.com/3.0/lists/c1ec5b1a7e/members",
    //     {
    //       email_address: email,
    //       status: "subscribed",
    //     },
    //     {
    //       headers: {
    //         Authorization: `Bearer 2bb4da1cc9bde65a263bc95dfdb9f4bd`,
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   console.log("Subscribed successfully!", response.data);
    // } catch (error) {
    //   console.error("Error subscribing:", error);
    // }
  };
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
                    onClick={handleSubmit}
                  >
                    Subscribe
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
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            <Button
              sx={{
                borderRadius: "25px",
                textAlign: "center",
                color: "white",
                margin: "auto",
                width: "90vw",
                padding: "10px 0",
                background: "#6E3EF4;",
                "&:hover": {
                  color: "#fff",
                  background: "#6E3EF4;",
                },
              }}
              onClick={handleSubmit}

            >
              Subscribe!
            </Button>
          </Grid>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default Subscribe;
