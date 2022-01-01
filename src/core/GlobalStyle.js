import '@fontsource/roboto'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles } from 'twin.macro'

const BaseStyles = createGlobalStyle({
  ...tw`antialiased`,
  body: {
    ...tw`bg-gray-700 font-sans text-white text-xl`
  }
})

const GlobalStyle = ({ children }) => (
  <>
    <GlobalStyles />
    <BaseStyles />
    {children}
  </>
)

export default GlobalStyle
