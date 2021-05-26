import styled from 'styled-components'

import { Container } from '#root/components/shared'

const NavContainer = styled(Container)`
  background-color: ${({ theme }) => theme.blackAlpha3};
  padding: 0.5rem 1rem;
`
export default NavContainer
