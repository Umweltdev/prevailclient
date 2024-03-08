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
        <Typography
          sx={{
            fontSize: "2vw",
            fontWeight: "bold",
            "@media (max-width: 600px)": {
              fontSize: "5vw",
              fontWeight: "bold",
            },
          }}
        >
          {header}
        </Typography>
        <Typography
          sx={{
            fontSize: "1.4vw",
            textAlign: "justify",
            textJustify: "distribute",
            width: "40vw",
            "@media (max-width: 600px)": {
              fontSize: "4vw",
              width: "unset",
            },
          }}
          className={classes.input}
        >
          {text}
        </Typography>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "50ch" },
            marginTop: "3vh",
            "@media (max-width: 600px)": {
              width: "95vw",
              margin: "auto", // Center align the form on mobile screens
            },
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

              // Mobile
              "@media (max-width: 600px)": {
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                    height: "5vh",
                    width: "80vw",
                  },
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
                  fontSize: "3vw",
                },
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

              // Mobile
              "@media (max-width: 600px)": {
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                    height: "5vh",
                    width: "80vw",
                  },
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
                  fontSize: "3vw",
                },
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

              // Mobile
              "@media (max-width: 600px)": {
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                    height: "5vh",
                    width: "80vw",
                  },
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
                  fontSize: "3vw",
                },
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

              // Mobile
              "@media (max-width: 600px)": {
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                    height: "10vh",
                    width: "80vw",
                  },
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
                  fontSize: "3vw",
                },
              },
            }}
          />
          {/* <Grid sx={{ marginTop: "2vh" }}>
            <CustomizedButtons text="Submit"/>
          </Grid> */}
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <img src={img} alt="contact Image" style={{ width: "100%" }} />
      </Grid>
    </Grid>
  );
};

export default ComponentContact;
