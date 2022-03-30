import React from 'react'
import Styled from 'styled-components'
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';


function Nav() {

  return (
    <StyledNav>
        <div className="name">
        <h1> Amirul <span>Ilman</span></h1>
        </div>
      <div className="nav">
      <Link className="navBar" to="amirulilmanportfolio">Home</Link>
      <Link className="navBar" to="about">About</Link>
      <Link className="navBar" to="mywork">My work</Link>
      <Link className="navBar" to="contact">contact</Link>
      </div>
    </StyledNav>
   
  )
}

const StyledNav = Styled.div`
background-color:#b7ddffc3;
display: flex;
font-size: 10px;
justify-content:space-between;
padding:2em;
border-bottom:5px solid #ae00ff;
@media (max-width:668px) {
  font-size:0.5em;

  }

span{
  color: #ae00ff;
}
.navBar{
padding: 1em;
 outline: none;
 color: #000000;
 text-transform: uppercase;
 letter-spacing: 2px;

 transition: 0.2s;
 cursor: pointer;
 font-weight: bold;
}

.navBar:hover {
  color: #ae00ff;
 transition-delay: 0.1s;
}





`
export default Nav