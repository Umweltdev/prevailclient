import { Grid, TextareaAutosize, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  textArea: {
    width: "50vw",
    marginBottom: "3vh",
    fontSize: "1.1vw",
    padding: "0.5vw",
    "@media (max-width: 900px)": {
      width: "90vw",
      height: "10vh",
      fontSize: "4vw",
    },
  },
});

const FormTextArea = ({ label, label2, value, onChange, name }) => {
  const classes = useStyles();

  return (
    <Grid
      sx={{
        margin: "0 auto",
        width: "50vw",
        "@media (max-width: 900px)": {
          width: "90vw",
        },
      }}
    >
      <Typography>{label}</Typography>
      <Typography sx={{ mb: "1vh" }}>{label2}</Typography>
      <TextareaAutosize
        placeholder="Type here..."
        className={classes.textArea}
        minRows={6}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
      />
    </Grid>
  );
};

export default FormTextArea;
