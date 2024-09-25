//pages
import About from './components/About';
import Contact from './components/Contact';
import GlobalStyle from './components/GlobalStyle'
import Header from './components/Header';
import MyWork from './components/MyWork';
import {Routes,Route} from 'react-router-dom'
import { createTheme, ThemeProvider, Typography } from '@mui/material';
import Nav from './components/Nav';

function App() {

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '2rem',
        '@media (min-width:300px)': {
          fontSize: '1rem',
        },
        '@media (min-width:600px)': {
          fontSize: '1rem',
        },
        '@media (min-width:900px)': {
          fontSize: '2rem',
        },
      },
      h2: {
        fontSize: '1.5rem',
        '@media (min-width:300px)': {
          fontSize: '1rem',
        },
        '@media (min-width:600px)': {
          fontSize: '1rem',
        },
        '@media (min-width:900px)': {
          fontSize: '2rem',
        },
      },
      // Add more styles as needed
    },
  });
 
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Nav/>
      <Routes>
      <Route path="about" element={ <About/>}/>
      <Route  path="mywork" element={ <MyWork/> }/>
      <Route path="contact" element={ <Contact/>}/>
      <Route exact path="/amirulilmanportfolio" element={ <Header/> }/>
      </Routes>
    </ThemeProvider>
    
    
  );
}



export default App;
