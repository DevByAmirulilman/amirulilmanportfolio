//pages
import About from './components/About';
import Contact from './components/Contact';
import GlobalStyle from './components/GlobalStyle'
import Header from './components/Header';
import MyWork from './components/MyWork';
import {Routes,Route} from 'react-router-dom'

import Nav from './components/Nav';




function App() {
 
  return (
    <>
      <GlobalStyle/>
      <Nav/>
      <Routes>
      <Route path="about" element={ <About/>}/>
      <Route  path="mywork" element={ <MyWork/> }/>
      <Route path="contact" element={ <Contact/>}/>
      <Route exact path="/amirulilmanportfolio" element={ <Header/> }/>
      </Routes>
      </>
    
    
  );
}



export default App;
