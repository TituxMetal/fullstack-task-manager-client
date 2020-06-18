import styled from 'styled-components'

const Nav = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: 980px) {
    margin: auto;
    max-width: 800px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 980px;
  }
`

export default Nav
