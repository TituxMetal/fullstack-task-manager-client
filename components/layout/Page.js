import { GlobalStyle, Content, Main } from '../styled'

const Page = ({ children }) => (
  <Main>
    <GlobalStyle />
    <Content>{children}</Content>
  </Main>
)

export default Page
