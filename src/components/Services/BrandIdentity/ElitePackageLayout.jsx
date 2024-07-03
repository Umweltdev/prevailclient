import React from "react";
//import { EliteBrandIdentity, PremiumBrandIdentity } from "../";
import { EliteBrandIdentity, PremiumBrandIdentity } from "../assets/serviceData";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Check } from "@mui/icons-material";
import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const ElitePackageLayout = ({ packages, amount, info }) => {
  const { user } = useContext(AuthContext);

  return (
    <Card
      sx={{
        width: "23vw",
        borderRadius: 4,
        boxShadow: "2",
        background: "#6E3EF4",
        color: "white",
        height: "800px",
        "@media (max-width: 600px)": {
          marginTop: "1vh",
          height: "810px",
          width: "90vw",
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
          alignItems:"center",
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
            sx={{ color: "#ffff", fontSize: "16px", textAlign: "center" }}
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
          <Typography
            sx={{ color: "#fff", fontSize: "40px", fontWeight: "700" }}
          >
            Contact Us
          </Typography>
          {/* <Typography sx={{ width: "88px", fontSize: "14px" }}>
            One Off Payment
          </Typography> */}
        </Box>
        <Link to={user ? "/user/bookings" : "/contact-us"}>

        <Button
          sx={{
            background: "#ffff",
            borderRadius: "5px",
            color: "#6E3EF4",
            width: "220px",
            margin: "auto",
            "&:hover": {
              background: "#ffff",
              borderRadius: "5px",
              color: "#6E3EF4",
            },
          }}
        >
          Make Payments
        </Button>
       </Link>
        {/* Render the StarterBrandIdentity items */}
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            mt: "30px",
          }}
        >
          {EliteBrandIdentity.map((item, i) => (
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
                color="white"
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

export default ElitePackageLayout;
