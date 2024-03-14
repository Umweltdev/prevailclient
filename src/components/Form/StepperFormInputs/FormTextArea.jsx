import { Grid, TextareaAutosize, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  textArea: {
    width: "50vw",
    marginBottom: "3vh",
  },
});

const FormTextArea = ({ label, label2 }) => {
  const classes = useStyles();

  return (
    <Grid sx={{ margin: "0 auto", width: "50vw" }}>
      <Typography >{label}</Typography>
      <Typography sx={{ mb: "1vh" }}>{label2}</Typography>
      <TextareaAutosize
        placeholder="Type here..."
        className={classes.textArea}
        minRows={6}
      />
    </Grid>
  );
};

export default FormTextArea;
