import { Box, Grid, MenuItem, TextField, Typography } from "@mui/material";
import React from "react";

const bool = [
  {
    value: "YES",
    label: "yes",
  },
  {
    value: "No",
    label: "no",
  },
];

const BrandOverview = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid sx={{ width: "100%", marginBottom: "2vh" }}>
        <Typography
          sx={{ width: "80vw", marginTop: "1vh", fontSize: "4vw", mb: "1vh" }}
        >
          Do you have any existing brand identity you want to retain or modify?
          (e.g., logo, colour scheme, font style)
        </Typography>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
          fullWidth
        >
          {bool.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid sx={{ width: "100%", marginBottom: "2vh" }}>
        <Typography
          sx={{ width: "80vw", marginTop: "1vh", fontSize: "4vw", mb: "1vh" }}
        >
          (a) If yes, please provide them below. (a) If you still need to,
          please provide examples of brands or designs that appeal to your
          vision.
        </Typography>
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Type here..."
          fullWidth
        />
      </Grid>

      <Grid sx={{ width: "100%", marginBottom: "2vh" }}>
        <Typography
          sx={{ width: "80vw", marginTop: "1vh", fontSize: "4vw", mb: "1vh" }}
        >
          How would you like your brand to be perceived by your target audience?
        </Typography>
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Type here..."
          fullWidth
        />
      </Grid>
      <Grid sx={{ width: "100%", marginBottom: "2vh" }}>
        <Typography
          sx={{ width: "80vw", marginTop: "1vh", fontSize: "4vw", mb: "1vh" }}
        >
          Are there any specific emotions or feelings you want your brand to
          evoke?
        </Typography>
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Type here..."
          fullWidth
        />
      </Grid>
    </Box>
  );
};

export default BrandOverview;
