import { HtmlHead, NavBar } from '../layout'
import { GlobalStyle, Content, Footer, Main } from '../styled'

const Page = ({ children, title }) => (
  <Main>
    <GlobalStyle />
    <HtmlHead title={title} />
    <NavBar />
    <Content>{children}</Content>
    <Footer>
      <p>Created with love by TuxiMetal</p>
    </Footer>
  </Main>
)

export default Page
