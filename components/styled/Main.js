import styled from 'styled-components'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => props.theme.primaryColor};
`

export default Main
