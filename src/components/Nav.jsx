import React from 'react';
import Styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { Button, Typography, Box } from '@mui/material';

function Nav() {
  return (
    <StyledNav>
      <Box className="name">
        <Typography 
          variant='h3' 
          sx={{ 
            fontFamily: 'Protest Guerrilla', 
            fontSize: { xs: '1.8rem', sm: '2.2rem' },
            textAlign: 'center' 
          }}>
          Amirul <span>Ilman</span>
        </Typography>
      </Box>

      <Box className="nav">
        <Button 
          className="button" 
          component={NavLink} 
          to="/amirulilmanportfolio" 
          variant="contained" 
          sx={buttonStyle}
        >
          Home
        </Button>
        <Button 
          className="button" 
          component={NavLink} 
          to="/about" 
          variant="contained" 
          sx={buttonStyle}
        >
          About
        </Button>
        <Button 
          className="button" 
          component={NavLink} 
          to="/mywork" 
          variant="contained" 
          sx={buttonStyle}
        >
          My Work
        </Button>
        <Button 
          className="button" 
          component={NavLink} 
          to="/contact" 
          variant="contained" 
          sx={buttonStyle}
        >
          Contact
        </Button>
      </Box>
    </StyledNav>
  );
}

// Styles for the navigation component
const buttonStyle = {
  margin: '0.5em 1em',
  fontFamily: 'Sofadi One',
  backgroundColor: '#AE00FB',
  '&:hover': {
    backgroundColor: '#8B00C2',
    borderColor: '#ae00ff',
  }
};

const StyledNav = Styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1em;
  flex-wrap: wrap;

  
  .name {
    margin: 0;
    text-align: center;
  }


  span {
    color: #ae00ff;
  }

  @media (max-width: 668px) {
    flex-direction: column;
    text-align: center;

    .nav {
      flex-direction: column;
      align-items: center;
      margin-top: 1em;
    }
  }
`;

export default Nav;
