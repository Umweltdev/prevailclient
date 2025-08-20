import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import PropTypes from "prop-types";

export default function BasicCard({ headerText, text, icon }) {
  return (
    <Card
      elevation={1}
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "4vh 2vw",
        borderRadius: "1.3vw",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        height: "40vh",
        "@media (max-width:600px)": {
          width: "95vw",
        },
      }}
    >
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        gap="1vw"
      >
        <Grid item>
          <Typography
            sx={{
              fontSize: { xs: "5vw", sm: "1.5vw" },
              fontWeight: "bold",
              mb: "1vh",
              color: "#ab63f3",
            }}
          >
            {headerText}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "4vw", sm: "1vw" },
              width: { xs: "unset", sm: "25vw" },
              textAlign: "justify",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "2vw",
              mb: "4vh",
            }}
          >
            {text}
          </Typography>
          <Button
            sx={{
              color: "white",
              backgroundColor: "#ab63f3",
              fontSize: { xs: "3vw", sm: "0.9vw" },
              width: { xs: "unset", sm: "10vw" },
              borderRadius: "35px",
              mt: "2vh",
              textAlign: "center",
            }}
            variant="contained"
          >
            Learn More
          </Button>
        </Grid>

        <Grid item>{icon}</Grid>
      </Grid>
    </Card>
  );
}

BasicCard.propTypes = {
  headerText: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.node,
};
