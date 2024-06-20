import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box
      sx={{
        background: "#180D30",
        height: "110vh",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          width: "900px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          mt: "188px",
        }}
      >
        <Typography
          sx={{
            color: "#C7B1F7",
            fontSize: "24px",
            fontWeight: "400",
            lineHeight: "110%",
            letterSpacing: "-0.24px",
          }}
        >
          Blog
        </Typography>
        <Typography
          sx={{
            fontSize: "38px",
            fontWeight: "500",
            lineHeight: "110%",
            letterSpacing: "-0.24px",
          }}
        >
          Articles and resources on prevail
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "400",
            letterSpacing: "-0.24px",
          }}
        >
          In a word where economic fluctuations often diminish the purchasing
          power of individuals and small businesses alike, rising interest rates
          and unpredictable consumer demands pose substantial challenges.
          Small-to-medium-sized enterprises (SMEs) and local businesses
          frequently find themselves battling to maintain relevance in a
          marketplace where larger entities, armed with vast resources and
          advanced technological tools, dominate. This daunting scenario is the
          very challenge that fuels Prevail’s commitment and innovative
          approach. 
        </Typography>
      </Box>
      <CardMedia
        sx={{
          width: "80vw",
          height: "70vh",
          margin: "auto",
          bottom: "-10vh",
          position: "relative",
          borderRadius: "14px",
        }}
        component={"img"}
        image="https://img.freepik.com/free-photo/excited-business-colleagues_74855-1825.jpg?t=st=1718867497~exp=1718871097~hmac=dfc4fb0f91d7ce371a9513fb2127a9df2c9a07ded3f5e5e058f920f68de7f92f&w=900"
      />
    </Box>
  );
};

export default Header;
