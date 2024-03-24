import { Grid, Typography, Card, Button } from "@mui/material";
import React from "react";
import coke from "./assets/coke1.png";
import sprite from "./assets/sprite1.png";
import visa from "./assets/visa.png";
import face from "./assets/face.png";
import {
  Apple,
  ArrowForward,
  ArrowForwardIos,
  Close,
} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

// const ColorButton = styled(Button)({
//   backgroundColor: "#884ed9",
//   color: "#fff",
//   padding: "0 3vw",
//   "&:hover": {
//     color: "#884ed9",
//   },
// });

const useStyle = makeStyles({
  imago: {
    width: "3.5vw",
    "@media (max-width: 600px)": {
      width: "10vw",
    },
  },
  imagoTwo: {
    width: "2.4vw",
    "@media (max-width: 600px)": {
      width: "10vw",
    },
  },

  imagoThree: {
    width: "3vw",
    "@media (max-width: 600px)": {
      width: "10vw",
    },
  },
});

const CardService = () => {
  const classes = useStyle();
  return (
    <Grid
      sx={{
        display: "flex",
        position: "relative",
        margin: "0 auto",
        "@media (max-width: 600px)": {
          position: "unset",
          flexDirection: "column",
          gap: "3vw",
        },
      }}
    >
      {/* SECOND CARD */}
      <Card
        sx={{
          width: "22vw",
          height: "25vw",
          position: "relative",
          marginTop: "5vw",
          zIndex: 1,
          borderRadius: "0.7vw",
          boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
          "@media (max-width: 600px)": {
            width: "95vw",
            height: "37vh",
            left: 0,
            position: "unset",
            marginTop: "5vw",
            zIndex: 1,
            borderRadius: "0.7vw",
          },
        }}
      >
        <Grid
          sx={{
            display: "flex",
            padding: "1vh",
            "@media (max-width: 600px)": {},
          }}
        >
          <Close
            sx={{
              fontSize: "1.5vw",
              fontWeight: "bold",
              "@media (max-width: 600px)": { fontSize: "5vw" },
            }}
          />{" "}
          <Typography sx={{ fontWeight: "bold" }}>Your Cart</Typography>
        </Grid>
        <Grid sx={{ border: "0.1vh solid #d3d3d3" }}></Grid>

        <Grid
          sx={{
            padding: "2vh",
            "@media (max-width: 600px)": { padding: "1vh" },
          }}
        >
          <Grid
            sx={{
              display: "flex",
              gap: "2vh",
              "@media (max-width: 600px)": { gap: "1vh" },
            }}
          >
            <Grid
              sx={{
                background: "#efe6f9",
                padding: "2vh",
                textAlign: "center",
                width: "20vw",
                "@media (max-width: 600px)": {
                  padding: "2vh",
                  textAlign: "center",
                  width: "45vw",
                  height: "20vh",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.8vw",
                  "@media (max-width: 600px)": {
                    fontSize: "4vw",
                  },
                }}
              >
                1x Invisible Shield
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.8vw",
                  color: "#4d4d4d",
                  "@media (max-width: 600px)": {
                    fontSize: "3vw",
                  },
                }}
              >
                $21.00
              </Typography>
              <img className={classes.imago} src={coke} alt="" />
            </Grid>
            <Grid
              sx={{
                background: "#efe6f9",
                padding: "2vh",
                textAlign: "center",
                width: "20vw",
                "@media (max-width: 600px)": {
                  padding: "2vh",
                  textAlign: "center",
                  width: "45vw",
                  height: "20vh",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.8vw",
                  "@media (max-width: 600px)": {
                    fontSize: "4vw",
                  },
                }}
              >
                1x Invisible Shield
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.8vw",
                  color: "#4d4d4d",
                  "@media (max-width: 600px)": {
                    fontSize: "3vw",
                  },
                }}
              >
                $21.00
              </Typography>
              <img className={classes.imago} src={sprite} alt="" />
            </Grid>
          </Grid>
        </Grid>
        <Grid sx={{ border: "0.1vh solid #d3d3d3" }}></Grid>
        <Grid
          sx={{
            padding: "1vh 1vw",
            "@media (max-width: 600px)": {
              padding: "2vh 2vw",
            },
          }}
        >
          <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "1.1vw",
                "@media (max-width: 600px)": {
                  fontSize: "3vw",
                },
              }}
            >
              Estimated
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "1.1vw",
                "@media (max-width: 600px)": {
                  fontSize: "3vw",
                },
              }}
            >
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
                "@media (max-width: 600px)": {
                  fontSize: "3vw",
                  padding: "1px 10vw",
                  textAlign: "center",
                },
              }}
            >
              <Apple
                sx={{
                  color: "white",
                  fontSize: "0.9vw",
                  "@media (max-width: 600px)": {
                    fontSize: "4vw",
                  },
                }}
              />{" "}
              Pay
            </Button>
            <Button
              size="small"
              sx={{
                color: "#884ed9",
                fontSize: "0.9vw",
                border: "1px solid #884ed9",
                padding: "0 2vw",
                "@media (max-width: 600px)": {
                  fontSize: "3vw",
                  padding: "1px 10vw",
                },
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
          width: "29vw",
          // height: "21vw",
          position: "absolute",
          left: "12vw",
          top: "-10px",
          zIndex: 2,
          borderRadius: "0.7vw",
          boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px",
          "@media (max-width: 600px)": {
            width: "95vw",
            height: "30vh",
            left: 0,
            position: "unset",
            marginTop: "5vw",
            zIndex: 1,
            borderRadius: "0.7vw",
          },
        }}
      >
        <Grid>
          <Grid
            sx={{
              display: "flex",
              padding: "0.7vh",
              justifyContent: "space-between",
              alignItems: "center",
              "@media (max-width: 600px)": {
                padding: "1vh",
              },
            }}
          >
            <Grid sx={{ display: "flex" }}>
              <Apple
                sx={{
                  fontSize: "1.5vw",
                  color: "#4948484",
                  "@media (max-width: 600px)": {
                    fontSize: "5vw",
                  },
                }}
              />
              <Typography sx={{ fontWeight: "bold", color: "#4948484" }}>
                Pay
              </Typography>
            </Grid>
            <Button size="small" sx={{ textTransform: "capitalize" }}>
              Cancel
            </Button>
          </Grid>
          <Grid sx={{ border: "0.1vh solid #d3d3d3" }}></Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0.7vw",
              "@media (max-width: 600px)": {
                padding: "1vw",
              },
            }}
          >
            <img className={classes.imagoTwo} src={visa} alt="" />
            <Grid>
              <Typography
                sx={{
                  fontSize: "0.9vw",
                  color: "#636363",
                  "@media (max-width: 600px)": {
                    fontSize: "3vw",
                  },
                }}
              >
                ALLIED IRISH BANK(***1234)
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.9vw",
                  color: "#636363",
                  "@media (max-width: 600px)": {
                    fontSize: "3vw",
                  },
                }}
              >
                32 KELLY STREET DUBLIN 2 DO2 AF30
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.9vw",
                  color: "#636363",
                  "@media (max-width: 600px)": {
                    fontSize: "3vw",
                  },
                }}
              >
                IRELAND
              </Typography>
            </Grid>
            <ArrowForwardIos
              sx={{
                color: "#70a1e3",
                fontSize: "1vw",
                "@media (max-width: 600px)": {
                  fontSize: "4vw",
                },
              }}
            />
          </Grid>
          <Grid sx={{ border: "0.1vh solid #d3d3d3" }}></Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0.7vw",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.9vw",
                color: "#909090",
                width: "3vw",
                "@media (max-width: 600px)": {
                  fontSize: "3vw",
                  width: "9vw",
                },
              }}
            >
              CONTACT
            </Typography>
            <Grid>
              <Typography
                sx={{
                  fontSize: "0.9vw",
                  color: "#636363",
                  "@media (max-width: 600px)": {
                    fontSize: "3vw",
                  },
                }}
              >
                ALLIED IRISH BANK(***1234)
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.9vw",
                  color: "#636363",
                  "@media (max-width: 600px)": {
                    fontSize: "3vw",
                  },
                }}
              >
                32 KELLY STREET DUBLIN 2 DO2 AF30
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.9vw",
                  color: "#636363",
                  "@media (max-width: 600px)": {
                    fontSize: "3vw",
                  },
                }}
              >
                IRELAND
              </Typography>
            </Grid>
            <ArrowForwardIos
              sx={{
                color: "#70a1e3",
                fontSize: "1vw",
                "@media (max-width: 600px)": {
                  fontSize: "3vw",
                },
              }}
            />
          </Grid>
          <Grid sx={{ border: "0.1vh solid #d3d3d3" }}></Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0.7vw",
              "@media (max-width: 600px)": {
                justifyContent: "space-between",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "0.9vw",
                color: "#909090",
                marginLeft: "6.5vw",
                "@media (max-width: 600px)": {
                  fontSize: "3vw",
                  marginLeft: "unset",
                },
              }}
            >
              PAY TOTAL
            </Typography>
            <Typography
              sx={{
                fontSize: "0.9vw",
                color: "#909090",
                "@media (max-width: 600px)": {
                  fontSize: "3vw",
                },
              }}
            >
              €37.00
            </Typography>
          </Grid>
          <Grid sx={{ border: "0.1vh solid #d3d3d3" }}></Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "0.7vw",
              "@media (max-width: 600px)": {
                padding: "2vw",
              },
            }}
          >
            <img className={classes.imagoThree} src={face} alt="" />
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default CardService;
