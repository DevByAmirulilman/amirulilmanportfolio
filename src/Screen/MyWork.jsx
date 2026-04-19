import React, { useEffect, useState, useRef } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  Button,
  Chip
} from '@mui/material';
import GithubComponent from '../components/GithubComponent';
import { allwork, myExp } from '../assets/allwork';
import { Link } from 'react-router-dom';

/* ── Global styles (injected once, matches MainMenu namespace) ── */
const pageStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

  @keyframes mw-fadeUp    { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:translateY(0)} }
  @keyframes mw-shimmer   { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
  @keyframes mw-orbFloat  { 0%,100%{transform:translate(0,0)} 50%{transform:translate(18px,-18px)} }
  @keyframes mw-orbFloat2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-14px,16px)} }
  @keyframes mw-cardIn    { from{opacity:0;transform:translateY(40px) scale(.97)} to{opacity:1;transform:translateY(0) scale(1)} }
  @keyframes mw-glowPulse { 0%,100%{opacity:.25} 50%{opacity:.5} }
  @keyframes mw-tabSlide  { from{opacity:0;transform:translateX(-12px)} to{opacity:1;transform:translateX(0)} }
  @keyframes mw-underline { from{width:0} to{width:100%} }

  .mw-card {
    transition: transform .35s cubic-bezier(.34,1.28,.64,1), box-shadow .35s ease !important;
  }
  .mw-card:hover {
    transform: translateY(-10px) scale(1.02) !important;
    box-shadow: 0 20px 50px rgba(124,92,255,0.22) !important;
  }
  .mw-card:hover .mw-img-overlay { opacity: 1 !important; }
  .mw-card:hover .mw-card-border  { opacity: 1 !important; }

  .mw-exp-card {
    transition: transform .3s cubic-bezier(.34,1.28,.64,1), box-shadow .3s ease !important;
  }
  .mw-exp-card:hover {
    transform: translateY(-6px) !important;
    box-shadow: 0 16px 40px rgba(124,92,255,0.18) !important;
  }

  .mw-tab-btn {
    transition: all .2s ease;
    position: relative;
    cursor: pointer;
  }
  .mw-tab-btn::after {
    content: '';
    position: absolute;
    bottom: -2px; left: 0;
    height: 2px;
    background: linear-gradient(90deg,#7C5CFF,#22D3EE);
    border-radius: 2px;
    width: 0;
    transition: width .3s ease;
  }
  .mw-tab-btn.active::after { width: 100%; }
  .mw-tab-btn.active { color: #e2d9ff !important; }
  .mw-tab-btn:hover { color: #c4b5fd !important; }

  .mw-chip {
    transition: all .2s ease !important;
  }
  .mw-chip:hover {
    background: rgba(124,92,255,0.3) !important;
    transform: translateY(-1px);
  }

  .mw-view-btn {
    transition: all .22s cubic-bezier(.34,1.56,.64,1) !important;
  }
  .mw-view-btn:hover {
    opacity: .85 !important;
    transform: translateY(-2px) !important;
    box-shadow: 0 8px 24px rgba(124,92,255,.35) !important;
  }

  .mw-cursor-glow {
    position: fixed;
    width: 240px; height: 240px;
    background: radial-gradient(circle, rgba(124,92,255,0.18), transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: 0;
    transition: left .08s linear, top .08s linear;
    animation: mw-glowPulse 3s ease-in-out infinite;
  }
`;

const TABS = [
  { value: 'work', label: 'Projects' },
  { value: 'exp',  label: 'Experience' },
];

/* ── Component ── */
const MyWork = () => {
  const [tab, setTab] = useState('work');
  const [mounted, setMounted] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    if (!document.getElementById('mw-page-styles')) {
      const tag = document.createElement('style');
      tag.id = 'mw-page-styles';
      tag.textContent = pageStyles;
      document.head.appendChild(tag);
    }
    setMounted(true);
    setTimeout(() => setCardsVisible(true), 200);
  }, []);

  /* Re-trigger card animations on tab switch */
  useEffect(() => {
    setCardsVisible(false);
    const t = setTimeout(() => setCardsVisible(true), 60);
    return () => clearTimeout(t);
  }, [tab]);

  /* Cursor glow */
  useEffect(() => {
    const move = (e) => {
      const el = document.querySelector('.mw-cursor-glow');
      if (el) { el.style.left = `${e.clientX}px`; el.style.top = `${e.clientY}px`; }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  const fadeStyle = (delay = 0) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity .65s ease ${delay}s, transform .65s ease ${delay}s`,
  });

  const cardStyle = (i) => ({
    opacity: cardsVisible ? 1 : 0,
    transform: cardsVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(.97)',
    transition: `opacity .55s ease ${0.05 + i * 0.08}s, transform .55s cubic-bezier(.34,1.1,.64,1) ${0.05 + i * 0.08}s`,
  });

  return (
    <Box sx={{
      minHeight: '100vh',
      background: '#050b18',
      fontFamily: "'DM Sans', sans-serif",
      position: 'relative',
      overflow: 'hidden',
      px: { xs: 2, sm: 4, md: 8 },
      py: { xs: 5, md: 8 },
    }}>

      {/* Cursor glow */}
      <div className="mw-cursor-glow" />

      {/* Grid overlay */}
      <Box sx={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(124,92,255,0.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(124,92,255,0.035) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 90% 90% at 50% 30%, black 30%, transparent 100%)',
      }} />

      {/* Ambient orbs */}
      <Box sx={{
        position: 'absolute', top: -100, left: -120,
        width: 'clamp(240px,35vw,400px)', height: 'clamp(240px,35vw,400px)',
        background: 'radial-gradient(circle, rgba(124,92,255,0.2) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
        animation: 'mw-orbFloat 10s ease-in-out infinite',
      }} />
      <Box sx={{
        position: 'absolute', bottom: -80, right: -80,
        width: 'clamp(200px,30vw,340px)', height: 'clamp(200px,30vw,340px)',
        background: 'radial-gradient(circle, rgba(34,211,238,0.13) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
        animation: 'mw-orbFloat2 13s ease-in-out infinite',
      }} />

      {/* ── HEADER ── */}
      <Box sx={{ textAlign: 'center', mb: 6, position: 'relative', zIndex: 1, ...fadeStyle(0.05) }}>
        <Typography sx={{
          fontSize: 11, letterSpacing: '.14em', color: '#334155',
          mb: 1, fontFamily: "'DM Sans', sans-serif",
        }}>
          PORTFOLIO
        </Typography>
        <Typography sx={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(32px, 6vw, 56px)',
          fontWeight: 800, lineHeight: 1.1,
          background: 'linear-gradient(90deg, #a78bfa, #22D3EE, #a78bfa)',
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'mw-shimmer 5s linear infinite',
        }}>
          My Work
        </Typography>
        <Typography sx={{
          color: '#4b6080', mt: 1.5,
          fontSize: 'clamp(14px, 2vw, 16px)',
          fontFamily: "'DM Sans', sans-serif",
        }}>
          Selected projects, experience & things I've built
        </Typography>
      </Box>

      {/* ── GITHUB ── */}
      <Box sx={{ mb: 7, position: 'relative', zIndex: 1, ...fadeStyle(0.18) }}>
        <GithubComponent />
      </Box>

      {/* ── CUSTOM TABS ── */}
      <Box sx={{
        display: 'flex', justifyContent: 'center', gap: '32px',
        mb: 6, position: 'relative', zIndex: 1,
        ...fadeStyle(0.28),
      }}>
        {TABS.map(t => (
          <button
            key={t.value}
            onClick={() => setTab(t.value)}
            className={`mw-tab-btn${tab === t.value ? ' active' : ''}`}
            style={{
              background: 'none', border: 'none',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15, fontWeight: 500,
              color: tab === t.value ? '#e2d9ff' : '#475569',
              padding: '6px 0',
              letterSpacing: '.02em',
            }}
          >
            {t.label}
          </button>
        ))}
      </Box>

      {/* ── PROJECTS TAB ── */}
      {tab === 'work' && (
        <Grid ref={gridRef} container spacing={3} sx={{ position: 'relative', zIndex: 1 }}>
          {allwork.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i} style={cardStyle(i)}>
              <Card
                className="mw-card"
                onClick={() => window.open(item.website, '_blank')}
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  background: 'rgba(255,255,255,0.03)',
                  border: '0.5px solid rgba(255,255,255,0.08)',
                  position: 'relative',
                  boxShadow: 'none',
                }}
              >
                {/* Animated gradient border on hover */}
                <Box className="mw-card-border" sx={{
                  position: 'absolute', inset: 0,
                  borderRadius: 3,
                  padding: '1px',
                  background: 'linear-gradient(135deg, #7C5CFF, #22D3EE)',
                  WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                  WebkitMaskComposite: 'xor',
                  pointerEvents: 'none',
                  opacity: 0,
                  transition: 'opacity .3s ease',
                }} />

                {/* Image */}
                <Box sx={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                  <img
                    src={item.image} alt={item.title}
                    style={{
                      width: '100%', height: '100%', objectFit: 'cover',
                      transition: 'transform .5s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  {/* Overlay */}
                  <Box className="mw-img-overlay" sx={{
                    position: 'absolute', inset: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'linear-gradient(to top, rgba(5,11,24,0.85) 0%, rgba(124,92,255,0.3) 100%)',
                    opacity: 0,
                    transition: 'opacity .3s ease',
                  }}>
                    <Typography sx={{
                      color: 'white', fontWeight: 600, fontSize: 15,
                      fontFamily: "'DM Sans', sans-serif",
                      border: '0.5px solid rgba(255,255,255,0.3)',
                      borderRadius: 99, px: 2.5, py: .8,
                    }}>
                      View Project →
                    </Typography>
                  </Box>
                </Box>

                {/* Content */}
                <Box sx={{ p: 3 }}>
                  <Typography sx={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700, fontSize: 17,
                    color: '#e2d9ff', mb: .5,
                  }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{
                    color: '#4b6080', fontSize: 13, mb: 2.5, lineHeight: 1.65,
                    fontFamily: "'DM Sans', sans-serif",
                  }}>
                    {item.description}
                  </Typography>

                  {/* Tech chips */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: .8, mb: 3 }}>
                    {item.tech?.map((tech, idx) => (
                      <Chip
                        key={idx} label={tech} size="small"
                        className="mw-chip"
                        sx={{
                          background: 'rgba(124,92,255,0.12)',
                          color: '#a78bfa',
                          border: '0.5px solid rgba(124,92,255,0.25)',
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 11,
                          height: 24,
                        }}
                      />
                    ))}
                  </Box>

                  <Button
                    fullWidth
                    className="mw-view-btn"
                    onClick={(e) => { e.stopPropagation(); window.open(item.website, '_blank'); }}
                    sx={{
                      background: 'linear-gradient(135deg, #7C5CFF 0%, #22D3EE 100%)',
                      color: 'white',
                      fontWeight: 500,
                      fontFamily: "'DM Sans', sans-serif",
                      textTransform: 'none',
                      borderRadius: 2,
                      fontSize: 13,
                      py: 1,
                      boxShadow: '0 4px 14px rgba(124,92,255,0.2)',
                    }}
                  >
                    View Project
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* ── EXPERIENCE TAB ── */}
      {tab === 'exp' && (
        <Grid container spacing={3} sx={{ position: 'relative', zIndex: 1 }}>
          {myExp.map((exp, i) => (
            <Grid item xs={12} md={6} key={i} style={cardStyle(i)}>
              <Card
                className="mw-exp-card"
                sx={{
                  p: 4, borderRadius: 3,
                  background: 'rgba(255,255,255,0.03)',
                  border: '0.5px solid rgba(255,255,255,0.08)',
                  boxShadow: 'none',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Accent line */}
                <Box sx={{
                  position: 'absolute', top: 0, left: 0, right: 0,
                  height: 2,
                  background: i % 2 === 0
                    ? 'linear-gradient(90deg, #7C5CFF, transparent)'
                    : 'linear-gradient(90deg, #22D3EE, transparent)',
                }} />

                {/* Role + company */}
                <Box sx={{ mb: 2.5 }}>
                  <Typography sx={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700, fontSize: 18,
                    color: '#e2d9ff', mb: .4,
                  }}>
                    {exp.role}
                  </Typography>
                  <Typography sx={{
                    color: i % 2 === 0 ? '#a78bfa' : '#22D3EE',
                    fontSize: 14, fontWeight: 500,
                    fontFamily: "'DM Sans', sans-serif",
                  }}>
                    {exp.company}
                  </Typography>
                </Box>

                {/* Stack */}
                {exp.stack && (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: .7, mb: 2.5 }}>
                    {exp.stack.split(',').map((s, idx) => (
                      <Chip
                        key={idx} label={s.trim()} size="small"
                        className="mw-chip"
                        sx={{
                          background: 'rgba(34,211,238,0.08)',
                          color: '#67e8f9',
                          border: '0.5px solid rgba(34,211,238,0.2)',
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 10, height: 22,
                        }}
                      />
                    ))}
                  </Box>
                )}

                {/* Work items */}
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  {exp.work.map((w, idx) => (
                    <Box
                      component="li" key={idx}
                      sx={{
                        color: '#ffffff',
                        fontSize: 13.5, lineHeight: 1.7,
                        mb: .8,
                        fontFamily: "'DM Sans', sans-serif",
                        '&::marker': { color: '#7C5CFF' },
                      }}
                    >
                      {w}
                    </Box>
                  ))}
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* ── BACK BUTTON ── */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8, position: 'relative', zIndex: 1, ...fadeStyle(0.4) }}>
        <Button
          component={Link}
          to="/amirulilmanportfolio"
          sx={{
            background: 'transparent',
            color: '#475569',
            border: '0.5px solid rgba(255,255,255,0.07)',
            borderRadius: 2, px: 3, py: 1,
            fontFamily: "'DM Sans', sans-serif",
            textTransform: 'none', fontSize: 13,
            transition: 'all .2s ease',
            '&:hover': {
              borderColor: 'rgba(124,92,255,0.4)',
              color: '#a78bfa',
              background: 'rgba(124,92,255,0.06)',
            },
          }}
        >
          ← Back to Home
        </Button>
      </Box>

    </Box>
  );
};

export default MyWork;