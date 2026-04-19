import React, { useEffect, useState, useRef } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { frontend, backend, tools } from '../assets/skills';
import { allwork } from '../assets/allwork';

/* ─── Merge all skills into a single flat TECH array ─── */
const TECH = [...frontend, ...backend, ...tools].reduce((acc, item) => {
  if (!acc.find(x => x.name === item.name)) acc.push(item);
  return acc;
}, []);

/* ─── Dynamic stats ─── */
const CAREER_START_YEAR = 2021; // adjust to your actual first job year
const yearsExp = new Date().getFullYear() - CAREER_START_YEAR;

const STATS = [
  { value: `${allwork.length}+`, label: 'Freelance Projects'     },
  { value: `${yearsExp}+`,       label: 'Years Exp'    },
  { value: TECH.length,          label: 'Technologies' },
];

/* ─── Inline CSS ─── */
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

  @keyframes mm-fadeUp   { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
  @keyframes mm-shimmer  { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
  @keyframes mm-pulse    { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.15);opacity:.7} }
  @keyframes mm-blink    { 0%,100%{opacity:1} 50%{opacity:0} }
  @keyframes mm-orbFloat { 0%,100%{transform:translate(0,0)} 50%{transform:translate(20px,-20px)} }
  @keyframes mm-orbFloat2{ 0%,100%{transform:translate(0,0)} 50%{transform:translate(-16px,18px)} }
  @keyframes mm-chipIn   { from{opacity:0;transform:scale(.85) translateY(8px)} to{opacity:1;transform:scale(1) translateY(0)} }

  .mm-chip:hover { background: rgba(124,92,255,0.14) !important; border-color: rgba(124,92,255,0.45) !important; transform: translateY(-3px) scale(1.04) !important; }
  .mm-btn-primary:hover { opacity: .88; transform: translateY(-2px); box-shadow: 0 8px 28px rgba(124,92,255,.35) !important; }
  .mm-btn-outline:hover { background: rgba(124,92,255,0.1) !important; transform: translateY(-2px); }
  .mm-stat:hover .mm-stat-num { text-shadow: 0 0 18px currentColor; }
  .mm-social:hover { border-color: rgba(124,92,255,0.5) !important; background: rgba(124,92,255,0.08) !important; transform: translateY(-2px); }
  .mm-chip, .mm-btn-primary, .mm-btn-outline, .mm-stat, .mm-social { transition: all .22s cubic-bezier(.34,1.56,.64,1); }
