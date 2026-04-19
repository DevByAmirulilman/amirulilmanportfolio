import React, { useState, useEffect } from 'react';
import { Box, IconButton, Drawer, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

/* ── Global styles ── */
const navStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

  @keyframes nav-fadeDown { from{opacity:0;transform:translateY(-12px)} to{opacity:1;transform:translateY(0)} }
  @keyframes nav-shimmer  { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }

  .nav-link {
    position: relative;
    text-decoration: none;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #475569;
    padding: 6px 2px;
    letter-spacing: .02em;
    transition: color .2s ease;
  }
  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0;
    width: 0; height: 1.5px;
    background: linear-gradient(90deg, #7C5CFF, #22D3EE);
    border-radius: 2px;
    transition: width .28s ease;
  }
  .nav-link:hover { color: #c4b5fd; }
  .nav-link:hover::after { width: 100%; }
  .nav-link.active { color: #e2d9ff !important; }
  .nav-link.active::after { width: 100% !important; }

  .nav-drawer-link {
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #475569;
    padding: 14px 24px;
    border-bottom: 0.5px solid rgba(255,255,255,0.04);
    transition: background .2s ease, color .2s ease, transform .2s ease;
  }
  .nav-drawer-link:hover {
    background: rgba(124,92,255,0.07);
    color: #c4b5fd;
    transform: translateX(4px);
  }
  .nav-drawer-link.active {
    color: #e2d9ff !important;
    background: rgba(124,92,255,0.1);
  }
  .nav-drawer-link .nav-dot {
    width: 5px; height: 5px;
    border-radius: 50%;
    background: #334155;
    flex-shrink: 0;
    transition: background .2s ease;
  }
  .nav-drawer-link.active .nav-dot {
    background: #7C5CFF;
  }
  .nav-drawer-link:hover .nav-dot {
    background: #a78bfa;
  }

  .nav-menu-btn {
    transition: background .2s ease, transform .2s ease !important;
    border-radius: 8px !important;
  }
  .nav-menu-btn:hover {
    background: rgba(124,92,255,0.1) !important;
    transform: scale(1.05);
  }
`;

const navLinks = [
  { label: 'Home',       to: '/amirulilmanportfolio' },
  { label: 'About',      to: '/About' },
  { label: 'My Work',    to: '/Mywork' },
  { label: 'Contact Me', to: '/ContactMe' },
];

const Nav = () => {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    /* Inject styles once */
    if (!document.getElementById('nav-global-styles')) {
      const tag = document.createElement('style');
      tag.id = 'nav-global-styles';
      tag.textContent = navStyles;
      document.head.appendChild(tag);
    }

    /* Shrink nav on scroll */
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* ── Navbar ── */}
      <Box
        component="nav"
        sx={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: { xs: '20px', sm: '32px', md: '48px' },
          py: scrolled ? '10px' : '16px',
          background: scrolled
            ? 'rgba(5, 11, 24, 0.92)'
            : 'rgba(5, 11, 24, 0.6)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: scrolled
            ? '0.5px solid rgba(255,255,255,0.07)'
            : '0.5px solid transparent',
          transition: 'padding .3s ease, background .3s ease, border-color .3s ease',
          animation: 'nav-fadeDown .5s ease both',
        }}
      >
        {/* Logo */}
        <NavLink
          to="/amirulilmanportfolio"
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}
        >
          {/* Logo mark */}
          <Box sx={{
            width: 28, height: 28,
            borderRadius: '7px',
            background: 'linear-gradient(135deg, #7C5CFF, #22D3EE)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <Typography sx={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 13, fontWeight: 800,
              color: '#fff', lineHeight: 1,
            }}>
              A
            </Typography>
          </Box>

          <Typography sx={{
            fontFamily: "'Syne', sans-serif",
            fontSize: { xs: 15, md: 17 },
            fontWeight: 700,
            background: 'linear-gradient(90deg, #a78bfa, #22D3EE, #a78bfa)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'nav-shimmer 6s linear infinite',
            letterSpacing: '-.01em',
          }}>
            Amirul Ilman
          </Typography>
        </NavLink>

        {/* Desktop links */}
        <Box sx={{
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          gap: '28px',
        }}>
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}

          {/* CTA pill */}
          <NavLink
            to="/ContactMe"
            style={{ textDecoration: 'none' }}
          >
            <Box sx={{
              background: 'rgba(124,92,255,0.12)',
              border: '0.5px solid rgba(124,92,255,0.35)',
              borderRadius: 99,
              px: 2, py: .65,
              fontSize: 13,
              fontFamily: "'DM Sans', sans-serif",
              color: '#a78bfa',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all .2s ease',
              '&:hover': {
                background: 'rgba(124,92,255,0.22)',
              },
              display: 'flex', alignItems: 'center', gap: .8,
            }}>
              <Box sx={{
                width: 6, height: 6, borderRadius: '50%',
                background: '#7C5CFF',
                animation: 'nav-shimmer 2s ease-in-out infinite',
              }} />
              Hire me
            </Box>
          </NavLink>
        </Box>

        {/* Mobile hamburger */}
        <IconButton
          className="nav-menu-btn"
          onClick={() => setOpen(true)}
          sx={{
            display: { xs: 'flex', md: 'none' },
            color: '#a78bfa',
            p: '6px',
          }}
        >
          <MenuIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* ── Mobile Drawer ── */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: { xs: '75vw', sm: 300 },
            background: '#070d1c',
            borderLeft: '0.5px solid rgba(255,255,255,0.07)',
            boxShadow: '-20px 0 60px rgba(0,0,0,0.6)',
          },
        }}
      >
        {/* Drawer header */}
        <Box sx={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          px: 3, py: 2.5,
          borderBottom: '0.5px solid rgba(255,255,255,0.06)',
        }}>
          <Typography sx={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 15, fontWeight: 700,
            background: 'linear-gradient(90deg, #a78bfa, #22D3EE)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Amirul Ilman
          </Typography>
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              color: '#475569', p: '4px',
              borderRadius: '6px',
              transition: 'background .2s',
              '&:hover': { background: 'rgba(255,255,255,0.06)', color: '#a78bfa' },
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* Drawer links */}
        <Box sx={{ pt: 1 }}>
          {navLinks.map((link, i) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) => `nav-drawer-link${isActive ? ' active' : ''}`}
              onClick={() => setOpen(false)}
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <span className="nav-dot" />
              {link.label}
            </NavLink>
          ))}
        </Box>

        {/* Drawer footer */}
        <Box sx={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          p: 3,
          borderTop: '0.5px solid rgba(255,255,255,0.05)',
        }}>
          <Typography sx={{
            fontSize: 11, color: '#1e2d40',
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: '.08em',
            mb: 1,
          }}>
            AVAILABLE FOR WORK
          </Typography>
          <Box sx={{
            display: 'inline-flex', alignItems: 'center', gap: 1,
            background: 'rgba(124,92,255,0.08)',
            border: '0.5px solid rgba(124,92,255,0.25)',
            borderRadius: 99, px: 1.5, py: .6,
          }}>
            <Box sx={{
              width: 6, height: 6, borderRadius: '50%',
              background: '#7C5CFF',
            }} />
            <Typography sx={{ fontSize: 11, color: '#a78bfa' }}>
              Open to opportunities
            </Typography>
          </Box>
        </Box>
      </Drawer>

      {/* Spacer so page content doesn't go under fixed nav */}
      <Box sx={{ height: { xs: '56px', md: '64px' } }} />
    </>
  );
};

export default Nav;