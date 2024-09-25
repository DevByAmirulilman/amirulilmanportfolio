
import { React } from 'react'
import { FaReact } from 'react-icons/fa'
import Styled from 'styled-components'
import { Card, Typography, Box, Grid } from '@mui/material';
import { PerspectiveCamera } from '@react-three/drei';
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
import { motion } from 'framer-motion';
import { textAnimation } from './animations';

function Profile(props) {
    const {Model}= props;
  return (
    <StyledProfile>
    <Grid container>
        <Grid item xs={12} sm={6}>
        <div className="profile-img">
        <img className="image" src={require('./images/profile-img.png')} alt="" />
        </div>
        </Grid>
    <Grid item xs={12} sm={6} >
    <Box sx={{ textAlign: 'left', p: 2,color:'#1E2A5E' }}>
    <motion.Typography variants={textAnimation}>
    <span style={{color:'black',fontSize:40}}>
            <motion.TbBrandThreejs variants={textAnimation}/> 
            <motion.FaReact variants={textAnimation}/> 
            <FaNode /> 
            <SiMongodb />
            <IoLogoJavascript />
            <FaJava />
            <SiBlender />
            <FaGithub />
            <FaHtml5 />
            <FaCss3Alt />
            <BiLogoPostgresql />
            <IoLogoAndroid />
            <SiDbeaver />
            <VscVscode />
            <TbBrandRedux />
            <BsBadge3dFill />
            <SiWebgl />
    </span>
    </motion.Typography>
    </Box>
    </Grid>
    
          </Grid>
    </StyledProfile>
  )
}

const StyledProfile = Styled.div`
    display:flex;
    justify-content:center;
    span{
        color:#AE00FB;
    }
    .profile-img{
        
        img{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 40%;
        }
    }
    .profile-text{
        
        .icons{
            margin-top:1em;
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
        }
    }
`
export default Profile