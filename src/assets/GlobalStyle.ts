import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --clr-purple-linear: linear-gradient(hsl(249, 99%, 64%), hsl(278, 94%, 30%));
    --clr-red: hsl(0, 100%, 66%);
    --clr-white: hsl(0, 0%, 100%);
    --clr-light-grayish-violet: hsl(270, 3%, 87%);
    --clr-dark-grayish-violet: hsl(279, 6%, 55%);
    --clr-very-dark-violet: hsl(278, 68%, 11%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: inherit;
    border: 0;
  }
  
  body {
    font-family: 'Space Grotesk';
    min-height: 100vh;
  }

  img {
    user-select: none;
    display: block;
  }
`
