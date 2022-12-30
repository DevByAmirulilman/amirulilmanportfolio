import React, { useState } from 'react'
import Styled from 'styled-components'
import {allwork} from '../assets/allwork.js'
import Grid from '@material-ui/core/Grid';
import { v4 as uuidv4 } from 'uuid';
import {pageAnimation} from './animations.js'
import {textAnimation} from './animations.js'
import {motion} from 'framer-motion'
import { Card,CardMedia,CardContent } from '@material-ui/core';
import Typography from '@mui/material/Typography';

function MyWork() {
    const [mywork,setMywork] = useState(allwork)
    const [showing,setShowings] = useState("React")

   
  return (
    <Grid container justifyContent="center" className="mywork-container">
      <Grid item xs={10}>
    <StyledMyWork 
    variants={pageAnimation}
    exit="exit"
    initial="hidden"
    animate="show"
    >
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
                    <Card  sx={{ maxWidth: 345}}className="mywork" key={uuidv4()} href={data.website} >
                            <CardContent>
                              <img src={data.image} alt={data.title} width={600}/>
                              <Typography gutterBottom variant="h4" component="div">
                              {data.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                              <span className='span'>Description</span>:{data.description}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                              <span className='span'>Website</span>:<a href={data.website} target="_blank">{data.website}</a>
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                              <span className='span'>Github</span>:{data.github}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                              <span className='span'>Library</span>:{data.category}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                              <span className='span'>Design Software Used</span>:{data.software}
                              </Typography>
                            </CardContent>
                    </Card>)
                }
       
    </StyledMyWork>
    </Grid>
    </Grid>
  )
}
const StyledMyWork = Styled(motion.div)`
border:solid 1px #AE00FB;
color:#080808;
padding:2em;
border-radius:1em;
margin-top:1em;
font-size:14px;
.span{
  color:black;
}
.works-nav{
    margin-top:2em;
    margin-bottom:2em;
  display:flex;
  justify-content: space-around;
  
button{
    padding:1em;
    background-color:none;
    border-radius:1em;
    font-size:1em;
    font-weight:bold;
    cursor:pointer ;
}
button:hover{
  background-color:black;
  color:white;
  transition-delay: 0.1s;
}
}
.mywork{
width:53%;
margin:0 auto;
border:1px solid black;
margin-bottom:10em;

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