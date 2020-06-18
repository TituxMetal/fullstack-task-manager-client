import styled from 'styled-components'

const Footer = styled.footer`
  align-items: center;
  background-color: ${({ theme }) => theme.blackAlpha3};
  color: ${({ theme }) => theme.textColor};
  display: flex;
  font-size: 0.8rem;
  justify-content: center;
  max-width: 100vw;
`

export default Footer
