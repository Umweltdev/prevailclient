import { Box, Grid, MenuItem, TextField, Typography } from "@mui/material";

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

const DigitalPresence = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid sx={{ width: "100%", marginBottom: "2vh" }}>
        <Typography
          sx={{ width: "80vw", marginTop: "1vh", fontSize: "4vw", mb: "1vh" }}
        >
          Do you currently have a website?
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
          If yes, please provide the website link and do you use a hosting
          platform (Shopify, Squarespace, Wix).
        </Typography>
        <TextField
          id="outlined-basic"
          label="Website Link"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid sx={{ width: "100%", marginBottom: "2vh" }}>
        <Typography
          sx={{ width: "80vw", marginTop: "1vh", fontSize: "4vw", mb: "1vh" }}
        >
          Do you have or need an e-commerce platform to sell products or
          services online?
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
          Who are your top competitors, and what aspects of their websites do
          you appreciate or dislike?
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

export default DigitalPresence;
