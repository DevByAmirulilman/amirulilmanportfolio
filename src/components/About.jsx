import React from 'react'
import Styled from 'styled-components'
import {motion} from 'framer-motion'
import {pageAnimation} from './animations.js'
import {textAnimation} from './animations.js'



function About() {
  return (
    <div>
  
    <StyledAbout
    variants={pageAnimation}
    exit="exit"
    initial="hidden"
    animate="show"
    >
      
 
        <motion.div className="about-border"
        variants={textAnimation}
        >
            <h1 className="about-header">About Me</h1>
            <h2>Hello , my Name is <span>Amirul Ilman</span>  and i take joy in building and designing softwares.
            On my personal time i like to build web apps using <span>React js</span> and 3d websites using <span>THREE js</span>.</h2>
            <h2>Here are a few technologies I’ve been working with recently:</h2>

            <div className="skills">
            <ul>
                <h2>Languages</h2>
                <li>Html</li>
                <li>Css</li>
                <li>Javascript</li>
                <li>Phyton</li>
                <li>Java</li>
            </ul>
            <ul>
                <h2>Frameworks/Libraries</h2>
                <li>React js</li>
                <li>Three js</li>
            </ul>
            <ul>
                <h2>Education</h2>
                <li>Diploma in Computer Science UITM Machang</li>
                <li>Degree in Computer Science UITM Shah Alam</li>
            </ul>
            
            </div>

        </motion.div>
    </StyledAbout>
    </div>
  )
}

const StyledAbout = Styled(motion.div)`
    background-color:#5091cac3;
    display: flex;
    color:#000000;
    border-radius:1em;
    border:5px solid #C4C4C4;
    
    li{
        font-size:1.3em;
    }
    .about-border{
       
        padding:1em;
        border-radius:20px;
    }
    .about-header{
        text-align:center;
    }
    span{
        color:#AE00FB;
    }
    .skills{
        margin-top:1em;
        display:flex;
        justify-content:space-around;
    }
`
export default About