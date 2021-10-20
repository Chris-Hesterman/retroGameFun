import { createGlobalStyle } from 'styled-components';
import invaders from './fonts/invaders.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'invaders';
    src: url(${invaders})
      format('truetype');
    font-display: swap;
  }

  html {
    padding: 0;
    margin: 0;
  }

  body {
  margin: 0;
  height: 100vh;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


`;
