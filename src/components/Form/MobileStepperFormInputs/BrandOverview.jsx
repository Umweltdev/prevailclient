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
          Can you provide a list of competitors?
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
          What sets the company apart from competitors?
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
          Can you describe your typical customer? (demographic, geographic,
          psychographic, and behavioural traits)
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
          What problems does your business solve for prospects/customers?
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
          What is your unique selling point (USP) which sets you apart from your
          competitors?
        </Typography>
        <TextField
          id="outlined-multiline-static"
          label="Type here..."
          multiline
          rows={4}
          fullWidth
        />
      </Grid>
    </Box>
  );
};

export default BrandOverview;
