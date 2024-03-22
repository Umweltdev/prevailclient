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
        width: "26vw",
        borderRadius: "1vw",
        "@media (max-width: 600px)": { width: "93vw" },
        boxShadow:
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;",
        padding: "1vw",
      }}
    >
      <Typography
        sx={{
          padding: "2vh 0",
          // letterSpacing: "1px",
          // textAlign: "justify",
          // textJustify: "distribute",
          fontSize: "1.1vw",
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
        }}
      />
      <Grid sx={{padding: "2.5vh 0 3vh 0"}}>
        <Typography
          color="#333"
          sx={{ fontSize: "0.9vw" }}
        >
          {category}
        </Typography>

        <Grid>
          <Typography
            sx={{ fontSize: "1vw", color: "909090", fontSize: "0.9vw" }}
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
            background: "#7097da",
            padding: "0.7vh 2vw",
            borderRadius: "5vw",
            color: "white",
            boxShadow: "none",
            textTransform: "capitalize",
            // "&hover": {
            //   background: "#884ed9",
            // },
            "@media (max-width: 600px)": {
              background:
                gradient || "linear-gradient(45deg, #A16AD9 30%, #70A1E3 90%)",
              padding: "0.7vh 1vw",
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
