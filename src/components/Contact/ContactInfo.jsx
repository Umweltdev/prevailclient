import React from "react";
import {
  CallOutlined,
  EmailOutlined,
  PlaceOutlined,
} from "@mui/icons-material";
import { Box, CardMedia, Grid, Typography } from "@mui/material";
import icon1 from "./assets/announcement.svg";
import icon2 from "./assets/approve.svg";
import icon3 from "./assets/chat-bubble-user.svg";
import icon4 from "./assets/comment-alt-message.svg";

const contactData = [
  {
    icon: icon1,
    header: "Curiosity Drivens",
    detail:
      "At Prevail, our curiosity pushes the boundaries of digital marketing, aiming to achieve transformative results.",
  },
  {
    icon: icon2,
    header: "Bespoke Solutions",
    detail:
      "We are eager to explore custom solutions to help transform your business. ",
  },
  {
    icon: icon3,
    header: "Engagement Invitation",
    detail:
      "Reach out today to initiate a conversation that could redefine your brand's trajectory. ",
  },
  {
    icon: icon4,
    header: "Prompt Response",
    detail:
      "After submitting your query, one of our specialists will contact you to discuss how we can elevate your brand and streamline your marketing efforts. ",
  },
];

const ContactInfo = () => {
  return (
    <Box
      sx={{
        backgroud: "inherit",
        display: "flex",
        gap: "40px",
        flexDirection: "column",
        "@media (max-width: 600px)": {
          m: "30px auto 60px auto",
          width: "90vw",
        },
      }}
    >
      {contactData.map((data, i) => (
        <Grid sx={{ display: "flex", gap: "10px" }}>
          <Grid sx={{}}>
            <CardMedia
              component={"img"}
              image={data.icon}
              sx={{ width: "34px" }}
            />
          </Grid>
          <Grid>
            <Typography
              sx={{
                color: "#1D0D40",
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "160%",
              }}
            >
              {data.header}
            </Typography>
            <Typography
              sx={{
                width: "413px",
                color: "#505660",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "160%",
                "@media (max-width: 600px)": {
                  width: "75vw",
                },
              }}
            >
              {data.detail}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default ContactInfo;
