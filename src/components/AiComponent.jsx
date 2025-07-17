import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  CircularProgress,
} from '@mui/material';
import axios from 'axios';
import { animate } from 'animejs'; // ✅ Correct import

const AiComponent = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);
  const responseRef = useRef(null);

const getChatGPTResponse = async (message) => {
  try {
    const response = await axios.post('https://open-ai-who5.vercel.app/api/ask', {
      messages: [{ role: 'user', content: message }],
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Serverless API error:', error);
    return 'Something went wrong.';
  }
};


  const handleSubmit = async () => {
    const reply = await getChatGPTResponse(input);
    setResponse(reply);

        requestAnimationFrame(() => {
      if (responseRef.current) {
        animate({
          targets: responseRef.current,
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 500,
          easing: 'easeOutCubic',
        });
      }
    });
  };

useEffect(() => {
  requestAnimationFrame(() => {
    if (!containerRef.current) return;

    animate({
      targets: containerRef.current,
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 800,
      easing: 'easeOutCubic',
    });
  });
}, []);



  return (
    <Box
      ref={containerRef}
      sx={{
        maxWidth: 600,
        mx: 'auto',
        mt: 6,
        p: 3,
        backgroundColor: '#141e31',
        color: '#E1D7B7',
        borderRadius: 3,
        boxShadow: '0px 4px 20px rgba(0,0,0,0.4)',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          mb: 2,
          fontWeight: 'bold',
          textAlign: 'center',
          fontFamily: 'Protest Guerrilla',
        }}
      >
        Ask ChatGPT
      </Typography>

      <TextField
        fullWidth
        multiline
        rows={4}
        placeholder="Ask something like 'Write a song about AI'"
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        sx={{
          mb: 2,
          input: { color: '#E1D7B7' },
          textarea: { color: '#E1D7B7' },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#E1D7B7' },
            '&:hover fieldset': { borderColor: '#E1D7B7' },
            '&.Mui-focused fieldset': { borderColor: '#E1D7B7' },
          },
          '& label': { color: '#E1D7B7' },
        }}
        InputLabelProps={{ style: { color: '#E1D7B7' } }}
      />

      <Button
        variant="contained"
        fullWidth
        onClick={handleSubmit}
        disabled={!input || loading}
        sx={{
          backgroundColor: '#E1D7B7',
          color: '#141e31',
          fontWeight: 600,
          '&:hover': {
            backgroundColor: '#f0e6c6',
          },
        }}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : 'ASK'}
      </Button>

      {response && (
        <Paper
          ref={responseRef}
          sx={{
            mt: 3,
            p: 2,
            backgroundColor: '#1f2a44',
            color: '#E1D7B7',
            whiteSpace: 'pre-wrap',
          }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
            Response:
          </Typography>
          <Typography variant="body1">{response}</Typography>
        </Paper>
      )}
    </Box>
  );
};

export default AiComponent;
