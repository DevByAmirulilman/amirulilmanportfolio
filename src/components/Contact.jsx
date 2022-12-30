import { Grid } from '@material-ui/core'
import React from 'react'
import Styled from 'styled-components'
import {pageAnimation, textAnimation} from './animations.js'
import {motion} from 'framer-motion'

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
      <div className="contact">
        <h1>Get In Touch</h1>
        <div className="details">
        <h2>Email:<a target="_blank" href="ilman1amirul@gmail.com"> ilman1amirul@gmail.com</a></h2>
        <h2>Github:<a target="_blank" href="https://github.com/DevByAmirulilman">https://github.com/DevByAmirulilman</a></h2>
        <h2>Phone Num:<a href="xx"> 019-5756260</a></h2>
        </div>
      </div>
    </StyledContact>
    </Grid>
    </Grid>
  )
}
const StyledContact = Styled.div`
border:solid 1px #AE00FB;
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
  margin-left:2em;
  padding-bottom:1em;
  a{
    color:#AE00FB;
  }
}
`
export default Contact