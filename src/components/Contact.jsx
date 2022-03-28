import React from 'react'
import Styled from 'styled-components'

function Contact() {
  return (
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
  )
}
const StyledContact = Styled.div`
background-color:#b7ddffc3;
padding:2em;
border-radius:1em;
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