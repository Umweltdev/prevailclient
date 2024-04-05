import { makeStyles } from "@mui/material/styles";
import "./assets/portfolio.css";
import { Grid, Typography } from "@mui/material";

const useStyles = makeStyles({
  mainContainer: {
    // backgroundImage:
    //   "url(https://images.unsplash.com/photo-1552152370-fb05b25ff17d?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",

    /* position: fixed; */
    backgroundRepeat: "no-repeat",
    height: "25vh",
    backgroundPosition: "center fixed",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  },

  heroTop: {
    paddingTop: "25vh",
  },

  hero: {
    fontSize: "5vw",
    textAlign: "center",
    fontWeight: "bold",
    color: "#884ed9",
  },
});

const SectionOne = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.mainContainer}>
      <Grid className={classes.heroTop}>
        {/* <Typography className={classes.hero}>Case Studies</Typography> */}
      </Grid>
    </Grid>
  );
};

export default SectionOne;
