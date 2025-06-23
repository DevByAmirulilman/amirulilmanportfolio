import React from 'react';
import { Card, Box, Grid, Typography, Button, Link } from '@mui/material';
import { Canvas } from '@react-three/fiber';
import Iphone from '../components/Iphone';
import { FaFilePdf, FaEnvelope, FaGithub, FaPhone } from "react-icons/fa6";
import CV from '../assets/cv.pdf';
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import LocationOnIcon from '@mui/icons-material/LocationOn';


const ContactMe = () => {
  const whatsappUrl = "https://wa.me/60195756260?text=Hi%20Amirul%2C%20I%20saw%20your%20portfolio!";
  const linkedInUrl = "https://www.linkedin.com/in/muhamad-amirul-ilman-bin-mazlan-35a88b212/";


  return (
    <Card
      sx={{
        p: { xs: 2, sm: 4 },
        width: '90%',
        maxWidth: '1200px',
        mx: 'auto',
        backgroundColor: '#141e31',
        borderRadius: 3,
        boxShadow: 3,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          color: '#E1D7B7',
          fontFamily: 'Protest Guerrilla',
          fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
          mb: 4,
        }}
      >
        Get In Touch
      </Typography>

      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box sx={{ width: '100%', height: { xs: 300, sm: 400, md: 450 } }}>
            <Canvas className="r3f">
              <Iphone />
            </Canvas>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ px: { xs: 1, sm: 2 }, textAlign: { xs: 'center', md: 'left' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <FaEnvelope style={{ color: '#E1D7B7', marginRight: 8 }} />
              <Typography sx={{ color: '#fff', fontSize: '1.05rem', fontFamily: 'Sofadi One' }}>
                ilman1amirul@gmail.com
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <FaGithub style={{ color: '#E1D7B7', marginRight: 8 }} />
              <Link
                href="https://github.com/DevByAmirulilman"
                target="_blank"
                sx={{
                  color: '#E1D7B7',
                  fontSize: '1.05rem',
                  fontFamily: 'Sofadi One',
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                github.com/DevByAmirulilman
              </Link>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <FaPhone style={{ color: '#E1D7B7', marginRight: 8 }} />
              <Typography sx={{ color: '#fff', fontSize: '1.05rem', fontFamily: 'Sofadi One' }}>
                019-5756260
              </Typography>
            </Box>


            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <FaWhatsapp style={{ color: '#25D366', marginRight: 8 }} />
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#E1D7B7',
                  fontSize: '1.05rem',
                  fontFamily: 'Sofadi One',
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                WhatsApp Me
              </Link>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <FaLinkedin style={{ color: '#0077B5', marginRight: 8 }} />
              <Link
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#E1D7B7',
                  fontSize: '1.05rem',
                  fontFamily: 'Sofadi One',
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                LinkedIn Profile
              </Link>
            </Box>
            {/* Personal Message */}


          </Box>
          <Box>
            <Typography
              sx={{
                mt: 3,
                color: '#E1D7B7',
                fontStyle: 'italic',
                fontSize: '0.95rem',
                fontFamily: 'Sofadi One',
              }}
            >
              I’m open to freelance projects, collaborations, and full-time roles. Feel free to reach out!
            </Typography>

            {/* Location */}
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
              <LocationOnIcon sx={{ color: '#E1D7B7', mr: 1 }} />
              <Typography sx={{ color: 'white', fontFamily: 'Sofadi One' }}>
                Kuala Lumpur, Malaysia
              </Typography>
            </Box>

            {/* Call to Action */}
            <Button
              href="mailto:ilman1amirul@gmail.com"
              variant="outlined"
              sx={{
                display:'flex',
                justifyContent:'center',
                mt: 3,
                borderColor: '#E1D7B7',
                color: '#E1D7B7',
                fontFamily: 'Protest Guerrilla',
                '&:hover': {
                  backgroundColor: '#E1D7B7',
                  color: '#141e31',
                },
              }}
            >
              Let’s Work Together
            </Button>
          </Box>
              <Box sx={{display:'flex', justifyContent:'center', mt:2}}> 
            <Button
              target="_blank"
              component="a"
              href={CV}
              download="Amirul-Ilman-CV.pdf"
              startIcon={<FaFilePdf />}
              variant="contained"
              sx={{
                backgroundColor: '#E1D7B7',
                color: '#141e31',
                fontFamily: 'Protest Guerrilla',
                '&:hover': {
                  backgroundColor: '#d6c79d',
                },
                fontSize: { xs: '0.9rem', sm: '1rem' },
                px: 3,
                py: 1.5,
              }}
            >
              Download CV
            </Button>
              </Box>

        </Grid>
      </Grid>
    </Card>
  );
};

export default ContactMe;
