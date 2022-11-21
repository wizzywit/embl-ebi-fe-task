import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    border: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  
  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: white;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 5px;
    transition: background 0.25s linear;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: white;
  }

  body {
    width: 100vw;
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
