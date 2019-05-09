import { createGlobalStyle } from 'styled-components'

export const theme = {
  primaryColor: 'hsl(0, 0%, 26%)',
  secondaryColor: 'hsl(34.3, 14%, 98%)',
  textColor: 'hsl(34, 78%, 91%)'
}

export const GlobalStyle = createGlobalStyle`
  @import '/static/fonts/roboto.css';
  body {
    padding: 0;
    margin: 0;
    font-size: 1rem;
    line-height: 2;
    background-color: ${theme.primaryColor};
    color: ${theme.textColor};
  }

  html { box-sizing: border-box; font-size: 20px; font-family: 'Roboto', sans-serif; }
  *, *:before, *:after { box-sizing: inherit; outline: none; }
  *::-moz-focus-inner { border: none; }

  body {
    padding: 0;
    margin: 0;
    font-size: 1rem;
    line-height: 2;
    background-color: ${theme.primaryColor};
    color: ${theme.textColor};
  }
`
