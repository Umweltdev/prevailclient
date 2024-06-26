import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const InputDesign = ({ label, name }) => {
  return (
    <Box
      name={name}
      sx={{
        "& > :not(style)": {
          m: 1,
          width: "290.61px",
          "@media (max-width: 600px)": {
            width: "85vw",
          },
        },
      }}
      noValidate
      autoComplete="on"
    >
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        name={name}
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: "white", // Input background color
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "gray", // Border color
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#333", // Border color on hover
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#333", // Border color when focused
            },
          },
          "& .MuiInputLabel-root": {
            color: "#000929", // Label color
            "&.Mui-focused": {
              color: "#6E3EF4", // Label color when focused
            },
          },
        }}
      />
    </Box>
  );
};

export const LongInputDesign = ({ label, name }) => {
  return (
    <Box
      name={name}
      sx={{
        "& > :not(style)": {
          m: 1,
          width: "620.204px",
          "@media (max-width: 600px)": {
            width: "85vw",
          },
        },
      }}
      noValidate
      autoComplete="on"
    >
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        name={name}
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: "white", // Input background color
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "gray", // Border color
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#333", // Border color on hover
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#6E3EF4", // Border color when focused
            },
          },
          "& .MuiInputLabel-root": {
            color: "#000929", // Label color
            "&.Mui-focused": {
              color: "#6E3EF4", // Label color when focused
            },
          },
        }}
      />
    </Box>
  );
};
