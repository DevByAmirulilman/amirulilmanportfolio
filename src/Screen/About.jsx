import React, { useEffect, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import {
  Card, Typography, Box, Grid, ListItemIcon, ListItemText,
  ListItem, List, ListSubheader, Button
} from '@mui/material';
import BookCase from '../components/BookCase.jsx';
import { educations, backend, frontend } from '../assets/skills.js';

const CameraController = () => {
  const { camera, set } = useThree();
  useEffect(() => {
    camera.position.set(-4.7, 1.57, 1.8);
    camera.fov = 30.0;
    camera.near = 0.1;
    camera.far = 2000;
    camera.updateProjectionMatrix();
    set({ camera });
  }, [1.8, 1.57, -4.7, 30.0, 0.1, 2000, camera]);
  return null;
};

const About = () => {
  const [showing, setShowing] = useState({ title: 'Frontend', show: frontend });
  const [view] = useState('BookCase');

  const renderSkills = () => {
    if (Array.isArray(showing.show)) {
      return showing.show.map((skill) => (
        <ListItem key={skill.name} sx={{ color: '#E1D7B7' }}>
          <ListItemText
            primary={skill.name}
            primaryTypographyProps={{
              sx: {
                fontSize: {
                  xs: '0.75rem',
                  sm: '0.875rem',
                  md: '1rem',
                  lg: '1.125rem',
                },
              },
            }}
            secondary={skill.details}
            secondaryTypographyProps={{
              sx: {
                color: 'white',
                fontSize: {
                  xs: '0.625rem',
                  sm: '0.75rem',
                  md: '0.875rem',
                  lg: '1rem',
                },
              },
            }}
          />
          {skill.icon && (
            <ListItemIcon>
              {React.createElement(skill.icon, {
                style: {
                  color: skill.color,
                  fontSize: '1.25rem',
                },
                sx: {
                  fontSize: {
                    xs: '1.25rem',
                    sm: '1.5rem',
                    md: '1.75rem',
                    lg: '2rem',
                  },
                },
              })}
            </ListItemIcon>
          )}
        </ListItem>
      ));
    }
    return <Typography>No skills available</Typography>;
  };
  
  

  return (
    <Card sx={{ p: 2 }} style={{width:'80%',margin:'0 auto',backgroundColor:'#141e31'}}>
      <Grid container spacing={4} direction={{ xs: 'column', md: 'row' }} alignItems="flex-start">
        {/* About Me Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ px: { xs: 1, md: 2 }, color: '#1E2A5E' }}>
            <Typography
              variant="h4"
              sx={{
                color: '#E1D7B7',
                fontFamily: 'Protest Guerrilla',
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              About Me
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Sofadi One',
                mt: 2,
                textAlign: 'justify',
                fontSize: { xs: 14, sm: 16 },
                color: '#f4f4f4',
                lineHeight: 1.7,
              }}
            >
              I’m a passionate <span style={{ color: '#E1D7B7', fontFamily: 'Protest Guerrilla' }}>software developer</span> who takes joy in building and designing innovative solutions.
              In my personal time, I enjoy developing web applications using <span style={{ color: '#E1D7B7', fontFamily: 'Protest Guerrilla' }}>Javascript</span> mainly with <span style={{ color: '#E1D7B7', fontFamily: 'Protest Guerrilla' }}>React.js</span> for Front End and <span style={{ color: '#E1D7B7', fontFamily: 'Protest Guerrilla' }}>Node Js/Express Js</span> for Back End, creating immersive 3D websites with <span style={{ color: '#E1D7B7', fontFamily: 'Protest Guerrilla' }}>THREE.js</span>.
            </Typography>
          </Box>

          {/* Toggle Buttons */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: { xs: 'center', md: 'start' }, mt: 3 }}>
            {[
              { label: 'Frontend', value: frontend },
              { label: 'Backend', value: backend },
              { label: 'Education', value: educations },
            ].map(({ label, value }) => (
              <Button
                key={label}
                onClick={() => setShowing({ title: label, show: value })}
                sx={{
                  fontFamily: showing.title === label ? 'Protest Guerrilla' : 'Sofadi One',
                  backgroundColor: showing.title === label ? '#E1D7B7' : 'transparent',
                  color: showing.title === label ? '#141e31' : '#E1D7B7',
                  border: '1px solid #E1D7B7',
                  '&:hover': {
                    backgroundColor: '#E1D7B7',
                    color: '#141e31',
                  },
                }}
              >
                {label}
              </Button>
            ))}
          </Box>

          {/* Skills List */}
          <Box sx={{ mt: 3 }}>
            <List dense={false}>
              <ListSubheader sx={{ backgroundColor: '#1E2A5E', color: '#E1D7B7', fontFamily: 'Protest Guerrilla' }}>
                {showing.title}
              </ListSubheader>
              {renderSkills()}
            </List>
          </Box>
        </Grid>

        {/* 3D Canvas */}
        <Grid item xs={12} md={6}>
          <Box sx={{ width: '100%', height: { xs: 250, sm: 300, md: 400 } }}>
            <Canvas
              camera={{
                fov: 30.0,
                near: 0.1,
                far: 2000,
                position: [-4.7, 1.57, 1.8],
              }}
            >
              <CameraController
                zNumber={1.8}
                xNumber={-4.7}
                yNumber={1.57}
                fovNumber={30.0}
                nearNumber={0.1}
                farNumber={2000}
              />
              {view === 'BookCase' && <BookCase />}
            </Canvas>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default About;
