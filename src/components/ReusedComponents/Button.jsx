import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function BasicButtons({ text, gradient, width }) {
  return (
    <Stack>
      <Button
        variant="contained"
        sx={{
          background:
            gradient || "linear-gradient(45deg, #A16AD9 30%, #70A1E3 90%)",
          padding: "2vh 2vw",
          borderRadius: "5vw",
          color: "white",
          fontWeight: "bold",
          boxShadow:
            "0px 3px 5px -1px rgba(255,105,135,0.5), 0px 6px 10px 0px rgba(255,105,135,0.3), 0px 1px 18px 0px rgba(255,105,135,0.2)",

          "@media (max-width: 600px)": {
            padding: "0.4vh 2vw",
            borderRadius: "5vw",
            color: "white",
            fontWeight: "unset",
            fontSize: "3vw"
          },
        }}
      >
        {text}
      </Button>
    </Stack>
  );
}

export default BasicButtons;
