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

const companyInfo = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid sx={{ width: "100%", marginBottom: "2vh" }}>
        <Typography
          sx={{ width: "80vw", marginTop: "1vh", fontSize: "4vw", mb: "1vh" }}
        >
          Why was it founded? What is the story behind the business?
        </Typography>
        <TextField
          id="outlined-multiline-static"
          label="Type here..."
          multiline
          rows={4}
          fullWidth
        />
      </Grid>
      <Grid sx={{ width: "100%", marginBottom: "2vh" }}>
        <Typography
          sx={{ width: "80vw", marginTop: "1vh", fontSize: "4vw", mb: "1vh" }}
        >
          What is the industry/sector?
        </Typography>
        <TextField
          id="outlined-basic"
          label="industry/sector?"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid sx={{ width: "100%", marginBottom: "2vh" }}>
        <Typography
          sx={{ width: "80vw", marginTop: "1vh", fontSize: "4vw", mb: "1vh" }}
        >
          Does the company have a mission statement or core values?
        </Typography>
        <TextField
          id="outlined-multiline-static"
          label="Type here..."
          multiline
          rows={4}
          fullWidth
        />
      </Grid>
      <Grid sx={{ width: "100%", marginBottom: "2vh" }}>
        <Typography
          sx={{ width: "80vw", marginTop: "1vh", fontSize: "4vw", mb: "1vh" }}
        >
          Briefly describe the company in a few sentences.
        </Typography>
        <TextField
          id="outlined-multiline-static"
          label="Type here..."
          multiline
          rows={4}
          fullWidth
        />
      </Grid>
      <Grid sx={{ width: "100%", marginBottom: "2vh" }}>
        <Typography
          sx={{ width: "80vw", marginTop: "1vh", fontSize: "4vw", mb: "1vh" }}
        >
          What are some of the goals/objectives? (increase revenue, increase
          profit, improve my ROI, get more conversions, lower my acquisition
          cost, other)
        </Typography>
        <TextField
          id="outlined-multiline-static"
          label="Type here..."
          multiline
          rows={4}
          fullWidth
        />
      </Grid>
      <Grid sx={{ width: "100%", marginBottom: "2vh" }}>
        <Typography
          sx={{ width: "80vw", marginTop: "1vh", fontSize: "4vw", mb: "1vh" }}
        >
          What is the vision for the company in the future? (For example, in 2
          years+)
        </Typography>
        <TextField
          id="outlined-multiline-static"
          label="Business Overview"
          multiline
          rows={4}
          defaultValue="Type here..."
          fullWidth
        />
      </Grid>
    </Box>
  );
};

export default companyInfo;
