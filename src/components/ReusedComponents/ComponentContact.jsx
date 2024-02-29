import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Grid,
  Typography,
  TextField,
  Button,
  TextareaAutosize,
  Box,
} from "@mui/material";
import CustomizedButtons from "./ReusedButton";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "2rem",
    background: "linear-gradient(45deg, #A16AD9 30%, #70A1E3 90%)",
    color: "white",
  },
  leftContainer: {
    paddingRight: "2rem",
  },
  input: {
    marginBottom: "1rem",
  },
}));

const ComponentContact = ({ header, text, img }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} md={6} className={classes.leftContainer}>
        <Typography variant="h4" gutterBottom>
          {header}
        </Typography>
        <Typography variant="body2" className={classes.input}>
          {text}
        </Typography>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "50ch" },
            marginTop: "3vh",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            sx={{
              color: "white",
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "white", height: "8vh" },
                "&:hover fieldset": { borderColor: "white" },
                "&.Mui-focused fieldset": { borderColor: "white" },
              },
              "& .MuiInputBase-input": {
                color: "white",
                fontSize: "1vw",
                // textAlign: "center",
              },
              "& .MuiInputLabel-root": {
                color: "white",
                fontSize: "1vw",
              },
            }}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{
              color: "white",
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "white", height: "8vh" },
                "&:hover fieldset": { borderColor: "white" },
                "&.Mui-focused fieldset": { borderColor: "white" },
              },
              "& .MuiInputBase-input": {
                color: "white",
                fontSize: "1vw",
                // textAlign: "center",
              },
              "& .MuiInputLabel-root": {
                color: "white",
                fontSize: "1vw",
              },
            }}
          />
          <TextField
            id="outlined-basic"
            label="Phone"
            variant="outlined"
            sx={{
              color: "white",
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "white", height: "8vh" },
                "&:hover fieldset": { borderColor: "white" },
                "&.Mui-focused fieldset": { borderColor: "white" },
              },
              "& .MuiInputBase-input": {
                color: "white",
                fontSize: "1vw",
                // textAlign: "center",
              },
              "& .MuiInputLabel-root": {
                color: "white",
                fontSize: "1vw",
              },
            }}
          />

          <TextField
            // className={classes.input}
            placeholder="How can we be of help?"
            label="How can we be of help"
            variant="outlined"
            multiline
            mb="2"
            rows={4}
            sx={{
              borderColor: "white",
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "white" },
                "&:hover fieldset": { borderColor: "white" },
                "&.Mui-focused fieldset": { borderColor: "white" },
              },
              "& .MuiInputBase-input": { color: "white", fontSize: "1vw" },
              "& .MuiInputLabel-root": {
                color: "white",
                fontSize: "1vw",
              },
            }}
          />
          <Grid sx={{ marginTop: "2vh" }}>
            <CustomizedButtons text="Submit"/>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <img src={img} alt="contact Image" style={{ width: "100%" }} />
      </Grid>
    </Grid>
  );
};

export default ComponentContact;
