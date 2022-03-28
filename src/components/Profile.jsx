import React from 'react'
import Styled from 'styled-components'
import {FaReact} from 'react-icons/fa'
import {ImGithub} from 'react-icons/im'
import {SiJavascript} from 'react-icons/si'
import {SiCss3} from 'react-icons/si'
import {SiHtml5} from 'react-icons/si'

function Profile() {
  return (
    <StyledProfile>
        <div className="profile-img">
        <img className="image" src={require('./images/profile-img.png')} alt="" />
        </div>
        <div className="profile-text">
        <h2>Muhamad Amirul Ilman Bin Mazlan</h2>
        <h2>Font End developer</h2>
        <div className="icons">
        <FaReact size={50}/>
        <ImGithub size={50}/>
        <SiJavascript size={50}/>
        <SiCss3 size={50}/>
        <SiHtml5 size={50}/>
        </div>
        
        </div>
    </StyledProfile>
  )
}

const StyledProfile = Styled.div`
    display:flex;
    justify-content:center;
    .profile-img{
        
        img{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        }
    }
    .profile-text{
        
        .icons{
            margin-top: 6em;
           
        }
    }
`
export default Profile