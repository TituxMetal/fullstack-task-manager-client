import { createGlobalStyle } from 'styled-components'

import * as theme from './colors'

const GlobalStyle = createGlobalStyle`
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

  ul { list-style-type: none; margin: 0; padding: 0; }
`

export default GlobalStyle
