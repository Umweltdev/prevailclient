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
        {/* <img
          style={{ width: "30vw" }}
          src="https://img.freepik.com/free-vector/ui-ux-designers-isometric-composition-with-small-people-creating-custom-design-web-site-3d-vector-illustration_1284-68939.jpg?t=st=1709736669~exp=1709740269~hmac=e49daffd87aa3d7a0df9f6d4b12d8760952a23f7fbf33869718cc687a9cc3ab5&w=1060"
          alt=""
        /> */}
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
