import { Grid, TextField, Typography } from "@mui/material";
import React from "react";

const FormInputText = ({ label, name, labelInput, value, onChange }) => {
  const handleChange = (e) => {
    console.log("Input value:", e.target.value); 
    onChange(name, e.target.value);
  };
  return (
    <Grid sx={{ margin: "0 auto", marginBottom: "3vh" }}>
      <Typography
        sx={{
          width: "50vw",
          "@media (max-width: 900px)": {
            width: "90vw",
          },
        }}
      >
        {label}
      </Typography>
      <TextField
        sx={{
          width: "50vw",
          "@media (max-width: 900px)": {
            width: "90vw",
          },
        }}
        name={name}
        label={labelInput}
        value={value}
        onChange={handleChange}
      />
    </Grid>
  );
};

export default FormInputText;
