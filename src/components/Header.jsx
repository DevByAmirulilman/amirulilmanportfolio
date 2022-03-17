import React from 'react'
import Styled from 'styled-components'
import { motion } from 'framer-motion';
import {pageAnimation} from './animations.js'
import {textAnimation} from './animations.js'

function Header() {
  return (
    <StyledHeader
    variants={pageAnimation}
    exit="exit"
    initial="hidden"
    animate="show"
    >
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
        I’m a <span className="boldcolor">software engineer</span> specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building 3D Websited and react js.
        </motion.h1>
    </StyledHeader>
  )
}

const StyledHeader = Styled(motion.div)`
margin-top:1em;
border-radius:1em;
background-color:#170055;
color:#F0F4EF;
padding:2em;
.boldcolor{
    color:#AE00FB;
}
h1{
    margin-top:0.2em;
}
`
export default Header