import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f7f7f7;
    color: #333;
    line-height: 1.6;
    padding: 1rem;
  }

  h1 {
    color: #2c3e50;
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

export default GlobalStyle;
