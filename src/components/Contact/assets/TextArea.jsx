import { Box, TextField } from "@mui/material";

export const TextArea = ({ label }) => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {
          m: 1,
          width: "620.204px",
          "@media (max-width: 600px)": {
            width: "85vw",
          },
        },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label={label}
          multiline
          rows={5}
          variant="outlined"
          InputProps={{
            sx: {
              backgroundColor: "white", // Set input background to white
            },
          }}
          InputLabelProps={{
            sx: {
              color: "gray", // Optional: Customize label color if needed
            },
          }}
        />
      </div>
    </Box>
  );
};
