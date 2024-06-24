import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
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
  width: '100px',
  height: '100px',
  [theme.breakpoints.down('sm')]: {
    width: '60px',
    height: '60px',
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
}));

const SectionFour = () => {
  return (
    <BackgroundContainer>
      <ImageBox
        sx={{
          bottom: '10px',
          right: '10px',
          backgroundImage: `url(${img1})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <ImageBox
        sx={{
          top: '10px',
          right: '50%',
          backgroundImage: `url(${img2})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <ImageBox
        sx={{
          bottom: '10px',
          left: '10px',
          backgroundImage: `url(${img3})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <ContentBox>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              Elevate Your Brand with Prevail
            </Typography>
          </Grid>
          <Grid item sx={{ width: '65%' }}>
            <Typography variant="body1">
              Choose our Digital Accelerator Bundle Package and set the stage for a future-proof digital presence that is comprehensive, impactful, and cost-effective. Embrace the digital transformation designed to take your brand to new heights.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" sx={{ fontWeight: 'bold', position: 'absolute', bottom: '10px', right: '10px' }}>
              Prevail – Your Partner in Success
            </Typography>
          </Grid>
        </Grid>
      </ContentBox>
    </BackgroundContainer>
  );
};

export default SectionFour;
