import { Button } from "@mui/material";
import React from "react";

const ReusedButton = ({ text }) => {
  return (
    <Button
      sx={{
        color: "#fff",
        background: "#6E3EF4",
        width: "144px",
        borderRadius: "5vw",
        "&:hover": {
          color: "#fff",
          background: "#6E3EF4",
          width: "144px",
        },
      }}
    >
      {text}
    </Button>
  );
};

export default ReusedButton;
