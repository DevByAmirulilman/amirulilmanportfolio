import { Card, Typography, Box, Button, ImageListItem, ImageListItemBar, ImageList, Grid } from '@mui/material';
import React, { useState } from 'react';
import { useControls } from 'leva';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import OldMan from '../components/OldMan';
import { allwork, myExp } from '../assets/allwork';

const MyWork = () => {
    const { zNumber, xNumber, yNumber, fovNumber, nearNumber, farNumber } = useControls({
        name: 'world',
        zNumber: 1.8,
        xNumber: -4.7,
        yNumber: 1.57,
        fovNumber: 30.00,
        nearNumber: 0.1,
        farNumber: 2000
    });

    const [showing, setShowing] = useState({ name: 'MyWork', data: allwork });

    const handleClick = (website) => {
        window.open(website, '_blank');
    };

    const renderAllWork = () => {
        if (Array.isArray(showing.data)) {
            return showing.data.map((skill) => (
                <ImageListItem
                    key={skill.title}
                    onClick={() => handleClick(skill.website)}
                    sx={{
                        cursor: 'pointer',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        '&:hover': {
                            transform: 'scale(1.05)',
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                        }
                    }}
                >
                    <img
                        srcSet={`${skill.image}?w=1008&fit=crop&auto=format&dpr=2`}
                        src={`${skill.image}?w=100&fit=crop&auto=format`}
                        alt={skill.title}
                        loading="lazy"
                        style={{ borderRadius: '8px' }}
                    />
                    <ImageListItemBar
                        title={skill.title}
                        subtitle={skill.description}
                        sx={{
                            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3))',
                        }}
                    />
                </ImageListItem>
            ));
        }
        return <Typography>No projects available</Typography>;
    };

    return (
        <Card sx={{ p: 2 }} style={{ width: '80%', margin: '0 auto', backgroundColor: '#141e31', border: '1px solid #f7f1e8' }}>
            <Typography
                variant="h4"
                sx={{
                    textAlign: 'center',
                    fontFamily: 'Protest Guerrilla',
                    color: '#E1D7B7',
                    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                }}
            >My Work & Experiences</Typography>
            <Box sx={{ width: '100%', height: 200, margin: '0 auto', p: 2 }}>
                <Canvas
                    camera={{
                        fov: fovNumber,
                        near: nearNumber,
                        far: farNumber,
                        position: [xNumber, yNumber, zNumber],
                    }}
                >
                    <PerspectiveCamera
                        fov={fovNumber}
                        near={nearNumber}
                        far={farNumber}
                    />
                    <OldMan showing={showing} />
                </Canvas>
            </Box>

            <Box sx={{ textAlign: 'center', p: 2 }}>
                <Button onClick={() => setShowing({ name: 'MyWork', data: allwork })}
                    sx={{
                        fontFamily: showing.name === 'MyWork' ? 'Protest Guerrilla' : 'Sofadi One',
                        backgroundColor: showing.name === 'MyWork' ? '#E1D7B7' : 'transparent',
                        color: showing.name === 'MyWork' ? '#141e31' : '#E1D7B7',
                        border: '1px solid #E1D7B7',
                        '&:hover': {
                            backgroundColor: '#E1D7B7',
                            color: '#141e31',
                        },
                    }}
                    variant='outlined'>My work</Button>
                <Button onClick={() => setShowing({ name: 'MyExp', data: myExp })}
                    sx={{
                        fontFamily: showing.name === 'MyExp' ? 'Protest Guerrilla' : 'Sofadi One',
                        backgroundColor: showing.name === 'MyExp' ? '#E1D7B7' : 'transparent',
                        color: showing.name === 'MyExp' ? '#141e31' : '#E1D7B7',
                        border: '1px solid #E1D7B7',
                        '&:hover': {
                            backgroundColor: '#E1D7B7',
                            color: '#141e31',
                        },
                    }}
                    variant='outlined'>My Experience</Button>
            </Box>

            {showing.name === 'MyWork' ?
                <ImageList
                    gap={16}
                    sx={{
                        padding: '20px',
                        gridTemplateColumns: {
                            xs: 'repeat(1, 1fr)',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(3, 1fr)',
                        },
                        display: 'grid',
                    }}
                >
                    {renderAllWork()}
                </ImageList>
                :
                <>
                    {
                        <Grid container spacing={2} sx={{ px: 2 }}>
                            {showing.data.map((resp, idx) => (
                                <Grid item xs={12} sm={6} md={6} key={idx}>
                                    <Card sx={{ p: 2, color: 'white', backgroundColor: '#141e31', border: '1px solid #f7f1e8' }}>
                                        <Typography>
                                            <span style={{ color: '#E1D7B7', fontFamily: 'Sofadi One' }}>Role: </span>
                                            {resp.role}
                                        </Typography>
                                        <Typography>
                                            <span style={{ color: '#E1D7B7', fontFamily: 'Sofadi One' }}>Company: </span>
                                            {resp.company}
                                        </Typography>
                                        <Typography>
                                            <span style={{ color: '#E1D7B7', fontFamily: 'Sofadi One' }}>Tech Stack Used: </span>
                                            {resp.stack}
                                        </Typography>
                                        <ul>
                                            {resp.work.map((res, i) => (
                                                <li key={i}>{res}</li>
                                            ))}
                                        </ul>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    }
                </>
            }
        </Card>
    );
}

export default MyWork;
