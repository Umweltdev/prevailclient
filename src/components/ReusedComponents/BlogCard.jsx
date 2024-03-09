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
import { Button } from "@mui/material";

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
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src={avatar} alt="" style={{ height: "50px" }} />
          </Avatar>
        }
        title={authorFirstName}
        subheader={date}
      />
      <CardMedia
        component="img"
        height="194"
        image={img}
        alt={authorFirstName}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {category}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {header}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Button
            variant="contained"
            sx={{
              background:'blue',
              padding: "0.7vh 2vw",
              borderRadius: "5vw",
              color: "white",
              fontWeight: "bold",
              "@media (max-width: 600px)": {
                background:
                  gradient ||
                  "linear-gradient(45deg, #A16AD9 30%, #70A1E3 90%)",
                padding: "0.7vh 1vw",
                borderRadius: "5vw",
                color: "white",
                fontWeight: "unset",
              },
            }}
          >
            Read
          </Button>
        </ExpandMore>
      </CardActions>
    </Card>
  );
}