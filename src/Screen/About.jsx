import React, { useEffect, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Typography, Box, Grid, ListItemIcon, ListItemText,
  ListItem, Button
} from '@mui/material';
import BookCase from '../components/BookCase.jsx';
import { educations, backend, frontend, tools } from '../assets/skills.js';

/* ── Global styles ── */
const aboutStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

  @keyframes ab-fadeUp    { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
  @keyframes ab-shimmer   { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
  @keyframes ab-orbFloat  { 0%,100%{transform:translate(0,0)} 50%{transform:translate(16px,-16px)} }
  @keyframes ab-orbFloat2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-14px,14px)} }
  @keyframes ab-skillIn   { from{opacity:0;transform:translateX(-16px)} to{opacity:1;transform:translateX(0)} }
  @keyframes ab-barGrow   { from{width:0} to{width:var(--bar-w)} }
  @keyframes ab-glowPulse { 0%,100%{opacity:.2} 50%{opacity:.4} }

  .ab-tab-btn {
    position: relative;
    cursor: pointer;
    transition: color .2s ease;
  }
  .ab-tab-btn::after {
    content: '';
    position: absolute;
    bottom: -2px; left: 0;
    height: 2px;
    background: linear-gradient(90deg, #7C5CFF, #22D3EE);
    border-radius: 2px;
    width: 0;
    transition: width .3s ease;
  }
  .ab-tab-btn.active::after { width: 100%; }
  .ab-tab-btn.active { color: #e2d9ff !important; }
  .ab-tab-btn:hover  { color: #c4b5fd !important; }

  .ab-skill-row {
    transition: background .2s ease, transform .2s ease;
    border-radius: 8px;
  }
  .ab-skill-row:hover {
    background: rgba(124,92,255,0.06) !important;
    transform: translateX(4px);
  }

  .ab-canvas-wrap {
    border-radius: 16px;
    overflow: hidden;
    border: 0.5px solid rgba(255,255,255,0.08);
    background: rgba(255,255,255,0.02);
    transition: box-shadow .4s ease;
  }
  .ab-canvas-wrap:hover {
    box-shadow: 0 0 40px rgba(124,92,255,0.18);
  }

  .ab-cursor-glow {
    position: fixed;
    width: 220px; height: 220px;
    background: radial-gradient(circle, rgba(124,92,255,0.15), transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: 0;
    transition: left .1s linear, top .1s linear;
    animation: ab-glowPulse 3s ease-in-out infinite;
  }

  .ab-highlight { color: #a78bfa; font-weight: 500; }
  .ab-highlight-teal { color: #22D3EE; font-weight: 500; }
`;

const SKILL_TABS = [
  { label: 'Frontend',  key: 'frontend' },
  { label: 'Backend',   key: 'backend'  },
  { label: 'Tools', key: 'tools'},
  { label: 'Education', key: 'education'},
  
];

/* ── Component ── */
const About = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const [mounted, setMounted]     = useState(false);
  const [skillsKey, setSkillsKey] = useState(0); // triggers re-animation
  const showCanvas = false; // set true to re-enable the 3D bookcase

  const skillData = {
    frontend:  frontend,
    backend:   backend,
    education: educations,
    tools: tools,
  };

  useEffect(() => {
    if (!document.getElementById('ab-page-styles')) {
      const tag = document.createElement('style');
      tag.id = 'ab-page-styles';
      tag.textContent = aboutStyles;
      document.head.appendChild(tag);
    }
    setMounted(true);

    const move = (e) => {
      const el = document.querySelector('.ab-cursor-glow');
      if (el) { el.style.left = `${e.clientX}px`; el.style.top = `${e.clientY}px`; }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  const handleTab = (key) => {
    setActiveTab(key);
    setSkillsKey(k => k + 1); // re-trigger skill animations
  };

  const fadeStyle = (delay = 0) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity .65s ease ${delay}s, transform .65s ease ${delay}s`,
  });

  const currentSkills = skillData[activeTab] || [];

  return (
    <Box sx={{
      minHeight: '100vh',
      background: '#050b18',
      fontFamily: "'DM Sans', sans-serif",
      position: 'relative',
      overflow: 'hidden',
      px: { xs: 2, sm: 4, md: 8 },
      py: { xs: 5, md: 8 },
      boxSizing: 'border-box',
    }}>

      <div className="ab-cursor-glow" />

      {/* Grid overlay */}
      <Box sx={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(124,92,255,0.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(124,92,255,0.035) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 90% 80% at 50% 20%, black 30%, transparent 100%)',
      }} />

      {/* Orbs */}
      <Box sx={{
        position: 'absolute', top: -100, left: -120,
        width: 'clamp(220px,32vw,380px)', height: 'clamp(220px,32vw,380px)',
        background: 'radial-gradient(circle, rgba(124,92,255,0.2) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
        animation: 'ab-orbFloat 10s ease-in-out infinite',
      }} />
      <Box sx={{
        position: 'absolute', bottom: -80, right: -80,
        width: 'clamp(180px,28vw,320px)', height: 'clamp(180px,28vw,320px)',
        background: 'radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
        animation: 'ab-orbFloat2 13s ease-in-out infinite',
      }} />

      {/* ── Page header ── */}
      <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 }, position: 'relative', zIndex: 1, ...fadeStyle(0.05) }}>
        <Typography sx={{ fontSize: 11, letterSpacing: '.14em', color: '#334155', mb: 1, fontFamily: "'DM Sans', sans-serif" }}>
          WHO I AM
        </Typography>
        <Typography sx={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(30px, 5.5vw, 52px)',
          fontWeight: 800, lineHeight: 1.1,
          background: 'linear-gradient(90deg, #a78bfa, #22D3EE, #a78bfa)',
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'ab-shimmer 5s linear infinite',
        }}>
          About Me
        </Typography>
      </Box>

      {/* ── Main grid ── */}
      <Grid
        container
        spacing={{ xs: 4, md: 6 }}
        alignItems="flex-start"
        sx={{ position: 'relative', zIndex: 1, maxWidth: 1100, mx: 'auto' }}
      >

        {/* ── LEFT: bio + skills ── */}
        <Grid item xs={12} md={showCanvas ? 6 : 8} sx={{ mx: showCanvas ? 0 : 'auto' }}>

          {/* Bio card */}
          <Box style={fadeStyle(0.12)} sx={{
            background: 'rgba(255,255,255,0.03)',
            border: '0.5px solid rgba(255,255,255,0.08)',
            borderRadius: 3,
            p: { xs: 3, md: 4 },
            mb: 4,
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Top accent */}
            <Box sx={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 2,
              background: 'linear-gradient(90deg, #7C5CFF, #22D3EE, transparent)',
            }} />

            <Typography sx={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(18px, 3vw, 22px)',
              fontWeight: 700, color: '#e2d9ff', mb: 2,
            }}>
              Hi, I'm Amirul Ilman 👋
            </Typography>

            <Typography sx={{
              fontSize: 'clamp(14px, 1.8vw, 16px)',
              color: '#ffffff', lineHeight: 1.85,
              fontFamily: "'DM Sans', sans-serif",
            }}>
              I'm a passionate{' '}
              <span className="ab-highlight">software developer</span>{' '}
              who takes joy in building and designing innovative solutions.
              I develop web applications using{' '}
              <span className="ab-highlight">JavaScript</span> — mainly{' '}
              <span className="ab-highlight">React.js</span> for the frontend and{' '}
              <span className="ab-highlight-teal">Node.js / Express.js</span>{' '}
              for the backend — and create immersive 3D experiences with{' '}
              <span className="ab-highlight-teal">Three.js</span>.
            </Typography>

            {/* Quick facts row */}
            <Box sx={{
              display: 'flex', flexWrap: 'wrap', gap: 2, mt: 3,
              pt: 3, borderTop: '0.5px solid rgba(255,255,255,0.06)',
            }}>
              {[
                { label: 'Location', value: 'Malaysia 🇲🇾' },
                { label: 'Focus',    value: 'Full-Stack + 3D + AI ' },
                { label: 'Status',   value: '✦ Open to work' },
              ].map(f => (
                <Box key={f.label} sx={{
                  flex: '1 1 120px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '0.5px solid rgba(255,255,255,0.06)',
                  borderRadius: 2, p: '10px 14px',
                }}>
                  <Typography sx={{ fontSize: 10, color: '#82878d', letterSpacing: '.08em', mb: .3 }}>
                    {f.label.toUpperCase()}
                  </Typography>
                  <Typography sx={{ fontSize: 13, color: '#ffffff', fontFamily: "'DM Sans', sans-serif" }}>
                    {f.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* ── Skills section ── */}
          <Box style={fadeStyle(0.22)}>

            {/* Tab buttons */}
            <Box sx={{ display: 'flex', gap: '28px', mb: 3 }}>
              {SKILL_TABS.map(t => (
                <button
                  key={t.key}
                  onClick={() => handleTab(t.key)}
                  className={`ab-tab-btn${activeTab === t.key ? ' active' : ''}`}
                  style={{
                    background: 'none', border: 'none', padding: '4px 0',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14, fontWeight: 500,
                    color: activeTab === t.key ? '#e2d9ff' : '#475569',
                    letterSpacing: '.02em',
                    cursor: 'pointer',
                  }}
                >
                  {t.label}
                </button>
              ))}
            </Box>

            {/* Skills list */}
            <Box sx={{
              background: 'rgba(255,255,255,0.02)',
              border: '0.5px solid rgba(255,255,255,0.06)',
              borderRadius: 3,
              overflow: 'hidden',
            }}>
              {currentSkills.map((skill, i) => (
                <Box
                  key={`${skillsKey}-${skill.name}`}
                  className="ab-skill-row"
                  sx={{
                    display: 'flex', alignItems: 'center',
                    px: { xs: 2, md: 3 }, py: 1.5,
                    borderBottom: i < currentSkills.length - 1
                      ? '0.5px solid rgba(255,255,255,0.04)' : 'none',
                    gap: 2,
                    opacity: 0,
                    animation: `ab-skillIn .35s ease both ${i * 0.055}s`,
                  }}
                >
                  {/* Icon */}
                  {skill.icon && (
                    <Box sx={{
                      width: 34, height: 34, borderRadius: '8px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '0.5px solid rgba(255,255,255,0.07)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      {React.createElement(skill.icon, {
                        style: { color: skill.color, fontSize: 17 },
                      })}
                    </Box>
                  )}

                  {/* Name + details */}
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography sx={{
                      fontSize: 'clamp(12px, 1.6vw, 14px)',
                      fontWeight: 500, color: '#c4b5fd',
                      fontFamily: "'DM Sans', sans-serif",
                      lineHeight: 1.3,
                    }}>
                      {skill.name}
                    </Typography>
                    {skill.details && (
                      <Typography sx={{
                        fontSize: 'clamp(11px, 1.4vw, 12px)',
                        color: '#334155',
                        fontFamily: "'DM Sans', sans-serif",
                        lineHeight: 1.4, mt: .2,
                        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                      }}>
                        {skill.details}
                      </Typography>
                    )}
                  </Box>

                  {/* Proficiency bar (if skill has a level 0–100) */}
                  {skill.level != null && (
                    <Box sx={{ width: 80, flexShrink: 0 }}>
                      <Box sx={{
                        height: 3, borderRadius: 99,
                        background: 'rgba(255,255,255,0.06)',
                        overflow: 'hidden',
                      }}>
                        <Box sx={{
                          height: '100%',
                          width: `${skill.level}%`,
                          background: 'linear-gradient(90deg, #7C5CFF, #22D3EE)',
                          borderRadius: 99,
                          animation: `ab-barGrow .8s ease both ${0.2 + i * 0.055}s`,
                          '--bar-w': `${skill.level}%`,
                        }} />
                      </Box>
                      <Typography sx={{ fontSize: 10, color: '#334155', mt: .4, textAlign: 'right' }}>
                        {skill.level}%
                      </Typography>
                    </Box>
                  )}
                </Box>
              ))}

              {currentSkills.length === 0 && (
                <Typography sx={{ p: 3, color: '#334155', fontFamily: "'DM Sans', sans-serif", fontSize: 13 }}>
                  No items to show.
                </Typography>
              )}
            </Box>
          </Box>
        </Grid>

        {/* ── RIGHT: 3D canvas (when enabled) ── */}
        {showCanvas && (
          <Grid item xs={12} md={6} style={fadeStyle(0.3)}>
            <Box className="ab-canvas-wrap" sx={{ width: '100%', height: { xs: 280, sm: 340, md: 460 } }}>
              <Canvas camera={{ fov: 30, near: 0.1, far: 2000, position: [-4.7, 1.57, 1.8] }}>
                <BookCase />
              </Canvas>
            </Box>
            <Typography sx={{
              textAlign: 'center', mt: 1.5,
              fontSize: 11, color: '#1e2d40',
              letterSpacing: '.08em',
              fontFamily: "'DM Sans', sans-serif",
            }}>
              INTERACTIVE 3D — DRAG TO EXPLORE
            </Typography>
          </Grid>
        )}

      </Grid>
    </Box>
  );
};

export default About;