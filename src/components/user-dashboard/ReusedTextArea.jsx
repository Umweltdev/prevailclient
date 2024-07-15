import { TextField } from "@mui/material";
import React from "react";

const ReusedTextArea = ({
  value,
  onBlur,
  onChange,
  name,
  error,
  helperText,
  label
}) => {
  return (
    <TextField
      id="outlined-multiline-static"
      label={label}
      multiline
      rows={4}
      defaultValue={value}
      onBlur={onBlur}
      onChange={onChange}
      name={name}
      error={error}
      helperText={helperText}
      sx={{width: "390px"}}
    />
  );
};

export default ReusedTextArea;
