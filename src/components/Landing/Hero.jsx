import React from 'react';
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import face1 from './assets/Rectangle_196.png'; 
import face2 from './assets/Rectangle_200.png'; 
import face3 from './assets/Rectangle_201.png'; 
import face4 from './assets/Rectangle_202.png'; 
import face5 from './assets/Ellipse_8.png'; 
import face6 from './assets/Rectangle_204.png';
import face7 from './assets/image_147.png';
import face8 from './assets/Unionup.png';
import face9 from './assets/Union.png';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #d1c4e9, #ffffff, #bbdefb)",
        padding: "2rem",
        mt: "-50px",
        "@media (max-width: 767px)": {
          padding: "0",
          height: "unset",
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          padding: "3rem",
          "@media (max-width: 767px)": {
            padding: "1rem",
          },
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7.5}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: "5rem",
                lineHeight: 1.2,
                marginBottom: "1.5rem",
                "@media (max-width: 767px)": {
                  fontSize: "40px",
                  lineHeight: "unset",
                  marginBottom: "unset",
                  fontWeight: "500",
                  mt: "168px",
                },
              }}
            >
              Your Partner in <br />
              Accelerating the <br />
              <span
                style={{
                  color: "#a889e1",
                  "@media (max-width: 767px)": {
                    fontSize: "35px",
                    lineHeight: "unset",
                    marginBottom: "unset",
                    fontWeight: "500",
                    mt: "35vh",
                  },
                }}
              >
                Digital space.
              </span>
            </Typography>
            <Typography
              variant="body1"
              sx={{ margin: "1rem 0", fontSize: "1.25rem", lineHeight: 1.5 }}
            >
              Prevail is a cutting-edge marketing agency specialising in
              redefining the way businesses.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#450fad",
                color: "white",
                textTransform: "none",
                borderRadius: "50px",
                padding: "0.5rem 2rem",
                "&:hover": {
                  backgroundColor: "#3a0d96",
                },
              }}
              onClick={() => navigate("/get-started")}
            >
              Get started
            </Button>
          </Grid>
          <Grid item xs={12} md={4.5}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                width: "280px",
                "@media (max-width: 767px)": {
                  margin: "auto"
                },
              }}
            >
              {[face1, face2, face3, face4, face5, face6, face7].map(
                (face, index) => (
                  <Box
                    key={index}
                    sx={{
                      //👩🏻‍💻
                      width:
                        index === 0
                          ? "170px"
                          : index === 1
                          ? "110px"
                          : index === 2
                          ? "125px"
                          : index === 3
                          ? "155px"
                          : index === 4
                          ? "110px"
                          : index === 5
                          ? "85px"
                          : index === 6
                          ? "85px"
                          : "140px",
                      height: "110px",
                      borderRadius:
                        index === 0 || index === 2 || index === 3
                          ? "25px"
                          : index === 5 || index === 6
                          ? "50% / 25%"
                          : "50%", // Vertical ellipse for face6 and face7
                      overflow: "hidden",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={face}
                      alt={`Face ${index + 1}`}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Box>
                )
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
