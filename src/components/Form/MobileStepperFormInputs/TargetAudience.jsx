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

const TargetAudience = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid sx={{ width: "100%", marginBottom: "2vh" }}>
        <Typography
          sx={{ width: "80vw", marginTop: "1vh", fontSize: "4vw", mb: "1vh" }}
        >
          Who are your primary customers or ideal customers?
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
          (a)Can you provide a breakdown of the percentage of male and female
          customers?
        </Typography>
        <Typography
          sx={{ width: "80vw", marginTop: "1vh", fontSize: "4vw", mb: "1vh" }}
        >
          (b)What is the age range of your target audience? customers?
        </Typography>
        <Typography
          sx={{ width: "80vw", marginTop: "1vh", fontSize: "4vw", mb: "1vh" }}
        >
          (c)What is your target audience's geographic location (country and
          region)?
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
          Do you have any existing customer data or insights that can help us
          understand your target audience better? (e.g., customer surveys, sales
          data, website analytics, CRM data)
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
          If so, please provide the data.
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
          Have you observed any specific behaviours or patterns among your
          customers?
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
          If yes, please provide details.
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
          Are you aware of any critical needs, desires, or pain points of your
          ideal customer that your establishment aims to address?
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
          If yes, please provide details.
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
          How does your ideal customer align with your business goals and
          objectives?
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

export default TargetAudience;
