import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import avatar from "./assets/av.png";
import { Button, Grid } from "@mui/material";
import { Circle } from "@mui/icons-material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function BlogCard({
  userImg,
  authorFirstName,
  header,
  img,
  date,
  category,
  gradient,
  like,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        width: "27vw",
        borderRadius: "1vw",
        boxShadow:
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;",
        padding: "1vw",
        margin: "10px",
        "@media (max-width: 600px)": {
          width: "90vw",
          margin: "2vh auto",
          borderRadius: "16px",
          padding: "1vh",
        },
      }}
    >
      <Typography
        sx={{
          padding: "2vh 0",
          fontWeight: "bold",
          fontSize: "1.1vw",
          wordSpacing: "-2px",
          "@media (max-width: 600px)": { padding: "2vh 0", fontSize: "4.5vw" },
        }}
      >
        {header}
      </Typography>
      <CardMedia
        component="img"
        image={img}
        alt={authorFirstName}
        sx={{
          height: "15vw",
          borderRadius: "1vw",
          "@media (max-width: 600px)": { height: "30vh", borderRadius: "1vh" },
        }}
      />
      <Grid sx={{ padding: "2.5vh 0 3vh 0" }}>
        <Grid
          sx={{
            // fontSize: "0.9vw",
            fontWeight: "700",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <Circle
            sx={{
              color: "#884ed9",
              fontSize: "1vw",
              "@media (max-width: 600px)": {
                color: "#884ed9",
                fontSize: "4vw",
              },
            }}
          />
          <Typography
            sx={{
              marginTop: "1vh",
              "@media (max-width: 600px)": {
                marginTop: "0.5vh",
              },
            }}
          >
            {category}
          </Typography>
        </Grid>

        <Grid>
          <Typography
            sx={{
              color: "#b4b4b4",
              fontSize: "0.9vw",
              "@media (max-width: 600px)": {
                fontSize: "3.5vw",
              },
            }}
          >
            {authorFirstName} | {date}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        sx={{ display: "flex", justifyContent: "space-between", mb: "1.5vh" }}
      >
        {/* <Grid sx={{ display: "flex" }}>
          <IconButton
            aria-label="add to favorites"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <FavoriteIcon /> <Typography variant="body2">{like}</Typography>
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </Grid> */}
        <Button
          variant="contained"
          sx={{
            background: "#884ed9",
            padding: "0.7vh 2vw",
            borderRadius: "5vw",
            color: "white",
            boxShadow: "none",
            textTransform: "capitalize",

            "@hover": {
              backgroundColor: "#884ed9",
            },
            "@media (max-width: 600px)": {
              background:
                gradient || "linear-gradient(45deg, #A16AD9 30%, #70A1E3 90%)",
              padding: "0.3vh 8vw",
              borderRadius: "5vw",
              color: "white",
              fontWeight: "unset",
            },
          }}
        >
          Read
        </Button>
      </Grid>
    </Card>
  );
}
