import React from "react";

const FormSelect = () => {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={Select}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={10}>Yes</MenuItem>
        <MenuItem value={20}>No</MenuItem>
      </Select>
    </FormControl>
  );
};

export default FormSelect;
