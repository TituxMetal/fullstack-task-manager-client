import styled from 'styled-components'

import { Container } from '~/components/shared'

const NavContainer = styled(Container)`
  background-color: ${({ theme }) => theme.blackAlpha3};
  padding: .5rem 1rem;
`
export default NavContainer
