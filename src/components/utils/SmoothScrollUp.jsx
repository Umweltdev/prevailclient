import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, Grid } from "@mui/material";
import React from "react";

const SmoothScrollUp = () => {
  const scrollToTop = () => {
    const duration = 2000;
    const start = window.pageYOffset;
    const startTime =
      "now" in window.performance ? performance.now() : new Date().getTime();

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animateScroll = () => {
      const currentTime =
        "now" in window.performance ? performance.now() : new Date().getTime();
      const elapsed = currentTime - startTime;

      window.scrollTo(0, easeInOutQuad(elapsed, start, -start, duration));

      if (elapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    animateScroll();
  };

  return (
    <Grid
      sx={{
        position: "fixed",
        left: "90vw",
        bottom: "10vh",

        "@media (max-width: 767px)": {
          left: "80vw",
          bottom: "7vh",
        },
      }}
    >
      <Fab
        sx={{
          background: "#6E3EF4",
          color: "#fff",
          "&:hover": { background: "#6E3EF4", color: "#fff" },
        }}
        onClick={scrollToTop}
      >
        <KeyboardArrowUp />
      </Fab>
    </Grid>
  );
};

export default SmoothScrollUp;