`;

const ROLES = [
  'Full-Stack Developer',
  '3D & WebGL Engineer',
  'AI Tools Builder',
  'Creative Technologist',
  'App Developer',
  'SaaS Developer',
];

/* ── Typewriter hook ── */
function useTypewriter(words, typingSpeed = 75, deletingSpeed = 45, pauseMs = 1600) {
  const [display, setDisplay]   = useState('');
  const [wordIdx, setWordIdx]   = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const word = words[wordIdx];
    const tick = () => {
      setDisplay(prev => {
        if (!deleting) {
          const next = word.slice(0, prev.length + 1);
          if (next === word) {
            timerRef.current = setTimeout(() => setDeleting(true), pauseMs);
            return next;
          }
          timerRef.current = setTimeout(tick, typingSpeed);
          return next;
        } else {
          const next = word.slice(0, prev.length - 1);
          if (next === '') {
            setDeleting(false);
            setWordIdx(i => (i + 1) % words.length);
            return next;
          }
          timerRef.current = setTimeout(tick, deletingSpeed);
          return next;
        }
      });
    };
    timerRef.current = setTimeout(tick, deleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timerRef.current);
  }, [wordIdx, deleting]); // eslint-disable-line

  return display;
}

/* ── Component ── */
const MainMenu = () => {
  const roleText = useTypewriter(ROLES);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!document.getElementById('mm-global-styles')) {
      const tag = document.createElement('style');
      tag.id = 'mm-global-styles';
      tag.textContent = globalStyles;
      document.head.appendChild(tag);
    }
    setMounted(true);
  }, []);

  const fadeStyle = (delay) => ({
    opacity:    mounted ? 1 : 0,
    transform:  mounted ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity .65s ease ${delay}s, transform .65s ease ${delay}s`,
  });

  return (
    <div style={{
      minHeight: '100vh',
      background: '#050b18',
      fontFamily: "'DM Sans', sans-serif",
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'clamp(32px, 6vw, 80px) clamp(20px, 5vw, 80px)',
      boxSizing: 'border-box',
    }}>

      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(124,92,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(124,92,255,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
      }} />

      {/* Ambient orbs */}
      <div style={{
        position: 'absolute', top: '-120px', left: '-100px',
        width: 'clamp(260px,40vw,420px)', height: 'clamp(260px,40vw,420px)',
        background: 'radial-gradient(circle, rgba(124,92,255,0.22) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
        animation: 'mm-orbFloat 9s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', bottom: '-100px', right: '-80px',
        width: 'clamp(220px,35vw,360px)', height: 'clamp(220px,35vw,360px)',
        background: 'radial-gradient(circle, rgba(34,211,238,0.16) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
        animation: 'mm-orbFloat2 12s ease-in-out infinite',
      }} />

      {/* Content */}
      <div style={{ width: '100%', maxWidth: 760, position: 'relative', zIndex: 1 }}>

        {/* Status badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24, ...fadeStyle(0.05) }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(124,92,255,0.1)',
            border: '0.5px solid rgba(124,92,255,0.35)',
            borderRadius: 99, padding: '6px 16px',
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: '50%',
              background: '#7C5CFF', display: 'inline-block',
              animation: 'mm-pulse 2s ease-in-out infinite',
            }} />
            <span style={{ fontSize: 12, color: '#a78bfa', letterSpacing: '.06em' }}>
              Available for work and Freelance
            </span>
          </div>
        </div>

        {/* Name */}
        <div style={{ textAlign: 'center', marginBottom: 10, ...fadeStyle(0.15) }}>
          <h1 style={{
            margin: 0,
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(38px, 8vw, 72px)',
            fontWeight: 800,
            lineHeight: 1.05,
            background: 'linear-gradient(90deg, #a78bfa, #22D3EE, #a78bfa)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'mm-shimmer 5s linear infinite',
          }}>
            AMIRUL ILMAN
          </h1>
        </div>

        {/* Typewriter role */}
        <div style={{ textAlign: 'center', height: 32, marginBottom: 20, ...fadeStyle(0.25) }}>
          <span style={{ fontSize: 'clamp(15px, 2.5vw, 19px)', color: '#94a3b8', fontWeight: 300 }}>
            {roleText}
          </span>
          <span style={{ color: '#22D3EE', animation: 'mm-blink 1s step-end infinite', fontSize: 'clamp(15px, 2.5vw, 19px)', marginLeft: 1 }}>|</span>
        </div>

        {/* Description */}
        <div style={{ textAlign: 'center', marginBottom: 36, ...fadeStyle(0.35) }}>
          <p style={{
            margin: '0 auto', maxWidth: 560,
            fontSize: 'clamp(14px, 2vw, 17px)',
            color: '#ffffff', lineHeight: 1.75, fontWeight: 400,
          }}>
            I build{' '}
            <span style={{ color: '#a78bfa', fontWeight: 500 }}>modern web apps</span>,{' '}
            <span style={{ color: '#22D3EE', fontWeight: 500 }}>AI-powered tools</span>, and
            interactive{' '}
            <span style={{ color: '#a78bfa', fontWeight: 500 }}>3D experiences</span>.
          </p>
        </div>

        {/* CTA buttons */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: 12,
          flexWrap: 'wrap', marginBottom: 44,
          ...fadeStyle(0.45),
        }}>
          <Button
            component={Link}
            to="/Mywork"
            className="mm-btn-primary"
            style={{
              background: 'linear-gradient(135deg, #7C5CFF 0%, #22D3EE 100%)',
              color: '#fff',
              padding: 'clamp(10px,2vw,13px) clamp(20px,4vw,32px)',
              borderRadius: 8,
              fontSize: 'clamp(13px,1.8vw,15px)',
              fontWeight: 500,
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: '.02em',
              boxShadow: '0 4px 18px rgba(124,92,255,0.2)',
              textTransform: 'none',
            }}
          >
            View Work →
          </Button>

          <Button
            component={Link}
            to="/ContactMe"
            className="mm-btn-outline"
            style={{
              background: 'transparent',
              color: '#a78bfa',
              border: '0.5px solid rgba(124,92,255,0.4)',
              padding: 'clamp(10px,2vw,13px) clamp(20px,4vw,32px)',
              borderRadius: 8,
              fontSize: 'clamp(13px,1.8vw,15px)',
              fontWeight: 500,
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: '.02em',
              textTransform: 'none',
            }}
          >
            Contact Me
          </Button>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: 'clamp(16px,4vw,40px)',
          marginBottom: 48, flexWrap: 'wrap',
          ...fadeStyle(0.52),
        }}>
          {STATS.map((s, i) => (
            <React.Fragment key={s.label}>
              {i > 0 && (
                <div style={{
                  width: '0.5px', background: 'rgba(255,255,255,0.07)',
                  alignSelf: 'stretch', minHeight: 36,
                }} />
              )}
              <div className="mm-stat" style={{ textAlign: 'center', cursor: 'default' }}>
                <div className="mm-stat-num" style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 'clamp(22px,4vw,28px)',
                  fontWeight: 700,
                  color: i === 1 ? '#22D3EE' : '#a78bfa',
                  lineHeight: 1,
                }}>
                  {s.value}
                </div>
                <div style={{ fontSize: 11, color: '#ffffff', marginTop: 4, letterSpacing: '.06em', textTransform: 'uppercase' }}>
                  {s.label}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, ...fadeStyle(0.58) }}>
          <div style={{ flex: 1, height: '0.5px', background: 'rgb(255, 255, 255)' }} />
          <span style={{ fontSize: 10, color: '#ffffff', letterSpacing: '.12em' }}>TECH STACK</span>
          <div style={{ flex: 1, height: '0.5px', background: 'rgb(255, 255, 255)' }} />
        </div>

        {/* Tech chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, ...fadeStyle(0.65) }}>
          {TECH.map((t, i) => (
            <div
              key={t.name}
              className="mm-chip"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: 'rgba(255,255,255,0.03)',
                border: '0.5px solid rgba(255,255,255,0.07)',
                borderRadius: 99,
                padding: 'clamp(4px,1vw,6px) clamp(10px,2vw,14px)',
                fontSize: 'clamp(11px,1.5vw,13px)',
                color: t.color, cursor: 'default',
                animation: `mm-chipIn .4s ease both ${0.65 + i * 0.03}s`,
                opacity: 0,
              }}
            >
              <span style={{ fontSize: 14, display: 'flex', alignItems: 'center' }}>
                {React.createElement(t.icon, { style: { color: t.color } })}
              </span>
              {t.name}
            </div>
          ))}
        </div>

        {/* Social links */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 36, flexWrap: 'wrap', ...fadeStyle(0.75) }}>
          {[
            { href: 'https://github.com/DevByAmirulilman',                                    label: 'GitHub'   },
            { href: 'https://www.linkedin.com/in/muhamad-amirul-ilman-bin-mazlan-35a88b212/', label: 'LinkedIn' },
            { href: 'mailto:ilman1amirul@gmail.com',                                          label: 'Email'    },
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="mm-social"
              style={{
                fontSize: 12, color: '#ffffff',
                border: '0.5px solid rgba(255,255,255,0.07)',
                borderRadius: 6, padding: '6px 14px',
                textDecoration: 'none',
                letterSpacing: '.04em',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};

export default MainMenu;