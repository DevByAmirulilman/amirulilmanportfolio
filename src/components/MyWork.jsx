import React, { useState } from 'react'
import Styled from 'styled-components'
import {allwork} from '../assets/allwork.js'
import Grid from '@material-ui/core/Grid';
import { v4 as uuidv4 } from 'uuid';
import {pageAnimation} from './animations.js'
import {textAnimation} from './animations.js'
import {motion} from 'framer-motion'

function MyWork() {
    const [mywork,setMywork] = useState(allwork)
    const [showing,setShowings] = useState("React")

   
  return (
    <StyledMyWork 
    variants={pageAnimation}
    exit="exit"
    initial="hidden"
    animate="show"
    >
        <Grid container justifyContent="center" className="mywork-container">
            <Grid xs={12} item>
            <h1 className="works-header">My Work</h1>
            </Grid>
            <Grid xs={12} item className="works-nav">
            <div>
            <button onClick={() =>setShowings("React")}>ReactJS</button>
            </div>
            <div>
            <button onClick={() =>setShowings("ThreeJs")}>Three js</button>
            </div>
            </Grid>
                {mywork.filter(data => data.category===showing).map(data =>           
                    <Grid xs={6} item className="mywork" key={uuidv4()} href={data.website} >
                    <div className="image-title">
                    <h1>{data.title}</h1>
                    <a href={data.website} target="_blank" rel="noreferrer" >
                    <img className="image" src={data.image} alt="" />
                    </a>
                    </div>
                    <div className="description">
                    <p>{data.description}</p>
                    <p>Hosting: {data.hosting}</p>
                    <a href={data.github}>Github Repo</a>
                    </div>
                    </Grid>)
                }
        </Grid>
    </StyledMyWork>
  )
}
const StyledMyWork = Styled(motion.div)`
background-color:#5091cac3;
color:#080808;
padding:2em;
border-radius:1em;
.works-nav{
    margin-top:2em;
    margin-bottom:2em;
  display:flex;
  justify-content: space-around;
  
button{
    padding:2em;
    background-color:#F0F4EF;
    border-radius:1em;
    font-size:1em;
    font-weight:bold;
    cursor:pointer ;
}
}
.mywork{
 
h1{
    text-align:center;
}

}
.mywork-container{
    border:5px solid #C4C4C4;
    padding:1em;
    border-radius:20px;
}
.works-header{
text-align: center;
}
.description{
    margin:1em;
    text-align: justify;
  text-justify: inter-word;
    a{
        text-decoration:none;
        color:white;
    }
    
}
.image{
  border-radius:5%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  
}
`
export default MyWork