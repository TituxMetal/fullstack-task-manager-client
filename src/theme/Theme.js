import '@fontsource/roboto'
import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

import * as colors from './colors'

const MainStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.textColor};
    ${tw`font-sans text-xl antialiased`};
  }
`

const Theme = ({ children }) => (
  <ThemeProvider theme={colors}>
    <BaseStyles />
    <MainStyle />
    {children}
  </ThemeProvider>
)

export default Theme
