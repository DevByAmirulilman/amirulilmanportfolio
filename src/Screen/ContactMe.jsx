import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { FaFilePdf, FaEnvelope, FaGithub, FaPhone } from "react-icons/fa6";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import LocationOnIcon from '@mui/icons-material/LocationOn';

/* ── Global styles ── */
const contactStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

  @keyframes ct-shimmer   { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
  @keyframes ct-orbFloat  { 0%,100%{transform:translate(0,0)} 50%{transform:translate(16px,-18px)} }
  @keyframes ct-orbFloat2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-14px,16px)} }
  @keyframes ct-glowPulse { 0%,100%{opacity:.18} 50%{opacity:.38} }
  @keyframes ct-rowIn     { from{opacity:0;transform:translateX(-18px)} to{opacity:1;transform:translateX(0)} }
  @keyframes ct-pulse     { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.2);opacity:.6} }

  .ct-contact-row {
    transition: background .2s ease, transform .22s cubic-bezier(.34,1.4,.64,1);
    border-radius: 10px;
    cursor: pointer;
  }
  .ct-contact-row:hover {
    background: rgba(124,92,255,0.07) !important;
    transform: translateX(6px);
  }
  .ct-contact-row:hover .ct-icon-wrap {
    border-color: rgba(124,92,255,0.4) !important;
    background: rgba(124,92,255,0.12) !important;
  }

  .ct-btn-primary {
    transition: all .22s cubic-bezier(.34,1.4,.64,1) !important;
  }
  .ct-btn-primary:hover {
    opacity: .88 !important;
    transform: translateY(-2px) !important;
    box-shadow: 0 8px 28px rgba(124,92,255,.32) !important;
  }
  .ct-btn-outline {
    transition: all .22s cubic-bezier(.34,1.4,.64,1) !important;
  }
  .ct-btn-outline:hover {
    background: rgba(124,92,255,0.1) !important;
    border-color: rgba(124,92,255,0.5) !important;
    transform: translateY(-2px) !important;
  }

  .ct-cursor-glow {
    position: fixed;
    width: 220px; height: 220px;
    background: radial-gradient(circle, rgba(124,92,255,0.14), transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%,-50%);
    z-index: 0;
    transition: left .1s linear, top .1s linear;
    animation: ct-glowPulse 3s ease-in-out infinite;
  }
