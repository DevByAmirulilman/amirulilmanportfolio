import About from './components/About';
import Contact from './components/Contact';
import GlobalStyle from './components/GlobalStyle'
import Header from './components/Header';
import MyWork from './components/MyWork';
import Nav from './components/Nav';
import Grid from '@material-ui/core/Grid';


function App() {
  return (
    
    <div className="App">
      <Grid container justifyContent="center">
      <GlobalStyle/>
      <Grid xs={10} item>
      <Header/>
      </Grid>

      <Grid xs={10} item>
      <Nav/>
      </Grid>
      
      <Grid xs={10} item>
      <About/>
      </Grid>

      <Grid xs={10} item>
      <MyWork/>
      </Grid>
      
      <Grid xs={10}item>
      <Contact/>
      </Grid>
      
      </Grid>
    </div>
  );
}

export default App;
