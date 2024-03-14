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

const SearchOptimization = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid sx={{ width: "100%", marginBottom: "2vh" }}>
        <Typography
          sx={{ width: "80vw", marginTop: "1vh", fontSize: "4vw", mb: "1vh" }}
        >
          Have you conducted a Search Engine Optimisation (SEO) audit for your
          website?
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
          If yes, please provide the last audit date and critical findings.
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
          Are you actively managing your business profile on Google My Business
          and other search engines?
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
          What are the primary keywords or phrases you are ranked for or would
          like to rank for in search engine results?
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
          Have you utilised or are you considering paid advertising campaigns on
          SEO?
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
          If yes, please specify your budget and objectives.
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

export default SearchOptimization;
