import React from 'react'
import Styled from 'styled-components'
import { NavLink } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';


function Nav() {

  return (
    <StyledNav>
        <div className="name">
        <h1> Amirul <span>Ilman</span></h1>
        </div>
      <div className="nav">
      <Button className="button" component={NavLink} style={{margin:'1em'}}  to="amirulilmanportfolio"  variant="contained">Home</Button>
      <Button className="button" component={NavLink} style={{margin:'1em'}}  variant="contained"  to="about">About</Button>
      <Button className="button" component={NavLink} style={{margin:'1em'}}  variant="contained"  to="mywork">My work</Button>
      <Button className="button" component={NavLink} style={{margin:'1em'}}  variant="contained" to="contact"> contact</Button>
      </div>
    </StyledNav>
   
  )
}

const StyledNav = Styled.div`

display: flex;
justify-content:space-around;
flex-wrap: wrap;
.name{
  margin-top:1em
}

@media (max-width:668px) {
  font-size:0.5em;

  }

span{
  color: #ae00ff;
}
.button:hover{
 border:1px solid #ae00ff;
}







`
export default Nav