import React from "react";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function ContactInput() {
  return (
    <Grid
      xs
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
        width: "80%",
        "@media (max-width: 600px)": {
          width: "95vw",
          flexDirection: "column",
        },
      }}
    >
      <Paper
        elevation={3}
        sx={{
          bgcolor: "white",
          borderRadius: "10px",
          width: "80%",
          padding: "2rem 3rem",
          marginTop: "2rem",
        }}
      >
        <Box
          component="form"
          sx={{
            margin: 1,
            display: "flex",
            gap: "2vw",
            flexWrap: "wrap",
            width: "100%",
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
              width: "445px",
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
              width: "440px",
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
              width: "445px",
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
              width: "440px",
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
              width: "445px",
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
              width: "440px",
              "@media (max-width: 600px)": {
                width: "90vw",
              },
            }}
            id="outlined-basic"
            label="Company Name"
            variant="outlined"
          />
        </Box>
        <TextField
          id="outlined-multiline-static"
          label="How can we help you"
          multiline
          rows={4}
          sx={{
            width: "100%",
            mt: "2vh",
          }}
          fullWidth
          variant="outlined"
        />
        <br /> <br />
        <Button
          variant="contained"
          sx={{
            width: "100%",
            marginTop: "2vh",
            marginBottom: "2vh",
            backgroundColor: "#884ED9",
          }}
        >
          Submit
        </Button>
      </Paper>
    </Grid>
  );
}
