import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@mui/styles";
import image1 from './assets/image_137.png'; // Replace with your image path

const useStyles = makeStyles({
  mainImage: {
    width: "110%",
    height: "auto",
    maxHeight: "85vh", // Reduced height
    objectFit: "cover",
    borderRadius: "8px", // Reduced border-radius
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px",
  },
  imageContainer: {
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
});

const YourTools = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      sx={{
        padding: "10vh 0 0 0",
        width: "90vw",
        margin: "5vh auto",
        fontFamily: ["Sarabun", "sans-serif"].join(","),
        "@media (max-width: 600px)": { width: "95vw" },
      }}
      justifyContent="center"
    >
      <Grid
        container
        spacing={2}
        sx={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} md={6} className={classes.imageContainer}>
          <Box>
            <img src={image1} alt="Main" className={classes.mainImage} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              fontSize: "2.8vw",
              mb: "2vh",
              letterSpacing: "1px",
              color: "#800080",
              fontWeight: "900",
              "@media (max-width: 600px)": { fontSize: "6vw", textAlign: "center" },
            }}
          >
            Our Core Values
          </Typography>
          <Typography>
            At Prevail, our commitment to redefining the digital landscape for small-to-medium-sized enterprises (SMEs) is deeply embedded in our core values. These values not only guide our strategies and decisions but also help us build meaningful relationships with the businesses we serve.
          </Typography>
          <br /><br />
          <Box sx={{ width: '100%' }}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ fontWeight: 'bold' }}>Empowering Local Businesses</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  At Prevail, we recognise the unique challenges that local SMEs face in the current economic climate. We are deeply committed to empowering these businesses by equipping them with the tools and resources needed to compete against larger enterprises effectively.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ fontWeight: 'bold' }}>Innovative and Accessible Technology</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Our technology solutions are designed to be both innovative and accessible, ensuring that businesses of all sizes can leverage the latest advancements to drive success.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ fontWeight: 'bold' }}>Adaptive Business Strategies</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We provide tailored business strategies that adapt to the ever-changing market landscape, helping our clients stay ahead of the competition.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ fontWeight: 'bold' }}>Market Equity and Fair Competition</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Our approach ensures market equity and promotes fair competition, giving all businesses the opportunity to succeed on a level playing field.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default YourTools;
