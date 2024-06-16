import React from 'react';
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import face1 from './assets/Rectangle_196.png'; 
import face2 from './assets/Rectangle_200.png'; 
import face3 from './assets/pos.png'; 
import face4 from './assets/dm.png'; 
import face5 from './assets/dm.png'; 
import face6 from './assets/dm.png';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #d1c4e9, #ffffff, #bbdefb)',
        padding: '2rem',
      }}
    >
      <Container maxWidth="lg" sx={{ padding: '2rem' }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h1" component="h1" sx={{ fontSize: '3rem', lineHeight: 1.2, marginBottom: '1rem' }}>
              Your Partner in <br />
              Accelerating the <br />
              <span style={{ color: '#a889e1' }}>Digital space.</span>
            </Typography>
            <Typography variant="body1" sx={{ margin: '1rem 0', fontSize: '1.25rem', lineHeight: 1.5 }}>
              Prevail is a cutting-edge marketing agency specialising in redefining the way businesses.
            </Typography>
            <Button
              variant="contained"
              sx={{ 
                backgroundColor: '#450fad', 
                color: 'white', 
                textTransform: 'none',
                borderRadius: '50px',
                padding: '0.5rem 2rem',
                '&:hover': {
                  backgroundColor: '#3a0d96',
                },
              }}
              onClick={() => navigate('/get-started')}
            >
              Get started
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '200px' }}>
              {[face1, face2, face3, face4, face5, face6].map((face, index) => (
                <Box
                  key={index}
                  sx={{
                    width: '100px',
                    height: '100px',
                    borderRadius: index === 0 ? '25px' : '50%',
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img src={face} alt={`Face ${index + 1}`} style={{ width: '100%', height: '100%' }} />
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
