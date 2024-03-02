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
      width={800}
      display="flex"
      justifyContent="center"
      alignItems="center"
      margin="0 auto"
    >
      <Box
        component="form"
        sx={{ margin: 1, display: "flex", gap: "2vw", flexWrap: "wrap" }}
        noValidate
        autoComplete="on"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        <TextField
          sx={{ width: "27vw" }}
          id="outlined-basic"
          label="First Name"
          variant="outlined"
        />
        <TextField
          sx={{ width: "27vw" }}
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
        />
        <TextField
          sx={{ width: "27vw" }}
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <TextField
          sx={{ width: "27vw" }}
          id="outlined-basic"
          label="Phone"
          variant="outlined"
        />
        <TextField
          sx={{ width: "27vw" }}
          id="outlined-basic"
          label="Location"
          variant="outlined"
        />
        <TextField
          sx={{ width: "27vw" }}
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
        sx={{ width: "56vw", mt: "2vh" }}
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
        }}
      >
        Submit
      </Button>
    </Grid>
  );
}
