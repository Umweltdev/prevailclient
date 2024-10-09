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
import { BlogCategory, blogBlurbs } from "./assets/blogData";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  imago: {
    width: "8vw",
    height: "5vw",
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

export default function BlogListSideCard() {
  const classes = useStyles();

  return (
    <Grid>
      {blogBlurbs.map((data, index) => (
        <Link
          to={`/blog/${index}`}
          rel="canonical"
          key={index}
          className="sOneBlogCardLink"
          style={{ textDecoration: "none" }}
        >
          <Card
            key={index}
            sx={{
              width: "27vw",
              display: "flex",
              justifyContent: "space-around",
              backgroundColor: "#e7ecef",
              margin: "auto",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              borderRadius: "0.5vw",
              padding: "2vh 0 0 0",
              marginTop: "2vh",
              "@media (max-width: 600px)": {
                display: "none",
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
                {data.category}
              </Typography>
              <Typography
                sx={{
                  // width: "10vw",
                  fontSize: "0.9vw",
                  color: "#333",
                  // textAlign: "justify",
                  // textJustify: "distribute",
                  // wordSpacing: "10px",
                  margin: "0 0 1vh 0",
                  "@media (max-width: 600px)": {
                    fontSize: "5vw",
                    textAlign: "center",
                    width: "90vw",
                  },
                }}
                color="text.secondary"
                gutterBottom
              >
                {data.header}
              </Typography>
              <Grid sx={{ "@media (max-width: 600px)": { margin: "auto" } }}>
                <Typography
                  sx={{
                    textTransform: "capitalize",
                    color: "#884ed9",
                    background: "#fff",
                    fontSize: "0.8vw",
                    borderRadius: "25px",
                    width: "12vw",
                    textAlign: "center",
                    padding: "0.6vh 0.7vw",
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
                  Date: {data.date}
                </Typography>
              </Grid>
            </CardContent>
            <CardContent>
              <img className={classes.imago} src={data.img} alt="image" />
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
        </Link>
      ))}
    </Grid>
  );
}
