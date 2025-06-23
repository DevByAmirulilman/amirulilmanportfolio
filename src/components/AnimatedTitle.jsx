import React, { useEffect, useRef } from 'react';
import { Typography } from '@mui/material';
import { animate } from 'animejs';

const AnimatedTitle = () => {
  const titles = [
    'Software Engineer',
    'Frontend Engineer',
    'Backend Engineer',
    'App Developer',
    'Full Stack Developer',
    'Three JS Developer',
  ];

  const textRef = useRef(null);
  const titleIndex = useRef(0);
  let typingTimeout;

  useEffect(() => {
    const typeTitle = async () => {
      const currentTitle = titles[titleIndex.current];
      let displayedText = '';

      for (let i = 0; i < currentTitle.length; i++) {
        displayedText += currentTitle[i];
        if (textRef.current) {
          textRef.current.textContent = displayedText;

          animate(textRef.current, {
            opacity: [0.5, 1],
            duration: 80,
            easing: 'easeInOutSine',
          });
        }
        await new Promise((res) => setTimeout(res, 80));
      }

      // Wait before clearing
      typingTimeout = setTimeout(() => {
        clearTitle();
      }, 2000);
    };

    const clearTitle = async () => {
      const currentTitle = titles[titleIndex.current];
      for (let i = currentTitle.length; i >= 0; i--) {
        if (textRef.current) {
          textRef.current.textContent = currentTitle.slice(0, i);

          animate(textRef.current, {
            opacity: [1, 0.5],
            duration: 50,
            easing: 'easeInOutSine',
          });
        }
        await new Promise((res) => setTimeout(res, 30));
      }

      // Move to next title
      titleIndex.current = (titleIndex.current + 1) % titles.length;
      typeTitle(); // Start next
    };

    typeTitle(); // Initial

    return () => {
      clearTimeout(typingTimeout);
    };
  }, []);

  return (
    <Typography
      variant="h3"
      ref={textRef}
      sx={{
        fontFamily: 'Sofadi One',
        mt: 1,
        fontSize: { xs: 18, sm: 22 },
        color: '#141e31',
        backgroundColor: '#ebbf4d',
        display: 'inline-block',
        width: 'fit-content',
        px: 1,
        borderRadius: 1,
        whiteSpace: 'pre', // ensure spaces show properly
      }}
    >
      {/* typing text will be inserted here */}
    </Typography>
  );
};

export default AnimatedTitle;
