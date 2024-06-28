import { Box, CardMedia } from "@mui/material";
import React from "react";
import imago from "./assets/digi.svg";

const EmpowerBussiness = () => {
  return (
    <Box sx={{ display: "flex", width: "100vw" }}>
      <CardMedia
        component={"img"}
        image={imago}
        sx={{ width: "50vw", height: "auto" }}
      />
      <CardMedia
        component={"img"}
        image={
          "https://img.freepik.com/premium-photo/successful-mature-asian-woman-entrepreneur-business-owner-felling-happy-while-looking-her-online-order-from-smartphone-online-selling-business-work-home-concept_126277-1490.jpg?w=900"
        }
        sx={{ width: "50vw", height: "auto" }}
      />
    </Box>
  );
};

export default EmpowerBussiness;
