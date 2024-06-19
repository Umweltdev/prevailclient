import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Form from "./Form";
import ContactInfo from "./ContactInfo";

const MainPage = () => {
  return (
    <Grid
      sx={{
        pt: "158px",
        background: "linear-gradient(135deg, #F9FAFC, white);",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          textAlign: "center",
          width: "817px",
          margin: "0 auto",
        }}
      >
        <Typography
          sx={{ color: "#6E3EF4", fontSize: "24px", fontWeight: "400;" }}
        >
          Contact Us
        </Typography>
        <Typography
          sx={{ color: "#1D0D40", fontSize: "38px", fontWeight: 500 }}
        >
          Let You Brand Fly
        </Typography>
        <Typography
          sx={{ fontSize: "18px;", fontWeight: "400", color: "505660" }}
        >
          Fill out the form below and let us know how we can assist you. Whether
          you're interested in reshaping your brand identity, developing a
          cutting-edge website, or harnessing the power of advanced marketing
          technologies, our team is ready to help steer your next big leap
          forward. 
        </Typography>
      </Box>
      <Box
        sx={{
          //   height: "150vh",
        //   background: "#fff",
          py: "108px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "61px",
          "@media (max-width: 600px)": {
            flexDirection: "column",
            height: "unset",
          },
        }}
      >
        <Form />
        <ContactInfo />
      </Box>
    </Grid>
  );
};

export default MainPage;
