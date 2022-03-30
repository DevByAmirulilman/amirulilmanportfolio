import { React,useRef} from 'react'
import Styled from 'styled-components'
import { motion } from 'framer-motion';
import {pageAnimation} from './animations.js'
import {textAnimation} from './animations.js'
import Nav from './Nav.jsx';
import { Canvas,useFrame,useThree } from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei'
import About from './About.jsx';
import Profile from './Profile.jsx';
import * as THREE from 'three';
import Grid from '@material-ui/core/Grid';



const Box =(props)=>{
  const mesh = useRef()
  const knotmesh = new THREE.MeshMatcapMaterial({color:"#AE00FB"})
  const knotGeo =new THREE.TorusKnotGeometry()
  const { viewport } = useThree()
  useFrame((state, delta) => {(mesh.current.rotation.z += 0.05)})
    return (
      
      <mesh
      {...props}
      ref={mesh}
      scale={(viewport.width / 5)}
      material={knotmesh}
      geometry={knotGeo}
      >
      </mesh>
    )
  

  }


function Header() {
  return (
    <Grid container justifyContent='center'>
      <Grid item md={10} xs={12}>
    <StyledHeader
    variants={pageAnimation}
    exit="exit"
    initial="hidden"
    animate="show"
    >
    
    <div className="container">
    <div className="canvas-container" style={{ position: "relative", width: 500, height: 300}}>
    <Canvas>
    <Box/>
    <OrbitControls/>
    <ambientLight intensity={0.5}/>
    </Canvas>
    </div>
    
    <div className="text-container">
        <motion.h2
        variants={textAnimation}
  
        >Hi My name is</motion.h2>
        
        <motion.h1 className="boldcolor"
        variants={textAnimation}
        >Amirul Ilman</motion.h1>
        <motion.h1
        variants={textAnimation}
        >i am a <span className="boldcolor">Javascript developer</span></motion.h1>
        <motion.h1
        variants={textAnimation}
        >
        I’m a <span className="boldcolor">Front End Developer</span> specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building 3D Web Apps using <span className="boldcolor">ReactJs</span> and <span className="boldcolor" >ThreeJs</span>
        </motion.h1>
        </div>
        
        </div>
        <Profile/>
        
    </StyledHeader>
    </Grid>
    </Grid>
  )
}

const StyledHeader = Styled(motion.div)`
margin-top:1em;
border-radius:1em;
background-color:#5091cac3;
color:#0a0a0a;
padding:2em;
font-size:14px;
@media (max-width:608px) {
  font-size:0.4em;

  }
.boldcolor{
    color:#AE00FB;
}
h1{
    margin-top:0.2em;
}
.container{
  display:flex;
  margin-top:3em;
}
`

export default Header