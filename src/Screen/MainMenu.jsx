import React, { useEffect, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import Experience from '../components/Experience.jsx';
import { Card, Typography, Box, Grid } from '@mui/material';
import { PerspectiveCamera } from '@react-three/drei';
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { TbBrandThreejs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { SiBlender } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoAndroid } from "react-icons/io";
import { SiDbeaver } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBrandRedux } from "react-icons/tb";
import { BsBadge3dFill } from "react-icons/bs";
import { SiWebgl } from "react-icons/si";
import NameAnimation from '../components/NameAnimation.jsx';

const MainMenu = () => {

  const [view, setView] = useState('MainMenu');

  return (
    <Card sx={{ p: 2 }} style={{width:'80%',margin:'0 auto',backgroundColor:'#141e31', border:'1px solid #f7f1e8'}}>
      <Grid container spacing={2} alignItems="center">
        {/* Canvas container */}
        <Grid item xs={12} md={6}>
          <Box sx={{  height: 350 }}>
            <Canvas
            key={'wolfmodel'}
              camera={{
                fov: 30.00,
                near: 0.1,
                far: 2000,
                position: [-4.7, 1.57, 1.8,], // Initial camera position
              }}
            >
              {/* Controller to update camera dynamically */}
              <PerspectiveCamera
                zNumber={1.8}
                xNumber={-4.7}
                yNumber={1.57}
                fovNumber={30.00}
                nearNumber={0.1}
                farNumber={2000}
              />
              {view === 'MainMenu' ? <Experience /> : <></>}
            </Canvas>
          </Box>
        </Grid>
        
        {/* Typography content */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: 'left', p: { xs: 1, sm: 2 }, color: '#E1D7B7' }}>
            <Typography variant="h1" sx={{ fontSize: { xs: 16, sm: 18 }, color:'#f7f1e8' }}>
              <NameAnimation/>
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontFamily: 'Sofadi One',
                mt: 1,
                fontSize: { xs: 18, sm: 22 },
                color:'#141e31',
                backgroundColor:'#ebbf4d',
                display: 'inline-block',
                width: 'fit-content',
                px: 1, // optional: some horizontal padding
                borderRadius: 1 // optional: rounded corners
              }}
            >
              Software Developer
            </Typography>


            <Typography
              variant="h3"
              sx={{
                fontFamily: 'Sofadi One',
                mt: 1,
                fontSize: { xs: 18, sm: 22 },
                color:'#afd2e7'
              }}
            >
              I’m a <span style={{ fontFamily: 'Protest Guerrilla' }}>Software Developer</span> with a focus on creating exceptional digital experiences and interactive applications.
            </Typography>

            {/* Icons */}
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1.5,
                mt: 2,
                fontSize: { xs: 28, sm: 34 },
                color: '#F4EBD0'
              }}
            >
              <TbBrandThreejs color='#ede2d3'/>
              <FaReact color='#7bdefd'/>
              <FaNode />
              <SiMongodb color='#538557'/>
              <IoLogoJavascript color='#e8c050'/>
              <FaJava />
              <SiBlender color='#ff7021'/>
              <FaGithub />
              <FaHtml5 color='#e44d26'/>
              <FaCss3Alt color='#264de4'/>
              <BiLogoPostgresql color='#417ba2'/>
              <IoLogoAndroid color='#78c258'/>
              <SiDbeaver color='#43322b'/>
              <VscVscode color='#007bbc'/>
              <TbBrandRedux color='#764abc'/>
              <BsBadge3dFill />
              <SiWebgl />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default MainMenu;
