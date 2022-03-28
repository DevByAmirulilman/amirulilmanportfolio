import {createGlobalStyle} from 'styled-components'
import background1 from './images/bg-image.jpg'

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Luxurious Roman', cursive;
}
body{
    background-image: url(${background1});
    
}
`
export default GlobalStyle