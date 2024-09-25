import { React, useRef, useEffect } from 'react';
import Styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageAnimation, textAnimation } from './animations.js';
import matcap from './matcaps/4.png';
import { Canvas, useLoader } from '@react-three/fiber';
import { PresentationControls, useGLTF, Environment } from '@react-three/drei';
import Profile from './Profile.jsx';
import { Grid, Typography } from '@mui/material';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { Suspense } from 'react';
import Experience from './Models/Experience.jsx';

const Model = () => {
  // Load the wolf model from external URL
  const wolfModel = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/korrigan-wolf/model.gltf');

  // Load texture
  const colorMap = useLoader(TextureLoader, matcap);

  // Clean up the texture when the component unmounts
  useEffect(() => {
    return () => {
      colorMap.dispose();
    };
  }, [colorMap]);

  return (
    <>
      <Environment preset="city" />
      <PresentationControls
        makeDefault
        polar={[-0.4, 0.2]}  // Limit vertical rotation
        azimuth={[-1, 0.75]} // Limit horizontal rotation
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <primitive
          object={wolfModel.scene}
          position={[0, -0.99, 1]} // Adjust the model's position
          scale={2.5}
        />
      </PresentationControls>
    </>
  );
};

function Header() {
  return (
    <StyledHeader
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div className="canvas-container" style={{ height: '300px', width: '100%' }}>
            <Canvas>
              <Suspense fallback={null}>
                <Experience />
              </Suspense>
            </Canvas>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="text-container">
            <motion.h2 variants={textAnimation}>
              <Typography variant="h3" style={{ fontSize: { xs: '1.8rem', sm: '2.2rem' }}}>Hi, I'm <span style={{ color: '#ae00ff', fontFamily: 'Protest Guerrilla' }}>Amirul Ilman</span></Typography>
            </motion.h2>
            <motion.h1 className="boldcolor" variants={textAnimation}>
              <Typography style={{ fontFamily: 'Sofadi One', color: 'black',fontSize: { xs: '1rem', sm: '1.2rem' } }} variant="h6">
                I’m a <span style={{ color: '#ae00ff', fontFamily: 'Protest Guerrilla' }}>Software Developer </span>with a focus on creating exceptional digital experiences and interactive applications. I leverage modern libraries and frameworks to build innovative, high-performance solutions.
              </Typography>
            </motion.h1>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className='profile'>
            <Profile Model={Model} />
          </div>
        </Grid>
      </Grid>
    </StyledHeader>
  );
}



const StyledHeader = Styled(motion.div)`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 1em;
  border-radius: 1em;
  border: solid 1px #AE00FB;
  color: #0a0a0a;
  padding: 2em;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }

  @media (max-width: 608px) {
    font-size: 0.6em;
  }

  .boldcolor {
    color: #AE00FB;
  }

  h1 {
    margin-top: 0.2em;
  }

  .profile {
    margin-top: -2em;
  }
    
`;

export default Header;
