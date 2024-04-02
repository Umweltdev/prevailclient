import { Accordion, Grid, Typography } from "@mui/material";
import React from "react";
import AccordionUsage from "./Accordion";

const Advantages = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        padding: "10vh",
        justifyContent: "center",
        alignItems: "top",
        gap: "4vw",
        background: "linear-gradient(45deg, #A16AD9 30%, #70A1E3 90%)",
        "@media (max-width: 600px)": {
          flexDirection: "column",
          padding: "3vh 0",
          width: "100%",
          alignItems: "center",
        }, 
      }}
    >
     
      <Grid>
        
        <Typography
          sx={{
            color: "white",
            fontSize: "3vw",
            fontWeight: "900",
            "@media (max-width: 600px)": {
              color: "white",
              fontSize: "7vw",
              fontWeight: "900",
              textAlign: "center",
            },
          }}
        >
          Solutions
        </Typography>

        <Typography
          sx={{
            width: "40vw",
            textAlign: "left",
            color: "white",
            lineHeight: "4vh",
            fontWeight: "900",
            "@media (max-width: 600px)": {
              width: "95vw",
              color: "white",
              lineHeight: "unset",
              fontWeight: "unset",
              textAlign: "center",
            },
          }}
        >
          That is where our "Digital Presence Accelerator" Launch Bundle comes
          in. It's not just a service; it's a strategic solution designed
          specifically for small and medium-sized enterprises (SMEs) and local
          businesses.
        </Typography>
      </Grid>
      <Grid>
        <AccordionUsage />
      </Grid>
    </Grid>
  );
};

export default Advantages;
