import { createGlobalStyle } from 'styled-components';
import bgImg from '../../images/bg.gif';

export const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,0.50)100%), url(${bgImg}) center no-repeat;  
    background-size: cover;
    color: white;
    padding: 0;
    margin: 0;
    font-family: 'Arial Blank', serif;
  }
`;
