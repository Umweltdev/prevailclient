import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import CustomizedHook from "../ReusedComponents/MultipleSelect";
import BasicButtons from "../ReusedComponents/Button";

export default function ContactInput() {
  return (
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
      </Box>
      <TextField
        id="outlined-multiline-static"
        label="How can we help you"
        multiline
        rows={4}
        //   defaultValue="Default Value"
        sx={{
          width: "56vw",
          mt: "2vh",
          "@media (max-width: 600px)": {
            width: "90vw",
          },
        }}
        fullWidth
      />
      <CustomizedHook />
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
        Submit
      </Button>
    </Grid>
  );
}