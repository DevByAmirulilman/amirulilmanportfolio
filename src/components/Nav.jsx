import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const navLinks = [
  { label: 'Home', to: '/amirulilmanportfolio' },
  { label: 'About', to: '/About' },
  { label: 'My Work', to: '/Mywork' },
  { label: 'Contact Me', to: '/ContactMe' },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (state) => () => setOpen(state);

  return (
    <AppBar position="static" sx={{ backgroundColor: '#141e31' }}>
      <Toolbar sx={{ width: '90%', mx: 'auto' }}>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, fontFamily: 'Protest Guerrilla', color: '#E1D7B7' }}
        >
          Amirul Ilman
        </Typography>

        {isMobile ? (
          <>
            <IconButton edge="end" onClick={toggleDrawer(true)} color="inherit">
              <MenuIcon sx={{ color: '#E1D7B7' }} />
            </IconButton>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
              <List sx={{ width: 250, backgroundColor: '#141e31', height: '100%' }}>
                {navLinks.map((link) => (
                  <ListItem
                    button
                    key={link.label}
                    component={NavLink}
                    to={link.to}
                    onClick={toggleDrawer(false)}
                    sx={{ color: '#E1D7B7' }}
                  >
                    <ListItemText primary={link.label} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Box>
            {navLinks.map((link) => (
              <Button
                key={link.label}
                component={NavLink}
                to={link.to}
                sx={{
                  color: '#E1D7B7',
                  fontFamily: 'Sofadi One',
                  '&.active': {
                    textDecoration: 'underline',
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
