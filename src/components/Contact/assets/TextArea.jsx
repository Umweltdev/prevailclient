import PropTypes from "prop-types";
import { Box, TextField } from "@mui/material";

export const TextArea = ({ label, name, rows = 5 }) => {
  return (
    <Box
      sx={{
        "& .MuiTextField-root": {
          m: 1,
          width: "620px",
          "@media (max-width:600px)": {
            width: "85vw",
          },
        },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id={`${name}-textarea`}
        label={label}
        multiline
        rows={rows}
        variant="outlined"
        name={name}
        InputProps={{
          sx: {
            backgroundColor: "white",
          },
        }}
        InputLabelProps={{
          sx: {
            color: "gray",
          },
        }}
        fullWidth
      />
    </Box>
  );
};

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rows: PropTypes.number,
};
