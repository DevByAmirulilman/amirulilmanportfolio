import { Grid } from '@material-ui/core'
import React from 'react'
import Styled from 'styled-components'

function Contact() {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={10}>
    <StyledContact>
      <div className="contact">
        <h1>Get In Touch</h1>
        <div className="details">
        <h2>Email:<a href="ilman1amirul@gmail.com">ilman1amirul@gmail.com</a></h2>
        <h2>Githib:<a href="ilman1 https://github.com/DevByAmirulilman">ilman1 https://github.com/DevByAmirulilman</a></h2>
        <h2>Phone Num:<a href="xx"> 011-10247442</a></h2>
        </div>
      </div>
    </StyledContact>
    </Grid>
    </Grid>
  )
}
const StyledContact = Styled.div`
background-color:#5091cac3;
padding:2em;
border-radius:1em;
margin-top:1em;
font-size:14px;
@media (max-width:608px) {
  font-size:0.4em;

  }
.contact{
  color:#000000;
  border:5px solid #C4C4C4;
  border-radius:20px;
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