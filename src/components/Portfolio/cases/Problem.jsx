import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AccordionCase from "./Accordion";

const useStyles = makeStyles({
  image: {
    width: "40vw",
    "@media (max-width: 600px)": {
      width: "90vw",
    },
  },
});

const Problem = () => {
  const classes = useStyles();

  
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "5vw",
        padding: "5vw",
        "@media (max-width: 600px)": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "5vw",
          padding: "5vw",
        },
      }}
    >
      <Grid>
        <Typography
          sx={{
            fontSize: "3vw",
            fontWeight: "bold",
            "@media (max-width: 600px)": {
              fontSize: "4.5vh",
              fontWeight: "bold",
            },
          }}
        >
          Challenges Faced
        </Typography>
        <Grid
          sx={{
            background: "linear-gradient(45deg, #A16AD9 30%, #70A1E3 90%)",
            height: "0.8vh",
            width: "10vw",
            margin: "3vh 0",
          }}
        ></Grid>
        <AccordionCase />
      </Grid>

      <Grid>
        <img
          className={classes.image}
          src="https://saltmarketing.ie/wp-content/uploads/navan-8.png"
          alt=""
        />
      </Grid>
    </Grid>
  );
};

export default Problem;
