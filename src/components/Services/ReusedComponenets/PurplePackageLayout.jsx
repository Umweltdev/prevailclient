import React from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { Check } from "@mui/icons-material";
import { StarterBrandIdentity } from "../assets/serviceData";
import { SEMPremiumPackage, SEMSilverPackage } from "../Sem/semData";

const PurplePackageLayout = ({ packages, amount, info, button, height }) => {
  return (
    <Card
      sx={{
        width: "23vw",
        height: height,
        // minHeight: "55vh",
        borderRadius: 4,
        boxShadow: "2",
        background: "#6E3EF4",
        color: "#fff",
        "@media (max-width: 600px)": {
          marginTop: "1vh",
          height: "40vh",
          width: "85vw",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
        },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1vh",
          padding: "3vw 0 ",
          "@media (max-width: 600px)": {
            padding: "5vh 2vh",
          },
        }}
      >
        <Box>
          <Typography
            textAlign="center"
            fontWeight="bold"
            sx={{ fontSize: "18px" }}
          >
            {packages}
          </Typography>
          <Typography
            sx={{ color: "#fff", fontSize: "16px", textAlign: "center" }}
          >
            {info}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            lineHeight: "-10",
          }}
        >
          {/* <Typography
            sx={{ color: "#000", fontSize: "40px", fontWeight: "700" }}
          >
            €{amount}
          </Typography> */}
          {/* <Typography sx={{ width: "88px", fontSize: "14px" }}>
            One Of Payment
          </Typography> */}
        </Box>
        <Button
          sx={{
            background: "#fff",
            borderRadius: "5px",
            color: "#6E3EF4",
            width: "220px",
            margin: "auto",
            "&:hover": {
              background: "#fff",
              borderRadius: "5px",
              color: "#6E3EF4",
            },
          }}
        >
          {button || "Make Payments"}
        </Button>

        {/* Render the StarterBrandIdentity items */}
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            mt: "30px",
            gap: "15px",
          }}
        >
          {SEMPremiumPackage.map((item, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                gap: "10px",
                marginLeft: "10px",
                justifyContent: "center",
              }}
            >
              <Check sx={{ color: "green" }} />
              <Typography
                textAlign="left"
                variant="body2"
                color="#fff"
                width={"222px"}
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PurplePackageLayout;
