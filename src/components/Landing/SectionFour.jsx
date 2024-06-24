import React from 'react';
import { Grid, Typography, Box, Container, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/system';
import img1 from "../Landing/assets/Intersect.svg";
import img2 from "../Landing/assets/Intersect2.svg";
import img3 from "../Landing/assets/Intersect3.svg";

const BackgroundContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(90deg, #40248E 0%, #6E3EF4 100%)',
  borderRadius: '10px',
  padding: '40px 20px',
  color: 'white',
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    padding: '20px 10px',
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  zIndex: 1,
  width: '17%',
  [theme.breakpoints.down('md')]: {
    width: '25%',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
}));

const SectionFour = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container>
      <BackgroundContainer>
        <ImageBox sx={{ bottom: '-2%', right: '18%' }}>
          <img src={img1} alt="Background Decoration 1" style={{ width: '100%' }} />
        </ImageBox>
        <ImageBox sx={{ bottom: '-1%', right: '3%' }}>
          <img src={img2} alt="Background Decoration 2" style={{ width: '100%' }} />
        </ImageBox>
        <ImageBox sx={{ bottom: '27%', right: '0%' }}>
          <img src={img3} alt="Background Decoration 3" style={{ width: '100%' }} />
        </ImageBox>
        <ContentBox>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                Elevate Your Brand with Prevail
              </Typography>
            </Grid>
            <Grid item sx={{ width: { xs: '100%', sm: '65%' } }}>
              <Typography variant="body1">
                Choose our Digital Accelerator Bundle Package and set the stage for a future-proof digital presence that is comprehensive, impactful, and cost-effective. Embrace the digital transformation designed to take your brand to new heights.
              </Typography>
            </Grid>
            {!isSmallScreen && (
              <Grid item>
                <Typography variant="body2" sx={{ fontWeight: 'bold', position: 'absolute', bottom: '10px', right: '10px' }}>
                  Prevail – Your Partner in Success
                </Typography>
              </Grid>
            )}
          </Grid>
        </ContentBox>
      </BackgroundContainer>
    </Container>
  );
};

export default SectionFour;
