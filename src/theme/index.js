import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './GlobalStyle'
import * as theme from './colors'

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

export default Theme
