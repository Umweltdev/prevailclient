import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export const TextInput = ({
  value,
  onChange,
  placeholder,
  label,
  name,
  width,
  mobileWidth,
}) => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": {
          m: 1,
          width: width,
          "@media (max-width: 900px)": {
            width: mobileWidth,
          },
        },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
      />
    </Box>
  );
};

export const PasswordInput = ({
  label,
  value,
  onChange,
  name,
  width,
  mobileWidth,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl
      sx={{
        m: 1,
        width: width,
        "@media (max-width: 900px)": {
          width: mobileWidth,
        },
      }}
      variant="outlined"
    >
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        name={name}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      />
    </FormControl>
  );
};
