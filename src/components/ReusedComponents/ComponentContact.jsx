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
    padding: "8vw 2vw",
    // background: "linear-gradient(45deg, #A16AD9 30%, #70A1E3 90%)",
    background: "#884ed9",
    color: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // height: "100vh",
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },
  leftContainer: {
    "@media (max-width: 600px)": {
      width: "40vw",
      paddingRight: "unset",
    },
  },
  input: {
    marginBottom: "1rem",
  },

  image: {
    width: "43vw",
    objectFit: "cover",
    height: "600px",
    borderRadius: "1rem",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;",
    "@media (max-width: 600px)": {
      width: "85vw",
    },
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
            width: "40vw",
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
            fontSize: "1.3vw",
            textAlign: "justify",
            textJustify: "distribute",
            width: "40vw",
            "@media (max-width: 600px)": {
              fontSize: "4vw",
              width: "82vw",
              textAlign: "justify",
              textJustify: "distribute",
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
              // gap: "2vh",
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
                width: "40vw",
              },
              "& .MuiInputBase-input": {
                color: "white",
                fontSize: "1vw",
                textAlign: "center",
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
                    height: "5.5vh",
                    width: "80vw",
                  },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                },
                "& .MuiInputBase-input": {
                  color: "white",
                  fontSize: "1vw",
                  // margin: "0.3vh 0",
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
                width: "40vw",
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
                    height: "5.5vh",
                    width: "80vw",
                  },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                },
                "& .MuiInputBase-input": {
                  color: "white",
                  fontSize: "1vw",
                  margin: "0.3vh 0",
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
                width: "40vw",
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
                    height: "5.5vh",
                    width: "80vw",
                  },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                },
                "& .MuiInputBase-input": {
                  color: "white",
                  fontSize: "1vw",
                  margin: "0.3vh 0",
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
                width: "40vw",
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
                    height: "13vh",
                    width: "80vw",
                  },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                },
                "& .MuiInputBase-input": {
                  color: "white",
                  fontSize: "1vw",
                  height: "5.5vh",
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                  fontSize: "3vw",
                },
              },
            }}
          />
          <Button
            fullWidth={true}
            sx={{
              color: "white",
              textTransform: "capitalize",
              border: "1px solid white",
              minWidth: "40vw",
              marginLeft: "0.7vw",
              textAlign: "center",
              fontWeight: "900",
              transition: "background-color 0.5s ease-in-out",
              borderRadius: "25px",
              "&:hover": {
                // Corrected syntax for hover
                backgroundColor: "#fff", // Corrected property name
                color: "#884ed9",
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Grid>

      <img
        src={img}
        alt="contact Image"
        className={classes.image}
        // style={{ width: "100%" }}
      />
    </Grid>
  );
};

export default ComponentContact;
