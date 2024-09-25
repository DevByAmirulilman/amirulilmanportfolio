import React, { Suspense, useState } from 'react';
import Styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageAnimation, textAnimation } from './animations.js';
import { Typography, Box, Grid, ListItemIcon, ListItemText, ListItem, List, ListSubheader, Button } from '@mui/material';
import { backend, educations, frontend } from '../assets/skills.js';
import BookCase from './Models/BookCase.jsx';
import { Canvas } from '@react-three/fiber';

function About() {
  const [showing, setShowing] = useState({ title: 'Frontend', show: frontend });

  const renderSkills = () => {
    if (Array.isArray(showing.show)) {
      return showing.show.map((skill) => (
        <ListItem key={skill.name} style={{ color: '#E1D7B7' }}>
          <ListItemText primary={skill.name} />
          {skill.details && <ListItemText style={{ color: '#E1D7B7' }} secondary={skill.details} />}
          {skill.icon && (
            <ListItemIcon style={{ color: '#1E2A5E' }}>
              {React.createElement(skill.icon)}
            </ListItemIcon>
          )}
        </ListItem>
      ));
    }
    return <Typography>No skills available</Typography>;
  };

  return (
    <StyledAbout
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <Grid container spacing={2}>
        {/* Text Section */}
        <Grid item xs={12} sm={6}>
          <motion.div className="about-border" variants={textAnimation}>
            <Box sx={{ textAlign: 'center', p: 2, color: '#1E2A5E' }}>
              <Typography variant="h3" sx={{ color: '#ae00ff', fontFamily: 'Protest Guerrilla', fontSize: { xs: '1.8rem', sm: '2.2rem' } }}>
                About Me
              </Typography>
              <Typography variant="h6" align="left" sx={{ fontFamily: 'Sofadi One', fontSize: { xs: '1rem', sm: '1.2rem' }, mt: 2 }}>
                I’m a passionate <span style={{ color:'#ae00ff', fontFamily: 'Protest Guerrilla' }}>software developer</span> who takes joy in building and designing innovative solutions. In my personal
                time, I enjoy developing web applications using <span style={{ color: '#ae00ff', fontFamily: 'Protest Guerrilla' }}>JavaScript</span> mainly using <span style={{ color: '#ae00ff', fontFamily: 'Protest Guerrilla' }}>React.js</span> for Front End and <span style={{ color: '#ae00ff', fontFamily: 'Protest Guerrilla' }}>Node.js/Express.js</span> for Back End, and creating immersive 3D websites with <span style={{ color: '#ae00ff', fontFamily: 'Protest Guerrilla' }}>THREE.js</span>. As a
                full-stack developer, I work across a range of technologies, from front-end frameworks to back-end systems.
              </Typography>
            </Box>

            {/* Buttons to toggle content */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <Button
                sx={showing.title === 'Frontend' ? { color: '#ae00ff', fontFamily: 'Protest Guerrilla' } : { color: '#1E2A5E', fontFamily: 'Sofadi One' }}
                onClick={() => setShowing({ title: 'Frontend', show: frontend })}
              >
                Frontend
              </Button>
              <Button
                sx={showing.title === 'Backend' ? { color: '#ae00ff', fontFamily: 'Protest Guerrilla' } : { color: '#1E2A5E', fontFamily: 'Sofadi One' }}
                onClick={() => setShowing({ title: 'Backend', show: backend })}
              >
                Backend
              </Button>
              <Button
                sx={showing.title === 'Education' ? { color: '#ae00ff', fontFamily: 'Protest Guerrilla' } : { color: '#1E2A5E', fontFamily: 'Sofadi One' }}
                onClick={() => setShowing({ title: 'Education', show: educations })}
              >
                Education
              </Button>
            </Box>

            {/* Skills Section */}
            <Box sx={{ width: '100%', m: '0 auto', p: 2 }}>
              <List dense={false}>
                <ListSubheader style={{ backgroundColor: '#1E2A5E', color: '#E1D7B7', fontFamily: 'Protest Guerrilla' }}>{showing.title}</ListSubheader>
                {renderSkills()}
              </List>
            </Box>
          </motion.div>
        </Grid>

        {/* 3D Canvas Section */}
        <Grid item xs={12} sm={6}>
          <Box sx={{ width: '100%', height: { xs: 300, sm: 400 }, mt: { xs: 0, sm: 0 } }}>
            <Canvas>
              <Suspense fallback={null}>
                <BookCase />
              </Suspense>
            </Canvas>
          </Box>
        </Grid>
      </Grid>
    </StyledAbout>
  );
}

const StyledAbout = Styled(motion.div)`
  width: 80%;
  margin: 0 auto;
  border: solid 1px #AE00FB;
  display: flex;
  color: #000000;
  border-radius: 1em;
  margin-top: 1em;
  font-size: 14px;

  @media (max-width: 668px) {
    font-size: 0.5em;
  }

  li {
    font-size: 1.3em;
  }

  .about-border {
    padding: 1em;
    border-radius: 20px;
  }

  span {
    color: #AE00FB;
  }
`;

export default About;
