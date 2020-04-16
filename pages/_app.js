import App from 'next/app'
import { ThemeProvider } from 'styled-components'

import { ContextProvider } from '../context'
import { theme } from '../components/styled'

class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props
    return (
        <ContextProvider>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </ContextProvider>
    )
  }
}

export default MyApp
