import { Grid, Typography, Card, Button } from "@mui/material";
import React from "react";
import coke from "./assets/coke1.png";
import sprite from "./assets/sprite1.png";
import { Apple, Close } from "@mui/icons-material";

// const ColorButton = styled(Button)({
//   backgroundColor: "#884ed9",
//   color: "#fff",
//   padding: "0 3vw",
//   "&:hover": {
//     color: "#884ed9",
//   },
// });

const CardService = () => {
  return (
    <Grid sx={{ display: "flex", position: "relative" }}>
      {/* SECOND CARD */}
      <Card
        sx={{
          width: "22vw",
          height: "25vw",
          position: "relative",
          marginTop: "5vw",
          zIndex: 1,
          boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
        }}
      >
        <Grid sx={{ display: "flex", padding: "1vh", alignItems: "ju" }}>
          <Close sx={{ fontSize: "1.5vw", fontWeight: "bold" }} />{" "}
          <Typography sx={{ fontWeight: "bold" }}>Your Cart</Typography>
        </Grid>
        <Grid sx={{ border: "0.1vh solid #d3d3d3" }}></Grid>

        <Grid sx={{ padding: "2vh" }}>
          <Grid sx={{ display: "flex", gap: "2vh" }}>
            <Grid
              sx={{
                background: "#efe6f9",
                padding: "2vh",
                textAlign: "center",
                width: "20vw",
              }}
            >
              <Typography sx={{ fontSize: "0.8vw" }}>
                1x Invisible Shield
              </Typography>
              <Typography sx={{ fontSize: "0.8vw", color: "#4d4d4d" }}>
                $21.00
              </Typography>
              <img
                style={{
                  width: "3.5vw",
                }}
                src={coke}
                alt=""
              />
            </Grid>
            <Grid
              sx={{
                background: "#efe6f9",
                padding: "2vh",
                textAlign: "center",
                width: "20vw",
              }}
            >
              <Typography sx={{ fontSize: "0.8vw" }}>
                1x Invisible Shield
              </Typography>
              <Typography sx={{ fontSize: "0.8vw", color: "#4d4d4d" }}>
                $21.00
              </Typography>
              <img
                style={{
                  width: "3.5vw",
                }}
                src={sprite}
                alt=""
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid sx={{ border: "0.1vh solid #d3d3d3" }}></Grid>
        <Grid sx={{ padding: "1vh 1vw" }}>
          <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontWeight: "bold", fontSize: "1.1vw" }}>
              Estimated
            </Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: "1.1vw" }}>
              €37.00
            </Typography>
          </Grid>
          <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              size="small"
              sx={{
                backgroundColor: "#884ed9",
                color: "white",
                textTransform: "capitalize",
                padding: "1px 3vw",
                "&:hover": {
                  backgroundColor: "#7097da",
                },
              }}
            >
              <Apple sx={{ color: "white", fontSize: "0.9vw" }} /> Pay
            </Button>
            <Button
              size="small"
              sx={{
                color: "#884ed9",
                fontSize: "0.9vw",
                border: "1px solid #884ed9",
                padding: "0 2vw",
                // textTransform: "capitalize",
              }}
            >
              Checkout
            </Button>
          </Grid>
        </Grid>
      </Card>

      {/* SECOND CARD */}
      <Card
        sx={{
          width: "25vw",
          height: "20vw",
          position: "absolute",
          left: "10vw",
          top: "-10px",
          zIndex: 2,
          borderRadius: "1vw",
          boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px",
        }}
      >
        Pay
      </Card>
    </Grid>
  );
};

export default CardService;
