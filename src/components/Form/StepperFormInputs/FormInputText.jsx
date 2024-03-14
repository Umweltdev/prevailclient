import { Grid, TextField, Typography } from "@mui/material";
import React from "react";

const FormInputText = ({ label, name, labelInput }) => {
  return (
    <Grid sx={{ margin: "0 auto", marginBottom: "3vh" }}>
      <Typography sx={{ width: "50vw" }}>{label}</Typography>
      <TextField
        sx={{ width: "50vw" }}
        name={name}
        label={labelInput}
    
      />
    </Grid>
  );
};

export default FormInputText;
