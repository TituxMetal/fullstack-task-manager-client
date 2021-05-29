import React from 'react'

import { Footer } from '#root/components/Footer'
import { NavBar } from '#root/components/NavBar'

import { Container, Wrapper } from './styled'

const Layout = ({ children }) => (
  <Wrapper>
    <NavBar />
    <Container>{children}</Container>
    <Footer />
  </Wrapper>
)

export default Layout