`;

const CONTACTS = [
  {
    icon: FaEnvelope,
    color: '#a78bfa',
    label: 'Email',
    value: 'ilman1amirul@gmail.com',
    href: 'mailto:ilman1amirul@gmail.com',
  },
  {
    icon: FaGithub,
    color: '#94a3b8',
    label: 'GitHub',
    value: 'DevByAmirulilman',
    href: 'https://github.com/DevByAmirulilman',
  },
  {
    icon: FaPhone,
    color: '#22D3EE',
    label: 'Phone',
    value: '019-5756260',
    href: 'tel:+60195756260',
  },
  {
    icon: FaWhatsapp,
    color: '#25D366',
    label: 'WhatsApp',
    value: 'Message me on WhatsApp',
    href: 'https://wa.me/60195756260?text=Hi%20Amirul%2C%20I%20saw%20your%20portfolio!',
  },
  {
    icon: FaLinkedin,
    color: '#0077B5',
    label: 'LinkedIn',
    value: 'Muhamad Amirul Ilman',
    href: 'https://www.linkedin.com/in/muhamad-amirul-ilman-bin-mazlan-35a88b212/',
  },
];

const ContactMe = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (!document.getElementById('ct-page-styles')) {
      const tag = document.createElement('style');
      tag.id = 'ct-page-styles';
      tag.textContent = contactStyles;
      document.head.appendChild(tag);
    }
    setMounted(true);

    const move = (e) => {
      const el = document.querySelector('.ct-cursor-glow');
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

  return (
    <Box sx={{
      minHeight: '100vh',
      background: '#050b18',
      fontFamily: "'DM Sans', sans-serif",
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      px: { xs: 2, sm: 4, md: 6 },
      py: { xs: 6, md: 8 },
      boxSizing: 'border-box',
    }}>

      <div className="ct-cursor-glow" />

      {/* Grid overlay */}
      <Box sx={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(124,92,255,0.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(124,92,255,0.035) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 90% 80% at 50% 50%, black 30%, transparent 100%)',
      }} />

      {/* Orbs */}
      <Box sx={{
        position: 'absolute', top: -100, left: -100,
        width: 'clamp(200px,32vw,360px)', height: 'clamp(200px,32vw,360px)',
        background: 'radial-gradient(circle, rgba(124,92,255,0.2) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
        animation: 'ct-orbFloat 10s ease-in-out infinite',
      }} />
      <Box sx={{
        position: 'absolute', bottom: -80, right: -80,
        width: 'clamp(180px,28vw,320px)', height: 'clamp(180px,28vw,320px)',
        background: 'radial-gradient(circle, rgba(34,211,238,0.13) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
        animation: 'ct-orbFloat2 13s ease-in-out infinite',
      }} />

      {/* ── Main card ── */}
      <Box sx={{
        width: '100%', maxWidth: 620,
        position: 'relative', zIndex: 1,
      }}>

        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 5, ...fadeStyle(0.05) }}>
          <Typography sx={{
            fontSize: 11, letterSpacing: '.14em', color: '#ffffff',
            mb: 1, fontFamily: "'DM Sans', sans-serif",
          }}>
            LET'S TALK
          </Typography>
          <Typography sx={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(30px, 6vw, 52px)',
            fontWeight: 800, lineHeight: 1.1,
            background: 'linear-gradient(90deg, #a78bfa, #22D3EE, #a78bfa)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'ct-shimmer 5s linear infinite',
          }}>
            Get In Touch
          </Typography>
          <Typography sx={{
            color: '#ffffff', mt: 1.5,
            fontSize: 'clamp(13px, 1.8vw, 15px)',
            fontFamily: "'DM Sans', sans-serif",
            maxWidth: 420, mx: 'auto', lineHeight: 1.7,
          }}>
            Open to freelance projects, collaborations, and full-time roles.
            Feel free to reach out any time.
          </Typography>
        </Box>

        {/* Status badge */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5, ...fadeStyle(0.15) }}>
          <Box sx={{
            display: 'inline-flex', alignItems: 'center', gap: 1,
            background: 'rgba(124,92,255,0.1)',
            border: '0.5px solid rgba(124,92,255,0.3)',
            borderRadius: 99, px: 2, py: .8,
          }}>
            <Box sx={{
              width: 7, height: 7, borderRadius: '50%',
              background: '#7C5CFF',
              animation: 'ct-pulse 2s ease-in-out infinite',
            }} />
            <Typography sx={{ fontSize: 12, color: '#a78bfa', letterSpacing: '.05em' }}>
              Available for work & freelance
            </Typography>
          </Box>
        </Box>

        {/* Contact card */}
        <Box style={fadeStyle(0.22)} sx={{
          background: 'rgba(255,255,255,0.025)',
          border: '0.5px solid rgba(255,255,255,0.07)',
          borderRadius: 3, overflow: 'hidden',
          mb: 3, position: 'relative',
        }}>
          {/* Top accent */}
          <Box sx={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 2,
            background: 'linear-gradient(90deg, #7C5CFF, #22D3EE)',
          }} />

          {CONTACTS.map((c, i) => (
            <Box
              key={c.label}
              component="a"
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="ct-contact-row"
              sx={{
                display: 'flex', alignItems: 'center', gap: 2,
                px: { xs: 2.5, md: 3 }, py: 2,
                textDecoration: 'none',
                borderBottom: i < CONTACTS.length - 1
                  ? '0.5px solid rgba(255,255,255,0.04)' : 'none',
                opacity: 0,
                animation: `ct-rowIn .4s ease both ${0.25 + i * 0.07}s`,
              }}
            >
              {/* Icon tile */}
              <Box className="ct-icon-wrap" sx={{
                width: 38, height: 38, borderRadius: '10px',
                background: 'rgba(255,255,255,0.03)',
                border: '0.5px solid rgba(255,255,255,0.07)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
                transition: 'all .2s ease',
              }}>
                <c.icon style={{ color: c.color, fontSize: 17 }} />
              </Box>

              {/* Text */}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography sx={{
                  fontSize: 10, color: '#ffffff',
                  letterSpacing: '.08em', mb: .2,
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                  {c.label.toUpperCase()}
                </Typography>
                <Typography sx={{
                  fontSize: 'clamp(12px, 1.8vw, 14px)',
                  color: '#d3c3c3',
                  fontFamily: "'DM Sans', sans-serif",
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                }}>
                  {c.value}
                </Typography>
              </Box>

              {/* Arrow */}
              <Typography sx={{ color: '#1e2d40', fontSize: 16, flexShrink: 0 }}>→</Typography>
            </Box>
          ))}
        </Box>

        {/* Location row */}
        <Box style={fadeStyle(0.42)} sx={{
          display: 'flex', alignItems: 'center', gap: 1.5,
          background: 'rgba(255,255,255,0.02)',
          border: '0.5px solid rgba(255,255,255,0.06)',
          borderRadius: 2, px: 3, py: 1.5, mb: 4,
        }}>
          <LocationOnIcon sx={{ color: '#a78bfa', fontSize: 18 }} />
          <Typography sx={{
            fontSize: 13, color: '#ffffff',
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Kuala Lumpur, Malaysia 🇲🇾
          </Typography>
        </Box>

        {/* CTA buttons */}
        <Box style={fadeStyle(0.5)} sx={{
          display: 'flex', gap: 2, flexWrap: 'wrap',
        }}>
          <Button
            href="mailto:ilman1amirul@gmail.com"
            className="ct-btn-primary"
            sx={{
              flex: 1,
              background: 'linear-gradient(135deg, #7C5CFF 0%, #22D3EE 100%)',
              color: '#fff',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500, textTransform: 'none',
              fontSize: 'clamp(13px,1.8vw,15px)',
              py: 1.4, borderRadius: 2,
              boxShadow: '0 4px 18px rgba(124,92,255,0.2)',
              minWidth: 160,
            }}
          >
            ✉ Let's Work Together
          </Button>

          <Button
            component="a"
            href="/cv_2026.pdf" 
            download="Amirul-Ilman-CV.pdf"
            target="_blank"
            className="ct-btn-outline"
            startIcon={<FaFilePdf style={{ fontSize: 14 }} />}
            sx={{
              flex: 1,
              background: 'transparent',
              color: '#a78bfa',
              border: '0.5px solid rgba(124,92,255,0.35)',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500, textTransform: 'none',
              fontSize: 'clamp(13px,1.8vw,15px)',
              py: 1.4, borderRadius: 2,
              minWidth: 160,
            }}
          >
            Download CV
          </Button>
        </Box>

      </Box>
    </Box>
  );
};

export default ContactMe;