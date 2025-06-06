import { Card, Box, Grid, Typography } from '@mui/material';
import React from 'react';
import Iphone from '../components/Iphone';
import { Canvas } from '@react-three/fiber';
import { Button } from '@mui/material';
import { FaFilePdf } from "react-icons/fa6";
import CV from '../assets/cv.pdf'

const ContactMe = () => {
  return (
    <Card sx={{ p: 2 }} style={{ width: '80%', margin: '0 auto', backgroundColor: '#141e31', border: '1px solid #f7f1e8' }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          color: '#E1D7B7',
          fontFamily: 'Protest Guerrilla',
          fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
          mb: 3,
        }}
      >
        Get In Touch
      </Typography>

      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box sx={{ width: '100%', height: { xs: 300, sm: 400, md: 450 } }}>
            <Canvas className="r3f">
              <Iphone />
            </Canvas>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ px: { xs: 1, sm: 2 } }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'Sofadi One',
                mb: 2,
                color: '#E1D7B7',
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              }}
            >
              <span style={{ color: 'white' }}>Email: </span>
              ilman1amirul@gmail.com
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Sofadi One',
                mb: 2,
                color: '#E1D7B7',
                fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.15rem' },
              }}
            >
              <span style={{ color: 'white' }}>Github: </span>
              https://github.com/DevByAmirulilman
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontFamily: 'Sofadi One',
                color: '#E1D7B7',
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              }}
            >
              <span style={{ color: 'white' }}>Phone: </span>
              019-5756260
            </Typography>

          </Box>
          {/* <Button
            target="_blank"
            component="a"
            href={CV} 
            download="Amirul-Ilman-CV.pdf"
            startIcon={<FaFilePdf />}
            variant="contained"
            sx={{
              backgroundColor: '#E1D7B7',
              color: '#141e31',
              fontFamily: 'Protest Guerrilla',
              '&:hover': {
                backgroundColor: '#d6c79d',
              },
              fontSize: { xs: '0.8rem', sm: '1rem' },
              px: 3,
              py: 1,
              mt: 2,
            }}
          >
            Download CV
          </Button> */}

        </Grid>
      </Grid>
    </Card>
  );
};

export default ContactMe;
