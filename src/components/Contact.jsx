
import React from 'react'
import Styled from 'styled-components'
import {pageAnimation, textAnimation} from './animations.js'
import {motion} from 'framer-motion'
import { Grid, Typography,Card } from '@mui/material'
import CV from '../assets/cv.pdf'

function Contact() {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={10}>
    <StyledContact
        variants={textAnimation}
        exit="exit"
        initial="hidden"
        animate="show"
    >
    <Card style={{color:'#1E2A5E'}}>
        <Typography sx={{textAlign:'center',color:'#1E2A5E',fontFamily:'Protest Guerrilla'}} variant='h3'>Get In Touch</Typography>
              <Typography style={{fontFamily:'Sofadi One'}} variant='h5'><span style={{color:'#E1D7B7'}}>Email: </span><a style={{textDecoration:'none',color:'#1E2A5E'}} target="_blank" href="ilman1amirul@gmail.com"> ilman1amirul@gmail.com</a></Typography>
              <Typography style={{fontFamily:'Sofadi One'}} variant='h6'><span style={{color:'#E1D7B7'}}>Github: </span><a style={{textDecoration:'none',color:'#1E2A5E'}} target="_blank" href="https://github.com/DevByAmirulilman"> https://github.com/DevByAmirulilman</a></Typography>
              <Typography style={{fontFamily:'Sofadi One'}} variant='h5'><span style={{color:'#E1D7B7'}}>Phone: </span>019-5756260</Typography>
              <Typography style={{fontFamily:'Sofadi One',textAlign:'center',border:'1px solid black',p:1}} variant='h6'><a style={{textDecoration:'none',color:'#1E2A5E'}} target="_blank" href={CV} download="pavel_cv"> Download my Resume</a></Typography>
    </Card>
    </StyledContact>
    </Grid>
    </Grid>
  )
}
const StyledContact = Styled.div`
border:solid 1px #AE00FB;
font-family:'Protest Guerrilla';
padding:2em;
border-radius:1em;
margin-top:1em;
font-size:14px;
@media (max-width:608px) {
  font-size:0.4em;

  }
.contact{
  color:#000000;
 a{
  text-decoration:none;
 }
  h1{
    text-align:center;
    
  }
}

.details{
  padding-bottom:1em;
  a{
    color:#AE00FB;
  }
}
`
export default Contact