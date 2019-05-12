import App, { Container } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { ContextProvider } from '../context'
import { theme } from '../components/styled'

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <ContextProvider>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </ContextProvider>
      </Container>
    )
  }
}

export default MyApp
