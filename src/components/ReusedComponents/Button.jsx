import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function BasicButtons({ text, gradient, width }) {
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (window.innerWidth <= 600) {
      navigate("/MobStepper");
    } else {
      navigate("/Stepper");
    }
  };
  return (
    <Stack>
      <Button
        onClick={handleSignUp}
        variant="contained"
        sx={{
          background:
            gradient || "linear-gradient(45deg, #A16AD9 30%, #70A1E3 90%)",
          padding: "2vh 2vw",
          borderRadius: "5vw",
          color: "white",
          fontWeight: "bold",
          // boxShadow:
          //   "0px 3px 5px -1px rgba(255,105,135,0.5), 0px 6px 10px 0px rgba(255,105,135,0.3), 0px 1px 18px 0px rgba(255,105,135,0.2)",

          "@media (max-width: 600px)": {
            padding: "0.5vh 6vw",
            borderRadius: "5vw",
            color: "white",
            fontWeight: "unset",
            fontSize: "3vw",
            boxShadow: "unset",
            textAlign: "center",
          },
        }}
      >
        {text}
      </Button>
    </Stack>
  );
}

export default BasicButtons;
