import {
  Card,
  Typography,
  Box,
  Button,
  Grid,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import OldMan from '../components/OldMan';
import { allwork, myExp } from '../assets/allwork';
import { animate, stagger } from 'animejs';
import GithubComponent from '../components/GithubComponent';

const MyWork = () => {
  const [showing, setShowing] = useState({ name: 'MyWork', data: allwork });

  useEffect(() => {
    if (showing.name === 'MyExp') {
      const cards = document.querySelectorAll('.exp-card');
      animate(cards, {
        opacity: [0, 1],
        translateY: ['20px', '0px'],
        scale: [0.95, 1],
        delay: stagger(120),
        duration: 800,
        easing: 'easeOutBack',
      });
    }

    if (showing.name === 'MyWork') {
      const thumbnails = document.querySelectorAll('.work-card');
      animate(thumbnails, {
        opacity: [0, 1],
        scale: [0.9, 1],
        translateY: ['10px', '0px'],
        delay: stagger(100),
        duration: 600,
        easing: 'easeOutQuart',
      });
    }
  }, [showing]);

  const handleClick = (website) => {
    window.open(website, '_blank');
  };

  const renderAllWork = () => {
    if (Array.isArray(showing.data)) {
      return showing.data.map((skill) => (
        <ImageListItem
          className="work-card"
          key={skill.title}
          onClick={() => handleClick(skill.website)}
          sx={{
            cursor: 'pointer',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            borderRadius: 2,
            transition: 'transform 0.2s, box-shadow 0.2s',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          <Box sx={{ width: '100%', height: 200, position: 'relative' }}>
            <img
              srcSet={`${skill.image}?w=300&h=200&fit=crop&auto=format&dpr=2`}
              src={`${skill.image}?w=300&h=200&fit=crop&auto=format`}
              alt={skill.title}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px',
                display: 'block',
              }}
            />
            <ImageListItemBar
              title={skill.title}
              subtitle={skill.description}
              sx={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3))',
              }}
            />
          </Box>
        </ImageListItem>
      ));
    }

    return [<Typography key="no-data">No projects available</Typography>];
  };

  return (
    <Card
      sx={{
        p: 2,
        mx: 'auto',
        my: 4,
        maxWidth: '1200px',
        width: '95%',
        backgroundColor: '#141e31',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          fontFamily: 'Protest Guerrilla',
          color: '#E1D7B7',
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
        }}
      >
        My Work & Experiences
      </Typography>



      {/* GitHub Contribution Calendar */}\
      <Box >
        <GithubComponent />
      </Box>

      {/* Work/Experience Toggle Buttons */}
      <Box
        sx={{
          textAlign: 'center',
          p: 2,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        <Button
          onClick={() => setShowing({ name: 'MyWork', data: allwork })}
          sx={{
            fontFamily: showing.name === 'MyWork' ? 'Protest Guerrilla' : 'Sofadi One',
            backgroundColor: showing.name === 'MyWork' ? '#E1D7B7' : 'transparent',
            color: showing.name === 'MyWork' ? '#141e31' : '#E1D7B7',
            border: '1px solid #E1D7B7',
            textTransform: 'none',
            minWidth: 180,
            minHeight: 48,
            '&:hover': {
              backgroundColor: '#E1D7B7',
              color: '#141e31',
            },
          }}
          variant="outlined"
        >
          My Personal Work
        </Button>

        <Button
          onClick={() => setShowing({ name: 'MyExp', data: myExp })}
          sx={{
            fontFamily: showing.name === 'MyExp' ? 'Protest Guerrilla' : 'Sofadi One',
            backgroundColor: showing.name === 'MyExp' ? '#E1D7B7' : 'transparent',
            color: showing.name === 'MyExp' ? '#141e31' : '#E1D7B7',
            border: '1px solid #E1D7B7',
            textTransform: 'none',
            minWidth: 180,
            minHeight: 48,
            '&:hover': {
              backgroundColor: '#E1D7B7',
              color: '#141e31',
            },
          }}
          variant="outlined"
        >
          My Experience
        </Button>
      </Box>

      {/* Content Grid */}
      {showing.name === 'MyWork' ? (
        <Grid container spacing={2} sx={{ px: 2 }}>
          {renderAllWork().map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ height: 250 }}>
              {item}
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container spacing={2} sx={{ px: 2 }}>
          {showing.data.map((resp, idx) => (
            <Grid item xs={12} sm={6} md={6} key={idx}>
              <Card
                className="exp-card"
                sx={{
                  p: 2,
                  color: 'white',
                  backgroundColor: '#141e31',
                  border: '1px solid #f7f1e8',
                  opacity: 0,
                }}
              >
                <Typography sx={{ mb: 1 }}>
                  <span style={{ color: '#E1D7B7', fontFamily: 'Sofadi One', fontWeight: 600 }}>
                    Role:{' '}
                  </span>
                  {resp.role}
                </Typography>
                <Typography sx={{ mb: 1 }}>
                  <span style={{ color: '#E1D7B7', fontFamily: 'Sofadi One', fontWeight: 600 }}>
                    Company:{' '}
                  </span>
                  {resp.company}
                </Typography>
                <Typography sx={{ mb: 1 }}>
                  <span style={{ color: '#E1D7B7', fontFamily: 'Sofadi One', fontWeight: 600 }}>
                    Tech Stack Used:{' '}
                  </span>
                  {resp.stack}
                </Typography>
                <Box component="ul" sx={{ pl: 3, mt: 1 }}>
                  {resp.work.map((res, i) => (
                    <li key={i}>{res}</li>
                  ))}
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Card>
  );
};

export default MyWork;
