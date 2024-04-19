import { FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import React from "react";

const FormSelect = ({ label, value1, value2, value, onChange, name }) => {
  return (
    <Grid sx={{ margin: "0 auto", marginBottom: "3vh" }}>
      <Typography sx={{ width: "50vw" }}>{label}</Typography>
      <FormControl sx={{ margin: "1vh 0" }}>
        <InputLabel id="demo-simple-select-label">Select</InputLabel>
        <Select
          sx={{ width: "50vw" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Select"
          onChange={(e) => onChange(name, e.target.value)}
        >
          <MenuItem value={"Yes"}>{value1}</MenuItem>
          <MenuItem value={"No"}>{value2}</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
};

export default FormSelect;
