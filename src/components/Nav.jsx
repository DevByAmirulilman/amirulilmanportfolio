import React from 'react'
import Styled from 'styled-components'

function Nav() {
  return (
    <StyledNav>

    </StyledNav>
  )
}

const StyledNav = Styled.div`
background-color:#170055;
display: flex;
justify-content: space-around;
padding:2em;
button{
    padding:0.5em;
    font-size: 1.8em;
    background-color:#C4C4C4;
    border:10px solid #C4C4C4;
    color:#170055;
    border-radius:10px;
    cursor:pointer;
}
`
export default Nav