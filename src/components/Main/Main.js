import React from 'react'

import { Menu } from './Menu'
import { Content, Footer, Page } from './styled'

const Main = ({ children }) => (
  <Page>
    <Menu />
    <Content>
      {children}
    </Content>
    <Footer>
      <p>Created with love by TituxMetal</p>
    </Footer>
  </Page>
)

export default Main
