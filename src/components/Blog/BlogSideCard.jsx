import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Favorite, Share } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  imago: {
    width: "50",
    height: "6vw",
    objectFit: "cover",
    borderRadius: "5px",
    "@media (max-width: 600px)": {
      width: "95vw",
      height: "46vw",
      objectFit: "cover",
      borderRadius: "5px",
    },
  },
});

export default function BlogSideCard({ header, category, img, date }) {
  const classes = useStyles();

  return (
    <Card
      sx={{
        minWidth: "30vw",
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#e7ecef",
        margin: "auto",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        borderRadius: "0.5vw",
        padding: "2.5vh 0 0 0",
        "@media (max-width: 600px)": {
          minWidth: "95vw",
          flexDirection: "column",
          alignItems: "center",
        },
      }}
    >
      <CardContent>
        <Typography
          sx={{
            fontSize: "1.2vw",
            fontWeight: "bold",
            color: "#333",
            "@media (max-width: 600px)": {
              fontSize: "5vw",
              textAlign: "center",
            },
          }}
          color="text.secondary"
          gutterBottom
        >
          {category}
        </Typography>
        <Typography
          sx={{
            width: "20vw",
            fontSize: "0.9vw",
            color: "#333",
            // textAlign: "justify",
            // textJustify: "distribute",
            // wordSpacing: "10px",
            margin: "0 0 2.5vh 0",
            "@media (max-width: 600px)": {
              fontSize: "5vw",
              textAlign: "center",
              width: "90vw",
            },
          }}
          color="text.secondary"
          gutterBottom
        >
          {header}
        </Typography>
        <Grid sx={{ "@media (max-width: 600px)": { margin: "auto" } }}>
          <Typography
            sx={{
              textTransform: "capitalize",
              color: "#884ed9",
              background: "#fff",
              fontSize: "0.9vw",
              borderRadius: "25px",
              width: "12vw",
              textAlign: "center",
              padding: "1vh 1vw",
              "@media (max-width: 600px)": {
                textTransform: "capitalize",
                color: "#884ed9",
                background: "#fff",
                fontSize: "3vw",
                borderRadius: "25px",
                width: "40vw",
                textAlign: "center",
                padding: "1vh 1vw",
                margin: "0 auto",
              },
            }}
          >
            Date: {date}
          </Typography>
        </Grid>
      </CardContent>
      <CardContent>
        <img className={classes.imago} src={img} alt="image" />
        <CardActions>
          <Share
            sx={{
              color: "#884ed9",
              // background: "#fff",
              fontSize: "2vw",
              padding: "5px",
              borderRadius: "50%",
              fontWeight: "100",
            }}
          />
          <Favorite
            sx={{
              color: "#884ed9",
              // background: "#fff",
              fontSize: "2vw",
              padding: "5px",
              borderRadius: "50%",
              fontWeight: "100",
            }}
          />
        </CardActions>
      </CardContent>
    </Card>
  );
}
